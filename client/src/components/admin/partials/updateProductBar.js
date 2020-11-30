import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/_actions/productAction';
import { setAlert } from '../../../redux/_actions/alertAction'

const UpdateProductBar = () => {
    const {
        acceptedFiles,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: 'image/jpeg, image/png'
    });

    const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    function toggle() {
        document.getElementById("UpdateProductBar").classList.toggle("ShowProductAndCategoryBar");
    }

    const dispatch = useDispatch();

    const [newProduct, setNewProduct] = useState({
        productName: '',
        productQuantity: '',
        productPrice: '',
        productCategory: [],
        productDescription: '',
        productImage: '',
    });

    useEffect(() => {alert('Hello');
    }, []);

    const { productName, productQuantity, productPrice, productCategory, productDescription, productImage } = newProduct;

    const onChange = (e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (productName === '' || productQuantity === '' || productPrice === '' || productCategory === '' || productDescription === '' || productImage === '') {
            dispatch(setAlert('Please enter all the fields.', 'danger'));
        }
        else {
            dispatch(addProduct(newProduct));
        }
    }

    return (
        <><div className="Product_Bar_Portion" id="UpdateProductBar" style={{transform:"translateX(0)"}}>
            <i className="fas fa-times-circle closeIcon" onClick={toggle}></i>
            <div className="ProductBar">
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card-box">
                                <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">Product Datails</h5>
                                <div className="form-group mb-2">
                                    <label htmlFor="product-name">Product Name <span className="text-danger">*</span></label>
                                    <input type="text" id="product-name" className="form-control" name="productName" value={productName} required onChange={onChange} placeholder="e.g : Apple iMac" />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="product-unit">Product Unit <span className="text-danger">*</span></label>
                                    <input type="text" id="product-unit" className="form-control" name="productQuantity" value={productQuantity} required onChange={onChange} placeholder="e.g : quantity" />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="product-price">Product Price <span className="text-danger">*</span></label>
                                    <input type="text" id="product-price" className="form-control" name="productPrice" value={productPrice} required onChange={onChange} placeholder="e.g : amount" />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="product-category">Product Category <span className="text-danger">*</span></label>
                                    <select className="form-control select2" id="product-category" name="productCategory" >
                                        <option>Category 1</option>
                                        <option>Category 2</option>
                                        <option>Category 3</option>
                                        <option>Category 4</option>
                                    </select>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="product-description">Product Description <span className="text-danger">*</span></label>
                                    <textarea className="form-control" id="product-description" rows={6} name="productDescription" value={productDescription} required onChange={onChange} placeholder="Please enter description" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card-box">
                                <h5 className="text-uppercase mt-0 mb-3 bg-light p-2">Product Images</h5>
                                <div className="dz-message">
                                    <div {...getRootProps({ className: 'dropzone' })}>
                                        <input {...getInputProps()} name="productImage" value={productImage} required onChange={onChange} />
                                        <i className="h1 text-muted dripicons-cloud-upload" />
                                        <h4>Drop files here or click to upload.</h4>
                                        <span>(Only *.jpeg and *.png images will be accepted)</span>
                                    </div>
                                    <aside>
                                        <ul>{acceptedFileItems}</ul>
                                    </aside>
                                </div>
                            </div>
                            <div className="text-right mt-2">
                                <span className="btn btn-danger ripple button-base mr-2 px-4" onClick={toggle}>CANCEL</span>
                                <button className="btn btn-success ripple button-base px-5 mr-3">UPDATE PRODUCT</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default UpdateProductBar;