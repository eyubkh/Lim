import bcrypt from 'bcrypt'
import errorHandler from '../../utils/middleware/errorHandler'
import connectDB from '../../utils/middleware/mongodb'
import User from '../../utils/models/user'

const handler = async (request, response) => {
  if (request.method === 'POST') {
    const { password } = request.body
    const hash = await bcrypt.hash(password, 10)
    const newUser = new User({
      ...request.body,
      password: hash,
    })
    await newUser
      .save()
      .then(() => {
        response.status(200).json({ message: 'user create' })
      })
      .catch((error) => {
        errorHandler(error, response)
      })
  } else {
    const result = await User.find({})
    response.status(200).json(result)
  }
}

export default connectDB(handler)
