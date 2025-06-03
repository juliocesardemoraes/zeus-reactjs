import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function FetchData() {
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

      {loading ? (
        <h1>Carregando</h1>
      ) : (
        <ul>
          {data.map((item, index) => {
            return <li key={index}>{JSON.stringify(item)}</li>;
          })}
        </ul>
      )}
    </>
  );
}
