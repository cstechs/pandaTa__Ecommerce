import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../../redux/_actions/authAction';
import { Link, useHistory  } from 'react-router-dom'
import { setAlert } from '../../../redux/_actions/alertAction'
import { CLEAR_ERRORS } from '../../../redux/types';


const Register = ({ history }) => {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const browserHistory = useHistory();

  useEffect(() => {
    if (localStorage.getItem('token') && auth.isAuthenticated) 
      //browserHistory.push('/');
 
    if (auth.error === 'User already exists') {
      dispatch(setAlert(auth.error, 'danger'));
      dispatch({ type: CLEAR_ERRORS });
    }
    // eslint-disable-next-line
  }, [auth.isAuthenticated, auth.error]);


  const [newUser, setNewUser] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer'
  });

  const {userName, email, password, confirmPassword } = newUser;

  const onChange = (e) => setNewUser({ ...newUser, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (userName === '' || email === '' || password === '' || confirmPassword === '' )
      dispatch(setAlert('Please enter all the fields.', 'danger'));
    else if (password !== confirmPassword)
      dispatch(setAlert('Password and confirm password does not match.', 'danger'));
    else{
      dispatch(register(newUser));
  }
}
  return (

    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="Register">
          <div className="Exit">
            <i className="fas fa-times-circle close" data-dismiss="modal" aria-label="Close"></i>
            </div>
          <div className="logo">
            PANDA / TA
          </div>
          <form onSubmit={onSubmit}>
            <input type="text"  name="userName" value={userName} onChange={onChange} autoFocus placeholder="Username" />
            <input type="email" name="email" value={email} onChange={onChange}  placeholder="Email" />
            <input type="password" name="password" value={password} onChange={onChange}   placeholder="Password" />
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={onChange}  placeholder="Confirm Password" />
            <input type="submit" value="Create Account" className="ripple button-base" />
          </form>
          <div className="Line"></div>
          <p><span>or</span></p>
          <div className="Account">
             <span>Sign-up with</span>
             <i className="fab fa-facebook-f"></i>
             <i className="fab fa-google-plus"></i>
             <i className="fab fa-pinterest"></i>
          </div>
          <div className="Login">Already have an Account? <Link to="/" className="ripple button-base">Log in</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Register;
