import React from "react";
import { Link } from "react-router-dom";

const Dash = () => {
  return (
    <div>
      <div className="flex ">
        <Link to="/webdev" className="flex border rounded-lg bg-slate-400 h-28 w-80 box-border">
            Web developer
        </Link>
        <Link to="/webdev" className="flex border rounded-lg bg-slate-400 h-28 w-80 box-border">
           UI Designer
        </Link>
      </div>
    </div>
  );
};

export default Dash;
