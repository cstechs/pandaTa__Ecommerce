import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserImage from "../../../assets/images/admin/users/user-2.jpg";
import SmLogo from "../../../assets/images/admin/logo-sm.png";
import LeftBar from "./leftsidebar";

const Navbar = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  function toggle() {
    document.getElementById("leftbar").classList.toggle("hideleftbar");
    document.getElementById("pandlogo").classList.toggle("hidelogo");
    document.getElementById("logoBox").classList.toggle("hidelogobox");
    document.getElementById("searchbox").classList.toggle("fullbox");
    document.getElementById("content").classList.toggle("fullcontent");

    var leftbaricon = document.getElementsByClassName("leftbar_icon");
    for (var i = 0; i < leftbaricon.length; i++) {
      leftbaricon[i].classList.toggle("showicon");
    }
  }

  return (
    <>
      <div className="navbar-custom">
        <div className="container-fluid">
          <ul className="list-unstyled topnav-menu float-right mb-0">
            <li className="d-none d-lg-block">
              <form className="app-search">
                <div className="app-search-box dropdown">
                  <div className="input-group search_input" id="searchbox">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search transactions, invoices or help "
                      id="top-search"
                    />
                    <div className="input-group-append">
                      <button className="btn" type="submit">
                        <i className="fe-search" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </li>
            <li className="dropdown d-inline-block d-lg-none">
              <span
                className="nav-link dropdown-tog arrow-none waves-effect waves-light"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="fe-search noti-icon" alt="" />
              </span>
              <div className="dropdown-menu dropdown-lg dropdown-menu-right p-0">
                <form className="p-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search ..."
                    aria-label="Recipient's username"
                  />
                </form>
              </div>
            </li>
            <li className="dropdown message-list notification-list topbar-dropdown">
              <span
                className="nav-link dropdown-tog waves-effect waves-light ripple button-base"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="fe-message-square noti-icon" alt="" />
                <span className="badge badge-danger rounded-circle noti-icon-badge">
                  0
                </span>
              </span>
              <div className="dropdown-menu dropdown-menu-right dropdown-lg">
                <div className="dropdown-item noti-title">
                  <h5 className="m-0">
                    <span className="float-right">
                      <span className="text-dark">
                        <small>Clear All</small>
                      </span>
                    </span>
                    Messages
                  </h5>
                </div>
                <div className="noti-scroll" data-simplebar>
                  <span className="dropdown-item notify-item">
                    <div className="notify-icon bg-primary">
                      <i className="mdi mdi-comment-account-outline" alt="" />
                    </div>
                    <p className="notify-details">
                      Caleb Flakelar commented on Admin
                      <small className="text-muted">1 min ago</small>
                    </p>
                  </span>
                  <span className="dropdown-item notify-item">
                    <div className="notify-icon bg-secondary">
                      <i className="mdi mdi-heart" alt="" />
                    </div>
                    <p className="notify-details">
                      Carlos Crouch liked
                      <b>Admin</b>
                      <small className="text-muted">13 days ago</small>
                    </p>
                  </span>
                </div>
                <span className="dropdown-item text-center text-primary notify-item notify-all">
                  View all
                  <i className="fe-arrow-right" alt="" />
                </span>
              </div>
            </li>
            <li className="dropdown notification-list topbar-dropdown">
              <span
                className="nav-link dropdown-tog waves-effect waves-light ripple button-base"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="fe-bell noti-icon" alt="" />
                <span className="badge badge-danger rounded-circle noti-icon-badge">
                  0
                </span>
              </span>
              <div className="dropdown-menu dropdown-menu-right dropdown-lg">
                <div className="dropdown-item noti-title">
                  <h5 className="m-0">
                    <span className="float-right">
                      <span className="text-dark">
                        <small>Clear All</small>
                      </span>
                    </span>
                    Notification
                  </h5>
                </div>
                <div className="noti-scroll" data-simplebar>
                  <span className="dropdown-item notify-item active">
                    <div className="notify-icon">
                      <img
                        src={UserImage}
                        className="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <p className="notify-details">Cristina Pride</p>
                    <p className="text-muted mb-0 user-msg">
                      <small>
                        Hi, How are you? What about our next meeting
                      </small>
                    </p>
                  </span>
                  <span className="dropdown-item notify-item">
                    <div className="notify-icon bg-secondary">
                      <i className="mdi mdi-heart" alt="" />
                    </div>
                    <p className="notify-details">
                      Carlos Crouch liked
                      <b>Admin</b>
                      <small className="text-muted">13 days ago</small>
                    </p>
                  </span>
                </div>
                <span className="dropdown-item text-center text-primary notify-item notify-all">
                  View all
                  <i className="fe-arrow-right" alt="" />
                </span>
              </div>
            </li>
            <li className="dropdown notification-list topbar-dropdown">
              <span
                className="nav-link dropdown-tog nav-user mr-0 waves-effect waves-light ripple button-base"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img src={UserImage} alt="user" className="rounded-circle" />
                <span className="pro-user-name ml-1">
                  {user.userName} <i className="mdi mdi-chevron-down" />
                </span>
              </span>
              <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                <span className="dropdown-item notify-item ripple button-base">
                  <i className="fe-user" alt="" />
                  <span>
                    Status : <b className="text-success">online</b>
                  </span>
                </span>
                <Link
                  to="/admin/setting"
                  className="dropdown-item notify-item ripple button-base"
                >
                  <i className="fe-settings" alt="" />
                  <span>Settings</span>
                </Link>
                <span className="dropdown-item notify-item ripple button-base">
                  <i className="fe-log-out" alt="" />
                  <span>Logout</span>
                </span>
              </div>
            </li>
            <li className="dropdown notification-list side_drop">
              <Link
                to="/admin/setting"
                className="nav-link waves-effect waves-light ripple button-base"
              >
                <i className="mdi mdi-cog-outline noti-icon " alt="" />
              </Link>
            </li>
          </ul>
          <div className="logo-box" id="logoBox">
            <Link to="/admin">
              <span className="logo logo-light pl-3">
                <span className="logo-sm">
                  <div className="pand-logo">
                    <img src={SmLogo} alt="" />
                  </div>
                </span>
                <span className="logo-lg">
                  <div className="pand-logo">
                    <img src={SmLogo} alt="" />{" "}
                    <span id="pandlogo">PANDA / TA </span>
                  </div>
                </span>
              </span>
            </Link>
          </div>
          <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
            <li>
              <button
                className="button-menu-mobile waves-effect waves-light ripple button-base"
                onClick={toggle}
              >
                <i className="fe-menu" alt="" />
              </button>
            </li>
            <li>
              <span
                className="navbar-toggle nav-link"
                data-toggle="collapse"
                data-target="#topnav-menu-content"
              >
                <div className="lines">
                  <span />
                  <span />
                  <span />
                </div>
              </span>
            </li>
          </ul>
          <div className="clearfix" />
        </div>
      </div>
      <div className="left-side-menu" id="leftbar">
        <LeftBar />
      </div>
    </>
  );
};

export default Navbar;
