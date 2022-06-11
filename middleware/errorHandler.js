export default function (error, response) {
  console.log(error.fileName, error.name)
  return response.status(500).json({ message: error.message })
}
