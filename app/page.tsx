export default function Home() {
  const projects = [
    {
      title: "Intelligent Video Surveillance System",
      tag: "Computer Vision · Security",
      description:
        "An AI-powered surveillance platform for industrial and enterprise deployments. Processes live CCTV feeds, webcams, or uploaded video to detect zone intrusions, crowd violations, and abandoned objects in real time. Each company configures its own alarm rules, restricted zones, and authorized personnel whitelist through an admin panel — no code changes needed per deployment.",
      stack: ["YOLOv8", "DeepFace", "FastAPI", "Next.js", "WebSockets", "OpenCV"],
      link: "https://github.com/bahadurakmal1620-prog/ai-surveillance-system",
    },
    {
      title: "AI Attendance System",
      tag: "Computer Vision · Education",
      description:
        "Automated face recognition attendance for university classrooms. Teachers upload a single group photo and the system identifies every student, marks attendance, and logs the session. Includes per-student attendance reports with shortage warnings below 80%, teacher records, and CSV export.",
      stack: ["DeepFace", "FastAPI", "Next.js", "Python", "TypeScript"],
      link: "https://github.com/bahadurakmal1620-prog/ai-attendance-system",
    },
    {
      title: "AI Interview Assistant",
      tag: "LLM · Career Tools",
      description:
        "A full-stack mock interview platform. Enter a job role, receive AI-generated questions, answer them through a web interface, and get back a detailed feedback report with communication scores and a personalized 7-day study plan tailored to your specific weaknesses.",
      stack: ["Google Gemini", "FastAPI", "Next.js", "Python", "TypeScript"],
      link: "https://github.com/bahadurakmal1620-prog/ai-interview-assistant",
    },
    {
      title: "PyBot — NLP FAQ Chatbot",
      tag: "NLP · Python",
      description:
        "A Python chatbot that matches user questions to FAQ answers using a custom NLP pipeline built entirely from scratch — tokenization, stop-word removal, stemming, TF-IDF vectorization, and cosine similarity. No external ML libraries.",
      stack: ["Python", "TF-IDF", "Cosine Similarity", "NLP"],
      link: "https://github.com/bahadurakmal1620-prog/CodeAlpha1",
    },
    {
      title: "LinguaTranslate",
      tag: "Web App · NLP",
      description:
        "A browser-based language translation tool supporting 40+ languages with auto-detection, text-to-speech output, and a fully responsive UI. Runs entirely in the browser — no server or API key required.",
      stack: ["JavaScript", "Web APIs", "HTML", "CSS"],
      link: "https://github.com/bahadurakmal1620-prog/CodeAlpha",
    },
    {
      title: "AI/ML Project Collection",
      tag: "Machine Learning · Internship",
      description:
        "Four AI/ML projects built during an internship: a rule-based chatbot, a K-Nearest Neighbors classifier on the Iris dataset, an NLP career recommendation system using TF-IDF, and an OCR text recognition pipeline using OpenCV and Tesseract.",
      stack: ["Python", "Scikit-learn", "OpenCV", "Tesseract", "NLP"],
      link: "https://github.com/bahadurakmal1620-prog/Decodelabs",
    },
  ];

  const skills = [
    { category: "AI & LLMs", items: "Gemini, OpenAI, CrewAI, ChromaDB, RAG, prompt engineering" },
    { category: "Computer Vision", items: "YOLOv8, DeepFace, OpenCV, face recognition, object detection" },
    { category: "Backend", items: "Python, FastAPI, .NET, REST APIs, WebSockets" },
    { category: "Frontend", items: "Next.js, React, TypeScript, HTML, CSS" },
    { category: "Tools & Platforms", items: "Git, GitHub, Vercel, Render, Kaggle, VS Code" },
  ];

  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh", fontFamily: "'Segoe UI', system-ui, Arial, sans-serif", color: "#111827" }}>

      {/* Hero */}
      <section style={{ borderBottom: "1px solid #e5e7eb", padding: "72px 0 60px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontSize: "13px", fontWeight: "600", color: "#1d4ed8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
            Available for freelance work
          </p>
          <h1 style={{ fontSize: "42px", fontWeight: "800", color: "#111827", lineHeight: "1.15", marginBottom: "20px", letterSpacing: "-0.02em" }}>
            Bahadur Akmal
          </h1>
          <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: "1.7", marginBottom: "32px", maxWidth: "560px" }}>
            I build AI-powered applications that work in production — computer vision systems,
            LLM-powered tools, and full-stack web apps built with Python, FastAPI, and Next.js.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="mailto:bahadur.akmal.16.20@gmail.com"
              style={{ display: "inline-block", padding: "11px 24px", backgroundColor: "#111827", color: "white", borderRadius: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
              Get in touch
            </a>
            <a href="https://github.com/bahadurakmal1620-prog" target="_blank"
              style={{ display: "inline-block", padding: "11px 24px", backgroundColor: "white", color: "#111827", border: "1px solid #d1d5db", borderRadius: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bahadur-akmal-a87148309" target="_blank"
              style={{ display: "inline-block", padding: "11px 24px", backgroundColor: "white", color: "#111827", border: "1px solid #d1d5db", borderRadius: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
              LinkedIn
            </a>
            <a href="https://www.fiverr.com/users/bahadurml" target="_blank"
              style={{ display: "inline-block", padding: "11px 24px", backgroundColor: "white", color: "#111827", border: "1px solid #d1d5db", borderRadius: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
              Fiverr
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ borderBottom: "1px solid #e5e7eb", padding: "56px 0" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontSize: "11px", fontWeight: "700", color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "20px" }}>About</p>
          <p style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8", maxWidth: "600px" }}>
            I specialize in combining AI and machine learning with full-stack development to
            build tools that solve real problems. My recent work includes a real-time surveillance
            system used for industrial security, an automated university attendance system using
            face recognition, and an AI interview coach powered by Google Gemini. I work across
            the full stack — from training and integrating AI models to building the backend API
            and the frontend interface.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section style={{ borderBottom: "1px solid #e5e7eb", padding: "56px 0" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontSize: "11px", fontWeight: "700", color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "28px" }}>Skills</p>
          <div style={{ display: "grid", gap: "16px" }}>
            {skills.map((skill, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "16px", alignItems: "baseline" }}>
                <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827" }}>{skill.category}</p>
                <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}>{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: "56px 0 80px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontSize: "11px", fontWeight: "700", color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "32px" }}>Projects</p>

          <div style={{ display: "grid", gap: "2px" }}>
            {projects.map((project, i) => (
              <div key={i} style={{ borderTop: "1px solid #e5e7eb", padding: "28px 0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px", gap: "16px" }}>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: "600", color: "#1d4ed8", marginBottom: "6px", letterSpacing: "0.04em" }}>
                      {project.tag}
                    </p>
                    <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111827", marginBottom: "0" }}>
                      {project.title}
                    </h3>
                  </div>
                  <a href={project.link} target="_blank"
                    style={{ flexShrink: 0, fontSize: "13px", color: "#1d4ed8", fontWeight: "600", textDecoration: "none", paddingTop: "2px", whiteSpace: "nowrap" }}>
                    View on GitHub →
                  </a>
                </div>
                <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.75", marginBottom: "14px" }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {project.stack.map((tech, j) => (
                    <span key={j} style={{ fontSize: "11px", fontWeight: "600", color: "#374151", backgroundColor: "#f3f4f6", padding: "3px 10px", borderRadius: "20px", letterSpacing: "0.02em" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section style={{ borderTop: "1px solid #e5e7eb", padding: "40px 0" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <p style={{ fontSize: "14px", fontWeight: "700", color: "#111827", marginBottom: "4px" }}>Bahadur Akmal</p>
            <p style={{ fontSize: "13px", color: "#6b7280" }}>Open to freelance projects — AI/ML, computer vision, full-stack development</p>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="mailto:bahadur.akmal.16.20@gmail.com" style={{ fontSize: "13px", color: "#1d4ed8", textDecoration: "none", fontWeight: "500" }}>Email</a>
            <a href="https://github.com/bahadurakmal1620-prog" target="_blank" style={{ fontSize: "13px", color: "#1d4ed8", textDecoration: "none", fontWeight: "500" }}>GitHub</a>
            <a href="https://www.linkedin.com/in/bahadur-akmal-a87148309" target="_blank" style={{ fontSize: "13px", color: "#1d4ed8", textDecoration: "none", fontWeight: "500" }}>LinkedIn</a>
            <a href="https://www.fiverr.com/users/bahadurml" target="_blank" style={{ fontSize: "13px", color: "#1d4ed8", textDecoration: "none", fontWeight: "500" }}>Fiverr</a>
          </div>
        </div>
      </section>

    </main>
  );
}