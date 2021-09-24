import React, { Fragment } from "react";
import all from "../common/all";

const Pricing = () => {
  return (
    <Fragment>
      <div>
        <all.Header name="pricing" />
        <all.PageTitle name="Pricing" />

        <div className="pricing_plan_wrapper jb_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                <div className="jb_heading_wraper">
                  <h3>choose pricing plan</h3>

                  <p>Your next level Product developemnt company assets</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="pricing_box_wrapper jb_cover">
                  <h1>basic plan</h1>
                  <div className="main_pdet jb_cover">
                    <h2>
                      <span className="dollarr"> $ </span> 29
                    </h2>
                    <span className="monthly"> / per month</span>
                  </div>
                  <ul className="pricing_list22">
                    <li>5 Jobs Posting</li>
                    <li>2 Featured jobs</li>
                    <li>1 Renew Jobs</li>
                    <li>10 Days Duration</li>
                    <li>Email Alert</li>
                  </ul>
                  <a href="#/" className="price_btn">
                    select plan
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="pricing_box_wrapper jb_cover">
                  <h1>premium plan</h1>
                  <div className="main_pdet jb_cover">
                    <h2>
                      <span className="dollarr"> $ </span> 49
                    </h2>
                    <span className="monthly"> / per month</span>
                  </div>
                  <ul className="pricing_list22">
                    <li>5 Jobs Posting</li>
                    <li>2 Featured jobs</li>
                    <li>1 Renew Jobs</li>
                    <li>10 Days Duration</li>
                    <li>Email Alert</li>
                  </ul>
                  <a href="#/" className="price_btn">
                    select plan
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="pricing_box_wrapper jb_cover">
                  <h1>advanced plan</h1>
                  <div className="main_pdet jb_cover">
                    <h2>
                      <span className="dollarr"> $ </span> 69
                    </h2>
                    <span className="monthly"> / per month</span>
                  </div>
                  <ul className="pricing_list22">
                    <li>5 Jobs Posting</li>
                    <li>2 Featured jobs</li>
                    <li>1 Renew Jobs</li>
                    <li>10 Days Duration</li>
                    <li>Email Alert</li>
                  </ul>
                  <a href="#/" className="price_btn">
                    select plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="download_wrapper jb_cover">
          <div className="counter_overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="download_mockup_design jb_cover">
                  <div className="animation-circle-inverse2">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <img
                    src="assets/images/mockup5.png"
                    className="img-responsive"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="download_app_store jb_cover">
                  <h1>Download</h1>
                  <h2>Job Portal App Now!</h2>
                  <p>
                    All it takes is 30 seconds to Download. Your Mobile App for
                    Job
                    <br /> Fast, Simple & Delightful.
                  </p>
                  <div className="app_btn jb_cover">
                    <a href="#/" className="ss_playstore">
                      <span>
                        <i className="flaticon-android-logo"></i>
                      </span>
                      Play Store
                    </a>
                    <a href="#/" className="ss_appstore">
                      <span>
                        <i className="flaticon-apple"></i>
                      </span>
                      App Store
                    </a>
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

export default Pricing;
