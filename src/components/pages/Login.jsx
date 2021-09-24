import React, { Fragment, useState } from "react";
import all from "../common/all";
import apis from "../../services/apiHandler";

const Login = () => {
  const [Sl, setSl] = useState({ email: "", password: "", userRole: "Artist" });
  const [load, setLoad] = useState(false);
  const handleChange = (e) => {
    setSl({ ...Sl, [e.target.name]: e.target.value });
  };
  const clearstat = () => {
    setSl({ ...Sl, email: "", password: "", userRole: "Artist" });
  };
  const loggin = async (e) => {
    e.preventDefault();
    setLoad(true);
    const logda = await apis("user", "login", Sl, true);
    if (logda.success) {
      clearstat();
      localStorage.setItem("token", logda.token);
    }
    setTimeout(() => {
      setLoad(false);
    }, 500);
  };

  return (
    <Fragment>
      <div>
        <all.Header />
        <all.PageTitle name="login" img="" />
        <div className="login_wrapper jb_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="login_top_box jb_cover">
                  <all.Banner name="login" />
                  <div className="login_form_wrapper">
                    <h2>login</h2>
                    <form onSubmit={loggin}>
                      <all.inputs.Input
                        name="email"
                        label="envelope"
                        value={Sl.email}
                        type="text"
                        placeholder="Email Address*"
                        required
                        onChange={handleChange}
                      />
                      <all.inputs.Input
                        name="password"
                        label="lock"
                        value={Sl.password}
                        type="password"
                        placeholder="Password*"
                        required
                        onChange={handleChange}
                      />
                      <div className="form-group icon_form comments_form">
                        <all.inputs.Radio
                          label="Artist"
                          type="radio"
                          name="userRole"
                          id="userRole1"
                          value="Artist"
                          defaultChecked={Sl.userRole === "Artist"}
                          onChange={handleChange}
                        />
                        <all.inputs.Radio
                          label="Producer"
                          value="Producer"
                          type="radio"
                          name="userRole"
                          id="userRole2"
                          defaultChecked={Sl.userRole === "Producer"}
                          onChange={handleChange}
                        />
                        <all.inputs.Radio
                          label="Partner"
                          value="Partner"
                          type="radio"
                          name="userRole"
                          id="userRole3"
                          defaultChecked={Sl.userRole === "Partner"}
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
                        <all.inputs.Button label="login" />
                      )}
                      <div className="dont_have_account jb_cover mt-4">
                        <p>
                          Don’t have an acount ? &nbsp;
                          <all.Link to="/signup">Sign up</all.Link>
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

export default Login;
