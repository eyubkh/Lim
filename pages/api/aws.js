import formidable from 'formidable-serverless'
import fs from 'fs'
import jwt from 'jsonwebtoken'
import User from '../../models/user'
import { client } from '../../utils/s3'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default function (request, response) {
  if (request.method === 'POST') {
    const promise = new Promise(async (resolve, reject) => {
      const form = new formidable.IncomingForm()
      form.parse(request, async (err, fields, files) => {
        if (err || files.image === undefined) {
          throw Error(' image parse erorr')
        }
        const fileStrem = fs.createReadStream(files.image.path)
        const fileName = Date.now() + files.image.name
        const uploadBucket = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Body: fileStrem,
          Key: fileName,
          ContentType: 'image/jpeg',
        }
        const imgPath = `https://s3.${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${fileName}`
        const token = jwt.verify(fields.token, process.env.JWT_KEY)
        await client.putObject(uploadBucket)
        await User.findById(token.id).updateOne({ imgPath: imgPath })
        resolve(imgPath)
      })
    })
    return promise.then((imagePath) => response.status(200).send({ imagePath }))
  } else {
    response.status(300)
  }
}
