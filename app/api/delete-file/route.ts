import s3Client from "@/lib/aws/s3";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";

const userId = "123"; // TODO: replace this with the actual user ID

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const fileName = searchParams.get("fileName");

    const deleteCommand = new DeleteObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: `${userId}/${fileName}`,
    });

    await s3Client.send(deleteCommand);

    return Response.json({ success: true, error: null });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
