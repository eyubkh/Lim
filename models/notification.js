import mongoose from 'mongoose'

const notificationSchema = mongoose.Schema({
  notifi: { type: Array },
  notifiCount: { type: Number },
  user: { type: mongoose.Types.ObjectId },
})

export default mongoose.models.Notification ||
  new mongoose.model('Notification', notificationSchema)
