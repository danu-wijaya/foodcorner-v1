import React, { Fragment } from "react";
import pancake from "../images/pancake.jpg";
import redvelvet from "../images/redvelvet.jpg";

function Content() {
  return (
    <Fragment>
      <div className="menu-card">
        <img src={pancake} alt="pancake" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Pancake</h2>
          <p className="mb-2">Healty food, declicious, and nutritious</p>
          <span>Rp25.000</span>
        </div>
      </div>

      <div className="menu-card">
        <img src={redvelvet} alt="redvelvet" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Redvelvet</h2>
          <p className="mb-2">Creamy, sweet, and delicious</p>
          <span>Rp30.000</span>
        </div>
      </div>
    </Fragment>
  );
}

export default Content;
