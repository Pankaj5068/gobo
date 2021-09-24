import React, { Fragment } from "react";
import all from "../common/all";

const ContactUs = () => {
  return (
    <Fragment>
      <div>
        <all.Header name="contact" />
        <all.PageTitle name="Contact Us" />

        <div className="contact_icon_section jb_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                <div className="jb_heading_wraper">
                  <h3>contact with us</h3>

                  <p>Your next level Product developemnt company assets</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="contact_main jb_cover">
                  <h4>contact us</h4>
                  <div className="contact_rotate">
                    <i className="fas fa-phone"></i>
                  </div>

                  <p>
                    +1800-148-423
                    <br /> +9175-148-124
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="contact_main jb_cover">
                  <h4>Email</h4>
                  <div className="contact_rotate">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <p>
                    <a href="#/">jbdesks@example.com </a>
                    <br />
                    <a href="#/">support@example.com</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="contact_main jb_cover">
                  <h4>location</h4>
                  <div className="contact_rotate">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>

                  <p>
                    51-Maxico ,canada
                    <br /> 52B-melbourne,UK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map_wrapper_top jb_cover">
          <div className="map_wrapper map2_wrapper">
            <div id="map"></div>
          </div>
          <div className="contact_field_wrapper comments_form">
            <div className="jb_heading_wraper left_rivew_heading">
              <h3>get in touch</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt{" "}
              </p>
            </div>
            <form>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-pos">
                    <div className="form-group i-name">
                      <input
                        type="text"
                        className="form-control require"
                        name="full_name"
                        id="namTen-first"
                        placeholder=" Name*"
                      />
                      <i className="fas fa-user-alt"></i>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-e">
                    <div className="form-group i-email">
                      <label className="sr-only">Email </label>
                      <input
                        type="email"
                        className="form-control require"
                        name="email"
                        id="emailTen"
                        placeholder=" Email *"
                        data-valid="email"
                        data-error="Email should be valid."
                      />
                      <i className="fas fa-envelope"></i>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-m">
                    <div className="form-group i-message">
                      <textarea
                        className="form-control require"
                        name="message"
                        rows="5"
                        id="messageTen"
                        placeholder=" Message"
                      ></textarea>
                      <i className="fas fa-comment"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="tb_es_btn_div">
                    <div className="response"></div>
                    <div className="tb_es_btn_wrapper">
                      <button type="button" className="submitForm">
                        submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <all.NewsLetter />
        <all.Footer />
      </div>
    </Fragment>
  );
};

export default ContactUs;
