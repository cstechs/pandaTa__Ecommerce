import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
