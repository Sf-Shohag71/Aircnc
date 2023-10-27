// Save users to database
export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
  };
  fetch(`http://localhost:5000/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "applications/json",
    },
    body: JSON.stringify(currentUser),
  })
  .then(res=>res.json())
  .then(data=>console.log(data))
};