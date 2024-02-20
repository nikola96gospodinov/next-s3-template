"use client";

import { useListFiles } from "@/services/list-files/list-files.service";

export const ListFiles = () => {
  const { data: files, isLoading, isError } = useListFiles();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error getting files</p>;
  }

  return (
    <div>
      <h1>List of files</h1>
      <br />
      {files?.map((file) => (
        <div key={file}>{file}</div>
      ))}
    </div>
  );
};
