const validationError = "Choose a PNG, JPEG/JPG, or WebP image.";

const mimeTypesByExtension: Record<string, ReadonlySet<string>> = {
  ".jpeg": new Set(["image/jpeg", "image/jpg"]),
  ".jpg": new Set(["image/jpeg", "image/jpg"]),
  ".png": new Set(["image/png"]),
  ".webp": new Set(["image/webp"]),
};

type BlogImageFile = Pick<File, "name" | "type">;

export function getBlogImageValidationError(
  file: BlogImageFile,
): string | null {
  const extension = file.name.toLowerCase().match(/\.[^.]+$/)?.[0];
  const allowedMimeTypes = extension
    ? mimeTypesByExtension[extension]
    : undefined;

  if (!allowedMimeTypes) {
    return validationError;
  }

  if (!file.type) {
    return null;
  }

  return allowedMimeTypes.has(file.type.toLowerCase()) ? null : validationError;
}
