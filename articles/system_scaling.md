# System Scaling & Performance Design 📈

Scaling a system means handling increasing load (requests, concurrent users, data volume) without degrading performance. Architects evaluate scaling strategies based on cost, complexity, and operational overhead.

---

## ⚖️ Scaling Strategies

### Vertical vs Horizontal Scaling
*   **Vertical Scaling (Scaling Up)**: Adding more resources (CPU, RAM, NVMe SSDs) to a single server. It is simple but has hard hardware limits and introduces a single point of failure (SPOF).
*   **Horizontal Scaling (Scaling Out)**: Adding more servers to the resource pool. It requires a load balancer and stateless application servers, but offers near-limitless capacity and high redundancy.

---

## 🗄️ Database Scaling

When database reads or writes become a bottleneck, architects apply the following patterns:

### 1. Read Replicas (Primary-Replica)
*   All writes go to the **Primary** node.
*   Writes are asynchronously replicated to **Replica** nodes.
*   All reads are directed to Replicas, offloading the Primary database.
*   *Trade-off*: Eventual consistency. Reads on replicas might return stale data shortly after a write.

### 2. Sharding (Horizontal Partitioning)
*   Splitting a single large table into smaller tables (shards) across multiple database instances based on a **Shard Key**.
*   *Example*: Sharding user accounts by User ID hash.
*   *Trade-off*: Joins across shards are extremely slow and complex to execute.

---

## ⚡ Caching Strategies

Caching stores high-frequency, slow-to-calculate data in fast, in-memory storage (e.g., Redis).

### 1. Cache-Aside (Lazy Loading)
1. Application queries cache.
2. If cache hit, return data.
3. If cache miss, query database, write data to cache, and return data.
*   *Pros*: Only requested data is cached; cache misses are handled gracefully.
*   *Cons*: First request results in a cache miss (higher latency); stale data risk if database updates bypass the cache.

### 2. Write-Through
1. Application writes directly to cache.
2. Cache synchronously writes data to the database.
*   *Pros*: Cache is never stale.
*   *Cons*: High write latency; resources wasted caching data that might never be read.

---

## 🚦 Traffic Management

*   **Load Balancer (LB)**: Distributes client requests across backend servers using algorithms like Round Robin, Least Connections, or Consistent Hashing. LBs operate at Layer 4 (Transport/TCP) or Layer 7 (Application/HTTP).
*   **CDN (Content Delivery Network)**: A network of geographically distributed edge servers that cache static assets (HTML, CSS, JS, images, videos) close to users, reducing latency and backend load.
*   **Rate Limiter**: Limits the number of client requests in a given window to prevent API abuse, DDoS attacks, and resource exhaustion. Common algorithms: Token Bucket, Leaking Bucket, Sliding Window Log.
