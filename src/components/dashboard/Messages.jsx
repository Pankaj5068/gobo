import React, { Fragment } from "react";
import dashall from "./dashcomm/alldash";

const Messages = () => {
  return (
    <Fragment>
      <dashall.NavHeader />
      <dashall.DashHeader name="Messages" />
      <dashall.Sidebar />
      <div className="content-body">
        <div className="container-fluid">
          <div className="row page-titles">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">
                <a href="#/">Email</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#/">Inbox</a>
              </li>
            </ol>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="email-left-box px-0 mb-3">
                    <div className="p-0">
                      <a
                        href="email-compose.html"
                        className="btn btn-primary btn-block"
                      >
                        Compose
                      </a>
                    </div>
                    <div className="mail-list rounded mt-4">
                      <a
                        href="email-inbox.html"
                        className="list-group-item active"
                      >
                        <i className="fa fa-inbox font-18 align-middle me-2"></i>
                        Inbox
                        <span className="badge badge-primary badge-sm float-end">
                          198
                        </span>
                      </a>
                      <a href="#/" className="list-group-item">
                        <i className="fa fa-paper-plane font-18 align-middle me-2"></i>
                        Sent
                      </a>
                      <a href="#/" className="list-group-item">
                        <i className="fa fa-star font-18 align-middle me-2"></i>
                        Important
                        <span className="badge badge-danger text-white badge-sm float-end">
                          47
                        </span>
                      </a>
                      <a href="#/" className="list-group-item">
                        <i className="mdi mdi-file-document-box font-18 align-middle me-2"></i>
                        Draft
                      </a>
                      <a href="#/" className="list-group-item">
                        <i className="fa fa-trash font-18 align-middle me-2"></i>
                        Trash
                      </a>
                    </div>
                    <div className="mail-list rounded overflow-hidden mt-4">
                      <div className="intro-title d-flex justify-content-between my-0">
                        <h5>Categories</h5>
                        <i className="icon-arrow-down" aria-hidden="true"></i>
                      </div>
                      <a href="email-inbox.html" className="list-group-item">
                        <span className="icon-warning">
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                        Work
                      </a>
                      <a href="email-inbox.html" className="list-group-item">
                        <span className="icon-primary">
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                        Private
                      </a>
                      <a href="email-inbox.html" className="list-group-item">
                        <span className="icon-success">
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                        Support
                      </a>
                      <a href="email-inbox.html" className="list-group-item">
                        <span className="icon-dpink">
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                        Social
                      </a>
                    </div>
                  </div>
                  <div className="email-right-box ms-0 ms-sm-4 ms-sm-0">
                    <div role="toolbar" className="toolbar ms-1 ms-sm-0">
                      <div className="btn-group mb-1">
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkAll"
                          />
                          <label
                            className="form-check-label"
                            for="checkAll"
                          ></label>
                        </div>
                      </div>
                      <div className="btn-group mb-1">
                        <button
                          className="btn btn-primary light px-3"
                          type="button"
                        >
                          <i className="ti-reload"></i>
                        </button>
                      </div>
                      <div className="btn-group mb-1">
                        <button
                          aria-expanded="false"
                          data-bs-toggle="dropdown"
                          className="btn btn-primary px-3 light dropdown-toggle"
                          type="button"
                        >
                          More <span className="caret"></span>
                        </button>
                        <div className="dropdown-menu">
                          <a href="#/" className="dropdown-item">
                            Mark as Unread
                          </a>
                          <a href="#/" className="dropdown-item">
                            Add to Tasks
                          </a>
                          <a href="#/" className="dropdown-item">
                            Add Star
                          </a>
                          <a href="#/" className="dropdown-item">
                            Mute
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="email-list mt-3">
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox2"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox2"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Ingredia Nutrisha, A collection of textile samples
                              lay spread out on the table - Samsa was a
                              travelling salesman - and above it there hung a
                              picture
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox3"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox3"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Almost unorthographic life One day however a small
                              line of blind text by the name of Lorem Ipsum
                              decided to leave for the far World of Grammar.
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox4"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox4"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Pointing has no control about the blind texts it
                              is an almost unorthographic life One day however a
                              small line of blind text by the name of
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox5"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox5"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Even the all-powerful Pointing has no control
                              about the blind texts it is an almost
                              unorthographic life One day however a small line
                              of blind text by the name of
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox6"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox6"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Ingredia Nutrisha, A collection of textile samples
                              lay spread out on the table - Samsa was a
                              travelling salesman - and above it there hung a
                              picture
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox7"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox7"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Almost unorthographic life One day however a small
                              line of blind text by the name of Lorem Ipsum
                              decided to leave for the far World of Grammar.
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox8"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox8"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Pointing has no control about the blind texts it
                              is an almost unorthographic life One day however a
                              small line of blind text by the name of
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message unread">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox9"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox9"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Even the all-powerful Pointing has no control
                              about the blind texts it is an almost
                              unorthographic life One day however a small line
                              of blind text by the name of
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message unread">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox10"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox10"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Ingredia Nutrisha, A collection of textile samples
                              lay spread out on the table - Samsa was a
                              travelling salesman - and above it there hung a
                              picture
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox11"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox11"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Almost unorthographic life One day however a small
                              line of blind text by the name of Lorem Ipsum
                              decided to leave for the far World of Grammar.
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox12"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox12"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Pointing has no control about the blind texts it
                              is an almost unorthographic life One day however a
                              small line of blind text by the name of
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox13"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox13"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Even the all-powerful Pointing has no control
                              about the blind texts it is an almost
                              unorthographic life One day however a small line
                              of blind text by the name of
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox14"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox14"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Ingredia Nutrisha, A collection of textile samples
                              lay spread out on the table - Samsa was a
                              travelling salesman - and above it there hung a
                              picture
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message unread">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox15"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox15"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Almost unorthographic life One day however a small
                              line of blind text by the name of Lorem Ipsum
                              decided to leave for the far World of Grammar.
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox16"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox16"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Pointing has no control about the blind texts it
                              is an almost unorthographic life One day however a
                              small line of blind text by the name of
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox17"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox17"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Even the all-powerful Pointing has no control
                              about the blind texts it is an almost
                              unorthographic life One day however a small line
                              of blind text by the name of
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox18"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox18"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Ingredia Nutrisha, A collection of textile samples
                              lay spread out on the table - Samsa was a
                              travelling salesman - and above it there hung a
                              picture
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox19"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox19"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Almost unorthographic life One day however a small
                              line of blind text by the name of Lorem Ipsum
                              decided to leave for the far World of Grammar.
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message unread">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox20"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox20"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Pointing has no control about the blind texts it
                              is an almost unorthographic life One day however a
                              small line of blind text by the name of
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox21"
                                />
                                <label
                                  className="form-check-label"
                                  for="checkbox21"
                                ></label>
                              </div>
                            </div>
                            <div className="ms-2">
                              <button className="border-0 bg-transparent align-middle p-0">
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <a
                            href="email-read.html"
                            className="col-mail col-mail-2"
                          >
                            <div className="subject">
                              Even the all-powerful Pointing has no control
                              about the blind texts it is an almost
                              unorthographic life One day however a small line
                              of blind text by the name of
                            </div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12 ps-3">
                        <nav>
                          <ul className="pagination pagination-gutter pagination-primary pagination-sm no-bg">
                            <li className="page-item page-indicator">
                              <a className="page-link" href="#/">
                                <i className="la la-angle-left"></i>
                              </a>
                            </li>
                            <li className="page-item ">
                              <a className="page-link" href="#/">
                                1
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link" href="#/">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#/">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#/">
                                4
                              </a>
                            </li>
                            <li className="page-item page-indicator">
                              <a className="page-link" href="#/">
                                <i className="la la-angle-right"></i>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
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

export default Messages;
