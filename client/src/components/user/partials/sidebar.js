import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../../../redux/_actions/categoryAction";
import { getSubCategory } from "../../../redux/_actions/subCategoryAction";

const Sidebar = ({ LoginHandler, RegisterHandler }) => {
  function toggle() {
    document.getElementById("sideBar").classList.toggle("Toggleshow");
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

  const Login = () => {
    LoginHandler();
  };
  const Register = () => {
    RegisterHandler();
  };
  useEffect(() => {
    if (state.isAuthenticated) {
      setPreviewShown(true);
    }
    dispatch(getCategory());
    dispatch(getSubCategory());
  }, [dispatch]);

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
              <li data-toggle="dropdown" aria-expanded="true">
                {categoryName}
                {subCategory.subCategories?.data?.find(
                  (item) => item.categoryId === _id
                ) !== undefined && <i className="fa fa-caret-down"></i>}
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
            <button className="ripple button-base" onClick={() => Login()}>
              Log in
            </button>
            <button className="ripple button-base" onClick={() => Register()}>
              Sign up
            </button>
            <Link to="/sellerapplication">
              <button className="ripple button-base">Sign up as seller</button>
            </Link>
          </>
        )}

        {isPreviewShown && (
          <Link to="admin/">
            <button className="ripple button-base">Dashboard</button>
          </Link>
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
    </>
  );
};

export default Sidebar;
