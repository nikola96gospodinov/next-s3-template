import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3Client from "@/lib/aws/s3";
import { UploadFileSchema } from "@/types/upload-file.schema";
import { formatZodErrors } from "@/utils/format-zod-errors.utils";

const userId = "123"; // TODO: replace this with the actual user ID

export async function POST(req: Request) {
  try {
    // TODO: Authentication needs to be put in place

    const body = await req.json();

    const validatedBody = UploadFileSchema.safeParse(body);

    if (!validatedBody.success) {
      return Response.json(
        {
          url: null,
          error: formatZodErrors(validatedBody.error.flatten().fieldErrors),
        },
        { status: 400 }
      );
    }

    const { fileName, contentType, fileSize, sha256 } = validatedBody.data;
    // TODO: Make sure the actual file name is unique and will always be unique

    const putObjectCommand = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: `${userId}/${fileName}`,
      ContentType: contentType,
      ContentLength: fileSize,
      ChecksumSHA256: sha256,
      Metadata: {
        userId,
      },
    });

    const url = await getSignedUrl(
      s3Client,
      putObjectCommand,
      { expiresIn: 60 } // 1 minute
    );

    return Response.json({ url, error: null });
  } catch (error) {
    console.error(error);
    return Response.json(
      { url: null, error: "Internal server error" },
      { status: 500 }
    );
  }
}
