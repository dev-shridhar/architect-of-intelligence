# 100-Day Study Plan: System Architect & AI Engineer 🎓🚀

This plan maps out your day-by-day learning schedule over 100 days to achieve master-level capability in both high-scale **System Architecture** and **AI Systems Engineering**.

---

## 📅 Roadmap Overview
*   [Weeks 1-2 (Days 1-14): Systems Programming & Core DSA](#week-1-2-days-1-14-systems-programming--core-dsa)
*   [Weeks 3-5 (Days 15-35): Distributed Systems & Scaling Patterns](#week-3-5-days-15-35-distributed-systems--scaling-patterns)
*   [Weeks 6-8 (Days 36-56): Neural Networks & Transformer Architectures](#week-6-8-days-36-56-neural-networks--transformer-architectures)
*   [Weeks 9-10 (Days 57-70): Retrieval-Augmented Generation & Vector DBs](#week-9-10-days-57-70-retrieval-augmented-generation--vector-dbs)
*   [Weeks 11-12 (Days 71-84): Agentic Systems & Multi-Agent Orchestration](#week-11-12-days-71-84-agentic-systems--multi-agent-orchestration)
*   [Weeks 13-14 (Days 85-98): AI Infrastructure, serving, and MLOps](#week-13-14-days-85-98-ai-infrastructure-serving-and-mlops)
*   [Days 99-100: Capstone Integration & Project Build](#days-99-100-capstone-integration--project-build)

---

## Week 1-2 (Days 1-14): Systems Programming & Core DSA

Focus on writing efficient, concurrent code, and understanding low-level memory layouts.

*   **Day 1-3: Go Concurrency & Pipelines**
    *   *Topic*: Goroutines, channels, selects, and waitgroups.
    *   *Task*: Build a concurrent web crawler in Go that bounds execution concurrency using a worker pool.
    *   *Reference*: [Go Guide](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/languages/go/README.md).
*   **Day 4-6: Rust Memory Safety & Borrow Checker**
    *   *Topic*: Ownership, borrowing, lifetimes, smart pointers (`Box`, `Rc`, `Arc`), and thread safety (`Send` and `Sync`).
    *   *Task*: Implement a thread-safe thread pool in Rust from scratch.
    *   *Reference*: [Rust Guide](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/languages/rust/README.md).
*   **Day 7-9: C++ Low-Level Memory & RAII**
    *   *Topic*: Raw vs. Smart pointers, memory cache lines (row vs. column major), and RAII resource allocation.
    *   *Task*: Build a custom 2D Matrix class in C++ optimized for CPU cache hit performance (row-major matrix multiplication).
    *   *Reference*: [C++ Guide](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/languages/cpp/README.md).
*   **Day 10-12: Python Optimization & GIL Bypass**
    *   *Topic*: Asyncio event loops, multiprocessing, generators, and C-bindings (Pybind11).
    *   *Task*: Write a CPU-bound dataset processing pipeline using multiprocessing to bypass Python's GIL.
    *   *Reference*: [Python Guide](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/languages/python/README.md).
*   **Day 13-14: Classic Algorithms (CLRS Core)**
    *   *Topic*: Hash tables, heap structures, tree search (BFS/DFS), and Dijkstra’s shortest path.
    *   *Task*: Solve 5 advanced graph-traversal problems on Leetcode.

---

## Week 3-5 (Days 15-35): Distributed Systems & Scaling Patterns

Master standard system design components and real-world company case studies.

*   **Day 15-18: Caching & Rate Limiting**
    *   *Topic*: Cache-aside vs. Write-through, Token Bucket and Sliding Window rate limiters.
    *   *Task*: Implement a sliding window log rate limiter middleware in Go.
    *   *Reference*: [System Scaling Article](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/articles/system_scaling.md).
*   **Day 19-22: Databases Scaling (Replication & Sharding)**
    *   *Topic*: Eventual consistency, read replicas, consistent hashing, horizontal sharding keys.
    *   *Task*: Design a sharding manager that maps User IDs to shards using consistent hashing.
*   **Day 23-26: Distributed Consensus (Raft/Paxos)**
    *   *Topic*: Leader election, log replication, safety boundaries.
    *   *Task*: Read [raft_consensus.pdf](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/research_papers/algorithms/raft_consensus.pdf) and write a mock leader election simulation.
*   **Day 27-30: Seminal Designs (System Mock Interviews)**
    *   *Topic*: Unique ID generators (Snowflake), TinyURL, Web Crawlers, and Chat systems.
    *   *Task*: Draw the system architecture diagram for a high-concurrency chat app (using WebSocket servers and Redis Pub/Sub).
*   **Day 31-35: Company Case Studies**
    *   *Topic*: Google GFS, Amazon Dynamo, LinkedIn Kafka, Facebook Memcached, Netflix Chaos Monkey, and Uber SWIM gossip.
    *   *Task*: Summarize core structural bottlenecks and design solutions for these companies.
    *   *Reference*: [Company Case Studies](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/articles/company_case_studies.md).

---

## Week 6-8 (Days 36-56): Neural Networks & Transformer Architectures

Shift into Deep Learning, backpropagation, and multi-head attention mechanisms.

*   **Day 36-39: Neural Net Math & Backpropagation**
    *   *Topic*: Matrix weight operations, derivatives, Chain Rule calculations.
    *   *Task*: Implement a basic 2-layer Feedforward Neural Network in raw NumPy (with manual backward pass math).
    *   *Reference*: [Neural Network Foundations](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/articles/neural_network_foundations.md).
*   **Day 40-43: Training Optimizers**
    *   *Topic*: Stochastic Gradient Descent (SGD) with momentum, Adam, and AdamW weight decay.
    *   *Task*: Write custom SGD and Adam optimizers from scratch and compare their loss convergence rate on toy datasets.
*   **Day 44-48: Convolutional Neural Networks (CNNs)**
    *   *Topic*: Convolutions, kernels, pooling, and image feature maps.
    *   *Task*: Read the AlexNet paper [alexnet_2012.pdf](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/research_papers/neural_nets/alexnet_2012.pdf) and implement it using PyTorch.
*   **Day 49-53: Self-Attention & Transformers**
    *   *Topic*: Query, Key, Value mappings, multi-head self-attention.
    *   *Task*: Read the Transformer paper [attention_is_all_you_need.pdf](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/research_papers/transformers/attention_is_all_you_need.pdf). Write a single-head Self-Attention layer in PyTorch.
*   **Day 54-56: Contextual Transformers (BERT & GPT)**
    *   *Topic*: Masked Language Modeling vs. Autoregressive decoding, pre-training pipelines.
    *   *Task*: Read the BERT paper [bert_language_understanding.pdf](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/research_papers/transformers/bert_language_understanding.pdf).

---

## Week 9-10 (Days 57-70): Retrieval-Augmented Generation & Vector DBs

Master semantic search pipelines and vector databases at scale.

*   **Day 57-60: Semantic Embeddings & Dense Retrieval**
    *   *Topic*: Dense Passage Retrieval (DPR), cosine similarity vs. dot product, generating vector embeddings.
    *   *Task*: Read the RAG paper [rag_2020.pdf](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/research_papers/memory_rag/rag_2020.pdf) and build a semantic search pipeline over a PDF using LangChain and ChromaDB.
*   **Day 61-64: Vector Database Indexing (HNSW & IVF-PQ)**
    *   *Topic*: Navigable small world graphs, product quantization compression.
    *   *Task*: Write a script using FAISS to index 100,000 vectors using HNSW and evaluate query latencies.
*   **Day 65-67: Context Window Extrapolation**
    *   *Topic*: Rotary Position Embeddings (RoPE), ALiBi biases, and Ring Attention mechanisms.
    *   *Task*: Read [rope_embeddings_2021.pdf](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/research_papers/memory_rag/rope_embeddings_2021.pdf) and analyze positional representations.
*   **Day 68-70: Advanced Retrieval (Self-RAG & FLARE)**
    *   *Topic*: Reflection tokens, active query retrieval triggers.
    *   *Task*: Build a RAG setup that actively decides to query the vector database only when token prediction probability drops below 0.8.

---

## Week 11-12 (Days 71-84): Agentic Systems & Multi-Agent Orchestration

Learn how to build autonomous systems that reason, run tools, and collaborate.

*   **Day 71-74: ReAct & Toolformer**
    *   *Topic*: Thought-Action-Observation loops, teaching LLMs to format API tools.
    *   *Task*: Read [react_prompting_2022.pdf](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/research_papers/rl_agents/react_prompting_2022.pdf). Write a custom ReAct agent loop from scratch using standard Python without external frameworks.
    *   *Reference*: [Multi-Agent Design](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/articles/multi_agent_design.md).
*   **Day 75-78: CrewAI & LangGraph Frameworks**
    *   *Topic*: Role-playing agent groups, cyclic state graph flows.
    *   *Task*: Build a LangGraph application implementing an Orchestrator-Worker pattern to write and critique documentation automatically.
*   **Day 79-81: Model Context Protocol (MCP)**
    *   *Topic*: Open standardized client-server connections for AI tools.
    *   *Task*: Write a custom MCP server in Python that queries a local sqlite database and hook it up to your LLM agent.
*   **Day 82-84: Agent Memory Architectures**
    *   *Topic*: Short-term conversational context buffers vs. long-term semantic summary databases.
    *   *Task*: Implement a dynamic context summarizing memory buffer for chat logs.

---

## Week 13-14 (Days 85-98): AI Infrastructure, serving, and MLOps

Deepen into multi-GPU training clusters and optimized GPU model serving setups.

*   **Day 85-88: Distributed Training Frameworks**
    *   *Topic*: Tensor Parallelism, Pipeline Parallelism, Data Parallelism, and DeepSpeed ZeRO.
    *   *Task*: Study the DeepSpeed ZeRO partition strategies.
    *   *Reference*: [AI Infrastructure Scaling](file:///Users/shridharkulkakrni/.gemini/antigravity-ide/scratch/architect-of-intelligence/articles/ai_infrastructure_scaling.md).
*   **Day 89-92: High-Performance Model Serving**
    *   *Topic*: PagedAttention, KV Cache management, continuous batching.
    *   *Task*: Set up a local vLLM serving gateway to run a Llama model and benchmark inference request throughput using different batch sizes.
*   **Day 93-95: Quantization (AWQ/GPTQ)**
    *   *Topic*: Model compression, 4-bit weights quantization.
    *   *Task*: Compress a model to 4-bit precision using AWQ.
*   **Day 96-98: MLOps Pipelines & Drift**
    *   *Topic*: Feature stores (Feast), model drift tracking, validation.
    *   *Task*: Set up a basic Feast feature store to serve features concurrently.

---

## Days 99-100: Capstone Integration & Project Build

*   **Day 99-100: Capstone Project**
    *   *Objective*: Design and build a stateful, retrieval-augmented multi-agent assistant that can pull real-time server logs via a custom MCP server, analyze scaling bottlenecks, and run local Python code simulations to propose fixes.
    *   *Setup*: Place code in your workspace, upload to your GitHub repository, and update your portfolio.
