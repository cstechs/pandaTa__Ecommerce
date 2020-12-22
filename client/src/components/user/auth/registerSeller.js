import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../../redux/_actions/authAction";
import { Link, useHistory } from "react-router-dom";
import { setAlert } from "../../../redux/_actions/alertAction";
import { CLEAR_ERRORS } from "../../../redux/types";

const RegisterSeller = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token") && auth.isAuthenticated)
      if (auth.errors?.startsWith("The email address")) {
        //browserHistory.push('/');

        dispatch(setAlert(auth.error, "danger"));
        dispatch({ type: CLEAR_ERRORS });
      }
    if (auth.errors?.message?.startsWith("The email address")) {
      //browserHistory.push('/');

      dispatch(setAlert(auth.error, "danger"));
      dispatch({ type: CLEAR_ERRORS });
    } else if (
      auth.errors?.error?.password == "Must be at least 6 chars long"
    ) {
      //browserHistory.push('/');

      dispatch(setAlert(auth.error, "danger"));
      dispatch({ type: CLEAR_ERRORS });
    } else if (auth.errors?.error?.email == "Enter a valid email address") {
      //browserHistory.push('/');

      dispatch(setAlert(auth.error, "danger"));
      dispatch({ type: CLEAR_ERRORS });
    } else if (auth.errors?.error?.firstName == "You first name is required") {
      dispatch(setAlert(auth.error, "danger"));
      dispatch({ type: CLEAR_ERRORS });
    } else if (auth.errors?.error?.lastName == "You last name is required") {
      dispatch(setAlert(auth.error, "danger"));
      dispatch({ type: CLEAR_ERRORS });
    }

    if (auth.msg?.message) {
      //browserHistory.push('/');

      dispatch(setAlert(auth.msg.message, "success"));
    }
    // eslint-disable-next-line
  }, [auth.isAuthenticated, auth.error, auth.msg]);

  const [newUser, setNewUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "seller",
  });

  const {
    userName,
    email,
    password,
    confirmPassword,
    firstName,
    role,
    lastName,
  } = newUser;

  const onChange = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      userName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      firstName === "" ||
      lastName === ""
    )
      dispatch(setAlert("Please enter all the fields.", "danger"));
    else if (password !== confirmPassword)
      dispatch(
        setAlert("Password and confirm password does not match.", "danger")
      );
    else {
      console.log(("new", newUser));
      dispatch(register(newUser));
    }
  };
  return (
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="Register">
          <div className="Exit">
            <i
              className="fas fa-times-circle close"
              data-dismiss="modal"
              aria-label="Close"
            ></i>
          </div>
          <div className="logo">PANDA / TA</div>
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={onChange}
              autoFocus
              placeholder="User Name"
            />
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={onChange}
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={onChange}
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
            />
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              placeholder="Confirm Password"
            />
            <input
              type="submit"
              value="Create Account As Seller"
              className="ripple button-base"
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
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSeller;
