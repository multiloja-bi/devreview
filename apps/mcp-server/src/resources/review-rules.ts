import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { MOCK_REVIEW_RULES, TEAM_ID } from "../mocks/review-rules.js";

export const REVIEW_RULES_URI = "devreview://rules";

export function registerReviewRulesResource(server: McpServer): void {
  server.registerResource(
    "review_rules",
    REVIEW_RULES_URI,
    {
      title: "Regras de review do time",
      description:
        "Todas as regras de code review do time (ativas e inativas), em JSON. " +
        "Contexto estático para o cliente anexar à conversa.",
      mimeType: "application/json",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "application/json",
          text: JSON.stringify(
            { team_id: TEAM_ID, total: MOCK_REVIEW_RULES.length, rules: MOCK_REVIEW_RULES },
            null,
            2
          ),
        },
      ],
    })
  );
}
