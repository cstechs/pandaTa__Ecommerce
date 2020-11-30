import React, {useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../partials/topnavbar'
import Footer from '../partials/footer'
import AddProductBar from '../partials/addProductBar'
import UpdateProductBar from '../partials/updateProductBar'
import productProgessImg1 from '../../../assets/images/admin/current-products-progress-img-1.png'
import productProgessImg2 from '../../../assets/images/admin/current-products-progress-img-2.png'
import productProgessImg3 from '../../../assets/images/admin/current-products-progress-img-3.png'

import { getProduct } from '../../../redux/_actions/productAction';


const Products = () => {

    function productToggle() {
        document.getElementById("AddProductBar").classList.toggle("ShowProductAndCategoryBar");
    }
    function UpdateproductToggle(id) {
        return <UpdateProductBar/>
    }
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct()).then(() => {

                var y = document.getElementsByClassName("productQuantity");
                var i;
                for (i = 0; i < y.length; i++) {
                    if(y[i].innerHTML == 11)
                    {
                        var product = document.getElementsByClassName("productQuantityBadge");
                        var i;
                        for (i = 0; i < product.length; i++) {
                        product[i].classList.toggle("badge-danger");
                    }
                }
                    else{
                        var product = document.getElementsByClassName("productQuantityBadge");
                        var i;
                        for (i = 0; i < product.length; i++) {
                        product[i].classList.toggle("badge-success");
                    }
                    }
                }
        });
    }, []);
    return (
        <>
            <div className="Dashobard">
                <div id="wrapper">
                    <Navbar />
                    <div className="content-page" id="content">
                        <div className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="page-title-box">
                                            <div className="page-title-right">
                                                <ol className="breadcrumb m-0">
                                                    <li className="breadcrumb-item"><Link to="/admin">PANDA / TA</Link></li>
                                                    <li className="breadcrumb-item active">Products</li>
                                                </ol>
                                            </div>
                                            <h4 className="page-title">Products</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card-box current-products-progress">
                                            <div>
                                                <img src={productProgessImg1} draggable="false" />
                                            </div>
                                            <div>
                                                <h2 className="text-left text-lightblue">$50,000</h2>
                                                <p className="text-secondary ">Total Revenue</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-box current-products-progress">
                                            <div>
                                                <img src={productProgessImg2} draggable="false" />
                                            </div>
                                            <div>
                                                <h2 className="text-left text-purple">$1,250</h2>
                                                <p className="text-secondary ">Revenue</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-box current-products-progress">
                                            <div>
                                                <img src={productProgessImg3} draggable="false" />
                                            </div>
                                            <div>
                                                <h2 className="text-left text-success">+2.0%</h2>
                                                <p className="text-secondary">Growth</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-right">
                                        <button className="btn btn-success ripple button-base mr-2" onClick={productToggle}>ADD PRODUCT</button>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-8">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="header-title">Products </h4>
                                                <div className="table-responsive mt-3">
                                                    <table className="table table-hover mb-0 product-data-table">
                                                        <thead className="thead-light position-absolute">
                                                            <tr>
                                                                <th className="productName" id="productQuantity">PRODUCTS</th>
                                                                <th>AVAILIBITLTY</th>
                                                                <th>TOTAL</th>
                                                                <th>ACTION</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {product.products.data?.map(({ _id, productName, productPrice, productQuantity, productImage }) => (    
                                                                <tr key={_id} >
                                                                    <td className="productName">
                                                                        <div className="product_image">
                                                                            <img src={`/${productImage}`} className="mr-2" alt="product-img" />
                                                                        </div>
                                                                        <div className="product_name">
                                                                            <p className="m-0 font-13 text-secondary">
                                                                                {productName}
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                    <td><div className="badge p-1 mt-2 productQuantityBadge"><span className="productQuantity">{productQuantity}</span> in stock</div></td>
                                                                    <td className="pt-3">${productPrice}</td>
                                                                    <td className="pt-3 font-16">
                                                                        <i className="fas fa-edit" onClick={() => UpdateproductToggle(_id)}></i>
                                                                    |
                                                                    <i className="fas fa-trash-alt text-danger"></i>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                            
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="header-title mb-3">Quick Details </h4>

                                                <div className="quick-detail-item">
                                                    <div className="quick-detail-icon bg-purple">
                                                        <i className="fas fa-user-plus" />
                                                    </div>
                                                    <div className="quick-detail-details">
                                                        <div className="float-left">
                                                            <h6>Last 24 Hours</h6>
                                                        </div>
                                                        <div className="float-right">
                                                            <h4>290 new customers</h4>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="quick-detail-item">
                                                    <div className="quick-detail-icon bg-success">
                                                        <i className="fas fa-redo" />
                                                    </div>
                                                    <div className="quick-detail-details">
                                                        <div className="float-left">
                                                            <h6>Awaiting Process</h6>
                                                        </div>
                                                        <div className="float-right">
                                                            <h4>490 orders</h4>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="quick-detail-item">
                                                    <div className="quick-detail-icon bg-secondary">
                                                        <i className="fas fa-stopwatch" />
                                                    </div>
                                                    <div className="quick-detail-details">
                                                        <div className="float-left">
                                                            <h6>On Hold </h6>
                                                        </div>
                                                        <div className="float-right">
                                                            <h4>120 orders</h4>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="quick-detail-item">
                                                    <div className="quick-detail-icon bg-warning">
                                                        <i className="fas fa-exclamation-circle" />
                                                    </div>
                                                    <div className="quick-detail-details">
                                                        <div className="float-left">
                                                            <h6>Low in Stock</h6>
                                                        </div>
                                                        <div className="float-right">
                                                            <h4>490 orders</h4>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="quick-detail-item">
                                                    <div className="quick-detail-icon bg-danger">
                                                        <i className="fas fa-times-circle" />
                                                    </div>
                                                    <div className="quick-detail-details">
                                                        <div className="float-left">
                                                            <h6>Out of Stock </h6>
                                                        </div>
                                                        <div className="float-right">
                                                            <h4>42 items</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
            <div className="Product_Bar_Portion" id="AddProductBar">
                <AddProductBar />
            </div>
            
        </>
    )
}

export default Products
