import { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users/1";

/** 
  Sample Response:
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/

function Nine() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(data => setUserData(data))
      .catch(err => console.log(err))
    }
    fetchData();
  }, []);

  // No need to touch code below
  return (
    <div>
      <h1>Challenge: Given the url above, make this app fetch the data and display them in the browser</h1>
      <h2>User Data</h2>
      <p>
        <strong>Name: </strong>
        {userData.name || "(Need to populate name here)"}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || "(Need to populate website here)"}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || "(Need to populate email here)"}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || "(Need to populate phone here)"}
      </p>
    </div>
  );
}

export default Nine;