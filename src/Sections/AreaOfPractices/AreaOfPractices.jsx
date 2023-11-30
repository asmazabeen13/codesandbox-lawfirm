import React from "react";
import "./AreaOfPractices.css";
import business from "../../assets/businesslaw.svg";
import partnership from "../../assets/partnership.svg";
import realestate from "../../assets/realestate.svg";
import business2 from "../../assets/businesslaw2.svg";
import landlord from "../../assets/landlord.svg";
import elderabuse from "../../assets/elderabuse.svg";

const AreaOfPractices = () => {
  return (
    <div className="area">
      <h1>Area of Practices</h1>
      <div className="imgcontainer">
        <div className="grid">
          <div style={{ position: "relative" }}>
            <img className="bimg" src={business} alt="asmazabeen13@gmail.com" />
            <p className="under">BUSINESS LAW</p>
          </div>
          <div style={{ position: "relative" }}>
            <img
              className="smimg"
              src={partnership}
              alt="asmazabeen13@gmail.com"
            />
            <p className="under">PARTNERSHIP LAW</p>
          </div>
        </div>
        <div className="grid">
          <div style={{ position: "relative" }}>
            <img
              className="smimg"
              src={realestate}
              alt="asmazabeen13@gmail.com"
            />
            <p className="under">REAL ESTATE LAW</p>
          </div>
          <div style={{ position: "relative" }}>
            <img
              className="bimg"
              src={business2}
              alt="asmazabeen13@gmail.com"
            />
            <p className="under">BUSINESS LAW</p>
          </div>
        </div>
        <div className="grid">
          <div style={{ position: "relative" }}>
            <img className="bimg" src={landlord} alt="asmazabeen13@gmail.com" />
            <p className="under">LANDLORD DISPUTES</p>
          </div>
          <div style={{ position: "relative" }}>
            <img
              className="smimg"
              src={elderabuse}
              alt="asmazabeen13@gmail.com"
            />
            <p className="under">ELDER ABUSE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaOfPractices;
