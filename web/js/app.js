// Theme mappings for the classification legend & paper node decorations
const THEMES = {
    programming: { bg: '#ebd2b4', border: '#c0392b', badge: 'programming', name: 'Systems Programming', stringColor: '#c0392b' },
    architecture: { bg: '#e0cfa9', border: '#d35400', badge: 'architecture', name: 'System Architecture', stringColor: '#d35400' },
    ai: { bg: '#d4e6cf', border: '#27ae60', badge: 'ai', name: 'Artificial Intelligence', stringColor: '#27ae60' },
    dsa: { bg: '#d6e4f0', border: '#2980b9', badge: 'dsa', name: 'DSA & Algorithms', stringColor: '#2980b9' },
    devops: { bg: '#e8dbf2', border: '#8e44ad', badge: 'devops', name: 'Big Data & DevOps', stringColor: '#8e44ad' },
    root: { bg: '#f5eedc', border: '#7f8c8d', badge: 'root', name: 'Root Board', stringColor: '#7f8c8d' }
};

// Comprehensive curriculum dataset reflecting the detective-board node graph
const NODES = [
    // Level 0: Central Master Node (represented as a Polaroid photo)
    {
        id: 'root',
        text: 'System Architect\n& AI Engineer',
        type: 'root',
        shape: 'polaroid',
        x: 0,
        y: 20,
        r: 65,
        desc: 'The central investigation coordinate bridging Systems Scale and AI Models. Focuses on deep systems understanding coupled with state-of-the-art machine learning integration.',
        concepts: [
            '100-Day Study Plan core milestones',
            'Full Systems Engineering execution',
            'Advanced Model orchestrations & inference bindings'
        ],
        papers: []
    },

    // Level 1: Category Hubs (represented as large torn newspaper headings)
    {
        id: 'prog',
        text: 'Systems Programming',
        type: 'programming',
        parent: 'root',
        shape: 'newspaper_clipping',
        x: -220,
        y: 100,
        desc: 'Analyzing low-level execution mechanics, memory optimizations, concurrent programming patterns, and compile-time boundaries.',
        concepts: [
            'Manual and automatic memory management details',
            'Async event loops and non-blocking sockets execution',
            'High-throughput bindings for machine learning computation'
        ],
        papers: []
    },
    {
        id: 'arch',
        text: 'System Architecture',
        type: 'architecture',
        parent: 'root',
        shape: 'newspaper_clipping',
        x: 0,
        y: -220,
        desc: 'Investigating distributed database engines, network routing logic, global synchronization states, caching architectures, and edge CDNs.',
        concepts: [
            'Consensus pipelines and write replication logs',
            'Consistent hashing and database partition sharding',
            'API Gateways, reverse proxies, and rate control structures'
        ],
        papers: []
    },
    {
        id: 'ai',
        text: 'Artificial Intelligence',
        type: 'ai',
        parent: 'root',
        shape: 'newspaper_clipping',
        x: 220,
        y: 100,
        desc: 'Investigating machine learning foundations, network backpropagation, neural layer configurations, self-attention blocks, and agent-based state machines.',
        concepts: [
            'Adaptive learning rates optimization (Adam/SGD)',
            'Transformer networks self-attention matrices calculations',
            'Cyclic loops multi-agent execution graphs'
        ],
        papers: []
    },

    // Level 2: Sub-Hubs under Systems Programming
    {
        id: 'python',
        text: 'Python Programming',
        type: 'programming',
        parent: 'prog',
        shape: 'note_card',
        x: -400,
        y: 160,
        desc: 'Python script logic, concurrency systems, and high-performance extensions.',
        concepts: [
            'Global Interpreter Lock (GIL) mechanics',
            'Asyncio event loop structures',
            'Pybind11 C-extension wrappers'
        ],
        papers: []
    },
    {
        id: 'go',
        text: 'Go (Golang)',
        type: 'programming',
        parent: 'prog',
        shape: 'note_card',
        x: -240,
        y: 280,
        desc: 'Google Go concurrency engines, routine pipelines, and network servers.',
        concepts: [
            'Goroutines and stack segmentation scheduling',
            'Channels for safe memory communications',
            'High-throughput microservices APIs'
        ],
        papers: []
    },
    {
        id: 'cpp',
        text: 'C++',
        type: 'programming',
        parent: 'prog',
        shape: 'note_card',
        x: -320,
        y: -40,
        desc: 'High-speed object-oriented compiler targets, pointer arithmetics, and model compilation.',
        concepts: [
            'RAII memory management boundaries',
            'CUDA kernel threads mapping',
            'Compilers optimizations and SIMD alignments'
        ],
        papers: []
    },
    {
        id: 'rust',
        text: 'Rust Programming',
        type: 'programming',
        parent: 'prog',
        shape: 'note_card',
        x: -80,
        y: 320,
        desc: 'Compile-safe structures, zero-cost abstractions, and WebAssembly targets.',
        concepts: [
            'Borrow Checker compiler bounds safety rules',
            'Tokio async execution runtimes',
            'WASM compilation for edge inference containers'
        ],
        papers: []
    },

    // Level 3: Python Leaf Nodes & linked papers
    {
        id: 'py_async',
        text: 'Asyncio Concurrency',
        type: 'programming',
        parent: 'python',
        shape: 'tape_label',
        x: -560,
        y: 140,
        desc: 'Analyzing async event structures in Python for non-blocking I/O multiplexing.',
        concepts: ['Generators and awaitable task executions', 'Task scheduling queues in Python standard library'],
        papers: []
    },
    {
        id: 'py_gil',
        text: 'GIL Workarounds',
        type: 'programming',
        parent: 'python',
        shape: 'tape_label',
        x: -540,
        y: 220,
        desc: 'Bypassing the Python Global Interpreter Lock to achieve true CPU core scaling.',
        concepts: ['Multiprocessing memory pipes', 'Releasing GIL thread locks inside custom compiled C-modules'],
        papers: []
    },
    {
        id: 'py_ext',
        text: 'C-Extension Glue',
        type: 'programming',
        parent: 'python',
        shape: 'tape_label',
        x: -480,
        y: 300,
        desc: 'Interfacing speed-optimized C/C++ modules with high-level Python training frameworks.',
        concepts: ['Pybind11 header-only bindings libraries', 'CFFI loading binary libraries directly'],
        papers: []
    },

    // Level 3: Go Leaf Nodes
    {
        id: 'go_patterns',
        text: 'Concurrency Patterns',
        type: 'programming',
        parent: 'go',
        shape: 'tape_label',
        x: -340,
        y: 420,
        desc: 'Applying idiomatic Go patterns to coordinate massive pools of background workers.',
        concepts: ['Fan-In and Fan-Out thread multiplexing', 'Select statements with timeout channel cancel contexts'],
        papers: []
    },
    {
        id: 'go_ms',
        text: 'Microservices APIs',
        type: 'programming',
        parent: 'go',
        shape: 'tape_label',
        x: -220,
        y: 440,
        desc: 'Building highly resilient JSON/gRPC microservice engines in Go.',
        concepts: ['Protocol Buffers schema definitions', 'Reverse proxies, circuit breakers, and trace headers sharing'],
        papers: []
    },
    {
        id: 'go_api',
        text: 'High-throughput APIs',
        type: 'programming',
        parent: 'go',
        shape: 'tape_label',
        x: -100,
        y: 460,
        desc: 'Fine-tuning Go HTTP servers to handle millions of requests with low memory allocations.',
        concepts: ['HTTP socket pools configuration', 'Fast JSON encoders and buffer pooling logic'],
        papers: []
    },

    // Level 3: C++ Leaf Nodes
    {
        id: 'cpp_opt',
        text: 'Memory Optimization',
        type: 'programming',
        parent: 'cpp',
        shape: 'tape_label',
        x: -500,
        y: -100,
        desc: 'Optimizing object allocations for CPU L1/L2 cache locality, using custom compilers flags.',
        concepts: ['Avoid cache misses with structure-of-arrays alignments', 'Zero-allocation memory arenas'],
        papers: []
    },
    {
        id: 'cpp_gpu',
        text: 'GPU/CUDA Programming',
        type: 'programming',
        parent: 'cpp',
        shape: 'tape_label',
        x: -480,
        y: -20,
        desc: 'Writing CUDA kernels to offload tensor calculations directly to parallel hardware arithmetic grids.',
        concepts: ['Thread-block multi-dimensional grids alignment', 'Shared GPU memory optimization techniques'],
        papers: []
    },
    {
        id: 'cpp_engine',
        text: 'Fast Inference Engines',
        type: 'programming',
        parent: 'cpp',
        shape: 'tape_label',
        x: -460,
        y: 60,
        desc: 'Compiling large model architectures to execute with low latency on desktop platforms.',
        concepts: ['Quantization models (INT4, FP8 calculations)', 'GGML model loading, TensorRT engines compilation'],
        papers: []
    },

    // Level 3: Rust Leaf Nodes
    {
        id: 'rust_safe',
        text: 'Safety & Performance',
        type: 'programming',
        parent: 'rust',
        shape: 'tape_label',
        x: 0,
        y: 450,
        desc: 'Achieving C-level memory speed without garbage collectors using Rust ownership.',
        concepts: ['Lifetimes variables compiler enforcement', 'Safe multi-threaded sharing bounds (Sync/Send traits)'],
        papers: []
    },
    {
        id: 'rust_wasm',
        text: 'WASM Edge Runtimes',
        type: 'programming',
        parent: 'rust',
        shape: 'tape_label',
        x: 100,
        y: 430,
        desc: 'Compiling core calculation modules into sandboxed WebAssembly execution packages for edge CDN routers.',
        concepts: ['Wasmtime isolated execution sandbox config', 'V8 bindings runtime integrations'],
        papers: []
    },
    {
        id: 'rust_ext',
        text: 'Native Extensions',
        type: 'programming',
        parent: 'rust',
        shape: 'tape_label',
        x: 200,
        y: 410,
        desc: 'Integrating safe Rust libraries into scripting codebases using native shared objects.',
        concepts: ['Maturin build systems compilation', 'Rust-based tokenizers execution in Python projects'],
        papers: []
    },

    // Level 2: Sub-Hubs under System Architecture
    {
        id: 'dist',
        text: 'Distributed Systems',
        type: 'architecture',
        parent: 'arch',
        shape: 'note_card',
        x: -180,
        y: -300,
        desc: 'Resilient node topologies executing across dynamic global networks.',
        concepts: [
            'Distributed consensus protocols',
            'Network partitioning replication algorithms',
            'Log processing event brokers'
        ],
        papers: [
            { title: 'In Search of an Understandable Consensus Algorithm (Raft)', authors: 'D. Ongaro, J. Ousterhout (2014)', url: 'https://raft.github.io/raft.pdf' },
            { title: 'Paxos Made Simple', authors: 'Leslie Lamport (2001)', url: 'https://lamport.azurewebsites.net/pubs/paxos-simple.pdf' },
            { title: 'Dynamo: Amazon\'s Highly Available Key-value Store', authors: 'G. DeCandia et al. (2007)', url: 'https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf' },
            { title: 'Spanner: Google\'s Globally-Distributed Database', authors: 'J. Corbett et al. (2012)', url: 'https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/39729.pdf' },
            { title: 'Kafka: a Distributed Messaging System for Log Processing', authors: 'J. Kreps et al. (2011)', url: 'https://www.microsoft.com/en-us/research/wp-content/uploads/2011/06/kafka_sosp2011.pdf' }
        ]
    },
    {
        id: 'scale',
        text: 'Scaling & Performance',
        type: 'architecture',
        parent: 'arch',
        shape: 'note_card',
        x: 180,
        y: -300,
        desc: 'Strategies for caching, load balancing, and orchestration.',
        concepts: [
            'In-memory data structures caches',
            'Edge CDN distribution caches',
            'API Gateway orchestration routes'
        ],
        papers: []
    },

    // Level 3: Distributed Systems Leaf Nodes (linked to corresponding papers)
    {
        id: 'dist_cons',
        text: 'Consensus (Raft/Paxos)',
        type: 'architecture',
        parent: 'dist',
        shape: 'tape_label',
        x: -320,
        y: -440,
        desc: 'Ensuring consistent state decisions across clusters of nodes despite hardware and network dropouts.',
        concepts: ['Leader election state timeouts', 'Write log replication commits and rollbacks'],
        papers: [
            { title: 'In Search of an Understandable Consensus Algorithm (Raft)', authors: 'D. Ongaro, J. Ousterhout (2014)', url: 'https://raft.github.io/raft.pdf' },
            { title: 'Paxos Made Simple', authors: 'L. Lamport (2001)', url: 'https://lamport.azurewebsites.net/pubs/paxos-simple.pdf' }
        ]
    },
    {
        id: 'dist_rep',
        text: 'Data Partitioning & Replication',
        type: 'architecture',
        parent: 'dist',
        shape: 'tape_label',
        x: -180,
        y: -460,
        desc: 'Scaling write bounds with partitioning rings, replica distribution, and vector clocks resolving conflicts.',
        concepts: ['Consistent hashing coordinate rings', 'Read-replica sync lag resolving rules'],
        papers: [
            { title: 'Dynamo: Amazon\'s Highly Available Key-value Store', authors: 'G. DeCandia et al. (2007)', url: 'https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf' },
            { title: 'Spanner: Google\'s Globally-Distributed Database', authors: 'J. Corbett et al. (2012)', url: 'https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/39729.pdf' }
        ]
    },
    {
        id: 'dist_msg',
        text: 'Message Brokers (Kafka/RabbitMQ)',
        type: 'architecture',
        parent: 'dist',
        shape: 'tape_label',
        x: -40,
        y: -440,
        desc: 'Routing event logs at scale through high-throughput, sequential disk write structures.',
        concepts: ['Sequential disk append-only write loops', 'Consumer group partition balance controls'],
        papers: [
            { title: 'Kafka: a Distributed Messaging System for Log Processing', authors: 'J. Kreps, N. Narkhede, A. Rao (2011)', url: 'https://www.microsoft.com/en-us/research/wp-content/uploads/2011/06/kafka_sosp2011.pdf' }
        ]
    },

    // Level 3: Scaling & Performance Leaf Nodes
    {
        id: 'scale_cache',
        text: 'Caching (Redis/Memcached)',
        type: 'architecture',
        parent: 'scale',
        shape: 'tape_label',
        x: 80,
        y: -440,
        desc: 'Deploying in-memory data grids to shield database layers from heavy query volumes.',
        concepts: ['Eviction algorithms (LRU, LFU, TTL indices)', 'Cache stampede mitigation using mutex locks'],
        papers: []
    },
    {
        id: 'scale_lb',
        text: 'Load Balancing & CDN',
        type: 'architecture',
        parent: 'scale',
        shape: 'tape_label',
        x: 220,
        y: -460,
        desc: 'Distributing incoming traffic and caching pages close to local users.',
        concepts: ['Layer 4 vs Layer 7 TCP routing calculations', 'Anycast routing protocols configuration'],
        papers: []
    },
    {
        id: 'scale_api',
        text: 'API Gateways & Orchestration',
        type: 'architecture',
        parent: 'scale',
        shape: 'tape_label',
        x: 340,
        y: -440,
        desc: 'Consolidating incoming api calls, managing rate-limits, and token evaluations at the entry gate.',
        concepts: ['Token Bucket and Leaky Bucket rate limiting', 'gRPC-Web to JSON protocol translation layers'],
        papers: []
    },

    // Level 2: Sub-Hubs under Artificial Intelligence
    {
        id: 'ai_base',
        text: 'Deep Learning Foundations',
        type: 'ai',
        parent: 'ai',
        shape: 'note_card',
        x: 240,
        y: 280,
        desc: 'Foundational calculations of neural layers and network optimization.',
        concepts: [
            'Backpropagation algorithm chain rule',
            'Gradient descent and adaptive step optimization',
            'Activation functions and layered distributions'
        ],
        papers: [
            { title: 'Learning Representations by Back-Propagating Errors', authors: 'D. Rumelhart, G. Hinton, R. Williams (1986)', url: 'https://www.nature.com/articles/323533a0.pdf' },
            { title: 'Adam: A Method for Stochastic Optimization', authors: 'D. Kingma, J. Ba (2014)', url: 'https://arxiv.org/pdf/1412.6980.pdf' },
            { title: 'Decoupled Weight Decay Regularization', authors: 'I. Loshchilov, F. Hutter (2017)', url: 'https://arxiv.org/pdf/1711.05101.pdf' },
            { title: 'Long Short-Term Memory', authors: 'S. Hochreiter, J. Schmidhuber (1997)', url: 'https://arxiv.org/pdf/cs/9706301.pdf' },
            { title: 'Gradient-Based Learning Applied to Document Recognition', authors: 'Y. LeCun et al. (1998)', url: 'http://yann.lecun.com/exdb/publis/pdf/lecun-01a.pdf' }
        ]
    },
    {
        id: 'ai_mod',
        text: 'Modern Architectures',
        type: 'ai',
        parent: 'ai',
        shape: 'note_card',
        x: 380,
        y: -20,
        desc: 'Transformers, self-attention, and agent orchestrations.',
        concepts: [
            'Self-attention mechanisms matrices',
            'Vector index query models (RAG)',
            'Multi-Agent conversational loops'
        ],
        papers: [
            { title: 'Attention Is All You Need', authors: 'A. Vaswani et al. (2017)', url: 'https://arxiv.org/pdf/1706.03762.pdf' },
            { title: 'Language Models are Few-Shot Learners', authors: 'T. Brown et al. (2020)', url: 'https://arxiv.org/pdf/2005.14165.pdf' },
            { title: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP', authors: 'P. Lewis et al. (2020)', url: 'https://arxiv.org/pdf/2005.11401.pdf' },
            { title: 'Generative Agents: Interactive Simulacra of Human Behavior', authors: 'J. Park et al. (2023)', url: 'https://arxiv.org/pdf/2304.03442.pdf' },
            { title: 'Autogen: Enabling Next-Gen LLM Applications', authors: 'Q. Wu et al. (2023)', url: 'https://arxiv.org/pdf/2308.08155.pdf' }
        ]
    },

    // Level 3: Deep Learning Leaf Nodes
    {
        id: 'ai_back',
        text: 'Backpropagation & Optimizers',
        type: 'ai',
        parent: 'ai_base',
        shape: 'tape_label',
        x: 320,
        y: 400,
        desc: 'Mathematical convergence using partial derivatives and adaptive weight optimization parameters.',
        concepts: ['Chain rule derivative distributions', 'Second-moment tracking inside AdamW calculations'],
        papers: [
            { title: 'Learning Representations by Back-Propagating Errors', authors: 'D. Rumelhart, G. Hinton, R. Williams (1986)', url: 'https://www.nature.com/articles/323533a0.pdf' },
            { title: 'Adam: A Method for Stochastic Optimization', authors: 'D. Kingma, J. Ba (2014)', url: 'https://arxiv.org/pdf/1412.6980.pdf' },
            { title: 'Decoupled Weight Decay Regularization', authors: 'I. Loshchilov, F. Hutter (2017)', url: 'https://arxiv.org/pdf/1711.05101.pdf' }
        ]
    },
    {
        id: 'ai_topo',
        text: 'Neural Network Topologies',
        type: 'ai',
        parent: 'ai_base',
        shape: 'tape_label',
        x: 420,
        y: 280,
        desc: 'Analyzing network patterns like ConvNets processing spatial grids and Recurrent structures mapping sequences.',
        concepts: ['Weight sharing inside spatial kernels', 'Recurrent cell memory gates controls'],
        papers: [
            { title: 'Long Short-Term Memory', authors: 'S. Hochreiter, J. Schmidhuber (1997)', url: 'https://arxiv.org/pdf/cs/9706301.pdf' },
            { title: 'Gradient-Based Learning Applied to Document Recognition', authors: 'Y. LeCun, L. Bottou, Y. Bengio, P. Haffner (1998)', url: 'http://yann.lecun.com/exdb/publis/pdf/lecun-01a.pdf' }
        ]
    },

    // Level 3: Modern Architectures Leaf Nodes
    {
        id: 'ai_trans',
        text: 'Transformers & Attention',
        type: 'ai',
        parent: 'ai_mod',
        shape: 'tape_label',
        x: 520,
        y: 80,
        desc: 'Investigating query-key-value vector dot products forming the self-attention sequence links.',
        concepts: ['Dot-product attention matrix calculation', 'Feed-forward token-wise transformations'],
        papers: [
            { title: 'Attention Is All You Need', authors: 'A. Vaswani et al. (2017)', url: 'https://arxiv.org/pdf/1706.03762.pdf' }
        ]
    },
    {
        id: 'ai_rag',
        text: 'LLMs & RAG Pipelines',
        type: 'ai',
        parent: 'ai_mod',
        shape: 'tape_label',
        x: 520,
        y: -10,
        desc: 'Merging generative weights with external dense document search engines resolving factual recall problems.',
        concepts: ['Document chunk embeddings generation', 'Vector cosine-similarity indexes queries'],
        papers: [
            { title: 'Language Models are Few-Shot Learners (GPT-3)', authors: 'T. Brown et al. (2020)', url: 'https://arxiv.org/pdf/2005.14165.pdf' },
            { title: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP', authors: 'P. Lewis et al. (2020)', url: 'https://arxiv.org/pdf/2005.11401.pdf' }
        ]
    },
    {
        id: 'ai_agent',
        text: 'Multi-Agent Designs (LangGraph)',
        type: 'ai',
        parent: 'ai_mod',
        shape: 'tape_label',
        x: 480,
        y: -100,
        desc: 'Structuring multi-agent coordinate networks with cyclic logic loops to solve complex software creation tasks.',
        concepts: ['Dynamic routing nodes between LLM loops', 'Shared scratchpad memory schemas'],
        papers: [
            { title: 'Generative Agents: Interactive Simulacra of Human Behavior', authors: 'J. Park, J. O\'Brien, C. Zhang, M. Morris, P. Liang, M. Bernstein (2023)', url: 'https://arxiv.org/pdf/2304.03442.pdf' },
            { title: 'Autogen: Enabling Next-Gen LLM Applications', authors: 'Q. Wu et al. (2023)', url: 'https://arxiv.org/pdf/2308.08155.pdf' }
        ]
    }
];
