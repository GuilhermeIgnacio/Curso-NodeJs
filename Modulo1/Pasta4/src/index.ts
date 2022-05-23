import express, { Request, Response } from "express";
import path from "path";
import mustache from "mustache-express";

import mainRoutes from "./routes/router";
import painelRoutes from "./routes/painel";

const app = express();
const port = 3000;

app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.engine("mustache", mustache());

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: true }));

app.use(mainRoutes);
app.use("/painel", painelRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).send("Página Não Encontrada");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
