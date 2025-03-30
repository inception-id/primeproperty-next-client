"use server";
export const getIndexList = async () => {
  try {
    const response = await fetch(
      "https://www.idx.co.id/primary/home/GetIndexList",
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    );
    console.log("Index list response:", response);
    return await response.json();
  } catch (error) {
    console.error("Get Index List error", error);
  }
};
