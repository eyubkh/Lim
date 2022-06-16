export default async function postApiCredentials(route, object) {
  return await window
    .fetch(route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.message) throw new Error(response.message)
      return response
    })
}
