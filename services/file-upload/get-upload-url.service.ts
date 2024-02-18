import { computeSHA256 } from "@/utils/compute-sha-256.utils";
import { useMutation } from "@tanstack/react-query";

const getUploadUrl = async (file: File) => {
  const response = await fetch("/api/upload-file", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fileName: file.name,
      contentType: file.type,
      fileSize: file.size,
      sha256: await computeSHA256(file),
    }),
  });

  const { url, error } = await response.json();

  if (!response.ok || error) {
    throw new Error(error ?? "Failed to get upload URL");
  }

  return url;
};

export const useGetUploadUrl = () => {
  return useMutation({
    mutationFn: getUploadUrl,
  });
};
