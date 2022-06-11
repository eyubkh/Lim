import { S3 } from '@aws-sdk/client-s3'

export const client = new S3({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
})
