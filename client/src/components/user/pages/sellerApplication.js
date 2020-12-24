import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import { Link } from "react-router-dom";
import $ from "jquery";
import UserImage from "../../../assets/images/admin/users/user-2.jpg";

const SellerApplication = () => {
  const [applicationShown, setapplicationShown] = useState(true);
  const [companyProfileShown, setcompanyProfileShown] = useState(false);
  const [webAndSocialMediaShown, setwebAndSocialMediaShown] = useState(false);
  const [contactInfoShown, setcontactInfoShown] = useState(false);
  const [sendCodeShown, setsendCodeShown] = useState(false);
  const [thanksShown, setthanksShown] = useState(false);

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
    userAddress: "",
    userAppartment: "",
    userCity: "",
    userZipCode: "",
    userCountry: "",
    userPhNumber: "",
    userpassword: "",
    role: "customer",
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
    userFirstName,
    userMiddleName,
    userLastName,
    userTitle,
    userAddress,
    userAppartment,
    userCity,
    userZipCode,
    userCountry,
    userPhNumber,
  } = newUser;
  const onChange = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  const ApplicationCriteria = (e) => {
    e.preventDefault();
    setapplicationShown(false);
    setcompanyProfileShown(true);
  };

  const companyProfile = (e) => {
    e.preventDefault();
    setcompanyProfileShown(false);
    setwebAndSocialMediaShown(true);
  };

  const companyprofileBack = (e) => {
    e.preventDefault();
    setcompanyProfileShown(false);
    setapplicationShown(true);
  };

  const webAndSocialMedia = (e) => {
    e.preventDefault();
    setwebAndSocialMediaShown(false);
    setcontactInfoShown(true);
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

  const sendCode = (e) => {
    e.preventDefault();
    setsendCodeShown(false);
    setthanksShown(true);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    setcontactInfoShown(false);
    setsendCodeShown(true);
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
        <form onSubmit={onsubmit}>
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
                      <div className="accountImage">
                        <img src={UserImage} alt="" />
                      </div>
                      <label className="changePic">
                        Change Photo
                        <input
                          type="file"
                          name="userImage"
                          value={userImage}
                          onChange={onChange}
                        />
                      </label>
                    </div>
                    <div className="col-md-4">
                      <label>How did you hear about Panda/ta</label>
                      <div className="underLine"></div>
                      <select
                        onChange={onChange}
                        name="hearAboutPandata"
                        value={hearAboutPandata}
                      >
                        <option>Google</option>
                        <option value="...">Online Advertising </option>
                        <option>Social Media</option>
                        <option>Press</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-4">
                      <label>Email</label>
                      <input
                        type="email"
                        name="userEmail"
                        value={userEmail}
                        required
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
                      <label>Business Name</label>
                      <input
                        type="text"
                        name="businessName"
                        value={businessName}
                        required
                        onChange={onChange}
                        placeholder="xxyz@gmail.com"
                      />
                    </div>
                    <div className="col-md-4 mt-4 pt-1">
                      <select
                        name="businessType"
                        value={businessType}
                        required
                        onChange={onChange}
                      >
                        <option>Business Type</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="col-md-4 mt-4 pt-1">
                      <select
                        name="businessMainSaleChannel"
                        value={businessMainSaleChannel}
                        required
                        onChange={onChange}
                      >
                        <option>Main Sales Channel</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="col-md-4 mt-4 pt-1">
                      <select
                        name="businessYearEstablish"
                        value={businessYearEstablish}
                        required
                        onChange={onChange}
                      >
                        <option>Year Established</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="col-md-6 mt-4">
                      <label>Busienss Identity type</label>
                      <select
                        name="businessIdentityType"
                        value={businessIdentityType}
                        required
                        onChange={onChange}
                      >
                        <option>Retail Business License</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="col-md-6 mt-4">
                      <label>Business ID Number</label>
                      <input
                        type="number"
                        name="businessIdNumber"
                        value={businessIdNumber}
                        required
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
                        name=""
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
                        name=""
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
                        name=""
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
                        name=""
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
                      <label>Name</label>
                      <select required value={userGender}>
                        <option>Mr.</option>
                        <option>Mrs.</option>
                      </select>
                    </div>
                    <div className="col-md-3 mt-4">
                      <input
                        type="text"
                        name=""
                        value={userFirstName}
                        onChange={onChange}
                        required
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-3 mt-4">
                      <input
                        type="text"
                        name=""
                        value={userMiddleName}
                        onChange={onChange}
                        required
                        placeholder="Middle Name "
                      />
                    </div>
                    <div className="col-md-3 mt-4">
                      <input
                        type="text"
                        name=""
                        value={userLastName}
                        onChange={onChange}
                        required
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-12 mt-3">
                      <label>Title</label>
                      <input
                        type="text"
                        name=""
                        value={userTitle}
                        onChange={onChange}
                        required
                        placeholder="eg. CEO, Owner, Manager, Designer, Merchandiser"
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <label className="font-15">
                        BUSINESS MAILING ADDRESS
                      </label>
                      <div className="underLine w-100"></div>
                    </div>
                    <div className="col-md-4 mt-2">
                      <label>Street Address</label>
                      <input
                        type="text"
                        name=""
                        value={userAddress}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="col-md-4 mt-2">
                      <label>Apt / Suite / Other</label>
                      <input
                        type="text"
                        name=""
                        value={userAppartment}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="col-md-4 mt-2">
                      <label>City</label>
                      <input
                        type="text"
                        name=""
                        value={userCity}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="col-md-4 mt-4">
                      <label>Zip / Postal Code</label>
                      <input
                        type="text"
                        name=""
                        value={userZipCode}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="col-md-4 mt-4">
                      <label>Country</label>
                      <select
                        name=""
                        value={userCountry}
                        required
                        onChange={onChange}
                      >
                        <option>Select Country</option>
                        <option>Pakistan</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="col-md-4 mt-4">
                      <label>Phone Number</label>
                      <input
                        type="number"
                        name=""
                        value={userPhNumber}
                        required
                        onChange={onChange}
                      />
                      <p className="font-13 text-secondary">
                        To Validate your account please enter valid mobile
                        Number to receive confirmation code
                      </p>
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
          {sendCodeShown && (
            <>
              <div className="head">
                <span className="hd1">Application Critaria</span>
                <span className="hd2">Company Profile</span>
                <span className="hd3">Web & Social Media</span>
                <span className="hd4">Contact Info</span>
                <span className="hd5 active">Confirm Account</span>
              </div>
              <div className="sellerApplicationBox">
                {/* CONFIRM ACCOUNT PORTION */}
                <div className="container-fluid">
                  <div className="row mt-2">
                    <div className="col-12 mt-4">
                      <div className="mt-3">
                        <p className="text-center font-15 text-darkpurple mt-2">
                          Enter Confirmation code send to your mobile phone
                        </p>
                        <input type="number" className="mt-2" required />
                        <span
                          className="button ripple button-base next_button"
                          onClick={sendCode}
                        >
                          Confirm
                        </span>
                      </div>
                      <div className="mt-5">
                        <p className="text-center font-14 text-darkpurple mt-5">
                          Dont’s have code? <br /> Generate new code, Enter your
                          Mobile Number
                        </p>
                        <input type="number" className="mt-2" required />
                        <span
                          className="button ripple button-base next_button"
                          onClick={sendCode}
                        >
                          Regenerate Code
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {thanksShown && (
            <>
              <div className="head">
                <span className="hd1">Application Critaria</span>
                <span className="hd2">Company Profile</span>
                <span className="hd3">Web & Social Media</span>
                <span className="hd4">Contact Info</span>
                <span className="hd5 active">Confirm Account</span>
              </div>
              <div className="sellerApplicationBox">
                {/* CONFIRM ACCOUNT PORTION */}
                <p className="text-center font-14 text-darkpurple mt-5">
                  Thank you for submitting Seller Application. Your application
                  is being reviewed, withing 48 hours. <br /> You will receive
                  and email about the status of your application.
                </p>
                <Link to="/product" className="btn btn-darkpurple mt-3 ripple">
                  LET’S GO FOR SHOPPING
                </Link>
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
