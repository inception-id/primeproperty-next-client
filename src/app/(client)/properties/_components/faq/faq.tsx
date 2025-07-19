import { FaqOne } from "./one";
import { FaqThree } from "./three";
import { FaqTwo } from "./two";

export const Faq = () => {
  return (
    <div className="p-4 flex flex-col gap-4" id="faq">
      <h2 className="text-2xl font-bold">Frequently Asked Questions:</h2>
      <FaqOne />
      <FaqTwo />
      <FaqThree />
    </div>
  );
};
