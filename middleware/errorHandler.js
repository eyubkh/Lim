export default function (error, response) {
  return response.status(500).json({ message: error.message })
}
