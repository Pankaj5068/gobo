import React, { Fragment } from "react";
import all from "../../common/all";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="dlabnav">
        <div className="dlabnav-scroll">
          <div className="dropdown header-profile2">
            <a
              className="nav-link"
              href="#/"
              role="button"
              data-bs-toggle="dropdown"
            >
              <div className="header-info2 d-flex align-items-center">
                <img src="daassets/images/profile/pic1.jpg" alt="" />
                <div className="d-flex align-items-center sidebar-info">
                  <div>
                    <span className="font-w400 d-block">Franklin Jr</span>
                    <small className="text-end font-w400">Jr Actor</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <ul className="metismenu" id="menu">
            <li>
              <all.Link to="/actdashboard">
                <i className="flaticon-025-dashboard"></i>
                <span className="nav-text">Dashboard</span>
              </all.Link>
            </li>
            <li>
              <all.Link to="/actprofile">
                <i className="flaticon-045-heart"></i>
                <span className="nav-text">Profile</span>
              </all.Link>
            </li>
            <li>
              <a className="has-arrow " href="#/" aria-expanded="false">
                <i className="flaticon-093-waving"></i>
                <span className="nav-text">Jobs</span>
              </a>
              <ul>
                <li>
                  <all.Link to="/actjobapplied">Job Applied</all.Link>
                </li>
                <li>
                  <all.Link to="/actjobauditions">Job Auditions</all.Link>
                </li>
                <li>
                  <all.Link to="/actwishlist">WishList</all.Link>
                </li>
                <li>
                  <all.Link to="/actshortlist">ShortListed</all.Link>
                </li>
              </ul>
            </li>
            <li>
              <all.Link to="/actmessages">
                <i className="flaticon-022-copy"></i>
                <span className="nav-text">My Messages</span>
              </all.Link>
            </li>
            <li>
              <all.Link to="/actnotifs">
                <i className="flaticon-050-info"></i>
                <span className="nav-text">Notifications</span>
              </all.Link>
            </li>
            <li>
              <a href="#/">
                <i className="flaticon-381-settings"></i>
                <span className="nav-text">Settings</span>
              </a>
            </li>
          </ul>
          <div className="plus-box">
            <p className="fs-14 font-w600 mb-2">
              Gobo Manages
              <br />
              Your Resume Easily
              <br />
            </p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="copyright">
            <p>
              <strong>GoBo Admin</strong> © 2021 All Rights Reserved
            </p>
            <p className="fs-12">Made by Wordsystech</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
