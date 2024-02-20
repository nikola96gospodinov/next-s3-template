import { useQuery } from "@tanstack/react-query";

const LIST_FILES_KEY = "listFiles";

const listFile = async () => {
  const response = await fetch(`/api/get-list-of-files`);

  if (!response.ok) {
    throw new Error("Error getting file");
  }

  const { files } = await response.json();

  return files as string[];
};

export const useListFiles = () => {
  return useQuery({
    queryKey: [LIST_FILES_KEY],
    queryFn: listFile,
  });
};
