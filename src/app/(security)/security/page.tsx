"use client";

import { fetchIdx } from "./[code]/_server/fetchIdx";

const SecurityPage = () => {
  return (
    <div>
      <h1>Security Page</h1>
      <button onClick={async () => await fetchIdx()}>Click</button>
    </div>
  );
};

export default SecurityPage;
