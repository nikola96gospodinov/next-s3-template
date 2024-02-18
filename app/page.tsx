import { UploadFile } from "@/components/upload-file.component";

export default function Home() {
  return (
    <main>
      <UploadFile />
      <div>
        <h1>Get your file</h1>
        <br />
        <input type="text" />
        <br />
        <br />
        <button>Get</button>
      </div>
      <br />
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
