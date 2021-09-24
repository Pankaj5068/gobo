import React from "react";

const Banner = ({ name }) => {
  return (
    <div className="login_banner_wrapper">
      <img
        src="assets/images/gobo_logo.png"
        className="img-fluid site-logo"
        alt="logo"
      />
      <div className="header_btn search_btn facebook_wrap jb_cover">
        <a href="#/">
          {name} with facebook <i className="fab fa-facebook-f"></i>
        </a>
      </div>
      <div className="header_btn search_btn google_wrap jb_cover">
        <a href="#/">
          {name} with Google <i className="fab fa-google"></i>
        </a>
      </div>
      <div className="jp_regis_center_tag_wrapper jb_register_red_or">
        <h1>OR</h1>
      </div>
    </div>
  );
};

export default Banner;
