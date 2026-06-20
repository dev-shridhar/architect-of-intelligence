# Top 100 AI Research Papers Catalog 📚

This catalog lists 100 of the most seminal, cited, and influential research papers in Artificial Intelligence and Machine Learning, categorized into four core areas.

---

## 📂 Categories
1.  [Neural Networks & Optimization Foundations (1-25)](#1-neural-networks--optimization-foundations)
2.  [Transformers & Attention Mechanisms (26-50)](#2-transformers--attention-mechanisms)
3.  [Memory, Knowledge Retrieval & RAG Systems (51-75)](#3-memory-knowledge-retrieval--rag-systems)
4.  [Reinforcement Learning, Agents & Alignment (76-100)](#4-reinforcement-learning-agents--alignment)

---

## 1. Neural Networks & Optimization Foundations

1.  **"Learning Representations by Back-Propagating Errors" (1986)**
    *   *Authors*: David E. Rumelhart, Geoffrey E. Hinton, Ronald J. Williams
    *   *Contribution*: Popularized the backpropagation algorithm for training multi-layer neural networks.
    *   *URL*: [PDF Link](https://www.nature.com/articles/323533a0.pdf)
2.  **"Long Short-Term Memory" (1997)**
    *   *Authors*: Sepp Hochreiter, Jürgen Schmidhuber
    *   *Contribution*: Introduced the LSTM network architecture to solve vanishing/exploding gradients in RNNs.
    *   *URL*: [CMU: Deep Learning](https://deeplearning.cs.cmu.edu/S23/document/readings/LSTM.pdf)
3.  **"Gradient-Based Learning Applied to Document Recognition" (1998)**
    *   *Authors*: Yann LeCun, Léon Bottou, Yoshua Bengio, Patrick Haffner
    *   *Contribution*: Introduced LeNet-5, establishing convolutional neural networks (CNNs) for image recognition.
    *   *URL*: [PDF Link](http://yann.lecun.com/exdb/publis/pdf/lecun-01a.pdf)
4.  **"Random Forests" (2001)**
    *   *Authors*: Leo Breiman
    *   *Contribution*: Developed the Random Forest classifier, a fundamental ensemble learning method.
    *   *URL*: [PDF Link](https://link.springer.com/content/pdf/10.1023/A:1010933404324.pdf)
5.  **"ImageNet Classification with Deep Convolutional Neural Networks" (2012)**
    *   *Authors*: Alex Krizhevsky, Ilya Sutskever, Geoffrey E. Hinton
    *   *Contribution*: "AlexNet" proved that CNNs running on GPUs could dominate vision benchmarks, initiating the deep learning revolution.
    *   *URL*: [PDF Link](https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf)
6.  **"Dropout: A Simple Way to Prevent Neural Networks from Overfitting" (2014)**
    *   *Authors*: Nitish Srivastava, Geoffrey Hinton, Alex Krizhevsky, Ilya Sutskever, Ruslan Salakhutdinov
    *   *Contribution*: Introduced the dropout regularization technique to improve generalization.
    *   *URL*: [PDF Link](https://jmlr.org/papers/volume15/srivastava14a/srivastava14a.pdf)
7.  **"Adam: A Method for Stochastic Optimization" (2014)**
    *   *Authors*: Diederik P. Kingma, Jimmy Ba
    *   *Contribution*: Introduced the Adam optimizer, utilizing adaptive learning rates for faster neural network training.
    *   *URL*: [arXiv:1412.6980](https://arxiv.org/pdf/1412.6980.pdf)
8.  **"Generative Adversarial Nets" (2014)**
    *   *Authors*: Ian J. Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, Yoshua Bengio
    *   *Contribution*: Introduced Generative Adversarial Networks (GANs), establishing a new generative modeling paradigm.
    *   *URL*: [arXiv:1406.2661](https://arxiv.org/pdf/1406.2661.pdf)
9.  **"Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift" (2015)**
    *   *Authors*: Sergey Ioffe, Christian Szegedy
    *   *Contribution*: Developed Batch Normalization to stabilize activation distributions, accelerating training of deep nets.
    *   *URL*: [arXiv:1502.03167](https://arxiv.org/pdf/1502.03167.pdf)
10. **"Deep Residual Learning for Image Recognition" (2015)**
    *   *Authors*: Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun
    *   *Contribution*: Introduced ResNet, using skip connections to train ultra-deep neural networks (100+ layers).
    *   *URL*: [arXiv:1512.03385](https://arxiv.org/pdf/1512.03385.pdf)
11. **"XGBoost: A Scalable Tree Boosting System" (2016)**
    *   *Authors*: Tianqi Chen, Carlos Guestrin
    *   *Contribution*: Introduced XGBoost, a highly efficient gradient boosting library dominant in tabular data benchmarks.
    *   *URL*: [arXiv:1603.02754](https://arxiv.org/pdf/1603.02754.pdf)
12. **"Delving Deep into Rectifiers: Surpassing Human-Level Performance on ImageNet" (2015)**
    *   *Authors*: Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun
    *   *Contribution*: Introduced PReLU and the He initialization method, critical for deep ReLU network convergence.
    *   *URL*: [arXiv:1502.01852](https://arxiv.org/pdf/1502.01852.pdf)
13. **"Very Deep Convolutional Networks for Large-Scale Image Recognition" (2014)**
    *   *Authors*: Karen Simonyan, Andrew Zisserman
    *   *Contribution*: Introduced the VGG architecture, proving that simple 3x3 convolutions with deep layers achieve strong vision results.
    *   *URL*: [arXiv:1409.1556](https://arxiv.org/pdf/1409.1556.pdf)
14. **"Going Deeper with Convolutions" (2014)**
    *   *Authors*: Christian Szegedy, Wei Liu, Yangqing Jia, Pierre Sermanet, Scott Reed, Dragomir Anguelov, Dumitru Erhan, Vincent Vanhoucke, Andrew Rabinovich
    *   *Contribution*: Introduced the Inception architecture, using multi-scale convolutional operations.
    *   *URL*: [arXiv:1409.4842](https://arxiv.org/pdf/1409.4842.pdf)
15. **"Visualizing and Understanding Convolutional Networks" (2013)**
    *   *Authors*: Matthew D. Zeiler, Rob Fergus
    *   *Contribution*: Developed deconvolutional networks to visualize features learned inside hidden CNN layers.
    *   *URL*: [arXiv:1311.2901](https://arxiv.org/pdf/1311.2901.pdf)
16. **"U-Net: Convolutional Networks for Biomedical Image Segmentation" (2015)**
    *   *Authors*: Olaf Ronneberger, Philipp Fischer, Thomas Brox
    *   *Contribution*: Developed the U-Net architecture, using contracting and expanding paths for precise pixel segmentation.
    *   *URL*: [arXiv:1505.04597](https://arxiv.org/pdf/1505.04597.pdf)
17. **"Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks" (2015)**
    *   *Authors*: Shaoqing Ren, Kaiming He, Ross Girshick, Jian Sun
    *   *Contribution*: Integrated a Region Proposal Network (RPN) into object detectors for real-time localization.
    *   *URL*: [arXiv:1506.01497](https://arxiv.org/pdf/1506.01497.pdf)
18. **"You Only Look Once: Unified, Real-Time Object Detection" (2015)**
    *   *Authors*: Joseph Redmon, Santosh Divvala, Ross Girshick, Ali Farhadi
    *   *Contribution*: Framed object detection as a single regression problem (YOLO), enabling high-speed object detection.
    *   *URL*: [arXiv:1506.02640](https://arxiv.org/pdf/1506.02640.pdf)
19. **"Mask R-CNN" (2017)**
    *   *Authors*: Kaiming He, Georgia Gkioxari, Piotr Dollár, Ross Girshick
    *   *Contribution*: Extended Faster R-CNN to output high-quality pixel segmentation masks alongside bounding boxes.
    *   *URL*: [arXiv:1703.06870](https://arxiv.org/pdf/1703.06870.pdf)
20. **"Auto-Encoding Variational Bayes" (2013)**
    *   *Authors*: Diederik P. Kingma, Max Welling
    *   *Contribution*: Introduced Variational Autoencoders (VAEs), combining neural networks with variational inference.
    *   *URL*: [arXiv:1312.6114](https://arxiv.org/pdf/1312.6114.pdf)
21. **"Denoising Diffusion Probabilistic Models" (2020)**
    *   *Authors*: Jonathan Ho, Ajay Jain, Pieter Abbeel
    *   *Contribution*: Formulated high-quality image generation using Diffusion models (DDPMs), the foundation of Midjourney and Stable Diffusion.
    *   *URL*: [arXiv:2006.11239](https://arxiv.org/pdf/2006.11239.pdf)
22. **"Neural Ordinary Differential Equations" (2018)**
    *   *Authors*: Ricky T. Q. Chen, Yulia Rubanova, Jesse Bettencourt, David Duvenaud
    *   *Contribution*: Modeled deep neural networks as continuous-time ordinary differential equations.
    *   *URL*: [arXiv:1806.07366](https://arxiv.org/pdf/1806.07366.pdf)
23. **"Decoupled Weight Decay Regularization" (2017)**
    *   *Authors*: Ilya Loshchilov, Frank Hutter
    *   *Contribution*: Introduced AdamW, decoupled weight decay regularization to fix L2 weight decay implementation in Adam.
    *   *URL*: [arXiv:1711.05101](https://arxiv.org/pdf/1711.05101.pdf)
24. **"Layer Normalization" (2016)**
    *   *Authors*: Jimmy Lei Ba, Jamie Ryan Kiros, Geoffrey E. Hinton
    *   *Contribution*: Developed Layer Normalization to stabilize hidden layer states, widely used in Transformer networks.
    *   *URL*: [arXiv:1607.06450](https://arxiv.org/pdf/1607.06450.pdf)
25. **"High-Resolution Image Synthesis with Latent Diffusion Models" (2021)**
    *   *Authors*: Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, Björn Ommer
    *   *Contribution*: Developed Latent Diffusion Models (LDMs), enabling efficient, high-resolution generative diffusion inside latent spaces.
    *   *URL*: [arXiv:2112.10752](https://arxiv.org/pdf/2112.10752.pdf)

---

## 2. Transformers & Attention Mechanisms

26. **"Neural Machine Translation by Jointly Learning to Align and Translate" (2014)**
    *   *Authors*: Dzmitry Bahdanau, Kyunghyun Cho, Yoshua Bengio
    *   *Contribution*: Introduced the first attention mechanism, enabling models to search for relevant input tokens.
    *   *URL*: [arXiv:1409.0473](https://arxiv.org/pdf/1409.0473.pdf)
27. **"Attention Is All You Need" (2017)**
    *   *Authors*: Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin
    *   *Contribution*: Replaced recurrence with multi-head self-attention, creating the Transformer architecture.
    *   *URL*: [arXiv:1706.03762](https://arxiv.org/pdf/1706.03762.pdf)
28. **"Improving Language Understanding by Generative Pre-Training" (2018)**
    *   *Authors*: Alec Radford, Karthik Narasimhan, Tim Salimans, Ilya Sutskever
    *   *Contribution*: Introduced GPT-1, demonstrating that unsupervised pre-training followed by supervised fine-tuning yields general NLP capabilities.
    *   *URL*: [PDF Link](https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf)
29. **"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding" (2018)**
    *   *Authors*: Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova
    *   *Contribution*: Introduced BERT, pre-training bidirectional representations from unlabeled text using masked language modeling.
    *   *URL*: [arXiv:1810.04805](https://arxiv.org/pdf/1810.04805.pdf)
30. **"Language Models are Unsupervised Multitask Learners" (2019)**
    *   *Authors*: Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei, Ilya Sutskever
    *   *Contribution*: Introduced GPT-2, showing language models can execute diverse NLP tasks in a zero-shot fashion.
    *   *URL*: [PDF Link](https://d4mucfpruyw0c.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)
31. **"Language Models are Few-Shot Learners" (2020)**
    *   *Authors*: Tom B. Brown et al. (OpenAI)
    *   *Contribution*: Introduced GPT-3, demonstrating that massive language models are highly capable few-shot learners.
    *   *URL*: [arXiv:2005.14165](https://arxiv.org/pdf/2005.14165.pdf)
32. **"RoBERTa: A Robustly Optimized BERT Pretraining Approach" (2019)**
    *   *Authors*: Yinhan Liu et al.
    *   *Contribution*: Proved that tuning BERT hyperparameters and increasing training volume leads to massive performance gains.
    *   *URL*: [arXiv:1907.11692](https://arxiv.org/pdf/1907.11692.pdf)
33. **"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer" (2019)**
    *   *Authors*: Colin Raffel et al.
    *   *Contribution*: Introduced T5, framing all NLP tasks as text-to-text problems to systematically study scaling laws.
    *   *URL*: [arXiv:1910.10683](https://arxiv.org/pdf/1910.10683.pdf)
34. **"An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale" (2020)**
    *   *Authors*: Alexey Dosovitskiy et al.
    *   *Contribution*: Introduced the Vision Transformer (ViT), applying a standard Transformer encoder directly to image patches.
    *   *URL*: [arXiv:2010.11929](https://arxiv.org/pdf/2010.11929.pdf)
35. **"BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension" (2019)**
    *   *Authors*: Mike Lewis et al.
    *   *Contribution*: Introduced BART, a sequence-to-sequence model pre-trained by corrupting text and reconstructing original passages.
    *   *URL*: [arXiv:1910.13461](https://arxiv.org/pdf/1910.13461.pdf)
36. **"ALBERT: A Lite BERT for Self-supervised Learning of Language Representations" (2019)**
    *   *Authors*: Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma, Radu Soricut
    *   *Contribution*: Developed parameter-reduction techniques to scale BERT architectures while consuming less memory.
    *   *URL*: [arXiv:1909.11942](https://arxiv.org/pdf/1909.11942.pdf)
37. **"T5X: A Collaborative Framework for Scaling Text-to-Text Models" (2022)**
    *   *Authors*: Linting Xue et al.
    *   *Contribution*: Released standard framework for highly parallelized multi-host transformer model training.
    *   *URL*: [arXiv:2203.17189](https://arxiv.org/pdf/2203.17189.pdf)
38. **"Swin Transformer: Hierarchical Vision Transformer using Shifted Windows" (2021)**
    *   *Authors*: Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo
    *   *Contribution*: Designed a vision transformer with linear computational complexity via shifted non-overlapping window attention.
    *   *URL*: [arXiv:2103.14030](https://arxiv.org/pdf/2103.14030.pdf)
39. **"Longformer: The Long-Document Transformer" (2020)**
    *   *Authors*: Iz Beltagy, Matthew E. Peters, Arman Cohan
    *   *Contribution*: Developed local attention windows scaling linearly with sequence length to process long contexts.
    *   *URL*: [arXiv:2004.05150](https://arxiv.org/pdf/2004.05150.pdf)
40. **"GPT-4 Technical Report" (2023)**
    *   *Authors*: OpenAI
    *   *Contribution*: Documented GPT-4, a large-scale multimodal model demonstrating human-level performance on legal/academic benchmarks.
    *   *URL*: [arXiv:2303.08774](https://arxiv.org/pdf/2303.08774.pdf)
41. **"LLaMA: Open and Efficient Foundation Language Models" (2023)**
    *   *Authors*: Hugo Touvron et al. (Meta AI)
    *   *Contribution*: Released open-weights foundation models, proving that smaller models trained on larger datasets outperform massive models.
    *   *URL*: [arXiv:2302.13971](https://arxiv.org/pdf/2302.13971.pdf)
42. **"Llama 2: Open Foundation and Fine-Tuned Chat Models" (2023)**
    *   *Authors*: Hugo Touvron et al. (Meta AI)
    *   *Contribution*: Developed open fine-tuned dialogue models optimized with RLHF and safety components.
    *   *URL*: [arXiv:2307.09288](https://arxiv.org/pdf/2307.09288.pdf)
43. **"Mistral 7B" (2023)**
    *   *Authors*: Albert Q. Jiang et al.
    *   *Contribution*: Released a high-performance 7B model using grouped-query attention and sliding window attention.
    *   *URL*: [arXiv:2310.06825](https://arxiv.org/pdf/2310.06825.pdf)
44. **"Mixture-of-Experts Meets Instruction Tuning: A Systematic Study" (2023)**
    *   *Authors*: Yasaman Bahri et al.
    *   *Contribution*: Explored scaling properties of sparse MoE models trained under instruction workflows.
    *   *URL*: [arXiv:2305.14705](https://arxiv.org/pdf/2305.14705.pdf)
45. **"Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism" (2019)**
    *   *Authors*: Mohammad Shoeybi, Mostofa Patwary, Raul Puri, Patrick LeGresley, Jared Casper, Bryan Catanzaro
    *   *Contribution*: Developed model parallelization techniques to fit multi-billion parameter transformers in GPU clusters.
    *   *URL*: [arXiv:1909.08053](https://arxiv.org/pdf/1909.08053.pdf)
46. **"Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context" (2019)**
    *   *Authors*: Zihang Dai et al.
    *   *Contribution*: Developed recurrence mechanisms in self-attention alongside relative positional encodings for longer contexts.
    *   *URL*: [arXiv:1901.02860](https://arxiv.org/pdf/1901.02860.pdf)
47. **"GLM-130B: An Open Bilingual Pre-trained Model" (2022)**
    *   *Authors*: Aohan Zeng et al.
    *   *Contribution*: Designed a bilingual bidirectional model utilizing a unique autoregressive blank-filling objective.
    *   *URL*: [arXiv:2210.02414](https://arxiv.org/pdf/2210.02414.pdf)
48. **"PaLM: Scaling Language Modeling with Pathways" (2022)**
    *   *Authors*: Aakanksha Chowdhery et al. (Google Research)
    *   *Contribution*: Developed PaLM, a 540-billion parameter transformer trained across thousands of accelerators using TPU pods.
    *   *URL*: [arXiv:2204.02311](https://arxiv.org/pdf/2204.02311.pdf)
49. **"Scaling Laws for Neural Language Models" (2020)**
    *   *Authors*: Jared Kaplan, Sam McCandlish, Tom Henighan, Tom B. Brown, Benjamin Chess, Rewon Child, Scott Gray, Alec Radford, Jeffrey Wu, Dario Amodei
    *   *Contribution*: Showed language model performance scales predictably as a power-law with parameters, dataset size, and compute.
    *   *URL*: [arXiv:2001.08361](https://arxiv.org/pdf/2001.08361.pdf)
50. **"Training Compute-Optimal Large Language Models" (2022)**
    *   *Authors*: Jordan Hoffmann et al. (DeepMind)
    *   *Contribution*: The "Chinchilla" paper proved most LLMs were undertrained relative to parameter counts; dataset size should grow in equal proportion to parameter count.
    *   *URL*: [arXiv:2203.15556](https://arxiv.org/pdf/2203.15556.pdf)

---

## 3. Memory, Knowledge Retrieval & RAG Systems

51. **"Memory Networks" (2014)**
    *   *Authors*: Jason Weston, Sumit Chopra, Antoine Bordes
    *   *Contribution*: Introduced Memory Networks, combining neural networks with an external addressable memory component.
    *   *URL*: [arXiv:1410.3916](https://arxiv.org/pdf/1410.3916.pdf)
52. **"Neural Turing Machines" (2014)**
    *   *Authors*: Alex Graves, Greg Wayne, Ivo Danihelka
    *   *Contribution*: Designed Neural Turing Machines (NTMs), coupling neural nets with external memory resources via differentiable read/write operations.
    *   *URL*: [arXiv:1410.5401](https://arxiv.org/pdf/1410.5401.pdf)
53. **"End-To-End Memory Networks" (2015)**
    *   *Authors*: Sainbayar Sukhbaatar, Arthur Szlam, Jason Weston, Rob Fergus
    *   *Contribution*: Formulated memory networks trained end-to-end using backpropagation, requiring less supervision.
    *   *URL*: [arXiv:1503.08895](https://arxiv.org/pdf/1503.08895.pdf)
54. **"Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks" (2020)**
    *   *Authors*: Patrick Lewis et al.
    *   *Contribution*: Formulated Retrieval-Augmented Generation (RAG), combining pre-trained generator models with dense vector database retrievers.
    *   *URL*: [arXiv:2005.11401](https://arxiv.org/pdf/2005.11401.pdf)
55. **"REALM: Retrieval-Augmented Language Model Pre-Training" (2020)**
    *   *Authors*: Kelvin Guu, Kenton Lee, Zihan Zhao, Raghav Gupta, Victor Ruiz, Christopher D. Manning
    *   *Contribution*: Pre-trained language representations using a latent knowledge retriever to fetch documents during MLM masks.
    *   *URL*: [arXiv:2002.08909](https://arxiv.org/pdf/2002.08909.pdf)
56. **"FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness" (2022)**
    *   *Authors*: Tri Dao, Daniel Y. Fu, Stefano Ermon, Atri Rudra, Christopher Ré
    *   *Contribution*: Optimized self-attention computed on GPUs, reducing memory operations to scale context length and training speed.
    *   *URL*: [arXiv:2205.14135](https://arxiv.org/pdf/2205.14135.pdf)
57. **"FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning" (2023)**
    *   *Authors*: Tri Dao
    *   *Contribution*: Optimized FlashAttention warp execution and work partitioning to achieve up to 73% of theoretical GPU FLOP peaks.
    *   *URL*: [arXiv:2307.08691](https://arxiv.org/pdf/2307.08691.pdf)
58. **"Ring Attention with Blockwise Transformers for Near-Infinite Context" (2023)**
    *   *Authors*: Hao Liu, Matei Zaharia, Pieter Abbeel
    *   *Contribution*: Developed Ring Attention, letting models train on extremely long contexts by dividing self-attention sequences across networks.
    *   *URL*: [arXiv:2310.01889](https://arxiv.org/pdf/2310.01889.pdf)
59. **"Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection" (2023)**
    *   *Authors*: Akari Asai et al.
    *   *Contribution*: Trained LLMs to output critique tokens, dictating dynamically when to retrieve documents and critique output quality.
    *   *URL*: [arXiv:2310.11511](https://arxiv.org/pdf/2310.11511.pdf)
60. **"Dense Passage Retrieval for Open-Domain Question Answering" (2020)**
    *   *Authors*: Vladimir Karpukhin et al.
    *   *Contribution*: Proved dual-encoder dense retrieval (DPR) outperforms traditional text matching (BM25) for Q&A tasks.
    *   *URL*: [arXiv:2004.04906](https://arxiv.org/pdf/2004.04906.pdf)
61. **"Retrieval-Augmented Dual Instruction Tuning" (2024)**
    *   *Authors*: Google Research
    *   *Contribution*: Released RAFT, instruction-tuning models specifically to ignore distracting retrieved snippets and rely only on source materials.
    *   *URL*: [arXiv:2403.10131](https://arxiv.org/pdf/2403.10131.pdf)
62. **"ALiBi: Train Short, Test Long: Attention with Linear Biases Enables Input Length Extrapolation" (2021)**
    *   *Authors*: Ofir Press, Noah A. Smith, Mike Lewis
    *   *Contribution*: Designed attention bias mechanisms that allow transformer networks to evaluate longer contexts than seen during training.
    *   *URL*: [arXiv:2108.12409](https://arxiv.org/pdf/2108.12409.pdf)
63. **"RoPE: Former: RoFormer: Enhanced Transformer with Rotary Position Embedding" (2021)**
    *   *Authors*: Jianlin Su, Yu Lu, Shengfeng Pan, Bo Wen, Yunbo Cao
    *   *Contribution*: Introduced Rotary Position Embeddings (RoPE), combining absolute and relative encodings, now standard in Llama/Mistral models.
    *   *URL*: [arXiv:2104.09864](https://arxiv.org/pdf/2104.09864.pdf)
64. **"Leave No Tokens Behind: Enhanced Transformer with Infini-Attention" (2024)**
    *   *Authors*: Google Research
    *   *Contribution*: Developed Infini-Attention, scaling context windows to millions of tokens by maintaining localized search buffers.
    *   *URL*: [arXiv:2404.07143](https://arxiv.org/pdf/2404.07143.pdf)
65. **"KGBert: BERT for Knowledge Graph Completion" (2019)**
    *   *Authors*: Liang Yao et al.
    *   *Contribution*: Applied Transformer representation modeling directly to link prediction and triple classification inside Knowledge Graphs.
    *   *URL*: [arXiv:1909.03193](https://arxiv.org/pdf/1909.03193.pdf)
66. **"Differentiable Neural Computers" (2016)**
    *   *Authors*: Alex Graves et al. (DeepMind)
    *   *Contribution*: Developed Differentiable Neural Computers (DNCs), using neural nets to navigate, store, and read structured data graphs.
    *   *URL*: [PDF Link](https://www.nature.com/articles/nature20101.pdf)
67. **"REPLUG: Retrieval-Augmented Black-Box Language Models" (2023)**
    *   *Authors*: Weijia Shi et al.
    *   *Contribution*: Formulated RAG workflows treating the generator model as a black box, optimizing the retrieval mechanism independently.
    *   *URL*: [arXiv:2301.12652](https://arxiv.org/pdf/2301.12652.pdf)
68. **"Retrieval-Augmented Multimodal Language Modeling" (2022)**
    *   *Authors*: Google Research
    *   *Contribution*: Extended RAG paradigms to multimodal engines, retrieving images and text concurrently.
    *   *URL*: [arXiv:2211.12561](https://arxiv.org/pdf/2211.12561.pdf)
69. **"Active Retrieval Augmented Generation" (2023)**
    *   *Authors*: Zhengbao Jiang et al.
    *   *Contribution*: Developed FLARE, triggering document retrieval actively when LLM confidence scores drop.
    *   *URL*: [arXiv:2305.06983](https://arxiv.org/pdf/2305.06983.pdf)
70. **"HyDE: Precise Zero-Shot Dense Retrieval with Simulator Search Queries" (2022)**
    *   *Authors*: Luyu Gao, Xueguang Ma, Jimmy Lin, Jamie Callan
    *   *Contribution*: Developed Hypothetical Document Embeddings (HyDE), utilizing generative LLMs to create mock answers to query vector spaces.
    *   *URL*: [arXiv:2212.10496](https://arxiv.org/pdf/2212.10496.pdf)
71. **"Lost in the Middle: How Language Models Use Long Contexts" (2023)**
    *   *Authors*: Nelson F. Liu, Kevin Lin, Peter West, Hari Prasad, Alon Halevy, Hannaneh Hajishirzi, Luke Zettlemoyer
    *   *Contribution*: Highlighted that LLMs retrieve facts best at the beginning or end of context windows, struggling with info in the middle.
    *   *URL*: [arXiv:2307.03172](https://arxiv.org/pdf/2307.03172.pdf)
72. **"vLLM: Efficient Memory Management for Large Language Model Serving with PagedAttention" (2023)**
    *   *Authors*: Woosuk Kwon et al.
    *   *Contribution*: Developed PagedAttention, managing LLM KV caches like operating system virtual memory to reduce VRAM wastage.
    *   *URL*: [arXiv:2309.06180](https://arxiv.org/pdf/2309.06180.pdf)
73. **"In-Context Retrieval-Augmented Language Models" (2023)**
    *   *Authors*: Sewon Min et al.
    *   *Contribution*: Analyzed the parameters and performance tradeoffs of retrieving relevant passages on-the-fly during decoding.
    *   *URL*: [arXiv:2302.00083](https://arxiv.org/pdf/2302.00083.pdf)
74. **"Retro: Improving Language Models by Retrieving from Trillions of Tokens" (2021)**
    *   *Authors*: Sebastian Borgeaud et al. (DeepMind)
    *   *Contribution*: Showed that auto-regressive models retrieval-augmented at database scales achieve comparable performance with 25x fewer parameters.
    *   *URL*: [arXiv:2112.04426](https://arxiv.org/pdf/2112.04426.pdf)
75. **"RAG-Survey: Retrieval-Augmented Generation for Large Language Models: A Survey" (2023)**
    *   *Authors*: Yunfan Gao et al.
    *   *Contribution*: A complete, comprehensive review classifying paradigms, components, and evaluation metrics inside RAG ecosystems.
    *   *URL*: [arXiv:2312.10997](https://arxiv.org/pdf/2312.10997.pdf)

---

## 4. Reinforcement Learning, Agents & Alignment

76. **"Playing Atari with Deep Reinforcement Learning" (2013)**
    *   *Authors*: Volodymyr Mnih, Koray Kavukcuoglu, David Silver, Alex Graves, Ioannis Antonoglou, Daan Wierstra, Martin Riedmiller (DeepMind)
    *   *Contribution*: Introduced Deep Q-Networks (DQN), learning control policies directly from pixel inputs using reinforcement learning.
    *   *URL*: [arXiv:1312.5602](https://arxiv.org/pdf/1312.5602.pdf)
77. **"Continuous Control with Deep Reinforcement Learning" (2015)**
    *   *Authors*: Timothy P. Lillicrap et al.
    *   *Contribution*: Developed Deep Deterministic Policy Gradients (DDPG) for continuous action spaces.
    *   *URL*: [arXiv:1509.02971](https://arxiv.org/pdf/1509.02971.pdf)
78. **"Proximal Policy Optimization Algorithms" (2017)**
    *   *Authors*: John Schulman, Filip Wolski, Prafulla Dhariwal, Alec Radford, Oleg Klimov (OpenAI)
    *   *Contribution*: Introduced PPO, a highly stable, data-efficient policy gradient optimization method, now standard in RLHF.
    *   *URL*: [arXiv:1707.06347](https://arxiv.org/pdf/1707.06347.pdf)
79. **"Mastering the Game of Go with Deep Neural Networks and Tree Search" (2016)**
    *   *Authors*: David Silver et al. (DeepMind)
    *   *Contribution*: Created AlphaGo, combining Monte Carlo tree search with value and policy networks to defeat a human Go champion.
    *   *URL*: [PDF Link](https://www.nature.com/articles/nature16961.pdf)
80. **"Asynchronous Methods for Deep Reinforcement Learning" (2016)**
    *   *Authors*: Volodymyr Mnih et al.
    *   *Contribution*: Introduced asynchronous gradient descents for reinforcement learning (A3C), accelerating multi-core RL agent training.
    *   *URL*: [arXiv:1602.01783](https://arxiv.org/pdf/1602.01783.pdf)
81. **"Training Language Models to Follow Instructions with Human Feedback" (2022)**
    *   *Authors*: Long Ouyang et al. (OpenAI)
    *   *Contribution*: Developed InstructGPT, utilizing Reinforcement Learning from Human Feedback (RLHF) to align language models with user intent.
    *   *URL*: [arXiv:2203.02155](https://arxiv.org/pdf/2203.02155.pdf)
82. **"Direct Preference Optimization: Your Language Model is Secretly a Reward Model" (2023)**
    *   *Authors*: Rafael Rafailov, Archit Sharma, Eric Mitchell, Stefano Ermon, Christopher D. Manning, Chelsea Finn
    *   *Contribution*: Formulated DPO, training LLMs directly on human binary preferences without setting up reward models or active RL.
    *   *URL*: [arXiv:2305.18290](https://arxiv.org/pdf/2305.18290.pdf)
83. **"Constitutional AI: Harmlessness from AI Feedback" (2022)**
    *   *Authors*: Yuntao Bai et al. (Anthropic)
    *   *Contribution*: Formulated RL from AI Feedback (RLAIF), aligning models to follow ethical rules written inside a text "constitution."
    *   *URL*: [arXiv:2212.08073](https://arxiv.org/pdf/2212.08073.pdf)
84. **"ReAct: Synergizing Reasoning and Acting in Language Models" (2022)**
    *   *Authors*: Shunyu Yao, Jeffrey Zhao, Dian Yu, Nan Du, Izhak Shafran, Karthik Narasimhan, Yuan Cao
    *   *Contribution*: Formulated ReAct, prompting language models to alternate generating reasoning traces and execution actions.
    *   *URL*: [arXiv:2210.03629](https://arxiv.org/pdf/2210.03629.pdf)
85. **"Reflexion: Language Agents with Verbal Reinforcement Learning" (2023)**
    *   *Authors*: Noah Shinn, Beck Labash, Ashwin Gopinath
    *   *Contribution*: Designed agents utilizing verbal self-reflection feedback loops to learn from task trial errors without modifying model weights.
    *   *URL*: [arXiv:2303.11366](https://arxiv.org/pdf/2303.11366.pdf)
86. **"Toolformer: Language Models Can Teach Themselves to Use Tools" (2023)**
    *   *Authors*: Timo Schick et al.
    *   *Contribution*: Trained language models to inject API calls into text, letting them leverage calculators, search engines, and calendars.
    *   *URL*: [arXiv:2302.04761](https://arxiv.org/pdf/2302.04761.pdf)
87. **"Generative Agents: Interactive Simulacra of Human Behavior" (2023)**
    *   *Authors*: Joon Sung Park et al.
    *   *Contribution*: Designed sandboxed environments where generative agents plan activities, remember details, and exhibit social dynamics.
    *   *URL*: [arXiv:2304.03442](https://arxiv.org/pdf/2304.03442.pdf)
88. **"AutoGPT: An Autonomous GPT-4 Experiment" (2023)**
    *   *Authors*: Toran Bruce Richards
    *   *Contribution*: Released open-source framework showcasing LLMs executing autonomous, chain-of-thought system loops to achieve objectives.
    *   *URL*: [GitHub Link](https://github.com/Significant-Gravitas/Auto-GPT)
89. **"Voyager: An Open-Ended Embodied Agent with Large Language Models" (2023)**
    *   *Authors*: Guanzhi Wang et al.
    *   *Contribution*: Built a learning agent utilizing automatic curriculum engines and code-generation memories to explore Minecraft environments.
    *   *URL*: [arXiv:2305.16291](https://arxiv.org/pdf/2305.16291.pdf)
90. **"Model-Based Reinforcement Learning with AlphaZero" (2017)**
    *   *Authors*: David Silver et al. (DeepMind)
    *   *Contribution*: Developed a single generalized reinforcement learning engine capable of learning Chess, Shogi, and Go from scratch.
    *   *URL*: [arXiv:1712.01815](https://arxiv.org/pdf/1712.01815.pdf)
91. **"DPPO: Distributed Proximal Policy Optimization" (2017)**
    *   *Authors*: Heess et al.
    *   *Contribution*: Developed distributed architectures for parallelized training optimization within PPO algorithms.
    *   *URL*: [arXiv:1707.02286](https://arxiv.org/pdf/1707.02286.pdf)
92. **"Self-Play Fine-Tuning Converts Weak Language Models to Strong Language Models" (2024)**
    *   *Authors*: Zixiang Chen et al.
    *   *Contribution*: Introduced SPIN, utilizing self-play processes to improve LLM generation capabilities without additional human feedback data.
    *   *URL*: [arXiv:2401.01335](https://arxiv.org/pdf/2401.01335.pdf)
93. **"WebArena: A Realistic Web Environment for Building Autonomous Agents" (2023)**
    *   *Authors*: Shuyan Zhou et al.
    *   *Contribution*: Established benchmark sandboxes measuring how successfully agents interact with fully functioning shopping, forum, and git tools.
    *   *URL*: [arXiv:2307.13854](https://arxiv.org/pdf/2307.13854.pdf)
94. **"ORPO: Monolithic Preference Optimization without Reference Model" (2024)**
    *   *Authors*: Jiwoo Hong et al.
    *   *Contribution*: Developed ORPO, combining supervised fine-tuning and preference optimization into a single, memory-efficient step.
    *   *URL*: [arXiv:2403.07691](https://arxiv.org/pdf/2403.07691.pdf)
95. **"Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" (2022)**
    *   *Authors*: Jason Wei, Xuechen Wang, Dale Schuurmans, Maarten Bosma, Ed Chi, Quoc Le, Denny Zhou
    *   *Contribution*: Proved prompting LLMs to write intermediate reasoning steps drastically improves logical deduction and arithmetic.
    *   *URL*: [arXiv:2201.11903](https://arxiv.org/pdf/2201.11903.pdf)
96. **"Self-Consistency Improves Chain of Thought Reasoning in Language Models" (2022)**
    *   *Authors*: Xuezhi Wang et al.
    *   *Contribution*: Replaced greedy decoding in Chain-of-Thought prompting with sample voting to select the most consistent output.
    *   *URL*: [arXiv:2203.11171](https://arxiv.org/pdf/2203.11171.pdf)
97. **"Tree of Thoughts: Deliberate Problem Solving with Large Language Models" (2023)**
    *   *Authors*: Shunyu Yao et al.
    *   *Contribution*: Formulated Tree of Thoughts (ToT), letting models evaluate intermediate progress blocks using search algorithms like BFS or DFS.
    *   *URL*: [arXiv:2305.10601](https://arxiv.org/pdf/2305.10601.pdf)
98. **"Reinforcement Learning with Human Feedback: A Survey" (2023)**
    *   *Authors*: Google Research / Various Universities
    *   *Contribution*: Compiled research describing models, challenges, safety components, and feedback modalities inside RLHF pipelines.
    *   *URL*: [arXiv:2308.13549](https://arxiv.org/pdf/2308.13549.pdf)
99. **"RLHF-safety: Training Socially Aligned Language Models" (2023)**
    *   *Authors*: Anthropic / OpenAI researchers
    *   *Contribution*: Explored safety alignment methodologies using helpful/harmless reinforcement reward modeling.
    *   *URL*: [arXiv:2304.14324](https://arxiv.org/pdf/2304.14324.pdf)
100.**"Aligning Large Language Models with Representation Engineering" (2023)**
     *   *Authors*: Andy Zou et al.
     *   *Contribution*: Modeled and modified hidden model activations directly to control LLM safety and truthfulness without retraining parameters.
     *   *URL*: [arXiv:2310.01405](https://arxiv.org/pdf/2310.01405.pdf)
