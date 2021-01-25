import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import { Link } from "react-router-dom";
import Loader from "../partials/loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { getSellers } from "../../../redux/_actions/sellerAction";

const Seller = () => {
  const Sellers = useSelector((state) => state.seller.sellers);
  const [count, setCount] = useState(9);
  const [sellerlength, setsellerlength] = useState([]);
  const fetchMoreSellers = () => {
    setCount(count + 9);
    setsellerlength(Sellers?.slice(0, count));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSellers());
  }, [dispatch]);

  useEffect(() => {
    setsellerlength(Sellers?.slice(0, count));
  }, [Sellers]);

  if (!sellerlength) {
    return <Loader />;
  }
  return (
    <>
      <div className="component">
        <Header />
        <NavBar />
      </div>
      <ol className="breadcrumb m-0">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Sellers</li>
      </ol>
      <div className="topseller">
        <div className="container-fluid">
          <InfiniteScroll
            dataLength={sellerlength}
            next={() => fetchMoreSellers()}
            hasMore={true}
            className="row w-100"
          >
            {Sellers.length !== 0 ? (
              <>
                {Sellers?.map((seller) => (
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
                ))}
              </>
            ) : (
              <div className="empty">No Sellers</div>
            )}
          </InfiniteScroll>
        </div>
      </div>
      <div className="component">
        <Footer />
      </div>
    </>
  );
};

export default Seller;
