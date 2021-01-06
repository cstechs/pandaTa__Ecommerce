import React, { useEffect, useState } from "react";

import Navbar from "../partials/topnavbar";
import Footer from "../partials/footer";
import { getUser } from "../../../redux/_actions/userAction";

import cardbodyimg1 from "../../../assets/images/admin/current-progress-img-1.png";
import cardbodyimg2 from "../../../assets/images/admin/current-progress-img-2.png";
import cardbodyimg3 from "../../../assets/images/admin/current-progress-img-3.png";

import UserImage from "../../../assets/images/admin/users/user-6.jpg";
import { Line } from "react-chartjs-2";
import { useDispatch } from "react-redux";

const Home = () => {
  const [chartData, setChartData] = useState({});
  const dispatch = useDispatch();
  // const users = useSelector((state) => state.user.users);

  const chart = () => {
    setChartData({
      labels: ["June", "July", "Augest", "September", "Octuber", "November"],
      datasets: [
        {
          data: [32, 45, 22, 17, 48, 62],
          backgroundColor: ["rgba(211, 211,250,0.3)"],
          borderColor: ["#a3a0fb"],
          borderWidth: 2,
          label: ".",
        },
        {
          data: [12, 35, 32, 7, 48, 32],
          backgroundColor: ["rgba(191, 233, 255, 0.4)"],
          borderColor: ["rgb(106, 198, 255)"],
          borderWidth: 2,
          label: ".",
        },
        {
          data: [80, 80, 80, 80, 80, 80],
          backgroundColor: ["white"],
          borderWidth: 0,
          label: ".",
        },
      ],
    });
  };
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="Dashobard">
      <div id="wrapper">
        <Navbar />
        <div className="content-page" id="content">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box">
                    <h4 className="page-title">Overview</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card-box current-progress">
                    <i
                      className="fa fa-info-circle text-muted float-right"
                      data-toggle="tooltip"
                      data-placement="bottom"
                    />
                    <h4 className="mt-0 font-13">Total Views</h4>
                    <div className="float-left">
                      <h2 className="text-primary my-2 text-left">
                        <span className="count">389</span>K
                      </h2>
                      <p className="text-danger mb-0 font-weight-bolder">
                        <i className="fa fa-arrow-down mr-1" />
                        13.8%
                      </p>
                    </div>
                    <div className="float-right">
                      <img src={cardbodyimg1} draggable="false" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-box current-progress">
                    <i
                      className="fa fa-info-circle text-muted float-right"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      alt=""
                    />
                    <h4 className="mt-0 font-13">Products Sold</h4>
                    <div className="float-left">
                      <h2 className="text-primary my-2 text-left">
                        <span className="count">2453</span>
                      </h2>
                      <p className="text-success mb-0 font-weight-bolder">
                        <i className="fa fa-arrow-up mr-1" alt="" />
                        13.8%
                      </p>
                    </div>
                    <div className="float-right">
                      <img src={cardbodyimg2} draggable="false" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-box current-progress">
                    <i
                      className="fa fa-info-circle text-muted float-right"
                      data-toggle="tooltip"
                      data-placement="bottom"
                    />
                    <h4 className="mt-0 font-13">Total Earnings</h4>
                    <div className="float-left">
                      <h2 className="text-primary my-2 text-left">
                        $<span className="count">39</span>K
                      </h2>
                      <p className="text-danger mb-0 font-weight-bolder">
                        <i className="fa fa-arrow-down mr-1" />
                        13.8%
                      </p>
                    </div>
                    <div className="float-right">
                      <img src={cardbodyimg3} draggable="false" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="float-right d-none d-md-inline-block">
                        <div className="btn-group mb-2">
                          <button
                            type="button"
                            className="btn btn-xs btn-secondary"
                          >
                            Last 6 Months
                          </button>
                        </div>
                      </div>
                      <h4 className="header-title">Statistics </h4>
                      <div className="linechart mt-4">
                        <Line
                          data={chartData}
                          options={{
                            responsive: true,
                          }}
                        />
                      </div>
                      <h4 className="chart-des">
                        <span />
                        Products sold
                        <span />
                        Total views
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="card-box">
                    <h4 className="header-title">Referrer</h4>
                    <div className="table-responsive mt-3">
                      <table className="table mb-0">
                        <thead className="thead-light">
                          <tr>
                            <th>LOCATION</th>
                            <th>VIEWS</th>
                            <th>SALES</th>
                            <th>CONVERSION</th>
                            <th>TOTAL</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>google.com</th>
                            <td>3746</td>
                            <td>752</td>
                            <td>43% </td>
                            <td>$19,291</td>
                          </tr>
                          <tr>
                            <th>facebook.com</th>
                            <td>8126</td>
                            <td>728</td>
                            <td>32% </td>
                            <td>$17,638</td>
                          </tr>
                          <tr>
                            <th>google.com</th>
                            <td>3746</td>
                            <td>752</td>
                            <td>43% </td>
                            <td>$19,291</td>
                          </tr>
                          <tr>
                            <th>facebook.com</th>
                            <td>8126</td>
                            <td>728</td>
                            <td>32% </td>
                            <td>$17,638</td>
                          </tr>
                          <tr>
                            <th>google.com</th>
                            <td>3746</td>
                            <td>752</td>
                            <td>43% </td>
                            <td>$19,291</td>
                          </tr>
                          <tr>
                            <th>facebook.com</th>
                            <td>8126</td>
                            <td>728</td>
                            <td>32% </td>
                            <td>$17,638</td>
                          </tr>
                          <tr>
                            <th>google.com</th>
                            <td>3746</td>
                            <td>752</td>
                            <td>43% </td>
                            <td>$19,291</td>
                          </tr>
                        </tbody>
                      </table>
                      <p>Show More</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title mb-3">Inbox</h4>
                      <div
                        className="inbox-widget"
                        data-simplebar
                        style={{ maxHeight: 420 }}
                      >
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img
                              src={UserImage}
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <p className="inbox-item-author">Stillnotdavid</p>
                          <p className="inbox-item-text">
                            This theme is awesome!
                          </p>
                          <p className="inbox-item-date">
                            <a
                              className="btn btn-sm btn-link text-info font-13"
                              href="#"
                            >
                              Reply
                            </a>
                          </p>
                        </div>
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img
                              src={UserImage}
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <p className="inbox-item-author">Stillnotdavid</p>
                          <p className="inbox-item-text">
                            This theme is awesome!
                          </p>
                          <p className="inbox-item-date">
                            <a className="btn btn-sm btn-link text-info font-13">
                              Reply
                            </a>
                          </p>
                        </div>
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img
                              src={UserImage}
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <p className="inbox-item-author">Stillnotdavid</p>
                          <p className="inbox-item-text">
                            This theme is awesome!
                          </p>
                          <p className="inbox-item-date">
                            <a className="btn btn-sm btn-link text-info font-13">
                              Reply
                            </a>
                          </p>
                        </div>
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img
                              src={UserImage}
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <p className="inbox-item-author">Stillnotdavid</p>
                          <p className="inbox-item-text">
                            This theme is awesome!
                          </p>
                          <p className="inbox-item-date">
                            <a className="btn btn-sm btn-link text-info font-13">
                              Reply
                            </a>
                          </p>
                        </div>
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img
                              src={UserImage}
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <p className="inbox-item-author">Stillnotdavid</p>
                          <p className="inbox-item-text">
                            This theme is awesome!
                          </p>
                          <p className="inbox-item-date">
                            <a className="btn btn-sm btn-link text-info font-13">
                              Reply
                            </a>
                          </p>
                        </div>
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img
                              src={UserImage}
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <p className="inbox-item-author">Stillnotdavid</p>
                          <p className="inbox-item-text">
                            This theme is awesome!
                          </p>
                          <p className="inbox-item-date">
                            <a
                              className="btn btn-sm btn-link text-info font-13"
                              href="#"
                            >
                              Reply
                            </a>
                          </p>
                        </div>
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img
                              src={UserImage}
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <p className="inbox-item-author">Stillnotdavid</p>
                          <p className="inbox-item-text">
                            This theme is awesome!
                          </p>
                          <p className="inbox-item-date">
                            <a
                              className="btn btn-sm btn-link text-info font-13"
                              href="#"
                            >
                              Reply
                            </a>
                          </p>
                        </div>
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img
                              src={UserImage}
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <p className="inbox-item-author">Stillnotdavid</p>
                          <p className="inbox-item-text">
                            This theme is awesome!
                          </p>
                          <p className="inbox-item-date">
                            <a
                              className="btn btn-sm btn-link text-info font-13"
                              href="#"
                            >
                              Reply
                            </a>
                          </p>
                        </div>
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img
                              src={UserImage}
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <p className="inbox-item-author">Stillnotdavid</p>
                          <p className="inbox-item-text">
                            This theme is awesome!
                          </p>
                          <p className="inbox-item-date">
                            <a
                              className="btn btn-sm btn-link text-info font-13"
                              href="#"
                            >
                              Reply
                            </a>
                          </p>
                        </div>
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img
                              src={UserImage}
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <p className="inbox-item-author">Stillnotdavid</p>
                          <p className="inbox-item-text">
                            This theme is awesome!
                          </p>
                          <p className="inbox-item-date">
                            <a
                              className="btn btn-sm btn-link text-info font-13"
                              href="#"
                            >
                              Reply
                            </a>
                          </p>
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
  );
};

export default Home;
