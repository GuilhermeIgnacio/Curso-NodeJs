import express, { Request, Response } from "express";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/noticia/:slug", (req: Request, res: Response) => {
  let slug: string = req.params.slug;
  res.send(`Notícia: ${slug}`);
});

app.get("/voo/:origem-:destino", (req: Request, res: Response) => {
  let { origem, destino } = req.params;
  res.send(
    `Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`
  );
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
