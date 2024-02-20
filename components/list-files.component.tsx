"use client";

import { useListFiles } from "@/services/list-files/list-files.service";
import { File } from "./file.component";

export const ListFiles = () => {
  const { data: fileNames, isLoading, isError } = useListFiles();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error getting files</p>;
  }

  if (fileNames?.length === 0) {
    return <p>No files</p>;
  }

  return (
    <div>
      <h1>List of files</h1>
      <br />
      {fileNames?.map((fileName) => (
        <File key={fileName} fileName={fileName} />
      ))}
    </div>
  );
};
