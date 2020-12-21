import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import businessimg from "../../../assets/images/user/businessLogo.png";
import UserImage from "../../../assets/images/admin/users/user-2.jpg";
import { getCategory } from "../../../redux/_actions/categoryAction";

const ProductSideBar = ({ subCategory, user, Productidsetter }) => {
  function categoryDropDownToggle() {
    document.getElementById("categoryShowIcon").classList.toggle("show");
    document.getElementById("categoryHideIcon").classList.toggle("hide");
    document.getElementById("categoryDropDown").classList.toggle("hide");
  }

  function materialDropDownToggle() {
    document.getElementById("materialShowIcon").classList.toggle("show");
    document.getElementById("materialHideIcon").classList.toggle("hide");
    document.getElementById("materialDropDown").classList.toggle("hide");
  }

  // function finishDropDownToggle() {
  //   document.getElementById("finishShowIcon").classList.toggle("show");
  //   document.getElementById("finishHideIcon").classList.toggle("hide");
  //   document.getElementById("finishDropDown").classList.toggle("hide");
  // }

  // function styleDropDownToggle() {
  //   document.getElementById("styleShowIcon").classList.toggle("show");
  //   document.getElementById("styleHideIcon").classList.toggle("hide");
  //   document.getElementById("styleDropDown").classList.toggle("hide");
  // }

  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  function HandleTick(val) {
    Productidsetter(val);
  }

  return (
    <React.Fragment key={category.categories.data?.map((item) => item._id)}>
      {user && user.role === "seller" && (
        <div className="sellerProfilePortion">
          <div className="businessImage">
            <img src={businessimg} alt="BussinessLogo" />
          </div>
          <h1>Jena & Jeel</h1>
          <p className="mb-3">NEW YORK, NY • USA</p>
          <button className="btn btn-darkpurple ripple px-3">Contact</button>
          <button className="btn btn-darkpurple-outline ripple px-3 ml-2">
            Follow
          </button>
          <p className="text-darkpurple mt-3 font-14">
            Cilek is wonderful serenity has taken possession of my entire as
            soul, is like these sweet mornings of spring which I enjoy with my
            whole heart. I am alone standards.
          </p>
          <p className="mt-3 font-14">MEET THE OWNER</p>
          <div className="underLine w-100"></div>
          <div className="sellerImage">
            <img src={UserImage} alt="sellerImage" />
          </div>
          <h1 className="font-20 mt-2">Gregory Wadsworth</h1>
          <p className="mt-2">
            <i className="fa fa-heart text-darkpurple mr-3 font-24"></i>
            <i className="fa fa-link text-darkpurple font-24"></i>
          </p>
        </div>
      )}
      <div className="BrowseByCategoryPortion">
        <h4 className="title">BROWSE BY CATEGORY</h4>
        <div className="dropTogggle" onClick={categoryDropDownToggle}>
          <i className="fa fa-plus" id="categoryShowIcon"></i>
          <i className="fa fa-minus" id="categoryHideIcon"></i>
        </div>
        <div className="underLine w-100 mt-2"></div>
        <ul style={{ maxHeight: "165px" }} id="categoryDropDown">
          <li>
            <label>
              All categories
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </li>
          {category.categories.data?.map(({ _id, categoryName }) => (
            <li key={_id}>
              <label>
                {categoryName}
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="BrowseByCategoryPortion">
        <h4 className="title">FILTER PRODUCTS</h4>
        <div className="underLine w-100 mt-2"></div>

        {category.categories.data?.map((item, index) => (
          <React.Fragment key={item._id}>
            {index < 3 && (
              <div className="filterPortion">
                <h5 className="mb-2">{item.categoryName}</h5>
                <div className="dropTogggle" onClick={materialDropDownToggle}>
                  <i className="fa fa-plus" id="materialShowIcon"></i>
                  <i className="fa fa-minus" id="materialHideIcon"></i>
                </div>
                <ul style={{ maxHeight: "165px" }} id="materialDropDown">
                  {subCategory.subCategories.data?.map((subitem, index) => (
                    <>
                      {subitem.categoryId === item._id && (
                        <li>
                          <label>
                            {subitem.subCategoryName}
                            <input
                              type="checkbox"
                              onClick={() => HandleTick(subitem._id)}
                            />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                      )}
                    </>
                  ))}{" "}
                </ul>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ProductSideBar;
