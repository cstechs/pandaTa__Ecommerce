import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../partials/header";
import Footer from "../partials/footer";
import { getSellerById } from "../../../redux/_actions/sellerAction";

const Profile = () => {
  const [users] = useState(JSON.parse(localStorage.getItem("user")));
  const seller = useSelector((state) => state.seller?.seller);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSellerById(users._id));
  }, [dispatch]);
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
                          {users.role === "seller" && (
                            <Link to="/admin/setting/edit">
                              <button className="btn btn-secondary px-4 ripple mr-2">
                                EDIT PROFILE
                              </button>
                            </Link>
                          )}
                          <Link to="/changepassword">
                            <button className="btn btn-secondary px-4 ripple">
                              CHANGE PASSWORD
                            </button>
                          </Link>
                        </div>
                        {users.role === "seller" && (
                          <>
                            <div className="row mt-3 pl-2">
                              <div className="col-md-2">
                                <div
                                  className="profilePic"
                                  style={{
                                    backgroundImage: `url(/${seller?.userImage})`,
                                  }}
                                ></div>
                              </div>
                              <div className="col-md-10">
                                <h2 className="mt-3">{seller?.userName}</h2>
                                <h4 className="mt-1">
                                  {seller?.userCity} , {seller?.userCountry}
                                </h4>
                                <p className="Bio mt-1">{seller?.userBio}</p>
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
                                  value={seller?.userGender}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  value={seller?.userFirstName}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Middle Name</label>
                                <input
                                  type="text"
                                  value={seller?.userMiddleName}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  value={seller?.userLastName}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Email Address</label>
                                <input
                                  type="email"
                                  value={seller?.userEmail}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Phone Number</label>
                                <input
                                  type="number"
                                  value={seller?.userPhNumber}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Street Address</label>
                                <input
                                  type="text"
                                  value={seller?.userAddress}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Apt / Suite / Other</label>
                                <input
                                  type="text"
                                  value={seller?.userAppartment}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Zip / Postal Code</label>
                                <input
                                  type="text"
                                  value={seller?.userZipCode}
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
                                  value={seller?.businessName}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Title</label>
                                <input
                                  type="text"
                                  value={seller?.userTitle}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Business Type</label>
                                <input
                                  type="text"
                                  value={seller?.businessType}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Business Main Channel</label>
                                <input
                                  type="text"
                                  value={seller?.businessMainSaleChannel}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Business Year Establish</label>
                                <input
                                  type="text"
                                  value={seller?.businessYearEstablish}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Busienss Identity type</label>
                                <input
                                  type="text"
                                  value={seller?.businessIdentityType}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Business ID Number</label>
                                <input
                                  type="number"
                                  value={seller?.businessIdNumber}
                                  disabled
                                />
                              </div>
                              <div className="col-12 my-1">
                                <label className="font-15 d-block mt-4">
                                  SOCIAL ACCOUNTS DETAILS
                                </label>
                                <div className="underLine w-100"></div>
                              </div>
                              {seller?.fbSocialAccountLink !== "" && (
                                <div className="col-12 mt-2">
                                  <label>
                                    <i className="fab fa-facebook-f font-17 mr-1"></i>
                                    Facebook
                                  </label>
                                  <input
                                    type="url"
                                    value={seller?.fbSocialAccountLink}
                                    disabled
                                  />
                                </div>
                              )}
                              {seller?.pinterestSocialAccountLink !== "" && (
                                <div className="col-12 mt-2">
                                  <label>
                                    <i className="fab fa-pinterest font-17 mr-1"></i>
                                    Pinterest
                                  </label>
                                  <input
                                    type="url"
                                    value={seller?.pinterestSocialAccountLink}
                                    disabled
                                  />
                                </div>
                              )}
                              {seller?.twitterSocialAccountLink !== "" && (
                                <div className="col-12 mt-2">
                                  <label>
                                    <i className="fab fa-twitter font-17 mr-1"></i>
                                    Twitter
                                  </label>
                                  <input
                                    type="url"
                                    value={seller?.twitterSocialAccountLink}
                                    disabled
                                  />
                                </div>
                              )}
                              {seller?.instagramSocialAccountLink !== "" && (
                                <div className="col-12 mt-2">
                                  <label>
                                    <i className="fab fa-instagram font-17 mr-1"></i>
                                    Instagram
                                  </label>
                                  <input
                                    type="url"
                                    value={seller?.instagramSocialAccountLink}
                                    disabled
                                  />
                                </div>
                              )}
                            </div>
                          </>
                        )}
                        {users.role === "admin" && (
                          <>
                            <div className="row mt-3 pl-2 mb-5">
                              <div className="col-12 mt-2">
                                <label>User Name</label>
                                <input
                                  type="text"
                                  value={users.userName}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  value={users.firstName}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  value={users.lastName}
                                  disabled
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Email Address</label>
                                <input
                                  type="email"
                                  value={users.email}
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
