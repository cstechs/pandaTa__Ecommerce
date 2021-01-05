import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../../redux/_actions/productAction";
import { setAlert } from "../../../redux/_actions/alertAction";
import { CLEAR_ERRORS } from "../../../redux/types";
import { getCategory } from "../../../redux/_actions/categoryAction";
import { getSubCategoryByCategoryId } from "../../../redux/_actions/subCategoryAction";
import { json } from "body-parser";
const AddProductBar = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
  });
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  function toggle() {
    document
      .getElementById("AddProductBar")
      .classList.toggle("ShowProductAndCategoryBar");
  }
  const category = useSelector((state) => state.category);
  const subCategory = useSelector((state) => state.subCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  const [newProduct, setNewProduct] = useState({
    productName: "",
    productQuantity: "",
    productPrice: "",
    productCategory: "",
    productDescription: "",
    productImage: "",
    productSubCategory: "",
    createdBy: user._id,
  });
  //const [productImage, setNewFile] = useState("");
  const {
    productName,
    productQuantity,
    productPrice,
    productCategory,
    productDescription,
    productImage,
    productSubCategory,
  } = newProduct;
  const onChange = (e) =>
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  const handleOnUploadFile = (e) =>
    setNewProduct({ ...newProduct, [e.target.name]: e.target.files[0] });
  const onCategoryChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    dispatch(getSubCategoryByCategoryId(e.target.value));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      productName === "" ||
      productQuantity === "" ||
      productPrice === "" ||
      productCategory === "" ||
      productImage === "" ||
      productDescription === "" ||
      productSubCategory === ""
    ) {
      dispatch(setAlert("Please enter all the fields.", "danger"));
    } else {
      const data = new FormData();
      data.append("productName", newProduct.productName);
      data.append("productQuantity", newProduct.productQuantity);
      data.append("productPrice", newProduct.productPrice);
      // data.append('productCategory', newProduct.productCategory);
      data.append("productDescription", newProduct.productDescription);
      data.append("productSubCategory", newProduct.productSubCategory);
      data.append("productImage", newProduct.productImage);
      data.append("createdBy", newProduct.createdBy);
      dispatch(addProduct(data));
      window.location.reload();
    }
  };
  return (
    <>
      <i className="fas fa-times-circle closeIcon" onClick={toggle}></i>
      <div className="ProductBar">
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-box">
                <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">
                  Product Datails
                </h5>
                <div className="form-group mb-2">
                  <label htmlFor="product-name">
                    Product Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="product-name"
                    className="form-control"
                    name="productName"
                    value={productName}
                    required
                    onChange={onChange}
                    placeholder="e.g : Apple iMac"
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="product-unit">
                    Product Unit <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    id="product-unit"
                    className="form-control"
                    name="productQuantity"
                    value={productQuantity}
                    required
                    onChange={onChange}
                    placeholder="e.g : quantity"
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="product-price">
                    Product Price <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    id="product-price"
                    className="form-control"
                    name="productPrice"
                    value={productPrice}
                    required
                    onChange={onChange}
                    placeholder="e.g : amount"
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="product-category">
                    Product Category <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-control select2"
                    id="product-category"
                    name="productCategory"
                    value={productCategory}
                    required
                    onChange={onCategoryChange}
                  >
                    <option value="">Select Category</option>
                    {category.categories.data?.map(({ _id, categoryName }) => (
                      <option key={_id} value={_id}>
                        {categoryName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="product-subcategory">
                    Product SubCategory <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-control select2"
                    id="product-subcategory"
                    name="productSubCategory"
                    value={productSubCategory}
                    required
                    onChange={onChange}
                  >
                    <option value="">Select Sub Category</option>
                    {subCategory.subCategories.data?.map(
                      ({ _id, subCategoryName }) => (
                        <option key={_id} value={_id}>
                          {subCategoryName}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="product-description">
                    Product Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="product-description"
                    rows={6}
                    name="productDescription"
                    value={productDescription}
                    required
                    onChange={onChange}
                    placeholder="Please enter description"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card-box">
                <h5 className="text-uppercase mt-0 mb-3 bg-light p-2">
                  Product Images
                </h5>
                <div className="dz-message">
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input
                      {...getInputProps()}
                      name="productImage"
                      onChange={handleOnUploadFile}
                    />
                    <i className="h1 text-muted dripicons-cloud-upload" />
                    <h4>Drop files here or click to upload.</h4>
                    <span>(Only *.jpeg and *.png images will be accepted)</span>
                  </div>
                </div>
              </div>
              <div className="text-right mt-2">
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
                  ADD PRODUCT
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddProductBar;
