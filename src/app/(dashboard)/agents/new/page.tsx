import { NewAgentForm } from "./_components";

const NewAgentPage = () => {
  return (
    <div className="p-4 w-full h-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-center font-semibold">New Agent</h1>
      <NewAgentForm />
    </div>
  );
};

export default NewAgentPage;
