import os
import sys
import urllib.request
import argparse

# List of top 100 AI research papers
PAPERS = [
    # Category 1: Neural Networks & Optimization Foundations (1-25)
    {"category": "neural_nets", "title": "Learning Representations by Back-Propagating Errors", "filename": "backprop_1986.pdf", "url": "https://www.nature.com/articles/323533a0.pdf"},
    {"category": "neural_nets", "title": "Long Short-Term Memory", "filename": "lstm_1997.pdf", "url": "https://arxiv.org/pdf/cs/9706301.pdf"},
    {"category": "neural_nets", "title": "Gradient-Based Learning Applied to Document Recognition", "filename": "lenet_1998.pdf", "url": "http://yann.lecun.com/exdb/publis/pdf/lecun-01a.pdf"},
    {"category": "neural_nets", "title": "Random Forests", "filename": "random_forests_2001.pdf", "url": "https://link.springer.com/content/pdf/10.1023/A:1010933404324.pdf"},
    {"category": "neural_nets", "title": "ImageNet Classification with Deep Convolutional Neural Networks (AlexNet)", "filename": "alexnet_2012.pdf", "url": "https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf"},
    {"category": "neural_nets", "title": "Dropout: A Simple Way to Prevent Neural Networks from Overfitting", "filename": "dropout_2014.pdf", "url": "https://jmlr.org/papers/volume15/srivastava14a/srivastava14a.pdf"},
    {"category": "neural_nets", "title": "Adam: A Method for Stochastic Optimization", "filename": "adam_optimization.pdf", "url": "https://arxiv.org/pdf/1412.6980.pdf"},
    {"category": "neural_nets", "title": "Generative Adversarial Nets (GAN)", "filename": "gan_2014.pdf", "url": "https://arxiv.org/pdf/1406.2661.pdf"},
    {"category": "neural_nets", "title": "Batch Normalization: Accelerating Deep Network Training", "filename": "batch_norm_2015.pdf", "url": "https://arxiv.org/pdf/1502.03167.pdf"},
    {"category": "neural_nets", "title": "Deep Residual Learning for Image Recognition (ResNet)", "filename": "resnet_image_recognition.pdf", "url": "https://arxiv.org/pdf/1512.03385.pdf"},
    {"category": "neural_nets", "title": "XGBoost: A Scalable Tree Boosting System", "filename": "xgboost_2016.pdf", "url": "https://arxiv.org/pdf/1603.02754.pdf"},
    {"category": "neural_nets", "title": "Delving Deep into Rectifiers: Surpassing Human-Level Performance", "filename": "he_initialization_2015.pdf", "url": "https://arxiv.org/pdf/1502.01852.pdf"},
    {"category": "neural_nets", "title": "Very Deep Convolutional Networks for Large-Scale Image Recognition (VGG)", "filename": "vgg_2014.pdf", "url": "https://arxiv.org/pdf/1409.1556.pdf"},
    {"category": "neural_nets", "title": "Going Deeper with Convolutions (Inception)", "filename": "inception_2014.pdf", "url": "https://arxiv.org/pdf/1409.4842.pdf"},
    {"category": "neural_nets", "title": "Visualizing and Understanding Convolutional Networks", "filename": "zeiler_fergus_2013.pdf", "url": "https://arxiv.org/pdf/1311.2901.pdf"},
    {"category": "neural_nets", "title": "U-Net: Convolutional Networks for Biomedical Image Segmentation", "filename": "unet_2015.pdf", "url": "https://arxiv.org/pdf/1505.04597.pdf"},
    {"category": "neural_nets", "title": "Faster R-CNN: Towards Real-Time Object Detection", "filename": "faster_rcnn_2015.pdf", "url": "https://arxiv.org/pdf/1506.01497.pdf"},
    {"category": "neural_nets", "title": "You Only Look Once: Unified, Real-Time Object Detection (YOLO)", "filename": "yolo_2015.pdf", "url": "https://arxiv.org/pdf/1506.02640.pdf"},
    {"category": "neural_nets", "title": "Mask R-CNN", "filename": "mask_rcnn_2017.pdf", "url": "https://arxiv.org/pdf/1703.06870.pdf"},
    {"category": "neural_nets", "title": "Auto-Encoding Variational Bayes (VAE)", "filename": "vae_2013.pdf", "url": "https://arxiv.org/pdf/1312.6114.pdf"},
    {"category": "neural_nets", "title": "Denoising Diffusion Probabilistic Models (DDPM)", "filename": "ddpm_2020.pdf", "url": "https://arxiv.org/pdf/2006.11239.pdf"},
    {"category": "neural_nets", "title": "Neural Ordinary Differential Equations", "filename": "neural_odes_2018.pdf", "url": "https://arxiv.org/pdf/1806.07366.pdf"},
    {"category": "neural_nets", "title": "Decoupled Weight Decay Regularization (AdamW)", "filename": "adamw_2017.pdf", "url": "https://arxiv.org/pdf/1711.05101.pdf"},
    {"category": "neural_nets", "title": "Layer Normalization", "filename": "layer_norm_2016.pdf", "url": "https://arxiv.org/pdf/1607.06450.pdf"},
    {"category": "neural_nets", "title": "High-Resolution Image Synthesis with Latent Diffusion Models", "filename": "latent_diffusion_2021.pdf", "url": "https://arxiv.org/pdf/2112.10752.pdf"},

    # Category 2: Transformers & Attention Mechanisms (26-50)
    {"category": "transformers", "title": "Neural Machine Translation by Jointly Learning to Align and Translate", "filename": "bahdanau_attention_2014.pdf", "url": "https://arxiv.org/pdf/1409.0473.pdf"},
    {"category": "transformers", "title": "Attention Is All You Need (Transformer)", "filename": "attention_is_all_you_need.pdf", "url": "https://arxiv.org/pdf/1706.03762.pdf"},
    {"category": "transformers", "title": "Improving Language Understanding by Generative Pre-Training (GPT-1)", "filename": "gpt1_2018.pdf", "url": "https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf"},
    {"category": "transformers", "title": "BERT: Pre-training of Deep Bidirectional Transformers", "filename": "bert_language_understanding.pdf", "url": "https://arxiv.org/pdf/1810.04805.pdf"},
    {"category": "transformers", "title": "Language Models are Unsupervised Multitask Learners (GPT-2)", "filename": "gpt2_2019.pdf", "url": "https://d4mucfpruyw0c.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"},
    {"category": "transformers", "title": "Language Models are Few-Shot Learners (GPT-3)", "filename": "gpt3_2020.pdf", "url": "https://arxiv.org/pdf/2005.14165.pdf"},
    {"category": "transformers", "title": "RoBERTa: A Robustly Optimized BERT Pretraining Approach", "filename": "roberta_2019.pdf", "url": "https://arxiv.org/pdf/1907.11692.pdf"},
    {"category": "transformers", "title": "Exploring the Limits of Transfer Learning with T5", "filename": "t5_2019.pdf", "url": "https://arxiv.org/pdf/1910.10683.pdf"},
    {"category": "transformers", "title": "An Image is Worth 16x16 Words: Vision Transformer (ViT)", "filename": "vit_2020.pdf", "url": "https://arxiv.org/pdf/2010.11929.pdf"},
    {"category": "transformers", "title": "BART: Denoising Sequence-to-Sequence Pre-training", "filename": "bart_2019.pdf", "url": "https://arxiv.org/pdf/1910.13461.pdf"},
    {"category": "transformers", "title": "ALBERT: A Lite BERT for Self-supervised Learning", "filename": "albert_2019.pdf", "url": "https://arxiv.org/pdf/1909.11942.pdf"},
    {"category": "transformers", "title": "T5X: Collaborative Framework for Scaling Text-to-Text Models", "filename": "t5x_2022.pdf", "url": "https://arxiv.org/pdf/2203.17189.pdf"},
    {"category": "transformers", "title": "Swin Transformer: Hierarchical Vision Transformer", "filename": "swin_transformer_2021.pdf", "url": "https://arxiv.org/pdf/2103.14030.pdf"},
    {"category": "transformers", "title": "Longformer: The Long-Document Transformer", "filename": "longformer_2020.pdf", "url": "https://arxiv.org/pdf/2004.05150.pdf"},
    {"category": "transformers", "title": "GPT-4 Technical Report", "filename": "gpt4_technical_report.pdf", "url": "https://arxiv.org/pdf/2303.08774.pdf"},
    {"category": "transformers", "title": "LLaMA: Open and Efficient Foundation Language Models", "filename": "llama_2023.pdf", "url": "https://arxiv.org/pdf/2302.13971.pdf"},
    {"category": "transformers", "title": "Llama 2: Open Foundation and Fine-Tuned Chat Models", "filename": "llama2_2023.pdf", "url": "https://arxiv.org/pdf/2307.09288.pdf"},
    {"category": "transformers", "title": "Mistral 7B", "filename": "mistral_7b_2023.pdf", "url": "https://arxiv.org/pdf/2310.06825.pdf"},
    {"category": "transformers", "title": "Mixture-of-Experts Meets Instruction Tuning", "filename": "moe_instruction_tuning_2023.pdf", "url": "https://arxiv.org/pdf/2305.14705.pdf"},
    {"category": "transformers", "title": "Megatron-LM: Training Multi-Billion Parameter Models", "filename": "megatron_lm_2019.pdf", "url": "https://arxiv.org/pdf/1909.08053.pdf"},
    {"category": "transformers", "title": "Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context", "filename": "transformer_xl_2019.pdf", "url": "https://arxiv.org/pdf/1901.02860.pdf"},
    {"category": "transformers", "title": "GLM-130B: An Open Bilingual Pre-trained Model", "filename": "glm_130b_2022.pdf", "url": "https://arxiv.org/pdf/2210.02414.pdf"},
    {"category": "transformers", "title": "PaLM: Scaling Language Modeling with Pathways", "filename": "palm_2022.pdf", "url": "https://arxiv.org/pdf/2204.02311.pdf"},
    {"category": "transformers", "title": "Scaling Laws for Neural Language Models", "filename": "scaling_laws_lms_2020.pdf", "url": "https://arxiv.org/pdf/2001.08361.pdf"},
    {"category": "transformers", "title": "Training Compute-Optimal Large Language Models (Chinchilla)", "filename": "chinchilla_scaling_2022.pdf", "url": "https://arxiv.org/pdf/2203.15556.pdf"},

    # Category 3: Memory, Knowledge Retrieval & RAG Systems (51-75)
    {"category": "memory_rag", "title": "Memory Networks", "filename": "memory_networks_2014.pdf", "url": "https://arxiv.org/pdf/1410.3916.pdf"},
    {"category": "memory_rag", "title": "Neural Turing Machines", "filename": "neural_turing_machines_2014.pdf", "url": "https://arxiv.org/pdf/1410.5401.pdf"},
    {"category": "memory_rag", "title": "End-To-End Memory Networks", "filename": "end_to_end_memn2n_2015.pdf", "url": "https://arxiv.org/pdf/1503.08895.pdf"},
    {"category": "memory_rag", "title": "Retrieval-Augmented Generation (RAG)", "filename": "rag_2020.pdf", "url": "https://arxiv.org/pdf/2005.11401.pdf"},
    {"category": "memory_rag", "title": "REALM: Retrieval-Augmented Language Model Pre-Training", "filename": "realm_2020.pdf", "url": "https://arxiv.org/pdf/2002.08909.pdf"},
    {"category": "memory_rag", "title": "FlashAttention: Fast and Memory-Efficient Exact Attention", "filename": "flash_attention_2022.pdf", "url": "https://arxiv.org/pdf/2205.14135.pdf"},
    {"category": "memory_rag", "title": "FlashAttention-2: Faster Attention with Better Parallelism", "filename": "flash_attention2_2023.pdf", "url": "https://arxiv.org/pdf/2307.08691.pdf"},
    {"category": "memory_rag", "title": "Ring Attention with Blockwise Transformers for Near-Infinite Context", "filename": "ring_attention_2023.pdf", "url": "https://arxiv.org/pdf/2310.01889.pdf"},
    {"category": "memory_rag", "title": "Self-RAG: Learning to Retrieve, Generate, and Critique", "filename": "self_rag_2023.pdf", "url": "https://arxiv.org/pdf/2310.11511.pdf"},
    {"category": "memory_rag", "title": "Dense Passage Retrieval for Open-Domain Question Answering (DPR)", "filename": "dpr_2020.pdf", "url": "https://arxiv.org/pdf/2004.04906.pdf"},
    {"category": "memory_rag", "title": "Retrieval-Augmented Dual Instruction Tuning (RAFT)", "filename": "raft_tuning_2024.pdf", "url": "https://arxiv.org/pdf/2403.10131.pdf"},
    {"category": "memory_rag", "title": "ALiBi: Attention with Linear Biases Enables Input Length Extrapolation", "filename": "alibi_attention_2021.pdf", "url": "https://arxiv.org/pdf/2108.12409.pdf"},
    {"category": "memory_rag", "title": "RoFormer: Enhanced Transformer with Rotary Position Embedding (RoPE)", "filename": "rope_embeddings_2021.pdf", "url": "https://arxiv.org/pdf/2104.09864.pdf"},
    {"category": "memory_rag", "title": "Leave No Tokens Behind: Enhanced Transformer with Infini-Attention", "filename": "infini_attention_2024.pdf", "url": "https://arxiv.org/pdf/2404.07143.pdf"},
    {"category": "memory_rag", "title": "KGBert: BERT for Knowledge Graph Completion", "filename": "kgbert_2019.pdf", "url": "https://arxiv.org/pdf/1909.03193.pdf"},
    {"category": "memory_rag", "title": "Differentiable Neural Computers (DNC)", "filename": "differentiable_neural_computers.pdf", "url": "https://www.nature.com/articles/nature20101.pdf"},
    {"category": "memory_rag", "title": "REPLUG: Retrieval-Augmented Black-Box Language Models", "filename": "replug_2023.pdf", "url": "https://arxiv.org/pdf/2301.12652.pdf"},
    {"category": "memory_rag", "title": "Retrieval-Augmented Multimodal Language Modeling", "filename": "multimodal_retrieval_2022.pdf", "url": "https://arxiv.org/pdf/2211.12561.pdf"},
    {"category": "memory_rag", "title": "Active Retrieval Augmented Generation (FLARE)", "filename": "flare_active_rag_2023.pdf", "url": "https://arxiv.org/pdf/2305.06983.pdf"},
    {"category": "memory_rag", "title": "HyDE: Precise Zero-Shot Dense Retrieval with Simulator Search Queries", "filename": "hyde_dense_retrieval_2022.pdf", "url": "https://arxiv.org/pdf/2212.10496.pdf"},
    {"category": "memory_rag", "title": "Lost in the Middle: How Language Models Use Long Contexts", "filename": "lost_in_the_middle_2023.pdf", "url": "https://arxiv.org/pdf/2307.03172.pdf"},
    {"category": "memory_rag", "title": "vLLM: Efficient Memory Management with PagedAttention", "filename": "vllm_paged_attention_2023.pdf", "url": "https://arxiv.org/pdf/2309.06180.pdf"},
    {"category": "memory_rag", "title": "In-Context Retrieval-Augmented Language Models", "filename": "in_context_retrieval_2023.pdf", "url": "https://arxiv.org/pdf/2302.00083.pdf"},
    {"category": "memory_rag", "title": "Retro: Improving Language Models by Retrieving from Trillions of Tokens", "filename": "retro_retrieval_2021.pdf", "url": "https://arxiv.org/pdf/2112.04426.pdf"},
    {"category": "memory_rag", "title": "Retrieval-Augmented Generation for Large Language Models: A Survey", "filename": "rag_survey_llms_2023.pdf", "url": "https://arxiv.org/pdf/2312.10997.pdf"},

    # Category 4: Reinforcement Learning, Agents & Alignment (76-100)
    {"category": "rl_agents", "title": "Playing Atari with Deep Reinforcement Learning (DQN)", "filename": "dqn_atari_2013.pdf", "url": "https://arxiv.org/pdf/1312.5602.pdf"},
    {"category": "rl_agents", "title": "Continuous Control with Deep Reinforcement Learning (DDPG)", "filename": "ddpg_2015.pdf", "url": "https://arxiv.org/pdf/1509.02971.pdf"},
    {"category": "rl_agents", "title": "Proximal Policy Optimization Algorithms (PPO)", "filename": "ppo_2017.pdf", "url": "https://arxiv.org/pdf/1707.06347.pdf"},
    {"category": "rl_agents", "title": "Mastering the Game of Go with Deep Neural Networks (AlphaGo)", "filename": "alphago_2016.pdf", "url": "https://www.nature.com/articles/nature16961.pdf"},
    {"category": "rl_agents", "title": "Asynchronous Methods for Deep Reinforcement Learning (A3C)", "filename": "a3c_2016.pdf", "url": "https://arxiv.org/pdf/1602.01783.pdf"},
    {"category": "rl_agents", "title": "Training Language Models to Follow Instructions (InstructGPT/RLHF)", "filename": "instructgpt_rlhf_2022.pdf", "url": "https://arxiv.org/pdf/2203.02155.pdf"},
    {"category": "rl_agents", "title": "Direct Preference Optimization: Your Language Model is Secretly a Reward Model", "filename": "dpo_preference_optimization.pdf", "url": "https://arxiv.org/pdf/2305.18290.pdf"},
    {"category": "rl_agents", "title": "Constitutional AI: Harmlessness from AI Feedback (RLAIF)", "filename": "constitutional_ai_rlaif_2022.pdf", "url": "https://arxiv.org/pdf/2212.08073.pdf"},
    {"category": "rl_agents", "title": "ReAct: Synergizing Reasoning and Acting in Language Models", "filename": "react_prompting_2022.pdf", "url": "https://arxiv.org/pdf/220/0.03629.pdf"}, # Corrected redirect placeholder if needed
    {"category": "rl_agents", "title": "Reflexion: Language Agents with Verbal Reinforcement Learning", "filename": "reflexion_agents_2023.pdf", "url": "https://arxiv.org/pdf/2303.11366.pdf"},
    {"category": "rl_agents", "title": "Toolformer: Language Models Can Teach Themselves to Use Tools", "filename": "toolformer_2023.pdf", "url": "https://arxiv.org/pdf/2302.04761.pdf"},
    {"category": "rl_agents", "title": "Generative Agents: Interactive Simulacra of Human Behavior", "filename": "generative_agents_2023.pdf", "url": "https://arxiv.org/pdf/2304.03442.pdf"},
    {"category": "rl_agents", "title": "AutoGPT: Autonomous GPT-4 Experiment", "filename": "autogpt_github_link.txt", "url": "https://raw.githubusercontent.com/Significant-Gravitas/Auto-GPT/master/README.md"},
    {"category": "rl_agents", "title": "Voyager: An Open-Ended Embodied Agent with Large Language Models", "filename": "voyager_agent_2023.pdf", "url": "https://arxiv.org/pdf/2305.16291.pdf"},
    {"category": "rl_agents", "title": "Model-Based Reinforcement Learning with AlphaZero", "filename": "alphazero_2017.pdf", "url": "https://arxiv.org/pdf/1712.01815.pdf"},
    {"category": "rl_agents", "title": "DPPO: Distributed Proximal Policy Optimization", "filename": "dppo_2017.pdf", "url": "https://arxiv.org/pdf/1707.02286.pdf"},
    {"category": "rl_agents", "title": "Self-Play Fine-Tuning Converts Weak LMs to Strong LMs (SPIN)", "filename": "spin_self_play_2024.pdf", "url": "https://arxiv.org/pdf/2401.01335.pdf"},
    {"category": "rl_agents", "title": "WebArena: A Realistic Web Environment for Building Agents", "filename": "webarena_agents_2023.pdf", "url": "https://arxiv.org/pdf/2307.13854.pdf"},
    {"category": "rl_agents", "title": "ORPO: Monolithic Preference Optimization without Reference Model", "filename": "orpo_preference_2024.pdf", "url": "https://arxiv.org/pdf/2403.07691.pdf"},
    {"category": "rl_agents", "title": "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models", "filename": "chain_of_thought_2022.pdf", "url": "https://arxiv.org/pdf/2201.11903.pdf"},
    {"category": "rl_agents", "title": "Self-Consistency Improves Chain of Thought Reasoning", "filename": "self_consistency_cot_2022.pdf", "url": "https://arxiv.org/pdf/2203.11171.pdf"},
    {"category": "rl_agents", "title": "Tree of Thoughts: Deliberate Problem Solving with LLMs", "filename": "tree_of_thoughts_2023.pdf", "url": "https://arxiv.org/pdf/2305.10601.pdf"},
    {"category": "rl_agents", "title": "Reinforcement Learning with Human Feedback: A Survey", "filename": "rlhf_survey_2023.pdf", "url": "https://arxiv.org/pdf/2308.13549.pdf"},
    {"category": "rl_agents", "title": "RLHF-safety: Training Socially Aligned Language Models", "filename": "rlhf_safety_alignment_2023.pdf", "url": "https://arxiv.org/pdf/2304.14324.pdf"},
    {"category": "rl_agents", "title": "Aligning Large Language Models with Representation Engineering", "filename": "representation_engineering_2023.pdf", "url": "https://arxiv.org/pdf/2310.01405.pdf"}
]

# Adjust any specific hardcoded URLs/parameters that might have redirects
for p in PAPERS:
    if p["title"] == "ReAct: Synergizing Reasoning and Acting in Language Models":
        p["url"] = "https://arxiv.org/pdf/2210.03629.pdf"

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PAPERS_DIR = os.path.join(BASE_DIR, "research_papers")

def download_file(url, destination_path, title, dry_run=False):
    if dry_run:
        print(f"[DRY-RUN] Will download: '{title}' from {url}")
        return True

    print(f"Downloading: '{title}'...")
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
    )
    
    try:
        with urllib.request.urlopen(req) as response:
            total_size = int(response.info().get('Content-Length', 0))
            block_size = 1024 * 64
            downloaded = 0
            
            with open(destination_path, 'wb') as out_file:
                while True:
                    buffer = response.read(block_size)
                    if not buffer:
                        break
                    downloaded += len(buffer)
                    out_file.write(buffer)
                    
                    if total_size > 0:
                        percent = (downloaded / total_size) * 100
                        sys.stdout.write(f"\rProgress: {percent:.2f}% ({downloaded / (1024*1024):.2f} MB / {total_size / (1024*1024):.2f} MB)")
                    else:
                        sys.stdout.write(f"\rProgress: {downloaded / (1024*1024):.2f} MB downloaded")
                    sys.stdout.flush()
            print("\nDownload complete!\n")
            return True
    except Exception as e:
        print(f"\nError downloading '{title}': {e}\n")
        return False

def main():
    parser = argparse.ArgumentParser(description="Seminal AI Research Papers Downloader")
    parser.add_argument("--all", action="store_true", help="Download all 100 research papers")
    parser.add_argument("--category", choices=["neural_nets", "transformers", "memory_rag", "rl_agents"], help="Download papers in a specific category")
    parser.add_argument("--limit", type=int, default=15, help="Maximum number of papers to download (default: 15)")
    parser.add_argument("--dry-run", action="store_true", help="Perform a dry-run showing what files will download without saving them")
    
    args = parser.parse_args()
    
    filtered_papers = PAPERS
    if args.category:
        filtered_papers = [p for p in PAPERS if p["category"] == args.category]
        
    if not args.all:
        filtered_papers = filtered_papers[:args.limit]
        
    print(f"Discovered {len(filtered_papers)} target papers to process.")
    
    success_count = 0
    for paper in filtered_papers:
        category_dir = os.path.join(PAPERS_DIR, paper["category"])
        os.makedirs(category_dir, exist_ok=True)
        
        dest_path = os.path.join(category_dir, paper["filename"])
        
        # Check if already downloaded
        if not args.dry_run and os.path.exists(dest_path) and os.path.getsize(dest_path) > 10000:
            print(f"Paper '{paper['title']}' already exists. Skipping.\n")
            success_count += 1
            continue
            
        success = download_file(paper["url"], dest_path, paper["title"], dry_run=args.dry_run)
        if success:
            success_count += 1
            
    action = "Scanned" if args.dry_run else "Downloaded"
    print(f"Task completed. {action} {success_count}/{len(filtered_papers)} papers.")

if __name__ == "__main__":
    main()
