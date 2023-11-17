import React from 'react';
import { Link } from 'react-router-dom';

const ApplicantLeftNavBar = () => {
  return (
    <div className="left-menu">
      {/* Sidemenu */}
      <div id="sidebar-menu">
        <ul className="downmenu list-unstyled" id="side-menu">
          <li>
            <Link to="/applicanthome" className="tf-effect">
              <span className="icon-dashboard dash-icon"></span>
              <span className="dash-titles">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="has-arrow tf-effect">
              <span className="icon-profile dash-icon"></span>
              <span className="dash-titles">Profile</span>
            </Link>
            <ul className="sub-menu2" aria-expanded="false">
              <li><Link to="/applicant-overview">Overview</Link></li>
              <li><Link to="/applicant-update-profile">Update Profile</Link></li>
            </ul>
          </li>
         

          <li>
            <Link to="/resumes" className="tf-effect">
              <span className="icon-resumes dash-icon"></span>
              <span className="dash-titles">Resumes</span>
            </Link>
          </li>

          <li>
            <Link to="/my-applied" className="tf-effect">
              <span className="icon-my-apply dash-icon"></span>
              <span className="dash-titles">My Applied</span>
            </Link>
          </li>

          <li>
            <Link to="/saved-jobs" className="tf-effect">
              <span className="icon-work dash-icon"></span>
              <span className="dash-titles">Saved Jobs</span>
            </Link>
          </li>

          <li>
            <Link to="/alerts-jobs" className="tf-effect">
              <span className="icon-bell1 dash-icon"></span>
              <span className="dash-titles">Alerts Jobs</span>
            </Link>
          </li>

          <li>
            <Link to="/messages" className="tf-effect">
              <span className="icon-chat dash-icon"></span>
              <span className="dash-titles">Messages</span>
            </Link>
          </li>

          <li>
            <Link to="/following-employers" className="tf-effect">
              <span className="icon-following dash-icon"></span>
              <span className="dash-titles">Following Employers</span>
            </Link>
          </li>

          <li>
            <Link to="/meetings" className="tf-effect">
              <span className="icon-meeting dash-icon"></span>
              <span className="dash-titles">Meeting</span>
            </Link>
          </li>

          <li>
            <Link to="/change-passwords" className="tf-effect">
              <span className="icon-change-passwords dash-icon"></span>
              <span className="dash-titles">Change passwords</span>
            </Link>
          </li>

          <li>
            <Link to="/delete-profile" className="tf-effect">
              <span className="icon-trash dash-icon"></span>
              <span className="dash-titles">Delete Profile</span>
            </Link>
          </li>

          <li>
            <Link to="/logout" className="tf-effect">
              <span className="icon-log-out dash-icon"></span>
              <span className="dash-titles">Log out</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ApplicantLeftNavBar;
