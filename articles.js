window.ARTICLES = {
  "articles": [
    {
      "slug": "effective-agents",
      "path": "articles/effective-agents/index.html",
      "title": "Building Effective Agents：先找最簡單的解，需要時才把它做成 agent",
      "summary": "Anthropic 工程團隊 2024 年底的建議：最成功的 LLM agent 用的是簡單、可組合的模式。從擴增型 LLM 出發，五種工作流各配一張機制圖，再到 agent 的迴圈、工具的提示工程與三條原則。每章一張圖解卡加詳細說明，可切換「只看圖卡」。",
      "source": {
        "name": "Anthropic Engineering · Erik Schluntz、Barry Zhang",
        "url": "https://www.anthropic.com/engineering/building-effective-agents",
        "date": "2024-12-19"
      },
      "date": "2026-09-23",
      "tags": [
        "agents",
        "workflows",
        "tool-design",
        "anthropic"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/effective-agents/cards.html"
        }
      ]
    },
    {
      "slug": "compound-ai-systems",
      "path": "articles/compound-ai-systems/index.html",
      "title": "複合式 AI 系統：把模型能力組成可靠的應用",
      "summary": "模型、檢索與工具如何共同決定 AI 應用的表現？從 BAIR 的 2024 年觀點出發，以圖卡理解系統設計、端到端最佳化、成本路由與維運。",
      "source": {
        "name": "BAIR Blog · Matei Zaharia 等人",
        "url": "https://bair.berkeley.edu/blog/2024/02/18/compound-ai-systems/",
        "date": "2024-02-18"
      },
      "date": "2026-09-23",
      "tags": [
        "compound-ai",
        "rag",
        "dspy",
        "llmops"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/compound-ai-systems/cards.html"
        }
      ]
    },
    {
      "slug": "agentic-design-patterns",
      "path": "articles/agentic-design-patterns/index.html",
      "title": "Agentic Design Patterns：進步來自工作流，不只來自下一代模型",
      "summary": "Andrew Ng 在 The Batch 的五封信：用 HumanEval 的數字說明「讓模型反覆修改」帶來的進步，比換下一代模型還大，並把 agent 的做法分成 Reflection、Tool Use、Planning、Multi-agent collaboration 四種設計模式。這份整理把五封信併成一頁，每種模式一張圖卡，並標出 Ng 對成熟度的判斷。",
      "source": {
        "name": "The Batch · Andrew Ng",
        "url": "https://www.deeplearning.ai/the-batch/how-agents-can-improve-llm-performance/",
        "date": "2024-03-20"
      },
      "date": "2026-09-23",
      "tags": [
        "agents",
        "design-patterns",
        "workflows",
        "andrew-ng",
        "cs329z"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/agentic-design-patterns/cards.html"
        }
      ]
    },
    {
      "slug": "commerce-agents",
      "path": "articles/commerce-agents/index.html",
      "title": "Claude Commerce Agents：電商 AI Agent 的開源藍圖，重點不在推薦商品，在守住邊界",
      "summary": "Anthropic 開源的電商 AI Agent 參考藍圖：購物 agent 與商家 agent 各一，單一 agent 加 skills 的架構、延遲與快取技巧、寫進程式的安全閘、以快照為單位的 evals，以及導入前該先做哪一段。整合版每章開頭一張圖解卡講重點，往下是詳細說明，可切換「只看圖卡」速讀。",
      "source": {
        "name": "Anthropic 工程文章 · Ali Shazal、Matthew Koen（另參考產品公告、GitHub 藍圖；主題入口 AI Post Hub）",
        "url": "https://claude.com/blog/the-anatomy-of-effective-commerce-agents",
        "date": "2026-09-02"
      },
      "date": "2026-09-18",
      "tags": [
        "commerce-agents",
        "agent-architecture",
        "safety",
        "evals",
        "claude"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/commerce-agents/cards.html"
        }
      ]
    },
    {
      "slug": "agent-skills",
      "path": "articles/agent-skills/index.html",
      "title": "Agent Skills：把程序知識裝進資料夾，讓通用 agent 變成你的專用 agent",
      "summary": "Anthropic 工程團隊解釋 Agent Skills 的設計：一個 skill 就是一個資料夾加一個 SKILL.md，靠三層漸進式揭露讓 agent 只在需要時載入該載的那一層，還能附上程式讓它直接執行。整合版每章開頭一張圖解卡講重點，往下是詳細說明，可切換「只看圖卡」速讀。",
      "source": {
        "name": "Anthropic Engineering · Barry Zhang、Keith Lazuka、Mahesh Murag",
        "url": "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills",
        "date": "2025-10-16"
      },
      "date": "2026-09-17",
      "tags": [
        "agent-skills",
        "progressive-disclosure",
        "context-engineering",
        "claude-code"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/agent-skills/cards.html"
        }
      ]
    },
    {
      "slug": "eval-skills",
      "path": "articles/eval-skills/index.html",
      "title": "用 Evals 系統化測試 Agent Skills：從「感覺變好了」到「拿得出證據」",
      "summary": "OpenAI Codex 團隊的實作指南：先定義成功、用 10 到 20 條 prompt 抓 regression、確定性檢查加 rubric 兩層評分、先快後慢擴充。整合版每章開頭一張圖解卡講重點，往下是詳細作法，可切換「只看圖卡」速讀。",
      "source": {
        "name": "OpenAI Developers Blog · Dominik Kundel、Gabriel Chua",
        "url": "https://developers.openai.com/blog/eval-skills",
        "date": "2026-01-22"
      },
      "date": "2026-09-15",
      "tags": [
        "agent-skills",
        "evals",
        "codex",
        "claude-code"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/eval-skills/cards.html"
        }
      ]
    }
  ]
};
