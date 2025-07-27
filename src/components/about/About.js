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
      I'm a computer science student passionate about Generative AI, backend systems, and API development. I enjoy exploring how large language models, fine-tuning, and retrieval-augmented generation can be applied to real-world problems. Alongside my coursework, I build side projects that combine GenAI with robust backend architectures, focusing on RESTful APIs, efficient pipelines, and cloud deployment. My interests lie at the intersection of AI-driven applications and scalable software engineering, and I’m always looking to push boundaries through research, experimentation, and hands-on development.
      </p>
    </section>
  );
}

export default About;
