import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import errorHandler from '../../../middleware/errorHandler'
import connectDB from '../../../middleware/mongodb'
import User from '../../../models/user'

const handler = async (request, response) => {
  const { username, password } = request.body
  try {
    const { password: passHash, id } = await User.findOne({ username })
    const isCorrect = await bcrypt.compare(password, passHash)
    if (isCorrect) {
      const object = {
        username,
        password: passHash,
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
