import { findExchangeDeveloper } from "@/app/exchange/(api)/_server/find-exchange-developer";
import { TypographyLarge } from "@/components/ui/typography/large";
import { DeveloperClientId } from "./developer-client-id";
import { TypographySmall } from "@/components/ui/typography/small";
import { DeveloperApiKey } from "./developer-api-key";
import { DeveloperApiKeyDialog } from "./developer-api-key-dialog";

export const DeveloperCredential = async () => {
  const developer = await findExchangeDeveloper();
  return (
    <>
      <div className="flex flex-col gap-4 justify-start">
        <div className="flex flex-col gap-2">
          <TypographyLarge>Indonesia Stock Exchange</TypographyLarge>
          <TypographySmall>Developer Credential</TypographySmall>
        </div>

        <div className="flex flex-col gap-4">
          <DeveloperClientId clientId={developer.data.id} />
          <DeveloperApiKey />
        </div>
      </div>
      <DeveloperApiKeyDialog />
    </>
  );
};
