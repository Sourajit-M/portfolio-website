import { NextResponse } from "next/server";
import { portfolioData } from "@/data/portfolio";

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Question string is required" },
        { status: 400 }
      );
    }

    // 1. Try forwarding to local FastAPI backend if running
    try {
      const fastApiResponse = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
        // Set short timeout so if python backend is not running, fallback quickly
        signal: AbortSignal.timeout(3000),
      });

      if (fastApiResponse.ok) {
        const data = await fastApiResponse.json();
        return NextResponse.json({ Answer: data.Answer || data.answer });
      }
    } catch (fastApiError) {
      // FastAPI not running locally, proceed to fallback Groq call
      console.log("FastAPI backend not responding, using direct Groq API route fallback.");
    }

    // 2. Direct Groq API fallback
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GROQ_API_KEY is not configured in environment." },
        { status: 500 }
      );
    }

    const candidateContext = {
      name: portfolioData.name,
      role: portfolioData.role,
      email: portfolioData.email,
      skills: portfolioData.skills.flatMap((s) => s.items),
      education: [
        "Narula Institute of Technology - B.Tech in Computer Science Engineering (AI & ML) CGPA: 8.51/10.0 (2023-2027)",
        "St. Augustine's Day School, Barrackpore (ISC Grade 12): 94% (2023)",
        "St. Augustine's Day School, Barrackpore (ISC Grade 10): 90% (2021)"
      ],
      certifications: [
        "Certified System Administrator (CSA) – ServiceNow (June 2026)",
        "Full Stack Web Development (100xDevs)"
      ],
      projects: portfolioData.projects.map((p) => ({
        title: p.title,
        description: p.description,
        tech: p.tech,
        highlights: p.highlights,
        github: p.githubUrl,
      })),
      achievements: [
        "LeetCode: Solved 450+ problems (DP, graphs, trees, binary search)",
        "Smart India Internal Hackathon (SIH) 2025 finalist prototype developer"
      ]
    };

    const systemPrompt = `
You are an AI assistant representing a job candidate named ${portfolioData.name}.

Below is everything you know about the candidate:
${JSON.stringify(candidateContext, null, 2)}

Rules:
1. Answer only using the information
2. Dont invent information
3. If information is not available say - "I dont have enough information"
4. Be professional
5. Answer as if HR is interviewing this candidate
`;

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question },
        ],
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("Groq API error:", errText);
      return NextResponse.json({ error: "Failed to fetch response from Groq API" }, { status: 500 });
    }

    const groqData = await groqRes.json();
    const answer = groqData.choices?.[0]?.message?.content || "I don't have enough information.";

    return NextResponse.json({ Answer: answer });
  } catch (error: any) {
    console.error("Chat API Route Error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
