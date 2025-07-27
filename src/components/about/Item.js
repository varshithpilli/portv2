import classes from "./About.module.css";
import "../../Colors.css";

function Item({ items, title }) {
  return (
    <figure className={classes.skillItem}>
      <h3>{title}</h3>
      <div className={classes.skills}>
        {items.map((item) => (
          <span key={item.id} style={{border: "1px solid var(--accent-4)"}}>
            {item.skill}
          </span>
        ))}
      </div>
    </figure>
  );
}

export default Item;
