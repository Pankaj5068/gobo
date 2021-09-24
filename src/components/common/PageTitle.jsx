import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const PageTitle = ({ name, img }) => {
  return (
    <Fragment>
      <div className="page_title_section" style={{ background: `url(${img})` }}>
        <div className="page_header">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-8 col-12 col-sm-7">
                <h1>{name}</h1>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-5">
                <div className="sub_title_section">
                  <ul className="sub_title">
                    <li>
                      <Link to="/"> Home </Link>&nbsp; / &nbsp;{" "}
                    </li>
                    <li>{name}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PageTitle;
