import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-full min-h-96 flex items-center justify-center">
      <Image
        src="/images/primepro-with-full-text.png"
        alt="Loading"
        width={150}
        height={150}
        className="animate-bounce"
      />
    </div>
  );
};
export default Loading;
