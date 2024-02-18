"use client";

import { allowedFileTypes } from "@/constants/allowed-file-types.constants";
import { useGetUploadUrl } from "@/services/file-upload/get-upload-url.service";
import { useUploadFile } from "@/services/file-upload/upload-file.service";
import { MouseEventHandler, useState } from "react";

export const UploadFile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>();

  const { mutate: getUploadUrl } = useGetUploadUrl();
  const { mutate: uploadFile, isSuccess } = useUploadFile();

  const handleUpload: MouseEventHandler<HTMLButtonElement> = async () => {
    if (!file) {
      return;
    }

    getUploadUrl(file, {
      onSuccess: async (url) => {
        uploadFile(
          { file, url },
          {
            onError: () =>
              setError("There was an error with the upload. Please try again"),
          }
        );

        setFile(null);
      },
      onError: (error) => setError(error.message),
    });
  };

  return (
    <>
      <div>
        <h1>Upload your file</h1>
        <br />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          accept={allowedFileTypes.join(",")}
        />
        <br />
        <br />
        <button onClick={handleUpload}>Upload</button>
        {isSuccess && (
          <>
            <br />
            <p>File uploaded successfully</p>
          </>
        )}
        {error && (
          <>
            <br />
            <p>{error}</p>
          </>
        )}
      </div>
      <br />
    </>
  );
};
