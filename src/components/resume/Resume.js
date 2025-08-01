import classes from "./Resume.module.css";
import { useState, useEffect } from "react";

function Resume() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className={classes.resume}>
      {isMobile ? (
        <div className="pdf-preview">
          <img
            src="/resume.jpg"
            alt="Resume Preview"
            className="preview-img"
            style={{ width: "100%", height: "auto" }}
          />
          <div style={{ marginTop: "10px" }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.pdf_download}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      ) : (
        <div>
          <iframe
            src="/resume.pdf"
            width="100%"
            height="600px"
            style={{ border: "none" }}
            title="Resume PDF"
            ></iframe>
            </div>
      )}
    </section>
  );
}

export default Resume;
