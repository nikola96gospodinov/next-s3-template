"use client";

import { useGetFile } from "@/services/get-file/get-file.service";
import { useState } from "react";

export const GetFile = () => {
  const [fileName, setFileName] = useState<string>("");

  const { data: url, isError } = useGetFile(fileName);

  return (
    <>
      <div>
        <h1>Get your file</h1>
        <br />
        <input type="text" onChange={(e) => setFileName(e.target.value)} />
        <br />
      </div>
      <br />
      {url && <img src={url} alt="file" />}
      {isError && <p>There was an error getting your file</p>}
    </>
  );
};
