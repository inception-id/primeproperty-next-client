"use server";
export const fetchIdx = async () => {
  try {
    const response = await fetch(
      "https://www.idx.co.id/primary/Home/GetBondSummary",
      {
        headers: {
          "Content-Type": "application/json, text/plain, */*",
          "Access-Control-Allow-Origin": "*",
        },
      },
    );
    console.log("Response", response);
    if (!response.ok) {
      console.log("Response not ok", response);
    }

    const data = await response.json();
    console.log("Data", data);
    return data;
  } catch (error) {
    console.error("Error", error);
  }
};
