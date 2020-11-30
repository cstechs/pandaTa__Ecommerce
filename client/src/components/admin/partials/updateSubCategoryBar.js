import React, {} from 'react'

const UpdateSubCategoryBar = () => {

    function toggle() {
        document.getElementById("UpdateSubCategoryBar").classList.toggle("ShowProductAndCategoryBar");
    }

    return (
        <>
            <i className="fas fa-times-circle closeIcon" onClick={toggle}></i>
            <div className="CategoryBar">
                <form>
                    <div className="row">
                        <div className="col-12">
                            <div className="card-box">
                                <h5 className="text-uppercase bg-light p-2 mt-2 mb-3">Update Sub Category</h5>
                                <div className="form-group mb-2">
                                    <label htmlFor="category-name">Selct Category <span className="text-danger">*</span></label>
                                    <select className="form-control">
                                        <option disabled>Select Category</option>
                                        <option>Homeware</option>
                                        <option>Furniture</option>
                                        <option>Lighting</option>
                                        <option>Gifts</option>
                                    </select>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="category-name">Sub Category Name <span className="text-danger">*</span></label>
                                    <input type="text" id="category-name" className="form-control" name="SubcategoryName" placeholder="e.g : beds" />
                                </div>
                                <div className="text-right mt-4">
                                    <span className="btn btn-danger ripple button-base mr-2 px-4" onClick={toggle}>CANCEL</span>
                                    <button type="submit" className="btn btn-success ripple button-base px-5 ">UPDATE SUB CATEGORY</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateSubCategoryBar;