window.ARTICLES = {
  "articles": [
    {
      "slug": "react-reasoning-acting",
      "path": "articles/react-reasoning-acting/index.html",
      "title": "ReAct：讓語言模型邊想邊做，推理與行動交錯寫進同一條軌跡",
      "summary": "Princeton 與 Google Research 在 2022 年提出 ReAct：讓大型語言模型把推理（thought）和行動（action）交錯寫進同一條軌跡，推理決定下一步查什麼、做什麼，行動帶回的觀察再修正推理。在 HotpotQA 與 FEVER 上，它透過一個簡單的 Wikipedia API 減少 chain-of-thought 的幻覺，和 CoT-SC 互相當後援時表現最好；在 ALFWorld 與 WebShop 上只用一兩個示範，成功率就比模仿學習與強化學習方法高出 34% 與 10%。每章一張圖解卡加詳細說明，可切換「只看圖卡」。",
      "source": {
        "name": "arXiv · Shunyu Yao、Jeffrey Zhao、Dian Yu、Nan Du、Izhak Shafran、Karthik Narasimhan、Yuan Cao（Princeton、Google Research）",
        "url": "https://arxiv.org/abs/2210.03629",
        "date": "2022-10-06"
      },
      "date": "2026-09-24",
      "tags": [
        "react",
        "llm-agents",
        "reasoning",
        "tool-use",
        "cs329z"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "course": {
        "name": "CS 329Z",
        "week": 4,
        "kind": "必讀",
        "section": "Frameworks & Agent Design",
        "lecture": "Agent Design Patterns & Scaffolds",
        "url": "https://cs329z.stanford.edu/"
      },
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/react-reasoning-acting/cards.html"
        }
      ]
    },
    {
      "slug": "memgpt-virtual-context",
      "path": "articles/memgpt-virtual-context/index.html",
      "title": "MemGPT：把脈絡視窗當記憶體管理，讓 LLM 自己把記憶換進換出",
      "summary": "UC Berkeley 團隊在 2023 年提出 MemGPT：借作業系統的虛擬記憶體，把 LLM 的脈絡視窗當成有限的主記憶體，完整的對話紀錄與文件放在視窗外的資料庫，由模型用函式呼叫自己決定存什麼、找什麼，事件觸發推論、heartbeat 讓它連續呼叫。深度記憶檢索與巢狀鍵值查詢裡，三個模型包進 MemGPT 之後都勝過各自的基線；多文件問答裡，MemGPT 的表現不受視窗長度影響，但配 GPT-3.5 時明顯變差。每章一張圖解卡加詳細說明，可切換「只看圖卡」。",
      "source": {
        "name": "arXiv · Charles Packer、Sarah Wooders、Kevin Lin、Vivian Fang、Shishir G. Patil、Ion Stoica、Joseph E. Gonzalez（UC Berkeley）",
        "url": "https://arxiv.org/abs/2310.08560",
        "date": "2023-10-12"
      },
      "date": "2026-09-24",
      "tags": [
        "memgpt",
        "agent-memory",
        "context-management",
        "llm-agents",
        "cs329z"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "course": {
        "name": "CS 329Z",
        "week": 4,
        "kind": "必讀",
        "section": "Memory & Multi-Agent Systems",
        "lecture": "Agent Memory Architectures",
        "url": "https://cs329z.stanford.edu/"
      },
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/memgpt-virtual-context/cards.html"
        }
      ]
    },
    {
      "slug": "mcp-specification",
      "path": "articles/mcp-specification/index.html",
      "title": "MCP 規格讀法：先看誰守哪條邊界，再看訊息怎麼走（2025-06-18 版）",
      "summary": "Model Context Protocol 規格 2025-06-18 修訂版的讀法頁：它是什麼樣的文件、22 頁怎麼分區、要建一個會用工具的 agent 該照什麼順序讀。每章一張圖解卡講機制：三種角色、三種訊息、握手、三種伺服器原語、工具的迴圈與兩層錯誤、客戶端原語、兩種傳輸、授權流程、token 為什麼不能透傳。",
      "source": {
        "name": "modelcontextprotocol.io · Model Context Protocol Specification（2025-06-18 修訂版）",
        "url": "https://modelcontextprotocol.io/specification/2025-06-18",
        "date": "2025-06-18"
      },
      "date": "2026-09-24",
      "tags": [
        "mcp",
        "tool-use",
        "protocol",
        "agents",
        "cs329z"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "course": {
        "name": "CS 329Z",
        "week": 3,
        "kind": "必讀",
        "section": "Building Blocks",
        "lecture": "Tool Use & Function Calling",
        "url": "https://cs329z.stanford.edu/"
      },
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/mcp-specification/cards.html"
        }
      ]
    },
    {
      "slug": "generative-agents",
      "path": "articles/generative-agents/index.html",
      "title": "Generative Agents：記憶流加上檢索、反思與規劃，讓 25 個代理在小鎮裡可信地過日子",
      "summary": "Stanford 與 Google 的研究者在 2023 年提出生成式代理：把代理的每一段經歷用自然語言寫進記憶流，依近時、重要性、相關性三個分數檢索，定期把觀察反思成更高層的推論，再把一天的計畫由粗到細拆開。25 個代理住進類似《模擬市民》的沙盒小鎮，一個辦派對的念頭，兩天後讓 5 個代理準時赴約；消融實驗顯示記憶、反思、規劃各自都讓行為更可信。每章一張圖解卡加詳細說明，可切換「只看圖卡」。",
      "source": {
        "name": "arXiv · Joon Sung Park、Joseph C. O'Brien、Carrie J. Cai、Meredith Ringel Morris、Percy Liang、Michael S. Bernstein（Stanford、Google Research、Google DeepMind）",
        "url": "https://arxiv.org/abs/2304.03442",
        "date": "2023-04-07"
      },
      "date": "2026-09-24",
      "tags": [
        "agent-memory",
        "generative-agents",
        "llm-agents",
        "multi-agent",
        "cs329z"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "course": {
        "name": "CS 329Z",
        "week": 4,
        "kind": "選讀",
        "section": "Memory & Multi-Agent Systems",
        "lecture": "Agent Memory Architectures",
        "url": "https://cs329z.stanford.edu/"
      },
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/generative-agents/cards.html"
        }
      ]
    },
    {
      "slug": "dspy-compiling-pipelines",
      "path": "articles/dspy-compiling-pipelines/index.html",
      "title": "DSPy：prompt 不再手寫，把語言模型管線寫成可以編譯的程式",
      "summary": "Stanford 等團隊在 2023 年提出 DSPy：用 signature 宣告每個 LM 呼叫要做什麼，用模組把 Chain of Thought、ReAct 這類技巧變成可以互換的層，再由 teleprompter 依 metric 自動 bootstrap 示範，把整條管線編譯成 prompt 或微調。GSM8K 與 HotPotQA 上，幾行程式編譯幾分鐘，就讓 GPT-3.5 與 llama2-13b-chat 勝過標準 few-shot 與專家寫的示範。每章一張圖解卡加詳細說明，可切換「只看圖卡」。",
      "source": {
        "name": "arXiv · Omar Khattab、Arnav Singhvi、Paridhi Maheshwari、Zhiyuan Zhang、Keshav Santhanam、Sri Vardhamanan、Saiful Haq、Ashutosh Sharma、Thomas T. Joshi、Hanna Moazam、Heather Miller、Matei Zaharia、Christopher Potts（Stanford、UC Berkeley、Carnegie Mellon、Amazon Alexa AI、Dashworks、IIT Bombay、Calera Capital、Microsoft、Two Sigma）",
        "url": "https://arxiv.org/abs/2310.03714",
        "date": "2023-10-05"
      },
      "date": "2026-09-24",
      "tags": [
        "dspy",
        "prompt-optimization",
        "llm-pipelines",
        "frameworks",
        "cs329z"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "course": {
        "name": "CS 329Z",
        "week": 3,
        "kind": "必讀",
        "section": "Frameworks & Agent Design",
        "lecture": "Frameworks & Orchestration",
        "url": "https://cs329z.stanford.edu/"
      },
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/dspy-compiling-pipelines/cards.html"
        }
      ]
    },
    {
      "slug": "agent-memory",
      "path": "articles/agent-memory/index.html",
      "title": "Agent Memory：記憶就是決定此刻哪些 token 在 context window 裡",
      "summary": "Letta 部落格 2025 年的概念文章：agent 記得什麼，取決於此刻 context window 裡有什麼，所以設計記憶就是 context 工程。從四種記憶、驅逐與遞迴摘要、記憶區塊、外部儲存與檢索，到 MemGPT 的記憶階層與睡眠時間 agent，每章一張圖解卡加詳細說明，可切換「只看圖卡」。",
      "source": {
        "name": "Letta Blog · Letta",
        "url": "https://www.letta.com/blog/agent-memory",
        "date": "2025-07-07"
      },
      "date": "2026-09-24",
      "tags": [
        "agent-memory",
        "agents",
        "context-engineering",
        "memgpt",
        "cs329z"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "course": {
        "name": "CS 329Z",
        "week": 4,
        "kind": "選讀",
        "section": "Memory & Multi-Agent Systems",
        "lecture": "Agent Memory Architectures",
        "url": "https://cs329z.stanford.edu/"
      },
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/agent-memory/cards.html"
        }
      ]
    },
    {
      "slug": "retrieval-augmented-generation",
      "path": "articles/retrieval-augmented-generation/index.html",
      "title": "Retrieval-Augmented Generation：知識放在模型外面，生成才有出處、也能更新",
      "summary": "RAG 這個詞的出處。Lewis 等人在 2020 年把權重裡的參數記憶和可檢索的維基百科索引接在一起，做成一個端到端微調的生成模型：檢索器 DPR 找前 K 段，生成器 BART 邊看邊寫，找回的段落當隱變數邊緣化。四個開放領域問答資料集拿到當時最好的成績，人評更真實也更具體，換掉索引就能更新知識。每章一張圖解卡加詳細說明，可切換「只看圖卡」。",
      "source": {
        "name": "arXiv · Patrick Lewis、Ethan Perez、Aleksandra Piktus、Fabio Petroni、Vladimir Karpukhin、Naman Goyal、Heinrich Küttler、Mike Lewis、Wen-tau Yih、Tim Rocktäschel、Sebastian Riedel、Douwe Kiela（Facebook AI Research、UCL、NYU）",
        "url": "https://arxiv.org/abs/2005.11401",
        "date": "2020-05-22"
      },
      "date": "2026-09-23",
      "tags": [
        "rag",
        "retrieval",
        "generation",
        "knowledge-intensive",
        "cs329z"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "course": {
        "name": "CS 329Z",
        "week": 2,
        "kind": "必讀",
        "section": "Building Blocks",
        "lecture": "Retrieval-Augmented Generation (RAG)",
        "url": "https://cs329z.stanford.edu/"
      },
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/retrieval-augmented-generation/cards.html"
        }
      ]
    },
    {
      "slug": "execution-grounded-research",
      "path": "articles/execution-grounded-research/index.html",
      "title": "Execution-Grounded Automated AI Research：點子要先被執行，才知道有沒有效",
      "summary": "Stanford 的 Si 等人建了一個自動執行器，把 LLM 提出的研究點子變成程式、丟上 GPU 跑實驗，用結果當回饋。演化搜尋十輪內就在後訓練與預訓練兩個環境超過基準，甚至超過課程排行榜最強的學生；但用執行成績當 RL 獎勵訓練模型，只提高平均、上限不動，模型收斂到幾個安全的簡單點子。每章一張圖解卡加詳細說明，可切換「只看圖卡」。",
      "source": {
        "name": "arXiv · Chenglei Si、Zitong Yang、Yejin Choi、Emmanuel Candès、Diyi Yang、Tatsunori Hashimoto（Stanford）",
        "url": "https://arxiv.org/abs/2601.14525",
        "date": "2026-01-20"
      },
      "date": "2026-09-23",
      "tags": [
        "automated-research",
        "evolutionary-search",
        "reinforcement-learning",
        "agents",
        "cs329z"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "course": {
        "name": "CS 329Z",
        "week": 1,
        "kind": "選讀",
        "section": "Foundations & Landscape",
        "lecture": "Introduction — What Are Agentic Systems?",
        "url": "https://cs329z.stanford.edu/"
      },
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/execution-grounded-research/cards.html"
        }
      ]
    },
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
        "anthropic",
        "cs329z"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "course": {
        "name": "CS 329Z",
        "week": 2,
        "kind": "必讀",
        "section": "Foundations & Landscape",
        "lecture": "LLMs for Builders",
        "url": "https://cs329z.stanford.edu/"
      },
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/effective-agents/cards.html"
        }
      ]
    },
    {
      "slug": "context-engineering",
      "path": "articles/context-engineering/index.html",
      "title": "Effective Context Engineering：context 是有限的資源，每一步都要重新挑",
      "summary": "Anthropic Applied AI 團隊 2025 年的工程文章：模型的注意力是有限的預算，做 agent 的功夫從寫好 prompt，轉向每一步挑出最小、訊號最強的一組 token。從 system prompt 的高度、工具與範例，到即時載入，再到長任務的壓縮、結構化筆記與子 agent，每章一張圖解卡加詳細說明，可切換「只看圖卡」。",
      "source": {
        "name": "Anthropic Engineering · Prithvi Rajasekaran、Ethan Dixon、Carly Ryan、Jeremy Hadfield",
        "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
        "date": "2025-09-29"
      },
      "date": "2026-09-23",
      "tags": [
        "context-engineering",
        "agents",
        "prompt-engineering",
        "anthropic",
        "cs329z"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "course": {
        "name": "CS 329Z",
        "week": 2,
        "kind": "選讀",
        "section": "Foundations & Landscape",
        "lecture": "LLMs for Builders",
        "url": "https://cs329z.stanford.edu/"
      },
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/context-engineering/cards.html"
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
        "llmops",
        "cs329z"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "course": {
        "name": "CS 329Z",
        "week": 1,
        "kind": "必讀",
        "section": "Foundations & Landscape",
        "lecture": "Introduction — What Are Agentic Systems?",
        "url": "https://cs329z.stanford.edu/"
      },
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/compound-ai-systems/cards.html"
        }
      ]
    },
    {
      "slug": "colbert-late-interaction",
      "path": "articles/colbert-late-interaction/index.html",
      "title": "ColBERT：把互動延到最後一步，BERT 級的段落檢索也能又快又準",
      "summary": "Stanford 的 Khattab 與 Zaharia 在 2020 年提出 late interaction：查詢和文件各自用 BERT 編成一袋詞向量，最後才用 MaxSim（每個查詢向量找文件裡最像的向量，再加總）互動。文件可以離線先算好，重排 MS MARCO 的效果和 BERT 相當、延遲少 170 倍以上；分數對剪枝友善，還能用向量索引直接從 880 萬段落裡檢索，召回勝過 BM25 系列。每章一張圖解卡加詳細說明，可切換「只看圖卡」。",
      "source": {
        "name": "arXiv · Omar Khattab、Matei Zaharia（Stanford）",
        "url": "https://arxiv.org/abs/2004.12832",
        "date": "2020-04-27"
      },
      "date": "2026-09-23",
      "tags": [
        "retrieval",
        "late-interaction",
        "bert",
        "rag",
        "cs329z"
      ],
      "formats": [
        "圖卡＋教材整合版"
      ],
      "course": {
        "name": "CS 329Z",
        "week": 2,
        "kind": "選讀",
        "section": "Building Blocks",
        "lecture": "Retrieval-Augmented Generation (RAG)",
        "url": "https://cs329z.stanford.edu/"
      },
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/colbert-late-interaction/cards.html"
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
      "course": {
        "name": "CS 329Z",
        "week": 1,
        "kind": "選讀",
        "section": "Foundations & Landscape",
        "lecture": "Introduction — What Are Agentic Systems?",
        "url": "https://cs329z.stanford.edu/"
      },
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
      "course": null,
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
      "course": null,
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
      "course": null,
      "extras": [
        {
          "label": "圖解卡連續閱讀版",
          "path": "articles/eval-skills/cards.html"
        }
      ]
    }
  ]
};
