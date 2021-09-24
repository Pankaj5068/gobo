import React, { Fragment, useState } from "react";
import apis from "../../services/apiHandler";
import all from "../common/all";

const Signup = () => {
  const [Sp, setSp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "male",
    password: "",
    phone: "",
    userRole: "Artist",
  });
  const [load, setLoad] = useState(false);
  const handleChange = (e) => {
    setSp({ ...Sp, [e.target.name]: e.target.value });
  };
  const handleReg = async (e) => {
    e.preventDefault();
    setLoad(true);
    const regdat = await apis("user", "register", Sp, true);
    if (regdat.success) {
      cleast();
    }
    setTimeout(() => {
      setLoad(false);
    }, 500);
  };
  const cleast = () => {
    setSp({
      ...Sp,
      firstName: "",
      lastName: "",
      email: "",
      gender: "male",
      password: "",
      phone: "",
      userRole: "Artist",
    });
  };
  return (
    <Fragment>
      <div>
        <all.Header name="singup" />
        <all.PageTitle name="Sign Up" />
        <div className="login_wrapper jb_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="login_top_box jb_cover">
                  <all.Banner name="sing up" />
                  <div className="login_form_wrapper signup_wrapper">
                    <h2>sign up</h2>
                    <form onSubmit={handleReg}>
                      <all.inputs.Input
                        label="user"
                        placeholder="First Name*"
                        required
                        type="text"
                        name="firstName"
                        value={Sp.firstName}
                        onChange={handleChange}
                      />
                      <all.inputs.Input
                        label="user"
                        placeholder="Last Name*"
                        required
                        type="text"
                        name="lastName"
                        value={Sp.lastName}
                        onChange={handleChange}
                      />
                      <all.inputs.Input
                        label="envelope"
                        placeholder="Email Address*"
                        required
                        type="text"
                        name="email"
                        value={Sp.email}
                        onChange={handleChange}
                      />
                      <all.inputs.Input
                        label="lock"
                        placeholder="Password*"
                        required
                        type="password"
                        name="password"
                        value={Sp.password}
                        onChange={handleChange}
                      />
                      <div className="form-group icon_form comments_form">
                        <all.inputs.Radio
                          name="gender"
                          value="male"
                          id="gender1"
                          type="radio"
                          label="Male"
                          defaultChecked
                          onChange={handleChange}
                        />
                        <all.inputs.Radio
                          name="gender"
                          value="female"
                          id="gender2"
                          type="radio"
                          label="Female"
                          onChange={handleChange}
                        />
                      </div>
                      <all.inputs.Input
                        label="phone"
                        name="phone"
                        required
                        type="number"
                        placeholder="Phone Number*"
                        value={Sp.phone}
                        onChange={handleChange}
                      />
                      <div className="form-group icon_form comments_form">
                        <all.inputs.Radio
                          label="Artist"
                          type="radio"
                          name="userRole"
                          id="userRole1"
                          value="Artist"
                          defaultChecked={Sp.userRole === "Artist"}
                          onChange={handleChange}
                        />
                        <all.inputs.Radio
                          label="Producer"
                          value="Producer"
                          type="radio"
                          name="userRole"
                          id="userRole2"
                          defaultChecked={Sp.userRole === "Producer"}
                          onChange={handleChange}
                        />
                        <all.inputs.Radio
                          label="Partner"
                          value="Partner"
                          type="radio"
                          name="userRole"
                          id="userRole3"
                          defaultChecked={Sp.userRole === "Partner"}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="login_remember_box">
                        <label className="control control--checkbox">
                          Remember me
                          <input type="checkbox" />
                          <span className="control__indicator"></span>
                        </label>
                        <all.Link to="/forgot" className="forget_password">
                          Forgot Password
                        </all.Link>
                      </div>
                      {load ? (
                        <all.inputs.Loader />
                      ) : (
                        <all.inputs.Button label="sign up" />
                      )}
                      <div className="dont_have_account jb_cover mt-4">
                        <p>
                          Already Have an acount ? &nbsp;
                          <all.Link to="/login">Login</all.Link>
                        </p>
                      </div>
                    </form>
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

export default Signup;
