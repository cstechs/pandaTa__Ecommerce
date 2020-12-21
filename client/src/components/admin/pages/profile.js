import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../partials/topnavbar";
import Footer from "../partials/footer";

import UserImage from "../../../assets/images/admin/users/user-2.jpg";

const Profile = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <div className="Dashobard">
      <div id="wrapper">
        <Navbar />
        <div className="content-page" id="content">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box">
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link to="/admin">PANDA / TA</Link>
                        </li>
                        <li className="breadcrumb-item active">Setting</li>
                      </ol>
                    </div>
                    <h4 className="page-title">Account Setting</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="profile-setting">
                      <div className="card-body">
                        <div className="text-right mt-3">
                          <Link to="/admin/setting/edit">
                            <button className="btn btn-secondary px-4 ripple mr-2">
                              EDIT PROFILE
                            </button>
                          </Link>
                          <Link to="/admin/forgetpassword">
                            <button className="btn btn-secondary px-4 ripple">
                              CHANGE PASSWORD
                            </button>
                          </Link>
                        </div>
                        {user.role === "seller" && (
                          <>
                            <div className="row mt-3 pl-2">
                              <div className="col-md-2">
                                <div className="profilePic">
                                  <img src={UserImage} alt="profilePic" />
                                </div>
                              </div>
                              <div className="col-md-10">
                                <h2 className="mt-3">UserName</h2>
                                <h4 className="mt-1">City , Country</h4>
                                <p className="Bio mt-1">
                                  Cilek is wonderful serenity has taken
                                  possession of my entire as soul, is like these
                                  sweet mornings of spring which I enjoy with my
                                  whole heart. I am alone standards.
                                </p>
                              </div>
                            </div>
                            <div className="row mt-3 pl-2 mb-5">
                              <div className="col-12 mt-2">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  value="First Name"
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Last Name</label>
                                <input type="text" value="Last Name" disabled />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Email Address</label>
                                <input
                                  type="email"
                                  value="Email Address"
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Phone Number</label>
                                <input
                                  type="number"
                                  value="03323423523"
                                  disabled
                                />
                              </div>
                            </div>
                          </>
                        )}
                        {user.role === "admin" && (
                          <>
                            <div className="row mt-3 pl-2 mb-5">
                              <div className="col-12 mt-2">
                                <label>User Name</label>
                                <input
                                  type="text"
                                  value={user.userName}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  value={user.firstName}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  value={user.lastName}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Email Address</label>
                                <input
                                  type="email"
                                  value={user.email}
                                  disabled
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Profile;
