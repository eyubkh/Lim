import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  text: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  iat: { type: String },
  comments: [{ type: mongoose.Types.ObjectId, ref: 'Comments' }],
  likeCount: { type: Number },
  likes: [{ type: mongoose.Schema.Types.ObjectId }],
})

export default mongoose.models.Post || mongoose.model('Post', postSchema)
