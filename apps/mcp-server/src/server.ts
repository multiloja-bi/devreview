import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerGetReviewRules } from "./tools/get-review-rules.js";
import { registerReviewRulesResource } from "./resources/review-rules.js";
import { registerReviewPrPrompt } from "./prompts/review-pr.js";

/** Cria o servidor e registra tools, resources e prompts. Não conecta transporte. */
export function createServer(): McpServer {
  const server = new McpServer({ name: "devreview-mcp", version: "0.1.0" });

  registerGetReviewRules(server);
  registerReviewRulesResource(server);
  registerReviewPrPrompt(server);

  return server;
}
