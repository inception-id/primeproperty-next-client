import type { JsonResponse, S3 } from "@/lib/types";

export function getUploadedImagePath(
  response: JsonResponse<S3.Image[]>,
): string | null {
  if (
    !Number.isInteger(response.status) ||
    response.status < 200 ||
    response.status >= 300
  ) {
    return null;
  }

  if (response.data?.length !== 1) {
    return null;
  }

  const path = response.data[0]?.path;
  return path?.trim() ? path : null;
}
