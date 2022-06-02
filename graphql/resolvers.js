import User from '../models/user'

export default {
  Query: {
    get() {
      return { message: 'queeeeee' }
    },
  },
  Mutation: {
    async user(root, args, context) {
      const { username } = args
      const findOne = await User.findOne({ username: username })
      if (findOne === null) throw new Error('Mi error me cago en dios')
      return findOne
    },
  },
}
