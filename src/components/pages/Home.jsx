import React, { Fragment } from "react";
import all from "../common/all";

const Home = () => {
  return (
    <Fragment>
      <div>
        <all.Header name="home" />

        <div className="main_slider_wrapper slider-area jb_cover">
          <div className="mains_slider_shaper">
            <img
              src="assets/images/slider_bg.png"
              className="img-fluid"
              alt="img"
            />
          </div>
          <div className="slider_small2_shape">
            <img
              src="assets/images/shape4.png"
              className="img-fluid "
              alt="img"
            />
          </div>
          <div className="slider_shape_smt bubble-1">
            <img
              src="assets/images/bubble.png"
              className="img-fluid "
              alt="img"
            />
          </div>
          <div
            id="carousel-example-generic"
            className="carousel slide"
            data-ride="carousel"
            data-interval="false"
          >
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="carousel-captions caption-1">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="content">
                          <div className="slider_shape_smt1 bubble-2">
                            <img
                              src="assets/images/bubble.png"
                              className="img-fluid "
                              alt="img"
                            />
                          </div>
                          <h2 data-animation="animated fadeInUp">
                            BE AN <span> INSPIRATION </span>
                          </h2>

                          <p data-animation="animated fadeInUp">
                            Showcase your talent.
                            <br /> Make a name for yourself
                          </p>
                          <div
                            data-animation="animated fadeInUp"
                            className="btn_hover slider_btn"
                          >
                            <a href="#/">sign up free</a>
                          </div>
                          <div
                            data-animation="animated fadeInUp"
                            className="slider_icon_list"
                          >
                            <ul>
                              <li>
                                <a href="#/">
                                  <i className="fab fa-apple"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fab fa-amazon"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fab fa-angular"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fas fa-th-large"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fas fa-blog"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="clear"></div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="slider_shape_sm3 bubble-3">
                          <img
                            src="assets/images/bubble.png"
                            className="img-fluid "
                            alt="img"
                          />
                        </div>
                        <div className="slider_side_img jb_cover">
                          <img
                            src="assets/images/banner-1.png"
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-captions caption-2">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="content">
                          <div className="slider_shape_smt1 bubble-4">
                            <img
                              src="assets/images/bubble.png"
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                          <h2 data-animation="animated fadeInUp">
                            We Offer <span> 25,000 </span>Job Vacancies Right
                            Now!.
                          </h2>

                          <p data-animation="animated fadeInUp">
                            The most complete field service software for IT &
                            Mobile Support, Fire Services, Electrical,
                            Maintenance, HVAC & Security Industries
                          </p>
                          <div
                            data-animation="animated fadeInUp"
                            className="btn_hover slider_btn"
                          >
                            <a href="#/">sign up free</a>
                          </div>
                          <div
                            data-animation="animated fadeInUp"
                            className="slider_icon_list"
                          >
                            <ul>
                              <li>
                                <a href="#/">
                                  <i className="fab fa-apple"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fab fa-amazon"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fab fa-angular"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fas fa-th-large"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fas fa-blog"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="clear"></div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="slider_shape_sm3 bubble-5">
                          <img
                            src="assets/images/bubble.png"
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                        <div className="slider_side_img jb_cover">
                          <img
                            src="assets/images/banner-2.png"
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ol className="carousel-indicators">
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="1"
                  className=""
                ></li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="2"
                  className=""
                ></li>
              </ol>
              <div className="carousel-nevigation">
                <a
                  className="prev"
                  href="#carousel-example-generic"
                  role="button"
                  data-slide="prev"
                >
                  <i className="flaticon-left-arrow"></i>
                </a>
                <a
                  className="next"
                  href="#carousel-example-generic"
                  role="button"
                  data-slide="next"
                >
                  <i className="flaticon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="slider_small_shape">
            <img
              src="assets/images/shape4.png"
              className="img-fluid"
              alt="img"
            />
          </div>
        </div>

        <div className="index3_form_wrapper jb_cover">
          <div className="slider_small3_shape">
            <img
              src="assets/images/shape4.png"
              className="img-fluid"
              alt="img"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="index3_form_box jb_cover">
                  <all.inputs.Select
                    options={[
                      { label: "Category", value: "category" },
                      { label: "Real Estate", value: "real estate" },
                      { label: "Electronics", value: "electronics" },
                      { label: "Marketing", value: "marketing" },
                      { label: "Education", value: "education" },
                    ]}
                  />

                  <all.inputs.Select
                    options={[
                      { label: "Job Title", value: "job title" },
                      { label: "Teacher", value: "teacher" },
                      { label: "Marketing", value: "marketing" },
                      { label: "Doctor", value: "doctor" },
                      { label: "Graphic", value: "graphic" },
                    ]}
                  />
                  <all.inputs.Select
                    options={[
                      { label: "Location", value: "location" },
                      { label: "Pune", value: "pune" },
                      { label: "Banglore", value: "banglore" },
                      { label: "Indore", value: "indore" },
                      { label: "Bhopal", value: "bhopal" },
                    ]}
                  />
                  <div className="contect_form3 contct_form_new3">
                    <input type="text" name="name" placeholder="Keyword" />
                  </div>
                  <div className="index3_form_search">
                    <a href="#/">
                      <i className="fas fa-search"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="best_jobs_wrapper index3_best_job_wrapper  jb_cover">
          <div className="line_shape">
            <img src="assets/images/line.png" className="img-fluid" alt="img" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                <div className="jb_heading_wraper">
                  <h3>Our Best Jobs for You</h3>

                  <p>Your next level Product developemnt company assets</p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="latest_job_tabs index2_tab_wrapper index3_tab_wrapper jb_cover">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#home"
                      >
                        Artist
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " data-toggle="tab" href="#menu1">
                        Producer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="tab-content">
                  <div id="home" className="tab-pane active">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt5.png"
                                  alt="post_img"
                                />
                              </div>
                              <div className="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">Female Actor in Main Lead</a>
                                </h4>

                                <ul>
                                  <li>
                                    <i className="flaticon-cash"></i>&nbsp; $12K
                                    - 15k P.A.
                                  </li>
                                  <li>
                                    <i className="flaticon-location-pointer"></i>
                                    &nbsp; Mumbai
                                  </li>
                                </ul>
                                <p>
                                  We are looking for Fresh Faces for lead and
                                  supporting roles with a dedication to acting.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt2.png"
                                  alt="post_img"
                                />
                              </div>
                              <div className="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">Male Actor in Lead Role </a>
                                </h4>

                                <ul>
                                  <li>
                                    <i className="flaticon-cash"></i>&nbsp; $12K
                                    - 15k P.A.
                                  </li>
                                  <li>
                                    <i className="flaticon-location-pointer"></i>
                                    &nbsp; Mumbai
                                  </li>
                                </ul>
                                <p>
                                  We are looking for Fresh Faces for lead and
                                  supporting roles with a dedication to acting.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt3.png"
                                  alt="post_img"
                                />
                              </div>
                              <div className="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">Female Actor in Main Lead </a>
                                </h4>

                                <ul>
                                  <li>
                                    <i className="flaticon-cash"></i>&nbsp; $12K
                                    - 15k P.A.
                                  </li>
                                  <li>
                                    <i className="flaticon-location-pointer"></i>
                                    &nbsp; Mumbai
                                  </li>
                                </ul>
                                <p>
                                  We are looking for Fresh Faces for lead and
                                  supporting roles with a dedication to acting.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt4.png"
                                  alt="post_img"
                                />
                              </div>
                              <div className="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">Female Actor in Main Lead</a>
                                </h4>

                                <ul>
                                  <li>
                                    <i className="flaticon-cash"></i>&nbsp; $12K
                                    - 15k P.A.
                                  </li>
                                  <li>
                                    <i className="flaticon-location-pointer"></i>
                                    &nbsp; Mumbai
                                  </li>
                                </ul>
                                <p>
                                  We are looking for Fresh Faces for lead and
                                  supporting roles with a dedication to acting.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt5.png"
                                  alt="post_img"
                                />
                              </div>
                              <div className="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">Female Actor in Main Lead </a>
                                </h4>

                                <ul>
                                  <li>
                                    <i className="flaticon-cash"></i>&nbsp; $12K
                                    - 15k P.A.
                                  </li>
                                  <li>
                                    <i className="flaticon-location-pointer"></i>
                                    &nbsp; Mumbai
                                  </li>
                                </ul>
                                <p>
                                  We are looking for Fresh Faces for lead and
                                  supporting roles with a dedication to acting.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt3.png"
                                  alt="post_img"
                                />
                              </div>
                              <div className="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">Female Actor in Main Lead </a>
                                </h4>

                                <ul>
                                  <li>
                                    <i className="flaticon-cash"></i>&nbsp; $12K
                                    - 15k P.A.
                                  </li>
                                  <li>
                                    <i className="flaticon-location-pointer"></i>
                                    &nbsp; Mumbai
                                  </li>
                                </ul>
                                <p>
                                  We are looking for Fresh Faces for lead and
                                  supporting roles with a dedication to acting.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="menu1" className="tab-pane fade">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt2.png"
                                  alt="post_img"
                                />
                              </div>
                              <div className="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">Female Actor in Main Lead</a>
                                </h4>

                                <ul>
                                  <li>
                                    <i className="flaticon-cash"></i>&nbsp; $12K
                                    - 15k P.A.
                                  </li>
                                  <li>
                                    <i className="flaticon-location-pointer"></i>
                                    &nbsp; Mumbai
                                  </li>
                                </ul>
                                <p>
                                  We are looking for Fresh Faces for lead and
                                  supporting roles with a dedication to acting.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt3.png"
                                  alt="post_img"
                                />
                              </div>
                              <div className="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">Female Actor in Main Lead </a>
                                </h4>

                                <ul>
                                  <li>
                                    <i className="flaticon-cash"></i>&nbsp; $12K
                                    - 15k P.A.
                                  </li>
                                  <li>
                                    <i className="flaticon-location-pointer"></i>
                                    &nbsp; Mumbai
                                  </li>
                                </ul>
                                <p>
                                  We are looking for Fresh Faces for lead and
                                  supporting roles with a dedication to acting.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt4.png"
                                  alt="post_img"
                                />
                              </div>
                              <div className="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">Female Actor in Main Lead</a>
                                </h4>

                                <ul>
                                  <li>
                                    <i className="flaticon-cash"></i>&nbsp; $12K
                                    - 15k P.A.
                                  </li>
                                  <li>
                                    <i className="flaticon-location-pointer"></i>
                                    &nbsp; Mumbai
                                  </li>
                                </ul>
                                <p>
                                  We are looking for Fresh Faces for lead and
                                  supporting roles with a dedication to acting.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt5.png"
                                  alt="post_img"
                                />
                              </div>
                              <div className="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">Female Actor in Main Lead </a>
                                </h4>

                                <ul>
                                  <li>
                                    <i className="flaticon-cash"></i>&nbsp; $12K
                                    - 15k P.A.
                                  </li>
                                  <li>
                                    <i className="flaticon-location-pointer"></i>
                                    &nbsp; Mumbai
                                  </li>
                                </ul>
                                <p>
                                  We are looking for Fresh Faces for lead and
                                  supporting roles with a dedication to acting.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt5.png"
                                  alt="post_img"
                                />
                              </div>
                              <div className="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">Female Actor in Main Lead</a>
                                </h4>

                                <ul>
                                  <li>
                                    <i className="flaticon-cash"></i>&nbsp; $12K
                                    - 15k P.A.
                                  </li>
                                  <li>
                                    <i className="flaticon-location-pointer"></i>
                                    &nbsp; Mumbai
                                  </li>
                                </ul>
                                <p>
                                  We are looking for Fresh Faces for lead and
                                  supporting roles with a dedication to acting.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt1.png"
                                  alt="post_img"
                                />
                              </div>
                              <div className="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">Female Actor in Main Lead </a>
                                </h4>

                                <ul>
                                  <li>
                                    <i className="flaticon-cash"></i>&nbsp; $12K
                                    - 15k P.A.
                                  </li>
                                  <li>
                                    <i className="flaticon-location-pointer"></i>
                                    &nbsp; Mumbai
                                  </li>
                                </ul>
                                <p>
                                  We are looking for Fresh Faces for lead and
                                  supporting roles with a dedication to acting.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn_hover slider_btn jobs_btn_3 jb_cover">
                  <a href="#/">view all</a>
                </div>
              </div>
            </div>
          </div>
          <div className="slider_small3_shape">
            <img
              src="assets/images/shape4.png"
              className="img-fluid"
              alt="img"
            />
          </div>
        </div>

        <div className="counter_wrapper counter_3_wrapper jb_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="counter_mockup_design jb_cover">
                  <img
                    src="assets/images/mockup6.png"
                    className="img-fluid"
                    alt="img"
                  />
                </div>
                <div className="counter_jbbb jb_cover">
                  <img
                    src="assets/images/line2.png"
                    className="img-fluid"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="counter_right_wrapper counter_index3_right jb_cover">
                  <h1>Step into the arena</h1>
                  <p>
                    Join our growing community of singers, musicians, actors,
                    dancers, magicians, DJs and so much more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services_wrapper control_wrapper jb_cover">
          <div className="slider_small_shape44">
            <img
              src="assets/images/shape4.png"
              className="img-fluid "
              alt="img"
            />
          </div>
          <div className="counter_jbbb2 jb_cover">
            <img
              src="assets/images/line3.png"
              className="img-fluid"
              alt="img"
            />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                <div className="jb_heading_wraper">
                  <h3>Competition</h3>

                  <p>
                    Work with GOBO global creative community through a unique
                    contest engine. Source the right talent for any written,
                    audio or video production!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="services_content jb_cover">
                  <img src="assets/images/c1.png" alt="img" />
                  <h3>
                    <a href="#/">Acting </a>
                  </h3>
                  <p>
                    Create jobs, allocate to technicians, track time & materials
                    to determine job profitability
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="services_content jb_cover">
                  <img src="assets/images/c2.png" alt="img" />
                  <h3>
                    <a href="#/">Short Films</a>
                  </h3>
                  <p>
                    Create jobs, allocate to technicians, track time & materials
                    to determine job profitability
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="services_content jb_cover">
                  <img src="assets/images/c3.png" alt="img" />
                  <h3>
                    <a href="#/">Dance</a>
                  </h3>
                  <p>
                    Create jobs, allocate to technicians, track time & materials
                    to determine job profitability
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="services_content jb_cover">
                  <img src="assets/images/c4.png" alt="img" />
                  <h3>
                    <a href="#/">Action</a>
                  </h3>
                  <p>
                    Create jobs, allocate to technicians, track time & materials
                    to determine job profitability
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="services_content jb_cover">
                  <img src="assets/images/c5.png" alt="img" />
                  <h3>
                    <a href="#/">Music</a>
                  </h3>
                  <p>
                    Create jobs, allocate to technicians, track time & materials
                    to determine job profitability
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="services_content jb_cover">
                  <img src="assets/images/c6.png" alt="img" />
                  <h3>
                    <a href="#/">Others</a>
                  </h3>
                  <p>
                    Create jobs, allocate to technicians, track time & materials
                    to determine job profitability
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider_small3_shape">
            <img
              src="assets/images/shape4.png"
              className="img-fluid"
              alt="img"
            />
          </div>
        </div>

        <div className="download_wrapper index3_download jb_cover">
          <div className="line_shape">
            <img src="assets/images/line.png" className="img-fluid" alt="img" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="download_mockup_design jb_cover">
                  <img
                    src="assets/images/mockup7.png"
                    className="img-fluid"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="download_app_store jb_cover">
                  <h1>Download</h1>
                  <h2>GOBO App Now!</h2>
                  <p>
                    All it takes is 30 seconds to Download. Your Mobile App for
                    Job
                    <br /> Fast, Simple & Delightful.
                  </p>
                  <div className="app_btn playstore_2 jb_cover">
                    <a href="#/" className="ss_playstore">
                      <span>
                        <i className="flaticon-android-logo"></i>
                      </span>
                      Play Store
                    </a>
                    <a href="#/" className="ss_appstore">
                      <span>
                        <i className="flaticon-apple"></i>
                      </span>
                      App Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="client_wrapper_top jb_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                <div className="jb_heading_wraper">
                  <h3>success stories</h3>

                  <p>Your next level Product developemnt company assets</p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="client_wrapper jb_cover">
                  <all.OwlCarousel
                    className="owl-carousel owl-theme"
                    loop
                    items={1}
                    margin={10}
                    dots={false}
                    autoplay
                  >
                    <div className="item">
                      <div className="row">
                        <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                          <div className="client_wrapper_cntnt jb_cover">
                            <div className="client_shap1 bubble-5">
                              <img
                                src="assets/images/bubble.png"
                                className="img-fluid"
                                alt="img"
                              />
                            </div>
                            <div className="client_shap2 bubble-7">
                              <img
                                src="assets/images/bubble.png"
                                className="img-fluid"
                                alt="img"
                              />
                            </div>
                            <img src="assets/images/quote1.png" alt="img" />

                            <h1>
                              <a href="#/">Marita Irene</a>
                              <span>(business)</span>
                            </h1>

                            <p>
                              Packages and web page editors now use Lorem Ipsum
                              as their am efault model text yr,and a search.
                            </p>
                            <div className="client_shap3 bubble-6">
                              <img
                                src="assets/images/bubble.png"
                                className="img-fluid"
                                alt="img"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                          <div className="clinnt_slider_img jb_cover">
                            <img
                              src="assets/images/vv.png"
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="row">
                        <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                          <div className="client_wrapper_cntnt jb_cover">
                            <div className="client_shap1 bubble-8">
                              <img
                                src="assets/images/bubble.png"
                                className="img-fluid"
                                alt="img"
                              />
                            </div>
                            <div className="client_shap2 bubble-9">
                              <img
                                src="assets/images/bubble.png"
                                className="img-fluid"
                                alt="img"
                              />
                            </div>
                            <img src="assets/images/quote1.png" alt="img" />

                            <h1>
                              <a href="#/">Marita Irene</a>
                              <span>(business)</span>
                            </h1>

                            <p>
                              Packages and web page editors now use Lorem Ipsum
                              as their am efault model text yr,and a search.
                            </p>
                            <div className="client_shap3 bubble-6">
                              <img
                                src="assets/images/bubble.png"
                                className="img-fluid"
                                alt="img"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                          <div className="clinnt_slider_img jb_cover">
                            <img
                              src="assets/images/vv.png"
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </all.OwlCarousel>
                </div>
              </div>
            </div>
          </div>
          <div className="slider_small3_shape shapenew">
            <img
              src="assets/images/shape4.png"
              className="img-fluid"
              alt="img"
            />
          </div>
        </div>

        <div className="popular_wrapper jb_cover">
          <div className="slider_small3_shape shapenew">
            <img
              src="assets/images/shape4.png"
              className="img-fluid "
              alt="img"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                <div className="jb_heading_wraper">
                  <h3>We are Popular Everywhere</h3>

                  <p>Your next level Product developemnt company assets</p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="jp_register_section_main_wrapper jb_cover bg-dark">
                  <div className="jp_regis_left_side_box_wrapper">
                    <div className="jp_regis_left_side_box">
                      <i className="flaticon-laptop"></i>
                      <h4>I’m a Producer</h4>
                      <p>
                        Signed in companies are able to post new
                        <br /> job offers, searching for candidate...
                      </p>
                      <ul>
                        <li>
                          <a href="#/" className="price_btn regis_btn">
                            register as company
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="jp_regis_right_side_box_wrapper">
                    <div className="jp_regis_right_side_box">
                      <i className="flaticon-doctor"></i>
                      <h4>I’m an Artist</h4>
                      <p>
                        Signed in companies are able to post new
                        <br /> job offers, searching for candidate...
                      </p>
                      <ul>
                        <li>
                          <a href="#/" className="price_btn regis_btn">
                            register as individual
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="jp_regis_center_tag_wrapper">
                      <p>OR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing_table_3 recent_resume_wrapper jb_cover">
          <div className="slider_small_shape44">
            <img src="assets/images/p2.png" className="img-fluid " alt="img" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                <div className="jb_heading_wraper">
                  <h3>Our Partners </h3>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <all.OwlCarousel
                  className="owl-carousel owl-theme"
                  id="partner-slider"
                  loop
                  items={4}
                  margin={10}
                  dots={false}
                  autoplay
                >
                  <div className="item">
                    <img
                      src="assets/images/partner-2.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="assets/images/partner-3.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="assets/images/partner-4.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="assets/images/partner-5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="assets/images/partner-6.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </all.OwlCarousel>

                {/* <div className="owl-carousel owl-theme" id="partner-slider">
                  <div className="item">
                    <img
                      src="assets/images/partner-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="assets/images/partner-2.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="assets/images/partner-3.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="assets/images/partner-4.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="assets/images/partner-5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="assets/images/partner-6.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              */}
              </div>
            </div>
          </div>
          <div className="counter_jbbb2 jb_cover">
            <img
              src="assets/images/line3.png"
              className="img-fluid"
              alt="img"
            />
          </div>
        </div>

        <all.NewsLetter />
        <all.Footer />
      </div>
    </Fragment>
  );
};

export default Home;
