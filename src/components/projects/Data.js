import XyMedia from "./img/XY-Media.webp";
import JBlog from "./img/jBlog.webp";
import BEredesign from "./img/BEredesign.webp";

export const projectsData = [
  {
    id: 1,
    type: "web",
    img: JBlog,
    alt: "Image of Static Quiz",
    title: "Static Quiz",
    description:
      "A JavaScript quiz game with a timer, score tracking, and answer highlighting. Features a final score display and restart option. Question to be updates manually in the script.",
    git: "https://github.com/varshithpilli/quiz-app",
    demo: "https://varshithpilli.github.io/quiz-app/",
    tech: [
      {
        id: 1,
        color: "green",
        tech: "HTML",
      },
      {
        id: 2,
        color: "blue",
        tech: "CSS",
      },
      {
        id: 3,
        color: "purple",
        tech: "JS",
      },
    ],
  },
  {
    id: 2,
    type: "web",
    img: BEredesign,
    alt: "Image of Calender Event Timer",
    title: "Calender Event Timer",
    description:
    "This project manages events on a calendar, allowing users to add, delete, and view events with countdowns, while storing data in localStorage.",
    git: "https://github.com/varshithpilli/calendar-events",
    demo: "https://varshithpilli.github.io/calendar-events/",
    tech: [
      {
        id: 1,
        color: "green",
        tech: "HTML",
      },
      {
        id: 2,
        color: "blue",
        tech: "CSS",
      },
      {
        id: 3,
        color: "purple",
        tech: "JS",
      },
    ],
  },
  {
    id: 3,
    type: "web",
    img: XyMedia,
    alt: "Image of Note Taking",
    title: "Note Taking",
    description:
      "A React-based notes app with local storage, allowing users to add, edit, and delete notes. Features dark mode and intuitive keyboard shortcuts for seamless input.",
    git: "https://github.com/varshithpilli/notes-app",
    demo: "https://textsave.netlify.app/",
    tech: [
      {
        id: 1,
        color: "red",
        tech: "React",
      },
      {
        id: 2,
        color: "blue",
        tech: "Tailwind",
      },
      {
        id: 3,
        color: "yellow",
        tech: "TS",
      },
    ],
  },
];
