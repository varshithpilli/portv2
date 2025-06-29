import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import classes from "./Home.module.css";

function Home() {
  return (
    <section className={classes.home}>
      <div>
        <h1>Varshith Pilli</h1>
        <span className={classes.job}>
          CompSci Student
        </span>
        <ul className={classes.socials}>
        <li>
          <a
            href="https://github.com/varshithpilli"
            className={classes.social}
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/varshith-pilli"
            className={classes.social}
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://x.com/thesixthdude"
            className={classes.social}
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-square-x-twitter"></i>
          </a>
        </li>
      </ul>
      </div>
    </section>
  );
}

export default Home;
