import React from "react";
import { render, screen } from "@testing-library/react";
import Student from "./Student";
import { describe, it, expect } from "vitest";

describe("Exercício de Props no Student", () => {
  it("renderiza com todos os props presentes", () => {
    render(
      <Student name="Ana" age={21} email="ana@email.com" course="Biologia" />
    );
    expect(screen.getByText("Ana")).toBeInTheDocument();
    expect(screen.getByText("Idade: 21")).toBeInTheDocument();
    expect(screen.getByText("ana@email.com")).toBeInTheDocument();
    expect(screen.getByText("Biologia")).toBeInTheDocument();
  });

  it("Usa um nome padrão caso não tenha nenhum disponível", () => {
    render(<Student age={19} email="aluno@email.com" course="Química" />);
    expect(screen.getByText("Aluno")).toBeInTheDocument();
  });
});
