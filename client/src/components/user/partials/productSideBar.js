import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import businessimg from "../../../assets/images/user/businessLogo.png";
import UserImage from "../../../assets/images/admin/users/user-2.jpg";
import { getCategory } from "../../../redux/_actions/categoryAction";

const ProductSideBar = ({
  subCategory,
  user,
  Productidsetter,
  Catidsetter,
}) => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [categoryDropDown, setcategoryDropDown] = useState(true);
  const [subcategoryDropDown, setSubcategoryDropDown] = useState([
    true,
    true,
    true,
    true,
  ]);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const HandleCategoryDropDown = () => {
    setcategoryDropDown(!categoryDropDown);
  };
  const HandleSubCategoryDropDown = (index) => {
    let val = !subcategoryDropDown[index];
    setSubcategoryDropDown((prev) => {
      prev.splice(index, 1, val);
      return [...prev];
    });
  };

  function HandleTick(val) {
    Productidsetter(val);
  }
  function HandleCatTick(val) {
    Catidsetter(val);
  }

  return (
    <React.Fragment>
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
        {!categoryDropDown && (
          <div className="dropTogggle">
            <i className="fe-plus" onClick={() => HandleCategoryDropDown()} />
          </div>
        )}
        {categoryDropDown && (
          <div className="dropTogggle">
            <i
              className="fas fa-minus"
              onClick={() => HandleCategoryDropDown()}
            />
          </div>
        )}

        <div className="underLine w-100 mt-2"></div>
        {categoryDropDown === true && (
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
                  <input type="checkbox" onClick={() => HandleCatTick(_id)} />
                  <span className="checkmark"></span>
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="BrowseByCategoryPortion">
        <h4 className="title">FILTER PRODUCTS</h4>
        <div className="underLine w-100 mt-2"></div>

        {category.categories.data?.map((item, index) => (
          <React.Fragment key={item._id}>
            {index < 3 && (
              <div className="filterPortion">
                <h5 className="mb-2">{item.categoryName}</h5>

                {subcategoryDropDown[index] && (
                  <div
                    className="dropTogggle"
                    onClick={() => HandleSubCategoryDropDown(index)}
                  >
                    <i className="fa fa-minus" />{" "}
                  </div>
                )}
                {!subcategoryDropDown[index] && (
                  <div
                    className="dropTogggle"
                    onClick={() => HandleSubCategoryDropDown(index)}
                  >
                    <i className="fe-plus" />{" "}
                  </div>
                )}

                {subcategoryDropDown[index] && (
                  <ul style={{ maxHeight: "165px" }}>
                    {subCategory.subCategories.data?.map((subitem, index) => (
                      <React.Fragment key={subitem._id}>
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
                      </React.Fragment>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ProductSideBar;
