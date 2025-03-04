"use client";

import { useTarsChatStore } from "@/app/(tars)/_lib/useTarsChatStore";
import { useShallow } from "zustand/react/shallow";

const TarsHero = () => {
  const { aiModel } = useTarsChatStore(
    useShallow((state) => ({
      aiModel: state.aiModel,
    })),
  );

  return (
    <div className="flex flex-col items-center justify-center h-full flex-1">
      <h1 className="text-4xl font-bold">TARS</h1>
      <p className="text-xl">
        {aiModel ? `model: ${aiModel.label}` : `Free Multimodel AI`}
      </p>
      <p className="text-sm">(No free trial, No subscription, No payment)</p>
    </div>
  );
};

export default TarsHero;
