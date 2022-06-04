import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import errorHandler from '../../middleware/errorHandler'
import connectDB from '../../middleware/mongodb'
import User from '../../models/user'

const handler = async (request, response) => {
  const { username, password } = request.body
  try {
    const exist = await User.findOne({ 'profile.username': username })
    if (exist) throw TypeError('username taken')
    const passHash = await bcrypt.hash(password, 10)
    const newUser = new User({
      profile: {
        username,
        password: passHash,
      },
      posts: [{}],
    })
    await newUser
      .save()
      .then(() => {
        console.log('user save')
      })
      .catch((error) => {
        throw Error(error)
      })
    const jwtPlainObject = {
      username: newUser.profile.username,
      password: newUser.profile.password,
      id: newUser.id,
    }
    const jwtDecodeObject = jwt.sign(jwtPlainObject, process.env.JWT_KEY)

    response.status(200).send({ jwt: jwtDecodeObject })
  } catch (error) {
    errorHandler(error, response)
  }
}

export default connectDB(handler)
