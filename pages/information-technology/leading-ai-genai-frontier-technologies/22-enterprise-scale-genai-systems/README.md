# Module 22 — Enterprise-Scale GenAI Systems: Building Resilient, Cost-Effective AI Infrastructure

> Pillar 3: Leading AI, GenAI & Frontier Technologies · Priority: **P1** · Status: Not started

## Definition and scope

Designing and running GenAI systems at enterprise scale, where quality, latency, cost, security and operability have to be balanced against each other.

- **In scope:** RAG architecture, model routing, evals, observability, privacy, caching, inference costs, rate limits, fallback, guardrails, SLO.
- **Out of scope:** designing human–AI workflows and agents in the organisation (Module 23); governance policy (Module 24).

## Free learning resources

- [Anthropic Academy](https://anthropic.skilljar.com/) — the *Building with the Claude API*, *Introduction to Model Context Protocol* and *MCP: Advanced Topics* courses, with certificates of completion.
- [Anthropic — Building effective agents](https://www.anthropic.com/research/building-effective-agents) — workflow and agent patterns, and when to use which.
- [Claude Developer Platform — Docs](https://platform.claude.com/docs/en/home) — documentation on prompt caching, tool use, evals and limits.
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) — security risks specific to LLM applications.
- [DeepLearning.AI — Courses](https://www.deeplearning.ai/courses) — many short free courses on RAG, evals and agents.

## Udemy

- [AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents](https://www.udemy.com/course/llm-engineering-master-ai-and-large-language-models/) — 4.7★, ~46K ratings.
- [LangChain & LangGraph AI Engineer: Agents, Agentic RAG & MCP](https://www.udemy.com/course/langchain/) — 4.7★, ~56K ratings.

## Theory to master

- [ ] Design a RAG architecture and know where it tends to fail (retrieval, chunking, context).
- [ ] Understand how inference cost is calculated and the levers that cut it: caching, routing, batching.
- [ ] Design evals and observability for non-deterministic systems.
- [ ] Know the guardrails and fallbacks for when the model is wrong or the provider is down.

## Practical deliverables

- **Deliverable:** a reference architecture for an enterprise AI assistant, with an estimated 3-year TCO, SLOs and a security checklist.
- **Done when:** every trade-off between quality, latency, cost, security and operations has a clear rationale.

---
*Sources checked 2026-11-24. Udemy ratings and review counts are as of that date.*
