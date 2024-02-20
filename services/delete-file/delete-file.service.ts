import { useMutation } from "@tanstack/react-query";
import { invalidateListFiles } from "../list-files/list-files.service";

const deleteFile = async (fileName: string) => {
  const response = await fetch(`/api/delete-file?fileName=${fileName}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error deleting file");
  }

  return;
};

export const useDeleteFile = () => {
  return useMutation({
    mutationFn: deleteFile,
    onSuccess: () => {
      invalidateListFiles();
    },
  });
};
