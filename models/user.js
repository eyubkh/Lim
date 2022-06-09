import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  imgPath: { type: String },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  likes: [{ type: mongoose.Schema.Types.ObjectId }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
})

export default mongoose.models.User || mongoose.model('User', userSchema)
