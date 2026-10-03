#!/usr/bin/env node
// DevReview MCP Server
// Módulo 1: server mínimo com tool mockada (este arquivo)
// Módulo 4: tools reais conectadas ao Supabase
//
// Transporte stdio: stdout é exclusivo do JSON-RPC. Logs SEMPRE via console.error.

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./server.js";

async function main(): Promise<void> {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[devreview-mcp] servidor iniciado via stdio");
}

main().catch((error: unknown) => {
  console.error("[devreview-mcp] erro fatal:", error);
  process.exit(1);
});
