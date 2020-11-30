import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Header from '../partials/header'
import NavBar from '../partials/navbar'
import Footer from '../partials/footer'
import { Link } from 'react-router-dom'
import { getProduct } from '../../../redux/_actions/productAction';

const Product = () => {

    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
    }, []);

    return (
        <>
            <div className="component">
                <Header />
                <NavBar />
            </div>
            <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Clothing</li>
            </ol>
            <div className="PageTitle">Clothing</div>
            <div className="products">
                <div className="container-fluid">
                    <div className="row">
                        {product.products.data?.map(({ _id, productName, productPrice, productImage }) => (
                            <div className="col-md-3 col-6" key={_id} >
                                <div className="product">
                                    <img src={`/${productImage}`} alt="" />
                                    <div className="content">
                                        <div className="content-left">
                                            <span className="vendor">Supplier’s Name Here</span>
                                            <span className="product_name">{productName}</span>
                                            <span className="product_price">${productPrice}</span>
                                        </div>
                                        <div className="content-right">
                                            <i className="fa fa-caret-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button className="viewMoreButton ripple button-base">View More Items</button>
            <div className="component">
                <Footer />
            </div>
        </>
    )
}

export default Product
