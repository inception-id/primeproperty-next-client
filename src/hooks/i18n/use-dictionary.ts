import id from "./id.json";
import en from "./en.json";
import { useParams } from "next/navigation";

export const useDictionary = () => {
  const params = useParams();
  const localization = params.lang as keyof typeof dictionary;

  const dictionary = { id, en };
  return dictionary[localization];
};
