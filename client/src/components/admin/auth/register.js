import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../../redux/_actions/authAction";
import { Link } from "react-router-dom";
import { setAlert } from "../../../redux/_actions/alertAction";
import { CLEAR_ERRORS } from "../../../redux/types";

const Register = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token") && auth.isAuthenticated)
      history.push("/admin/");

    if (auth.error === "User already exists") {
      dispatch(setAlert(auth.error, "danger"));
      dispatch({ type: CLEAR_ERRORS });
    }
    // eslint-disable-next-line
  }, [auth.isAuthenticated, auth.error]);

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [isConfirmed, setChecked] = useState(false);
  const handleClick = () => setChecked(!isConfirmed);

  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    confirmPassword,
  } = newUser;

  const onChange = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      userName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      !isConfirmed
    )
      dispatch(setAlert("Please enter all the fields.", "danger"));
    else if (password !== confirmPassword)
      dispatch(
        setAlert("Password and confirm password does not match.", "danger")
      );
    else {
      dispatch(register(newUser));
    }
  };
  return (
    <div className="SignUp">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 left"></div>
          <div className="col-md-6 right">
            <div className="logo">PANDA / TA</div>
            <p>Please complete to create your account.</p>
            <form onSubmit={onSubmit}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 l_inp">
                    <input
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={onChange}
                      autoFocus
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6 r_inp">
                    <input
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={onChange}
                      placeholder="Last name"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="userName"
                      value={userName}
                      onChange={onChange}
                      placeholder="Username"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      minLength="6"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={onChange}
                      minLength="6"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="col-12">
                    <div className="agree">
                      <label className="check">
                        <input
                          type="checkbox"
                          checked={isConfirmed}
                          onChange={handleClick}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <span>I agree with terms and conditions</span>
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="ripple button-base"
                    value="Signup"
                  />
                  <em>
                    Already have an account?{" "}
                    <Link to="/admin/login">Sign in </Link>
                  </em>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <b className="terms">Term of use. Privacy policy</b>
    </div>
  );
};

export default Register;
