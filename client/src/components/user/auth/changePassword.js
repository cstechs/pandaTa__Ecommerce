import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../../redux/_actions/userAction";
import { sellerupdate } from "../../../redux/_actions/sellerAction";
import { getUser } from "../../../redux/_actions/userAction";
import { Link, useHistory } from "react-router-dom";
import { setAlert } from "../../../redux/_actions/alertAction";
import { SET_ALERT } from "../../../redux/types";
import { getSellers } from "../../../redux/_actions/sellerAction";

const ChangePassword = () => {
  const history = useHistory();
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const users = useSelector((state) => state.user.users);
  const Sellers = useSelector((state) => state.seller.sellers);
  const currentUser = users?.filter((userr) => userr._id === user._id);
  const currentSeller = Sellers?.filter((seller) => seller._id === user._id);
  const [newUser, setNewUser] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    if (user === null) {
      history.push("/");
    }
  });

  const { oldPassword, password, confirmPassword } = newUser;

  const HandleUserChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getSellers());
  }, [dispatch]);
  console.log("seller", Sellers);
  const onSubmit = (e) => {
    e.preventDefault();
    if (oldPassword === "" || password === "" || confirmPassword === "") {
      dispatch(
        setAlert(SET_ALERT, {
          message: "Please Fill Out All Fields",
          alertType: "danger",
        })
      );
    } else if (confirmPassword != password) {
      dispatch(
        setAlert(SET_ALERT, {
          message: "Password and confirm password doesn't match",
          alertType: "danger",
        })
      );
    } else {
      if (user.role === "seller") {
        const sellerData = new FormData();
        sellerData.append("userpassword", newUser.password);
        if (currentSeller[0].userpassword === oldPassword) {
          console.log("hi", newUser.password);
          console.log("hii", sellerData);
          dispatch(sellerupdate(sellerData, user._id));
        } else {
          dispatch(
            setAlert(SET_ALERT, {
              message: "Old Password wass incorrect",
              alertType: "danger",
            })
          );
        }
      } else {
        const userData = new FormData();
        userData.append("password", newUser.password);
        if (currentUser[0].password === oldPassword) {
          dispatch(updateUser(userData, user._id));
        } else {
          dispatch(
            setAlert(SET_ALERT, {
              message: "Old Password wass incorrect",
              alertType: "danger",
            })
          );
        }
      }
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  };

  return (
    <div className="login">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <form onSubmit={onSubmit}>
              <div className="logo">PANDA / TA</div>
              <p>Fill Out Details To Change Password</p>
              <input
                type="password"
                name="oldPassword"
                autoFocus
                value={oldPassword}
                onChange={(e) => HandleUserChange(e)}
                placeholder="Enter Previous Password"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => HandleUserChange(e)}
                placeholder="Enter New Password"
              />
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => HandleUserChange(e)}
                placeholder="Enter New Password Again"
              />
              <input
                type="submit"
                className="ripple button-base mb-0"
                value="Change Password"
              />
              {user.role === "seller" || user.role === "admin" ? (
                <Link
                  to="/admin/setting"
                  className="d-block text-center font-13 font-weight-bold mt-2 text-darkpurple"
                >
                  GO BACK
                </Link>
              ) : (
                <Link
                  to="/profile"
                  className="d-block text-center font-13 font-weight-bold mt-2 text-darkpurple"
                >
                  GO BACK
                </Link>
              )}
            </form>
          </div>
        </div>
      </div>
      <b className="terms">Term of use. Privacy policy</b>
    </div>
  );
};

export default ChangePassword;
