import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { MOCK_REVIEW_RULES } from "../mocks/review-rules.js";

export function registerReviewPrPrompt(server: McpServer): void {
  server.registerPrompt(
    "review_pr",
    {
      title: "Revisar PR",
      description:
        "Monta o pedido de code review de um PR aplicando as regras ativas do time.",
      argsSchema: {
        pr_url: z
          .string()
          .url()
          .describe("URL do pull request, ex.: https://github.com/alura/devreview/pull/142"),
      },
    },
    ({ pr_url }) => {
      const rules = MOCK_REVIEW_RULES.filter((r) => r.active)
        .map((r) => `- [${r.severity}] (${r.category}) ${r.rule}`)
        .join("\n");

      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text:
                `Faça o code review do PR ${pr_url}.\n\n` +
                `Aplique estas regras do time:\n${rules}\n\n` +
                "Para cada problema, informe arquivo, linha, regra violada e severidade. " +
                "Termine com um resumo e o total de issues.",
            },
          },
        ],
      };
    }
  );
}
