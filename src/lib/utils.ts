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
  return Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    ...(showTime && { timeStyle: "short" }),
  }).format(date);
};
