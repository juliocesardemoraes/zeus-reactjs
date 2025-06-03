import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [resource, setResource] = useState("posts");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    (async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setData(response.data);
      setLoading(false);
    })();
  }, [resource]);

  return (
    <>
      <button
        onClick={() => {
          setResource("users");
        }}
      >
        users
      </button>
      <button
        onClick={() => {
          setResource("posts");
        }}
      >
        posts
      </button>
      <button
        onClick={() => {
          setResource("comments");
        }}
      >
        comments
      </button>

      {loading && <>Carregando</>}

      <ul>
        {data.map((item, index) => {
          return <li key={index}>{JSON.stringify(item)}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
