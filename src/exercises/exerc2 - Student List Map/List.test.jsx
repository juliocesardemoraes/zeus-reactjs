import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import StudentList from "./Studentlist";
import { studentsMock } from "./studentsMock";

describe("Exercício de Lista no StudentList", () => {
  it("Renderiza uma lista de elementos com o nome dos estudantes li dentro de um ul", () => {
    render(<StudentList />);

    studentsMock.forEach((user) => {
      expect(screen.getByText(user.nome)).toBeInTheDocument();
    });
  });
});
