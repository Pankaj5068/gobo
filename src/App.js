import React from "react";
import pages from "./components/pages/pages";
import all from "./components/common/all";
import dash from "./components/dashboard/dash";

const App = () => {
  return (
    <all.Router>
      <all.Switch>
      <all.Route path="/" exact component={pages.Home} />
        <all.Route path="/notifications" exact component={dash.Notifications} />
        <all.Route path="/actprofile" component={dash.Profile} />
        <all.Route path="/actjobapplied" component={dash.JobApplied} />
        <all.Route path="/actjobauditions" component={dash.JobAuditions} />
        <all.Route path="/actwishlist" component={dash.WishList} />
        <all.Route path="/actshortlist" component={dash.ShortListed} />
        <all.Route path="/actmessages" component={dash.Messages} />
        <all.Route path="/actnotifs" component={dash.Notifications} />
        <all.Route path="/actdashboard" component={dash.Dashboard} />
        <all.Route path="/forgot" component={pages.Forgot} />
        <all.Route path="/contact" component={pages.ContactUs} />
        <all.Route path="/company" component={pages.Companies} />
        <all.Route path="/singcomp" component={pages.SingleCompany} />
        <all.Route path="/singblog" component={pages.SingleBlog} />
        <all.Route path="/singjob" component={pages.SingleJob} />
        <all.Route path="/blog" component={pages.Blog} />
        <all.Route path="/contact" component={pages.ContactUs} />
        <all.Route path="/pricing" component={pages.Pricing} />
        <all.Route path="/about" component={pages.AboutUs} />
        <all.Route path="/login" component={pages.Login} />
        <all.Route path="/signup" component={pages.Signup} />
        <all.Route path="/jobs" component={pages.Jobs} />
      </all.Switch>
    </all.Router>
  );
};

export default App;
