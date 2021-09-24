import React, { Fragment } from "react";
import all from "../common/all";

const AboutUs = () => {
  return (
    <Fragment>
      <div>
        <all.Header name="about" />
        <all.PageTitle name="About Us" />

        <div className="job_agency_wrapper jb_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12 col-sm-12">
                <div className="jb_heading_wraper left_jb_jeading">
                  <h3>
                    We Iusto Creative Digital Agency, We Provide Professional
                    Web Page.
                  </h3>
                </div>
                <div className="grow_next_text agency_main_wrapper jb_cover">
                  <p>
                    What do all consultants need? In short, trust. This is
                    achprofessional presentation and the ability to
                    communicateclearly with existing and potential clients.
                    Whether you are an accountant,What do all consultants need?
                    In short, trust. This is achieved with professional
                    presentation and the ability to communicate.
                    <br />
                    <br /> Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut ed minim veniam, quis nostrud dipisicing
                    elit, sed do eiusmod tempor incididunt exercitationlaborum.
                  </p>
                  <div className="header_btn search_btn jb_cover">
                    <a href="#/">learn more</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12 col-sm-12">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                    <div className="company_main_wrapper">
                      <div className="company_img_wrapper">
                        <img src="assets/images/cmp3.png" alt="team_img1" />
                        <div className="btc_team_social_wrapper">
                          <h1>(usa)</h1>
                        </div>
                      </div>
                      <div className="opening_job">
                        <h1>
                          <a href="#/">25 job open</a>
                        </h1>
                      </div>
                      <div className="company_img_cont_wrapper">
                        <h4>burger patty</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                    <div className="company_main_wrapper">
                      <div className="company_img_wrapper">
                        <img src="assets/images/cmp4.png" alt="team_img1" />
                        <div className="btc_team_social_wrapper">
                          <h1>(usa)</h1>
                        </div>
                      </div>
                      <div className="opening_job">
                        <h1>
                          <a href="#/">04 job open</a>
                        </h1>
                      </div>
                      <div className="company_img_cont_wrapper">
                        <h4>Akshay INC.</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="jb_top_jobs_category job_agency_box jb_cover">
                      <h3>
                        <a href="#/">laravel</a>
                      </h3>
                      <img src="assets/images/jb1.png" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="jb_top_jobs_category job_agency_box jb_cover">
                      <h3>
                        <a href="#/">Wordpress</a>
                      </h3>
                      <img src="assets/images/jb2.png" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="jb_top_jobs_category job_agency_box jb_cover">
                      <h3>
                        <a href="#/">AngularJS</a>
                      </h3>
                      <img src="assets/images/jb3.png" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="counter_wrapper jb_cover">
          <div className="counter_overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="counter_mockup_design jb_cover">
                  <div className="animation-circle-inverse">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <img
                    src="assets/images/mockup2.png"
                    className="img-responsive"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="counter_right_wrapper jb_cover">
                  <h1>Some Statistical Facts</h1>
                  <div className="counter_width">
                    <div className="counter_cntnt_box">
                      <div className="count-description">
                        <span className="timer">2500</span>
                        <p className="con2">happy customers </p>
                      </div>
                    </div>
                  </div>
                  <div className="counter_width">
                    <div className="counter_cntnt_box">
                      <div className="count-description">
                        {" "}
                        <span className="timer">9425</span>
                        <p className="con2">ticket solved</p>
                      </div>
                    </div>
                  </div>
                  <div className="counter_width">
                    <div className="counter_cntnt_box">
                      <div className="count-description">
                        {" "}
                        <span className="timer">9</span>
                        <span>+</span>
                        <p className="con2">average rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="job_rivew_wrapper jb_cover">
          <div className="job_rivew_img">
            <img src="assets/images/mockup3.png" alt="img" />
          </div>
          <div className="job_rivew_testimonial">
            <div className="jb_heading_wraper left_rivew_heading">
              <h3>our job review</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt{" "}
              </p>
            </div>
            <div className="rivew_testimonial_slider jb_cover">
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <div className="jb_saying_content_wrapper jb_cover">
                    <div className="saying_img">
                      <img src="assets/images/testi.png" alt="img" />
                    </div>
                    <div className="rating_star">
                      <i className="flaticon-star-1"></i>
                      <i className="flaticon-star-1"></i>
                      <i className="flaticon-star-1"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                    </div>

                    <p>
                      “ I don't always clap, but when I do, it'sbecause of
                      Sella. We can't understandhow we've been Sella. ”
                    </p>
                    <div className="jb_saying_img_name">
                      <h1>
                        <a href="#/">Marita Irene</a>
                      </h1>
                      <p>Support Manager @ Echo</p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="jb_saying_content_wrapper jb_cover">
                    <div className="saying_img">
                      <img src="assets/images/testi1.png" alt="img" />
                    </div>
                    <div className="rating_star">
                      <i className="flaticon-star-1"></i>
                      <i className="flaticon-star-1"></i>
                      <i className="flaticon-star-1"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                    </div>
                    <p>
                      “ I don't always clap, but when I do, it'sbecause of
                      Sella. We can't understandhow we've been Sella. ”
                    </p>
                    <div className="jb_saying_img_name">
                      <h1>
                        <a href="#/">Marita Irene</a>
                      </h1>
                      <p>Support Manager @ Echo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="download_wrapper jb_cover">
          <div className="counter_overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="download_mockup_design jb_cover">
                  <div className="animation-circle-inverse2">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <img
                    src="assets/images/mockup5.png"
                    className="img-responsive"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="download_app_store jb_cover">
                  <h1>Download</h1>
                  <h2>Job Portal App Now!</h2>
                  <p>
                    All it takes is 30 seconds to Download. Your Mobile App for
                    Job
                    <br /> Fast, Simple & Delightful.
                  </p>
                  <div className="app_btn jb_cover">
                    <a href="#/" className="ss_playstore">
                      <span>
                        <i className="flaticon-android-logo"></i>
                      </span>
                      Play Store
                    </a>
                    <a href="#/" className="ss_appstore">
                      <span>
                        <i className="flaticon-apple"></i>
                      </span>{" "}
                      App Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <all.NewsLetter />
        <all.Footer />
      </div>
    </Fragment>
  );
};

export default AboutUs;
