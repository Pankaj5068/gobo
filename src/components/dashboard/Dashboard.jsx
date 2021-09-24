import React, { Fragment } from "react";
import dashall from "./dashcomm/alldash";

const Dashboard = () => {
  return (
    <Fragment>
      <dashall.NavHeader />
      <dashall.DashHeader name="Dashboard" />
      <dashall.Sidebar />
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row separate-row">
                        <div className="col-sm-6">
                          <div className="job-icon pb-4 d-flex justify-content-between">
                            <div>
                              <div className="d-flex align-items-center mb-1">
                                <h2 className="mb-0">342</h2>
                                <span className="text-success ms-3">
                                  +0.5 %
                                </span>
                              </div>
                              <span className="fs-14 d-block mb-2">
                                Interview Schedules
                              </span>
                            </div>
                            <div id="NewCustomers"></div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="job-icon pb-4 pt-4 pt-sm-0 d-flex justify-content-between">
                            <div>
                              <div className="d-flex align-items-center mb-1">
                                <h2 className="mb-0">984</h2>
                              </div>
                              <span className="fs-14 d-block mb-2">
                                Application Sent
                              </span>
                            </div>
                            <div id="NewCustomers1"></div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="job-icon pt-4 pb-sm-0 pb-4 pe-3 d-flex justify-content-between">
                            <div>
                              <div className="d-flex align-items-center mb-1">
                                <h2 className="mb-0">1,567k</h2>
                                <span className="text-danger ms-3">-2 % </span>
                              </div>
                              <span className="fs-14 d-block mb-2">
                                Profile Viewed
                              </span>
                            </div>
                            <div id="NewCustomers2"></div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="job-icon pt-4  d-flex justify-content-between">
                            <div>
                              <div className="d-flex align-items-center mb-1">
                                <h2 className="mb-0">437</h2>
                              </div>
                              <span className="fs-14 d-block mb-2">
                                Unread Messages
                              </span>
                            </div>
                            <div id="NewCustomers3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="card " id="user-activity">
                    <div className="card-header border-0 pb-0 flex-wrap">
                      <h4 className="fs-20 mb-1">Vacany Stats</h4>
                      <div className="card-action coin-tabs mt-3 mt-sm-0">
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item">
                            <a
                              className="nav-link "
                              data-bs-toggle="tab"
                              href="#Daily"
                              role="tab"
                            >
                              Daily
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link "
                              data-bs-toggle="tab"
                              href="#weekly"
                              role="tab"
                            >
                              Weekly
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              data-bs-toggle="tab"
                              href="#monthly"
                              role="tab"
                            >
                              Monthly
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="pb-4 d-flex flex-wrap">
                        <span className="d-flex align-items-center">
                          <svg
                            className="me-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewbox="0 0 13 13"
                          >
                            <rect
                              width="13"
                              height="13"
                              rx="6.5"
                              fill="#35c556"
                            ></rect>
                          </svg>
                          Application Sent
                        </span>
                        <span className="application d-flex align-items-center">
                          <svg
                            className="me-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewbox="0 0 13 13"
                          >
                            <rect
                              width="13"
                              height="13"
                              rx="6.5"
                              fill="#3f4cfe"
                            ></rect>
                          </svg>
                          Interviews
                        </span>
                        <span className="application d-flex align-items-center">
                          <svg
                            className="me-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewbox="0 0 13 13"
                          >
                            <rect
                              width="13"
                              height="13"
                              rx="6.5"
                              fill="#f34040"
                            ></rect>
                          </svg>
                          Rejected
                        </span>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane fade show active" id="Daily">
                          <canvas id="activity" height="115"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h4 className="fs-20 mb-1">Featured Companies</h4>
                      <div className="dropdown">
                        <a
                          href="#/"
                          className="btn-link"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewbox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                              stroke="#575757"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                              stroke="#575757"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                              stroke="#575757"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#/">
                            Delete
                          </a>
                          <a className="dropdown-item" href="#/">
                            Edit
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-3 loadmore-content">
                      <div className="row" id="FeaturedCompaniesContent">
                        <div className="col-xl-6 col-sm-6 mt-4 ">
                          <div className="d-flex">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="71"
                                height="71"
                                viewbox="0 0 71 71"
                              >
                                <g transform="translate(-457 -443)">
                                  <rect
                                    width="71"
                                    height="71"
                                    rx="12"
                                    transform="translate(457 443)"
                                    fill="#c5c5c5"
                                  ></rect>
                                  <g transform="translate(457 443)">
                                    <rect
                                      data-name="placeholder"
                                      width="71"
                                      height="71"
                                      rx="12"
                                      fill="#2769ee"
                                    ></rect>
                                    <circle
                                      data-name="Ellipse 12"
                                      cx="18"
                                      cy="18"
                                      r="18"
                                      transform="translate(15 20)"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      data-name="Ellipse 11"
                                      cx="11"
                                      cy="11"
                                      r="11"
                                      transform="translate(36 15)"
                                      fill="#ffe70c"
                                      style={{
                                        mixBlendMode: "multiply",
                                        isolation: "isolate",
                                      }}
                                    ></circle>
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <div className="ms-3 featured">
                              <h4 className="fs-20 mb-1">Kleon Team</h4>
                              <span>Desgin Team Agency</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 mt-4 col-sm-6">
                          <div className="d-flex">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="71"
                                height="71"
                                viewbox="0 0 71 71"
                              >
                                <g transform="translate(-457 -443)">
                                  <rect
                                    width="71"
                                    height="71"
                                    rx="12"
                                    transform="translate(457 443)"
                                    fill="#c5c5c5"
                                  ></rect>
                                  <g transform="translate(457 443)">
                                    <rect
                                      data-name="placeholder"
                                      width="71"
                                      height="71"
                                      rx="12"
                                      fill="#7630d2"
                                    ></rect>
                                    <circle
                                      data-name="Ellipse 12"
                                      cx="18"
                                      cy="18"
                                      r="18"
                                      transform="translate(15 20)"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      data-name="Ellipse 11"
                                      cx="11"
                                      cy="11"
                                      r="11"
                                      transform="translate(36 15)"
                                      fill="#ffe70c"
                                      style={{
                                        mixBlendMode: "multiply",
                                        isolation: "isolate",
                                      }}
                                    ></circle>
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <div className="ms-3 featured">
                              <h4 className="fs-20 mb-1">Ziro Studios Inc.</h4>
                              <span>Desgin Team Agency</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6  col-sm-6 mt-4">
                          <div className="d-flex">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="71"
                                height="71"
                                viewbox="0 0 71 71"
                              >
                                <g transform="translate(-457 -443)">
                                  <rect
                                    width="71"
                                    height="71"
                                    rx="12"
                                    transform="translate(457 443)"
                                    fill="#c5c5c5"
                                  ></rect>
                                  <g transform="translate(457 443)">
                                    <rect
                                      data-name="placeholder"
                                      width="71"
                                      height="71"
                                      rx="12"
                                      fill="#b848ef"
                                    ></rect>
                                    <circle
                                      data-name="Ellipse 12"
                                      cx="18"
                                      cy="18"
                                      r="18"
                                      transform="translate(15 20)"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      data-name="Ellipse 11"
                                      cx="11"
                                      cy="11"
                                      r="11"
                                      transform="translate(36 15)"
                                      fill="#ffe70c"
                                      style={{
                                        mixBlendMode: "multiply",
                                        isolation: "isolate",
                                      }}
                                    ></circle>
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <div className="ms-3 featured">
                              <h4 className="fs-20 mb-1">Qerza</h4>
                              <span>Desgin Team Agency</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-sm-6 mt-4">
                          <div className="d-flex">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="71"
                                height="71"
                                viewbox="0 0 71 71"
                              >
                                <g transform="translate(-457 -443)">
                                  <rect
                                    width="71"
                                    height="71"
                                    rx="12"
                                    transform="translate(457 443)"
                                    fill="#c5c5c5"
                                  ></rect>
                                  <g transform="translate(457 443)">
                                    <rect
                                      data-name="placeholder"
                                      width="71"
                                      height="71"
                                      rx="12"
                                      fill="#7e1d74"
                                    ></rect>
                                    <circle
                                      data-name="Ellipse 12"
                                      cx="18"
                                      cy="18"
                                      r="18"
                                      transform="translate(15 20)"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      data-name="Ellipse 11"
                                      cx="11"
                                      cy="11"
                                      r="11"
                                      transform="translate(36 15)"
                                      fill="#ffe70c"
                                      style={{
                                        mixBlendMode: "multiply",
                                        isolation: "isolate",
                                      }}
                                    ></circle>
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <div className="ms-3 featured">
                              <h4 className="fs-20 mb-1">Kripton Studios</h4>
                              <span>Desgin Team Agency</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-sm-6 mt-4">
                          <div className="d-flex">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="71"
                                height="71"
                                viewbox="0 0 71 71"
                              >
                                <g transform="translate(-457 -443)">
                                  <rect
                                    width="71"
                                    height="71"
                                    rx="12"
                                    transform="translate(457 443)"
                                    fill="#c5c5c5"
                                  ></rect>
                                  <g transform="translate(457 443)">
                                    <rect
                                      data-name="placeholder"
                                      width="71"
                                      height="71"
                                      rx="12"
                                      fill="#0411c2"
                                    ></rect>
                                    <circle
                                      data-name="Ellipse 12"
                                      cx="18"
                                      cy="18"
                                      r="18"
                                      transform="translate(15 20)"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      data-name="Ellipse 11"
                                      cx="11"
                                      cy="11"
                                      r="11"
                                      transform="translate(36 15)"
                                      fill="#ffe70c"
                                      style={{
                                        mixBlendMode: "multiply",
                                        isolation: "isolate",
                                      }}
                                    ></circle>
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <div className="ms-3 featured">
                              <h4 className="fs-20 mb-1">Omah Ku Inc.</h4>
                              <span>Desgin Team Agency</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-sm-6 mt-4">
                          <div className="d-flex">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="71"
                                height="71"
                                viewbox="0 0 71 71"
                              >
                                <g transform="translate(-457 -443)">
                                  <rect
                                    width="71"
                                    height="71"
                                    rx="12"
                                    transform="translate(457 443)"
                                    fill="#c5c5c5"
                                  ></rect>
                                  <g transform="translate(457 443)">
                                    <rect
                                      data-name="placeholder"
                                      width="71"
                                      height="71"
                                      rx="12"
                                      fill="#378a82"
                                    ></rect>
                                    <circle
                                      data-name="Ellipse 12"
                                      cx="18"
                                      cy="18"
                                      r="18"
                                      transform="translate(15 20)"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      data-name="Ellipse 11"
                                      cx="11"
                                      cy="11"
                                      r="11"
                                      transform="translate(36 15)"
                                      fill="#ffe70c"
                                      style={{
                                        mixBlendMode: "multiply",
                                        isolation: "isolate",
                                      }}
                                    ></circle>
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <div className="ms-3 featured">
                              <h4 className="fs-20 mb-1">Ventic</h4>
                              <span>Desgin Team Agency</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-sm-6 mt-4">
                          <div className="d-flex">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="71"
                                height="71"
                                viewbox="0 0 71 71"
                              >
                                <g transform="translate(-457 -443)">
                                  <rect
                                    width="71"
                                    height="71"
                                    rx="12"
                                    transform="translate(457 443)"
                                    fill="#c5c5c5"
                                  ></rect>
                                  <g transform="translate(457 443)">
                                    <rect
                                      data-name="placeholder"
                                      width="71"
                                      height="71"
                                      rx="12"
                                      fill="#175baa"
                                    ></rect>
                                    <circle
                                      data-name="Ellipse 12"
                                      cx="18"
                                      cy="18"
                                      r="18"
                                      transform="translate(15 20)"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      data-name="Ellipse 11"
                                      cx="11"
                                      cy="11"
                                      r="11"
                                      transform="translate(36 15)"
                                      fill="#ffe70c"
                                      style={{
                                        mixBlendMode: "multiply",
                                        isolation: "isolate",
                                      }}
                                    ></circle>
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <div className="ms-3 featured">
                              <h4 className="fs-20 mb-1">Sakola</h4>
                              <span>Desgin Team Agency</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-sm-6 mt-4">
                          <div className="d-flex">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="71"
                                height="71"
                                viewbox="0 0 71 71"
                              >
                                <g transform="translate(-457 -443)">
                                  <rect
                                    width="71"
                                    height="71"
                                    rx="12"
                                    transform="translate(457 443)"
                                    fill="#c5c5c5"
                                  ></rect>
                                  <g transform="translate(457 443)">
                                    <rect
                                      data-name="placeholder"
                                      width="71"
                                      height="71"
                                      rx="12"
                                      fill="#eeb927"
                                    ></rect>
                                    <circle
                                      data-name="Ellipse 12"
                                      cx="18"
                                      cy="18"
                                      r="18"
                                      transform="translate(15 20)"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      data-name="Ellipse 11"
                                      cx="11"
                                      cy="11"
                                      r="11"
                                      transform="translate(36 15)"
                                      fill="#ffe70c"
                                      style={{
                                        mixBlendMode: "multiply",
                                        isolation: "isolate",
                                      }}
                                    ></circle>
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <div className="ms-3 featured">
                              <h4 className="fs-20 mb-1">Uena Foods</h4>
                              <span>Desgin Team Agency</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer border-0 m-auto pt-0">
                      <a
                        href="#/"
                        className="btn btn-outline-primary btn-rounded m-auto dlab-load-more"
                        id="FeaturedCompanies"
                        rel="ajax/featuredcompanies.html"
                      >
                        View more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row ">
                        <div className="col-xl-8 col-xxl-7 col-sm-7">
                          <div className="update-profile d-flex">
                            <img
                              src="daassets/images/profile/pic1.jpg"
                              alt=""
                            />
                            <div className="ms-4">
                              <h3 className="fs-24 font-w600 mb-0">
                                Naru Modi
                              </h3>
                              <span className="text-primary d-block mb-4">
                                Actor
                              </span>
                              <span>
                                <i className="fas fa-map-marker-alt me-1"></i>
                                Medan, Sumatera Utara - ID
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-xxl-5 col-sm-5 sm-mt-auto mt-3">
                          <a href="#/" className="btn btn-primary btn-rounded">
                            Update Profile
                          </a>
                        </div>
                      </div>
                      <div className="row mt-4 align-items-center">
                        <h4 className="fs-20 mb-3">Skills</h4>
                        <div className="col-xl-6 col-sm-6">
                          <div className="progress default-progress">
                            <div
                              className="progress-bar bg-green progress-animated"
                              style={{ width: "90%", height: "13px" }}
                              role="progressbar"
                            >
                              <span className="sr-only">90% Complete</span>
                            </div>
                          </div>
                          <div className="d-flex align-items-end mt-2 pb-4 justify-content-between">
                            <span className="fs-14 font-w500">Acting</span>
                            <span className="fs-16">
                              <span className="text-black pe-2"></span>90%
                            </span>
                          </div>
                          <div className="progress default-progress">
                            <div
                              className="progress-bar bg-info progress-animated"
                              style={{ width: "68%", height: "13px" }}
                              role="progressbar"
                            >
                              <span className="sr-only">45% Complete</span>
                            </div>
                          </div>
                          <div className="d-flex align-items-end mt-2 pb-4 justify-content-between">
                            <span className="fs-14 font-w500">Modelling</span>
                            <span className="fs-16">
                              <span className="text-black pe-2"></span>68%
                            </span>
                          </div>
                          <div className="progress default-progress">
                            <div
                              className="progress-bar bg-blue progress-animated"
                              style={{ width: "85%", height: "13px" }}
                              role="progressbar"
                            >
                              <span className="sr-only">85% Complete</span>
                            </div>
                          </div>
                          <div className="d-flex align-items-end mt-2 pb-4 justify-content-between">
                            <span className="fs-14 font-w500">Comedian</span>
                            <span className="fs-16">
                              <span className="text-black pe-2"></span>85%
                            </span>
                          </div>
                        </div>
                        <div className="col-xl-6 col-sm-6">
                          <div id="pieChart1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-header border-0">
                      <h4 className="fs-20 mb-3">Recent Activity</h4>
                      <div>
                        <select className="default-select dashboard-select">
                          <option data-display="newest">newest</option>

                          <option value="2">oldest</option>
                        </select>
                        <div className="dropdown custom-dropdown mb-0">
                          <div
                            className="btn sharp tp-btn dark-btn"
                            data-bs-toggle="dropdown"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewbox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                stroke="#342E59"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                stroke="#342E59"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                stroke="#342E59"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#/">
                              Details
                            </a>
                            <a className="dropdown-item text-danger" href="#/">
                              Cancel
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-body loadmore-content  recent-activity-wrapper"
                      id="RecentActivityContent"
                    >
                      <div className="d-flex recent-activity">
                        <span className="me-3 activity">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewbox="0 0 17 17"
                          >
                            <circle
                              cx="8.5"
                              cy="8.5"
                              r="8.5"
                              fill="#f93a0b"
                            ></circle>
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="71"
                            height="71"
                            viewbox="0 0 71 71"
                          >
                            <g transform="translate(-457 -443)">
                              <rect
                                width="71"
                                height="71"
                                rx="12"
                                transform="translate(457 443)"
                                fill="#c5c5c5"
                              ></rect>
                              <g transform="translate(457 443)">
                                <rect
                                  data-name="placeholder"
                                  width="71"
                                  height="71"
                                  rx="12"
                                  fill="#2769ee"
                                ></rect>
                                <circle
                                  data-name="Ellipse 12"
                                  cx="18"
                                  cy="18"
                                  r="18"
                                  transform="translate(15 20)"
                                  fill="#fff"
                                ></circle>
                                <circle
                                  data-name="Ellipse 11"
                                  cx="11"
                                  cy="11"
                                  r="11"
                                  transform="translate(36 15)"
                                  fill="#ffe70c"
                                  style={{
                                    mixBlendMode: "multiply",
                                    isolation: "isolate",
                                  }}
                                ></circle>
                              </g>
                            </g>
                          </svg>
                        </span>
                        <div className="ms-3">
                          <h5 className="mb-1">
                            Bubles Studios have 5 available positions for you
                          </h5>
                          <span>8min ago</span>
                        </div>
                      </div>
                      <div className="d-flex recent-activity">
                        <span className="me-3 activity">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewbox="0 0 17 17"
                          >
                            <circle
                              cx="8.5"
                              cy="8.5"
                              r="8.5"
                              fill="#a1a1a1"
                            ></circle>
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="71"
                            height="71"
                            viewbox="0 0 71 71"
                          >
                            <g transform="translate(-457 -443)">
                              <rect
                                width="71"
                                height="71"
                                rx="12"
                                transform="translate(457 443)"
                                fill="#c5c5c5"
                              ></rect>
                              <g transform="translate(457 443)">
                                <rect
                                  data-name="placeholder"
                                  width="71"
                                  height="71"
                                  rx="12"
                                  fill="#eeac27"
                                ></rect>
                                <circle
                                  data-name="Ellipse 12"
                                  cx="18"
                                  cy="18"
                                  r="18"
                                  transform="translate(15 20)"
                                  fill="#fff"
                                ></circle>
                                <circle
                                  data-name="Ellipse 11"
                                  cx="11"
                                  cy="11"
                                  r="11"
                                  transform="translate(36 15)"
                                  fill="#ffe70c"
                                  style={{
                                    mixBlendMode: "multiply",
                                    isolation: "isolate",
                                  }}
                                ></circle>
                              </g>
                            </g>
                          </svg>
                        </span>
                        <div className="ms-3">
                          <h5 className="mb-1">
                            Elextra Studios has invited you to interview meeting
                            tomorrow
                          </h5>
                          <span>8min ago</span>
                        </div>
                      </div>
                      <div className="d-flex recent-activity">
                        <span className="me-3 activity">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewbox="0 0 17 17"
                          >
                            <circle
                              cx="8.5"
                              cy="8.5"
                              r="8.5"
                              fill="#a1a1a1"
                            ></circle>
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="71"
                            height="71"
                            viewbox="0 0 71 71"
                          >
                            <g transform="translate(-457 -443)">
                              <rect
                                width="71"
                                height="71"
                                rx="12"
                                transform="translate(457 443)"
                                fill="#c5c5c5"
                              ></rect>
                              <g transform="translate(457 443)">
                                <rect
                                  data-name="placeholder"
                                  width="71"
                                  height="71"
                                  rx="12"
                                  fill="#22bc32"
                                ></rect>
                                <circle
                                  data-name="Ellipse 12"
                                  cx="18"
                                  cy="18"
                                  r="18"
                                  transform="translate(15 20)"
                                  fill="#fff"
                                ></circle>
                                <circle
                                  data-name="Ellipse 11"
                                  cx="11"
                                  cy="11"
                                  r="11"
                                  transform="translate(36 15)"
                                  fill="#ffe70c"
                                  style={{
                                    mixBlendMode: "multiply",
                                    isolation: "isolate",
                                  }}
                                ></circle>
                              </g>
                            </g>
                          </svg>
                        </span>
                        <div className="ms-3">
                          <h5 className="mb-1">
                            Highspeed Design Team have 2 available positions for
                            you
                          </h5>
                          <span>8min ago</span>
                        </div>
                      </div>
                      <div className="d-flex recent-activity">
                        <span className="me-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewbox="0 0 17 17"
                          >
                            <circle
                              cx="8.5"
                              cy="8.5"
                              r="8.5"
                              fill="#a1a1a1"
                            ></circle>
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="71"
                            height="71"
                            viewbox="0 0 71 71"
                          >
                            <g transform="translate(-457 -443)">
                              <rect
                                width="71"
                                height="71"
                                rx="12"
                                transform="translate(457 443)"
                                fill="#c5c5c5"
                              ></rect>
                              <g transform="translate(457 443)">
                                <rect
                                  data-name="placeholder"
                                  width="71"
                                  height="71"
                                  rx="12"
                                  fill="#9933cb"
                                ></rect>
                                <circle
                                  data-name="Ellipse 12"
                                  cx="18"
                                  cy="18"
                                  r="18"
                                  transform="translate(15 20)"
                                  fill="#fff"
                                ></circle>
                                <circle
                                  data-name="Ellipse 11"
                                  cx="11"
                                  cy="11"
                                  r="11"
                                  transform="translate(36 15)"
                                  fill="#ffe70c"
                                  style={{
                                    mixBlendMode: "multiply",
                                    isolation: "isolate",
                                  }}
                                ></circle>
                              </g>
                            </g>
                          </svg>
                        </span>
                        <div className="ms-3">
                          <h5 className="mb-1">
                            Kleon Studios have 5 available positions for you
                          </h5>
                          <span>8min ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer border-0 m-auto pt-0">
                      <a
                        href="#/"
                        className="btn btn-outline-primary btn-rounded m-auto dlab-load-more"
                        id="RecentActivity"
                        rel="ajax/recentactivity.html"
                      >
                        View more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dashall.DashFooter />
    </Fragment>
  );
};

export default Dashboard;
