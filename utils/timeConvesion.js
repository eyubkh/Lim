export default function getStringTimeIat(iat) {
  const now = Math.round(Math.floor((Date.now() - iat) / 60000) / 60)
  if (now < 1) {
    return 'now'
  } else if (now < 24) {
    return `${now}h ago`
  } else {
    const time = Math.round(Math.floor(now / 24))
    return `${time} day${time > 1 ? 's' : ''} ago`
  }
}
