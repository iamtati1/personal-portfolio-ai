import Anthropic from "@anthropic-ai/sdk";
import { PORTFOLIO_SYSTEM_PROMPT } from "@/lib/portfolio-data";

const client = new Anthropic();

export async function POST(request: Request) {
  const { messages } = await request.json();

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const anthropicStream = client.messages.stream({
          model: "claude-opus-4-8",
          max_tokens: 1024,
          thinking: { type: "adaptive" },
          system: PORTFOLIO_SYSTEM_PROMPT,
          messages,
        });

        for await (const event of anthropicStream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        controller.close();
      } catch {
        controller.enqueue(
          encoder.encode("Sorry, I couldn't process that request. Please try again.")
        );
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
