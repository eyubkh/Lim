import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import errorHandler from '../../middleware/errorHandler'
import connectDB from '../../middleware/mongodb'
import User from '../../models/user'

const handler = async (request, response) => {
  const { email, username, password } = request.body
  try {
    const exist = await User.findOne({ username: username })
    if (exist) throw new Error('Username already exist')
    if (username.length < 4) throw new Error('Username too short')
    if (password.length < 4) throw new Error('Password too short')
    const passHash = await bcrypt.hash(password, 10)
    const newUser = new User({
      username,
      password: passHash,
      imgPath:
        'https://s3.eu-west-2.amazonaws.com/lim.project.s3.bucket/1654602370293549-200x200.jpg',
      likes: [],
      friends: [],
      posts: [],
    })
    await newUser.save().catch((error) => {
      throw new Error(error)
    })

    const jwtPlainObject = {
      username: newUser.username,
      password: newUser.password,
      id: newUser.id,
    }
    const jwtDecodeObject = jwt.sign(jwtPlainObject, process.env.JWT_KEY)

    response.status(200).send({ jwt: jwtDecodeObject })
  } catch (error) {
    errorHandler(error, response)
  }
}

export default connectDB(handler)
