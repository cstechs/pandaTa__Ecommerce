import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../partials/header";
import Footer from "../partials/footer";

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
                                <div
                                  className="profilePic"
                                  style={{
                                    backgroundImage: `url(/${user.userImage})`,
                                  }}
                                ></div>
                              </div>
                              <div className="col-md-10">
                                <h2 className="mt-3">{user.userName}</h2>
                                <h4 className="mt-1">
                                  {user.userCity} , {user.userCountry}
                                </h4>
                                <p className="Bio mt-1">{user.userBio}</p>
                              </div>
                            </div>
                            <div className="row mt-3 pl-2 mb-5">
                              <div className="col-12 my-2">
                                <label className="font-15 d-block mt-2">
                                  PERSONAL INFORMATION
                                </label>
                                <div className="underLine w-100"></div>
                              </div>
                              <div className="col-12">
                                <label>Gender</label>
                                <input
                                  type="text"
                                  value={user.userGender}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  value={user.userFirstName}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Middle Name</label>
                                <input
                                  type="text"
                                  value={user.userMiddleName}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  value={user.userLastName}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Email Address</label>
                                <input
                                  type="email"
                                  value={user.userEmail}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Phone Number</label>
                                <input
                                  type="number"
                                  value={user.userPhNumber}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Street Address</label>
                                <input
                                  type="text"
                                  value={user.userAddress}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Apt / Suite / Other</label>
                                <input
                                  type="text"
                                  value={user.userAppartment}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Zip / Postal Code</label>
                                <input
                                  type="text"
                                  value={user.userZipCode}
                                  disabled
                                />
                              </div>
                              <div className="col-12 my-1">
                                <label className="font-15 d-block mt-4">
                                  BUSINESS DETAILS
                                </label>
                                <div className="underLine w-100"></div>
                              </div>
                              <div className="col-12 mt-2">
                                <label>Business Name</label>
                                <input
                                  type="text"
                                  value={user.businessName}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Title</label>
                                <input
                                  type="text"
                                  value={user.userTitle}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Business Type</label>
                                <input
                                  type="text"
                                  value={user.businessType}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Business Main Channel</label>
                                <input
                                  type="text"
                                  value={user.businessMainSaleChannel}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Business Year Establish</label>
                                <input
                                  type="text"
                                  value={user.businessYearEstablish}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Busienss Identity type</label>
                                <input
                                  type="text"
                                  value={user.businessIdentityType}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Business ID Number</label>
                                <input
                                  type="number"
                                  value={user.businessIdNumber}
                                  disabled
                                />
                              </div>
                              <div className="col-12 my-1">
                                <label className="font-15 d-block mt-4">
                                  SOCIAL ACCOUNTS DETAILS
                                </label>
                                <div className="underLine w-100"></div>
                              </div>
                              {user.fbSocialAccountLink !== "" && (
                                <div className="col-12 mt-2">
                                  <label>
                                    <i className="fab fa-facebook-f font-17 mr-1"></i>
                                    Facebook
                                  </label>
                                  <input
                                    type="url"
                                    value={user.fbSocialAccountLink}
                                    disabled
                                  />
                                </div>
                              )}
                              {user.pinterestSocialAccountLink !== "" && (
                                <div className="col-12 mt-2">
                                  <label>
                                    <i className="fab fa-pinterest font-17 mr-1"></i>
                                    Pinterest
                                  </label>
                                  <input
                                    type="url"
                                    value={user.pinterestSocialAccountLink}
                                    disabled
                                  />
                                </div>
                              )}
                              {user.twitterSocialAccountLink !== "" && (
                                <div className="col-12 mt-2">
                                  <label>
                                    <i className="fab fa-twitter font-17 mr-1"></i>
                                    Twitter
                                  </label>
                                  <input
                                    type="url"
                                    value={user.twitterSocialAccountLink}
                                    disabled
                                  />
                                </div>
                              )}
                              {user.instagramSocialAccountLink !== "" && (
                                <div className="col-12 mt-2">
                                  <label>
                                    <i className="fab fa-instagram font-17 mr-1"></i>
                                    Instagram
                                  </label>
                                  <input
                                    type="url"
                                    value={user.instagramSocialAccountLink}
                                    disabled
                                  />
                                </div>
                              )}
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
