import { fireEvent, render, screen } from "@testing-library/react";
import Post from "..";

describe("Testes para o componente PostComments", () => {
  test("Deve renderizar corretamente", () => {
    render(<Post />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve adicionar um comentári corretamente", () => {
    render(<Post />);
    fireEvent.change(screen.getByTestId("input-comentario"), {
      target: {
        value: "fazer compras",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentar"));
    fireEvent.change(screen.getByTestId("input-comentario"), {
      target: {
        value: "estudar react",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentar"));
    expect(screen.getByText("fazer compras")).toBeInTheDocument();
    expect(screen.getByText("estudar react")).toBeInTheDocument();
  });
});
