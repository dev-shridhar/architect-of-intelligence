# Python for Systems & AI Engineering 🐍

Python is the absolute standard for AI development, data science, and web APIs. While it is an interpreted language with execution speed limitations, it serves as the ultimate "glue" language—binding high-performance C++ backend libraries (like PyTorch and TensorFlow) with developer-friendly APIs.

---

## 🛠️ Key Concurrency & Performance Patterns

### 1. Asynchronous I/O with `asyncio`
For I/O-bound tasks (like web requests or database queries), `asyncio` allows single-threaded concurrent execution using an event loop.

```python
import asyncio
import time

async def fetch_data(task_id: int, delay: int):
    print(f"Task {task_id}: Starting fetch...")
    await asyncio.sleep(delay)  # Non-blocking sleep
    print(f"Task {task_id}: Fetch complete!")
    return {"task_id": task_id, "data": f"Result {task_id}"}

async def main():
    start_time = time.time()
    
    # Run tasks concurrently
    results = await asyncio.gather(
        fetch_data(1, 2),
        fetch_data(2, 3),
        fetch_data(3, 1)
    )
    
    print(f"All tasks finished in {time.time() - start_time:.2f} seconds")
    print("Results:", results)

if __name__ == "__main__":
    asyncio.run(main())
```

### 2. Bypassing the GIL (Global Interpreter Lock)
Python's GIL prevents multiple native threads from executing Python bytecodes at once.
*   **For CPU-bound tasks (e.g. processing images or mathematical calculations)**: Use the `multiprocessing` module instead of `threading` to spawn separate processes with their own memory space and Python interpreters.
*   **For C-Extensions**: Heavy calculations written in C, C++, or Rust (e.g. NumPy arrays, PyTorch models) release the GIL during execution, enabling true multi-core parallel speedups.

### 3. Memory Efficiency with Generators
Avoid loading massive datasets or logs entirely into RAM. Use generators to stream data item-by-item:

```python
def stream_large_dataset(file_path: str):
    with open(file_path, "r", encoding="utf-8") as f:
        for line in f:
            # Yield processes line-by-line without holding the entire file in RAM
            processed_data = line.strip().split(",")
            yield processed_data

# Usage
# data_stream = stream_large_dataset("huge_log.csv")
# first_item = next(data_stream)
```

---

## 🧠 Python in AI Architecture

1.  **Pybind11 / C++ Extensions**: Most underlying tensor operations are executed in C++ via wrapper bindings.
2.  **Model Serving (FastAPI / Gunicorn)**: Utilizing async API frameworks with multiple workers to process parallel AI request inference.
3.  **Memory Profiling**: Large language models require careful monitoring of RAM and VRAM. Libraries like `tracemalloc` and `psutil` are essential for detecting memory leaks.

---

## 📚 Essential Reading
*   **"Fluent Python"** by Luciano Ramalho (The definitive guide to writing idiomatic, high-performance Python).
*   **"High Performance Python"** by Micha Gorelick and Ian Ozsvald (Deep-dive into profiling, compile tools, and parallel processing).
