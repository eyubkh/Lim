import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import errorHandler from '../../../middleware/errorHandler'
import connectDB from '../../../middleware/mongodb'
import User from '../../../models/user'

const handler = async (request, response) => {
  const { username, password } = request.body
  try {
    const { profile, id } = await User.findOne({ 'profile.username': username })
    const isCorrect = await bcrypt.compare(password, profile.password)
    if (isCorrect) {
      const object = {
        username,
        password: profile.password,
        id,
      }
      const token = jwt.sign(object, process.env.JWT_KEY)
      response.send({ jwt: token })
    } else {
      throw TypeError()
    }
  } catch (error) {
    errorHandler(error, response)
  }
}

export default connectDB(handler)
