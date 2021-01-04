import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../partials/topnavbar";
import Footer from "../partials/footer";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/_actions/userAction";

const UpdateProfile = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    _id: user._id,
    userName: user.userName,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    isVerified: user.isVerified,
    password: user.password,
  });

  const [newSeller, setNewSeller] = useState({
    _id: user._id,
    userFirstName: user.userFirstName,
    userMiddleName: user.userMiddleName,
    userLastName: user.userLastName,
    sellerUserName: user.userName,
    userEmail: user.userEmail,
    userBio: user.userBio,
    userTitle: user.userTitle,
    userAddress: user.userAddress,
    userAppartment: user.userAppartment,
    userCity: user.userCity,
    userZipCode: user.userZipCode,
    userCountry: user.userCountry,
    userPhNumber: user.userPhNumber,
    userpassword: user.userpassword,
    businessName: user.businessName,
    businessType: user.businessType,
    businessMainSaleChannel: user.businessMainSaleChannel,
    businessYearEstablish: user.businessYearEstablish,
    businessIdentityType: user.businessIdentityType,
    businessIdNumber: user.businessIdNumber,
    fbSocialAccountLink: user.fbSocialAccountLink,
    pinterestSocialAccountLink: user.pinterestSocialAccountLink,
    twitterSocialAccountLink: user.twitterSocialAccountLink,
    instagramSocialAccountLink: user.instagramSocialAccountLink,
    hearAboutPandata: user.hearAboutPandata,
    userImage: user.userImage,
  });

  const { userName, firstName, lastName } = newUser;

  const {
    sellerUserName,
    userFirstName,
    userLastName,
    userEmail,
    userPhNumber,
    userCity,
    userCountry,
    userBio,
  } = newSeller;

  // const HandleChange = (e) => {
  //   setNewUser((prev)=> {return{ {...prev, [e.target.name]: e.target.value }});
  // };

  const HandleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const HandleSellerChange = (e) => {
    setNewSeller({ ...newSeller, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
    dispatch(updateUser(newUser, user._id));
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

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
                    <div className="profile-setting-edit">
                      <div className="card-body">
                        {user.role === "seller" && (
                          <>
                            <div className="row mt-3 pr-3">
                              <div className="col-12">
                                <div className="profilePic">
                                  <label className="Fileinput">
                                    Upload Profile Pic
                                    <input type="file" size="60" />
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3 pl-2">
                              <div className="col-12">
                                <label>User Name</label>
                                <input
                                  type="text"
                                  value={sellerUserName}
                                  name="sellerUserName"
                                  onChange={(e) => HandleSellerChange(e)}
                                />
                              </div>
                            </div>
                            <div className="row mt-3 pl-2">
                              <div className="col-md-6">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  value={userFirstName}
                                  name="userFirstName"
                                  onChange={(e) => HandleSellerChange(e)}
                                />
                              </div>
                              <div className="col-md-6">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  value={userLastName}
                                  name="userLastName"
                                  onChange={(e) => HandleSellerChange(e)}
                                />
                              </div>
                            </div>
                            <div className="row mt-3 pl-2">
                              <div className="col-md-6">
                                <label>Email</label>
                                <input
                                  type="email"
                                  value={user.userEmail}
                                  disabled
                                />
                              </div>
                              <div className="col-md-6">
                                <label>Phone Number</label>
                                <input
                                  type="number"
                                  value={userPhNumber}
                                  name="userPhNumber"
                                  onChange={(e) => HandleSellerChange(e)}
                                />
                              </div>
                            </div>
                            <div className="row mt-3 pl-2">
                              <div className="col-md-6">
                                <label>City</label>
                                <input
                                  type="text"
                                  value={userCity}
                                  name="userCity"
                                  onChange={(e) => HandleSellerChange(e)}
                                />
                              </div>
                              <div className="col-md-6">
                                <label>Country</label>
                                <input
                                  type="text"
                                  value={userCountry}
                                  name="userCountry"
                                  onChange={(e) => HandleSellerChange(e)}
                                />
                              </div>
                            </div>
                            <div className="row mt-2 pl-2">
                              <div className="col-12">
                                <label>Bio</label>
                                <textarea
                                  value={userBio}
                                  name="userBio"
                                  onChange={(e) => HandleSellerChange(e)}
                                ></textarea>
                              </div>
                            </div>
                            <div className="row mt-2 mb-5">
                              <div className="col-12 text-right pr-3">
                                <Link to="/admin/setting/">
                                  <button className="btn btn-danger ripple px-3 mr-2 py-2">
                                    CANCEL
                                  </button>
                                </Link>
                                <button className="btn btn-success ripple px-5 py-2">
                                  UPDATE PROFILE
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                        {user.role === "admin" && (
                          <>
                            <div className="row mt-2 pl-2">
                              <div className="col-12 mt-2">
                                <label>User Name</label>
                                <input
                                  type="text"
                                  name="userName"
                                  value={userName}
                                  onChange={(e) => HandleChange(e)}
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  name="firstName"
                                  value={firstName}
                                  onChange={(e) => HandleChange(e)}
                                />
                              </div>
                              <div className="col-12 mt-2">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  value={lastName}
                                  name="lastName"
                                  onChange={(e) => HandleChange(e)}
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
                            <div className="row mt-2 mb-5">
                              <div className="col-12 text-right pr-3">
                                <Link to="/admin/setting/">
                                  <button className="btn btn-danger ripple px-3 mr-2 py-2">
                                    CANCEL
                                  </button>
                                </Link>
                                <button
                                  className="btn btn-success ripple px-5 py-2"
                                  onClick={(e) => Submit(e)}
                                >
                                  UPDATE PROFILE
                                </button>
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

export default UpdateProfile;
