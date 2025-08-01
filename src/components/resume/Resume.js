import classes from "./Resume.module.css";

function Resume() {
  return (
    <section className={classes.resume}>
      <iframe
        src="./resume.pdf"
        width="100%"
        height="600px"
        style={{ border: "none" }}
        title="Resume PDF"
      ></iframe>
    </section>
  );
}

export default Resume