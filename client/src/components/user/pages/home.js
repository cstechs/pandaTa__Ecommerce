import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import whybecomebuyerimg from "../../../assets/images/user/whybecomebuyer.png";
import whybecomeSellerimg from "../../../assets/images/user//whybecomeseller.png";
import SliderImage1 from "../../../assets/images/user/SliderImage1.jpg";
import SliderImage2 from "../../../assets/images/user/SliderImage2.jpg";
import SliderImage3 from "../../../assets/images/user/SliderImage3.jpg";
import SliderImage4 from "../../../assets/images/user/SliderImage4.jpg";
import SliderImage5 from "../../../assets/images/user/SliderImage5.jpg";
import SliderImage6 from "../../../assets/images/user/SliderImage6.jpg";
import { getSubCategory } from "../../../redux/_actions/subCategoryAction";
import { getProduct } from "../../../redux/_actions/productAction";
import { getSellers } from "../../../redux/_actions/sellerAction";
import OwlCarousel from "react-owl-carousel";
import HomeLeft from "../partials/HomeLeft";
import HomeRight from "../partials/HomeRight";
import { Link } from "react-router-dom";
import Loader from "../partials/loader";
const Home = () => {
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
  const subCategory = useSelector((state) => state.subCategory);
  const product = useSelector((state) => state.product);
  const Sellers = useSelector((state) => state.seller.sellers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubCategory());
    dispatch(getProduct());
    document.getElementsByClassName("owl-prev")[0].innerHTML =
      '<i class="fa">&#xf0d9</i>';
    document.getElementsByClassName("owl-next")[0].innerHTML =
      '<i class="fa">&#xf0da</i>';
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSellers());
  }, [dispatch]);

  if (product && subCategory === undefined) {
    return <Loader />;
  }

  return (
    <>
      <div className="component">
        <Header />
        <NavBar />
      </div>
      {/* slider portion */}
      <div className="slider">
        <div
          id="carouselExampleIndicators"
          className="carousel slide "
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={SliderImage1}
                className="d-block w-100"
                alt="pandata-slider-image"
              />
            </div>
            <div className="carousel-item">
              <img
                src={SliderImage2}
                className="d-block w-100"
                alt="pandata-slider-image"
              />
            </div>
            <div className="carousel-item">
              <img
                src={SliderImage3}
                className="d-block w-100"
                alt="pandata-slider-image"
              />
            </div>
            <div className="carousel-item">
              <img
                src={SliderImage4}
                className="d-block w-100"
                alt="pandata-slider-image"
              />
            </div>
            <div className="carousel-item">
              <img
                src={SliderImage5}
                className="d-block w-100"
                alt="pandata-slider-image"
              />
            </div>
            <div className="carousel-item">
              <img
                src={SliderImage6}
                className="d-block w-100"
                alt="pandata-slider-image"
              />
            </div>
          </div>
        </div>
        <div className="overlay">
          <div className="content">
            <h1>
              We have dream to connect wholesalers to
              <br />
              independent Customers
            </h1>
            <button className="ripple button-base">Explore </button>
          </div>
        </div>
      </div>
      {/* categories portion */}
      <div className="categories">
        <OwlCarousel
          responsive={responsive}
          className="owl-theme category-carousel"
          loop
          navContainer="#customNav"
          margin={8}
        >
          {subCategory.subCategories.data?.map(({ _id, subCategoryName }) => (
            <Link to="/product" key={_id}>
              <div className="item" key={_id}>
                <div
                  className="image-portion"
                  style={{
                    backgroundImage: `url(${
                      product?.products?.data?.find(
                        (x) => x.productSubCategory === _id
                      )?.productImage
                    })`,
                  }}
                >
                  <div className="overlay" />
                </div>
                <p>{subCategoryName}</p>
              </div>
            </Link>
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
              <h2>Our Seller</h2>
            </div>
            {Sellers.length !== 0 ? (
              <>
                {Sellers?.map((seller, index) => (
                  <React.Fragment key={index}>
                    {index < 4 && index >= 0 && (
                      <div key={seller._id} className="col-md-3 col-sm-6">
                        <div className="user">
                          <div
                            className="imgCircle"
                            style={{
                              backgroundImage: `url(${seller.userImage})`,
                            }}
                          ></div>
                          <h5>{seller.userName}</h5>
                          <p className="text-break">{seller.userBio}</p>
                          <Link
                            to={`/seller/${seller._id}`}
                            className="text-decoration-none text-white"
                          >
                            <button>VIEW PROFILE</button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </>
            ) : (
              <div className="empty">No Sellers</div>
            )}
          </div>
        </div>
        {Sellers.length !== 0 && (
          <p>
            <Link to="/seller" className="text-darkpurple">
              Explore More <i className="fa fa-caret-right"></i>
            </Link>
          </p>
        )}
      </div>

      {/* whyBecomeBuyer portion */}
      <div className="whyBecomeBuyer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="content">
                <h2>Why Become Buyer?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam feliultricies nec, pellentesque eu,
                  pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <button className="ripple button-base">Apply to Buy</button>
              </div>
            </div>
            <div className="col-md-6">
              <img src={whybecomebuyerimg} alt="pandata-why-become-buyer" />
            </div>
          </div>
        </div>
      </div>
      {/* whyBecomeSeller portion */}
      <div className="whyBecomeSeller">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <img src={whybecomeSellerimg} alt="pandata-why-become-seller" />
            </div>
            <div className="col-md-6">
              <div className="content">
                <h2>Why Become Selller?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam feliultricies nec, pellentesque eu,
                  pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <button className="ripple button-base">Apply to Sell</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productsPortion">
        <div className="container-fluid">
          <div className="row">
            <HomeLeft product={product} />
            <HomeRight product={product} />
          </div>
        </div>
      </div>
      <div className="component">
        <Footer />
      </div>
    </>
  );
};
export default Home;
