import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer jb_cover web_footer">
        <div className="ft_shape bubble-18">
          <img
            src="assets/images/bubble2.png"
            className="img-responsive "
            alt="img"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footerNav jb_cover">
                <a href="#/">
                  <img
                    src="assets/images/gobo_logo.png"
                    className="img-fluid site-logo"
                    alt="img"
                  />
                </a>

                <ul className="icon_list_news index2_icon_list jb_cover">
                  <li>
                    <a href="#/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footerNav jb_cover footer_border_displ">
                <h5>features</h5>
                <ul className="nav-widget">
                  <li>
                    <a href="#/">
                      <i className="fa fa-square"></i>Job Management &amp;
                      Billing
                    </a>
                  </li>

                  <li>
                    <a href="#/">
                      <i className="fa fa-square"></i>Time &amp; Materials
                      Tracking
                    </a>
                  </li>

                  <li>
                    <a href="#/">
                      <i className="fa fa-square"></i>Standards Compliance
                    </a>
                  </li>

                  <li>
                    <a href="#/">
                      <i className="fa fa-square"></i>Real Time GPS Tracking
                    </a>
                  </li>

                  <li>
                    <a href="#/">
                      <i className="fa fa-square"></i>Client Portal
                    </a>
                  </li>

                  <li>
                    <a href="#/">
                      <i className="fa fa-square"></i> Powerful Workflow
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footerNav jb_cover footer_border_displ">
                <h5>browse</h5>
                <ul className="nav-widget">
                  <li>
                    <a href="#/">
                      <i className="fa fa-square"></i>Freelancers by Category
                    </a>
                  </li>

                  <li>
                    <a href="#/">
                      <i className="fa fa-square"></i> Freelancers in USA{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#/">
                      <i className="fa fa-square"></i> Freelancers in UK
                    </a>
                  </li>

                  <li>
                    <a href="#/">
                      <i className="fa fa-square"></i> Freelancers in Canada
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fa fa-square"></i> Freelancers in india
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fa fa-square"></i> find jobs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footerNav jb_cover">
                <h5>Contact </h5>
                <ul className="footer_first_contact">
                  <li>
                    <i className="flaticon-location-pointer"></i>
                    <p>
                      123 City Avenue, Floor 10,
                      <br /> malbourne, Australia.
                    </p>
                  </li>
                  <li>
                    <i className="flaticon-telephone"></i>
                    <p>
                      1 -234 -456 -7890
                      <br /> 1 -234 -456 -7890
                    </p>
                  </li>
                  <li>
                    <i className="flaticon-envelope"></i>
                    <a href="#/">info@Jbdesks.com </a>
                    <br />
                    <a href="#/">support@Jbdesks.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="copyright_left">
              <i className="fa fa-copyright"></i> 2019{" "}
              <a href="#/"> JB desks. </a> All Rights Reserved.
            </div>

            <div className="clearfix"></div>
          </div>
        </div>

        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop gradient-color">
            <div className="wave waveTop wavetop_1 wavetop_3"></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle"></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom wavebottom_1 wavebottom_3"></div>
          </div>
        </div>

        <div className="ft_shape2 bubble-190">
          <img
            src="assets/images/bubble2.png"
            className="img-responsive "
            alt="img"
          />
        </div>

        <div className="ft_shape1 bubble-19">
          <img
            src="assets/images/bubble2.png"
            className="img-responsive "
            alt="img"
          />
        </div>
      </div>
      <div id="chat-circle" className="btn btn-raised circle_index3">
        <i className="fas fa-comment-alt"></i>
      </div>
      <div className="chat-box chat_box_3">
        <div className="chat-box-header">
          ChatBot
          <span className="chat-box-toggle">
            <i className="fas fa-times"></i>
          </span>
        </div>
        <div className="chat-box-body chat_msg_box22">
          <div className="chat-box-overlay"></div>
          <div className="chat-logs"></div>
        </div>
        <div className="chat-input">
          <form>
            <input
              type="text"
              id="chat-input"
              placeholder="Send a message..."
            />
            <button type="submit" className="chat-submit" id="chat-submit">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
