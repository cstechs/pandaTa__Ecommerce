import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../partials/topnavbar'
import Footer from '../partials/footer'

import UserImage from '../../../assets/images/admin/users/user-6.jpg'

const Customers = () => {

    return (
        <div className="Dashobard">
            <div id="wrapper">
                <Navbar />
                <div className="content-page" id="content">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div class="page-title-box">
                                        <div class="page-title-right">
                                            <ol class="breadcrumb m-0">
                                                <li class="breadcrumb-item"><Link to="/admin">PANDA / TA</Link></li>
                                                <li class="breadcrumb-item active">Customer</li>
                                            </ol>
                                        </div>
                                        <h4 class="page-title">Customers</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-12">
                                    <div className="card">
                                        <form className="CustomerSearchBox">
                                            <input type="text" placeholder="Search Here..." />
                                            <button type="submit"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-1">
                                {/* CARD */}
                                <div className="col-lg-4">
                                    <div className="text-center customer-card">
                                        <div className="float-left"><i className="fas fa-pencil-alt"></i></div>
                                        <div className="float-right"><i className="fas fa-times"></i></div>
                                        <div className="pt-1 pb-1">
                                            <img
                                                src={UserImage}
                                                className="rounded-circle img-thumbnail avatar-lg"
                                                alt="profile-image"
                                            />
                                            <h4 className="mt-2 mb-1 font-16 text-dark">
                                                Freddie J. Plourde
                                            </h4>
                                            <p className="text-muted">
                                                United States <span> | </span>
                                             871.567.4877
                                            </p>
                                            <p className="text-center">
                                                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="/"><i className="fab fa-pinterest"></i></Link>
                                                <Link to="/"><i className="fab fa-twitter"></i></Link>
                                                <Link to="/"><i className="fab fa-instagram"></i></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* CARD */}
                                <div className="col-lg-4">
                                    <div className="text-center customer-card">
                                        <div className="float-left"><i className="fas fa-pencil-alt"></i></div>
                                        <div className="float-right"><i className="fas fa-times"></i></div>
                                        <div className="pt-1 pb-1">
                                            <img
                                                src={UserImage}
                                                className="rounded-circle img-thumbnail avatar-lg"
                                                alt="profile-image"
                                            />
                                            <h4 className="mt-2 mb-1 font-16 text-dark">
                                                Freddie J. Plourde
                                            </h4>
                                            <p className="text-muted">
                                                United States <span> | </span>
                                             871.567.4877
                                            </p>
                                            <p className="text-center">
                                                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="/"><i className="fab fa-pinterest"></i></Link>
                                                <Link to="/"><i className="fab fa-twitter"></i></Link>
                                                <Link to="/"><i className="fab fa-instagram"></i></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* CARD */}
                                <div className="col-lg-4">
                                    <div className="text-center customer-card">
                                        <div className="float-left"><i className="fas fa-pencil-alt"></i></div>
                                        <div className="float-right"><i className="fas fa-times"></i></div>
                                        <div className="pt-1 pb-1">
                                            <img
                                                src={UserImage}
                                                className="rounded-circle img-thumbnail avatar-lg"
                                                alt="profile-image"
                                            />
                                            <h4 className="mt-2 mb-1 font-16 text-dark">
                                                Freddie J. Plourde
                                            </h4>
                                            <p className="text-muted">
                                                United States <span> | </span>
                                             871.567.4877
                                            </p>
                                            <p className="text-center">
                                                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="/"><i className="fab fa-pinterest"></i></Link>
                                                <Link to="/"><i className="fab fa-twitter"></i></Link>
                                                <Link to="/"><i className="fab fa-instagram"></i></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* CARD */}
                                <div className="col-lg-4">
                                    <div className="text-center customer-card">
                                        <div className="float-left"><i className="fas fa-pencil-alt"></i></div>
                                        <div className="float-right"><i className="fas fa-times"></i></div>
                                        <div className="pt-1 pb-1">
                                            <img
                                                src={UserImage}
                                                className="rounded-circle img-thumbnail avatar-lg"
                                                alt="profile-image"
                                            />
                                            <h4 className="mt-2 mb-1 font-16 text-dark">
                                                Freddie J. Plourde
                                            </h4>
                                            <p className="text-muted">
                                                United States <span> | </span>
                                             871.567.4877
                                            </p>
                                            <p className="text-center">
                                                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="/"><i className="fab fa-pinterest"></i></Link>
                                                <Link to="/"><i className="fab fa-twitter"></i></Link>
                                                <Link to="/"><i className="fab fa-instagram"></i></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* CARD */}
                                <div className="col-lg-4">
                                    <div className="text-center customer-card">
                                        <div className="float-left"><i className="fas fa-pencil-alt"></i></div>
                                        <div className="float-right"><i className="fas fa-times"></i></div>
                                        <div className="pt-1 pb-1">
                                            <img
                                                src={UserImage}
                                                className="rounded-circle img-thumbnail avatar-lg"
                                                alt="profile-image"
                                            />
                                            <h4 className="mt-2 mb-1 font-16 text-dark">
                                                Freddie J. Plourde
                                            </h4>
                                            <p className="text-muted">
                                                United States <span> | </span>
                                             871.567.4877
                                            </p>
                                            <p className="text-center">
                                                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="/"><i className="fab fa-pinterest"></i></Link>
                                                <Link to="/"><i className="fab fa-twitter"></i></Link>
                                                <Link to="/"><i className="fab fa-instagram"></i></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* CARD */}
                                <div className="col-lg-4">
                                    <div className="text-center customer-card">
                                        <div className="float-left"><i className="fas fa-pencil-alt"></i></div>
                                        <div className="float-right"><i className="fas fa-times"></i></div>
                                        <div className="pt-1 pb-1">
                                            <img
                                                src={UserImage}
                                                className="rounded-circle img-thumbnail avatar-lg"
                                                alt="profile-image"
                                            />
                                            <h4 className="mt-2 mb-1 font-16 text-dark">
                                                Freddie J. Plourde
                                            </h4>
                                            <p className="text-muted">
                                                United States <span> | </span>
                                             871.567.4877
                                            </p>
                                            <p className="text-center">
                                                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="/"><i className="fab fa-pinterest"></i></Link>
                                                <Link to="/"><i className="fab fa-twitter"></i></Link>
                                                <Link to="/"><i className="fab fa-instagram"></i></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* CARD */}
                                <div className="col-lg-4">
                                    <div className="text-center customer-card">
                                        <div className="float-left"><i className="fas fa-pencil-alt"></i></div>
                                        <div className="float-right"><i className="fas fa-times"></i></div>
                                        <div className="pt-1 pb-1">
                                            <img
                                                src={UserImage}
                                                className="rounded-circle img-thumbnail avatar-lg"
                                                alt="profile-image"
                                            />
                                            <h4 className="mt-2 mb-1 font-16 text-dark">
                                                Freddie J. Plourde
                                            </h4>
                                            <p className="text-muted">
                                                United States <span> | </span>
                                             871.567.4877
                                            </p>
                                            <p className="text-center">
                                                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="/"><i className="fab fa-pinterest"></i></Link>
                                                <Link to="/"><i className="fab fa-twitter"></i></Link>
                                                <Link to="/"><i className="fab fa-instagram"></i></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* CARD */}
                                <div className="col-lg-4">
                                    <div className="text-center customer-card">
                                        <div className="float-left"><i className="fas fa-pencil-alt"></i></div>
                                        <div className="float-right"><i className="fas fa-times"></i></div>
                                        <div className="pt-1 pb-1">
                                            <img
                                                src={UserImage}
                                                className="rounded-circle img-thumbnail avatar-lg"
                                                alt="profile-image"
                                            />
                                            <h4 className="mt-2 mb-1 font-16 text-dark">
                                                Freddie J. Plourde
                                            </h4>
                                            <p className="text-muted">
                                                United States <span> | </span>
                                             871.567.4877
                                            </p>
                                            <p className="text-center">
                                                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="/"><i className="fab fa-pinterest"></i></Link>
                                                <Link to="/"><i className="fab fa-twitter"></i></Link>
                                                <Link to="/"><i className="fab fa-instagram"></i></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* CARD */}
                                <div className="col-lg-4">
                                    <div className="text-center customer-card">
                                        <div className="float-left"><i className="fas fa-pencil-alt"></i></div>
                                        <div className="float-right"><i className="fas fa-times"></i></div>
                                        <div className="pt-1 pb-1">
                                            <img
                                                src={UserImage}
                                                className="rounded-circle img-thumbnail avatar-lg"
                                                alt="profile-image"
                                            />
                                            <h4 className="mt-2 mb-1 font-16 text-dark">
                                                Freddie J. Plourde
                                            </h4>
                                            <p className="text-muted">
                                                United States <span> | </span>
                                             871.567.4877
                                            </p>
                                            <p className="text-center">
                                                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="/"><i className="fab fa-pinterest"></i></Link>
                                                <Link to="/"><i className="fab fa-twitter"></i></Link>
                                                <Link to="/"><i className="fab fa-instagram"></i></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* CARD */}
                                <div className="col-lg-4">
                                    <div className="text-center customer-card">
                                        <div className="float-left"><i className="fas fa-pencil-alt"></i></div>
                                        <div className="float-right"><i className="fas fa-times"></i></div>
                                        <div className="pt-1 pb-1">
                                            <img
                                                src={UserImage}
                                                className="rounded-circle img-thumbnail avatar-lg"
                                                alt="profile-image"
                                            />
                                            <h4 className="mt-2 mb-1 font-16 text-dark">
                                                Freddie J. Plourde
                                            </h4>
                                            <p className="text-muted">
                                                United States <span> | </span>
                                             871.567.4877
                                            </p>
                                            <p className="text-center">
                                                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="/"><i className="fab fa-pinterest"></i></Link>
                                                <Link to="/"><i className="fab fa-twitter"></i></Link>
                                                <Link to="/"><i className="fab fa-instagram"></i></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* CARD */}
                                <div className="col-lg-4">
                                    <div className="text-center customer-card">
                                        <div className="float-left"><i className="fas fa-pencil-alt"></i></div>
                                        <div className="float-right"><i className="fas fa-times"></i></div>
                                        <div className="pt-1 pb-1">
                                            <img
                                                src={UserImage}
                                                className="rounded-circle img-thumbnail avatar-lg"
                                                alt="profile-image"
                                            />
                                            <h4 className="mt-2 mb-1 font-16 text-dark">
                                                Freddie J. Plourde
                                            </h4>
                                            <p className="text-muted">
                                                United States <span> | </span>
                                             871.567.4877
                                            </p>
                                            <p className="text-center">
                                                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="/"><i className="fab fa-pinterest"></i></Link>
                                                <Link to="/"><i className="fab fa-twitter"></i></Link>
                                                <Link to="/"><i className="fab fa-instagram"></i></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div >
    )
}

export default Customers
