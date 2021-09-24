import React, { Fragment, useState } from "react";
import all from "../common/all";
import apis from "../../services/apiHandler";

const Forgot = () => {
  const [Sl, setSl] = useState({ email: "" });
  const [load, setLoad] = useState(false);
  const handleChange = (e) => {
    setSl({ ...Sl, [e.target.name]: e.target.value });
  };
  const clearstat = () => {
    setSl({ ...Sl, email: "" });
  };
  const forgott = async (e) => {
    e.preventDefault();
    setLoad(true);
    const logda = await apis("user", "forgot", Sl, true);
    if (logda.success) {
      clearstat();
    }
    setTimeout(() => {
      setLoad(false);
    }, 500);
  };

  return (
    <Fragment>
      <div>
        <all.Header />
        <all.PageTitle name="forgot password" img="" />
        <div className="login_wrapper jb_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="login_top_box jb_cover">
                  {/* <all.Banner name="login" /> */}
                  <div className="login_banner_wrapper">
                    <img
                      src="assets/images/gobo_logo.png"
                      className="img-fluid site-logo"
                      alt="logo"
                    />
                  </div>
                  <div className="login_form_wrapper">
                    <h2>forgot password</h2>
                    <form onSubmit={forgott}>
                      <all.inputs.Input
                        name="email"
                        label="envelope"
                        value={Sl.email}
                        type="text"
                        placeholder="Email Address*"
                        required
                        onChange={handleChange}
                      />
                      {load ? (
                        <all.inputs.Loader />
                      ) : (
                        <all.inputs.Button label="forgot password" />
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

export default Forgot;
