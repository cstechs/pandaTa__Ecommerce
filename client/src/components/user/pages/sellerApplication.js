import React, { useState } from "react";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import { Link } from "react-router-dom";
import addImageIcon from "../../../assets/images/addPhoto.png";
import { useDispatch } from "react-redux";
import { sellerregister } from "../../../redux/_actions/sellerAction";
import { setAlert } from "../../../redux/_actions/alertAction";
import { SET_ALERT } from "../../../redux/types";

const SellerApplication = () => {
  const [applicationShown, setapplicationShown] = useState(true);
  const [companyProfileShown, setcompanyProfileShown] = useState(false);
  const [webAndSocialMediaShown, setwebAndSocialMediaShown] = useState(false);
  const [contactInfoShown, setcontactInfoShown] = useState(false);
  const [fileImage, setfileImage] = useState(null);
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    userEmail: "",
    userImage: "",
    hearAboutPandata: "",
    businessName: "",
    businessType: "",
    businessMainSaleChannel: "",
    businessYearEstablish: "",
    businessIdentityType: "",
    businessIdNumber: "",
    fbSocialAccountLink: "",
    pinterestSocialAccountLink: "",
    twitterSocialAccountLink: "",
    instagramSocialAccountLink: "",
    userName: "",
    userGender: "",
    userFirstName: "",
    userMiddleName: "",
    userLastName: "",
    userTitle: "",
    userBio: "",
    userAddress: "",
    userAppartment: "",
    userCity: "",
    userZipCode: "",
    userCountry: "",
    userPhNumber: "",
    userpassword: "",
  });

  const {
    userEmail,
    userImage,
    hearAboutPandata,
    businessName,
    businessType,
    businessMainSaleChannel,
    businessYearEstablish,
    businessIdentityType,
    businessIdNumber,
    fbSocialAccountLink,
    pinterestSocialAccountLink,
    twitterSocialAccountLink,
    instagramSocialAccountLink,
    userGender,
    userName,
    userFirstName,
    userMiddleName,
    userLastName,
    userpassword,
    userTitle,
    userBio,
    userAddress,
    userAppartment,
    userCity,
    userZipCode,
    userCountry,
    userPhNumber,
  } = newUser;
  const onChange = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  const handleOnUploadFile = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.files[0] });
    setfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const ApplicationCriteria = (e) => {
    e.preventDefault();
    if (userEmail === "" || userImage === "" || hearAboutPandata === "") {
      dispatch(
        setAlert(SET_ALERT, {
          message: "Please Fill Out All Fields",
          alertType: "danger",
        })
      );
    } else {
      setapplicationShown(false);
      setcompanyProfileShown(true);
    }
  };

  const companyProfile = (e) => {
    e.preventDefault();
    if (
      businessName === "" ||
      businessType === "" ||
      businessMainSaleChannel === "" ||
      businessYearEstablish === "" ||
      businessIdentityType === "" ||
      businessIdNumber === ""
    ) {
      dispatch(
        setAlert(SET_ALERT, {
          message: "Please Fill Out All Fields",
          alertType: "danger",
        })
      );
    } else {
      setcompanyProfileShown(false);
      setwebAndSocialMediaShown(true);
    }
  };

  const companyprofileBack = (e) => {
    e.preventDefault();
    setcompanyProfileShown(false);
    setapplicationShown(true);
  };

  const webAndSocialMedia = (e) => {
    e.preventDefault();
    if (
      fbSocialAccountLink === "" &&
      twitterSocialAccountLink === "" &&
      pinterestSocialAccountLink === "" &&
      instagramSocialAccountLink === ""
    ) {
      dispatch(
        setAlert(SET_ALERT, {
          message: "Please Fill Out Atleast One Field",
          alertType: "danger",
        })
      );
    } else {
      setwebAndSocialMediaShown(false);
      setcontactInfoShown(true);
    }
  };
  const webAndSocialMediaBack = (e) => {
    e.preventDefault();
    setwebAndSocialMediaShown(false);
    setcompanyProfileShown(true);
  };
  const contactInfoBack = (e) => {
    e.preventDefault();
    setcontactInfoShown(false);
    setwebAndSocialMediaShown(true);
  };

  // const sendCode = (e) => {
  //   e.preventDefault();
  //   setsendCodeShown(false);
  //   setthanksShown(true);
  // };

  const onsubmit = (e) => {
    e.preventDefault();
    if (
      userGender === "" ||
      userName === "" ||
      userFirstName === "" ||
      userMiddleName === "" ||
      userLastName === "" ||
      userpassword === "" ||
      userTitle === "" ||
      userAddress === "" ||
      userAppartment === "" ||
      userCity === "" ||
      userZipCode === "" ||
      userPhNumber === ""
    ) {
      dispatch(
        setAlert(SET_ALERT, {
          message: "Please Fill Out All Fields",
          alertType: "danger",
        })
      );
    } else {
      console.log("user", newUser);
      const data = new FormData();
      data.append("userEmail", newUser.userEmail);
      data.append("userImage", newUser.userImage);
      data.append("hearAboutPandata", newUser.hearAboutPandata);
      data.append("businessName", newUser.businessName);
      data.append("businessType", newUser.businessType);
      data.append("businessMainSaleChannel", newUser.businessMainSaleChannel);
      data.append("businessYearEstablish", newUser.businessYearEstablish);
      data.append("businessIdentityType", newUser.businessIdentityType);
      data.append("businessIdNumber", newUser.businessIdNumber);
      data.append("fbSocialAccountLink", newUser.fbSocialAccountLink);
      data.append(
        "pinterestSocialAccountLink",
        newUser.pinterestSocialAccountLink
      );
      data.append("twitterSocialAccountLink", newUser.twitterSocialAccountLink);
      data.append(
        "instagramSocialAccountLink",
        newUser.instagramSocialAccountLink
      );
      data.append("userGender", newUser.userGender);
      data.append("userName", newUser.userName);
      data.append("userFirstName", newUser.userFirstName);
      data.append("userMiddleName", newUser.userMiddleName);
      data.append("userLastName", newUser.userLastName);
      data.append("userBio", newUser.userBio);
      data.append("userpassword", newUser.userpassword);
      data.append("userTitle", newUser.userTitle);
      data.append("userAddress", newUser.userAddress);
      data.append("userAppartment", newUser.userAppartment);
      data.append("userCity", newUser.userCity);
      data.append("userZipCode", newUser.userZipCode);
      data.append("userCountry", newUser.userCountry);
      data.append("userPhNumber", newUser.userPhNumber);
      dispatch(sellerregister(data));
      setcontactInfoShown(false);
    }
  };

  return (
    <>
      <div className="component">
        <Header />
        <NavBar />
      </div>
      <ol className="breadcrumb m-0">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Seller Application</li>
      </ol>
      <div className="sellerApplication">
        <form onSubmit={onsubmit} encType="multipart/form-data">
          {applicationShown && (
            <>
              <div className="head">
                <span className="hd1 active">Application Critaria</span>
                <span className="hd2">Company Profile</span>
                <span className="hd3">Web & Social Media</span>
                <span className="hd4">Contact Info</span>
                <span className="hd5">Confirm Account</span>
              </div>
              <div className="sellerApplicationBox">
                {/* APPLICATION CRITERIA PORTION */}
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 mt-3">
                      <p>
                        Copyright will provide is wonderful serenity has taken
                        possession of my entire as soul, like these sweet <br />
                        mornings of spring which I enjoy with my whole heart. I
                        am alone standards.
                      </p>
                      <Link to="/sellerapplication" className="text-darkpurple">
                        Read our Buyer guidelines
                      </Link>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <label>Your Account</label>
                      <div className="underLine"></div>
                      {fileImage ? (
                        <div
                          className="accountImage"
                          style={{
                            backgroundImage: `url(${fileImage})`,
                          }}
                        ></div>
                      ) : (
                        <div className="accountImage d-flex justify-content-center align-items-center border">
                          <img
                            src={addImageIcon}
                            className="w-50 d-block m-auto"
                          />
                        </div>
                      )}
                      <label className="changePic">
                        Add Photo
                        <span className="text-danger font-16">*</span>
                        <input
                          type="file"
                          name="userImage"
                          onChange={handleOnUploadFile}
                        />
                      </label>
                    </div>
                    <div className="col-md-4">
                      <label>
                        How did you hear about Panda/ta
                        <span className="text-danger font-16">*</span>
                      </label>
                      <div className="underLine"></div>
                      <select
                        onChange={onChange}
                        name="hearAboutPandata"
                        value={hearAboutPandata}
                      >
                        <option>Select Platform</option>
                        <option>Google</option>
                        <option>Online Advertising </option>
                        <option>Social Media</option>
                        <option>Press</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-4">
                      <label>
                        Email
                        <span className="text-danger font-16">*</span>
                      </label>
                      <input
                        type="email"
                        name="userEmail"
                        value={userEmail}
                        onChange={onChange}
                        placeholder="xyz@gmail.com"
                      />
                      <Link
                        to="/sellerapplication"
                        className="text-danger mt-2"
                      >
                        Sign out and apply with anoter account
                      </Link>
                    </div>
                  </div>
                  <div className="PaginateButton">
                    <div className="row">
                      <div className="col-6 mt-4">
                        <Link
                          to="/sellerapplication"
                          className="button ripple button-base back_button"
                        >
                          BACK
                        </Link>
                      </div>
                      <div className="col-6 mt-4">
                        <span
                          className="button ripple button-base next_button"
                          onClick={ApplicationCriteria}
                        >
                          NEXT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {companyProfileShown && (
            <>
              <div className="head">
                <span className="hd1">Application Critaria</span>
                <span className="hd2 active">Company Profile</span>
                <span className="hd3">Web & Social Media</span>
                <span className="hd4">Contact Info</span>
                <span className="hd5">Confirm Account</span>
              </div>
              <div className="sellerApplicationBox">
                {/* COMPANY PROFILE PORTION */}
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 mt-4">
                      <label>
                        Business Name
                        <span className="text-danger font-16">*</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={businessName}
                        onChange={onChange}
                        placeholder="xxyz@gmail.com"
                      />
                    </div>
                    <div className="col-md-4 mt-4 pt-1">
                      <label>
                        Business Type
                        <span className="text-danger font-16">*</span>
                      </label>
                      <select
                        name="businessType"
                        value={businessType}
                        onChange={onChange}
                      >
                        <option>Business Type</option>
                        <option>123</option>
                        <option>456</option>
                        <option>789</option>
                      </select>
                    </div>
                    <div className="col-md-4 mt-4 pt-1">
                      <label>
                        Business Main Channel
                        <span className="text-danger font-16">*</span>
                      </label>
                      <select
                        name="businessMainSaleChannel"
                        value={businessMainSaleChannel}
                        onChange={onChange}
                      >
                        <option>Main Sales Channel</option>
                        <option>123</option>
                        <option>456</option>
                        <option>789</option>
                      </select>
                    </div>
                    <div className="col-md-4 mt-4 pt-1">
                      <label>
                        Business Year Establish
                        <span className="text-danger font-16">*</span>
                      </label>
                      <select
                        name="businessYearEstablish"
                        value={businessYearEstablish}
                        onChange={onChange}
                      >
                        <option>Year Established</option>
                        <option>123</option>
                        <option>456</option>
                        <option>789</option>
                      </select>
                    </div>
                    <div className="col-md-6 mt-4">
                      <label>
                        Busienss Identity type
                        <span className="text-danger font-16">*</span>
                      </label>
                      <select
                        name="businessIdentityType"
                        value={businessIdentityType}
                        onChange={onChange}
                      >
                        <option>Retail Business License</option>
                        <option>123</option>
                        <option>456</option>
                        <option>789</option>
                      </select>
                    </div>
                    <div className="col-md-6 mt-4">
                      <label>
                        Business ID Number
                        <span className="text-danger font-16">*</span>
                      </label>
                      <input
                        type="number"
                        name="businessIdNumber"
                        value={businessIdNumber}
                        onChange={onChange}
                        placeholder="eg. 32756158421584"
                      />
                    </div>
                  </div>
                  <div className="PaginateButton">
                    <div className="row">
                      <div className="col-6 mt-4">
                        <span
                          className="button ripple button-base back_button"
                          onClick={companyprofileBack}
                        >
                          BACK
                        </span>
                      </div>
                      <div className="col-6 mt-4">
                        <span
                          className="button ripple button-base next_button"
                          onClick={companyProfile}
                        >
                          NEXT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {webAndSocialMediaShown && (
            <>
              <div className="head">
                <span className="hd1">Application Critaria</span>
                <span className="hd2">Company Profile</span>
                <span className="hd3 active">Web & Social Media</span>
                <span className="hd4">Contact Info</span>
                <span className="hd5">Confirm Account</span>
              </div>
              <div className="sellerApplicationBox">
                {/* WEB AND SOCIAL MEDIA PORTION */}
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 mt-4">
                      <label>
                        <i className="fab fa-facebook-f font-17 mr-1"></i>
                        Facebook
                      </label>
                      <input
                        type="url"
                        name="fbSocialAccountLink"
                        value={fbSocialAccountLink}
                        onChange={onChange}
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
                        onChange={onChange}
                        placeholder="paste url here"
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <label>
                        <i className="fab fa-twitter font-17 mr-1"></i>Twitter
                      </label>
                      <input
                        type="url"
                        name="twitterSocialAccountLink"
                        value={twitterSocialAccountLink}
                        onChange={onChange}
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
                        onChange={onChange}
                        placeholder="paste url here"
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <p className="font-14 text-secondary">
                        Note: Provide at least one social account
                      </p>
                    </div>
                  </div>
                  <div className="PaginateButton">
                    <div className="row">
                      <div className="col-6 mt-4">
                        <span
                          className="button ripple button-base back_button"
                          onClick={webAndSocialMediaBack}
                        >
                          BACK
                        </span>
                      </div>
                      <div className="col-6 mt-4">
                        <span
                          className="button ripple button-base next_button"
                          onClick={webAndSocialMedia}
                        >
                          NEXT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {contactInfoShown && (
            <>
              <div className="head">
                <span className="hd1">Application Critaria</span>
                <span className="hd2">Company Profile</span>
                <span className="hd3">Web & Social Media</span>
                <span className="hd4 active">Contact Info</span>
                <span className="hd5">Confirm Account</span>
              </div>
              <div className="sellerApplicationBox">
                {/* CONTACT INFO PORTION */}
                <div className="container-fluid">
                  <div className="row mt-2">
                    <div className="col-md-3 mt-1">
                      <label>
                        Gender
                        <span className="text-danger font-16">*</span>
                      </label>
                      <select
                        value={userGender}
                        name="userGender"
                        onChange={onChange}
                      >
                        <option>Select Gender</option>
                        <option>Mr.</option>
                        <option>Mrs.</option>
                      </select>
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>
                        First Name
                        <span className="text-danger font-16">*</span>
                      </label>
                      <input
                        type="text"
                        name="userFirstName"
                        value={userFirstName}
                        onChange={onChange}
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>
                        Middle Name
                        <span className="text-danger font-16">*</span>
                      </label>
                      <input
                        type="text"
                        name="userMiddleName"
                        value={userMiddleName}
                        onChange={onChange}
                        placeholder="Middle Name "
                      />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>
                        Last Name
                        <span className="text-danger font-16">*</span>
                      </label>
                      <input
                        type="text"
                        name="userLastName"
                        value={userLastName}
                        onChange={onChange}
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-md-6 mt-4">
                      <label>
                        UserName
                        <span className="text-danger font-16">*</span>
                      </label>
                      <input
                        type="text"
                        name="userName"
                        value={userName}
                        onChange={onChange}
                        placeholder="User Name "
                      />
                    </div>
                    <div className="col-md-6 mt-4">
                      <label>
                        Password
                        <span className="text-danger font-16">*</span>
                      </label>
                      <input
                        type="password"
                        name="userpassword"
                        value={userpassword}
                        onChange={onChange}
                        placeholder="Enter Password"
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <label>
                        Title
                        <span className="text-danger font-16">*</span>
                      </label>
                      <input
                        type="text"
                        name="userTitle"
                        value={userTitle}
                        onChange={onChange}
                        placeholder="eg. CEO, Owner, Manager, Designer, Merchandiser"
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <label>
                        Bio
                        <span className="text-danger font-16">*</span>
                      </label>
                      <input
                        type="text"
                        name="userBio"
                        value={userBio}
                        onChange={onChange}
                        placeholder="Enter Bio"
                      />
                    </div>
                    <div className="col-12 mt-2">
                      <label className="font-15">
                        BUSINESS MAILING ADDRESS
                        <span className="text-danger font-16">*</span>
                      </label>
                      <div className="underLine w-100"></div>
                    </div>
                    <div className="col-md-4">
                      <label>
                        Street Address
                        <span className="text-danger font-16">*</span>
                      </label>
                      <input
                        type="text"
                        name="userAddress"
                        value={userAddress}
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-md-4">
                      <label>
                        Apt / Suite / Other
                        <span className="text-danger font-16">*</span>
                      </label>
                      <input
                        type="text"
                        name="userAppartment"
                        value={userAppartment}
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-md-4">
                      <label>
                        City
                        <span className="text-danger font-16">*</span>
                      </label>
                      <input
                        type="text"
                        name="userCity"
                        value={userCity}
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-md-4 mt-4">
                      <label>
                        Zip / Postal Code
                        <span className="text-danger font-16">*</span>
                      </label>
                      <input
                        type="text"
                        name="userZipCode"
                        value={userZipCode}
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-md-4 mt-4">
                      <label>
                        Country
                        <span className="text-danger font-16">*</span>
                      </label>
                      <select
                        name="userCountry"
                        value={userCountry}
                        onChange={onChange}
                      >
                        <option>Select Country</option>
                        <option>Pakistan</option>
                        <option>iran</option>
                        <option>turkey</option>
                        <option>indonasia</option>
                      </select>
                    </div>
                    <div className="col-md-4 mt-4">
                      <label>
                        Phone Number
                        <span className="text-danger font-16">*</span>
                      </label>
                      <input
                        type="number"
                        name="userPhNumber"
                        value={userPhNumber}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="PaginateButton">
                    <div className="row">
                      <div className="col-6 mt-4">
                        <span
                          className="button ripple button-base back_button"
                          onClick={contactInfoBack}
                        >
                          BACK
                        </span>
                      </div>
                      <div className="col-6 mt-4">
                        <button
                          type="submit"
                          className="button ripple button-base next_button"
                        >
                          SUBMIT APPLICATION
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
      <div className="component">
        <Footer />
      </div>
    </>
  );
};

export default SellerApplication;
