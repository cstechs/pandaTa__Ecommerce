import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../redux/_actions/authAction";
import { Link } from "react-router-dom";
import { setAlert } from "../../../redux/_actions/alertAction";
import { SET_ALERT } from "../../../redux/types";
import { getUser } from "../../../redux/_actions/userAction";
import { sellerlogin } from "../../../redux/_actions/sellerAction";

const Login = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const sellers = useSelector((state) => state.seller.sellers);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || role === "") {
      dispatch(
        setAlert(SET_ALERT, {
          message: "Please enter all the fields.",
          alertType: "danger",
        })
      );
    } else {
      if (
        role === "customer" &&
        users.find((user) => user.email === email)?.role === "customer"
      ) {
        dispatch(login(email, password));
      } else if (
        role === "seller" &&
        sellers.find((seller) => seller.userEmail === email)?.role === "seller"
      ) {
        dispatch(sellerlogin(email, password));
      } else {
        dispatch(
          setAlert(SET_ALERT, {
            message: "This Account Is Associated with another role",
            alertType: "danger",
          })
        );
      }
    }
  };
  const LoginClose = () => {
    props.loginHandler();
  };
  const RegisterShow = () => {
    props.registerHandler();
  };

  return (
    <>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="Login">
            <div className="Exit">
              <i
                className="fas fa-times-circle close"
                onClick={() => LoginClose()}
              ></i>
            </div>
            <div className="logo">PANDA / TA</div>
            <form onSubmit={onSubmit}>
              <input
                type="email"
                name="email"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
              <input
                type="password"
                name="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option defaultValue disabled>
                  Select Role
                </option>
                <option name="customer" value="customer">
                  Customer
                </option>
                <option name="seller" value="seller">
                  Seller
                </option>
              </select>
              <div className="remember">
                <span>
                  <label className="check">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  Remember me
                </span>
                <span>
                  <Link to="/admin/forgetpassword">Forget Password?</Link>
                </span>
              </div>
              <input
                type="submit"
                value="Log in"
                className="ripple button-base px-3"
              />
            </form>
            <div className="Line"></div>
            <p>
              <span>or</span>
            </p>
            <div className="Account">
              <span>Sign-up with</span>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-google-plus"></i>
              <i className="fab fa-pinterest"></i>
            </div>
            <div className="Register">
              Already have an Account?{" "}
              <button
                data-dismiss="modal"
                aria-label="Close"
                data-toggle="modal"
                data-target="#exampleModalCenter1"
                className="ripple button-base"
                onClick={() => {
                  LoginClose();
                  RegisterShow();
                }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
