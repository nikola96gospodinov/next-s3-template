import { useQuery } from "@tanstack/react-query";

const fileNameKey = "fileName";

const getFile = async (fileName: string) => {
  const response = await fetch(`/api/get-file?fileName=${fileName}`);

  if (!response.ok) {
    throw new Error("Error getting file");
  }

  const { url } = await response.json();

  return url;
};

export const useGetFile = (fileName: string) => {
  return useQuery({
    queryKey: [fileNameKey, fileName],
    queryFn: () => getFile(fileName),
    enabled: !!fileName,
    refetchInterval: 1000 * 60 * 60 * 24, // 1 day (in line with the signed URL expiry time)
  });
};
