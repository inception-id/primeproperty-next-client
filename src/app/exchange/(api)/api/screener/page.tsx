"use client";

import { Button } from "@/components/ui/button";
import { fetchIdxScreener } from "./_server/fetchIdxScreener";

const ApiScreenerPage = () => {
  return (
    <div>
      <h1>ApiScreenerPage</h1>

      <Button
        onClick={async () => {
          const ab = await fetchIdxScreener();
          console.log(ab);
        }}
      >
        hoi{" "}
      </Button>
    </div>
  );
};

export default ApiScreenerPage;
