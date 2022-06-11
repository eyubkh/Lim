import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'User' },
  text: String,
  likes: [{ type: mongoose.Types.ObjectId }],
})

export default mongoose.models.Comment ||
  mongoose.model('Comment', commentSchema)
