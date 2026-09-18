window.ARTICLES = {
  "articles": [
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
