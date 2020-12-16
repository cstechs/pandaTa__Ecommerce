import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setAlert } from '../../../redux/_actions/alertAction'
import { getCategory } from '../../../redux/_actions/categoryAction';
import { addSubCategory } from '../../../redux/_actions/subCategoryAction';



const AddSubCategoryBar = () => {
function toggle() {
    document.getElementById("AddSubCategoryBar").classList.toggle("ShowProductAndCategoryBar");
}

const category = useSelector(state => state.category)
const dispatch = useDispatch();

// const [categoryId, setValue] = useState("");
// const [isDisable, setDisable] = useState(true);

useEffect(() => {
    dispatch(getCategory());
}, []);


const [newSubCategory, setNewSubCategory] = useState({
    subCategoryName: '',
    categoryId:''
});

const { subCategoryName, categoryId } = newSubCategory;

const onChange = (e) => setNewSubCategory({ ...newSubCategory, [e.target.name]: e.target.value });
const onSubmit = e => {
    e.preventDefault();
    if (subCategoryName === '' || categoryId === '') {
        dispatch(setAlert('Please Enter fields.', 'danger'));
    }
    else {
        dispatch(addSubCategory(newSubCategory));
        dispatch(setAlert('Sub Category Added Suceesfully', 'succcess'));
        window.location.reload();
    }
}

return (
    <>
        <i className="fas fa-times-circle closeIcon" onClick={toggle}></i>
        <div className="CategoryBar">
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-12">
                            <div className="card-box">
                                <h5 className="text-uppercase bg-light p-2 mt-2 mb-3">Add Sub Category</h5>
                                <div className="form-group mb-2">
                                    <label htmlFor="category-name">Selct Category <span className="text-danger">*</span></label>
                                    <select className="form-control select2" id="product-category" name="categoryId" value={categoryId} required onChange={onChange}>
                                    <option value="">Select Category</option>
                                    {category.categories.data?.map(({ _id, categoryName }) => (
                                            <option key={_id} value={_id}>
                                                {categoryName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="category-name">Sub Category Name <span className="text-danger">*</span></label>
                                    <input type="text" id="category-name" className="form-control" name="subCategoryName" value={subCategoryName} onChange={onChange} placeholder="e.g : beds" />
                                </div>
                                <div className="text-right mt-4">
                                    <span className="btn btn-danger ripple button-base mr-2 px-4" onClick={toggle}>CANCEL</span>
                                    <button type="submit" className="btn btn-success ripple button-base px-5 ">ADD SUB CATEGORY</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
        </div>
    </>
)
}

export default AddSubCategoryBar;