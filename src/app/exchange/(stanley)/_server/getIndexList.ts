"use server";
export const getIndexList = async () => {
  try {
    const response = await fetch(
      "https://www.idx.co.id/primary/home/GetIndexList",
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
          Referer: "https://www.idx.co.id/",
          Accept: "application/json, text/plain, */*",
        },
      },
    );
    console.log("Index list response:", response);
    return await response.json();
  } catch (error) {
    console.error("Get Index List error", error);
  }
};
