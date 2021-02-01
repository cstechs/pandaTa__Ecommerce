import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import SmLogo from "../../../assets/images/admin/logo-sm.png";
import LeftBar from "./leftsidebar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/_actions/authAction";
import { getUser } from "../../../redux/_actions/userAction";
import { setAlert } from "../../../redux/_actions/alertAction";
import { SET_ALERT } from "../../../redux/types";
import { getProduct } from "../../../redux/_actions/productAction";
import { getChat } from "../../../redux/_actions/chatAction";
import { getSellerById } from "../../../redux/_actions/sellerAction";

const Navbar = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat.chats);
  const users = useSelector((state) => state.user.users);
  const seller = useSelector((state) => state.seller?.seller);
  const product = useSelector((state) => state.product);
  const [searchProduct, setSearchProduct] = useState([]);
  const history = useHistory();

  const handleChange = (e) => {
    let temp = product?.products?.data?.filter((item) =>
      item.productName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (e.target.value === "") {
      temp = [];
    }
    setSearchProduct(temp);
  };
  const totalUsers = users.filter((z) =>
    chat?.data?.find((x) => x.createdBy === z._id && x.sellerId === user._id)
  );

  useEffect(() => {
    dispatch(getUser());
    dispatch(getChat());
    dispatch(getSellerById(user._id));
    dispatch(getProduct());
  }, [dispatch]);

  function toggle() {
    document.getElementById("leftbar").classList.toggle("hideleftbar");
    document.getElementById("pandlogo").classList.toggle("hidelogo");
    document.getElementById("logoBox").classList.toggle("hidelogobox");
    document.getElementById("searchbox").classList.toggle("fullbox");
    document.getElementById("content").classList.toggle("fullcontent");

    var leftbaricon = document.getElementsByClassName("leftbar_icon");
    for (var i = 0; i < leftbaricon.length; i++) {
      leftbaricon[i].classList.toggle("showicon");
    }
  }

  return (
    <>
      <div className="navbar-custom">
        <div className="container-fluid">
          <ul className="list-unstyled topnav-menu float-right mb-0">
            <li className="d-none d-lg-block">
              <form className="app-search">
                <div className="app-search-box dropdown">
                  <div className="input-group search_input" id="searchbox">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search Products Here ..."
                      onChange={(e) => handleChange(e)}
                    />
                    <div className="input-group-append">
                      <button className="btn" type="submit">
                        <i className="fe-search" />
                      </button>
                    </div>
                  </div>
                  <div className="searchDropdown">
                    {searchProduct?.map(({ _id, productName }) => (
                      <Link to={`/product/${_id}`} key={_id}>
                        <span>{productName}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </form>
            </li>
            <li className="dropdown d-inline-block d-lg-none">
              <span
                className="nav-link dropdown-tog arrow-none waves-effect waves-light"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="fe-search noti-icon" />
              </span>
              <div className="dropdown-menu dropdown-lg dropdown-menu-right p-0">
                <form className="p-3">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Products Here ..."
                    onChange={(e) => handleChange(e)}
                  />
                </form>
                <div className="searchDropdown ">
                  {searchProduct?.map(({ _id, productName }) => (
                    <Link to={`/product/${_id}`} key={_id}>
                      <span>{productName}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li className="dropdown message-list notification-list topbar-dropdown">
              <span
                className="nav-link dropdown-tog waves-effect waves-light ripple button-base"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="fe-message-square noti-icon" />
                <span className="badge badge-danger rounded-circle noti-icon-badge">
                  {totalUsers?.length}
                </span>
              </span>
              <div className="dropdown-menu dropdown-menu-right dropdown-lg">
                <div className="dropdown-item noti-title">
                  <h5 className="m-0">Messages</h5>
                </div>
                <div className="noti-scroll" data-simplebar>
                  {totalUsers?.map((item, index) => (
                    <React.Fragment key={item._id}>
                      {index < 4 && (
                        <span className="dropdown-item notify-item">
                          <div className="notify-icon bg-secondary">
                            <i className="mdi mdi-forum" />
                          </div>
                          <p className="notify-details pt-1">{item.userName}</p>
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <Link
                  to="/admin/chat"
                  className="dropdown-item text-center text-primary notify-item notify-all cursor-pointer"
                >
                  View all
                  <i className="fe-arrow-right" />
                </Link>
              </div>
            </li>
            <li className="dropdown notification-list topbar-dropdown">
              <span
                className="nav-link dropdown-tog waves-effect waves-light ripple button-base"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="fe-bell noti-icon" />
                <span className="badge badge-danger rounded-circle noti-icon-badge">
                  0
                </span>
              </span>
              <div className="dropdown-menu dropdown-menu-right dropdown-lg">
                <div className="dropdown-item noti-title">
                  <h5 className="m-0">
                    <span className="float-right">
                      <span className="text-dark">
                        <small>Clear All</small>
                      </span>
                    </span>
                    Notification
                  </h5>
                </div>
                <div className="noti-scroll" data-simplebar>
                  {/* <span className="dropdown-item notify-item active">
                    <div className="notify-icon">
                      <img
                        src={UserImage}
                        className="img-fluid rounded-circle"
                        alt="user"
                      />
                    </div>
                    <p className="notify-details">Cristina Pride</p>
                    <p className="text-muted mb-0 user-msg">
                      <small>
                        Hi, How are you? What about our next meeting
                      </small>
                    </p>
                  </span> */}
                </div>
                <span className="dropdown-item text-center text-primary notify-item notify-all">
                  View all
                  <i className="fe-arrow-right" />
                </span>
              </div>
            </li>
            <li className="dropdown notification-list topbar-dropdown">
              <span
                className="nav-link profile-dropdown dropdown-tog nav-user mr-0 waves-effect waves-light ripple button-base"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                {user.role === "seller" && (
                  <img
                    src={`/${seller?.userImage}`}
                    alt={seller?.userName}
                    className="rounded-circle"
                  />
                )}
                <span className="pro-user-name ml-1">
                  {user.role === "admin" && user.userName}
                  <i className="mdi mdi-chevron-down font-20" />
                </span>
              </span>
              <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                <Link
                  to="/admin/setting"
                  className="dropdown-item notify-item ripple button-base"
                >
                  <i className="fe-user" />
                  <span>
                    {user.role === "seller" ? seller?.userName : "Profile"}
                  </span>
                </Link>
                <span className="dropdown-item notify-item ripple button-base">
                  <i className="fe-settings" />
                  <span>
                    Status : <b className="text-success">online</b>
                  </span>
                </span>
                <span
                  className="dropdown-item notify-item ripple button-base cursor-pointer"
                  onClick={() => {
                    dispatch(logout());
                    history.push("/");
                    dispatch(
                      setAlert(SET_ALERT, {
                        message: "Logout Successfully.",
                        alertType: "danger",
                      })
                    );
                  }}
                >
                  <i className="fe-log-out" />
                  <span>Logout</span>
                </span>
              </div>
            </li>
            <li className="dropdown notification-list side_drop">
              <Link
                to="/admin/setting"
                className="nav-link waves-effect waves-light ripple button-base"
              >
                <i className="mdi mdi-cog-outline noti-icon " />
              </Link>
            </li>
          </ul>
          <div className="logo-box" id="logoBox">
            <Link to="/">
              <span className="logo logo-light pl-3">
                <span className="logo-sm">
                  <div className="pand-logo">
                    <img src={SmLogo} alt="pandata-logo" />
                  </div>
                </span>
                <span className="logo-lg">
                  <div className="pand-logo">
                    <img src={SmLogo} alt="pandata-logo" />
                    <span id="pandlogo">PANDA / TA </span>
                  </div>
                </span>
              </span>
            </Link>
          </div>
          <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
            <li>
              <button
                className="button-menu-mobile waves-effect waves-light ripple button-base"
                onClick={toggle}
              >
                <i className="fe-menu" />
              </button>
            </li>
            <li>
              <span
                className="navbar-toggle nav-link"
                data-toggle="collapse"
                data-target="#topnav-menu-content"
              >
                <div className="lines">
                  <span />
                  <span />
                  <span />
                </div>
              </span>
            </li>
          </ul>
          <div className="clearfix" />
        </div>
      </div>
      <div className="left-side-menu" id="leftbar">
        <LeftBar />
      </div>
    </>
  );
};

export default Navbar;
