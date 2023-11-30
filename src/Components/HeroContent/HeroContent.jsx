import React from "react";
import "./HeroContent.css";
import hero from "../../assets/hero.svg";

const HeroContent = () => {
  return (
    <div className="herocontent">
      <div className="leftcontent">
        <h1>
          You don’t have to <br />
          <span>Fight them Alone.</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          <br />
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor <br />
          eget, hac massa gravida arcu interdum proin curae.
        </p>
        <div className="container">
          <input type="text" placeholder="Enter your email address" />
          <button type="button">Submit</button>
        </div>
      </div>
      <div className="heroimg">
        <img src={hero} alt="asmazabeen13@gmail.com" />
      </div>
    </div>
  );
};

export default HeroContent;
