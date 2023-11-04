const RoomInfo = ({ singleRoomDetails }) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
              text-xl 
              font-semibold 
              flex 
              flex-row 
              items-center
              gap-2
            "
        >
          <div>Hosted by {singleRoomDetails.host.name}</div>

          <img
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src={singleRoomDetails.host.image}
          />
        </div>
        <div
          className="
              flex 
              flex-row 
              items-center 
              gap-4 
              text-neutral-500
            "
        >
          <div>{singleRoomDetails.total_guest} guests</div>
          <div>{singleRoomDetails.bedrooms} rooms</div>
          <div>{singleRoomDetails.bathrooms} bathrooms</div>
        </div>
      </div>

      <hr />
      <div
        className="
        text-lg text-neutral-500"
      >
        {singleRoomDetails.description}
      </div>
      <hr />
    </div>
  );
};

export default RoomInfo;
