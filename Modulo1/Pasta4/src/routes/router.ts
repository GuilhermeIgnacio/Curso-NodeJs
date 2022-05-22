import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  let user = {
    nome: "Guilherme",
    sobrenome: "Ignácio",
    idade: 19,
  };
  res.render("home", {
    user,
  });
});

router.get("/noticia/:slug", (req: Request, res: Response) => {
  let slug: string = req.params.slug;
  res.send(`Notícia: ${slug}`);
});

router.get("/voo/:origem-:destino", (req: Request, res: Response) => {
  let { origem, destino } = req.params;
  res.send(
    `Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`
  );
});

export default router;
