import React from "react";
import { useSelector } from "react-redux";

const Alerts = () => {
  const alertsList = useSelector((state) => state.alert);

  return (
    <>
      {alertsList.message != "" && (
        <div
          key={alertsList.id}
          className={`alert alert-${alertsList.alertType}`}
        >
          <i className="fas fa-info-circle" /> {alertsList.message}{" "}
        </div>
      )}{" "}
    </>
    // alertsList.length > 0 &&
    // alertsList.map((alert) => (
    //   <>
    //     {console.log("alert", alert)}

    //     <div key={alert.id} className={`alert alert-${alert.alertType}`}>
    //       <i className="fas fa-info-circle" /> {alert.message}
    //     </div>
    //   </>
    // ))
  );
};

export default Alerts;
