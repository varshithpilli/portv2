import classes from "./Projects.module.css";
import ProjectJS from "./ProjectJS";
import ProjectDesign from "./ProjectDesign";
import { projectsData } from "./Data";

function Projects() {
  return (
    <section className={classes.projects}>
      <h2 className={classes.header}>See my recent work</h2>
      <figure className={classes.workItems}>
        {projectsData.map((project) => (
          <ProjectJS
            key={project.id}
            img={project.img}
            alt={project.alt}
            title={project.title}
            description={project.description}
            git={project.git}
            tech={project.tech}
          />
        ))}
      </figure>
    </section>
  );
}

export default Projects;
