import React, { useContext, useState } from "react";
import AddRoomForm from "../../components/Forms/AddRoomForm.jsx";
import { imageUpload } from "../../api/imageUpload.js";
import { AuthContext } from "../../providers/AuthProvider.jsx";
import { addRoom } from "../../api/rooms.js";

const AddRoom = () => {
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const { user } = useContext(AuthContext);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const location = event.target.location.value;
    const category = event.target.category.value;
    const title = event.target.title.value;
    const price = event.target.price.value;
    const total_guest = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const from = dates.startDate;
    const to = dates.endDate;
    const image = event.target.image.files[0];

    // Upload image
    imageUpload(image)
      .then((data) => {
        const roomData = {
          image: data.data.display_url,
          location,
          title,
          category,
          price: parseFloat(price),
          total_guest,
          bedrooms,
          bathrooms,
          description,
          from,
          to,
          host: {
            name: user?.displayName,
            photo: user?.photoURL,
            email: user?.email,
          },
        };
        //send data to server
        addRoom(roomData);
        console.log(roomData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };
  const handleDates = (ranges) => {
    setDates(ranges.selection);
  };

  return (
    <>
      <AddRoomForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
        dates={dates}
        handleDates={handleDates}
      ></AddRoomForm>
    </>
  );
};

export default AddRoom;
