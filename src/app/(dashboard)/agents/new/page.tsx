import Link from "next/link";
import { NewAgentForm } from "./_components";
import { LuArrowLeft } from "react-icons/lu";

const NewAgentPage = () => {
  return (
    <div className="p-4 flex flex-col gap-6 ">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold">New Agent</h1>
        <p className="text-muted-foreground">
          Please fill in your agent details
        </p>
      </div>
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
