import React from "react";

type StanleyScreenerLayoutProps = {
  children: React.ReactNode;
};

const StanleyScreenerLayout = ({ children }: StanleyScreenerLayoutProps) => {
  return (
    <>
      <div className="container mx-auto p-4 md:px-0">{children}</div>
    </>
  );
};

export default StanleyScreenerLayout;
