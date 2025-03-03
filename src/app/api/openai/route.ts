import { openai } from "@/lib/openai/openai";

export type TOpenAiCompletionChunk = {
  id: string;
  object: string;
  created: number;
  model: string;
  system_fingerprint: string;
  choices: Choice[];
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
};

export interface Choice {
  index: number;
  delta: Delta;
  logprobs: any;
  finish_reason: any;
}

export interface Delta {
  role: string;
  content: string;
}
export async function POST(req: Request) {
  const { messages } = await req.json();
  const aiStream = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
    stream: true,
    stream_options: {
      include_usage: true,
    },
  });

  const stream = new ReadableStream({
    async start(controller) {
      for await (const chunk of aiStream) {
        const jsonChunk = JSON.stringify(chunk);
        controller.enqueue(new TextEncoder().encode(jsonChunk + "\n"));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/json",
      "Transfer-Encoding": "chunked",
      Connection: "keep-alive",
    },
  });
}
