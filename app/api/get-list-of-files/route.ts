import s3Client from "@/lib/aws/s3";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";

const userId = "123"; // TODO: replace this with the actual user ID

export async function GET() {
  try {
    // TODO: Authentication needs to be put in place

    const listObjectsCommand = new ListObjectsV2Command({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Prefix: `${userId}`,
    });

    const { Contents } = await s3Client.send(listObjectsCommand);

    const fileNames = Contents?.map((content) => content.Key?.split("/")[1]);

    if (!fileNames) {
      return Response.json({ files: [], error: null }, { status: 200 });
    }

    return Response.json({ files: fileNames, error: null }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { files: null, error: "Internal server error" },
      { status: 500 }
    );
  }
}
