import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserImage from "../../../assets/images/admin/users/user-2.jpg";
import { getCategory } from "../../../redux/_actions/categoryAction";
import { Link } from "react-router-dom";

const SellerSideBar = ({
  seller,
  subCategory,
  Productidsetter,
  Catidsetter,
}) => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [categoryDropDown, setcategoryDropDown] = useState(true);
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
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
      <div className="sellerProfilePortion">
        <h1>{seller.businessName}</h1>
        <p className="mb-3">
          {seller.userCity},{seller.userCountry}
        </p>

        <p className="text-darkpurple mt-3 font-13 text-left">
          {seller.userBio}
        </p>
        <p className="mt-3 font-14">MEET THE OWNER</p>
        <div className="underLine w-100"></div>
        <div className="sellerImage">
          <img src={`/${seller.userImage}`} alt="sellerImage" />
        </div>
        <h1 className="font-20 mt-2">{seller.userName}</h1>
        <p className="mt-2">
          {seller.fbSocialAccountLink !== "" && (
            <Link to={`${seller.fbSocialAccountLink}`}>
              <i className="fab fa-facebook-f text-darkpurple mr-2 font-18"></i>
            </Link>
          )}
          {seller.pinterestSocialAccountLink !== "" && (
            <Link to={`${seller.pinterestSocialAccountLink}`}>
              <i className="fab fa-pinterest text-darkpurple mr-2 font-18"></i>
            </Link>
          )}
          {seller.twitterSocialAccountLink !== "" && (
            <Link to={`${seller.twitterSocialAccountLink}`}>
              <i className="fab fa-twitter text-darkpurple mr-2 font-18"></i>
            </Link>
          )}
          {seller.instagramSocialAccountLink !== "" && (
            <Link to={`${seller.instagramSocialAccountLink}`}>
              <i className="fab fa-instagram text-darkpurple mr-2 font-18"></i>
            </Link>
          )}
        </p>
      </div>
      <div className="BrowseByCategoryPortion">
        <h4 className="title">BROWSE BY CATEGORY</h4>
        {!categoryDropDown && (
          <div className="dropTogggle" onClick={() => HandleCategoryDropDown()}>
            <i className="fe-plus" />
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

export default SellerSideBar;
