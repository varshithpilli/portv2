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
      I'm a tech enthusiast who loves diving deep into systems and understanding how things work at a low level.
      I started my journey exploring low-level programming, working with languages like C and C++, understanding memory management,
      and tinkering with operating systems, pushing me to experiment with assembly.
      More recently, I've started exploring web development and machine learning,
      broadening my perspective beyond low-level systems. I'm learning how to build for the web,
      working with modern frameworks, and understanding backend architectures. On the ML side, I'm getting familiar with data processing,
      basic models, and the tools that power AI. While low-level programming still excites me, I'm always keeping an open mind and experimenting,
      seeing where it takes me.
      </p>
    </section>
  );
}

export default About;
