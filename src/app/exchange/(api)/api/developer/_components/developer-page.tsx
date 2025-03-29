import { fetchCookieToken } from "@/lib/fetchCookieToken";
import { UnauthenticatedDeveloperPage } from "./unauthenticated-developer-page";
import { DeveloperCredential } from "./credential";

export const DeveloperPage = async () => {
  const token = await fetchCookieToken();

  if (!token) {
    return <UnauthenticatedDeveloperPage />;
  }
  return <DeveloperCredential />;
};
