import { ListFiles } from "@/components/list-files.component";
import { UploadFile } from "@/components/upload-file.component";

export default function Home() {
  return (
    <main>
      <UploadFile />
      <ListFiles />
      <div>
        <h1>Delete your file</h1>
        <br />
        <input type="text" />
        <br />
        <br />
        <button>Delete</button>
      </div>
    </main>
  );
}
