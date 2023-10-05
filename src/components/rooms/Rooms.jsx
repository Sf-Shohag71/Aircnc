import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Container from "../shared/Container/Container";
import Card from "./Card";
import Loader from "../shared/Loader";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("./rooms.json")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setLoading(false);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
        {rooms.map((room) => (
          <Card></Card>
        ))}
      </div>
    </Container>
  );
};

export default Rooms;
