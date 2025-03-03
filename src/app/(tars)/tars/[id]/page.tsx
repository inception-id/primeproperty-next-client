import LoginDialog from "@/app/(auth)/auth/login/_components/login-dialog";
import TarsHeader from "./_header/tars-header";
import TarsForm from "./_components/tars-form";
import { findTarsChatRoom } from "../../_server/find-tars-chat-room";
import TarsHero from "./_components/tars-hero";
import { redirect } from "next/navigation";
import Link from "next/link";
import TarsMessages from "./_components/tars-messages";

type DynamicTarsPageProps = {
  params?: {
    id: string;
  };
};

const DynamicTarsPage = async ({ params }: DynamicTarsPageProps) => {
  const tarsChatRoom = params?.id
    ? await findTarsChatRoom(Number(params?.id))
    : null;
  if (tarsChatRoom?.status === 401) {
    redirect("/tars");
  }
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <LoginDialog />
      <TarsHeader
        defaultModelId={
          tarsChatRoom?.data?.room.ai_model_id
            ? tarsChatRoom?.data?.room.ai_model_id
            : null
        }
      />
      <div className="flex flex-col w-full max-w-5xl mx-auto gap-2 flex-1 h-full">
        {params?.id ? (
          <TarsMessages
            defaultMessages={
              tarsChatRoom?.data?.messages ? tarsChatRoom.data.messages : null
            }
          />
        ) : (
          <TarsHero />
        )}
        <div className="px-2">
          <TarsForm />
          <div className="text-xs text-center">
            For issues/questions, contact{" "}
            <Link className="underline font-semibold" href="/support">
              support
            </Link>{" "}
            directly
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicTarsPage;
