import { LuMessageCircleWarning } from "react-icons/lu";

const LanguageaiSubscriptionError = () => {
  return (
    <div className="bg-secondary rounded-lg shadow p-2 max-w-sm">
      <div className="flex items-center text-xl gap-2">
        <LuMessageCircleWarning />
        <div>Something went wrong</div>
      </div>

      <div>Please refresh or contact support for fixes</div>
    </div>
  );
};

export default LanguageaiSubscriptionError;
