import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerGetReviewRules } from "./tools/get-review-rules.js";

/** Cria o servidor e registra as tools. Não conecta transporte. */
export function createServer(): McpServer {
  const server = new McpServer({ name: "devreview-mcp", version: "0.1.0" });

  registerGetReviewRules(server);

  return server;
}
