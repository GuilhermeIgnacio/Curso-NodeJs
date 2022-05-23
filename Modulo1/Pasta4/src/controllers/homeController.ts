import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  let user = {
    nome: "Guilherme",
    sobrenome: "Ignácio",
    idade: 19,
    showWelcome: false,
    products: [
      { title: "Produto X", price: 10 },
      { title: "Produto Y", price: 15 },
      { title: "Produto Z", price: 20 },
    ],
    // frases: ["Frase 1", "Frase 2", "Frase 3"],
  };

  if (user.idade >= 18) {
    user.showWelcome = true;
  }

  res.render("pages/home", {
    user,
  });
};
