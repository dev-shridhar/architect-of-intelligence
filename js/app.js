// Theme mappings for the classification legend & paper node decorations
const THEMES = {
    programming: { bg: '#d3c0ad', border: '#7f3830', badge: 'programming', name: 'Programming', stringColor: '#8e3d36' },
    architecture: { bg: '#cdbfab', border: '#8c4d28', badge: 'architecture', name: 'System Architecture', stringColor: '#9e5933' },
    ai: { bg: '#c3ccbf', border: '#3a6b46', badge: 'ai', name: 'Artificial Intelligence', stringColor: '#477c55' },
    dsa: { bg: '#c4cbd1', border: '#325d7c', badge: 'dsa', name: 'DSA & Algorithms', stringColor: '#3f6b8c' },
    devops: { bg: '#ccbfd2', border: '#5c3d6c', badge: 'devops', name: 'Big Data & DevOps', stringColor: '#6e4f80' },
    root: { bg: '#e2d9c4', border: '#5e6366', badge: 'root', name: 'Root Board', stringColor: '#6c7275' }
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
        papers: [
            { title: 'System Design for AI Engineers and Architects', authors: 'Hussein Nasser / TechWorld (YouTube)', url: 'https://www.youtube.com/watch?v=R873BlNVUB4' }
        ]
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
        papers: [
            { title: 'Computer Science & Programming Fundamentals Course', authors: 'CS50 Harvard (YouTube Course)', url: 'https://www.youtube.com/playlist?list=PLhQjrBD2T382_R182fhXOhyDcPkAsGoVM' }
        ]
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
        papers: [
            { title: 'System Design Course for Beginners', authors: 'FreeCodeCamp / Developer Roadmaps (YouTube Course)', url: 'https://www.youtube.com/watch?v=m8I0fJipeCc' }
        ]
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
        papers: [
            { title: 'AI for Everyone Course', authors: 'Andrew Ng / DeepLearning.AI (YouTube Playlist)', url: 'https://www.youtube.com/playlist?list=PLkDaE6sC76OT6715fF1Sg0n6e5wO_gHEx' }
        ]
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
        papers: [
            { title: 'Python Programming Full Course', authors: 'FreeCodeCamp / Programming with Mosh (YouTube)', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' }
        ]
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
        papers: [
            { title: 'Go Programming Tutorial for Beginners', authors: 'FreeCodeCamp / Tech with Tim (YouTube)', url: 'https://www.youtube.com/watch?v=YS4e4q9oBaU' }
        ]
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
        papers: [
            { title: 'C++ Programming Full Course', authors: 'The Cherno (YouTube Course Playlist)', url: 'https://www.youtube.com/playlist?list=PLlrATfgbY1gpN0714n8vJ4xegM8QWzSFG' }
        ]
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
        papers: [
            { title: 'Rust Programming Course for Beginners', authors: 'FreeCodeCamp (YouTube Video)', url: 'https://www.youtube.com/watch?v=BpPEoGMzHyA' }
        ]
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
        y: -240,
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
        y: -240,
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
        x: -90,
        y: -340,
        desc: 'Comparing SQL, NoSQL, and NewSQL architectures for ACID compliance at scale.',
        concepts: [
            'Sharding keys and consistent hashing rings',
            'SQL read replica sync loops',
            'NewSQL global atomic clocks consensus'
        ],
        papers: [
            { title: 'Database Systems & Architecture Lecture Series', authors: 'CMU Database Group / Andy Pavlo (YouTube)', url: 'https://www.youtube.com/playlist?list=PLSE8ODhjFmxmas09J33vX4bF28f_d90jR' }
        ]
    },
    {
        id: 'obs',
        text: 'Observability & Metrics',
        type: 'architecture',
        parent: 'arch',
        shape: 'note_card',
        x: 90,
        y: -340,
        desc: 'Distributed tracing, telemetry monitoring, metrics logs, and chaos engineering.',
        concepts: [
            'Distributed spans tracing context headers propagation',
            'Prometheus polling pull metrics collections',
            'Chaos monkey fault injection simulations'
        ],
        papers: [
            { title: 'Observability in Modern Distributed Systems', authors: 'Charity Majors / Honeycomb (YouTube Lecture)', url: 'https://www.youtube.com/watch?v=F0L1WbS19K4' }
        ]
    },
    {
        id: 'arch_lld',
        text: 'Low-Level Design',
        type: 'architecture',
        parent: 'arch',
        shape: 'note_card',
        x: -260,
        y: -120,
        desc: 'Investigating object-oriented analysis, design patterns, schema generation, code decoupling, and interface segregation.',
        concepts: [
            'SOLID design principles application',
            'Creational, Structural, and Behavioral patterns',
            'UML class diagrams and interface specifications'
        ],
        papers: [
            { title: 'Low-Level Design (LLD) Boot Camp & Patterns', authors: 'Karan S. (YouTube Course Playlist)', url: 'https://www.youtube.com/playlist?list=PL6W8xrUL92_yyG6n9v1n1fT97pPgp5_2b' }
        ]
    },
    {
        id: 'arch_hld',
        text: 'High-Level Design',
        type: 'architecture',
        parent: 'arch',
        shape: 'note_card',
        x: 260,
        y: -120,
        desc: 'Analyzing large-scale system topology, database federation, caching hierarchies, CDN distribution, and global networking.',
        concepts: [
            'Monolithic vs Microservice decomposition',
            'Event-driven messaging and pub-sub pipelines',
            'High availability and disaster recovery planning'
        ],
        papers: [
            { title: 'High-Level Design (HLD) Masterclass', authors: 'Gaurav Sen / System Design (YouTube)', url: 'https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPy92c' }
        ]
    },

    // Level 3: Distributed Systems Leaf Nodes (linked to corresponding papers & courses)
    {
        id: 'dist_cons',
        text: 'Consensus (Raft/Paxos)',
        type: 'architecture',
        parent: 'dist',
        shape: 'tape_label',
        x: -340,
        y: -260,
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
        x: -310,
        y: -320,
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
        x: -260,
        y: -380,
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
        x: -160,
        y: -420,
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
        x: -110,
        y: -460,
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
        y: -430,
        desc: 'Relational ACID databases that scale horizontally globally using GPS clocks and consensus logs.',
        concepts: ['TrueTime API GPS clock synchronization bounds', 'Two-phase commit overlays Paxos clusters'],
        papers: [
            { title: 'Spanner architecture deep dive', authors: 'Google Cloud Tech (YouTube)', url: 'https://www.youtube.com/watch?v=F0L1WbS19K4' }
        ]
    },
    {
        id: 'db_acid',
        text: 'ACID & Transactions',
        type: 'architecture',
        parent: 'db',
        shape: 'tape_label',
        x: -100,
        y: -500,
        desc: 'Analyzing database transaction guarantees: Atomicity, Consistency, Isolation, and Durability.',
        concepts: ['Two-phase locking and MVCC concurrency', 'Write-ahead logging (WAL) for durability guarantees'],
        papers: [
            { title: 'Granularity of Locks and System R Transaction Isolation', authors: 'Jim Gray et al. (1975)', url: 'https://www.cs.berkeley.edu/~brewer/cs262b/SystemR.pdf' },
            { title: 'ACID Transactions Explained', authors: 'Hussein Nasser (YouTube Video)', url: 'https://www.youtube.com/watch?v=y2yA3nUor8w' }
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
        y: -430,
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
        x: 110,
        y: -460,
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
        x: 160,
        y: -420,
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
        x: 260,
        y: -380,
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
        x: 310,
        y: -320,
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
        x: 340,
        y: -260,
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
        x: -380,
        y: -150,
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
        x: -380,
        y: -100,
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
        x: -200,
        y: -60,
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
        x: 200,
        y: -60,
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
        x: 380,
        y: -100,
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
        x: 380,
        y: -150,
        desc: 'Designing fault-tolerant systems with geo-replication, automated health check failures, and data recovery steps.',
        concepts: ['Active-Active vs Active-Passive multi-region config', 'RTO (Recovery Time Objective) and RPO targets estimation'],
        papers: [
            { title: 'AWS High Availability & Disaster Recovery Architecture', authors: 'Amazon Web Services (YouTube Course)', url: 'https://www.youtube.com/watch?v=n7z5tW5E_kY' }
        ]
    },
    {
        id: 'hld_system_design',
        text: 'System Design Roadmap',
        type: 'architecture',
        parent: 'arch_hld',
        shape: 'tape_label',
        x: 240,
        y: -180,
        desc: 'A comprehensive roadmap for designing scalable systems from scratch, centering on architecture methodologies.',
        concepts: ['Back-of-the-envelope calculations', 'Load balancing and multi-tier network topologies'],
        papers: [
            { title: 'System Design Primer - Core High-Level Architecture Rules', authors: 'Donne Martin (Interactive GitHub Roadmap)', url: 'https://github.com/donnemartin/system-design-primer' }
        ]
    },

    // Level 2: Sub-Hubs under Artificial Intelligence
    {
        id: 'ai_foundations',
        text: 'Foundations & Optimization',
        type: 'ai',
        parent: 'ai',
        shape: 'note_card',
        x: 240,
        y: 280,
        desc: 'Seminal research papers forming the mathematical and algorithmic foundations of neural network training and optimization.',
        concepts: [
            'Backpropagation chain rule formulations',
            'CNN spatial filtering and translation invariance',
            'Vanishing gradient mitigation in recurrent sequences',
            'Diffusion noise estimation models'
        ],
        papers: [
            { title: 'Neural Networks: Zero to Hero Course', authors: 'Andrej Karpathy (YouTube Course)', url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUb5yFo' }
        ]
    },
    {
        id: 'ai_transformers',
        text: 'Transformers & Attention',
        type: 'ai',
        parent: 'ai',
        shape: 'note_card',
        x: 380,
        y: -20,
        desc: 'Seminal papers introducing the self-attention mechanism, transformer encoders, and scaled generative models.',
        concepts: [
            'Query-Key-Value self-attention computation',
            'Bidirectional masked representation learning',
            'In-context few-shot learning dynamics',
            'Efficient rotary position embeddings (RoPE)'
        ],
        papers: [
            { title: 'Transformers & LLM Foundations Course', authors: 'Andrej Karpathy (YouTube Guide)', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }
        ]
    },
    {
        id: 'ai_retrieval',
        text: 'Retrieval & RAG Systems',
        type: 'ai',
        parent: 'ai',
        shape: 'note_card',
        x: 420,
        y: 180,
        desc: 'Seminal architectures linking parametric neural weights with non-parametric external vector search databases.',
        concepts: [
            'Hierarchical navigable small world graphs (HNSW)',
            'Joint generator-retriever optimization loops',
            'Dual bi-encoder dense space alignment',
            'Latent retriever pre-training methods'
        ],
        papers: [
            { title: 'Retrieval-Augmented Generation (RAG) System Design', authors: 'LangChain Tutorial (YouTube)', url: 'https://www.youtube.com/watch?v=tcqEUSNCn2s' }
        ]
    },
    {
        id: 'ai_agents',
        text: 'RL, Agents & Alignment',
        type: 'ai',
        parent: 'ai',
        shape: 'note_card',
        x: 480,
        y: -140,
        desc: 'Seminal papers developing reinforcement learning algorithms, preference alignment, and tool-use agent loops.',
        concepts: [
            'Deep Q-learning visual feature extraction',
            'Monte Carlo tree search (MCTS) tree evaluations',
            'Clipped surrogate objective updates (PPO)',
            'Preference alignment (DPO, RLHF)',
            'Interleaved reasoning-action loops (ReAct)'
        ],
        papers: [
            { title: 'Generative Agents & Multi-Agent Runtimes', authors: 'Stanford / AutoGen (YouTube guides)', url: 'https://www.youtube.com/watch?v=tcqEUSNCn2s' }
        ]
    },

    // Level 3: Neural Networks & Optimization Papers
    {
        id: 'paper_backprop',
        text: 'Backprop (Rumelhart 1986)',
        type: 'ai',
        parent: 'ai_foundations',
        shape: 'tape_label',
        x: 300,
        y: 390,
        desc: 'Seminal paper introducing the backpropagation algorithm using the chain rule of calculus to train multi-layer feedforward networks.',
        concepts: ['Chain rule partial derivatives propagation', 'Gradient-based weight adjustment minimization'],
        papers: [
            { title: 'Learning Representations by Back-Propagating Errors', authors: 'D. Rumelhart, G. Hinton, R. Williams (1986)', url: 'https://www.nature.com/articles/323533a0.pdf' }
        ]
    },
    {
        id: 'paper_lstm',
        text: 'LSTM Cells (Hochreiter 1997)',
        type: 'ai',
        parent: 'ai_foundations',
        shape: 'tape_label',
        x: 180,
        y: 440,
        desc: 'Introduced the Long Short-Term Memory cell structure utilizing gating mechanisms to prevent vanishing gradients in sequential loops.',
        concepts: ['Constant error carousels (CEC) gate dynamics', 'Cell state persistence across time-steps'],
        papers: [
            { title: 'Long Short-Term Memory', authors: 'S. Hochreiter, J. Schmidhuber (1997)', url: 'https://arxiv.org/pdf/cs/9706301.pdf' }
        ]
    },
    {
        id: 'paper_cnn',
        text: 'LeNet CNN (LeCun 1998)',
        type: 'ai',
        parent: 'ai_foundations',
        shape: 'tape_label',
        x: 290,
        y: 460,
        desc: 'Seminal paper introducing convolutional layers, weight sharing, subsampling, and spatial filters for character recognition.',
        concepts: ['Spatial weight sharing & translation invariance', 'Feature maps stacking & average pooling layers'],
        papers: [
            { title: 'Gradient-Based Learning Applied to Document Recognition', authors: 'Y. LeCun et al. (1998)', url: 'http://yann.lecun.com/exdb/publis/pdf/lecun-01a.pdf' }
        ]
    },
    {
        id: 'paper_alexnet',
        text: 'AlexNet Vision (Krizhevsky 2012)',
        type: 'ai',
        parent: 'ai_foundations',
        shape: 'tape_label',
        x: 400,
        y: 450,
        desc: 'The landmark deep CNN architecture utilizing GPU training, ReLU activations, and dropout regularization, initiating deep learning.',
        concepts: ['ReLU non-linear activations bypassing saturation', 'Dual-GPU model parallel training architectures'],
        papers: [
            { title: 'ImageNet Classification with Deep Convolutional Neural Networks', authors: 'A. Krizhevsky, I. Sutskever, G. Hinton (2012)', url: 'https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf' }
        ]
    },
    {
        id: 'paper_adam',
        text: 'Adam Optimizer (Kingma 2014)',
        type: 'ai',
        parent: 'ai_foundations',
        shape: 'tape_label',
        x: 390,
        y: 380,
        desc: 'Introduced the Adam optimizer, adapting learning rates based on first and second moments of gradients.',
        concepts: ['Exponential decay moving averages computation', 'Bias correction formulas for initial time-steps'],
        papers: [
            { title: 'Adam: A Method for Stochastic Optimization', authors: 'D. Kingma, J. Ba (2014)', url: 'https://arxiv.org/pdf/1412.6980.pdf' }
        ]
    },
    {
        id: 'paper_resnet',
        text: 'ResNet Skips (He 2015)',
        type: 'ai',
        parent: 'ai_foundations',
        shape: 'tape_label',
        x: 410,
        y: 300,
        desc: 'Introduced residual learning frameworks using identity shortcut connections to enable training of extremely deep networks.',
        concepts: ['Identity mapping shortcuts bypassing layers', 'Reformulated residual optimization targets mapping'],
        papers: [
            { title: 'Deep Residual Learning for Image Recognition', authors: 'K. He, X. Zhang, S. Ren, J. Sun (2015)', url: 'https://arxiv.org/pdf/1512.03385.pdf' }
        ]
    },
    {
        id: 'paper_diffusion',
        text: 'Diffusion DDPM (Ho 2020)',
        type: 'ai',
        parent: 'ai_foundations',
        shape: 'tape_label',
        x: 300,
        y: 310,
        desc: 'Established high-quality generative modeling using Markov chains with denoising score matching to construct data distributions.',
        concepts: ['Forward noise scheduling and backward denoising loops', 'Variational bound optimization on joint likelihoods'],
        papers: [
            { title: 'Denoising Diffusion Probabilistic Models', authors: 'J. Ho, A. Jain, P. Abbeel (2020)', url: 'https://arxiv.org/pdf/2006.11239.pdf' }
        ]
    },

    // Level 3: Transformers & Attention Papers
    {
        id: 'paper_attention',
        text: 'Self-Attention (Vaswani 2017)',
        type: 'ai',
        parent: 'ai_transformers',
        shape: 'tape_label',
        x: 530,
        y: 80,
        desc: 'Seminal Attention Is All You Need paper replacing recurrent/convolutional layers with QKV self-attention projections.',
        concepts: ['Scaled dot-product attention formula evaluation', 'Multi-head attention parallel representations matching'],
        papers: [
            { title: 'Attention Is All You Need', authors: 'A. Vaswani et al. (2017)', url: 'https://arxiv.org/pdf/1706.03762.pdf' }
        ]
    },
    {
        id: 'paper_bert',
        text: 'BERT (Devlin 2018)',
        type: 'ai',
        parent: 'ai_transformers',
        shape: 'tape_label',
        x: 520,
        y: 0,
        desc: 'Introduced deep bidirectional representations via Masked Language Modeling, setting records in language understanding.',
        concepts: ['Masked Language Model (MLM) pre-training targets', 'Next Sentence Prediction (NSP) classifications'],
        papers: [
            { title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding', authors: 'J. Devlin et al. (2018)', url: 'https://arxiv.org/pdf/1810.04805.pdf' }
        ]
    },
    {
        id: 'paper_gpt3',
        text: 'GPT-3 LLMs (Brown 2020)',
        type: 'ai',
        parent: 'ai_transformers',
        shape: 'tape_label',
        x: 510,
        y: -80,
        desc: 'Showed that scaling auto-regressive language models allows in-context few-shot learning without parameter updates.',
        concepts: ['In-context meta-learning via task prompts', 'Autoregressive generation at 175-billion parameters scale'],
        papers: [
            { title: 'Language Models are Few-Shot Learners', authors: 'T. Brown et al. (2020)', url: 'https://arxiv.org/pdf/2005.14165.pdf' }
        ]
    },
    {
        id: 'paper_llama',
        text: 'LLaMA Models (Touvron 2023)',
        type: 'ai',
        parent: 'ai_transformers',
        shape: 'tape_label',
        x: 390,
        y: -90,
        desc: 'Proved that open-source LLMs trained on larger token distributions can match proprietary models at smaller parameters scales.',
        concepts: ['RoPE (Rotary Position Embedding) coordinate scaling', 'SwiGLU activation functions and RMSNorm normalization'],
        papers: [
            { title: 'LLaMA: Open and Efficient Foundation Language Models', authors: 'H. Touvron et al. (2023)', url: 'https://arxiv.org/pdf/2302.13971.pdf' }
        ]
    },

    // Level 3: Retrieval & RAG Papers
    {
        id: 'paper_hnsw',
        text: 'HNSW Graph Search (Malkov 2016)',
        type: 'ai',
        parent: 'ai_retrieval',
        shape: 'tape_label',
        x: 560,
        y: 260,
        desc: 'Introduced Hierarchical Navigable Small World (HNSW) graphs, setting baseline speeds for approximate nearest neighbors search.',
        concepts: ['Multi-layer graph traversal searching structures', 'Logarithmic scaling of nearest neighbor search speeds'],
        papers: [
            { title: 'Efficient and Robust Approximate Nearest Neighbor Search Using Hierarchical Navigable Small World Graphs', authors: 'Y. Malkov, D. Yashunin (2016)', url: 'https://arxiv.org/pdf/1603.09320.pdf' }
        ]
    },
    {
        id: 'paper_rag',
        text: 'RAG Systems (Lewis 2020)',
        type: 'ai',
        parent: 'ai_retrieval',
        shape: 'tape_label',
        x: 580,
        y: 180,
        desc: 'Seminal paper presenting Retrieval-Augmented Generation, pairing pre-trained seq2seq models with dense vector database lookups.',
        concepts: ['Query-generator combined backpropagation optimization', 'Parametric generator memory vs non-parametric retrievable memory'],
        papers: [
            { title: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks', authors: 'P. Lewis et al. (2020)', url: 'https://arxiv.org/pdf/2005.11401.pdf' }
        ]
    },
    {
        id: 'paper_dpr',
        text: 'DPR Bi-Encoder (Karpukhin 2020)',
        type: 'ai',
        parent: 'ai_retrieval',
        shape: 'tape_label',
        x: 540,
        y: 100,
        desc: 'Showed that dense passage retrieval using dual-encoder architectures outperforms classical TF-IDF or BM25 lexical matches.',
        concepts: ['Dual-encoder bi-encoder architectures training', 'In-batch negative sampling loss optimization'],
        papers: [
            { title: 'Dense Passage Retrieval for Open-Domain Question Answering', authors: 'V. Karpukhin et al. (2020)', url: 'https://arxiv.org/pdf/2004.04906.pdf' }
        ]
    },
    {
        id: 'paper_realm',
        text: 'REALM Retrieval (Guu 2020)',
        type: 'ai',
        parent: 'ai_retrieval',
        shape: 'tape_label',
        x: 460,
        y: 250,
        desc: 'Introduced pre-training language representation models with a latent retriever to query knowledge corpuses before prediction.',
        concepts: ["Latent retriever joint training algorithms", "MIPS (Maximum Inner Product Search) dynamic index updates"],
        papers: [
            { title: 'REALM: Retrieval-Augmented Language Model Pre-Training', authors: 'K. Guu et al. (2020)', url: 'https://arxiv.org/pdf/2002.08909.pdf' }
        ]
    },

    // Level 3: RL, Agents & Alignment Papers
    {
        id: 'paper_dqn',
        text: 'Deep Q-Networks (Mnih 2013)',
        type: 'ai',
        parent: 'ai_agents',
        shape: 'tape_label',
        x: 620,
        y: -60,
        desc: 'Landmark paper training deep neural networks directly from high-dimensional visual inputs to master Atari video games via RL.',
        concepts: ['Experience replay memory buffers decoupling', 'Target Q-network weight synchronization schedules'],
        papers: [
            { title: 'Playing Atari with Deep Reinforcement Learning', authors: 'V. Mnih et al. (2013)', url: 'https://arxiv.org/pdf/1312.5602.pdf' }
        ]
    },
    {
        id: 'paper_alphago',
        text: 'AlphaGo (Silver 2016)',
        type: 'ai',
        parent: 'ai_agents',
        shape: 'tape_label',
        x: 620,
        y: -140,
        desc: 'Mastered the game of Go using value and policy networks combined with Monte Carlo Tree Search, defeating world champions.',
        concepts: ["Monte Carlo Tree Search (MCTS) path evaluations", "Supervised pre-training plus self-play reinforcement learning"],
        papers: [
            { title: 'Mastering the Game of Go with Deep Neural Networks and Tree Search', authors: 'D. Silver et al. (2016)', url: 'https://www.nature.com/articles/nature16961.pdf' }
        ]
    },
    {
        id: 'paper_ppo',
        text: 'PPO Optimization (Schulman 2017)',
        type: 'ai',
        parent: 'ai_agents',
        shape: 'tape_label',
        x: 560,
        y: -220,
        desc: 'Introduced Proximal Policy Optimization, clipping probability ratios to achieve stable gradient steps in reinforcement learning.',
        concepts: ['Clipped surrogate objective functions scaling', 'Policy divergence penalties via KL variance constraints'],
        papers: [
            { title: 'Proximal Policy Optimization Algorithms', authors: 'J. Schulman et al. (2017)', url: 'https://arxiv.org/pdf/1707.06347.pdf' }
        ]
    },
    {
        id: 'paper_rlhf',
        text: 'RLHF Alignment (Ouyang 2022)',
        type: 'ai',
        parent: 'ai_agents',
        shape: 'tape_label',
        x: 640,
        y: -280,
        desc: 'InstructGPT paper using Reinforcement Learning from Human Feedback (RLHF) to align language model completions with human intent.',
        concepts: ['Reward model scaling based on pairwise comparisons', 'PPO fine-tuning loops evaluating completion scoring'],
        papers: [
            { title: 'Training Language Models to Follow Instructions with Human Feedback', authors: 'L. Ouyang et al. (2022)', url: 'https://arxiv.org/pdf/2203.02155.pdf' }
        ]
    },
    {
        id: 'paper_dpo',
        text: 'DPO Alignment (Rafailov 2023)',
        type: 'ai',
        parent: 'ai_agents',
        shape: 'tape_label',
        x: 480,
        y: -280,
        desc: 'Introduced Direct Preference Optimization, bypasses reward modeling or RLHF loops to align models using a direct closed-form objective.',
        concepts: ["Closed-form optimization targeting log-likelihood ratios", "Eliminating policy sampling and actor-critic networks training"],
        papers: [
            { title: 'Direct Preference Optimization: Your Language Model is Secretly a Reward Model', authors: 'R. Rafailov et al. (2023)', url: 'https://arxiv.org/pdf/2305.18290.pdf' }
        ]
    },
    {
        id: 'paper_react',
        text: 'ReAct Agent Loops (Yao 2022)',
        type: 'ai',
        parent: 'ai_agents',
        shape: 'tape_label',
        x: 440,
        y: -220,
        desc: 'Developed the ReAct framework, enabling LLMs to generate reasoning traces and task-specific actions in an interleaved manner.',
        concepts: ['Interleaved reasoning thoughts and action inputs', 'External API/tool integration execution logic'],
        papers: [
            { title: 'ReAct: Synergizing Reasoning and Acting in Language Models', authors: 'S. Yao et al. (2022)', url: 'https://arxiv.org/pdf/2210.03629.pdf' }
        ]
    },
    {
        id: 'paper_simulacra',
        text: 'Generative Agents (Park 2023)',
        type: 'ai',
        parent: 'ai_agents',
        shape: 'tape_label',
        x: 380,
        y: -200,
        desc: 'Created computational agents that simulate human behavior, complete with reflection architectures and dynamic associative memories.',
        concepts: ['Reflection and memory retrieval score graphs', 'Dynamic planning and execution associative engines'],
        papers: [
            { title: 'Generative Agents: Interactive Simulacra of Human Behavior', authors: 'J. Park et al. (2023)', url: 'https://arxiv.org/pdf/2304.03442.pdf' }
        ]
    }
];
