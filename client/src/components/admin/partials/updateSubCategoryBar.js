import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../../../redux/_actions/categoryAction";
import { updateSubCategory } from "../../../redux/_actions/subCategoryAction";

const UpdateSubCategoryBar = (props) => {
  const category = useSelector((state) => state.category);
  const [name, setName] = useState(props.newSubcategory?.subCategoryName);
  const dispatch = useDispatch();

  const handleHide = () => {
    props.SubCategoryUpdatetogglePreview();
  };

  useEffect(() => {
    dispatch(getCategory());
  });

  const handleSubCategoryUpdate = (e) => {
    e.preventDefault();
    console.log(
      "prop",
      props.newSubcategory?._id,
      "name",
      name,
      "cat",
      categoryId
    );
    dispatch(updateSubCategory(props.newSubcategory?._id, name, categoryId));
  };
  const [newSubCategory, setNewSubCategory] = useState({
    categoryId: props.newSubcategory.categoryId,
  });

  const { categoryId } = newSubCategory;

  const onChange = (e) =>
    setNewSubCategory({ ...newSubCategory, [e.target.name]: e.target.value });
  return (
    <>
      <i className="fas fa-times-circle closeIcon" onClick={handleHide}></i>
      <div className="CategoryBar">
        <form>
          <div className="row">
            <div className="col-12">
              <div className="card-box">
                <h5 className="text-uppercase bg-light p-2 mt-2 mb-3">
                  Update Sub Category
                </h5>
                <div className="form-group mb-2">
                  <label htmlFor="category-name">
                    Selct Category <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-control"
                    name="categoryId"
                    value={categoryId}
                    onChange={onChange}
                  >
                    <option disabled>Select Category</option>

                    {category.categories.data?.map((item) => (
                      <option
                        key={item._id}
                        value={item._id}
                        // onClick={() => {
                        //   setCat(item._id);
                        //   console.log("cat", Cat);
                        // }}
                        defaultValue
                      >
                        {item.categoryName}
                        {console.log(
                          "checked",
                          props.newSubcategory.categoryId === item._id
                        )}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="category-name">
                    Sub Category Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="category-name"
                    className="form-control"
                    name="SubcategoryName"
                    placeholder="e.g : beds"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="text-right mt-4">
                  <span
                    className="btn btn-danger ripple button-base mr-2 px-4"
                    onClick={handleHide}
                  >
                    CANCEL
                  </span>
                  <button
                    type="submit"
                    className="btn btn-success ripple button-base px-5 "
                    onClick={(e) => {
                      handleSubCategoryUpdate(e);
                    }}
                  >
                    UPDATE SUB CATEGORY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateSubCategoryBar;
