import classes from "./About.module.css";

import Item from "./Item";
import Data from "./Data";

function About() {
  return (
    <section className={classes.about}>

      {Data.map((el) => {
        return <Item key={el.id} title={el.title} items={el.items} />;
      })}
      <h2>About me,</h2>
      <p className={classes.text}>
      I'm a computer science student with a strong interest in machine learning, natural language processing, and AI systems. I enjoy exploring how models learn, experiment with concepts like fine-tuning, retrieval-augmented generation. Beyond coursework, I actively work on side projects—from building chatbots and classification models aimed at deepening my practical understanding of ML. I'm especially excited by the intersection of language and logic, and I'm always looking for ways to push boundaries through research and hands-on experimentation.
      </p>
    </section>
  );
}

export default About;
