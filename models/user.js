import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  profile: {
    username: String,
    password: String,
  },
  posts: [
    {
      text: String,
      likes: Number,
      time: String,
      username: String,
    },
  ],
})

export default mongoose.models.User || mongoose.model('User', userSchema)
