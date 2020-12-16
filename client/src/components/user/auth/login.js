import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../redux/_actions/authAction";
import { Link } from "react-router-dom";
import { setAlert } from "../../../redux/_actions/alertAction";
import { CLEAR_ERRORS } from "../../../redux/types";

const Login = () => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.error === "Invalid Creds..") {
      dispatch(setAlert(state.error, "danger"));
      dispatch({ type: CLEAR_ERRORS });
    } else {
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
      window.location.reload();
      if (state.isAuthenticated) {
        window.location.reload();
      }
    }
  };

  return (
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
          <div className="Login">
            Already have an Account?{" "}
            <Link to="/" className="ripple button-base">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
