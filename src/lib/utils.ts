import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateToIndonesian = (
  dateString: string,
  showTime?: boolean,
) => {
  const date = new Date(dateString);
  const localDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60 * 1000,
  );
  return Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    ...(showTime && { timeStyle: "short" }),
  }).format(localDate);
};
