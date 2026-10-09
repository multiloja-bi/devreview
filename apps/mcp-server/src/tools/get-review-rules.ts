import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { MOCK_REVIEW_RULES } from "../mocks/review-rules.js";
import { RULE_CATEGORIES, RULE_SEVERITIES } from "../types.js";

export function registerGetReviewRules(server: McpServer): void {
  server.registerTool(
    "get_review_rules",
    {
      title: "Listar regras de review",
      description:
        "Retorna as regras de code review do time (categoria, severidade e status). " +
        "Use antes de revisar um PR para saber quais padrões o time exige. " +
        "Aceita filtros opcionais por categoria e severidade; por padrão retorna só as regras ativas.",
      inputSchema: {
        category: z
          .enum(RULE_CATEGORIES)
          .optional()
          .describe("Filtra por categoria: style, architecture, security ou performance."),
        severity: z
          .enum(RULE_SEVERITIES)
          .optional()
          .describe("Filtra por severidade: error, warning ou info."),
        active_only: z
          .boolean()
          .default(true)
          .describe("Se true (padrão), retorna apenas regras ativas. Use false para incluir as inativas."),
      },
      annotations: { readOnlyHint: true, openWorldHint: false },
    },
    async ({ category, severity, active_only }) => {
      const rules = MOCK_REVIEW_RULES.filter(
        (r) =>
          (!category || r.category === category) &&
          (!severity || r.severity === severity) &&
          (!active_only || r.active)
      );
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ total: rules.length, rules }, null, 2),
          },
        ],
      };
    }
  );
}
