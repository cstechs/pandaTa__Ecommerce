import React from "react";
import { useSelector } from "react-redux";

const Alerts = () => {
  const alertsList = useSelector((state) => state.alert);

  return (
    <>
      {alertsList.message !== "" && (
        <div
          key={alertsList.id}
          className={`alert alert-${alertsList.alertType}`}
        >
          <i className="fas fa-info-circle" /> {alertsList.message}
        </div>
      )}
    </>
  );
};

export default Alerts;
