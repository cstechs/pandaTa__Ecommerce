import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../redux/_actions/authAction";
import { Link } from "react-router-dom";
import { setAlert } from "../../../redux/_actions/alertAction";
import { CLEAR_ERRORS } from "../../../redux/types";
import { getUser } from "../../../redux/_actions/userAction";

const Login = ({ history }) => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    if (state.isAuthenticated) {
      history.push("/admin");
    }
    if (state.error === "Invalid Creds..") {
      dispatch(setAlert(state.error, "danger"));
      dispatch({ type: CLEAR_ERRORS });
    } else if (state.error?.toString().startsWith("The email address")) {
      dispatch(setAlert(state.error, "danger"));
      dispatch({ type: CLEAR_ERRORS });
    } else if (state.error === "Your account has not been verified.") {
      dispatch(setAlert(state.error, "danger"));
      dispatch({ type: CLEAR_ERRORS });
    }
    // eslint-disable-next-line
  }, [state.isAuthenticated, state.error]);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      dispatch(setAlert("Please enter all the fields.", "danger"));
    } else if (users.find((user) => user.email === email)?.role === "admin") {
      dispatch(login(email, password));
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
              <p>Welcome back! Please login to your account.</p>
              <input
                type="email"
                name="email"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="UserEmail"
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
                  <Link to="/admin/forgetpassword">Forget Password</Link>
                </span>
              </div>
              <input
                type="submit"
                className="ripple button-base"
                value="Login"
              />
              <Link to="/admin/register">
                <button className="sign">Signup</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <b className="terms">Term of use. Privacy policy</b>
    </div>
  );
};

export default Login;
