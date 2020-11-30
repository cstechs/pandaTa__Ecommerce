import React, { useEffect } from 'react'
import Header from '../partials/header'
import NavBar from '../partials/navbar'
import Footer from '../partials/footer'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import UserImage from '../../../assets/images/admin/users/user-2.jpg'

const SellerApplication = () => {

    const ApplicationCriteriaSubmit = () => {
        document.getElementsByClassName("hd1")[0].classList.remove("active");
        document.getElementsByClassName("hd2")[0].classList.toggle("active");
        document.getElementById("ApplicationCriteria").style.display = "none";
        document.getElementById("companyprofile").style.display = "block";
    }
    const companyProfileSubmit = () => {
        document.getElementsByClassName("hd2")[0].classList.remove("active");
        document.getElementsByClassName("hd3")[0].classList.toggle("active");
        document.getElementById("companyprofile").style.display = "none";
        document.getElementById("webAndSocialMedia").style.display = "block";
    }
    const webAndSocialMediaFormSubmit = () => {
        document.getElementsByClassName("hd3")[0].classList.remove("active");
        document.getElementsByClassName("hd4")[0].classList.toggle("active");
        document.getElementById("webAndSocialMedia").style.display = "none";
        document.getElementById("contactInfo").style.display = "block";
    }
    const contactInfoFormSubmit = () => {
        document.getElementsByClassName("hd4")[0].classList.remove("active");
        document.getElementsByClassName("hd5")[0].classList.toggle("active");
        document.getElementById("contactInfo").style.display = "none";
        document.getElementById("confirmAccount").style.display = "block";
    }
    const sendCodeFormSubmit = () => {
        document.getElementById("confirmAccount").style.display = "none";
        document.getElementById("goBackToShopping").style.display = "block";
    }
    const reGenerateCodeFormSubmit = () => {
        document.getElementById("confirmAccount").style.display = "none";
        document.getElementById("goBackToShopping").style.display = "block";
    }

    const companyprofileFormBack = () => {
        document.getElementsByClassName("hd2")[0].classList.remove("active");
        document.getElementsByClassName("hd1")[0].classList.toggle("active");
        document.getElementById("companyprofile").style.display = "none";
        document.getElementById("ApplicationCriteria").style.display = "block";
    }

    const webAndSocialMediaFormBack = () => {
        document.getElementsByClassName("hd3")[0].classList.remove("active");
        document.getElementsByClassName("hd2")[0].classList.toggle("active");
        document.getElementById("webAndSocialMedia").style.display = "none";
        document.getElementById("companyprofile").style.display = "block";
    }

    const contactInfoFormBack = () => {
        document.getElementsByClassName("hd4")[0].classList.remove("active");
        document.getElementsByClassName("hd3")[0].classList.toggle("active");
        document.getElementById("contactInfo").style.display = "none";
        document.getElementById("webAndSocialMedia").style.display = "block";
    }
    useEffect(() => {
        $("#applicationCriteria_form").submit(function (e) {
            e.preventDefault();
        });
        $("#companyProfile_form").submit(function (e) {
            e.preventDefault();
        });
        $("#webAndSocialMedia_form").submit(function (e) {
            e.preventDefault();
        });
        $("#contactInfo_form").submit(function (e) {
            e.preventDefault();
        });
        $("#sendCode_form").submit(function (e) {
            e.preventDefault();
        });
        $("#reGenerateCode_form").submit(function (e) {
            e.preventDefault();
        });
    })
    return (
        <>
            <div className="component">
                <Header />
                <NavBar />
            </div>
            <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Seller Application</li>
            </ol>
            <div className="sellerApplication">
                <div className="head">
                    <span className="hd1 active">Application Critaria</span>
                    <span className="hd2">Company Profile</span>
                    <span className="hd3">Web & Social Media</span>
                    <span className="hd4">Contact Info</span>
                    <span className="hd5">Confirm Account</span>
                </div>
                <div className="sellerApplicationBox">
                    {/* APPLICATION CRITERIA PORTION */}
                    <div id="ApplicationCriteria">
                        <form id="applicationCriteria_form" onSubmit={ApplicationCriteriaSubmit}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 mt-3">
                                        <p>Copyright will provide is wonderful serenity has taken possession of my entire as soul, like these sweet <br />
                                         mornings of spring which I enjoy with my whole heart. I am alone standards.</p>
                                        <Link to="/sellerapplication" className="text-darkpurple">Read our Buyer guidelines</Link>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <label>Your Account</label>
                                        <div className="underLine"></div>
                                        <div className="accountImage">
                                            <img src={UserImage} alt="" />
                                        </div>
                                        <label className="changePic">Change Photo
                                        <input type="file"/>
                                        </label>
                                    </div>
                                    <div className="col-md-4">
                                        <label>How did you hear about Panda/ta</label>
                                        <div className="underLine"></div>
                                        <select required>
                                            <option>Google</option>
                                            <option>Online Advertising  </option>
                                            <option>Social Media</option>
                                            <option>Press</option>
                                            <option>Others</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-4">
                                        <label>Email</label>
                                        <input type="email" required placeholder="xyz@gmail.com" />
                                        <Link to="/sellerapplication" className="text-danger mt-2">Sign out and apply with anoter account</Link>
                                    </div>
                                </div>
                                <div className="PaginateButton">
                                    <div className="row">
                                        <div className="col-6 mt-4">
                                            <Link to="/sellerapplication" className="button ripple button-base back_button">BACK</Link>
                                        </div>
                                        <div className="col-6 mt-4">
                                            <button type="submit" className="button ripple button-base next_button">NEXT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* COMPANY PROFILE PORTION */}
                    <div id="companyprofile">
                        <form id="companyProfile_form" onSubmit={companyProfileSubmit}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 mt-4">
                                        <label>Business Name</label>
                                        <input type="text" required placeholder="xxyz@gmail.com" />
                                    </div>
                                    <div className="col-md-4 mt-4 pt-1">
                                        <select required>
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
                                        <select required>
                                            <option>Main Sales Chane</option>
                                            <option>...</option>
                                            <option>...</option>
                                            <option>...</option>
                                            <option>...</option>
                                            <option>...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 mt-4 pt-1">
                                        <select required>
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
                                        <select required>
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
                                        <input type="number" required placeholder="eg. 32756158421584" />
                                    </div>
                                </div>
                                <div className="PaginateButton">
                                    <div className="row">
                                        <div className="col-6 mt-4">
                                            <span className="button ripple button-base back_button" onClick={companyprofileFormBack}>BACK</span>
                                        </div>
                                        <div className="col-6 mt-4">
                                            <button type="submit" className="button ripple button-base next_button">NEXT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* WEB AND SOCIAL MEDIA PORTION */}
                    <div id="webAndSocialMedia">
                        <form id="webAndSocialMedia_form" onSubmit={webAndSocialMediaFormSubmit}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 mt-4">
                                        <label><i className="fab fa-facebook-f font-17 mr-1"></i>Facebook</label>
                                        <input type="url" placeholder="paste url here" />
                                    </div>
                                    <div className="col-12 mt-4">
                                        <label><i className="fab fa-pinterest font-17 mr-1"></i>Pinterest</label>
                                        <input type="url" placeholder="paste url here" />
                                    </div>
                                    <div className="col-12 mt-4">
                                        <label><i className="fab fa-twitter font-17 mr-1"></i>Twitter</label>
                                        <input type="url" placeholder="paste url here" />
                                    </div>
                                    <div className="col-12 mt-4">
                                        <label><i className="fab fa-instagram font-17 mr-1"></i>Instagram</label>
                                        <input type="url" placeholder="paste url here" />
                                    </div>
                                    <div className="col-12 mt-4">
                                        <p className="font-14 text-secondary">Note: Provide at least one social account</p>
                                    </div>
                                </div>
                                <div className="PaginateButton">
                                    <div className="row">
                                        <div className="col-6 mt-4">
                                            <span className="button ripple button-base back_button" onClick={webAndSocialMediaFormBack}>BACK</span>
                                        </div>
                                        <div className="col-6 mt-4">
                                            <button type="submit" className="button ripple button-base next_button">NEXT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* CONTACT INFO PORTION */}
                    <div id="contactInfo">
                        <form id="contactInfo_form" onSubmit={contactInfoFormSubmit}>
                            <div className="container-fluid">
                                <div className="row mt-2">
                                    <div className="col-md-3 mt-1">
                                        <label>Name</label>
                                        <select required>
                                            <option>Mr.</option>
                                            <option>Mrs.</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mt-4">
                                        <input type="text" required placeholder="First Name" />
                                    </div>
                                    <div className="col-md-3 mt-4">
                                        <input type="text" required placeholder="Middle Name " />
                                    </div>
                                    <div className="col-md-3 mt-4">
                                        <input type="text" required placeholder="Last Name" />
                                    </div>
                                    <div className="col-12 mt-3">
                                        <label>Title</label>
                                        <input type="text" required placeholder="eg. CEO, Owner, Manager, Designer, Merchandiser" />
                                    </div>
                                    <div className="col-12 mt-4">
                                        <label className="font-15">BUSINESS MAILING ADDRESS</label>
                                        <div className="underLine w-100"></div>
                                    </div>
                                    <div className="col-md-4 mt-2">
                                        <label>Street Address</label>
                                        <input type="text" required />
                                    </div>
                                    <div className="col-md-4 mt-2">
                                        <label>Apt / Suite / Other</label>
                                        <input type="text" required />
                                    </div>
                                    <div className="col-md-4 mt-2">
                                        <label>City</label>
                                        <input type="text" required />
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <label>Zip / Postal Code</label>
                                        <input type="text" required />
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <label>Country</label>
                                        <select required>
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
                                        <input type="number" required />
                                        <p className="font-13 text-secondary">To Validate your account please enter valid mobile Number to receive confirmation code</p>
                                    </div>
                                </div>
                                <div className="PaginateButton">
                                    <div className="row">
                                        <div className="col-6 mt-4">
                                            <span className="button ripple button-base back_button" onClick={contactInfoFormBack}>BACK</span>
                                        </div>
                                        <div className="col-6 mt-4">
                                            <button type="submit" className="button ripple button-base next_button">SUBMIT APPLICATION</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* CONFIRM ACCOUNT PORTION */}
                    <div id="confirmAccount">
                        <div className="container-fluid">
                            <div className="row mt-2">
                                <div className="col-12 mt-4">
                                    <form id="sendCode_form" onSubmit={sendCodeFormSubmit} className="mt-3">
                                        <p className="text-center font-15 text-darkpurple mt-2">Enter Confirmation code send to your mobile phone</p>
                                        <input type="number" className="mt-2" required />
                                        <input type="submit" value="Confirm" className="btn btn-darkpurple mt-3 ripple" />
                                    </form>
                                    <form id="reGenerateCode_form" onSubmit={reGenerateCodeFormSubmit} className="mt-5">
                                        <p className="text-center font-14 text-darkpurple mt-5">Dont’s have code? <br /> Generate new code, Enter your Mobile Number</p>
                                        <input type="number" className="mt-2" required />
                                        <input type="submit" value="Regenerate Code" className="btn btn-darkpurple mt-3 ripple" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CONFIRM ACCOUNT PORTION */}
                    <div id="goBackToShopping">
                        <p className="text-center font-14 text-darkpurple mt-5">Thank you for submitting Seller Application. Your application is being reviewed, withing 48 hours. <br /> You will receive and email about the status of your application.</p>
                        <Link to="/product" className="btn btn-darkpurple mt-3 ripple">LET’S GO FOR SHOPPING</Link>
                    </div>
                </div>
            </div>
            <div className="component">
                <Footer />
            </div>
        </>
    )
}

export default SellerApplication
