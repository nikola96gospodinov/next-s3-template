import { z } from "zod";
import { allowedFileTypes } from "../constants/allowed-file-types.constants";

export const UploadFileSchema = z.object({
  contentType: z.enum(allowedFileTypes, {
    errorMap: () => ({
      message: `File type must be one of: ${allowedFileTypes.join(", ")}`,
    }),
  }),
  fileSize: z
    .number({
      errorMap: () => ({ message: "File size is required" }),
    })
    .max(1024 * 1024 * 10, {
      message: "File size must be less than 10MB",
    }), // 10MB
  sha256: z.string({
    errorMap: () => ({ message: "SHA-256 is required" }),
  }),
  fileName: z.string({
    errorMap: () => ({ message: "File name is required" }),
  }),
});

export type UploadFile = z.infer<typeof UploadFileSchema>;
