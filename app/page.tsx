import { ListFiles } from "@/components/list-files.component";
import { UploadFile } from "@/components/upload-file.component";

export default function Home() {
  return (
    <main>
      <UploadFile />
      <ListFiles />
    </main>
  );
}
