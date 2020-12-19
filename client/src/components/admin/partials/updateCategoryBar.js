import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCategory } from "../../../redux/_actions/categoryAction";

const UpdateCategoryBar = (props) => {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [update, setUpdate] = useState(props.newcategory?.categoryName);
  const dispatch = useDispatch();

  function handleHide() {
    window.location.reload();
  }

  useEffect(() => {}, []);
  const onSubmit = (e, id) => {
    dispatch(updateCategory(id, update));
  };
  const handleChange = (e) => {
    setUpdate(e.target.value);
  };

  return (
    <>
      <i className="fas fa-times-circle closeIcon" onClick={handleHide}></i>
      <div className="CategoryBar">
        <form>
          <div className="row">
            <div className="col-12">
              <div className="card-box">
                <h5 className="text-uppercase bg-light p-2 mt-2 mb-3">
                  Update Category
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
                    required
                    value={update}
                    onChange={(e) => handleChange(e)}
                    placeholder="e.g : homeware"
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
                    onClick={(e) => {
                      onSubmit(e, props.newcategory?._id);
                    }}
                    className="btn btn-success ripple button-base px-5 "
                  >
                    UPDATE CATEGORY
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

export default UpdateCategoryBar;
