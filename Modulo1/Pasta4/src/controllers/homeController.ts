import { Request, Response } from "express";
import { Product } from "../models/Product";

export const home = (req: Request, res: Response) => {
  let list = Product.getAll();

  let user = {
    nome: "Guilherme",
    sobrenome: "Ignácio",
    idade: 19,
    showWelcome: false,
    products: list,
    // frases: ["Frase 1", "Frase 2", "Frase 3"],
  };

  if (user.idade >= 18) {
    user.showWelcome = true;
  }

  res.render("pages/home", {
    user,
  });
};
