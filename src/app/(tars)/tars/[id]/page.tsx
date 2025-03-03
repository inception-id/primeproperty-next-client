import LoginDialog from "@/app/(auth)/auth/login/_components/login-dialog";
import TarsHeader from "./_header/tars-header";
import TarsForm from "./_components/tars-form";
import { findTarsChatRoom } from "../../_server/find-tars-chat-room";
import TarsHero from "./_components/tars-hero";
import { redirect } from "next/navigation";
import Link from "next/link";

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
    <div className="h-screen flex flex-col ">
      <LoginDialog />
      <TarsHeader
        defaultModelId={
          tarsChatRoom?.data?.room.ai_model_id
            ? tarsChatRoom?.data?.room.ai_model_id
            : null
        }
      />
      <div className="flex-1 h-full flex flex-col w-full max-w-5xl mx-auto">
        <TarsHero />
        <div className="p-2">
          <TarsForm />
          <div className="text-xs py-2 text-center">
            For issues/questions please contact{" "}
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
