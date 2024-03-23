import { render, screen } from "@testing-library/react";
import Post from "..";

describe("Testes para o componente Post", () => {
  test("Deve renderizar corretamente", () => {
    render(
      <Post
        alt="Imagem"
        imageUrl="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg"
      >
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    );

    expect(screen.getByAltText("Imagem")).toBeInTheDocument();
    expect(
      screen.getByText("Olha só que legal minha miniatura do Batmóvel.")
    ).toBeInTheDocument();
  });
  
});
