import XyMedia from "./img/XY-Media.webp";
import JBlog from "./img/jBlog.webp";
import BEredesign from "./img/BEredesign.webp";

export const projectsData = [
  {
    id: 1,
    type: "web",
    img: JBlog,
    alt: "Image of Constitutioner",
    title: "Constitutioner",
    description:
      "A legal assistant that processes and embeds the Indian Constitution for fast, similarity-based retrieval using Pinecone. Developed both GUI and CLI interfaces with real-time LLM responses via OpenRouter API. Implemented prompt engineering to improve accuracy and minimize hallucinations.",
    git: "https://github.com/varshithpilli/constitutioner",
    demo: "https://varshithpilli.github.io/quiz-app/",
    tech: [
      {
        id: 1,
        color: "green",
        tech: "PineconeDB",
      },
      {
        id: 2,
        color: "blue",
        tech: "HuggingFace",
      },
      {
        id: 3,
        color: "purple",
        tech: "OpenRouter",
      },
      {
        id: 4,
        color: "purple",
        tech: "FastAPI",
      },
    ],
  },
  {
    id: 2,
    type: "web",
    img: BEredesign,
    alt: "Image of Lin-Alg Tool",
    title: "Lin-Alg Toolkit",
    description:
    "Built and deployed a lightweight Flask backend providing 10+ linear algebra operations via RESTful APIs. Designed modular, well-documented endpoints for seamless integration and hands-on experience with backend development and API design.",
    git: "https://github.com/varshithpilli/Lin-Alg",
    tech: [
      {
        id: 1,
        color: "green",
        tech: "Flask",
      },
      {
        id: 2,
        color: "blue",
        tech: "HTML",
      },
      {
        id: 3,
        color: "purple",
        tech: "CSS",
      },
      {
        id: 4,
        color: "purple",
        tech: "JS",
      },
    ],
  },
];
