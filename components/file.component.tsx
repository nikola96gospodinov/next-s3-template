"use client";

import { useDeleteFile } from "@/services/delete-file/delete-file.service";
import { useGetFile } from "@/services/get-file/get-file.service";

type Props = {
  fileName: string;
};

export const File = ({ fileName }: Props) => {
  const { data: url } = useGetFile(fileName);
  const { mutate: deleteFile } = useDeleteFile();

  const handleDelete = () => {
    deleteFile(fileName);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        alignItems: "center",
      }}
    >
      <p>{fileName}</p>
      {url && (
        <a href={url} target="_blank">
          👁️
        </a>
      )}
      <button onClick={handleDelete}>🗑️</button>
    </div>
  );
};
