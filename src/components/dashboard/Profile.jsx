import React, { Fragment } from "react";
import dashall from "./dashcomm/alldash";

const Profile = () => {
  return (
    <Fragment>
      <dashall.NavHeader />
      <dashall.DashHeader name="Actor Profile" />
      <dashall.Sidebar />
      <div className="content-body">
        <div className="container-fluid">
          <div className="d-flex align-items-center mb-4">
            <h4 className="fs-20 font-w600 mb-0 me-auto">Personal Details</h4>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-6  col-md-6 mb-4">
                      <label className="form-label font-w600">
                        First Name
                        <span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control solid"
                        placeholder="First Name"
                        aria-label="name"
                      />
                    </div>
                    <div className="col-xl-6  col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Last Name
                        <span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control solid"
                        placeholder="Last Name"
                        aria-label="name"
                      />
                    </div>

                    <div className="col-xl-6  col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Email Address
                        <span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control solid"
                        placeholder="Email"
                        aria-label="name"
                      />
                    </div>
                    <div className="col-xl-6  col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Phone Number
                        <span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control solid"
                        placeholder="Number"
                        aria-label="name"
                      />
                    </div>

                    <div className="col-xl-6  col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Job Category
                        <span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <select className="form-select form-control solid">
                        <option selected="">Choose...</option>
                        <option>Movie</option>
                        <option>Television</option>
                        <option>Music</option>
                        <option>Modelling</option>
                      </select>
                    </div>
                    <div className="col-xl-6  col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Gender<span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <select className="form-select form-control solid">
                        <option selected="">Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Country
                        <span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <select className="form-select form-control solid">
                        <option selected="">Choose</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                      </select>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-4">
                      <label className="form-label font-w600">
                        City<span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <select className="form-select form-control solid">
                        <option selected="">Choose</option>
                        <option>Mumbai</option>
                        <option>Kolkata</option>
                        <option>Delhi</option>
                        <option>Bangalore</option>
                      </select>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-4">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="customFile"
                        />
                        <label className="custom-file-label" for="customFile">
                          Choose file
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-end">
                  <div>
                    <a href="#/" className="btn btn-primary me-3">
                      Cancel
                    </a>
                    <a href="#/" className="btn btn-secondary">
                      Update
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center mb-4">
            <h4 className="fs-20 font-w600 mb-0 me-auto">Physical Details</h4>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-6  col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Weight<span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <div className="input-group">
                        <div className="input-group-text">
                          <i className="fas fa-weight"></i>
                        </div>
                        <input
                          size="16"
                          type="text"
                          value="55kg"
                          readonly=""
                          className="form-control form_datetime solid"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6  col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Height<span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <div className="input-group">
                        <div className="input-group-text">
                          <i className="fas fa-male"></i>
                        </div>
                        <input
                          size="16"
                          type="text"
                          value="170cm"
                          readonly=""
                          className="form-control form_datetime solid"
                        />
                      </div>
                    </div>

                    <div className="col-xl-6  col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Complexity
                        <span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <select className="form-select form-control solid">
                        <option selected="">Choose...</option>
                        <option>Fair</option>
                        <option>Blonde</option>
                        <option>Brown</option>
                        <option>Dark</option>
                      </select>
                    </div>
                    <div className="col-xl-6  col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Hair Color
                        <span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <select className="form-select form-control solid">
                        <option selected="">Choose...</option>
                        <option>Black</option>
                        <option>Red</option>
                      </select>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Eye Color
                        <span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <select className="form-select form-control solid">
                        <option selected="">Choose</option>
                        <option>Brown</option>
                        <option>Grey</option>
                        <option>Black</option>
                      </select>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Hips<span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <select className="form-select form-control solid">
                        <option selected="">Choose</option>
                        <option>--</option>
                        <option>--</option>
                      </select>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Waist<span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <select className="form-select form-control solid">
                        <option selected="">Choose</option>
                        <option>--</option>
                        <option>--</option>
                      </select>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Chest<span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <select className="form-select form-control solid">
                        <option selected="">Choose</option>
                        <option>--</option>
                        <option>--</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-end">
                  <div>
                    <a href="#/" className="btn btn-primary me-3">
                      Close
                    </a>
                    <a href="#/" className="btn btn-secondary">
                      Update
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center mb-4">
            <h4 className="fs-20 font-w600 mb-0 me-auto">Skills</h4>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-6  col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Language
                        <span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <select className="form-select form-control solid">
                        <option selected="">Choose...</option>
                        <option>Hindi</option>
                        <option>Bengali</option>
                        <option>English</option>
                      </select>
                    </div>
                    <div className="col-xl-6  col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Television Language
                        <span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <select className="form-select form-control solid">
                        <option selected="">Choose...</option>
                        <option>Hindi</option>
                        <option>Bengali</option>
                        <option>English</option>
                      </select>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Music Language
                        <span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <select className="form-select form-control solid">
                        <option selected="">Choose</option>
                        <option>Hindi</option>
                        <option>Bengali</option>
                        <option>English</option>
                      </select>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Hips<span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <select className="form-select form-control solid">
                        <option selected="">Choose</option>
                        <option>--</option>
                        <option>--</option>
                      </select>
                    </div>
                    <div className="col-xl-6  col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Qualification
                        <span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control solid"
                        placeholder="Eg:Diploma in Acting"
                        aria-label="name"
                      />
                    </div>
                    <div className="col-xl-6 col-md-6 mb-4">
                      <label className="form-label font-w600">
                        Expertise
                        <span className="text-danger scale5 ms-2">*</span>
                      </label>
                      <select className="form-select form-control solid">
                        <option selected="">Choose</option>
                        <option>--</option>
                        <option>--</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-end">
                  <div>
                    <a href="#/" className="btn btn-primary me-3">
                      Close
                    </a>
                    <a href="#/" className="btn btn-secondary">
                      Update
                    </a>
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

export default Profile;
