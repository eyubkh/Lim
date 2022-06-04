import { UserInputError } from 'apollo-server-micro'
import User from '../models/user'
export default {
  Query: {
    async user(root, args, ctx) {
      if (!ctx) return null
      const user = await User.findOne({ _id: ctx.id })
      if (!user) throw new UserInputError('not user found')
      return user
    },
  },
  Mutation: {
    async createPost(root, args, ctx) {
      if (!ctx) throw new UserInputError('please login')
      const user = await User.findOne({ _id: ctx.id })
      const newPost = {
        text: args.text,
        likes: 0,
        time: Date.now(),
        username: user.profile.username,
      }
      user.posts = user.posts.concat(newPost)
      await user.save().then(() => console.log('post saved', newPost))
      return newPost
    },
  },
}
