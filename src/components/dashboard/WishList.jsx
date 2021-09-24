import React, { Fragment } from "react";
import dashall from "./dashcomm/alldash";

const WishList = () => {
  return (
    <Fragment>
      <dashall.NavHeader />
      <dashall.DashHeader name="Wish List" />
      <dashall.Sidebar />
      <div class="content-body">
        <div class="container-fluid">
          <div class="row page-titles">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active">
                <a href="#/">Dashboard</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#/">Wishlist</a>
              </li>
            </ol>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-sm mb-0">
                      <thead>
                        <tr>
                          <th class="align-middle">
                            <div class="form-check custom-checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="checkAll"
                              />
                              <label
                                class="form-check-label"
                                for="checkAll"
                              ></label>
                            </div>
                          </th>
                          <th class="align-middle">Company</th>
                          <th class="align-middle pe-7">Last Date</th>
                          <th
                            class="align-middle"
                            style={{ minWidth: "12.5rem" }}
                          >
                            Address
                          </th>
                          <th class="align-middle text-end">Status</th>
                          <th class="no-sort"></th>
                        </tr>
                      </thead>
                      <tbody id="orders">
                        <tr class="btn-reveal-trigger">
                          <td class="py-2">
                            <div class="form-check custom-checkbox checkbox-success">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="checkbox"
                              />
                              <label
                                class="form-check-label"
                                for="checkbox"
                              ></label>
                            </div>
                          </td>
                          <td class="py-2">
                            <a href="#/">
                              <strong>Mavel Studios</strong>
                            </a>
                          </td>
                          <td class="py-2">20/04/2020</td>
                          <td class="py-2">
                            Ricky Antony, 2392 Main Avenue, Penasauka, New
                            Jersey 02149
                            <p class="mb-0 text-500">Via Flat Rate</p>
                          </td>
                          <td class="py-2 text-end">
                            <span class="badge badge-success">Active</span>
                          </td>

                          <td class="py-2 text-end">
                            <div class="dropdown text-sans-serif">
                              <button
                                class="btn btn-primary tp-btn-light sharp"
                                type="button"
                                id="order-dropdown-0"
                                data-bs-toggle="dropdown"
                                data-boundary="viewport"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18px"
                                    height="18px"
                                    viewbox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <rect
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="24"
                                      ></rect>
                                      <circle
                                        fill="#000000"
                                        cx="5"
                                        cy="12"
                                        r="2"
                                      ></circle>
                                      <circle
                                        fill="#000000"
                                        cx="12"
                                        cy="12"
                                        r="2"
                                      ></circle>
                                      <circle
                                        fill="#000000"
                                        cx="19"
                                        cy="12"
                                        r="2"
                                      ></circle>
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div
                                class="dropdown-menu dropdown-menu-end border py-0"
                                aria-labelledby="order-dropdown-0"
                              >
                                <div class="py-2">
                                  <a class="dropdown-item" href="#/;">
                                    Completed
                                  </a>
                                  <a class="dropdown-item" href="#/;">
                                    Processing
                                  </a>
                                  <a class="dropdown-item" href="#/;">
                                    On Hold
                                  </a>
                                  <a class="dropdown-item" href="#/;">
                                    Pending
                                  </a>
                                  <div class="dropdown-divider"></div>
                                  <a
                                    class="dropdown-item text-danger"
                                    href="#/;"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="btn-reveal-trigger">
                          <td class="py-2">
                            <div class="form-check custom-checkbox checkbox-success">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="checkbox"
                              />
                              <label
                                class="form-check-label"
                                for="checkbox"
                              ></label>
                            </div>
                          </td>
                          <td class="py-2">
                            <a href="#/">
                              <strong>Mavel Studios</strong>
                            </a>
                          </td>
                          <td class="py-2">20/04/2020</td>
                          <td class="py-2">
                            Ricky Antony, 2392 Main Avenue, Penasauka, New
                            Jersey 02149
                            <p class="mb-0 text-500">Via Flat Rate</p>
                          </td>
                          <td class="py-2 text-end">
                            <span class="badge badge-danger">Closed</span>
                          </td>

                          <td class="py-2 text-end">
                            <div class="dropdown text-sans-serif">
                              <button
                                class="btn btn-primary tp-btn-light sharp"
                                type="button"
                                id="order-dropdown-0"
                                data-bs-toggle="dropdown"
                                data-boundary="viewport"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18px"
                                    height="18px"
                                    viewbox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <rect
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="24"
                                      ></rect>
                                      <circle
                                        fill="#000000"
                                        cx="5"
                                        cy="12"
                                        r="2"
                                      ></circle>
                                      <circle
                                        fill="#000000"
                                        cx="12"
                                        cy="12"
                                        r="2"
                                      ></circle>
                                      <circle
                                        fill="#000000"
                                        cx="19"
                                        cy="12"
                                        r="2"
                                      ></circle>
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div
                                class="dropdown-menu dropdown-menu-end border py-0"
                                aria-labelledby="order-dropdown-0"
                              >
                                <div class="py-2">
                                  <a class="dropdown-item" href="#/;">
                                    Completed
                                  </a>
                                  <a class="dropdown-item" href="#/;">
                                    Processing
                                  </a>
                                  <a class="dropdown-item" href="#/;">
                                    On Hold
                                  </a>
                                  <a class="dropdown-item" href="#/;">
                                    Pending
                                  </a>
                                  <div class="dropdown-divider"></div>
                                  <a
                                    class="dropdown-item text-danger"
                                    href="#/;"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="btn-reveal-trigger">
                          <td class="py-2">
                            <div class="form-check custom-checkbox checkbox-success">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="checkbox"
                              />
                              <label
                                class="form-check-label"
                                for="checkbox"
                              ></label>
                            </div>
                          </td>
                          <td class="py-2">
                            <a href="#/">
                              <strong>Mavel Studios</strong>
                            </a>
                          </td>
                          <td class="py-2">20/04/2020</td>
                          <td class="py-2">
                            Ricky Antony, 2392 Main Avenue, Penasauka, New
                            Jersey 02149
                            <p class="mb-0 text-500">Via Flat Rate</p>
                          </td>
                          <td class="py-2 text-end">
                            <span class="badge badge-success">Active</span>
                          </td>

                          <td class="py-2 text-end">
                            <div class="dropdown text-sans-serif">
                              <button
                                class="btn btn-primary tp-btn-light sharp"
                                type="button"
                                id="order-dropdown-0"
                                data-bs-toggle="dropdown"
                                data-boundary="viewport"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18px"
                                    height="18px"
                                    viewbox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <rect
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="24"
                                      ></rect>
                                      <circle
                                        fill="#000000"
                                        cx="5"
                                        cy="12"
                                        r="2"
                                      ></circle>
                                      <circle
                                        fill="#000000"
                                        cx="12"
                                        cy="12"
                                        r="2"
                                      ></circle>
                                      <circle
                                        fill="#000000"
                                        cx="19"
                                        cy="12"
                                        r="2"
                                      ></circle>
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div
                                class="dropdown-menu dropdown-menu-end border py-0"
                                aria-labelledby="order-dropdown-0"
                              >
                                <div class="py-2">
                                  <a class="dropdown-item" href="#/;">
                                    Completed
                                  </a>
                                  <a class="dropdown-item" href="#/;">
                                    Processing
                                  </a>
                                  <a class="dropdown-item" href="#/;">
                                    On Hold
                                  </a>
                                  <a class="dropdown-item" href="#/;">
                                    Pending
                                  </a>
                                  <div class="dropdown-divider"></div>
                                  <a
                                    class="dropdown-item text-danger"
                                    href="#/;"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="btn-reveal-trigger">
                          <td class="py-2">
                            <div class="form-check custom-checkbox checkbox-success">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="checkbox"
                              />
                              <label
                                class="form-check-label"
                                for="checkbox"
                              ></label>
                            </div>
                          </td>
                          <td class="py-2">
                            <a href="#/">
                              <strong>Mavel Studios</strong>
                            </a>
                          </td>
                          <td class="py-2">20/04/2020</td>
                          <td class="py-2">
                            Ricky Antony, 2392 Main Avenue, Penasauka, New
                            Jersey 02149
                            <p class="mb-0 text-500">Via Flat Rate</p>
                          </td>
                          <td class="py-2 text-end">
                            <span class="badge badge-success">Active</span>
                          </td>

                          <td class="py-2 text-end">
                            <div class="dropdown text-sans-serif">
                              <button
                                class="btn btn-primary tp-btn-light sharp"
                                type="button"
                                id="order-dropdown-0"
                                data-bs-toggle="dropdown"
                                data-boundary="viewport"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18px"
                                    height="18px"
                                    viewbox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <rect
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="24"
                                      ></rect>
                                      <circle
                                        fill="#000000"
                                        cx="5"
                                        cy="12"
                                        r="2"
                                      ></circle>
                                      <circle
                                        fill="#000000"
                                        cx="12"
                                        cy="12"
                                        r="2"
                                      ></circle>
                                      <circle
                                        fill="#000000"
                                        cx="19"
                                        cy="12"
                                        r="2"
                                      ></circle>
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div
                                class="dropdown-menu dropdown-menu-end border py-0"
                                aria-labelledby="order-dropdown-0"
                              >
                                <div class="py-2">
                                  <a class="dropdown-item" href="#/;">
                                    Completed
                                  </a>
                                  <a class="dropdown-item" href="#/;">
                                    Processing
                                  </a>
                                  <a class="dropdown-item" href="#/;">
                                    On Hold
                                  </a>
                                  <a class="dropdown-item" href="#/;">
                                    Pending
                                  </a>
                                  <div class="dropdown-divider"></div>
                                  <a
                                    class="dropdown-item text-danger"
                                    href="#/;"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="btn-reveal-trigger">
                          <td class="py-2">
                            <div class="form-check custom-checkbox checkbox-success">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="checkbox"
                              />
                              <label
                                class="form-check-label"
                                for="checkbox"
                              ></label>
                            </div>
                          </td>
                          <td class="py-2">
                            <a href="#/">
                              <strong>Mavel Studios</strong>
                            </a>
                          </td>
                          <td class="py-2">20/04/2020</td>
                          <td class="py-2">
                            Ricky Antony, 2392 Main Avenue, Penasauka, New
                            Jersey 02149
                            <p class="mb-0 text-500">Via Flat Rate</p>
                          </td>
                          <td class="py-2 text-end">
                            <span class="badge badge-success">Active</span>
                          </td>

                          <td class="py-2 text-end">
                            <div class="dropdown text-sans-serif">
                              <button
                                class="btn btn-primary tp-btn-light sharp"
                                type="button"
                                id="order-dropdown-0"
                                data-bs-toggle="dropdown"
                                data-boundary="viewport"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18px"
                                    height="18px"
                                    viewbox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <rect
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="24"
                                      ></rect>
                                      <circle
                                        fill="#000000"
                                        cx="5"
                                        cy="12"
                                        r="2"
                                      ></circle>
                                      <circle
                                        fill="#000000"
                                        cx="12"
                                        cy="12"
                                        r="2"
                                      ></circle>
                                      <circle
                                        fill="#000000"
                                        cx="19"
                                        cy="12"
                                        r="2"
                                      ></circle>
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div
                                class="dropdown-menu dropdown-menu-end border py-0"
                                aria-labelledby="order-dropdown-0"
                              >
                                <div class="py-2">
                                  <a class="dropdown-item" href="#/;">
                                    Completed
                                  </a>
                                  <a class="dropdown-item" href="#/;">
                                    Processing
                                  </a>
                                  <a class="dropdown-item" href="#/;">
                                    On Hold
                                  </a>
                                  <a class="dropdown-item" href="#/;">
                                    Pending
                                  </a>
                                  <div class="dropdown-divider"></div>
                                  <a
                                    class="dropdown-item text-danger"
                                    href="#/;"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
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
        </div>
      </div>
      <dashall.DashFooter />
    </Fragment>
  );
};

export default WishList;
