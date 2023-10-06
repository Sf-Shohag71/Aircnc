import React from "react";
import Calender from "../../components/rooms/Calender";
import Button from "../Button/Button";

const RoomReservation = () => {
  return (
    <div className="bg-white border-[1px] rounded-xl border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold"> $ 200</div>
        <div className="text-neutral-600">night</div>
      </div>
      <hr />
      <Calender></Calender>
      <hr />
      <div className="p-4">
        <Button label="Reserve"></Button>
      </div>
      <hr />
      <div className="flex flex-row items-center justify-between p-4 font-semibold text-lg">
        <div>Total</div>
        <div>$ 300</div>
      </div>
    </div>
  );
};

export default RoomReservation;
