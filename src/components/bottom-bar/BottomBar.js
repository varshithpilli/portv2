import classes from "./BottomBar.module.css";

function BottomBar() {
  return (

    <aside className={classes.bottom}>


      <div className={classes.left}>
        <div className={classes.bottom_icons}>
          <i className="fa-solid fa-code-branch"></i>master
        </div>
      </div>

      <div className={classes.right}>
        <div className={classes.bottom_icons}>Spaces:4</div>
        <div className={classes.bottom_icons}>UTF-8</div>
        <div className={classes.bottom_icons}>CRLF</div>
        <div className={classes.bottom_icons}>
          <i className="fa-solid fa-terminal"></i>
        </div>
      </div>


    </aside>
  );
}

export default BottomBar;
