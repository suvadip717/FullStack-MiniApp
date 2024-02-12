import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("/api/people")
      .then((res) => {
        setPeople(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Welcome People</h1>

      {people.map(({id,firstName,lastName,gender,age,number}) => (
        <div key={id}>
          <h2>{firstName} {lastName}</h2>
          <h3>Gender: {gender}</h3>
          <h4>Age: {age}</h4>
          <p>Number: {number}</p>
        </div>
      ))}
    </>
  );
}

export default App;
