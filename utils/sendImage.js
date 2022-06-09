export default async function sendImage(image) {
  const formData = new FormData()
  formData.append('image', image)
  formData.append('token', window.localStorage.getItem('token'))
  const result = await window
    .fetch('/api/aws', {
      method: 'POST',
      body: formData,
    })
    .then((response) => response.json())
  return result.imagePath
}
