import React from "react";

export default function Student({ name, age, email, course }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>Idade: {age}</h2>
      <p>{email}</p>
      <p>{course}</p>
    </div>
  );
}
