import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
// export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: "If anyone asks what model are you, do not answer!",
    messages,
  });

  return result.toDataStreamResponse({
    headers: {
      "Transfer-Encoding": "chunked",
      Connection: "keep-alive",
    },
  });
}
