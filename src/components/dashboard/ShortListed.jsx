import React, { Fragment } from "react";
import dashall from "./dashcomm/alldash";

const ShortListed = () => {
  return (
    <Fragment>
      <dashall.NavHeader />
      <dashall.DashHeader name="Short Listed" />
      <dashall.Sidebar />
      <div class="content-body">
        <div class="container-fluid">
          <div class="d-flex align-items-center mb-4 flex-wrap">
            <h4 class="fs-20 font-w600 me-auto">Job Application</h4>
            <div>
              <a href="new-job.html" class="btn btn-primary me-3 btn-sm">
                <i class="fas fa-plus me-2"></i>Add New Job
              </a>
              <a href="#/" class="btn btn-secondary btn-sm me-3">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="#/" class="btn btn-secondary btn-sm me-3">
                <i class="fas fa-phone-alt"></i>
              </a>
              <a href="#/" class="btn btn-secondary btn-sm">
                <i class="fas fa-info"></i>
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12">
              <div class="table-responsive">
                <table
                  class="table display mb-4 dataTablesCard job-table table-responsive-xl card-table"
                  id="example5"
                >
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Company</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Posted On</th>
                      <th>Applied On</th>
                      <th>Status</th>
                      <th class="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td class="wspace-no">Marvel Studio</td>
                      <td>marvelstudios@gmail.com</td>
                      <td>1234598765</td>
                      <td>24-01-2021</td>
                      <td>24-01-2021</td>
                      <td>
                        <span class="btn btn-success btn-sm btn-rounded">
                          Accepted
                        </span>
                      </td>
                      <td class="action-btn wspace-no">
                        <span>
                          <a href="#/">
                            <i class="fas fa-check text-success"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="fas fa-times text-danger"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="fas fa-eye"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="far fa-trash-alt text-danger"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="fas fa-download text-warning"></i>
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>1.</td>
                      <td class="wspace-no">Ganesh Studio</td>
                      <td>marvelstudios@gmail.com</td>
                      <td>1234598765</td>
                      <td>24-01-2021</td>
                      <td>24-01-2021</td>
                      <td>
                        <span class="btn btn-danger btn-sm btn-rounded">
                          Rejected
                        </span>
                      </td>
                      <td class="action-btn wspace-no">
                        <span>
                          <a href="#/">
                            <i class="fas fa-check text-success"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="fas fa-times text-danger"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="fas fa-eye"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="far fa-trash-alt text-danger"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="fas fa-download text-warning"></i>
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>1.</td>
                      <td class="wspace-no">Khan Studio</td>
                      <td>marvelstudios@gmail.com</td>
                      <td>1234598765</td>
                      <td>24-01-2021</td>
                      <td>24-01-2021</td>
                      <td>
                        <span class="btn btn-warning btn-sm btn-rounded">
                          Pending
                        </span>
                      </td>
                      <td class="action-btn wspace-no">
                        <span>
                          <a href="#/">
                            <i class="fas fa-check text-success"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="fas fa-times text-danger"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="fas fa-eye"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="far fa-trash-alt text-danger"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="fas fa-download text-warning"></i>
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>1.</td>
                      <td class="wspace-no">XYZ Studio</td>
                      <td>marvelstudios@gmail.com</td>
                      <td>1234598765</td>
                      <td>24-01-2021</td>
                      <td>24-01-2021</td>
                      <td>
                        <span class="btn btn-warning btn-sm btn-rounded">
                          Pending
                        </span>
                      </td>
                      <td class="action-btn wspace-no">
                        <span>
                          <a href="#/">
                            <i class="fas fa-check text-success"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="fas fa-times text-danger"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="fas fa-eye"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="far fa-trash-alt text-danger"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="fas fa-download text-warning"></i>
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>1.</td>
                      <td class="wspace-no">Dharma Studio</td>
                      <td>marvelstudios@gmail.com</td>
                      <td>1234598765</td>
                      <td>24-01-2021</td>
                      <td>24-01-2021</td>
                      <td>
                        <span class="btn btn-warning btn-sm btn-rounded">
                          Pending
                        </span>
                      </td>
                      <td class="action-btn wspace-no">
                        <span>
                          <a href="#/">
                            <i class="fas fa-check text-success"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="fas fa-times text-danger"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="fas fa-eye"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="far fa-trash-alt text-danger"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#/">
                            <i class="fas fa-download text-warning"></i>
                          </a>
                        </span>
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

export default ShortListed;
