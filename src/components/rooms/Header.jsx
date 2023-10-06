import React from "react";
import Heading from "../Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title="Room in Greater London, United Kingdom"
        subtitle="Mortlake"
      ></Heading>
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
        <img
          className="object-cover w-full"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg?im_w=1200"
          alt="rooms photo"
        />
      </div>
    </>
  );
};

export default Header;
