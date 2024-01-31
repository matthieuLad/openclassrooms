import { useState } from "react";
import arrow from "../assets/collapse-arrow.png";

function Collapse({ collapseTitle, collapseContent }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "collapse open" : "collapse"}>
      <div className="collapse-header">
        <p>{collapseTitle}</p>
        <button onClick={() => (open ? setOpen(false) : setOpen(true))}>
          <img src={arrow} className={open ? "open" : ""} alt="bouton flèche" />
        </button>
      </div>

      <div className={open ? "collapse-body open" : "collapse-body"}>
        {collapseContent}
      </div>
    </div>
  );
}

export default Collapse;
