import React, { useState } from "react";
import { Link } from "react-router-dom";

const LeftBar = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <>
      <div className="h-100" data-simplebar>
        <div id="sidebar-menu">
          <ul id="side-menu">
            <li>
              <Link to="/admin/" className=" ripple button-base">
                <i className="mdi mdi-view-dashboard-outline leftbar_icon" />
                <span> Dashboards </span>
              </Link>
            </li>
            <li>
              <Link to="/admin/email/inbox" className="ripple button-base">
                <i className="mdi mdi-email-multiple-outline leftbar_icon" />
                <span> Inbox </span>
              </Link>
            </li>
            <li>
              <Link to="/admin/product" className="ripple button-base">
                <i className="mdi mdi-cart-plus leftbar_icon" />
                <span> Products </span>
              </Link>
            </li>
            <li>
              <Link to="/admin/invoice" className="ripple button-base">
                <i className="mdi mdi-bookmark-minus leftbar_icon" />
                <span>Invoice</span>
              </Link>
            </li>
            {user && user.role === "admin" && (
              <>
                <li>
                  <Link to="/admin/customers" className="ripple button-base">
                    <i className="mdi mdi-book-account-outline leftbar_icon" />
                    <span> Customer</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/category" className="ripple button-base">
                    <i className="mdi mdi-card-plus leftbar_icon" />
                    <span> Category </span>
                  </Link>
                </li>{" "}
              </>
            )}
            <li>
              <Link to="/admin/chat" className="ripple button-base">
                <i className="mdi mdi-forum-outline leftbar_icon" />
                <span> Chat Room</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/setting" className="ripple button-base">
                <i className="mdi mdi-cog-outline leftbar_icon" />
                <span> Settings</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="clearfix" />
      </div>
    </>
  );
};

export default LeftBar;
