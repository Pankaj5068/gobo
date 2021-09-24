import React, { Fragment } from "react";
import all from "../../common/all";
const NavHeader = () => {
  return (
    <Fragment>
      <div className="nav-header">
        <all.Link to="/actdashboard" className="brand-logo">
          <img
            src="daassets/images/gobo_logo.png"
            height="60px"
            width="60px"
            alt=""
          />
        </all.Link>
        <div className="nav-control">
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavHeader;
