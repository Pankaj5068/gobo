import React, { Fragment } from "react";
import all from "../common/all";

const SingleBlog = () => {
  return (
    <Fragment>
      <div>
        <all.Header name="blog single" />
        <all.PageTitle name="Blog Single" />
        <div className="blog_single_wrapper jb_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="jp_first_blog_post_main_wrapper jb_cover">
                  <div className="jp_first_blog_post_img">
                    <img
                      src="assets/images/blog3.jpg"
                      className="img-responsive"
                      alt="blog_img"
                    />
                  </div>
                  <div className="jp_first_blog_post_cont_wrapper">
                    <p>
                      <span>FEb 19, 2019</span>
                    </p>
                    <h3>
                      <a href="#/">Brabus is smooth animated portfolio</a>
                    </h3>
                    <p>
                      Layout for agencies and freelancers. Fully animated and
                      unique sections make item more attractive. Brabus is the
                      best way to create agency or portfolio website. It is easy
                      to customize codes, based on Bootstrap and Sass.Brabus is
                      smooth.
                    </p>
                    <img src="assets/images/blog_single.jpg" alt="img" />
                    <div className="blog_single_text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod empor nt ut labore et dolore magna
                        aliquaenim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br />
                        <br /> Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Exceint occaecat cupidatat
                      </p>
                    </div>
                    <p className="jb_cover prty">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et ore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea codo consequat. Duis
                      aute irure dolor in reprehenderit in voluptate elit esse
                      cillum dolore eu fugiat nulla paratur Excepteur sint
                      occaecat.
                    </p>
                  </div>
                  <div className="gc_blog_letest_week_wrapper jb_cover">
                    <div className="gc_blog_quote_wrapper">
                      <img src="assets/images/quote.png" alt="quote" />
                      <h3>
                        "Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor indunt ut labore et dolore
                        magna aliqua. "
                      </h3>
                      <p>- by farhan sheikh</p>
                    </div>
                  </div>
                  <div className="jp_first_blog_post_cont_wrapper">
                    <p>
                      Layout for agencies and freeis the best way to create
                      agency or portfolio website. It is easy to customize
                      codes, bas lancers. Fully animated and unique sections
                      make item more attractive. Brabus is the best way to
                      create agency or portfolio website. It is easy to
                      customize codes, based on Bootstrap and Sass.Brabus is
                      smooth.
                    </p>
                  </div>
                  <div className="jp_first_blog_bottom_cont_wrapper jb_cover">
                    <div className="jp_blog_bottom_left_cont">
                      <ul>
                        <li>
                          <img src="assets/images/bs1.jpg" alt="small_img" />
                          &nbsp;&nbsp; Jhon Doe
                        </li>
                      </ul>
                    </div>
                    <div className="jp_blog_bottom_right_cont">
                      <p>
                        <a href="#/">
                          <i className="far fa-comment-dots"></i>
                          <span>4</span>
                        </a>
                      </p>
                      <ul>
                        <li></li>
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
                        <li>
                          <a href="#/">
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="jp_blog_single_client_main_section jb_cover">
                  <div className="jp_blog_single_client_img">
                    <img src="assets/images/client.jpg" alt="blog_client" />
                  </div>
                  <div className="jp_blog_single_client_cont">
                    <h3>About Admin - Ajay Suryavanshi</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus auctor lacinia tesue. Vivamus et tellus in urna
                      faucibus porttitor. Sed auctor ut nunc..
                    </p>
                    <div className="jp_listing_left_bottom_sidebar_social_wrapper blog_single_link">
                      <ul>
                        <li></li>
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
                </div>
                <div className="comments_wrapper jb_cover">
                  <div className="widget_heading">
                    <h2>comments (04)</h2>
                  </div>

                  <div className="comments_Box">
                    <div className="img_wrapper">
                      <img
                        src="assets/images/cmnt1.jpg"
                        className=""
                        alt="author_img"
                      />
                    </div>
                    <div className="text_wrapper">
                      <div className="author_detail">
                        <span className="author_name"> Jhon Doe</span>
                        <span className="publish_date"> July 1, 2019 - </span>
                      </div>
                      <div className="author_content">
                        <p>
                          Integer porttitor fringilla vestibulum. Phasellus curs
                          our tinnt nulla, ut mattis augue finibus ac. Vivamus
                          elementum enim ac enim ultrices rhoncus.
                        </p>
                        <a href="#/">Reply</a>
                      </div>
                    </div>
                  </div>

                  <div className="comments_Box">
                    <div className="img_wrapper">
                      <img
                        src="assets/images/cmnt2.jpg"
                        className=""
                        alt="author_img"
                      />
                    </div>
                    <div className="text_wrapper">
                      <div className="author_detail">
                        <span className="author_name"> Steffa Ferello </span>
                        <span className="publish_date"> July 4, 2019 - </span>
                      </div>
                      <div className="author_content">
                        <p>
                          Integer porttitor fringilla vestibulum. Phasellus curs
                          our tinnt nulla, ut mattis augue finibus ac. Vivamus
                          elementum enim ac enim ultrices rhoncus.
                        </p>
                        <a href="#/">Reply</a>
                      </div>
                    </div>
                  </div>

                  <div className="comments_Box">
                    <div className="img_wrapper">
                      <img
                        src="assets/images/cmnt3.jpg"
                        className=""
                        alt="author_img"
                      />
                    </div>
                    <div className="text_wrapper">
                      <div className="author_detail">
                        <span className="author_name"> Matin Lauran</span>
                        <span className="publish_date"> March 1, 2019 -</span>
                      </div>
                      <div className="author_content">
                        <p>
                          Integer porttitor fringilla vestibulum. Phasellus curs
                          our tinnt nulla, ut mattis augue finibus ac. Vivamus
                          elementum enim ac enim ultrices rhoncus.
                        </p>
                        <a href="#/">Reply</a>
                      </div>
                    </div>
                  </div>

                  <div className="comments_Box last_comment_box">
                    <div className="img_wrapper">
                      <img
                        src="assets/images/cmnt4.jpg"
                        className=""
                        alt="author_img"
                      />
                    </div>
                    <div className="text_wrapper">
                      <div className="author_detail">
                        <span className="author_name"> Eva Marilla</span>

                        <span className="publish_date"> July 10, 2019 -</span>
                      </div>
                      <div className="author_content">
                        <p>
                          Integer porttitor fringilla vestibulum. Phasellus curs
                          our tinnt nulla, ut mattis augue finibus ac. Vivamus
                          elementum enim ac enim ultrices rhoncus.
                        </p>
                        <a href="#/">Reply</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comments_form jb_cover">
                  <div className="widget_heading">
                    <h2>leave a comment</h2>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="formsix-pos">
                        <div className="form-group i-name">
                          <input
                            type="text"
                            className="form-control"
                            required=""
                            placeholder="Full Name *"
                          />
                          <i className="fas fa-user-alt"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="formsix-e">
                        <div className="form-group i-email">
                          <input
                            type="email"
                            className="form-control"
                            required=""
                            placeholder="Email Address *"
                          />
                          <i className="fas fa-envelope"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div className="formsix-m">
                        <div className="form-group i-message">
                          <textarea
                            className="form-control"
                            required=""
                            rows="4"
                            placeholder="comments"
                          ></textarea>
                          <i className="fas fa-comment"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header_btn search_btn jb_cover">
                    <a href="#/">submit</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="job_filter_category_sidebar jb_cover">
                  <div className="job_filter_sidebar_heading jb_cover">
                    <h1>search</h1>
                  </div>

                  <div className="category_jobbox jb_cover">
                    <div className="jp_blog_right_search_wrapper jb_cover">
                      <input type="text" placeholder="Search" />
                      <button type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="job_filter_category_sidebar jb_cover">
                  <div className="job_filter_sidebar_heading jb_cover">
                    <h1>blog category</h1>
                  </div>

                  <div className="category_jobbox jb_cover">
                    <ul className="blog_category_link jb_cover">
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a href="#/">
                          Graphic Designer <span>(214)</span>
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a href="#/">
                          Engineering Jobs <span>(514)</span>
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a href="#/">
                          Mainframe Jobs <span>(554)</span>
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a href="#/">
                          Legal Jobs <span>(457)</span>
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a href="#/">
                          IT Jobs <span>(1254)</span>
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a href="#/">
                          R&amp;D Jobs <span>(554)</span>
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a href="#/">
                          Government Jobs <span>(350)</span>
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a href="#/">
                          PSU Jobs <span>(221)</span>
                        </a>
                      </li>
                    </ul>
                    <div className="seeMore">
                      <a href="#/">view all categories</a>
                    </div>
                  </div>
                </div>
                <div className="job_filter_category_sidebar jb_cover">
                  <div className="job_filter_sidebar_heading jb_cover">
                    <h1>career advice</h1>
                  </div>

                  <div className="category_jobbox jb_cover">
                    <div className="jp_rightside_career_content_wrapper jb_cover">
                      <div className="jp_rightside_career_img">
                        <img
                          src="assets/images/blog_ct1.jpg"
                          alt="career_img"
                        />
                      </div>
                      <div className="jp_rightside_career_img_cont">
                        <h4>
                          <a href="#/">Job Seekeks OCT - 2019</a>
                        </h4>
                        <p>
                          <i className="far fa-calendar"></i>&nbsp;20 OCT, 2019
                        </p>
                      </div>
                    </div>
                    <div className="jp_rightside_career_content_wrapper jb_cover">
                      <div className="jp_rightside_career_img">
                        <img
                          src="assets/images/blog_ct2.jpg"
                          alt="career_img"
                        />
                      </div>
                      <div className="jp_rightside_career_img_cont">
                        <h4>
                          <a href="#/">digital world NOV - 2018</a>
                        </h4>
                        <p>
                          <i className="far fa-calendar"></i> &nbsp;20 OCT, 2018
                        </p>
                      </div>
                    </div>
                    <div className="jp_rightside_career_content_wrapper jb_cover">
                      <div className="jp_rightside_career_img">
                        <img
                          src="assets/images/blog_ct3.jpg"
                          alt="career_img"
                        />
                      </div>
                      <div className="jp_rightside_career_img_cont">
                        <h4>
                          <a href="#/">Job Seekeks DEC - 2019</a>
                        </h4>
                        <p>
                          <i className="far fa-calendar"></i> &nbsp;20 OCT, 2019
                        </p>
                      </div>
                    </div>
                    <div className="seeMore">
                      <a href="#/">view all </a>
                    </div>
                  </div>
                </div>
                <div className="job_filter_category_sidebar jb_cover">
                  <div className="job_filter_sidebar_heading jb_cover">
                    <h1>job spotlight</h1>
                  </div>

                  <div className="category_jobbox jb_cover">
                    <div className="jp_spotlight_slider_wrapper">
                      <div className="owl-carousel owl-theme">
                        <div className="item">
                          <div className="jp_spotlight_slider_img_Wrapper">
                            <img
                              src="assets/images/spt1.jpg"
                              alt="spotlight_img"
                            />
                          </div>
                          <div className="jp_spotlight_slider_cont_Wrapper">
                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>

                            <p>
                              <a href="#/">Webstrot Technology Ltd.</a>
                            </p>
                            <ul>
                              <li>
                                <i className="far fa-money-bill-alt"></i>&nbsp;
                                $12K - 15k P.A.
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt"></i>&nbsp;
                                Caliphonia, PO 455001
                              </li>
                            </ul>
                          </div>
                          <div className="header_btn search_btn news_btn overview_btn  jb_cover">
                            <a href="#/">apply now !</a>
                          </div>
                        </div>
                        <div className="item">
                          <div className="jp_spotlight_slider_img_Wrapper">
                            <img
                              src="assets/images/spt1.jpg"
                              alt="spotlight_img"
                            />
                          </div>
                          <div className="jp_spotlight_slider_cont_Wrapper">
                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                            <p>
                              <a href="#/">Webstrot Technology Ltd.</a>
                            </p>
                            <ul>
                              <li>
                                <i className="far fa-money-bill-alt"></i>&nbsp;
                                $12K - 15k P.A.
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt"></i>&nbsp;
                                Caliphonia, PO 455001
                              </li>
                            </ul>
                          </div>
                          <div className="header_btn search_btn news_btn overview_btn  jb_cover">
                            <a href="#/">apply now !</a>
                          </div>
                        </div>
                        <div className="item">
                          <div className="jp_spotlight_slider_img_Wrapper">
                            <img
                              src="assets/images/spt1.jpg"
                              alt="spotlight_img"
                            />
                          </div>
                          <div className="jp_spotlight_slider_cont_Wrapper">
                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                            <p>
                              <a href="#/">Webstrot Technology Ltd.</a>
                            </p>
                            <ul>
                              <li>
                                <i className="far fa-money-bill-alt"></i>&nbsp;
                                $12K - 15k P.A.
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt"></i>&nbsp;
                                Caliphonia, PO 455001
                              </li>
                            </ul>
                          </div>
                          <div className="header_btn search_btn news_btn overview_btn  jb_cover">
                            <a href="#/">apply now !</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="job_filter_category_sidebar jb_cover">
                  <div className="job_filter_sidebar_heading jb_cover">
                    <h1>recent resumes</h1>
                  </div>

                  <div className="category_jobbox jb_cover">
                    <div className="jp_rightside_career_content_wrapper jb_cover">
                      <div className="jp_rightside_career_img">
                        <img src="assets/images/rs1.jpg" alt="career_img" />
                      </div>
                      <div className="jp_rightside_career_img_cont">
                        <h4>
                          <a href="#/">
                            akshay <br />
                            due
                          </a>
                        </h4>
                        <p>
                          <i className="fa fa-folder-open"></i> &nbsp; dancer
                        </p>
                      </div>
                    </div>
                    <div className="jp_rightside_career_content_wrapper jb_cover">
                      <div className="jp_rightside_career_img">
                        <img src="assets/images/rs2.jpg" alt="career_img" />
                      </div>
                      <div className="jp_rightside_career_img_cont">
                        <h4>
                          <a href="#/">
                            farhan <br /> Shaikh
                          </a>
                        </h4>
                        <p>
                          <i className="fa fa-folder-open"></i> &nbsp; UI
                          designer
                        </p>
                      </div>
                    </div>
                    <div className="jp_rightside_career_content_wrapper jb_cover">
                      <div className="jp_rightside_career_img">
                        <img src="assets/images/rs3.jpg" alt="career_img" />
                      </div>
                      <div className="jp_rightside_career_img_cont">
                        <h4>
                          <a href="#/">
                            maria <br /> simon
                          </a>
                        </h4>
                        <p>
                          <i className="fa fa-folder-open"></i>&nbsp; developer
                        </p>
                      </div>
                    </div>
                    <div className="seeMore">
                      <a href="#/">view all resume</a>
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
            </div>
          </div>
        </div>
        <all.NewsLetter />
        <all.Footer />
      </div>
    </Fragment>
  );
};

export default SingleBlog;
