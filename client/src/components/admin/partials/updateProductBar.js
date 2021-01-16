import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../../../redux/_actions/productAction";
import { setAlert } from "../../../redux/_actions/alertAction";
import { getCategory } from "../../../redux/_actions/categoryAction";
import { getSubCategory } from "../../../redux/_actions/subCategoryAction";
import { getSubCategoryByCategoryId } from "../../../redux/_actions/subCategoryAction";

const UpdateProductBar = (props) => {
  const category = useSelector((state) => state.category);
  const subCategory = useSelector((state) => state.subCategory);
  const dispatch = useDispatch();

  const handleHide = () => {
    props.updatetogglePreview();
  };
  const [newProduct, setNewProduct] = useState({
    productName: props.products.productName,
    productQuantity: props.products.productQuantity,
    productPrice: props.products.productPrice,
    productCategory: props.products.productCategory,
    productDescription: props.products.productDescription,
    productImage: props.products.productImage,
    productSubCategory: props.products.productSubCategory,
  });
  const {
    productName,
    productQuantity,
    productPrice,
    productCategory,
    productDescription,
    productImage,
    productSubCategory,
  } = newProduct;

  const [fileImage, setfileImage] = useState(null);
  const onChange = (e) =>
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });

  const handleOnUploadFile = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.files[0] });
    setfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const onCategoryChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    dispatch(getSubCategoryByCategoryId(e.target.value));
  };
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSubCategory());
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      productName === "" ||
      productQuantity === "" ||
      productPrice === "" ||
      productCategory === "" ||
      productDescription === "" ||
      productSubCategory === ""
    ) {
      dispatch(setAlert("Please enter all the fields.", "danger"));
    } else {
      const data = new FormData();
      data.append("productName", newProduct.productName);
      data.append("productQuantity", newProduct.productQuantity);
      data.append("productPrice", newProduct.productPrice);
      data.append("productCategory", newProduct.productCategory);
      data.append("productDescription", newProduct.productDescription);
      data.append("productSubCategory", newProduct.productSubCategory);
      data.append("productImage", newProduct.productImage);
      dispatch(updateProduct(data, props.products._id));
    }
  };
  return (
    <>
      <i className="fas fa-times-circle closeIcon" onClick={handleHide}></i>
      <div className="ProductBar">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <div className="card-box">
                <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">
                  PRODUCT DETAIL
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
                    type="text"
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
                    name="productCategory"
                    value={productCategory}
                    onChange={onCategoryChange}
                    required
                    defaultValue={
                      category?.categories?.data?.find(
                        (z) =>
                          z._id ===
                          subCategory.subCategories?.data?.find(
                            (x) => x._id === productSubCategory
                          )?.categoryId
                      )?.categoryName
                    }
                  >
                    <option>
                      {
                        category?.categories?.data?.find(
                          (z) =>
                            z._id ===
                            subCategory.subCategories?.data?.find(
                              (x) => x._id === productSubCategory
                            )?.categoryId
                        )?.categoryName
                      }
                    </option>
                    {category.categories.data?.map((item, index) => (
                      <>
                        {index > 0 && (
                          <option key={item._id} value={item._id}>
                            {item.categoryName}
                          </option>
                        )}
                      </>
                    ))}
                  </select>
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="product-subcategory">
                    Product SubCategory <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-control select2"
                    name="productSubCategory"
                    value={productSubCategory}
                    required
                    onChange={onChange}
                  >
                    {
                      subCategory.subCategories?.data?.find(
                        (x) => x._id === productSubCategory
                      )?.subCategoryName
                    }
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
                <div className="dropzone mb-3">
                  <input
                    type="file"
                    name="productImage"
                    onChange={handleOnUploadFile}
                  />
                  <i className="h1 text-muted dripicons-cloud-upload" />
                  <h4>Update Your Image Here</h4>
                  <span>(Drop files here or click to upload)</span>
                </div>
                {fileImage ? (
                  <label>Updated Image</label>
                ) : (
                  <label>Current Image</label>
                )}
                <div className="SelectedImage">
                  {fileImage ? (
                    <img src={`${fileImage}`} alt={productName} />
                  ) : (
                    <img src={`/${productImage}`} alt={productName} />
                  )}
                </div>
              </div>
              <div className="text-right mt-2">
                <span
                  className="btn btn-danger ripple button-base mr-2 px-4"
                  onClick={handleHide}
                >
                  CANCEL
                </span>
                <button
                  className="btn btn-success ripple button-base px-5 mr-3"
                  onClick={(e) => onSubmit(e)}
                >
                  UPDATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProductBar;
