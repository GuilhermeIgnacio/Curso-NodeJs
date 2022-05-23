import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
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
});

router.get("/contato", (req: Request, res: Response) => {
  res.render("pages/contato");
});

router.get("/sobre", (req: Request, res: Response) => {
  res.render("pages/sobre");
});

router.get("/nome", (req: Request, res: Response) => {
  let nome: string = req.query.nome as string;
  res.render("pages/nome", {
    nome,
  });
});

export default router;
