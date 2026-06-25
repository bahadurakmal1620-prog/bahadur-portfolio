export default function Home() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 20px", fontFamily: "Arial, sans-serif" }}>
      
      {/* Header / Intro */}
      <section style={{ marginBottom: "50px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Bahadur Akmal</h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          I build AI-powered web applications, machine learning models, and full-stack apps (.NET, Python, Next.js).
        </p>
      </section>

      {/* About */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>About Me</h2>
        <p style={{ lineHeight: "1.6", color: "#333" }}>
          I'm a developer specializing in combining AI/LLMs with full-stack development to build
          practical tools. I work across Python, FastAPI, .NET, and Next.js/React, with hands-on
          experience training machine learning models and integrating LLM APIs like Gemini into
          real applications.
        </p>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>Skills</h2>
        <ul style={{ lineHeight: "1.8", color: "#333" }}>
          <li>AI/ML: Model training, LLM integration (Gemini, OpenAI)</li>
          <li>Computer Vision: Face recognition, object detection (DeepFace, OpenCV)</li>
          <li>Backend: Python, FastAPI, .NET</li>
          <li>Frontend: Next.js, React, TypeScript</li>
          <li>Tools: Git/GitHub, REST APIs, ChromaDB, CrewAI</li>
        </ul>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>Projects</h2>

        <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>AI Attendance System</h3>
          <p style={{ color: "#555", marginBottom: "10px" }}>
            An automated face recognition attendance system for university classrooms. Teachers upload
            a group photo of the class and the system automatically identifies each student and marks
            their attendance using DeepFace. Includes student registration, teacher records with CSV
            export, per-student attendance reports, and shortage warnings for students below 80%.
            Built with FastAPI, Next.js, and DeepFace.
          </p>
          <a href="https://github.com/bahadurakmal1620-prog/ai-attendance-system" style={{ color: "#2563eb" }}>
            View on GitHub →
          </a>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>AI Interview Assistant</h3>
          <p style={{ color: "#555", marginBottom: "10px" }}>
            A full-stack app that generates mock interview questions, evaluates answers using AI,
            and creates a personalized 7-day learning plan. Built with FastAPI, Next.js, and Google Gemini.
          </p>
          <a href="https://github.com/bahadurakmal1620-prog/ai-interview-assistant" style={{ color: "#2563eb" }}>
            View on GitHub →
          </a>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>PyBot — NLP FAQ Chatbot</h3>
          <p style={{ color: "#555", marginBottom: "10px" }}>
            A Python chatbot that matches user questions to the right FAQ answer using a custom NLP pipeline
            (tokenization, stop-word removal, stemming, TF-IDF, and cosine similarity) — built entirely
            with Python's standard library, no heavy dependencies.
          </p>
          <a href="https://github.com/bahadurakmal1620-prog/CodeAlpha1" style={{ color: "#2563eb" }}>
            View on GitHub →
          </a>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>LinguaTranslate</h3>
          <p style={{ color: "#555", marginBottom: "10px" }}>
            A browser-based language translation tool supporting 40+ languages, with auto-detection,
            text-to-speech, and a fully responsive UI — no server or API key required.
          </p>
          <a href="https://github.com/bahadurakmal1620-prog/CodeAlpha" style={{ color: "#2563eb" }}>
            View on GitHub →
          </a>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>AI/ML Project Collection</h3>
          <p style={{ color: "#555", marginBottom: "10px" }}>
            Four AI/ML projects built during an internship: a rule-based chatbot, a K-Nearest Neighbors
            classifier on the Iris dataset, an NLP-based career recommendation system, and an OCR text
            recognition pipeline using OpenCV and Tesseract.
          </p>
          <a href="https://github.com/bahadurakmal1620-prog/Decodelabs" style={{ color: "#2563eb" }}>
            View on GitHub →
          </a>
        </div>

      </section>

      {/* Contact */}
      <section>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>Get In Touch</h2>
        <p style={{ color: "#333" }}>
          Open to freelance projects involving AI/ML, full-stack development, and automation.
        </p>
        <p style={{ marginTop: "10px" }}>
          📧 bahadur.akmal.16.20@gmail.com <br />
          💼 <a href="https://www.linkedin.com/in/bahadur-akmal-a87148309?utm_source=share_via&utm_content=profile&utm_medium=member_android" style={{ color: "#2563eb" }}>LinkedIn</a> &nbsp;|&nbsp;
          🐙 <a href="https://github.com/bahadurakmal1620-prog" style={{ color: "#2563eb" }}>GitHub</a>
        </p>
      </section>

    </main>
  );
}