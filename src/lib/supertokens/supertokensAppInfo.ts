import {AppInfo} from "supertokens-node/lib/build/types";
import {env} from "@/lib/env";

export const supertokensAppInfo:AppInfo = {
    appName: "Inception",
    apiDomain: env.NEXT_PUBLIC_HOST_URL,
    apiBasePath: "/supertokens",
    websiteDomain: env.NEXT_PUBLIC_HOST_URL,
    websiteBasePath: "/"
}