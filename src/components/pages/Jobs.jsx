import React, { Fragment } from "react";
import all from "../common/all";

const Jobs = () => {
  return (
    <Fragment>
      <div>
        <all.Header name="artist" />
        <all.PageTitle
          name="Job Listing"
          img="assets/images/listingpagebanner.png"
        />
        <div className="job_filter_listing_wrapper jb_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 col-12 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div className="job_filter_category_sidebar jb_cover">
                  <div className="job_filter_sidebar_heading jb_cover">
                    <h1>jobs by category</h1>
                  </div>
                  <div className="category_jobbox jb_cover">
                    <p className="job_field">
                      <input type="checkbox" id="c1" name="cb" />
                      <label htmlFor="c1">
                        Singer<span> (155)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c2" name="cb" />
                      <label htmlFor="c2">
                        Dancer <span> (514)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c3" name="cb" />
                      <label htmlFor="c3">
                        Writer <span> (554)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c4" name="cb" />
                      <label htmlFor="c4">
                        Asst. Director <span> (457)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c5" name="cb" />
                      <label htmlFor="c5">
                        Director <span> (254)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c6" name="cb" />
                      <label htmlFor="c6">
                        PSU Jobs <span> (1054)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c7" name="cb" />
                      <label htmlFor="c7">
                        government Jobs <span> (1284)</span>
                      </label>
                    </p>
                    <div className="seeMore">
                      <a href="#/">view all categories</a>
                    </div>
                  </div>
                </div>
                <div className="job_filter_category_sidebar jb_cover">
                  <div className="job_filter_sidebar_heading jb_cover">
                    <h1>jobs by location</h1>
                  </div>
                  <div className="category_jobbox jb_cover">
                    <p className="job_field">
                      <input type="checkbox" id="c01" name="cb" />
                      <label htmlFor="c01">
                        Jobs in delhi
                        <span> (24)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c02" name="cb" />
                      <label htmlFor="c02">
                        Jobs in mumbai
                        <span> (1242)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c03" name="cb" />
                      <label htmlFor="c03">
                        Jobs in chennai
                        <span>(458)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c04" name="cb" />
                      <label htmlFor="c04">
                        Jobs in indore
                        <span> (1047)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c05" name="cb" />
                      <label htmlFor="c05">
                        Job in bhopal <span> (124)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c06" name="cb" />
                      <label htmlFor="c06">
                        Job in pune <span> (124)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c07" name="cb" />
                      <label htmlFor="c07">
                        Job in banglore <span> (124)</span>
                      </label>
                    </p>
                    <div className="seeMore">
                      <a href="#/">view all categories</a>
                    </div>
                  </div>
                </div>
                <div className="job_filter_category_sidebar jb_cover">
                  <div className="job_filter_sidebar_heading jb_cover">
                    <h1>your skill's</h1>
                  </div>

                  <div className="category_jobbox jb_cover">
                    <p className="job_field">
                      <input type="checkbox" id="c11" name="cb" />
                      <label htmlFor="c11">
                        javascript
                        <span> (124)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c12" name="cb" />
                      <label htmlFor="c12">
                        HTML5
                        <span> (42)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c13" name="cb" />
                      <label htmlFor="c13">
                        CSS
                        <span>(158)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c14" name="cb" />
                      <label htmlFor="c14">
                        marketing
                        <span> (47)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c15" name="cb" />
                      <label htmlFor="c15">
                        web design <span> (124)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c16" name="cb" />
                      <label htmlFor="c16">
                        PHP<span> (124)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c17" name="cb" />
                      <label htmlFor="c17">
                        social media<span> (124)</span>
                      </label>
                    </p>

                    <div className="seeMore">
                      <a href="#/">view all categories</a>
                    </div>
                  </div>
                </div>
                <div className="job_filter_category_sidebar jb_cover">
                  <div className="job_filter_sidebar_heading jb_cover">
                    <h1>salary</h1>
                  </div>

                  <div className="category_jobbox jb_cover">
                    <div className="widget price-range">
                      <ul>
                        <li className="range">
                          <div id="range-price" className="range-box"></div>

                          <input
                            type="text"
                            id="price"
                            className="price-box"
                            readOnly=""
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="jp_add_resume_wrapper jb_cover">
                  <div className="jp_add_resume_img_overlay"></div>
                  <div className="jp_add_resume_cont">
                    <img
                      src="assets/images/gobo_logo.png"
                      className="img-fluid site-logo"
                      alt="logo"
                    />
                    <h4>
                      Get Best Matched Jobs On your Email. Add Resume NOW!
                    </h4>
                    <div className="width_50">
                      <input
                        type="file"
                        id="input-file-now-custom-233"
                        className="dropify"
                        data-height="90"
                      />
                      <span className="post_photo">add resume</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="job_listing_left_side jb_cover">
                  <div className="filter-area jb_cover">
                    <select>
                      <option>sort by</option>
                      <option>most recent </option>
                      <option>most popular</option>
                      <option>top rated</option>
                    </select>

                    <div className="showpro">
                      <p>You're Watching 01 to 20</p>
                    </div>
                  </div>
                  <div className="tab-content btc_shop_index_content_tabs_main jb_cover">
                    <div id="grid" className="tab-pane fade">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt1.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="job_single.html">
                                      Female Actor in Main Lead
                                    </a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper jb_cover">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal01"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal01"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-01"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt2.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">Female Actor in Main Lead</a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper jb_cover">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal02"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal02"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-02"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt5.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">Female Actor in Main Lead </a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper jb_cover">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal09"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal09"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-09"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt3.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">Female Actor in Main Lead</a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper jb_cover">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal03"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal03"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-03"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt4.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">Female Actor in Main Lead</a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper jb_cover">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal05"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal05"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-05"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt4.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">Female Actor in Main Lead</a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper jb_cover">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal04"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal04"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-04"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt5.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">Female Actor in Main Lead</a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper jb_cover">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal051"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal051"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-051"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt1.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">
                                      Power Systems Experience Designer
                                    </a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper jb_cover">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal06"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal06"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-06"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt2.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">Female Actor in Main Lead</a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper jb_cover">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal07"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal07"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-07"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt4.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">
                                      Power Systems Experience Designer
                                    </a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper jb_cover">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal061"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal061"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-061"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt1.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">Female Actor in Main Lead</a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper jb_cover">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal011"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal011"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-011"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt3.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">Female Actor in Main Lead</a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper jb_cover">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal08"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal08"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-08"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="list" className="tab-pane active">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="job_listing_left_fullwidth jb_cover">
                            <div className="row">
                              <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt1.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">Female Actor in Main Lead</a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal1"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal1"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-1"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="job_listing_left_fullwidth jb_cover">
                            <div className="row">
                              <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt4.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">
                                      Power Systems Experience Designer
                                    </a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal2"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal2"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-2"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="job_listing_left_fullwidth jb_cover">
                            <div className="row">
                              <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt2.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">Female Actor in Main Lead</a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal3"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal3"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-3"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="job_listing_left_fullwidth jb_cover">
                            <div className="row">
                              <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt5.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">
                                      Power Systems Experience Designer
                                    </a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal8"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal8"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-8"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="job_listing_left_fullwidth jb_cover">
                            <div className="row">
                              <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt1.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">
                                      Power Systems Experience Designer
                                    </a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal4"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal4"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-4"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="job_listing_left_fullwidth jb_cover">
                            <div className="row">
                              <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt2.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">Female Actor in Main Lead</a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal5"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal5"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-5"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="job_listing_left_fullwidth jb_cover">
                            <div className="row">
                              <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt5.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">Female Actor in Main Lead</a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal6"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal6"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-6"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="job_listing_left_fullwidth jb_cover">
                            <div className="row">
                              <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="assets/images/lt4.png"
                                    alt="post_img"
                                  />
                                  <br /> <span>google</span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <a href="#/">Female Actor in Main Lead</a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <i className="flaticon-cash"></i>&nbsp;
                                      $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer"></i>
                                      &nbsp; Mumbai
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                <div className="jp_job_post_right_btn_wrapper">
                                  <ul>
                                    <li>
                                      <div className="job_adds_right">
                                        <a href="#!">
                                          <i className="far fa-heart"></i>
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <a href="job_single.html">Part Time</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/"
                                        data-toggle="modal"
                                        data-target="#myModal7"
                                      >
                                        apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="modal fade apply_job_popup"
                                  id="myModal7"
                                  role="dialog"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="apply_job jb_cover">
                                            <h1>apply for this job :</h1>
                                            <div className="search_alert_box jb_cover">
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="full name"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <input
                                                  type="text"
                                                  name="Email"
                                                  placeholder="Enter Your Email"
                                                />
                                              </div>
                                              <div className="apply_job_form">
                                                <textarea
                                                  className="form-control"
                                                  name="message"
                                                  placeholder="Message"
                                                ></textarea>
                                              </div>

                                              <div className="resume_optional jb_cover">
                                                <p>resume (optional)</p>
                                                <div className="width_50">
                                                  <input
                                                    type="file"
                                                    id="input-file-now-custom-7"
                                                    className="dropify"
                                                    data-height="90"
                                                  />
                                                  <span className="post_photo">
                                                    upload resume
                                                  </span>
                                                </div>
                                                <p className="word_file">
                                                  microsoft word or pdf file
                                                  only (5mb)
                                                </p>
                                              </div>
                                            </div>
                                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                                              <a href="#/">apply now</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <all.Pagination />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-12 d-block d-sm-block d-md-block d-lg-none d-xl-none">
                <div className="job_filter_category_sidebar jb_cover">
                  <div className="job_filter_sidebar_heading jb_cover">
                    <h1>jobs by category</h1>
                  </div>

                  <div className="category_jobbox jb_cover">
                    <p className="job_field">
                      <input type="checkbox" id="c1111" name="cb" />
                      <label htmlFor="c1111">
                        graphic designer<span> (155)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c22" name="cb" />
                      <label htmlFor="c22">
                        Engineering Jobs <span> (514)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c33" name="cb" />
                      <label htmlFor="c33">
                        Mainframe Jobs <span> (554)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c44" name="cb" />
                      <label htmlFor="c44">
                        Legal Jobs <span> (457)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c55" name="cb" />
                      <label htmlFor="c55">
                        IT Jobs <span> (254)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c66" name="cb" />
                      <label htmlFor="c66">
                        PSU Jobs <span> (1054)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c77" name="cb" />
                      <label htmlFor="c77">
                        government Jobs <span> (1284)</span>
                      </label>
                    </p>
                    <div className="seeMore">
                      <a href="#/">view all categories</a>
                    </div>
                  </div>
                </div>
                <div className="job_filter_category_sidebar jb_cover">
                  <div className="job_filter_sidebar_heading jb_cover">
                    <h1>jobs by location</h1>
                  </div>

                  <div className="category_jobbox jb_cover">
                    <p className="job_field">
                      <input type="checkbox" id="c011" name="cb" />
                      <label htmlFor="c011">
                        Jobs in delhi
                        <span> (24)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c021" name="cb" />
                      <label htmlFor="c021">
                        Jobs in mumbai
                        <span> (1242)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c031" name="cb" />
                      <label htmlFor="c031">
                        Jobs in chennai
                        <span>(458)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c041" name="cb" />
                      <label htmlFor="c041">
                        Jobs in indore
                        <span> (1047)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c051" name="cb" />
                      <label htmlFor="c051">
                        Job in bhopal <span> (124)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c061" name="cb" />
                      <label htmlFor="c061">
                        Job in pune <span> (124)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c071" name="cb" />
                      <label htmlFor="c071">
                        Job in banglore <span> (124)</span>
                      </label>
                    </p>
                    <div className="seeMore">
                      <a href="#/">view all categories</a>
                    </div>
                  </div>
                </div>
                <div className="job_filter_category_sidebar jb_cover">
                  <div className="job_filter_sidebar_heading jb_cover">
                    <h1>your skill's</h1>
                  </div>

                  <div className="category_jobbox jb_cover">
                    <p className="job_field">
                      <input type="checkbox" id="c111" name="cb" />
                      <label htmlFor="c111">
                        javascript
                        <span> (124)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c121" name="cb" />
                      <label htmlFor="c121">
                        HTML5
                        <span> (42)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c131" name="cb" />
                      <label htmlFor="c131">
                        CSS
                        <span>(158)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c141" name="cb" />
                      <label htmlFor="c141">
                        marketing
                        <span> (47)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c151" name="cb" />
                      <label htmlFor="c151">
                        web design <span> (124)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c161" name="cb" />
                      <label htmlFor="c161">
                        PHP<span> (124)</span>
                      </label>
                    </p>
                    <p className="job_field">
                      <input type="checkbox" id="c171" name="cb" />
                      <label htmlFor="c171">
                        social media<span> (124)</span>
                      </label>
                    </p>

                    <div className="seeMore">
                      <a href="#/">view all categories</a>
                    </div>
                  </div>
                </div>
                <div className="job_filter_category_sidebar jb_cover">
                  <div className="job_filter_sidebar_heading jb_cover">
                    <h1>salary</h1>
                  </div>

                  <div className="category_jobbox jb_cover">
                    <div className="widget price-range">
                      <ul>
                        <li className="range">
                          <div
                            id="responsive_range_price"
                            className="range-box"
                          ></div>

                          <input
                            type="text"
                            id="responsive_price"
                            className="price-box"
                            readOnly=""
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="jp_add_resume_wrapper jb_cover">
                  <div className="jp_add_resume_img_overlay"></div>
                  <div className="jp_add_resume_cont">
                    <img src="assets/images/logo2.png" alt="logo" />
                    <h4>
                      Get Best Matched Jobs On your Email. Add Resume NOW!
                    </h4>
                    <div className="width_50">
                      <input
                        type="file"
                        id="input-file-now-custom-203"
                        className="dropify"
                        data-height="90"
                      />
                      <span className="post_photo">add resume</span>
                    </div>
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

export default Jobs;
