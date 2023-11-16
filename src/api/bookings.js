// Add a booking to database
export const addBooking = async (bookingData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
  const data = await response.json();
  return data;
};

// Update room status
export const updateStatus = async (id, status) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/rooms/status/${id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    }
  );
  const data = await response.json();
  return data;
};

// Get all booking for a user by email
export const getBookings = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/bookings?email=${email}`
  );
  const bookings = await response.json();
  return bookings;
};

// Delete bookings
export const deleteBookings = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/bookings/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  
  const data = await response.json();
  return data;
};
