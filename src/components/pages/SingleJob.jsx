import React, { Fragment } from "react";
import all from "../common/all";

const SingleJob = () => {
  return (
    <Fragment>
      <div>
        <all.Header name="singlejob" />
        <all.PageTitle
          name="Single Job"
          img="assets/images/listingpagebanner.png"
        />
        <div class="job_single_wrapper jb_cover">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                <div class="job_filter_category_sidebar jb_cover">
                  <div class="job_filter_sidebar_heading jb_cover">
                    <h1>jobs overview</h1>
                  </div>
                  <div class="job_overview_header jb_cover">
                    <div class="jb_job_overview_img">
                      <img src="assets/images/overview.png" alt="post_img" />
                      <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                      <p>Webstrot Technology Pvt. Ltd.</p>
                      <ul class="job_single_lists">
                        <li>
                          <div class="job_adds_right">
                            <a href="#/">
                              <i class="far fa-heart"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div class="header_btn search_btn part_time_btn jb_cover">
                            <a href="#/">part time</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div class="jp_listing_list_icon">
                        <i class="far fa-calendar"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>Date Posted:</li>
                          <li>Octomber 02, 2019</li>
                        </ul>
                      </div>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div class="jp_listing_list_icon">
                        <i class="fas fa-map-marker-alt"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>Location:</li>
                          <li>Los Angeles Califonia PO, 455001</li>
                        </ul>
                      </div>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div class="jp_listing_list_icon">
                        <i class="fa fa-info-circle"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>Job Title:</li>
                          <li>HTML Developer</li>
                        </ul>
                      </div>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div class="jp_listing_list_icon">
                        <i class="far fa-clock"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>Hours:</li>
                          <li>40h / Week</li>
                        </ul>
                      </div>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div class="jp_listing_list_icon">
                        <i class="far fa-money-bill-alt"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>Salary:</li>
                          <li>$12K - 15k P.A.</li>
                        </ul>
                      </div>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div class="jp_listing_list_icon">
                        <i class="fa fa-th-large"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>Category:</li>
                          <li>Developer</li>
                        </ul>
                      </div>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div class="jp_listing_list_icon">
                        <i class="fa fa-star"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>Experience:</li>
                          <li>1+ Years Experience</li>
                        </ul>
                      </div>
                    </div>
                    <div class="header_btn search_btn news_btn overview_btn  jb_cover">
                      <a href="#/" data-toggle="modal" data-target="#myModal41">
                        apply now !
                      </a>
                    </div>
                    <div
                      class="modal fade apply_job_popup"
                      id="myModal41"
                      role="dialog"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                          >
                            &times;
                          </button>
                          <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div class="apply_job jb_cover">
                                <h1>apply for this job :</h1>
                                <div class="search_alert_box jb_cover">
                                  <div class="apply_job_form">
                                    <input
                                      type="text"
                                      name="name"
                                      placeholder="full name"
                                    />
                                  </div>
                                  <div class="apply_job_form">
                                    <input
                                      type="text"
                                      name="Email"
                                      placeholder="Enter Your Email"
                                    />
                                  </div>
                                  <div class="apply_job_form">
                                    <textarea
                                      class="form-control"
                                      name="message"
                                      placeholder="Message"
                                    ></textarea>
                                  </div>

                                  <div class="resume_optional jb_cover">
                                    <p>resume (optional)</p>
                                    <div class="width_50">
                                      <input
                                        type="file"
                                        id="input-file-now-custom-27"
                                        class="dropify"
                                        data-height="90"
                                      />
                                      <span class="post_photo">
                                        upload resume
                                      </span>
                                    </div>
                                    <p class="word_file">
                                      {" "}
                                      microsoft word or pdf file only (5mb)
                                    </p>
                                  </div>
                                </div>
                                <div class="header_btn search_btn applt_pop_btn jb_cover">
                                  <a href="#/">apply now</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="jb_keyword_key_wrapper jb_cover">
                    <ul>
                      <li>
                        <i class="fa fa-tags"></i> trending Keywords :
                      </li>
                      <li>
                        <a href="#/">ui designer,</a>
                      </li>
                      <li>
                        <a href="#/">developer,</a>
                      </li>
                      <li>
                        <a href="#/">senior</a>
                      </li>
                      <li>
                        <a href="#/">it company,</a>
                      </li>
                      <li>
                        <a href="#/">design,</a>
                      </li>
                      <li>
                        <a href="#/">call center</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                <div class="jb_listing_single_overview jb_cover">
                  <div class="jp_job_des jb_cover">
                    <h2 class="job_description_heading">Job Description</h2>
                    <p>
                      Google is and always will be an engineering company. We
                      hire people with a broad set of ical skills who are ready
                      to tackle some of technology's greatest challenges and
                      make an impact on millions, if not billions, of users. At
                      Google, engineers not only revolutionize search, they
                      routinely work on massive scalability and storage
                      solutions, large-scale applications and rely new platforms
                      for developers around the world. From AdWords to Chrome,
                      Android to Ye, Social to Local, Google engineers are
                      changing the world.
                    </p>
                    <ul>
                      <li>
                        <i class="fas fa-globe-asia"></i>&nbsp;&nbsp;{" "}
                        <a href="#/">www.example.com</a>
                      </li>
                      <li>
                        <i class="fas fa-file-download"></i>&nbsp;&nbsp;{" "}
                        <a href="#/">Download Info</a>
                      </li>
                    </ul>
                  </div>
                  <div class="jp_job_res jb_cover">
                    <h2 class="job_description_heading">Responsibilities</h2>
                    <p>
                      Curabitur non nulla sit amet nisl tempus convallis quis ac
                      lectus. Mauris blandit aliquet elit, eget tincidunt nibh
                      pulvinar a. Praesent sapien massa, convallis a
                      pellentesque nec, egestas non nisi. Curabitur aliquet quam
                      id dui posuere blandit.
                    </p>
                    <ul>
                      <li>
                        <i class="fa fa-caret-right"></i>&nbsp;&nbsp; Build
                        next-generation web applications with a focus on the
                        client side.
                      </li>
                      <li>
                        <i class="fa fa-caret-right"></i>&nbsp;&nbsp; Redesign
                        UI's, implement new UI's, and pick up Java as necessary.
                      </li>
                      <li>
                        <i class="fa fa-caret-right"></i>&nbsp;&nbsp; Explore
                        and design dynamic and compelling consumer experiences.
                      </li>
                      <li>
                        <i class="fa fa-caret-right"></i>&nbsp;&nbsp; Design and
                        build scalable framework for web applications.
                      </li>
                    </ul>
                  </div>
                  <div class="jp_job_res jb_cover minimum_cover">
                    <h2 class="job_description_heading">
                      Minimum qualifications
                    </h2>

                    <ul>
                      <li>
                        <i class="fa fa-caret-right"></i>&nbsp;&nbsp; Build
                        next-generation web applications with a focus on the
                        client side.
                      </li>
                      <li>
                        <i class="fa fa-caret-right"></i>&nbsp;&nbsp; Redesign
                        UI's, implement new UI's, and pick up Java as necessary.
                      </li>
                      <li>
                        <i class="fa fa-caret-right"></i>&nbsp;&nbsp; Explore
                        and design dynamic and compelling consumer experiences.
                      </li>
                      <li>
                        <i class="fa fa-caret-right"></i>&nbsp;&nbsp; Design and
                        build scalable framework for web applications.
                      </li>
                    </ul>
                  </div>
                  <div class="jp_job_res jb_cover">
                    <h2 class="job_description_heading">how to apply</h2>
                    <p>
                      Google is and always will be an engineering company. We
                      hire people with a broad set of ical skills who are ready
                      to tackle some of technology's greatest challenges and
                      make an impact on millions, if not billions, of users. At
                      Google, engineers not only revolutionize search, they
                      routinely{" "}
                    </p>
                  </div>
                  <div class="jp_job_res jb_cover">
                    <h2 class="job_description_heading">location</h2>
                    <div class="map_wrapper jb_cover">
                      <div id="map"></div>
                    </div>
                  </div>
                  <div class="jp_job_res jp_listing_left_wrapper jb_cover">
                    <div class="jp_listing_left_bottom_sidebar_social_wrapper">
                      <ul>
                        <li>share :</li>
                        <li>
                          <a href="#/">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#/">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#/">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </li>

                        <li>
                          <a href="#/">
                            <i class="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="related_job_wrapper jb_cover">
                  <h1 class="related_job">related job</h1>
                  <div class="related_product_job jb_cover">
                    <div class="owl-carousel owl-theme">
                      <div class="item">
                        <div class="job_listing_left_fullwidth jb_cover">
                          <div class="row">
                            <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div class="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt2.png"
                                  alt="post_img"
                                />
                                <br /> <span>google</span>
                              </div>
                              <div class="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">
                                    Trainee Web Designer, (Fresher)
                                  </a>
                                </h4>

                                <ul>
                                  <li>
                                    <i class="flaticon-cash"></i>&nbsp; $12K -
                                    15k P.A.
                                  </li>
                                  <li>
                                    <i class="flaticon-location-pointer"></i>
                                    &nbsp; Los Angeles, Califonia PO, 455001
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div class="jp_job_post_right_btn_wrapper">
                                <ul>
                                  <li>
                                    <div class="job_adds_right">
                                      <a href="#/">
                                        <i class="far fa-heart"></i>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <a href="job_single.html">Part Time</a>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="#/">apply</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="job_listing_left_fullwidth jb_cover">
                          <div class="row">
                            <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div class="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt1.png"
                                  alt="post_img"
                                />
                                <br /> <span>google</span>
                              </div>
                              <div class="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">
                                    Power Systems Experience Designer{" "}
                                  </a>
                                </h4>

                                <ul>
                                  <li>
                                    <i class="flaticon-cash"></i>&nbsp; $12K -
                                    15k P.A.
                                  </li>
                                  <li>
                                    <i class="flaticon-location-pointer"></i>
                                    &nbsp; Los Angeles, Califonia PO, 455001
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div class="jp_job_post_right_btn_wrapper">
                                <ul>
                                  <li>
                                    <div class="job_adds_right">
                                      <a href="#/">
                                        <i class="far fa-heart"></i>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <a href="job_single.html">Part Time</a>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="#/">apply</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="job_listing_left_fullwidth jb_cover">
                          <div class="row">
                            <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div class="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt5.png"
                                  alt="post_img"
                                />
                                <br /> <span>google</span>
                              </div>
                              <div class="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">
                                    Trainee Web Designer, (Fresher)
                                  </a>
                                </h4>

                                <ul>
                                  <li>
                                    <i class="flaticon-cash"></i>&nbsp; $12K -
                                    15k P.A.
                                  </li>
                                  <li>
                                    <i class="flaticon-location-pointer"></i>
                                    &nbsp; Los Angeles, Califonia PO, 455001
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div class="jp_job_post_right_btn_wrapper">
                                <ul>
                                  <li>
                                    <div class="job_adds_right">
                                      <a href="#/">
                                        <i class="far fa-heart"></i>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <a href="job_single.html">Part Time</a>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="#/">apply</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="job_listing_left_fullwidth jb_cover">
                          <div class="row">
                            <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div class="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt2.png"
                                  alt="post_img"
                                />
                                <br /> <span>google</span>
                              </div>
                              <div class="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">
                                    Trainee Web Designer, (Fresher)
                                  </a>
                                </h4>

                                <ul>
                                  <li>
                                    <i class="flaticon-cash"></i>&nbsp; $12K -
                                    15k P.A.
                                  </li>
                                  <li>
                                    <i class="flaticon-location-pointer"></i>
                                    &nbsp; Los Angeles, Califonia PO, 455001
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div class="jp_job_post_right_btn_wrapper">
                                <ul>
                                  <li>
                                    <div class="job_adds_right">
                                      <a href="#/">
                                        <i class="far fa-heart"></i>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <a href="job_single.html">Part Time</a>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="#/">apply</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="job_listing_left_fullwidth jb_cover">
                          <div class="row">
                            <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div class="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt1.png"
                                  alt="post_img"
                                />
                                <br /> <span>google</span>
                              </div>
                              <div class="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">
                                    Power Systems Experience Designer{" "}
                                  </a>
                                </h4>

                                <ul>
                                  <li>
                                    <i class="flaticon-cash"></i>&nbsp; $12K -
                                    15k P.A.
                                  </li>
                                  <li>
                                    <i class="flaticon-location-pointer"></i>
                                    &nbsp; Los Angeles, Califonia PO, 455001
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div class="jp_job_post_right_btn_wrapper">
                                <ul>
                                  <li>
                                    <div class="job_adds_right">
                                      <a href="#/">
                                        <i class="far fa-heart"></i>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <a href="job_single.html">Part Time</a>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="#/">apply</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="job_listing_left_fullwidth jb_cover">
                          <div class="row">
                            <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div class="jp_job_post_side_img">
                                <img
                                  src="assets/images/lt5.png"
                                  alt="post_img"
                                />
                                <br /> <span>google</span>
                              </div>
                              <div class="jp_job_post_right_cont">
                                <h4>
                                  <a href="#/">
                                    Trainee Web Designer, (Fresher)
                                  </a>
                                </h4>

                                <ul>
                                  <li>
                                    <i class="flaticon-cash"></i>&nbsp; $12K -
                                    15k P.A.
                                  </li>
                                  <li>
                                    <i class="flaticon-location-pointer"></i>
                                    &nbsp; Los Angeles, Califonia PO, 455001
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div class="jp_job_post_right_btn_wrapper">
                                <ul>
                                  <li>
                                    <div class="job_adds_right">
                                      <a href="#/">
                                        <i class="far fa-heart"></i>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <a href="job_single.html">Part Time</a>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="#/">apply</a>
                                  </li>
                                </ul>
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
        <all.NewsLetter />
        <all.Footer />
      </div>
    </Fragment>
  );
};

export default SingleJob;
