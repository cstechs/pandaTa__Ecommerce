import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "../auth/login";
import Register from "../auth/register";
import { getCategory } from "../../../redux/_actions/categoryAction";
import { getSubCategory } from "../../../redux/_actions/subCategoryAction";

const Sidebar = () => {
  function toggle() {
    document.getElementById("sideBar").classList.toggle("Toggleshow");
  }

  function DropDowntoggle() {
    document.getElementsByClassName("fa-caret-up")[0].classList.toggle("show");
    document
      .getElementsByClassName("fa-caret-down")[0]
      .classList.toggle("hide");
  }
  function menu() {
    document.getElementById("Account").style.display = "none";
    document.getElementById("Menu").style.display = "inherit";
    document.getElementById("border").style.transform = "translateX(5%)";
  }
  function account() {
    document.getElementById("Menu").style.display = "none";
    document.getElementById("Account").style.display = "inherit";
    document.getElementById("border").style.transform = "translateX(105%)";
  }

  const state = useSelector((state) => state.auth);
  const [isPreviewShown, setPreviewShown] = useState(false);

  const category = useSelector((state) => state.category);
  const subCategory = useSelector((state) => state.subCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.isAuthenticated) {
      setPreviewShown(true);
    }
    dispatch(getCategory());
    dispatch(getSubCategory());
  }, []);

  return (
    <>
      <i className="fa fa-times" onClick={toggle}></i>
      <div className="menu_option">
        <button onClick={menu} id="menu_btn">
          CATEGORIES
        </button>
        <button onClick={account} id="account_btn">
          ACCOUNT
        </button>
        <span id="border"></span>
      </div>
      <div id="Menu">
        <ul>
          {category.categories.data?.map(({ _id, categoryName }) => (
            <div className="btn-group" key={_id}>
              <li
                onClick={DropDowntoggle}
                data-toggle="dropdown"
                aria-expanded="true"
              >
                {categoryName}
                <i className="fa fa-caret-down"></i>
                <i className="fa fa-caret-up"></i>
              </li>
              <div className="dpdownlist dropdown-menu">
                {subCategory.subCategories.data?.map((item, i) => {
                  if (item.categoryId == _id) {
                    return (
                      <Link to="/" key={item._id}>
                        {item.subCategoryName}
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </ul>
      </div>
      <div id="Account">
        {!isPreviewShown && (
          <>
            <button
              className="ripple button-base"
              data-toggle="modal"
              data-target="#exampleModalCenter1"
            >
              Log in
            </button>
            <button
              className="ripple button-base"
              data-toggle="modal"
              data-target="#exampleModalCenter2"
            >
              Sign up
            </button>
            <Link to="sellerapplication/">
              <button className="ripple button-base">Sign up as seller</button>
            </Link>
          </>
        )}

        {isPreviewShown && (
          <>
            <button
              className="ripple button-base"
              data-toggle="modal"
              data-target="#exampleModalCenter1"
            >
              Request Quote
            </button>
            <Link to="admin/">
              <button className="ripple button-base">Dashboard</button>
            </Link>
          </>
        )}
        <p>
          <a href="http://cstechsoftwares.com/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="http://cstechsoftwares.com/">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="http://cstechsoftwares.com/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="http://cstechsoftwares.com/">
            <i className="fab fa-instagram"></i>
          </a>
        </p>
      </div>
      <div className="modal" role="dialog">
        <Login />
      </div>
      <div className="modal" role="dialog">
        <Register />
      </div>
    </>
  );
};

export default Sidebar;
