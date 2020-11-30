import React, {} from 'react'

const UpdateCategoryBar = () => {

    function toggle() {
        document.getElementById("UpdateCategoryBar").classList.toggle("ShowProductAndCategoryBar");
    }

    return (
        <>
            <i className="fas fa-times-circle closeIcon" onClick={toggle}></i>
            <div className="CategoryBar">
                <form>
                    <div className="row">
                        <div className="col-12">
                            <div className="card-box">
                                <h5 className="text-uppercase bg-light p-2 mt-2 mb-3">Update Category</h5>
                                <div className="form-group mb-2">
                                    <label htmlFor="category-name">Category Name <span className="text-danger">*</span></label>
                                    <input type="text" id="category-name" className="form-control" name="categoryName" required placeholder="e.g : homeware" />
                                </div>
                                <div className="text-right mt-4">
                                    <span className="btn btn-danger ripple button-base mr-2 px-4" onClick={toggle}>CANCEL</span>
                                    <button type="submit" className="btn btn-success ripple button-base px-5 ">UPDATE CATEGORY</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateCategoryBar;