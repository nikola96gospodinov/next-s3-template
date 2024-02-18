import { useMutation } from "@tanstack/react-query";

type Props = {
  file: File;
  url: string;
};

const uploadFile = async ({ url, file }: Props) => {
  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });
};

export const useUploadFile = () => {
  return useMutation({
    mutationFn: uploadFile,
  });
};
