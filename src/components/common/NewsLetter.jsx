import React, { Fragment } from "react";

const NewsLetter = () => {
  return (
    <Fragment>
      <div className="news_letter_wrapper jb_cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="job_newsletter_wrapper jb_cover">
                <div className="jb_newslwtteter_left">
                  <h2> Looking For A Job</h2>
                  <p>
                    Your next level Product developemnt company assetsYour next
                    level Product
                  </p>
                </div>
                <div className="jb_newslwtteter_button">
                  <div className="header_btn search_btn news_btn jb_cover">
                    <a href="#/">submit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewsLetter;
