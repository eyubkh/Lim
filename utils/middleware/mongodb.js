import mongoose from 'mongoose'

const connectDB = (handler) => async (request, response) => {
  if (mongoose.connections[0].readyState) {
    return handler(request, response)
  }
  await mongoose.connect(process.env.DB_URL)
  return handler(request, response)
}

export default connectDB
