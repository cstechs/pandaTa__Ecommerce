import React, { } from 'react'
import { Link } from 'react-router-dom'
import Login from '../auth/login'
import Register from '../auth/register'
import Sidebar from './sidebar'


class Header extends React.Component {
  toggle = () => {
    document.getElementById('sideBar').classList.toggle("Toggleshow");
  }
  search = () => {
    document.getElementById('SeachBox').classList.toggle("Searchshow");
    document.getElementById("SeachField").focus();
  }
  componentDidMount() {
    window.onclick = function (event) {
      if (!event.target.matches('.searc')) {
        var dropdowns = document.getElementsByClassName("SearchBox");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('Searchshow')) {
            openDropdown.classList.remove('Searchshow');
          }
        }
      }
    }
  }
  render() {
    return (
      <>
        <div className="SearchBox" id="SeachBox">
          <input type="text" id="SeachField" autoFocus placeholder="Search Here ..." />
          <i className="fa fa-search"></i>
        </div>
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-6">
                <Link to="/">
                  <div className="logo">
                    PANDA / TA
              </div>
                </Link>
              </div>
              <div className="col-md-4">
                <div className="searchbox">
                  <input type="text" placeholder="Search for Products" />
                  <button className="ripple" >Search</button>
                </div>
              </div>
              <div className="col-md-5 col-6">
                <button className="ripple button-base" data-toggle="modal" data-target="#exampleModalCenter1" >Log in</button>
                <button className="ripple button-base" data-toggle="modal" data-target="#exampleModalCenter2" >Sign up</button>
                <Link to="/sellerapplication"><button className="ripple button-base" >Sign up as seller </button></Link>
                <i className="fa fa-search searc" onClick={this.search} ></i>
                <Link to="/wishlist"><i className="fa fa-heart"></i></Link>
                <Link to="/cart"><i className="fa fa-shopping-cart"></i></Link>
                <i className="fa fa-bars" onClick={this.toggle} ></i>
              </div>
            </div>
          </div>
        </header>
        <div className="modal fade" id="exampleModalCenter1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <Login />
        </div>
        <div className="modal fade" id="exampleModalCenter2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <Register />
        </div>

        <div className="Side_Bar" id="sideBar">
          <Sidebar />
        </div>
      </>
    )
  }
}

export default Header

