export default function (error, response) {
  console.log(error.message, error.name)
  if (error.name === 'TypeError') {
    return response.status(401).json({ message: 'Wrong credentials' })
  }
  return response.status(500).json({ message: error })
}
