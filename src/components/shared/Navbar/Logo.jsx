import React from "react";
import siteIcon from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to='/'>
        <img
          className="hidden md:block"
          src={siteIcon}
          height="100"
          width="100"
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
