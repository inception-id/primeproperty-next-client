import Link from "next/link";
import { NewAgentForm } from "./_components";
import { LuArrowLeft } from "react-icons/lu";

const NewAgentPage = () => {
  return (
    <div className="p-2 px-3 flex flex-col gap-6">
      <h3 className="text-base font-bold">Add New Agent</h3>
      <NewAgentForm />

      <Link
        href="/agents"
        className="underline underline-offset-4 flex items-center gap-2 text-xs"
      >
        <LuArrowLeft />
        Back to Agent List
      </Link>
    </div>
  );
};

export default NewAgentPage;
