import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../partials/header";
import Footer from "../partials/footer";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/_actions/userAction";

const UpdateProfile = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [fileImage, setfileImage] = useState(null);
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
    userGender: user.userGender,
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
    userImage,
    userAppartment,
    instagramSocialAccountLink,
    twitterSocialAccountLink,
    pinterestSocialAccountLink,
    fbSocialAccountLink,
    businessIdNumber,
    businessIdentityType,
    businessYearEstablish,
    businessMainSaleChannel,
    businessType,
    businessName,
    userGender,
    userMiddleName,
    userTitle,
    userAddress,
    userZipCode,
    userpassword,
  } = newSeller;

  const HandleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const HandleSellerChange = (e) => {
    setNewSeller({ ...newSeller, [e.target.name]: e.target.value });
  };

  const handleOnUploadFile = (e) => {
    setNewSeller({ ...newSeller, [e.target.name]: e.target.value });
    setfileImage(URL.createObjectURL(e.target.files[0]));
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
                                {fileImage ? (
                                  <div
                                    className="profilePic"
                                    style={{
                                      backgroundImage: `url(${fileImage})`,
                                    }}
                                  >
                                    <label className="Fileinput">
                                      Upload Profile Pic
                                      <input
                                        type="file"
                                        size="60"
                                        name="userImage"
                                        onChange={(e) => handleOnUploadFile(e)}
                                      />
                                    </label>
                                  </div>
                                ) : (
                                  <div
                                    className="profilePic"
                                    style={{
                                      backgroundImage: `url(/${userImage})`,
                                    }}
                                  >
                                    <label className="Fileinput">
                                      Upload Profile Pic
                                      <input
                                        type="file"
                                        size="60"
                                        name="userImage"
                                        onChange={(e) => handleOnUploadFile(e)}
                                      />
                                    </label>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="row mt-3 pl-2">
                              <div className="col-12 my-2">
                                <label className="font-15 d-block mt-2">
                                  PERSONAL INFORMATION
                                </label>
                                <div className="underLine w-100"></div>
                              </div>
                              <div className="col-12">
                                <label>User Name</label>
                                <input
                                  type="text"
                                  value={sellerUserName}
                                  name="sellerUserName"
                                  onChange={(e) => HandleSellerChange(e)}
                                />
                              </div>
                              <div className="col-md-6 mt-3">
                                <label>Email</label>
                                <input
                                  type="email"
                                  value={userEmail}
                                  disabled
                                />
                              </div>
                              <div className="col-md-6 mt-3">
                                <label>Phone Number</label>
                                <input
                                  type="number"
                                  value={userPhNumber}
                                  name="userPhNumber"
                                  onChange={(e) => HandleSellerChange(e)}
                                />
                              </div>
                              <div className="col-md-3 mt-4">
                                <label>Gender</label>
                                <select
                                  value={userGender}
                                  name="userGender"
                                  onChange={(e) => HandleSellerChange(e)}
                                >
                                  <option>Select Gender</option>
                                  <option>Mr.</option>
                                  <option>Mrs.</option>
                                </select>
                              </div>
                              <div className="col-md-3 mt-4">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  name="userFirstName"
                                  value={userFirstName}
                                  onChange={(e) => HandleSellerChange(e)}
                                  placeholder="First Name"
                                />
                              </div>
                              <div className="col-md-3 mt-4">
                                <label>Middle Name</label>
                                <input
                                  type="text"
                                  name="userMiddleName"
                                  value={userMiddleName}
                                  onChange={(e) => HandleSellerChange(e)}
                                  placeholder="Middle Name "
                                />
                              </div>
                              <div className="col-md-3 mt-4">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  name="userLastName"
                                  value={userLastName}
                                  onChange={(e) => HandleSellerChange(e)}
                                  placeholder="Last Name"
                                />
                              </div>
                              <div className="col-md-6 mt-3">
                                <label>City</label>
                                <input
                                  type="text"
                                  value={userCity}
                                  name="userCity"
                                  onChange={(e) => HandleSellerChange(e)}
                                />
                              </div>

                              <div className="col-md-6 mt-3">
                                <label>Country</label>
                                <select
                                  name="userCountry"
                                  value={userCountry}
                                  onChange={(e) => HandleSellerChange(e)}
                                >
                                  <option>Select Country</option>
                                  <option>Pakistan</option>
                                  <option>iran</option>
                                  <option>turkey</option>
                                  <option>indonasia</option>
                                </select>
                              </div>
                              <div className="col-md-4 mt-3">
                                <label>Street Address</label>
                                <input
                                  type="text"
                                  name="userAddress"
                                  value={userAddress}
                                  onChange={(e) => HandleSellerChange(e)}
                                />
                              </div>
                              <div className="col-md-4 mt-3">
                                <label>Apt / Suite / Other</label>
                                <input
                                  type="text"
                                  name="userAppartment"
                                  value={userAppartment}
                                  onChange={(e) => HandleSellerChange(e)}
                                />
                              </div>
                              <div className="col-md-4 mt-3">
                                <label>Zip / Postal Code</label>
                                <input
                                  type="text"
                                  name="userZipCode"
                                  value={userZipCode}
                                  onChange={(e) => HandleSellerChange(e)}
                                />
                              </div>
                              <div className="col-12 pl-2 mt-3">
                                <label>Bio</label>
                                <textarea
                                  value={userBio}
                                  name="userBio"
                                  onChange={(e) => HandleSellerChange(e)}
                                ></textarea>
                              </div>
                              <div className="col-12 my-1">
                                <label className="font-15 d-block mt-4">
                                  BUSINESS DETAILS
                                </label>
                                <div className="underLine w-100"></div>
                              </div>
                              <div className="col-12">
                                <label>Business Name</label>
                                <input
                                  type="text"
                                  name="businessName"
                                  value={businessName}
                                  onChange={(e) => HandleSellerChange(e)}
                                  placeholder="xxyz@gmail.com"
                                />
                              </div>
                              <div className="col-12 mt-3">
                                <label>Title</label>
                                <input
                                  type="text"
                                  name="userTitle"
                                  value={userTitle}
                                  onChange={(e) => HandleSellerChange(e)}
                                  placeholder="eg. CEO, Owner, Manager, Designer, Merchandiser"
                                />
                              </div>
                              <div className="col-md-4 mt-4 pt-1">
                                <label>Business Type</label>
                                <select
                                  name="businessType"
                                  value={businessType}
                                  onChange={(e) => HandleSellerChange(e)}
                                >
                                  <option>Business Type</option>
                                  <option>123</option>
                                  <option>456</option>
                                  <option>789</option>
                                </select>
                              </div>
                              <div className="col-md-4 mt-4 pt-1">
                                <label>Business Main Channel</label>
                                <select
                                  name="businessMainSaleChannel"
                                  value={businessMainSaleChannel}
                                  onChange={(e) => HandleSellerChange(e)}
                                >
                                  <option>Main Sales Channel</option>
                                  <option>123</option>
                                  <option>456</option>
                                  <option>789</option>
                                </select>
                              </div>
                              <div className="col-md-4 mt-4 pt-1">
                                <label>Business Year Establish</label>
                                <select
                                  name="businessYearEstablish"
                                  value={businessYearEstablish}
                                  onChange={(e) => HandleSellerChange(e)}
                                >
                                  <option>Year Established</option>
                                  <option>123</option>
                                  <option>456</option>
                                  <option>789</option>
                                </select>
                              </div>
                              <div className="col-md-6 mt-4">
                                <label>Busienss Identity type</label>
                                <select
                                  name="businessIdentityType"
                                  value={businessIdentityType}
                                  onChange={(e) => HandleSellerChange(e)}
                                >
                                  <option>Retail Business License</option>
                                  <option>123</option>
                                  <option>456</option>
                                  <option>789</option>
                                </select>
                              </div>
                              <div className="col-md-6 mt-4">
                                <label>Business ID Number</label>
                                <input
                                  type="number"
                                  name="businessIdNumber"
                                  value={businessIdNumber}
                                  onChange={(e) => HandleSellerChange(e)}
                                  placeholder="eg. 32756158421584"
                                />
                              </div>
                              <div className="col-12 my-1">
                                <label className="font-15 d-block mt-4">
                                  SOCIAL ACCOUNTS DETAILS
                                </label>
                                <div className="underLine w-100"></div>
                              </div>
                              <div className="col-12">
                                <label>
                                  <i className="fab fa-facebook-f font-17 mr-1"></i>
                                  Facebook
                                </label>
                                <input
                                  type="url"
                                  name="fbSocialAccountLink"
                                  value={fbSocialAccountLink}
                                  onChange={(e) => HandleSellerChange(e)}
                                  placeholder="paste url here"
                                />
                              </div>
                              <div className="col-12 mt-4">
                                <label>
                                  <i className="fab fa-pinterest font-17 mr-1"></i>
                                  Pinterest
                                </label>
                                <input
                                  type="url"
                                  name="pinterestSocialAccountLink"
                                  value={pinterestSocialAccountLink}
                                  onChange={(e) => HandleSellerChange(e)}
                                  placeholder="paste url here"
                                />
                              </div>
                              <div className="col-12 mt-4">
                                <label>
                                  <i className="fab fa-twitter font-17 mr-1"></i>
                                  Twitter
                                </label>
                                <input
                                  type="url"
                                  name="twitterSocialAccountLink"
                                  value={twitterSocialAccountLink}
                                  onChange={(e) => HandleSellerChange(e)}
                                  placeholder="paste url here"
                                />
                              </div>
                              <div className="col-12 mt-4">
                                <label>
                                  <i className="fab fa-instagram font-17 mr-1"></i>
                                  Instagram
                                </label>
                                <input
                                  type="url"
                                  name="instagramSocialAccountLink"
                                  value={instagramSocialAccountLink}
                                  onChange={(e) => HandleSellerChange(e)}
                                  placeholder="paste url here"
                                />
                              </div>
                            </div>
                            <div className="row mt-4 mb-5">
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
