import { env } from "../env";

export type JsonApiResponse<T> = {
  status: number;
  data: T | null;
  message: string;
};

export const fetchApi = async <T>(
  path: string,
  options?: RequestInit,
): Promise<JsonApiResponse<T>> => {
  try {
    const response = await fetch(env.NEXT_PUBLIC_API_URL + path, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    return response.json();
  } catch (error) {
    throw error;
  }
};
