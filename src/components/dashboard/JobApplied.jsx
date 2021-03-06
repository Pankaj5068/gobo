import React, { Fragment } from "react";
import dashall from "./dashcomm/alldash";

const JobApplied = () => {
  return (
    <Fragment>
      <dashall.NavHeader />
      <dashall.DashHeader name="Job List" />
      <dashall.Sidebar />
      <div className="content-body">
        <div className="container-fluid">
          <div className="d-flex align-items-center mb-4 flex-wrap">
            <h4 className="fs-20 font-w600  me-auto">Job Applied</h4>
            <div>
              <a href="#/" className="btn btn-secondary btn-sm me-3">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="#/" className="btn btn-secondary btn-sm me-3">
                <i className="fas fa-phone-alt"></i>
              </a>
              <a href="#/" className="btn btn-secondary btn-sm">
                <i className="fas fa-info"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="table-responsive">
                <table
                  className="table display mb-4 dataTablesCard job-table table-responsive-xl card-table"
                  id="example5"
                >
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Company</th>
                      <th>Type</th>
                      <th>Posted Date</th>
                      <th>Applied Date</th>
                      <th>Close Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Pooja Studios</td>
                      <td className="wspace-no">Full-Time</td>
                      <td>12-01-2021</td>
                      <td>24-01-2021</td>
                      <td>25-01-2021</td>
                      <td>
                        <span className="badge badge-success badge-lg light">
                          Active
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons d-flex justify-content-end">
                          <a href="#/" className="btn btn-success light mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="svg-main-icon"
                              width="24px"
                              height="24px"
                              viewBox="0 0 32 32"
                              x="0px"
                              y="0px"
                            >
                              <g data-name="Layer 21">
                                <path
                                  d="M29,14.47A15,15,0,0,0,3,14.47a3.07,3.07,0,0,0,0,3.06,15,15,0,0,0,26,0A3.07,3.07,0,0,0,29,14.47ZM16,21a5,5,0,1,1,5-5A5,5,0,0,1,16,21Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></path>
                                <circle
                                  cx="16"
                                  cy="16"
                                  r="3"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></circle>
                              </g>
                            </svg>
                          </a>
                          <a href="#/" className="btn btn-secondary light mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              className="svg-main-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                  d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                                ></path>
                                <rect
                                  fill="#000000"
                                  opacity="0.3"
                                  x="5"
                                  y="20"
                                  width="15"
                                  height="2"
                                  rx="1"
                                ></rect>
                              </g>
                            </svg>
                          </a>
                          <a href="#/" className="btn btn-danger light">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              className="svg-main-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                  d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></path>
                                <path
                                  d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                  fill="#000000"
                                  opacity="0.3"
                                ></path>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Ganesh Studios</td>
                      <td className="wspace-no">Full-Time</td>
                      <td>12-01-2021</td>
                      <td>24-01-2021</td>
                      <td>25-01-2021</td>
                      <td>
                        <span className="badge badge-success badge-lg light">
                          Active
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons d-flex justify-content-end">
                          <a href="#/" className="btn btn-success light mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="svg-main-icon"
                              width="24px"
                              height="24px"
                              viewBox="0 0 32 32"
                              x="0px"
                              y="0px"
                            >
                              <g data-name="Layer 21">
                                <path
                                  d="M29,14.47A15,15,0,0,0,3,14.47a3.07,3.07,0,0,0,0,3.06,15,15,0,0,0,26,0A3.07,3.07,0,0,0,29,14.47ZM16,21a5,5,0,1,1,5-5A5,5,0,0,1,16,21Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></path>
                                <circle
                                  cx="16"
                                  cy="16"
                                  r="3"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></circle>
                              </g>
                            </svg>
                          </a>
                          <a href="#/" className="btn btn-secondary light mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              className="svg-main-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                  d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                                ></path>
                                <rect
                                  fill="#000000"
                                  opacity="0.3"
                                  x="5"
                                  y="20"
                                  width="15"
                                  height="2"
                                  rx="1"
                                ></rect>
                              </g>
                            </svg>
                          </a>
                          <a href="#/" className="btn btn-danger light">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              className="svg-main-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                  d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></path>
                                <path
                                  d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                  fill="#000000"
                                  opacity="0.3"
                                ></path>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Pooja Entertainnment</td>
                      <td className="wspace-no">Full-Time</td>
                      <td>12-01-2021</td>
                      <td>24-01-2021</td>
                      <td>25-01-2021</td>
                      <td>
                        <span className="badge badge-danger badge-lg light">
                          InActive
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons d-flex justify-content-end">
                          <a href="#/" className="btn btn-success light mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="svg-main-icon"
                              width="24px"
                              height="24px"
                              viewBox="0 0 32 32"
                              x="0px"
                              y="0px"
                            >
                              <g data-name="Layer 21">
                                <path
                                  d="M29,14.47A15,15,0,0,0,3,14.47a3.07,3.07,0,0,0,0,3.06,15,15,0,0,0,26,0A3.07,3.07,0,0,0,29,14.47ZM16,21a5,5,0,1,1,5-5A5,5,0,0,1,16,21Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></path>
                                <circle
                                  cx="16"
                                  cy="16"
                                  r="3"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></circle>
                              </g>
                            </svg>
                          </a>
                          <a href="#/" className="btn btn-secondary light mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              className="svg-main-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                  d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                                ></path>
                                <rect
                                  fill="#000000"
                                  opacity="0.3"
                                  x="5"
                                  y="20"
                                  width="15"
                                  height="2"
                                  rx="1"
                                ></rect>
                              </g>
                            </svg>
                          </a>
                          <a href="#/" className="btn btn-danger light">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              className="svg-main-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                  d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></path>
                                <path
                                  d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                  fill="#000000"
                                  opacity="0.3"
                                ></path>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Pooja Studios</td>
                      <td className="wspace-no">Full-Time</td>
                      <td>12-01-2021</td>
                      <td>24-01-2021</td>
                      <td>25-01-2021</td>
                      <td>
                        <span className="badge badge-success badge-lg light">
                          Active
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons d-flex justify-content-end">
                          <a href="#/" className="btn btn-success light mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="svg-main-icon"
                              width="24px"
                              height="24px"
                              viewBox="0 0 32 32"
                              x="0px"
                              y="0px"
                            >
                              <g data-name="Layer 21">
                                <path
                                  d="M29,14.47A15,15,0,0,0,3,14.47a3.07,3.07,0,0,0,0,3.06,15,15,0,0,0,26,0A3.07,3.07,0,0,0,29,14.47ZM16,21a5,5,0,1,1,5-5A5,5,0,0,1,16,21Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></path>
                                <circle
                                  cx="16"
                                  cy="16"
                                  r="3"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></circle>
                              </g>
                            </svg>
                          </a>
                          <a href="#/" className="btn btn-secondary light mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              className="svg-main-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                  d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                                ></path>
                                <rect
                                  fill="#000000"
                                  opacity="0.3"
                                  x="5"
                                  y="20"
                                  width="15"
                                  height="2"
                                  rx="1"
                                ></rect>
                              </g>
                            </svg>
                          </a>
                          <a href="#/" className="btn btn-danger light">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              className="svg-main-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                  d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></path>
                                <path
                                  d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                  fill="#000000"
                                  opacity="0.3"
                                ></path>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Khan Studios</td>
                      <td className="wspace-no">Full-Time</td>
                      <td>12-01-2021</td>
                      <td>24-01-2021</td>
                      <td>25-01-2021</td>
                      <td>
                        <span className="badge badge-danger badge-lg light">
                          InActive
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons d-flex justify-content-end">
                          <a href="#/" className="btn btn-success light mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="svg-main-icon"
                              width="24px"
                              height="24px"
                              viewBox="0 0 32 32"
                              x="0px"
                              y="0px"
                            >
                              <g data-name="Layer 21">
                                <path
                                  d="M29,14.47A15,15,0,0,0,3,14.47a3.07,3.07,0,0,0,0,3.06,15,15,0,0,0,26,0A3.07,3.07,0,0,0,29,14.47ZM16,21a5,5,0,1,1,5-5A5,5,0,0,1,16,21Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></path>
                                <circle
                                  cx="16"
                                  cy="16"
                                  r="3"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></circle>
                              </g>
                            </svg>
                          </a>
                          <a href="#/" className="btn btn-secondary light mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              className="svg-main-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                  d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                                ></path>
                                <rect
                                  fill="#000000"
                                  opacity="0.3"
                                  x="5"
                                  y="20"
                                  width="15"
                                  height="2"
                                  rx="1"
                                ></rect>
                              </g>
                            </svg>
                          </a>
                          <a href="#/" className="btn btn-danger light">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              className="svg-main-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                  d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></path>
                                <path
                                  d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                  fill="#000000"
                                  opacity="0.3"
                                ></path>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Pooja Studios</td>
                      <td className="wspace-no">Full-Time</td>
                      <td>12-01-2021</td>
                      <td>24-01-2021</td>
                      <td>25-01-2021</td>
                      <td>
                        <span className="badge badge-success badge-lg light">
                          Active
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons d-flex justify-content-end">
                          <a href="#/" className="btn btn-success light mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="svg-main-icon"
                              width="24px"
                              height="24px"
                              viewBox="0 0 32 32"
                              x="0px"
                              y="0px"
                            >
                              <g data-name="Layer 21">
                                <path
                                  d="M29,14.47A15,15,0,0,0,3,14.47a3.07,3.07,0,0,0,0,3.06,15,15,0,0,0,26,0A3.07,3.07,0,0,0,29,14.47ZM16,21a5,5,0,1,1,5-5A5,5,0,0,1,16,21Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></path>
                                <circle
                                  cx="16"
                                  cy="16"
                                  r="3"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></circle>
                              </g>
                            </svg>
                          </a>
                          <a href="#/" className="btn btn-secondary light mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              className="svg-main-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                  d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                                ></path>
                                <rect
                                  fill="#000000"
                                  opacity="0.3"
                                  x="5"
                                  y="20"
                                  width="15"
                                  height="2"
                                  rx="1"
                                ></rect>
                              </g>
                            </svg>
                          </a>
                          <a href="#/" className="btn btn-danger light">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              className="svg-main-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                  d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></path>
                                <path
                                  d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                  fill="#000000"
                                  opacity="0.3"
                                ></path>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Pooja Studios</td>
                      <td className="wspace-no">Full-Time</td>
                      <td>12-01-2021</td>
                      <td>24-01-2021</td>
                      <td>25-01-2021</td>
                      <td>
                        <span className="badge badge-danger badge-lg light">
                          InActive
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons d-flex justify-content-end">
                          <a href="#/" className="btn btn-success light mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="svg-main-icon"
                              width="24px"
                              height="24px"
                              viewBox="0 0 32 32"
                              x="0px"
                              y="0px"
                            >
                              <g data-name="Layer 21">
                                <path
                                  d="M29,14.47A15,15,0,0,0,3,14.47a3.07,3.07,0,0,0,0,3.06,15,15,0,0,0,26,0A3.07,3.07,0,0,0,29,14.47ZM16,21a5,5,0,1,1,5-5A5,5,0,0,1,16,21Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></path>
                                <circle
                                  cx="16"
                                  cy="16"
                                  r="3"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></circle>
                              </g>
                            </svg>
                          </a>
                          <a href="#/" className="btn btn-secondary light mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              className="svg-main-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                  d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                                ></path>
                                <rect
                                  fill="#000000"
                                  opacity="0.3"
                                  x="5"
                                  y="20"
                                  width="15"
                                  height="2"
                                  rx="1"
                                ></rect>
                              </g>
                            </svg>
                          </a>
                          <a href="#/" className="btn btn-danger light">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              className="svg-main-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                  d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></path>
                                <path
                                  d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                  fill="#000000"
                                  opacity="0.3"
                                ></path>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dashall.DashFooter />
    </Fragment>
  );
};

export default JobApplied;
