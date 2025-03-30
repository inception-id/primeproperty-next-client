"use server";

type TicmiError = {
  code: string;
  message: string;
};

type TicmiResponse<T> = {
  data: T;
  error: null | TicmiError;
};

export const fetchTicmi = async <T>(
  url: string,
  init?: RequestInit,
): Promise<TicmiResponse<T>> => {
  try {
    const response = await fetch(url, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TICMI_TOKEN}`,
        ...init?.headers,
      },
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};
