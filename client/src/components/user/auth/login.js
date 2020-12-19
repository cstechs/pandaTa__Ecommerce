import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../redux/_actions/authAction";
import { Link } from "react-router-dom";
import { setAlert } from "../../../redux/_actions/alertAction";
import { CLEAR_ERRORS } from "../../../redux/types";
import Register from "./register";

const Login = () => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [user] = useState(() => JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    if (state.error === "Invalid Creds..") {
      dispatch(setAlert(state.error, "danger"));
      dispatch({ type: CLEAR_ERRORS });
    } else if (state.error?.toString().startsWith("The email address")) {
      dispatch(setAlert(state.error, "danger"));
      dispatch({ type: CLEAR_ERRORS });
    } else if (state.error == "Your account has not been verified.") {
      dispatch(setAlert(state.error, "danger"));
      dispatch({ type: CLEAR_ERRORS });
    }
    // eslint-disable-next-line
  }, [state.isAuthenticated, state.error]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      dispatch(setAlert("Please enter all the fields.", "danger"));
    } else {
      dispatch(login(email, password));

      //window.location.reload();
    }
  };

  return (
    <>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="Login">
            <div className="Exit">
              <i
                className="fas fa-times-circle close"
                data-dismiss="modal"
                aria-label="Close"
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
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalCenter1"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <Register />
      </div>
    </>
  );
};

export default Login;
