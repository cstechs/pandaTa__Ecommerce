import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../partials/header";
import Footer from "../partials/footer";
import { useSelector, useDispatch } from "react-redux";
import { sellerupdate } from "../../../redux/_actions/sellerAction";
import { setAlert } from "../../../redux/_actions/alertAction";
import { getSellerById } from "../../../redux/_actions/sellerAction";

const UpdateProfile = () => {
  const history = useHistory();
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const users = useSelector((state) => state.seller?.seller);
  const [fileImage, setfileImage] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSellerById(user._id));
  }, [dispatch]);
  if (user.role != "seller") {
    history.push("/");
  }
  const [newSeller, setNewSeller] = useState({
    _id: user._id,
    userFirstName: users?.userFirstName,
    userMiddleName: users?.userMiddleName,
    userLastName: users?.userLastName,
    UserName: users?.userName,
    userEmail: users?.userEmail,
    userBio: users?.userBio,
    userTitle: users?.userTitle,
    userAddress: users?.userAddress,
    userAppartment: users?.userAppartment,
    userCity: users?.userCity,
    userZipCode: users?.userZipCode,
    userCountry: users?.userCountry,
    userPhNumber: users?.userPhNumber,
    userpassword: users?.userpassword,
    businessName: users?.businessName,
    businessType: users?.businessType,
    businessMainSaleChannel: users?.businessMainSaleChannel,
    businessYearEstablish: users?.businessYearEstablish,
    businessIdentityType: users?.businessIdentityType,
    businessIdNumber: users?.businessIdNumber,
    fbSocialAccountLink: users?.fbSocialAccountLink,
    pinterestSocialAccountLink: users?.pinterestSocialAccountLink,
    twitterSocialAccountLink: users?.twitterSocialAccountLink,
    instagramSocialAccountLink: users?.instagramSocialAccountLink,
    userGender: users?.userGender,
    userImage: users?.userImage,
  });

  const {
    UserName,
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
  } = newSeller;

  const HandleSellerChange = (e) => {
    setNewSeller({ ...newSeller, [e.target.name]: e.target.value });
  };

  const handleOnUploadFile = (e) => {
    setNewSeller({ ...newSeller, [e.target.name]: e.target.files[0] });
    setfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (
      userEmail === "" ||
      userImage === "" ||
      businessName === "" ||
      businessType === "" ||
      businessMainSaleChannel === "" ||
      businessYearEstablish === "" ||
      businessIdentityType === "" ||
      businessIdNumber === "" ||
      userGender === "" ||
      UserName === "" ||
      userFirstName === "" ||
      userMiddleName === "" ||
      userLastName === "" ||
      userTitle === "" ||
      userAddress === "" ||
      userAppartment === "" ||
      userCity === "" ||
      userZipCode === "" ||
      userPhNumber === ""
    ) {
      dispatch(setAlert("Please enter all the fields.", "danger"));
    } else {
      console.log("object");
      const data = new FormData();
      data.append("userName", newSeller.UserName);
      data.append("userEmail", newSeller.userEmail);
      data.append("userImage", newSeller.userImage);
      data.append("hearAboutPandata", newSeller.hearAboutPandata);
      data.append("businessName", newSeller.businessName);
      data.append("businessType", newSeller.businessType);
      data.append("businessMainSaleChannel", newSeller.businessMainSaleChannel);
      data.append("businessYearEstablish", newSeller.businessYearEstablish);
      data.append("businessIdentityType", newSeller.businessIdentityType);
      data.append("businessIdNumber", newSeller.businessIdNumber);
      data.append("fbSocialAccountLink", newSeller.fbSocialAccountLink);
      data.append(
        "pinterestSocialAccountLink",
        newSeller.pinterestSocialAccountLink
      );
      data.append(
        "twitterSocialAccountLink",
        newSeller.twitterSocialAccountLink
      );
      data.append(
        "instagramSocialAccountLink",
        newSeller.instagramSocialAccountLink
      );
      data.append("userGender", newSeller.userGender);
      data.append("userFirstName", newSeller.userFirstName);
      data.append("userMiddleName", newSeller.userMiddleName);
      data.append("userLastName", newSeller.userLastName);
      data.append("userBio", newSeller.userBio);
      data.append("userTitle", newSeller.userTitle);
      data.append("userAddress", newSeller.userAddress);
      data.append("userAppartment", newSeller.userAppartment);
      data.append("userCity", newSeller.userCity);
      data.append("userZipCode", newSeller.userZipCode);
      data.append("userCountry", newSeller.userCountry);
      data.append("userPhNumber", newSeller.userPhNumber);
      dispatch(sellerupdate(data, user._id));
      setTimeout(() => {
        history.push("/admin");
      }, 2000);
    }
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
                        <li className="breadcrumb-item">
                          <Link to="/admin/setting">Profile</Link>
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
                      <form onSubmit={onsubmit} encType="multipart/form-data">
                        <div className="card-body">
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
                                value={UserName}
                                name="UserName"
                                onChange={(e) => HandleSellerChange(e)}
                              />
                            </div>
                            <div className="col-md-6 mt-3">
                              <label>Email</label>
                              <input type="email" value={userEmail} disabled />
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
                                <span className="btn btn-danger ripple px-3 mr-2 py-2">
                                  CANCEL
                                </span>
                              </Link>
                              <button className="btn btn-success ripple px-5 py-2">
                                UPDATE PROFILE
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
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
