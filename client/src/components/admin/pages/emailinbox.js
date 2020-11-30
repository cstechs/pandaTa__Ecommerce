import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../partials/topnavbar'
import Footer from '../partials/footer'
import InboxLeftBar from '../partials/emailSideBar'

const EmailInbox = () => {

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
                                                <li class="breadcrumb-item"><Link to="/admin/email/inbox">Email</Link></li>
                                                <li class="breadcrumb-item active">Inbox</li>
                                            </ol>
                                        </div>
                                        <h4 class="page-title">Inbox</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div class="card-box">
                                        <div class="inbox-leftbar">
                                            <InboxLeftBar />
                                        </div>
                                        <div className="inbox-rightbar">
                                            <form className="EmailSearchBox">
                                                <input type="text" placeholder="Search Message or Name..." />
                                                <button type="submit"><i className="fa fa-search"></i></button>
                                            </form>
                                            <div className="mt-3">
                                                <ul className="message-list">
                                                    <li className="unread">
                                                        <Link to="/admin/email/read">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk1" />
                                                                    <label htmlFor="chk1" className="toggle" />
                                                                </div>
                                                                <span className="star-toggle far fa-star" />
                                                                <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href className="subject">
                                                                    Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                        @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                                </a>
                                                                <div className="date">11:49 am</div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/admin/email/read">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk2" />
                                                                    <label htmlFor="chk2" className="toggle" />
                                                                </div>
                                                                <span className="star-toggle far fa-star text-warning" />
                                                                <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href className="subject">
                                                                    Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                        @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                                </a>
                                                                <div className="date">11:49 am</div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="unread">
                                                        <Link to="/admin/email/read">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk3" />
                                                                    <label htmlFor="chk3" className="toggle" />
                                                                </div>
                                                                <span className="star-toggle far fa-star" />
                                                                <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href className="subject">
                                                                    Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                        @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                                </a>
                                                                <div className="date">11:49 am</div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/admin/email/read">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk4" />
                                                                    <label htmlFor="chk4" className="toggle" />
                                                                </div>
                                                                <span className="star-toggle far fa-star text-warning" />
                                                                <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href className="subject">
                                                                    Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                        @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                                </a>
                                                                <div className="date">11:49 am</div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="unread">
                                                        <Link to="/admin/email/read">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk5" />
                                                                    <label htmlFor="chk5" className="toggle" />
                                                                </div>
                                                                <span className="star-toggle far fa-star" />
                                                                <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href className="subject">
                                                                    Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                        @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                                </a>
                                                                <div className="date">11:49 am</div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/admin/email/read">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk6" />
                                                                    <label htmlFor="chk6" className="toggle" />
                                                                </div>
                                                                <span className="star-toggle far fa-star text-warning" />
                                                                <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href className="subject">
                                                                    Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                        @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                                </a>
                                                                <div className="date">11:49 am</div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="unread">
                                                        <Link to="/admin/email/read">
                                                            <div className="col-mail col-mail-1">
                                                                <div className="checkbox-wrapper-mail">
                                                                    <input type="checkbox" id="chk7" />
                                                                    <label htmlFor="chk7" className="toggle" />
                                                                </div>
                                                                <span className="star-toggle far fa-star" />
                                                                <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                            </div>
                                                            <div className="col-mail col-mail-2">
                                                                <a href className="subject">
                                                                    Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                        @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                                </a>
                                                                <div className="date">11:49 am</div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <div className="col-mail col-mail-1">
                                                            <div className="checkbox-wrapper-mail">
                                                                <input type="checkbox" id="chk8" />
                                                                <label htmlFor="chk8" className="toggle" />
                                                            </div>
                                                            <span className="star-toggle far fa-star text-warning" />
                                                            <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                        </div>
                                                        <div className="col-mail col-mail-2">
                                                            <a href className="subject">
                                                                Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                    @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                            </a>
                                                            <div className="date">11:49 am</div>
                                                        </div>
                                                    </li>
                                                    <li className="unread">
                                                        <div className="col-mail col-mail-1">
                                                            <div className="checkbox-wrapper-mail">
                                                                <input type="checkbox" id="chk9" />
                                                                <label htmlFor="chk9" className="toggle" />
                                                            </div>
                                                            <span className="star-toggle far fa-star" />
                                                            <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                        </div>
                                                        <div className="col-mail col-mail-2">
                                                            <a href className="subject">
                                                                Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                    @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                            </a>
                                                            <div className="date">11:49 am</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="col-mail col-mail-1">
                                                            <div className="checkbox-wrapper-mail">
                                                                <input type="checkbox" id="chk10" />
                                                                <label htmlFor="chk10" className="toggle" />
                                                            </div>
                                                            <span className="star-toggle far fa-star text-warning" />
                                                            <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                        </div>
                                                        <div className="col-mail col-mail-2">
                                                            <a href className="subject">
                                                                Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                    @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                            </a>
                                                            <div className="date">11:49 am</div>
                                                        </div>
                                                    </li>
                                                    <li className="unread">
                                                        <div className="col-mail col-mail-1">
                                                            <div className="checkbox-wrapper-mail">
                                                                <input type="checkbox" id="chk11" />
                                                                <label htmlFor="chk11" className="toggle" />
                                                            </div>
                                                            <span className="star-toggle far fa-star" />
                                                            <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                        </div>
                                                        <div className="col-mail col-mail-2">
                                                            <a href className="subject">
                                                                Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                    @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                            </a>
                                                            <div className="date">11:49 am</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="col-mail col-mail-1">
                                                            <div className="checkbox-wrapper-mail">
                                                                <input type="checkbox" id="chk12" />
                                                                <label htmlFor="chk12" className="toggle" />
                                                            </div>
                                                            <span className="star-toggle far fa-star text-warning" />
                                                            <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                        </div>
                                                        <div className="col-mail col-mail-2">
                                                            <a href className="subject">
                                                                Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                    @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                            </a>
                                                            <div className="date">11:49 am</div>
                                                        </div>
                                                    </li>
                                                    <li className="unread">
                                                        <div className="col-mail col-mail-1">
                                                            <div className="checkbox-wrapper-mail">
                                                                <input type="checkbox" id="chk13" />
                                                                <label htmlFor="chk13" className="toggle" />
                                                            </div>
                                                            <span className="star-toggle far fa-star" />
                                                            <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                        </div>
                                                        <div className="col-mail col-mail-2">
                                                            <a href className="subject">
                                                                Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                    @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                            </a>
                                                            <div className="date">11:49 am</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="col-mail col-mail-1">
                                                            <div className="checkbox-wrapper-mail">
                                                                <input type="checkbox" id="chk14" />
                                                                <label htmlFor="chk14" className="toggle" />
                                                            </div>
                                                            <span className="star-toggle far fa-star text-warning" />
                                                            <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                        </div>
                                                        <div className="col-mail col-mail-2">
                                                            <a href className="subject">
                                                                Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                    @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                            </a>
                                                            <div className="date">11:49 am</div>
                                                        </div>
                                                    </li>
                                                    <li className="unread">
                                                        <div className="col-mail col-mail-1">
                                                            <div className="checkbox-wrapper-mail">
                                                                <input type="checkbox" id="chk15" />
                                                                <label htmlFor="chk15" className="toggle" />
                                                            </div>
                                                            <span className="star-toggle far fa-star" />
                                                            <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                        </div>
                                                        <div className="col-mail col-mail-2">
                                                            <a href className="subject">
                                                                Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                    @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                            </a>
                                                            <div className="date">11:49 am</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="col-mail col-mail-1">
                                                            <div className="checkbox-wrapper-mail">
                                                                <input type="checkbox" id="chk16" />
                                                                <label htmlFor="chk16" className="toggle" />
                                                            </div>
                                                            <span className="star-toggle far fa-star text-warning" />
                                                            <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                        </div>
                                                        <div className="col-mail col-mail-2">
                                                            <a href className="subject">
                                                                Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                    @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                            </a>
                                                            <div className="date">11:49 am</div>
                                                        </div>
                                                    </li>
                                                    <li className="unread">
                                                        <div className="col-mail col-mail-1">
                                                            <div className="checkbox-wrapper-mail">
                                                                <input type="checkbox" id="chk17" />
                                                                <label htmlFor="chk17" className="toggle" />
                                                            </div>
                                                            <span className="star-toggle far fa-star" />
                                                            <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                        </div>
                                                        <div className="col-mail col-mail-2">
                                                            <a href className="subject">
                                                                Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                    @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                            </a>
                                                            <div className="date">11:49 am</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="col-mail col-mail-1">
                                                            <div className="checkbox-wrapper-mail">
                                                                <input type="checkbox" id="chk18" />
                                                                <label htmlFor="chk18" className="toggle" />
                                                            </div>
                                                            <span className="star-toggle far fa-star text-warning" />
                                                            <a href className="title">Lucas Kriebel (via Twitter)</a>
                                                        </div>
                                                        <div className="col-mail col-mail-2">
                                                            <a href className="subject">
                                                                Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                                                                Twitter! &nbsp;–&nbsp;<span className="teaser">
                                                                    @LucasKriebel - Very cool :) Nicklas, You have a new direct
                                                                    message. </span>
                                                            </a>
                                                            <div className="date">11:49 am</div>
                                                        </div>
                                                    </li>
                                                </ul>
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
    )
}

export default EmailInbox
