import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../redux/_actions/categoryAction";
import { setAlert } from "../../../redux/_actions/alertAction";
// import { CLEAR_ERRORS } from '../../../redux/types';

const AddCategoryBar = () => {
  function toggle() {
    document
      .getElementById("AddCategoryBar")
      .classList.toggle("ShowProductAndCategoryBar");
  }

  const dispatch = useDispatch();

  const [newCategory, setNewCategory] = useState({
    categoryName: "",
  });

  const { categoryName } = newCategory;

  const onChange = (e) =>
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (categoryName === "") {
      dispatch(setAlert("Please Enter fields.", "danger"));
    } else {
      dispatch(addCategory(newCategory));
      window.location.reload();
    }
  };

  return (
    <>
      <i className="fas fa-times-circle closeIcon" onClick={toggle}></i>
      <div className="CategoryBar">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-12">
              <div className="card-box">
                <h5 className="text-uppercase bg-light p-2 mt-2 mb-3">
                  Category Datails
                </h5>
                <div className="form-group mb-2">
                  <label htmlFor="category-name">
                    Category Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="category-name"
                    className="form-control"
                    name="categoryName"
                    value={categoryName}
                    required
                    onChange={onChange}
                    placeholder="e.g : clothes"
                  />
                </div>
              </div>
              <div className="text-right mt-4">
                <span
                  className="btn btn-danger ripple button-base mr-2 px-4"
                  onClick={toggle}
                >
                  CANCEL
                </span>
                <button
                  type="submit"
                  className="btn btn-success ripple button-base px-5 mr-3"
                >
                  ADD CATEGORY
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCategoryBar;
