import React, { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../common/webassets/css/flaticon.css'
import { ToastContainer } from "react-toastify";


const Header = ({ name }) => {
  const scrollToRef = (ref) =>
    window.scrollTo({
      top: 0,
      left: ref.current.offsetTop,
      behavior: "smooth",
    });
  const topre = useRef(null);
  useEffect(() => {
    scrollToRef(topre);
  }, []);

  const handlescr = () => {
    scrollToRef(topre);
  };

  return (
    <Fragment>
      <ToastContainer />
      <div ref={topre}>
        <nav className="cd-dropdown  d-block d-sm-block d-md-block d-lg-none d-xl-none">
          <h2>
            <Link to="/">
              <span>
                <img src="assets/images/logo.png" alt="img" />
              </span>
            </Link>
          </h2>
          <a href="#/" className="cd-close">
            Close
          </a>
          <ul className="cd-dropdown-content">
            <li>
              <form className="cd-search">
                <input
                  type="search"
                  placeholder="Search..."
                  defaultValue="hello"
                />
              </form>
            </li>
            <li className="has-children">
              <a href="#/">home</a>
              <ul className="cd-secondary-dropdown icon_menu is-hidden">
                <li className="go-back">
                  <a href="#0">Menu</a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#/">jobs</a>
              <ul className="cd-secondary-dropdown icon_menu is-hidden">
                <li className="go-back">
                  <a href="#0">Menu</a>
                </li>
                <li>
                  <a href="job_listing_grid_left_filter.html">
                    job listing grid
                  </a>
                </li>
                <li>
                  <a href="job_listing_list_left_filter.html">
                    job listing list
                  </a>
                </li>
                <li>
                  <a href="job_single.html">job single</a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#/">pages</a>
              <ul className="cd-secondary-dropdown icon_menu is-hidden">
                <li className="go-back">
                  <a href="#0">Menu</a>
                </li>
                <li>
                  <a href="about_us.html">about us</a>
                </li>
                <li>
                  <a href="companies.html">companies</a>
                </li>
                <li>
                  <a href="company_single.html">company single</a>
                </li>
                <li>
                  <a href="error_page.html">error page</a>
                </li>
                <li>
                  <a href="login.html">login</a>
                </li>
                <li>
                  <a href="pricing_table.html">pricing table</a>
                </li>
                <li>
                  <a href="sign_up.html">sign up</a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#/">dashboard</a>
              <ul className="cd-secondary-dropdown is-hidden">
                <li className="go-back">
                  <a href="#0">Menu</a>
                </li>
                <li className="has-children">
                  <a href="#/">candidate</a>
                  <ul className="cd-secondary-dropdown is-hidden">
                    <li className="go-back">
                      <a href="#0">Menu</a>
                    </li>
                    <li>
                      <a href="../dashboard/candidate_applied_job.html">
                        applied job
                      </a>
                    </li>
                    <li>
                      <a href="../dashboard/candidate_dashboard.html">
                        dashboard
                      </a>
                    </li>
                    <li>
                      <a href="../dashboard/candidate_edit_profile.html">
                        edit profile
                      </a>
                    </li>
                    <li>
                      <a href="../dashboard/candidate_favourite_job.html">
                        favourite job
                      </a>
                    </li>
                    <li>
                      <a href="../dashboard/candidate_resume.html"> resume</a>
                    </li>
                    <li>
                      <a href="../dashboard/message.html"> message</a>
                    </li>
                    <li>
                      <a href="../dashboard/pricing_plans.html">
                        pricing plans
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#/">company</a>
                  <ul className="cd-secondary-dropdown is-hidden">
                    <li className="go-back">
                      <a href="#0">Menu</a>
                    </li>
                    <li>
                      <a href="../dashboard/comp_applications.html">
                        applications
                      </a>
                    </li>
                    <li>
                      <a href="../dashboard/comp_company_page.html">
                        company page
                      </a>
                    </li>
                    <li>
                      <a href="../dashboard/comp_employer_dashboard.html">
                        dashboard
                      </a>
                    </li>
                    <li>
                      <a href="../dashboard/comp_employer_edit_profile.html">
                        edit profile
                      </a>
                    </li>
                    <li>
                      <a href="../dashboard/comp_employer_manage_jobs.html">
                        manage jobs
                      </a>
                    </li>
                    <li>
                      <a href="../dashboard/comp_post_new_job.html">
                        post new job
                      </a>
                    </li>
                    <li>
                      <a href="../dashboard/message.html">message</a>
                    </li>
                    <li>
                      <a href="../dashboard/pricing_plans.html">
                        pricing plans
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#/">blog</a>
              <ul className="cd-secondary-dropdown icon_menu is-hidden">
                <li className="go-back">
                  <a href="#0">Menu</a>
                </li>
                <li>
                  <a href="blog_single.html">blog single</a>
                </li>
                <li>
                  <a href="blog_category_right_sidebar.html">blog category</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact_us.html">contact us </a>
            </li>
            <li>
              <a href="login.html">login</a>
            </li>
          </ul>
        </nav>
        <div className="cp_navi_main_wrapper jb_cover index_2_top_header">
          <div className="container-fluid d-flex align-items-center">
            <div className="cp_logo_wrapper">
              <Link to="/">
                <img
                  src="assets/images/gobo_logo.png"
                  className="img-fluid site-logo"
                  alt="logo"
                />
              </Link>
            </div>
            <header className="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="cd-dropdown-wrapper">
                      <a className="house_toggle" href="#0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 31.177 31.177"
                          width="25px"
                          height="25px"
                        >
                          <g>
                            <g>
                              <path
                                className="menubar"
                                d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z"
                                fill="#004165"
                              ></path>
                            </g>
                            <g>
                              <path
                                className="menubar"
                                d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z"
                                fill="#004165"
                              ></path>
                            </g>
                            <g>
                              <path
                                className="menubar"
                                d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z"
                                fill="#004165"
                              ></path>
                            </g>
                            <g>
                              <path
                                className="menubar"
                                d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z"
                                fill="#004165"
                              ></path>
                            </g>
                            <g>
                              <path
                                className="menubar"
                                d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z"
                                fill="#004165"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="jb_navigation_wrapper d-flex ml-auto">
              <div className="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
                <ul className="main_nav_ul">
                  <li>
                    <Link
                      to="/"
                      className={`gc_main_navigation ${
                        name === "home" ? "active_class" : ""
                      }`}
                    >
                      home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/jobs"
                      className={`gc_main_navigation ${
                        name === "artist" ? "active_class" : ""
                      }`}
                    >
                      Artist
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#/"
                      className={`gc_main_navigation ${
                        name === "producer" ? "active_class" : ""
                      }`}
                    >
                      Producer
                    </a>
                  </li>
                  <li className="has-mega gc_main_navigation kv_sub_menu green_sub_menu blue_sub_menu">
                    <a
                      href="#/"
                      className={`gc_main_navigation ${
                        name === "auditions" ? "active_class" : ""
                      }`}
                    >
                      Auditions
                    </a>
                    <ul className="kv_mega_menu">
                      <li className="kv_mega_menu_width">
                        <div className="container">
                          <div className="jn_menu_partion_div">
                            <div className="candidate_width">
                              <div className="jen_tabs_conent_list jb_cover">
                                <h1>job skills</h1>
                                <ul>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>HTML5
                                      &amp; CSS3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>wordpress
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>
                                      javascript
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>photoshop
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>designer
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>
                                      construction
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="candidate_width">
                              <div className="jen_tabs_conent_list jb_cover">
                                <h1>categories</h1>
                                <ul>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>graphic
                                      design
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>
                                      engineering jobs
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>mainframe
                                      jobs
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>PSU jobs
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>goverment
                                      jobs
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>IT
                                      company
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="candidate_width">
                              <div className="jen_tabs_conent_list   jb_cover">
                                <h1>job location</h1>
                                <ul>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>india
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>united
                                      state
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>japan
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>dubai
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>south
                                      africa
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/">
                                      <i className="fas fa-square"></i>china
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="candidate_width">
                              <div className="jen_tabs_conent_list   jb_cover">
                                <h1>open jobs</h1>
                                <div className="open_jobs_wrapper">
                                  <div className="open_jobs_wrapper_1 jb_cover">
                                    <img
                                      src="assets/images/job1.jpg"
                                      alt="img"
                                    />
                                    <div className="open_job_text">
                                      <h3>
                                        <a href="#/">
                                          Some designers inelevated the..
                                        </a>
                                      </h3>
                                      <p>5 hour ago</p>
                                    </div>
                                  </div>
                                  <div className="open_jobs_wrapper_1 jb_cover">
                                    <img
                                      src="assets/images/job1.jpg"
                                      alt="img"
                                    />
                                    <div className="open_job_text">
                                      <h3>
                                        <a href="#/">
                                          Some designers inelevated the..
                                        </a>
                                      </h3>
                                      <p>12 hour ago</p>
                                    </div>
                                  </div>
                                  <div className="view_all_job jb_cover">
                                    <a href="#/">view all jobs</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className={`gc_main_navigation ${
                        name === "contact" ? "active_class" : ""
                      }`}
                    >
                      contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="jb_search_btn_wrapper d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div className="extra-nav">
                  <div className="extra-cell">
                    <button
                      id="quik-search-btn"
                      type="button"
                      className="site-button radius-xl"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>

                <div className="dez-quik-search bg-primary-dark">
                  <form action="#/">
                    <input
                      name="search"
                      value=""
                      type="text"
                      className="form-control"
                      placeholder="Type to search..."
                    />
                    <span id="quik-search-remove">
                      <i className="fas fa-times"></i>
                    </span>
                  </form>
                </div>
              </div>
            </div>

            <div className="menu_btn_box header_btn">
              <ul>
                <li>
                  <Link to="/signup">
                    <i className="flaticon-man-user"></i> sign up
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <i className="flaticon-login"></i> login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handlescr} id="return-to-top" className="return_top3">
        <i className="fas fa-angle-double-up"></i>
      </button>
    </Fragment>
  );
};

export default Header;
