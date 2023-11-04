import React from "react";
import Heading from "../Heading/Heading";

const Header = ({singleRoomDetails}) => {
  return (
    <>
      <Heading
        title={singleRoomDetails.title}
        subtitle={singleRoomDetails.location}
      ></Heading>
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
        <img
          className="object-cover w-full"
          src={singleRoomDetails.image}
          alt="rooms photo"
        />
      </div>
    </>
  );
};

export default Header;
