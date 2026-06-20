# Go for Systems Architecture 🐹

Go (Golang) is the premier language for modern cloud systems, microservices, and distributed backends. Its clean concurrency model, native compile target, and fast runtime make it excellent for building high-performance architectures.

---

## 🛠️ Key Concurrency Patterns

Go's concurrency is built on **Communicating Sequential Processes (CSP)** using Goroutines and Channels.

### 1. Worker Pool Pattern
Using a pool of concurrent workers to process a queue of incoming tasks, preventing resource exhaustion.

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

// Task represents a unit of work
type Task struct {
	ID    int
	Param string
}

// Result represents the output of a Task
type Result struct {
	TaskID int
	Output string
	Err    error
}

// Worker processes incoming tasks from the jobs channel and sends output to results
func Worker(id int, jobs <-chan Task, results chan<- Result, wg *sync.WaitGroup) {
	defer wg.Done()
	for job := range jobs {
		fmt.Printf("Worker %d: started task %d\n", id, job.ID)
		time.Sleep(time.Millisecond * 500) // Simulate work
		results <- Result{
			TaskID: job.ID,
			Output: fmt.Sprintf("Task %d processed successfully", job.ID),
			Err:    nil,
		}
	}
}

func main() {
	numJobs := 10
	numWorkers := 3

	jobs := make(chan Task, numJobs)
	results := make(chan Result, numJobs)

	var wg sync.WaitGroup

	// Start workers
	for w := 1; w <= numWorkers; w++ {
		wg.Add(1)
		go Worker(w, jobs, results, &wg)
	}

	// Send jobs
	for j := 1; j <= numJobs; j++ {
		jobs <- Task{ID: j, Param: fmt.Sprintf("Param_%d", j)}
	}
	close(jobs)

	// Wait for workers in a separate goroutine to close results channel
	go func() {
		wg.Wait()
		close(results)
	}()

	// Collect results
	for result := range results {
		fmt.Printf("Result: %s\n", result.Output)
	}
}
```

### 2. Fan-In / Fan-Out Pattern
Multiplexing multiple channels into a single output channel (Fan-In), or distributing work from a single stream to multiple channels (Fan-Out).

---

## 🏗️ Architectural Guidelines for Go

1. **Keep it Simple**: Avoid over-engineering with complex interfaces. Define interfaces at the consumer level, not the producer level.
2. **Handle Errors Explicitly**: Do not ignore errors or panic in production code. Always wrap errors using `%w` to preserve context.
3. **Graceful Shutdown**: Always listen for termination signals (`SIGINT`, `SIGTERM`) and clean up open connections, files, and server listners gracefully.
4. **Context Propagation**: Pass a `context.Context` as the first parameter to functions performing I/O. Use it to cancel operations early when client disconnects or request times out.

---

## 📚 Essential Reading
*   **"Go Concurrency Patterns"** (Rob Pike, Google I/O 2012)
*   **"Concurrency in Go"** by Katherine Cox-Buday
