import User from '../utils/models/user'

export default {
  Query: {
    async user(root, args, context) {
      const { username } = args
      const findOne = await User.findOne({ username: username })
      if (findOne === null) throw new Error('Mi error me cago en dios')
      return findOne
    },
    get() {
      return { message: 'queeeeee' }
    },
  },
}
