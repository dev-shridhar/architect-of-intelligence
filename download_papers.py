import os
import urllib.request
import sys

# Define papers to download
PAPERS = [
    {
        "category": "algorithms",
        "title": "Attention Is All You Need",
        "filename": "attention_is_all_you_need.pdf",
        "url": "https://arxiv.org/pdf/1706.03762.pdf"
    },
    {
        "category": "algorithms",
        "title": "Adam: A Method for Stochastic Optimization",
        "filename": "adam_optimization.pdf",
        "url": "https://arxiv.org/pdf/1412.6980.pdf"
    },
    {
        "category": "algorithms",
        "title": "Raft Consensus (In Search of an Understandable Consensus Algorithm)",
        "filename": "raft_consensus.pdf",
        "url": "https://raft.github.io/raft.pdf"
    },
    {
        "category": "architectures",
        "title": "Deep Residual Learning for Image Recognition (ResNet)",
        "filename": "resnet_image_recognition.pdf",
        "url": "https://arxiv.org/pdf/1512.03385.pdf"
    },
    {
        "category": "architectures",
        "title": "BERT: Pre-training of Deep Bidirectional Transformers",
        "filename": "bert_language_understanding.pdf",
        "url": "https://arxiv.org/pdf/1810.04805.pdf"
    },
    {
        "category": "architectures",
        "title": "ImageNet Classification with Deep Convolutional Neural Networks (AlexNet)",
        "filename": "alexnet_image_classification.pdf",
        "url": "https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf"
    }
]

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PAPERS_DIR = os.path.join(BASE_DIR, "research_papers")

def download_file(url, destination_path, title):
    print(f"Downloading: '{title}'...")
    print(f"Source: {url}")
    print(f"Dest:   {destination_path}")
    
    # Custom headers to avoid some sites blocking simple python urllib requests
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
    success_count = 0
    for paper in PAPERS:
        category_dir = os.path.join(PAPERS_DIR, paper["category"])
        os.makedirs(category_dir, exist_ok=True)
        
        dest_path = os.path.join(category_dir, paper["filename"])
        
        if os.path.exists(dest_path) and os.path.getsize(dest_path) > 10000:
            print(f"Paper '{paper['title']}' already exists. Skipping.\n")
            success_count += 1
            continue
            
        success = download_file(paper["url"], dest_path, paper["title"])
        if success:
            success_count += 1
            
    print(f"Processed all papers. Successfully downloaded {success_count}/{len(PAPERS)} papers.")

if __name__ == "__main__":
    main()
