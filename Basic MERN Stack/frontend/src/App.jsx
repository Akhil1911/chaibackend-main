import { useEffect, useState } from 'react'
import axios from 'axios';
function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[])

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Frontend Of Basic MERN App</h1>
      <h2>JOKES: {jokes.length}</h2>
        {jokes?.map((joke, ind) => {
          return <div key={joke.id} style={{display:"flex" , justifyContent:"space-around"}}>
              <h2> {joke.id} </h2>
              <p>{joke.title}</p>
              <p>{ joke.content}</p>
          </div>;
        })}
    </div>
  );
}

export default App
