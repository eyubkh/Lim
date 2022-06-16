import Notification from '@models/notification'
import User from '@models/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import errorHandler from '../../middleware/errorHandler'
import connectDB from '../../middleware/mongodb'

const handler = async (request, response) => {
  const { email, username, password } = request.body
  try {
    const exist = await User.findOne({ username: username })
    if (exist) throw new Error('Username already exist')
    if (username.length < 4) throw new Error('Username too short')
    if (password.length < 4) throw new Error('Password too short')
    const passHash = await bcrypt.hash(password, 10)
    const user = new User({
      username,
      password: passHash,
      imgPath:
        'https://s3.eu-west-2.amazonaws.com/lim.project.s3.bucket/1654602370293549-200x200.jpg',
      likes: [],
      friends: [],
      posts: [],
    })

    const notification = await Notification({
      user: user.id,
      notifi: [],
      notifiCount: 0,
    })
    await user.save().catch((error) => {
      throw new Error(error)
    })
    await notification.save().catch((error) => {
      throw new Error(error)
    })

    const jwtPlainObject = {
      username: user.username,
      password: user.password,
      id: user.id,
    }
    const jwtDecodeObject = jwt.sign(jwtPlainObject, process.env.JWT_KEY)

    response.status(200).send({ jwt: jwtDecodeObject })
  } catch (error) {
    errorHandler(error, response)
  }
}

export default connectDB(handler)
