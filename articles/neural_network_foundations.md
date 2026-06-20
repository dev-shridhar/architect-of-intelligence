# Neural Network & Deep Learning Foundations 🧠

To build effective AI-driven systems, an AI Engineer must understand the mathematical underpinnings of neural networks, backpropagation, and training optimization.

---

## ⚙️ How Neural Networks Learn

A neural network is a nested function $f(x; W)$ where $x$ is the input and $W$ represents the weights (parameters). Learning is the process of finding $W$ that minimizes a loss function $L(y, \hat{y})$ representing the difference between actual labels $y$ and predictions $\hat{y}$.

### 1. Forward Propagation
Information flows forward through the network:
$$z^{[l]} = W^{[l]} a^{[l-1]} + b^{[l]}$$
$$a^{[l]} = g^{[l]}(z^{[l]})$$
where $g(z)$ is an activation function (e.g., ReLU, GeLU, Sigmoid) introducing non-linearity.

### 2. Backpropagation
Backpropagation calculates the gradient of the loss function with respect to each weight using the **Chain Rule** of calculus:
$$\frac{\partial L}{\partial W^{[l]}} = \frac{\partial L}{\partial a^{[l]}} \cdot \frac{\partial a^{[l]}}{\partial z^{[l]}} \cdot \frac{\partial z^{[l]}}{\partial W^{[l]}}$$
These gradients are propagated backward through the network layers to update the weights.

---

## 🏎️ Optimization Algorithms

Optimizers define how weight gradients are used to update network parameters.

### 1. Stochastic Gradient Descent (SGD)
Updates weights by taking a small step in the opposite direction of the gradient:
$$W_t = W_{t-1} - \eta \nabla L(W_{t-1})$$
where $\eta$ is the learning rate.

### 2. Adam (Adaptive Moment Estimation)
Calculates adaptive learning rates for each parameter by maintaining estimates of the first and second moments of the gradients:
*   **First Moment (Mean)**: $m_t = \beta_1 m_{t-1} + (1 - \beta_1) g_t$
*   **Second Moment (Uncentered Variance)**: $v_t = \beta_2 v_{t-1} + (1 - \beta_2) g_t^2$
*   **Weight Update**: $$W_t = W_{t-1} - \frac{\eta}{\sqrt{\hat{v}_t} + \epsilon} \hat{m}_t$$

Adam optimizer remains the standard for training large deep learning and transformer models.

---

## 🔬 Essential Model Architectures

*   **Convolutional Neural Networks (CNNs)**: Leverage weight sharing and local translation invariance. Perfect for image, video, and grid-like spatial data.
*   **Transformers**: Utilize **Self-Attention** mechanisms to process sequential data in parallel, removing the recurrent limitations of LSTMs. Transformers calculate query ($Q$), key ($K$), and value ($V$) vectors to model dependencies between tokens regardless of distance:
    $$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$
