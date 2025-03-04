import TarsForm from "./_components/tars-form";
import Link from "next/link";
import TarsMessages from "./_components/tars-messages";

const DynamicTarsPage = () => {
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto gap-2 flex-1 h-full">
      <TarsMessages />
      <div className="p-2 flex flex-col gap-2">
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
  );
};

export default DynamicTarsPage;
