import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Container from "../shared/Container/Container";
import Card from "./Card";
import Loader from "../shared/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    setLoading(true);
    fetch("./rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filteredData = data.filter(
            (room) => room.category === category
          );
          setRooms(filteredData);
        } else {
          setRooms(data);
        }
        setLoading(false);
      })
      .catch((err) => toast.error(err.message));
  }, [category]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} room={room}></Card>
          ))}
        </div>
      ) : (
        <div className="pt-12">
          <Heading
            title="No rooms available in this category"
            subtitle="Please select other category"
            center={true}
          ></Heading>
        </div>
      )}
    </Container>
  );
};

export default Rooms;
