import LoginDialog from "@/app/(auth)/auth/login/_components/login-dialog";
import TarsHeader from "./_header/tars-header";
import TarsForm from "./_components/tars-form";
import { findTarsChatRoom } from "../../_server/find-tars-chat-room";

type DynamicTarsPageProps = {
  params?: {
    id: string;
  };
};

const DynamicTarsPage = async ({ params }: DynamicTarsPageProps) => {
  const tarsChatRoom = params?.id
    ? await findTarsChatRoom(Number(params?.id))
    : null;
  return (
    <div className="h-screen">
      <LoginDialog />
      <TarsHeader
        defaultModelId={
          tarsChatRoom?.data?.room.ai_model_id
            ? tarsChatRoom?.data?.room.ai_model_id
            : null
        }
      />
      <div className="p-2">
        <TarsForm />
      </div>
    </div>
  );
};

export default DynamicTarsPage;
