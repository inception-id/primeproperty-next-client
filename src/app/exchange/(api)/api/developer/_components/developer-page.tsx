import { fetchCookieToken } from "@/lib/fetchCookieToken";
import { UnauthenticatedDeveloperPage } from "./unauthenticated-developer-page";

export const DeveloperPage = async () => {
  const token = await fetchCookieToken();

  if (!token) {
    return <UnauthenticatedDeveloperPage />;
  }
  return <div>hoi</div>;
};
