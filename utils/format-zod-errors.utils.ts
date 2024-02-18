export const formatZodErrors = (error: Record<string, unknown>) => {
  return Object.values(error)
    .map((error) => {
      if (Array.isArray(error)) return error.join(", ");

      return error;
    })
    .join(", ");
};
