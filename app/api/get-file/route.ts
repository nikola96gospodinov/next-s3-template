import s3Client from "@/lib/aws/s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const userId = "123"; // TODO: replace this with the actual user ID

export async function GET(req: Request) {
  try {
    // TODO: Authentication needs to be put in place

    const { searchParams } = new URL(req.url);
    const fileName = searchParams.get("fileName");

    if (!fileName) {
      return Response.json(
        { url: null, error: "File name is required" },
        { status: 400 }
      );
    }

    const getObjectCommand = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: `${userId}/${fileName}`,
    });

    const url = await getSignedUrl(s3Client, getObjectCommand, {
      expiresIn: 60 * 60 * 24, // 1 day
    });

    return Response.json({ url, error: null });
  } catch (error) {
    console.error(error);
    return Response.json(
      { url: null, error: "Internal server error" },
      { status: 500 }
    );
  }
}
