import { UserInputError } from 'apollo-server-micro'
import Comment from '../models/comment'
import Post from '../models/post'
import User from '../models/user'

export default {
  Query: {
    async userData(root, args, ctx) {
      if (!ctx) return null
      let user = await User.findById(ctx.id)
        .populate({
          path: 'friends',
          populate: {
            path: 'posts',
            populate: 'user',
          },
        })
        .populate({
          path: 'friends',
          populate: {
            path: 'posts',
            populate: 'comments',
          },
        })
        .populate({
          path: 'posts',
          populate: {
            path: 'user',
            model: User,
          },
        })
        .populate({
          path: 'posts',
          populate: {
            path: 'comments',
            model: Comment,
          },
        })
      if (!user) throw new UserInputError('not user found')
      return user
    },
  },
  Mutation: {
    async createPost(root, args, ctx) {
      const { text } = args
      if (!ctx) throw new UserInputError('please login')
      let newPost = await Post.create({
        user: ctx.id,
        iat: Date.now(),
        text,
        likeCount: 0,
        likes: [],
      })
      const user = await User.findOne({ _id: ctx.id })
      user.posts = user.posts.concat(newPost.id)
      await newPost.save()
      await user.save()
      return newPost
    },
    async like(root, args, ctx) {
      if (!ctx) return null
      const { id } = args
      const user = await User.findById(ctx.id)
      const post = await Post.findById(id)
      if (!post.likes.includes(user.id)) {
        post.likeCount += 1
        post.likes = post.likes.concat(user.id)
        user.likes = user.likes.concat(post.id)
      } else {
        post.likeCount -= 1
        post.likes = post.likes.filter((id) => id != user.id)
        user.likes = user.likes.filter((id) => id != post.id)
      }
      await post.save()
      await user.save()
      return 'post liked'
    },
    async friendSearch(root, args, ctx) {
      if (!ctx) return null
      const { text } = args
      const { friends } = await User.findById(ctx.id)
      const users = await User.find({
        username: { $regex: text },
        _id: { $nin: [...friends, ctx.id] },
      })
      if (text.length === 0) return []
      return users
    },
    async addFriend(root, args, ctx) {
      if (!ctx) return null
      const { id } = args
      const user = await User.findById(ctx.id)
      if (user.friends.includes(id)) return 'friend already in'
      user.friends = user.friends.concat(id)
      user.save()
      return 'user added'
    },
    async addComment(root, args, ctx) {
      if (!ctx) return null
      const { text, postId } = args
      const newComment = new Comment({
        user: ctx.id,
        text,
        likes: [],
      })
      const post = await Post.findById(postId)
      post.comments = post.comments.concat(newComment.id)
      await post.save()
      await newComment.save()
      return 'comment created'
    },
  },
}
