"use server";
import { env } from "@/env.mjs";
import {
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from "@aws-sdk/client-s3";

const s3Client = env.NEXT_PUBLIC_S3_REGION && env.S3_ACCESS_KEY_ID && env.S3_SECRET_ACCESS_KEY
  ? new S3Client({
      region: env.NEXT_PUBLIC_S3_REGION,
      credentials: {
        accessKeyId: env.S3_ACCESS_KEY_ID,
        secretAccessKey: env.S3_SECRET_ACCESS_KEY,
      },
    })
  : null;

export const bufferToFile = (buffer: Buffer) =>
  `data:image/webp;base64,${buffer.toString("base64")}`;

export const uploadImage = async (params: PutObjectCommandInput) => {
  if (!s3Client) {
    throw new Error("S3 is not configured. Please set S3 environment variables.");
  }
  const putObject = new PutObjectCommand(params);
  const s3Response = await s3Client.send(putObject);
  return s3Response;
};
