// Theme mappings for the classification legend & paper node decorations
const THEMES = {
    programming: { bg: '#ebd2b4', border: '#c0392b', badge: 'programming', name: 'Programming', stringColor: '#c0392b' },
    architecture: { bg: '#e0cfa9', border: '#d35400', badge: 'architecture', name: 'System Architecture', stringColor: '#d35400' },
    ai: { bg: '#d4e6cf', border: '#27ae60', badge: 'ai', name: 'Artificial Intelligence', stringColor: '#27ae60' },
    dsa: { bg: '#d6e4f0', border: '#2980b9', badge: 'dsa', name: 'DSA & Algorithms', stringColor: '#2980b9' },
    devops: { bg: '#e8dbf2', border: '#8e44ad', badge: 'devops', name: 'Big Data & DevOps', stringColor: '#8e44ad' },
    root: { bg: '#f5eedc', border: '#7f8c8d', badge: 'root', name: 'Root Board', stringColor: '#7f8c8d' }
};

// Comprehensive expanded curriculum dataset reflecting the detective-board node graph
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
            'Systems Architecture mastery targets',
            'Full Systems Engineering execution',
            'Advanced Model orchestrations & inference bindings'
        ],
        papers: []
    },

    // Level 1: Category Hubs (represented as large torn newspaper headings)
    {
        id: 'prog',
        text: 'Programming',
        type: 'programming',
        parent: 'root',
        shape: 'newspaper_clipping',
        x: -220,
        y: 100,
        desc: 'Analyzing execution mechanics, programming paradigms, concurrent code patterns, compile-time boundaries, and language-specific platforms.',
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
        papers: [
            { title: 'Python Asyncio Complete Tutorial', authors: 'SuperFastPython Guide (YouTube Course)', url: 'https://www.youtube.com/watch?v=bDwV3T2N6vU' }
        ]
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
        papers: [
            { title: 'Python GIL & Multiprocessing Systems Design', authors: 'David Beazley Lecture (YouTube)', url: 'https://www.youtube.com/watch?v=Obt-vdsClZI' }
        ]
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
        papers: [
            { title: 'C Extensions in Python with Pybind11', authors: 'B. M. Tutorial (Article)', url: 'https://realpython.com/python-bindings-overview/' }
        ]
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
        papers: [
            { title: 'Go Concurrency Patterns', authors: 'Rob Pike Google I/O Lecture (YouTube)', url: 'https://www.youtube.com/watch?v=f6kdp27TYZs' }
        ]
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
        papers: [
            { title: 'Building Microservices in Go', authors: 'Nic Jackson (YouTube Playlist)', url: 'https://www.youtube.com/playlist?list=PLmD8u-IF52KzJkU96T1w42C97978T-8z6' }
        ]
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
        papers: [
            { title: 'Building a High-Throughput HTTP API in Go', authors: 'G. O. Blog (Article)', url: 'https://golang.org/doc/articles/wiki/' }
        ]
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
        papers: [
            { title: 'What Every Programmer Should Know About Memory', authors: 'Ulrich Drepper (Red Hat Paper)', url: 'https://people.freebsd.org/~lstewart/articles/cpumemory.pdf' }
        ]
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
        papers: [
            { title: 'CUDA C++ Programming Crash Course', authors: 'CUDA Education (YouTube)', url: 'https://www.youtube.com/watch?v=4APX_y1P7-8' }
        ]
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
        papers: [
            { title: 'Llama.cpp Deep Dive & Local Run Guide', authors: 'A. K. (YouTube Guide)', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }
        ]
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
        papers: [
            { title: 'Rust Concurrency & Advanced Safety Course', authors: 'Jon Gjengset (YouTube Playlist)', url: 'https://www.youtube.com/playlist?list=PLqbS7v3f_WYk0sXzGsn48qgG0nBf17v0S' }
        ]
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
        papers: [
            { title: 'WebAssembly Edge Runtimes with Rust', authors: 'Second State WASM Tutorial (Video)', url: 'https://www.youtube.com/watch?v=1F_4-y_pMhk' }
        ]
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
        papers: [
            { title: 'Writing Python Extensions in Rust with PyO3', authors: 'B. M. (Article)', url: 'https://pyo3.rs/' }
        ]
    },

    // Level 2: Sub-Hubs under System Architecture
    {
        id: 'dist',
        text: 'Distributed Systems',
        type: 'architecture',
        parent: 'arch',
        shape: 'note_card',
        x: -200,
        y: -220,
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
            { title: 'Kafka: a Distributed Messaging System for Log Processing', authors: 'J. Kreps et al. (2011)', url: 'https://www.microsoft.com/en-us/research/wp-content/uploads/2011/06/kafka_sosp2011.pdf' },
            { title: 'MIT 6.824: Distributed Systems Course', authors: 'Robert Morris (YouTube Course)', url: 'https://www.youtube.com/playlist?list=PLrw6ARFr5ApYPR2t4eB4S6ZyiVCDspRnd' }
        ]
    },
    {
        id: 'scale',
        text: 'Scaling & Performance',
        type: 'architecture',
        parent: 'arch',
        shape: 'note_card',
        x: 200,
        y: -220,
        desc: 'Strategies for caching, load balancing, and orchestration.',
        concepts: [
            'In-memory data structures caches',
            'Edge CDN distribution caches',
            'API Gateway orchestration routes'
        ],
        papers: [
            { title: 'System Design Interview - Building Scalable Systems', authors: 'Alex Xu ByteByteGo (YouTube Channel)', url: 'https://www.youtube.com/@ByteByteGo' }
        ]
    },
    {
        id: 'db',
        text: 'Database Paradigms',
        type: 'architecture',
        parent: 'arch',
        shape: 'note_card',
        x: -120,
        y: -320,
        desc: 'Comparing SQL, NoSQL, and NewSQL architectures for ACID compliance at scale.',
        concepts: [
            'Sharding keys and consistent hashing rings',
            'SQL read replica sync loops',
            'NewSQL global atomic clocks consensus'
        ],
        papers: []
    },
    {
        id: 'obs',
        text: 'Observability & Metrics',
        type: 'architecture',
        parent: 'arch',
        shape: 'note_card',
        x: 120,
        y: -320,
        desc: 'Distributed tracing, telemetry monitoring, metrics logs, and chaos engineering.',
        concepts: [
            'Distributed spans tracing context headers propagation',
            'Prometheus polling pull metrics collections',
            'Chaos monkey fault injection simulations'
        ],
        papers: []
    },
    {
        id: 'arch_lld',
        text: 'Low-Level Design',
        type: 'architecture',
        parent: 'arch',
        shape: 'note_card',
        x: -150,
        y: -120,
        desc: 'Investigating object-oriented analysis, design patterns, schema generation, code decoupling, and interface segregation.',
        concepts: [
            'SOLID design principles application',
            'Creational, Structural, and Behavioral patterns',
            'UML class diagrams and interface specifications'
        ],
        papers: []
    },
    {
        id: 'arch_hld',
        text: 'High-Level Design',
        type: 'architecture',
        parent: 'arch',
        shape: 'note_card',
        x: 150,
        y: -120,
        desc: 'Analyzing large-scale system topology, database federation, caching hierarchies, CDN distribution, and global networking.',
        concepts: [
            'Monolithic vs Microservice decomposition',
            'Event-driven messaging and pub-sub pipelines',
            'High availability and disaster recovery planning'
        ],
        papers: []
    },

    // Level 3: Distributed Systems Leaf Nodes (linked to corresponding papers & courses)
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
            { title: 'Paxos Made Simple', authors: 'L. Lamport (2001)', url: 'https://lamport.azurewebsites.net/pubs/paxos-simple.pdf' },
            { title: 'Raft Consensus Algorithm Explained', authors: 'Visual interactive guide (Video)', url: 'https://www.youtube.com/watch?v=vYp4LYbnnW8' }
        ]
    },
    {
        id: 'dist_rep',
        text: 'Data Replication',
        type: 'architecture',
        parent: 'dist',
        shape: 'tape_label',
        x: -200,
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
        text: 'Message Brokers (Kafka)',
        type: 'architecture',
        parent: 'dist',
        shape: 'tape_label',
        x: -80,
        y: -440,
        desc: 'Routing event logs at scale through high-throughput, sequential disk write structures.',
        concepts: ['Sequential disk append-only write loops', 'Consumer group partition balance controls'],
        papers: [
            { title: 'Kafka: a Distributed Messaging System for Log Processing', authors: 'J. Kreps, N. Narkhede, A. Rao (2011)', url: 'https://www.microsoft.com/en-us/research/wp-content/uploads/2011/06/kafka_sosp2011.pdf' },
            { title: 'Apache Kafka Crash Course', authors: 'Hussein Nasser (YouTube Tutorial)', url: 'https://www.youtube.com/watch?v=R873BlNVUB4' }
        ]
    },

    // Level 3: Database Paradigms Leaf Nodes
    {
        id: 'db_sql',
        text: 'SQL Sharding',
        type: 'architecture',
        parent: 'db',
        shape: 'tape_label',
        x: -240,
        y: -400,
        desc: 'Horizontal partition sharding of relational tables across separate SQL nodes using hashing functions.',
        concepts: ['Range-based vs Hash-based sharding maps', 'Managing multi-node join constraints'],
        papers: [
            { title: 'Database Sharding Crash Course', authors: 'ByteByteGo (YouTube Video)', url: 'https://www.youtube.com/watch?v=5faMjKuB9bc' }
        ]
    },
    {
        id: 'db_nosql',
        text: 'NoSQL Databases',
        type: 'architecture',
        parent: 'db',
        shape: 'tape_label',
        x: -140,
        y: -420,
        desc: 'Tradeoffs of key-value, document, graph, and wide-column structures (Cassandra/MongoDB/DynamoDB).',
        concepts: ['CAP theorem partition boundaries', 'LSM tree engines vs B-Tree write speeds'],
        papers: [
            { title: 'SQL vs NoSQL System Design Tradeoffs', authors: 'FreeCodeCamp Course (YouTube)', url: 'https://www.youtube.com/watch?v=d_jGI8T9H6U' }
        ]
    },
    {
        id: 'db_newsql',
        text: 'NewSQL (Spanner)',
        type: 'architecture',
        parent: 'db',
        shape: 'tape_label',
        x: -40,
        y: -400,
        desc: 'Relational ACID databases that scale horizontally globally using GPS clocks and consensus logs.',
        concepts: ['TrueTime API GPS clock synchronization bounds', 'Two-phase commit overlays Paxos clusters'],
        papers: [
            { title: 'Spanner architecture deep dive', authors: 'Google Cloud Tech (YouTube)', url: 'https://www.youtube.com/watch?v=F0L1WbS19K4' }
        ]
    },

    // Level 3: Observability Leaf Nodes
    {
        id: 'obs_otel',
        text: 'OpenTelemetry Spans',
        type: 'architecture',
        parent: 'obs',
        shape: 'tape_label',
        x: 40,
        y: -400,
        desc: 'Integrating a vendor-agnostic specification to collect and export metrics, logs, and trace spans.',
        concepts: ['Distributed context propagation', 'Collector architecture pipelines config'],
        papers: [
            { title: 'OpenTelemetry Crash Course for Engineers', authors: 'TechWorld with Nana (YouTube Video)', url: 'https://www.youtube.com/watch?v=lB_v2SgA5xM' }
        ]
    },
    {
        id: 'obs_prom',
        text: 'Prometheus Metrics',
        type: 'architecture',
        parent: 'obs',
        shape: 'tape_label',
        x: 140,
        y: -420,
        desc: 'Deploying pull-based systems to scrape metrics and evaluate system status alerts.',
        concepts: ['PromQL multidimensional queries', 'Alertmanager trigger hooks'],
        papers: [
            { title: 'Monitoring Systems with Prometheus & Grafana', authors: 'FreeCodeCamp Tutorial (YouTube)', url: 'https://www.youtube.com/watch?v=481E2R1m2t4' }
        ]
    },
    {
        id: 'obs_fault',
        text: 'Chaos Engineering',
        type: 'architecture',
        parent: 'obs',
        shape: 'tape_label',
        x: 240,
        y: -400,
        desc: 'Injecting controlled faults (network lag, pod deaths) to proactively find architecture gaps.',
        concepts: ['Hypothesizing steady-state boundaries', 'Automating blast radius controls'],
        papers: [
            { title: 'Chaos Engineering Principles & Practices', authors: 'Netflix Tech Blog (Article)', url: 'https://principlesofchaos.org/' }
        ]
    },

    // Level 3: Scaling & Performance Leaf Nodes
    {
        id: 'scale_cache',
        text: 'Caching (Redis)',
        type: 'architecture',
        parent: 'scale',
        shape: 'tape_label',
        x: 80,
        y: -440,
        desc: 'Deploying in-memory data grids to shield database layers from heavy query volumes.',
        concepts: ['Eviction algorithms (LRU, LFU, TTL indices)', 'Cache stampede mitigation using mutex locks'],
        papers: [
            { title: 'Redis Crash Course for Beginners', authors: 'Traversy Media (YouTube Tutorial)', url: 'https://www.youtube.com/watch?v=jgpVdJB2sKQ' }
        ]
    },
    {
        id: 'scale_lb',
        text: 'Load Balancing & CDN',
        type: 'architecture',
        parent: 'scale',
        shape: 'tape_label',
        x: 200,
        y: -460,
        desc: 'Distributing incoming traffic and caching pages close to local users.',
        concepts: ['Layer 4 vs Layer 7 TCP routing calculations', 'Anycast routing protocols configuration'],
        papers: [
            { title: 'Load Balancers & CDNs Explained', authors: 'ByteByteGo System Design (YouTube)', url: 'https://www.youtube.com/watch?v=Kz6E11n5z2U' }
        ]
    },
    {
        id: 'scale_api',
        text: 'API Gateways',
        type: 'architecture',
        parent: 'scale',
        shape: 'tape_label',
        x: 320,
        y: -440,
        desc: 'Consolidating incoming api calls, managing rate-limits, and token evaluations at the entry gate.',
        concepts: ['Token Bucket and Leaky Bucket rate limiting', 'gRPC-Web to JSON protocol translation layers'],
        papers: [
            { title: 'API Gateway Design Pattern in Microservices', authors: 'Hussein Nasser (YouTube Video)', url: 'https://www.youtube.com/watch?v=1y1gK3S1C80' }
        ]
    },
    {
        id: 'lld_solid',
        text: 'SOLID & Clean Code',
        type: 'architecture',
        parent: 'arch_lld',
        shape: 'tape_label',
        x: -280,
        y: -160,
        desc: 'Designing decoupled software components using single responsibility, open-closed, and dependency inversion principles.',
        concepts: ['Dependency injection frameworks', 'Interface contracts and interface segregation rules'],
        papers: [
            { title: 'Design Principles and Design Patterns (SOLID)', authors: 'Robert C. Martin (Clean Architecture)', url: 'https://www.youtube.com/watch?v=zHiWqnTWsn4' }
        ]
    },
    {
        id: 'lld_patterns',
        text: 'Design Patterns',
        type: 'architecture',
        parent: 'arch_lld',
        shape: 'tape_label',
        x: -240,
        y: -90,
        desc: 'Applying Gang of Four patterns (Singleton, Factory, Strategy, Observer) to solve recurring coding structure challenges.',
        concepts: ['Creational vs structural vs behavioral patterns', 'Composition over inheritance paradigms'],
        papers: [
            { title: 'Design Patterns in Object-Oriented Programming', authors: 'Christopher Okhravi (YouTube Course)', url: 'https://www.youtube.com/playlist?list=PLrhzvIcii6GNjpARdnO4ybYBJKgPKg24L' }
        ]
    },
    {
        id: 'lld_schema',
        text: 'Schema & API Design',
        type: 'architecture',
        parent: 'arch_lld',
        shape: 'tape_label',
        x: -160,
        y: -30,
        desc: 'Creating cohesive, type-safe API schemas and database models using industry standard rules.',
        concepts: ['RESTful interface standards and gRPC protocol buffers', 'SQL schema normalizations and indexing models'],
        papers: [
            { title: 'API Design Patterns & Principles', authors: 'Google Cloud Tech / JJ Geewax (YouTube)', url: 'https://www.youtube.com/watch?v=P0a7pE-K1F8' }
        ]
    },
    {
        id: 'hld_micro',
        text: 'Microservices & SOA',
        type: 'architecture',
        parent: 'arch_hld',
        shape: 'tape_label',
        x: 280,
        y: -160,
        desc: 'Decomposing applications into specialized, independently deployable services with service discovery and mesh layers.',
        concepts: ['Service discovery and routing registries', 'Saga pattern managing multi-service database writes'],
        papers: [
            { title: 'Microservices Architecture and System Design', authors: 'GOTO Conferences (YouTube Playlist)', url: 'https://www.youtube.com/playlist?list=PLM-T7aFadMnhS1q_6LhVv0m9LdZtI0g96' }
        ]
    },
    {
        id: 'hld_event',
        text: 'Event-Driven Architecture',
        type: 'architecture',
        parent: 'arch_hld',
        shape: 'tape_label',
        x: 240,
        y: -90,
        desc: 'Structuring asynchronous inter-service workflows using message publishers, subscribers, and transaction logs.',
        concepts: ['Outbox patterns for database transactions', 'Idempotent event consumers handling network repeats'],
        papers: [
            { title: 'Event-Driven System Architecture Guides', authors: 'Confluent / Martin Kleppmann (YouTube Series)', url: 'https://www.youtube.com/playlist?list=PLa7VYi0y5170dpeM4A1Xb32KUpfG5hD2p' }
        ]
    },
    {
        id: 'hld_dr',
        text: 'DR & Availability',
        type: 'architecture',
        parent: 'arch_hld',
        shape: 'tape_label',
        x: 160,
        y: -30,
        desc: 'Designing fault-tolerant systems with geo-replication, automated health check failures, and data recovery steps.',
        concepts: ['Active-Active vs Active-Passive multi-region config', 'RTO (Recovery Time Objective) and RPO targets estimation'],
        papers: [
            { title: 'AWS High Availability & Disaster Recovery Architecture', authors: 'Amazon Web Services (YouTube Course)', url: 'https://www.youtube.com/watch?v=n7z5tW5E_kY' }
        ]
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
            { title: 'Gradient-Based Learning Applied to Document Recognition', authors: 'Y. LeCun et al. (1998)', url: 'http://yann.lecun.com/exdb/publis/pdf/lecun-01a.pdf' },
            { title: 'Neural Networks: Zero to Hero Course', authors: 'Andrej Karpathy (YouTube Course)', url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUb5yFo' }
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
            { title: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP', authors: 'P. Lewis et al. (2020)', url: 'https://arxiv.org/pdf/2005.11401.pdf' }
        ]
    },
    {
        id: 'mlops',
        text: 'AI Infra & MLOps',
        type: 'ai',
        parent: 'ai',
        shape: 'note_card',
        x: 420,
        y: 180,
        desc: 'Scaling training loops, cluster GPU coordination, and low-latency model serving pipelines.',
        concepts: [
            'Distributed training models DDP vs FSDP',
            'Model optimization engines (TensorRT, vLLM)',
            'Vector index search grids'
        ],
        papers: []
    },
    {
        id: 'llm_adv',
        text: 'Advanced LLMs',
        type: 'ai',
        parent: 'ai',
        shape: 'note_card',
        x: 480,
        y: -140,
        desc: 'Fine-tuning, alignment pipelines, and building cyclic multi-agent state systems.',
        concepts: [
            'Parameter-efficient fine-tuning (LoRA)',
            'Preference alignment (DPO, RLHF)',
            'Agentic loops with tools access (ReAct)'
        ],
        papers: []
    },

    // Level 3: Deep Learning Leaf Nodes
    {
        id: 'ai_back',
        text: 'Backpropagation & Optimizers',
        type: 'ai',
        parent: 'ai_base',
        shape: 'tape_label',
        x: 270,
        y: 400,
        desc: 'Mathematical convergence using partial derivatives and adaptive weight optimization parameters.',
        concepts: ['Chain rule derivative distributions', 'Second-moment tracking inside AdamW calculations'],
        papers: [
            { title: 'Learning Representations by Back-Propagating Errors', authors: 'D. Rumelhart, G. Hinton, R. Williams (1986)', url: 'https://www.nature.com/articles/323533a0.pdf' },
            { title: 'Adam: A Method for Stochastic Optimization', authors: 'D. Kingma, J. Ba (2014)', url: 'https://arxiv.org/pdf/1412.6980.pdf' },
            { title: 'Backpropagation & Chain Rule Math', authors: 'Andrej Karpathy (YouTube Video)', url: 'https://www.youtube.com/watch?v=VMj-3S1tku0' }
        ]
    },
    {
        id: 'ai_mlp',
        text: 'Multi-Layer Perceptrons',
        type: 'ai',
        parent: 'ai_base',
        shape: 'tape_label',
        x: 380,
        y: 470,
        desc: 'Building fully-connected neural feedforward layers, mapping input spaces to predictions via matrix weights.',
        concepts: ['Fully-connected linear layer weights matrices', 'Loss function evaluations and backward pass updates'],
        papers: [
            { title: 'Neural Networks: Zero to Hero - Building Spells (MLP)', authors: 'Andrej Karpathy (YouTube Course)', url: 'https://www.youtube.com/watch?v=PaCmpygFfXo' }
        ]
    },
    {
        id: 'ai_cnn',
        text: 'CNNs & Spatial Grids',
        type: 'ai',
        parent: 'ai_base',
        shape: 'tape_label',
        x: 490,
        y: 430,
        desc: 'Analyzing spatial patterns inside multi-dimensional grids using sliding kernel filters and pooling.',
        concepts: ['Shared weights inside convolutional sliding filters', 'Pooling layers downsampling and translation invariance'],
        papers: [
            { title: 'Stanford CS231n: Convolutional Neural Networks for Visual Recognition', authors: 'Fei-Fei Li, Justin Johnson (YouTube Playlist)', url: 'https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv' }
        ]
    },
    {
        id: 'ai_rnn',
        text: 'Recurrent Nets & LSTMs',
        type: 'ai',
        parent: 'ai_base',
        shape: 'tape_label',
        x: 500,
        y: 350,
        desc: 'Processing sequential data streams using recurrent feedback loops and memory gating mechanisms.',
        concepts: ['Vanishing gradient mitigation via memory gates', 'Hidden state transitions across variable-length timelines'],
        papers: [
            { title: 'MIT 6.S191: Recurrent Neural Networks & Sequence Modeling', authors: 'Alexander Amini (YouTube Lecture)', url: 'https://www.youtube.com/watch?v=qjrad0V0uJE' }
        ]
    },
    {
        id: 'ai_embed',
        text: 'Dense Embeddings',
        type: 'ai',
        parent: 'ai_base',
        shape: 'tape_label',
        x: 390,
        y: 290,
        desc: 'Projecting discrete linguistic tokens into low-dimensional continuous vector spaces representing semantics.',
        concepts: ['Skip-gram and continuous bag-of-words architectures', 'Cosine similarity metric spaces for semantic relationships'],
        papers: [
            { title: 'Efficient Estimation of Word Representations in Vector Space (Word2Vec)', authors: 'T. Mikolov et al. (2013)', url: 'https://arxiv.org/pdf/1301.3781.pdf' },
            { title: 'Word Embeddings and Word2Vec Explained', authors: 'StatQuest with Josh Starmer (YouTube Video)', url: 'https://www.youtube.com/watch?v=viZrOnJclY0' }
        ]
    },
    {
        id: 'ai_mem',
        text: 'Memory Vectors & Indexes',
        type: 'ai',
        parent: 'ai_base',
        shape: 'tape_label',
        x: 380,
        y: 370,
        desc: 'Constructing persistent semantic memory stores via multidimensional indexing and similarity queries.',
        concepts: ['Hierarchical Navigable Small World (HNSW) graph structures', 'Inner product and cosine similarity scoring scales'],
        papers: [
            { title: 'Vector Search Explained: From Embeddings to Vector Databases', authors: 'Pinecone / James Briggs (YouTube)', url: 'https://www.youtube.com/watch?v=klTvEwg3o14' }
        ]
    },

    // Level 3: Modern Architectures Leaf Nodes
    {
        id: 'ai_trans',
        text: 'Self-Attention',
        type: 'ai',
        parent: 'ai_mod',
        shape: 'tape_label',
        x: 520,
        y: 80,
        desc: 'Investigating query-key-value vector dot products forming the self-attention sequence links.',
        concepts: ['Dot-product attention matrix calculation', 'Feed-forward token-wise transformations'],
        papers: [
            { title: 'Attention Is All You Need', authors: 'A. Vaswani et al. (2017)', url: 'https://arxiv.org/pdf/1706.03762.pdf' },
            { title: 'GPT Architecture and Self-Attention from Scratch', authors: 'Andrej Karpathy (YouTube Video)', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }
        ]
    },
    {
        id: 'ai_rag',
        text: 'RAG Pipelines',
        type: 'ai',
        parent: 'ai_mod',
        shape: 'tape_label',
        x: 520,
        y: -10,
        desc: 'Merging generative weights with external dense document search engines resolving factual recall problems.',
        concepts: ['Document chunk embeddings generation', 'Vector cosine-similarity indexes queries'],
        papers: [
            { title: 'Retrieval-Augmented Generation (RAG) System Design', authors: 'LangChain Tutorial (YouTube)', url: 'https://www.youtube.com/watch?v=tcqEUSNCn2s' }
        ]
    },

    // Level 3: AI Infrastructure & MLOps Leaf Nodes
    {
        id: 'ml_dist',
        text: 'Distributed Training',
        type: 'ai',
        parent: 'mlops',
        shape: 'tape_label',
        x: 560,
        y: 260,
        desc: 'Scaling model training loops across multiple GPU cards using Data Parallelism (DDP) and ZeRO partitioning.',
        concepts: ['FSDP (Fully Sharded Data Parallel) shard mappings', 'Pipeline Parallelism batch splitting schedules'],
        papers: [
            { title: 'Distributed Training & PyTorch DDP Explained', authors: 'PyTorch Developer Tutorial (YouTube)', url: 'https://www.youtube.com/watch?v=CvdWGsx85zo' }
        ]
    },
    {
        id: 'ml_vdb',
        text: 'Vector Databases',
        type: 'ai',
        parent: 'mlops',
        shape: 'tape_label',
        x: 580,
        y: 180,
        desc: 'Indices designed to search multi-dimensional embedding vectors using approximate nearest neighbors algorithms.',
        concepts: ['HNSW graph indexing hierarchies', 'IVF-PQ quantization sharding strategies'],
        papers: [
            { title: 'Vector Databases & Similarity Search Crash Course', authors: 'Qdrant Core Education (YouTube)', url: 'https://www.youtube.com/watch?v=0kFj237d-W8' }
        ]
    },
    {
        id: 'ml_serve',
        text: 'vLLM Serving Engine',
        type: 'ai',
        parent: 'mlops',
        shape: 'tape_label',
        x: 540,
        y: 100,
        desc: 'Optimizing inference speed with dynamic PagedAttention memory allocations to host LLM endpoints.',
        concepts: ['KV Cache pagination memory management', 'Continuous batching scheduling algorithms'],
        papers: [
            { title: 'vLLM: LLM Serving at Scale with PagedAttention', authors: 'vLLM Dev Team Presentation (YouTube)', url: 'https://www.youtube.com/watch?v=52i3s6eA0p8' }
        ]
    },

    // Level 3: Advanced LLMs Leaf Nodes
    {
        id: 'llm_ft',
        text: 'LoRA Fine-Tuning',
        type: 'ai',
        parent: 'llm_adv',
        shape: 'tape_label',
        x: 620,
        y: -60,
        desc: 'Adapting base LLMs with Low-Rank Adaptation matrices updates, keeping core weights frozen.',
        concepts: ['Rank matrices (A & B) calculations', 'QLoRA 4-bit quantizations fine-tuning'],
        papers: [
            { title: 'Fine-tuning LLMs with LoRA & QLoRA Tutorial', authors: 'Ludwig AI (YouTube Video)', url: 'https://www.youtube.com/watch?v=g68qg38Bc78' }
        ]
    },
    {
        id: 'llm_rlhf',
        text: 'RLHF & Alignment',
        type: 'ai',
        parent: 'llm_adv',
        shape: 'tape_label',
        x: 620,
        y: -140,
        desc: 'Aligning LLMs with human expectations using preference datasets via DPO (Direct Preference Optimization) or PPO.',
        concepts: ['Reward model scoring distributions', 'DPO math without training separate reward nets'],
        papers: [
            { title: 'RLHF & LLM Alignment Pipelines', authors: 'Hugging Face Crash Course (YouTube)', url: 'https://www.youtube.com/watch?v=2MBJOuVqg80' }
        ]
    },
    {
        id: 'llm_agents',
        text: 'Agentic Workflows',
        type: 'ai',
        parent: 'llm_adv',
        shape: 'tape_label',
        x: 560,
        y: -220,
        desc: 'Structuring multi-agent coordinate networks with cyclic logic loops to solve complex software creation tasks.',
        concepts: ['Dynamic routing nodes between LLM loops', 'Shared scratchpad memory schemas'],
        papers: [
            { title: 'Generative Agents: Interactive Simulacra of Human Behavior', authors: 'J. Park, J. O\'Brien, C. Zhang, M. Morris, P. Liang, M. Bernstein (2023)', url: 'https://arxiv.org/pdf/2304.03442.pdf' },
            { title: 'Autogen: Enabling Next-Gen LLM Applications', authors: 'Q. Wu et al. (2023)', url: 'https://arxiv.org/pdf/2308.08155.pdf' }
        ]
    }
];
