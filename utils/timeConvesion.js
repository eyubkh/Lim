export default function getStringTimeIat(iat) {
  const now = Math.round((Date.now() - iat) / 60000)
  return `${Math.round(now / 60)}h ago`
}
