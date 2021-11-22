import React from "react";

const View = (props) => {
  const { err, value, city, temp, weather } = props;

  return (
    <>
      <div className="info">
        <h1 className="info__temp">{temp}</h1>
        <h3 className="info__weather">{weather}</h3>
        <h4 className="info__city">{city}</h4>
      </div>
    </>
  );
};

export default View;
