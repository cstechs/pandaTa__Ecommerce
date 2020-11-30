import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Header from '../partials/header'
import NavBar from '../partials/navbar'
import Footer from '../partials/footer'
import productimg from '../../../assets/images/user/product.png'
import businessimg from '../../../assets/images/user/businessLogo.png'
import UserImage from '../../../assets/images/admin/users/user-2.jpg'
import { getCategory } from '../../../redux/_actions/categoryAction';

const Category = () => {

    function categoryDropDownToggle() {
        document.getElementById("categoryShowIcon").classList.toggle("show");
        document.getElementById("categoryHideIcon").classList.toggle("hide");
        document.getElementById("categoryDropDown").classList.toggle("hide");
    }

    function materialDropDownToggle() {
        document.getElementById("materialShowIcon").classList.toggle("show");
        document.getElementById("materialHideIcon").classList.toggle("hide");
        document.getElementById("materialDropDown").classList.toggle("hide");
    }

    function finishDropDownToggle() {
        document.getElementById("finishShowIcon").classList.toggle("show");
        document.getElementById("finishHideIcon").classList.toggle("hide");
        document.getElementById("finishDropDown").classList.toggle("hide");
    }

    function styleDropDownToggle() {
        document.getElementById("styleShowIcon").classList.toggle("show");
        document.getElementById("styleHideIcon").classList.toggle("hide");
        document.getElementById("styleDropDown").classList.toggle("hide");
    }

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory());
    }, []);


    return (
        <>
            <div className="component">
                <Header />
                <NavBar />
            </div>
            <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/">Sellers</Link></li>
                <li className="breadcrumb-item active">Jena & Jeel</li>
            </ol>
            <div className="seller">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="SideBar">
                                <div className="sellerProfilePortion">
                                    <div className="businessImage">
                                        <img src={businessimg} alt="BussinessLogo" />
                                    </div>
                                    <h1>Jena & Jeel</h1>
                                    <p className="mb-3">NEW YORK, NY • USA</p>
                                    <button className="btn btn-darkpurple ripple px-3">Contact</button>
                                    <button className="btn btn-darkpurple-outline ripple px-3 ml-2">Follow</button>
                                    <p className="text-darkpurple mt-3 font-14">Cilek is wonderful serenity has taken possession of my entire as soul, is like these sweet mornings of spring which I enjoy with my whole heart. I am alone standards.</p>
                                    <p className="mt-3 font-14">MEET THE OWNER</p>
                                    <div className="underLine w-100"></div>
                                    <div className="sellerImage">
                                        <img src={UserImage} alt="sellerImage" />
                                    </div>
                                    <h1 className="font-20 mt-2">Gregory Wadsworth</h1>
                                    <p className="mt-2"><i className="fa fa-heart text-darkpurple mr-3 font-24"></i><i className="fa fa-link text-darkpurple font-24"></i></p>
                                </div>
                                <div className="BrowseByCategoryPortion">
                                    <h4 className="title">BROWSE BY CATEGORY</h4>
                                    <div className="dropTogggle" onClick={categoryDropDownToggle}>
                                        <i className="fa fa-plus" id="categoryShowIcon"></i>
                                        <i className="fa fa-minus" id="categoryHideIcon"></i>
                                    </div>
                                    <div className="underLine w-100 mt-2"></div>
                                    <ul style={{ height: '165px' }} id="categoryDropDown">
                                        <li>
                                            <label>All categories
                                               <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        {category.categories.data?.map(({ _id, categoryName }) => (
                                            <li key={_id} >
                                                <label>{categoryName}
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="BrowseByCategoryPortion">
                                    <h4 className="title">FILTER PRODUCTS</h4>
                                    <div className="underLine w-100 mt-2"></div>
                                    <div className="filterPortion">
                                        <h5 className="mb-2">MATERIAL</h5>
                                        <div className="dropTogggle" onClick={materialDropDownToggle}>
                                            <i className="fa fa-plus" id="materialShowIcon"></i>
                                            <i className="fa fa-minus" id="materialHideIcon"></i>
                                        </div>
                                        <ul style={{ height: '165px' }} id="materialDropDown">
                                            <li>
                                                <label>Metal
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Wood
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Plastic
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Denim
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Metal
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Wood
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Plastic
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Denim
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filterPortion">
                                        <h5 className="mb-2">FINISH</h5>
                                        <div className="dropTogggle" onClick={finishDropDownToggle}>
                                            <i className="fa fa-plus" id="finishShowIcon"></i>
                                            <i className="fa fa-minus" id="finishHideIcon"></i>
                                        </div>
                                        <ul style={{ height: '165px' }} id="finishDropDown">
                                            <li>
                                                <label>Oak
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Ash
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Bamboo
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Brown
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Oak
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Ash
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Bamboo
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Brown
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filterPortion">
                                        <h5 className="mb-2">STYLE</h5>
                                        <div className="dropTogggle" onClick={styleDropDownToggle}>
                                            <i className="fa fa-plus" id="styleShowIcon"></i>
                                            <i className="fa fa-minus" id="styleHideIcon"></i>
                                        </div>
                                        <ul style={{ height: '390px' }} id="styleDropDown">
                                            <li>
                                                <label>Traditional
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Contamporary
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Country Cottage
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Modern
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Coastal
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Global
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Medieval
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Industrial
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Americana
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Traditional
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Contamporary
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Country Cottage
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Modern
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Coastal
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Global
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Medieval
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Industrial
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>Americana
                                               <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                        </ul></div>
                                    <div className="filterPortion">
                                        <h5 className="mb-1">PRICE PER UNIT</h5>
                                        <ul>
                                            <li className="border-0">
                                                <input type="range" min="1" max="100" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filterPortion">
                                        <h5 className="mb-1">CUSTOMER RATING</h5>
                                        <ul>
                                            <li className="border-0">
                                                <i className="fa fa-star text-gold"></i>
                                                <i className="fa fa-star text-gold"></i>
                                                <i className="fa fa-star text-gold"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="products">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <div className="product">
                                                <img src={productimg} alt="" />
                                                <div className="content">
                                                    <div className="content-left">
                                                        <span className="vendor">Supplier’s Name Here</span>
                                                        <span className="product_name">Product Name Here</span>
                                                        <span className="product_price">$29,354.75</span>
                                                    </div>
                                                    <div className="content-right">
                                                        <i className="fa fa-caret-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="component">
                <Footer />
            </div>
        </>
    )
}

export default Category
