import React from "react";
import { studentsMock } from "./studentsMock";

export default function StudentList() {
  return (
    <ul>
      {studentsMock.map((user) => {
        return <li key={user.id}>{user.nome}</li>;
      })}
    </ul>
  );
}
