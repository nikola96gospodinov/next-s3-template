import { GetFile } from "@/components/get-file.component";
import { UploadFile } from "@/components/upload-file.component";

export default function Home() {
  return (
    <main>
      <UploadFile />
      <GetFile />
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
