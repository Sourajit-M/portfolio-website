import sys
from pathlib import Path
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def build_pdf(filename: Path):
    doc = SimpleDocTemplate(
        str(filename),
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'MainTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        alignment=1,
        textColor=colors.HexColor('#111827')
    )
    
    contact_style = ParagraphStyle(
        'ContactInfo',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        alignment=1,
        textColor=colors.HexColor('#4B5563')
    )
    
    heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#1F2937'),
        spaceBefore=8,
        spaceAfter=4,
    )
    
    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor('#374151')
    )
    
    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        leftIndent=12,
        textColor=colors.HexColor('#374151')
    )

    story = []
    
    # Header
    story.append(Paragraph("SOURAJIT MAJUMDER", title_style))
    story.append(Paragraph("+91-9007876490 | sourajitm19@gmail.com", contact_style))
    story.append(Paragraph("linkedin.com/in/sourajit-majumder | github.com/Sourajit-M", contact_style))
    story.append(Spacer(1, 10))
    
    # Education
    story.append(Paragraph("EDUCATION", heading_style))
    story.append(Paragraph("<b>Narula Institute of Technology</b> (2023 – 2027)<br/>B.Tech in Computer Science Engineering (AI & ML) | CGPA: 8.51/10.0<br/>Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Machine Learning, Artificial Intelligence, Database Management Systems", body_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("<b>St. Augustine's Day School, Barrackpore (ISC)</b> (2023)<br/>Higher Secondary (Grade 12): 94%", body_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("<b>St. Augustine's Day School, Barrackpore (ISC)</b> (2021)<br/>Secondary (Grade 10): 90%", body_style))
    story.append(Spacer(1, 8))
    
    # Certifications
    story.append(Paragraph("CERTIFICATIONS", heading_style))
    story.append(Paragraph("• Certified System Administrator (CSA) – ServiceNow (Issued: June 2026)", bullet_style))
    story.append(Spacer(1, 8))
    
    # Projects
    story.append(Paragraph("PROJECTS", heading_style))
    
    story.append(Paragraph("<b>Glaucoma Detection System — Deep Learning, Computer Vision</b> (2026)", body_style))
    story.append(Paragraph("github.com/Sourajit-M/glaucoma-detection-project | Live Demo", body_style))
    story.append(Paragraph("• Built AI based Glaucoma detection system using ResNet-18 and U-Net with an AUC of 94.5% and accuracy of 87.1% which outperforming the strongest classical baseline (SVM, 78.9% AUC) by 15.6 percentage points.", bullet_style))
    story.append(Paragraph("• Designed end-to-end ML pipeline comprising of image pre-processing, data augmentation, model training, Grad-CAM explainability and deployment as a real-time inference API.", bullet_style))
    story.append(Paragraph("• Technologies Used: Python, PyTorch, ResNet-18, U-Net, Grad-CAM, scikit-learn, OpenCV", bullet_style))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>YouTube Semantic Intelligence & Search Engine</b> (2025)", body_style))
    story.append(Paragraph("github.com/Sourajit-M/youtube-semantic-search | Live Demo", body_style))
    story.append(Paragraph("• Built an automated pipeline for ingestion, chunking and indexing of YouTube video transcripts, to support a grounded Q&A engine that answers with exact source citations.", bullet_style))
    story.append(Paragraph("• Implemented a hybrid retrieval system (BM25 + semantic search with RRF reranking), reducing irrelevant/incorrect retrievals by approximately 40% versus keyword-only search.", bullet_style))
    story.append(Paragraph("• Technologies Used: Python, FastAPI, ChromaDB, LiteLLM, SQLite, React", bullet_style))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>Local AI Inference Platform — (FastAPI, React, Ollama)</b> (2026)", body_style))
    story.append(Paragraph("github.com/Sourajit-M/local-ai-inference-platform | Live Demo", body_style))
    story.append(Paragraph("• Developed a local AI inference platform for fully offline SLM execution, with JWT authentication, persistent chat sessions, structured generation, and experiment tracking.", bullet_style))
    story.append(Paragraph("• Built a benchmarking framework evaluating Qwen 2.5 3B, Llama 3.2 3B, and Phi-3 Mini on consumer hardware (RTX 4050, 4GB VRAM); optimized champion model (Qwen 2.5 3B) achieved 0.81s TTFT and 40.17 tok/s throughput, visualized via a React analytics dashboard.", bullet_style))
    story.append(Paragraph("• Technologies Used: Python, FastAPI, TypeScript, Ollama, SQLite, Pydantic, JWT", bullet_style))
    story.append(Spacer(1, 8))

    # Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", heading_style))
    story.append(Paragraph("• <b>Languages:</b> Java, Python, JavaScript", bullet_style))
    story.append(Paragraph("• <b>AI / ML & Computer Vision:</b> scikit-learn, LangChain, LangGraph, RAG, ChromaDB", bullet_style))
    story.append(Paragraph("• <b>Web & Backend:</b> FastAPI, Node.js, Express.js, REST API, MongoDB, PostgreSQL", bullet_style))
    story.append(Paragraph("• <b>Tools & Platforms:</b> Git, GitHub, Docker", bullet_style))
    story.append(Paragraph("• <b>Core CS:</b> Data Structures & Algorithms, OOP, System Design Fundamentals", bullet_style))
    story.append(Spacer(1, 8))

    # Achievements & Extracurriculars
    story.append(Paragraph("ACHIEVEMENTS & EXTRACURRICULARS", heading_style))
    story.append(Paragraph("• <b>LeetCode:</b> Solved 450+ problems spanning dynamic programming, graphs, trees, and binary search.", bullet_style))
    story.append(Paragraph("• <b>Certification:</b> Completed Full Stack Web Development (100xDevs) – React, Node.js, PostgreSQL, and system design fundamentals.", bullet_style))
    story.append(Paragraph("• <b>Hackathon:</b> Participated in Smart India Internal Hackathon (SIH) 2025 and worked with a team to design and build a working AI-based prototype within a fixed hackathon timeline.", bullet_style))

    doc.build(story)
    print(f"Successfully generated {filename}")

if __name__ == "__main__":
    out_dir = Path(__file__).parent
    build_pdf(out_dir / "resume.pdf")
