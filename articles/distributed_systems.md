# Distributed Systems Foundations 🌐

A distributed system consists of autonomous computers that communicate over a network and coordinate their actions by passing messages. For a System Architect, understanding how these systems behave, fail, and maintain consistency is critical.

---

## 📐 Core Theorems

### 1. The CAP Theorem
Formulated by Eric Brewer, the CAP theorem states that any distributed data store can simultaneously provide at most two of the following three guarantees:
*   **Consistency (C)**: Every read receives the most recent write or an error.
*   **Availability (A)**: Every non-failing node returns a non-error response (without guarantee that it contains the most recent write).
*   **Partition Tolerance (P)**: The system continues to operate despite an arbitrary number of messages being dropped or delayed by the network between nodes.

In practice, network partitions are inevitable. Therefore, systems must choose between:
*   **CP (Consistency/Partition)**: The system rejects updates or blocks reads to ensure all accessible nodes stay synchronized.
*   **AP (Availability/Partition)**: The system accepts updates on partition subsets, risking data divergence.

### 2. The PACELC Theorem
An extension of the CAP theorem. **If there is a Partition (P)**, trade off **Availability (A)** vs **Consistency (C)**; **Else (E)**, trade off **Latency (L)** vs **Consistency (C)**.
*   *Example*: MongoDB is PC/EC (prefers consistency). Cassandra is PA/EL (prefers availability and latency).

---

## 🤝 Distributed Consensus

Consensus involves multiple servers agreeing on a single data value or a sequence of actions. It is crucial for leader election, configuration management, and distributed transaction locks.

### 1. Paxos
The original consensus algorithm designed by Leslie Lamport. It is notoriously difficult to understand and implement correctly.
*   **Roles**: Proposers, Acceptors, Learners.
*   **Phases**: Prepare/Promise, Propose/Accept.

### 2. Raft
Designed as an alternative to Paxos to be more understandable. It decomposes consensus into three subproblems:
*   **Leader Election**: A new leader is elected when an existing one fails (using randomized election timeouts).
*   **Log Replication**: The leader accepts log entries from clients, replicates them to other servers, and commits them once a majority of nodes have acknowledged.
*   **Safety**: If a follower's log is more up-to-date than a candidate's log, the follower denies the candidate's vote, ensuring only nodes with complete histories can become leaders.

---

## 📈 System Architectural Patterns

*   **Sagas**: A pattern to manage distributed transactions across multiple microservices. A Saga is a sequence of local transactions where each transaction updates data within a single service and publishes a message/event. If a transaction fails, compensating transactions are executed in reverse order.
*   **CQRS (Command Query Responsibility Segregation)**: Separating the write model (commands) from the read model (queries) to optimize scaling and performance individually.
