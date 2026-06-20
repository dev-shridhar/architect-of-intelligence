# C++ for High-Performance Systems & AI Inference ⚙️

C++ is the cornerstone of high-performance computing, graphic engines, and AI model execution environments (e.g., ONNX Runtime, Llama.cpp, TensorRT). It allows low-level memory allocation, SIMD vectorized operations, and native hardware optimization.

---

## 🛠️ Key Design Patterns

### 1. RAII (Resource Acquisition Is Initialization)
Using object lifetimes to manage resource locks, file handles, and memory allocations. Resources are acquired in the constructor and released in the destructor.

```cpp
#include <iostream>
#include <fstream>
#include <string>
#include <stdexcept>

class FileWrapper {
private:
    std::ofstream fileStream;

public:
    // Constructor acquires resource
    FileWrapper(const std::string& filename) {
        fileStream.open(filename, std::ios::out | std::ios::app);
        if (!fileStream.is_open()) {
            throw std::runtime_error("Failed to open file: " + filename);
        }
        std::cout << "File resource acquired.\n";
    }

    // Write operation
    void write(const std::string& text) {
        if (fileStream.is_open()) {
            fileStream << text << "\n";
        }
    }

    // Destructor releases resource automatically
    ~FileWrapper() {
        if (fileStream.is_open()) {
            fileStream.close();
            std::cout << "File resource released automatically in destructor.\n";
        }
    }
};

int main() {
    try {
        FileWrapper fw("system_log.txt");
        fw.write("Log entry: System initialized.");
    } // fw goes out of scope here; destructor is called
    catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << "\n";
    }
    return 0;
}
```

### 2. Smart Pointers (C++11+)
Avoid `malloc`/`free` and raw `new`/`delete`. Use smart pointers for automated scope-based cleanup:
*   `std::unique_ptr<T>`: Single ownership (zero runtime overhead).
*   `std::shared_ptr<T>`: Reference-counted shared ownership.
*   `std::weak_ptr<T>`: Non-owning observer to break circular dependencies.

---

## 🧠 C++ in AI Engineering

To run neural networks efficiently on the CPU or GPU, C++ implementations focus on:
1.  **Memory Layout (Row-Major vs Col-Major)**: Aligning multi-dimensional tensors in memory to optimize CPU cache lines.
2.  **Memory Alignment**: Aligning memory allocations on 64-byte boundaries to support AVX-512 vectorization instruction sets.
3.  **GEMM (General Matrix Multiply)**: Utilizing BLAS libraries (like OpenBLAS, Intel MKL, or cuBLAS) instead of implementing naive triple-nested loops for matrix multiplications.

---

## 📚 Essential Reading
*   **"Effective Modern C++"** by Scott Meyers (Critical guidelines to master C++11 and C++14 features).
*   **"C++ Concurrency in Action"** by Anthony Williams (Deep dive into multithreading and lock-free data structures).
