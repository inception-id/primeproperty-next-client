import SuperTokens from "supertokens-node";
import Dashboard from "supertokens-node/recipe/dashboard";
import UserRoles from "supertokens-node/recipe/userroles";
import SessionNode from "supertokens-node/recipe/session";
import EmailPasswordNode from "supertokens-node/recipe/emailpassword";
import EmailVerificationNode from "supertokens-node/recipe/emailverification";
import { TypeInput } from "supertokens-node/lib/build/types";

import { env } from "@/lib/env";

const APP_INFO = {
  appName: "Primepro",
  apiDomain: env.NEXT_PUBLIC_HOST_URL,
  apiBasePath: "/supertokens",
  websiteDomain: env.NEXT_PUBLIC_HOST_URL,
  websiteBasePath: "/",
};

const CONFIG: TypeInput = {
  supertokens: {
    // this is the location of the SuperTokens core.
    connectionURI: env.SUPERTOKENS_CONNECTION_URI,
    apiKey: env.SUPERTOKENS_API_KEY,
  },
  appInfo: APP_INFO,
  // recipeList contains all the modules that you want to
  // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
  recipeList: [
    SessionNode.init(),
    Dashboard.init(),
    UserRoles.init(),
    EmailPasswordNode.init(),
    EmailVerificationNode.init({ mode: "OPTIONAL" }),
  ],
  isInServerlessEnv: true,
  framework: "custom",
};

let initialized = false;
export const initializeSupertokens = () => {
  if (!initialized) {
    SuperTokens.init(CONFIG);
    initialized = true;
  }
};
