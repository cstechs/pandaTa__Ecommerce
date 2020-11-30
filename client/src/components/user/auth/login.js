import React from 'react';
import { Link } from 'react-router-dom'

const Login = () => {

  return (
  
    <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
        <div className="Login">
          <div className="Exit">
            <i className="fas fa-times-circle close" data-dismiss="modal" aria-label="Close"></i>
            </div>
          <div className="logo">
            PANDA / TA
          </div>
          <form>
            <input type="text" name="userName"placeholder="Username / Email Address"/>
            <input type="password" name="password" placeholder="Password" />
                <div className="remember"><span><label className="check"><input type="checkbox" /><span className="checkmark"></span>
                </label>Remember me</span><span><Link to="/admin/forgetpassword">Forget Password?</Link></span></div>
            <input type="submit" value="Log in" className="ripple button-base" />
            <input type="submit" value="Log in as guest" className="ripple button-base" />
          </form>
          <div className="Line"></div>
          <p><span>or</span></p>
          <div className="Account">
             <span>Sign-up with</span>
             <i className="fab fa-facebook-f"></i>
             <i className="fab fa-google-plus"></i>
             <i className="fab fa-pinterest"></i>
          </div>
          <div className="Login">Already have an Account? <Link to="/" className="ripple button-base">Register</Link></div>
        </div>
      </div>
      </div>
  )
}

export default Login
