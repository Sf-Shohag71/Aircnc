import React, { useContext, useState } from "react";
import Calender from "../../components/rooms/Calender";
import Button from "../Button/Button";
import { formatDistance } from "date-fns";
import { AuthContext } from "../../providers/AuthProvider";
import BookingModal from "../Modal/BookingModal";

const RoomReservation = ({ singleRoomDetails }) => {
  const { user, role } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  // Price Calculation
  const totalPrice =
    parseFloat(
      formatDistance(
        new Date(singleRoomDetails.to),
        new Date(singleRoomDetails.from)
      ).split(" ")[0]
    ) * singleRoomDetails.price;

  const [value, setValue] = useState({
    startDate: new Date(singleRoomDetails?.from),
    endDate: new Date(singleRoomDetails?.to),
    key: "selection",
  });

  // Booking State
  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
    },
    host: singleRoomDetails.host.email,
    location: singleRoomDetails.location,
    price: totalPrice,
    to: value.endDate,
    from: value.startDate,
    title: singleRoomDetails.title,
    guests: singleRoomDetails.guests,
  });

  const handleSelect = (ranges) => {
    setValue(...value);
  };
  const handleModal = () => {
    console.log(bookingInfo);
  };

  return (
    <div className="bg-white border-[1px] rounded-xl border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">
          {" "}
          $ {singleRoomDetails.price}
        </div>
        <div className="text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender value={value} handleSelect={handleSelect}></Calender>
      </div>
      <hr />
      <div className="p-4">
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          disabled={singleRoomDetails.host.email === user.email}
          label="Reserve"
        ></Button>
      </div>
      <hr />
      <div className="flex flex-row items-center justify-between p-4 font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
      <BookingModal
        isOpen={isOpen}
        bookingInfo={bookingInfo}
        handleModal={handleModal}
        closeModal={closeModal}
      ></BookingModal>
    </div>
  );
};

export default RoomReservation;
