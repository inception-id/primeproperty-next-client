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
          Referer: "https://www.idx.co.id/id",
          Accept: "application/json, text/plain, */*",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyOTcyMWU1ZC01MGI1LTQwMjctOTQyOC0zOGYyMDYzYTE2ZTYiLCJlbWFpbCI6IndpbmF0YXN0YW5sZXkzNTVAZ21haWwuY29tIiwianRpIjoiOTU5YmE0N2ItMGE1NS00ZjNhLWIyNTUtMzRlN2QxYzQ0ZDRjIiwicm9sZSI6Ik1hc3lhcmFrYXQgVW11bSIsInJvbGVJZCI6ImFjYjY2YWIyLTliNmItNGQ5Ni1hM2VkLTE1NGFkZDYwNGQyYiIsInV0IjoiZmFiNGZhYzEtYzU0Ni00MWRlLWFlYmMtYTE0ZGE2ODk1NzE1IiwibmJmIjoxNzQzMTIyMzQ5LCJleHAiOjE3NDMxMjM1NDksImlhdCI6MTc0MzEyMjM0OX0.bFBQUpCa6qfQExT64o6Jw6LpvZ9omKQqHBfk2JVO-uA",
        },
      },
    );
    console.log("Index list response:", response);
    return await response.json();
  } catch (error) {
    console.error("Get Index List error", error);
  }
};
