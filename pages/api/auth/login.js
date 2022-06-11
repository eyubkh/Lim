import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import errorHandler from '../../../middleware/errorHandler'
import connectDB from '../../../middleware/mongodb'
import User from '../../../models/user'

const handler = async (request, response) => {
  const { username, password } = request.body
  try {
    const user = await User.findOne({ username })
    if (!user) throw new Error('Wrong credentials')
    const isCorrect = await bcrypt.compare(password, user.password)
    if (!isCorrect) throw new Error('Wrong credentials')

    const object = {
      username: user.username,
      password: user.password,
      id: user.id,
    }
    const token = jwt.sign(object, process.env.JWT_KEY)
    response.send({ jwt: token })
  } catch (error) {
    errorHandler(error, response)
  }
}

export default connectDB(handler)
