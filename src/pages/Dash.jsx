import React from "react";
import { Link } from "react-router-dom";

const Dash = () => {
  return (
    <div>
      <div className="flex ">
        <Link to="/webdev" className="flex bg-slate-500 h-28 w-80 box-border">
            Web developer
        </Link>
      </div>
    </div>
  );
};

export default Dash;
