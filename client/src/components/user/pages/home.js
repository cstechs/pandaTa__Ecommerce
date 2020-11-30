import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import $ from 'jquery'
import Header from '../partials/header'
import NavBar from '../partials/navbar'
import Footer from '../partials/footer'

import productimg from '../../../assets/images/user/product.png'
import whybecomebuyerimg from '../../../assets/images/user/whybecomebuyer.png'
import whybecomeSellerimg from '../../../assets/images/user//whybecomeseller.png'
import SliderImage1 from '../../../assets/images/user/SliderImage1.jpg'
import SliderImage2 from '../../../assets/images/user/SliderImage2.jpg'
import SliderImage3 from '../../../assets/images/user/SliderImage3.jpg'
import SliderImage4 from '../../../assets/images/user/SliderImage4.jpg'
import SliderImage5 from '../../../assets/images/user/SliderImage5.jpg'
import SliderImage6 from '../../../assets/images/user/SliderImage6.jpg'
import { getCategory } from '../../../redux/_actions/categoryAction';
import OwlCarousel from 'react-owl-carousel';
import loader from '../../../assets/images/loader.gif'


const Home  = () => {

const [responsive] = useState({
    0: {
      items: 1,
    },
    450: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
});
  const category = useSelector(state => state.category);
  
  useEffect(() => {
    document.getElementsByClassName('owl-prev')[0].innerHTML = '<i class="fa">&#xf0d9</i>';
    document.getElementsByClassName('owl-next')[0].innerHTML = '<i class="fa">&#xf0da</i>';
    $(function () {
      setTimeout(function () {
        $("#loader").fadeOut();
      }, 1000)
    })
    }, []);
    return (
      <>
        {/* <div id="loader">
          <img src={loader} alt="Loading" />
        </div> */}
        <div className="component">
          <Header />
          <NavBar />
        </div>
        {/* slider portion */}
        <div className="slider">
          <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={SliderImage1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={SliderImage2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={SliderImage3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={SliderImage4} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={SliderImage5} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item"> 
                <img src={SliderImage6} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <div className="overlay">
            <div className="content">
              <h1>
                We have dream to connect wholesalers to<br />independent Customers
              </h1>
              <button className="ripple button-base" >Explore </button>
            </div>
          </div>
        </div>
        {/* categories portion */}
        <div className="categories">
          <OwlCarousel responsive={responsive} className="owl-theme" loop navContainer="#customNav" margin={8} >
          {category.categories.data?.map(({ _id, categoryName }) => (
            <div className="item" key={_id} >
            <img src={productimg} alt="" />
            <p>{categoryName}</p>
          </div>
         ))}
          </OwlCarousel>
          <div className="owl-theme">
            <div className="owl-controls">
              <div id="customNav" className="owl-nav"></div>
            </div>
          </div>
        </div>

        {/* topseller portion */}
        <div className="topseller">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h2>Top Seller</h2>
              </div>
              <div className="col-md-4">
                <div className="product_portion">
                  <img src={productimg} alt="" />
                  <div className="content">
                    <div className="content-left">
                      <span className="vendor">Cyrusshare</span>
                      <span className="product_name">MERRY'S Cat Eye Sunglasses Women</span>
                      <span className="product_price">$125.00</span>
                    </div>
                    <div className="content-right">
                      <i className="fa fa-caret-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product_portion">
                  <img src={productimg} alt="" />
                  <div className="content">
                    <div className="content-left">
                      <span className="vendor">Cyrusshare</span>
                      <span className="product_name">MERRY'S Cat Eye Sunglasses Women</span>
                      <span className="product_price">$125.00</span>
                    </div>
                    <div className="content-right">
                      <i className="fa fa-caret-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product_portion">
                  <img src={productimg} alt="" />
                  <div className="content">
                    <div className="content-left">
                      <span className="vendor">Cyrusshare</span>
                      <span className="product_name">MERRY'S Cat Eye Sunglasses Women</span>
                      <span className="product_price">$125.00</span>
                    </div>
                    <div className="content-right">
                      <i className="fa fa-caret-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p><span>Explore More <i className="fa fa-caret-right"></i></span></p>
        </div>

        {/* whyBecomeBuyer portion */}
        <div className="whyBecomeBuyer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="content">
                  <h2>Why Become Buyer?</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam feliultricies nec, pellentesque eu, pretium quis,
sem. Nulla consequat massa quis enim.</p>
                  <button className="ripple button-base">Apply to Buy</button>
                </div>
              </div>
              <div className="col-md-6">
                <img src={whybecomebuyerimg} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* whyBecomeSeller portion */}
        <div className="whyBecomeSeller">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <img src={whybecomeSellerimg} alt="" />
              </div>
              <div className="col-md-6">
                <div className="content">
                  <h2>Why Become Selller?</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam feliultricies nec, pellentesque eu, pretium quis,
sem. Nulla consequat massa quis enim.</p>
                  <button className="ripple button-base">Apply to Sell</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="productsPortion">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
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
                    <div className="col-6">
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
                    <div className="col-6">
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
                    <div className="col-6">
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
                    <div className="col-6">
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
                    <div className="col-6">
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
                    <div className="col-6">
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
              <div className="col-md-6">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-6">
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
                    <div className="col-6">
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
                    <div className="col-6">
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
                    <div className="col-6">
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
                    <div className="col-12">
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
                    <div className="col-6">
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
                    <div className="col-6">
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
        <div className="component">
          <Footer />
        </div>
      </>
    )
}

export default Home
