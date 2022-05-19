import express, { Request, Response } from "express";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/secreto", (req: Request, res: Response) => {
  res.send("Você acessou a página secreta");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
