import type { ReviewRule } from "../types.js";

/** ID fixo do time demo (seed em `supabase/seed.sql`, igual a `apps/web/src/lib/team.ts`). */
export const TEAM_ID = "11111111-1111-1111-1111-111111111111";

/** As 8 regras de `supabase/seed.sql`, na mesma ordem. */
export const MOCK_REVIEW_RULES: ReviewRule[] = [
  {
    id: "rule-001",
    team_id: TEAM_ID,
    category: "security",
    severity: "error",
    active: true,
    rule: "Nunca expor chaves de API ou tokens em código-fonte",
  },
  {
    id: "rule-002",
    team_id: TEAM_ID,
    category: "architecture",
    severity: "error",
    active: true,
    rule: "Separar lógica de negócio da camada de apresentação",
  },
  {
    id: "rule-003",
    team_id: TEAM_ID,
    category: "performance",
    severity: "warning",
    active: true,
    rule: "Evitar renderizações desnecessárias em componentes React",
  },
  {
    id: "rule-004",
    team_id: TEAM_ID,
    category: "style",
    severity: "warning",
    active: true,
    rule: "Usar nomenclatura camelCase para variáveis e funções",
  },
  {
    id: "rule-005",
    team_id: TEAM_ID,
    category: "architecture",
    severity: "warning",
    active: false,
    rule: "Evitar dependências circulares entre módulos",
  },
  {
    id: "rule-006",
    team_id: TEAM_ID,
    category: "style",
    severity: "info",
    active: true,
    rule: "Documentar funções públicas com JSDoc",
  },
  {
    id: "rule-007",
    team_id: TEAM_ID,
    category: "performance",
    severity: "info",
    active: true,
    rule: "Utilizar lazy loading para rotas secundárias",
  },
  {
    id: "rule-008",
    team_id: TEAM_ID,
    category: "security",
    severity: "warning",
    active: true,
    rule: "Validar e sanitizar todos os inputs do usuário",
  },
];
