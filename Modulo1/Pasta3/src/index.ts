import express, { Request, Response } from "express";
import mainRoutes from "./routes/router";
import painelRoutes from "./routes/painel";
import path from "path";

const app = express();
const port = 3000;

app.use(mainRoutes);
app.use("/painel", painelRoutes);

app.use(express.static(path.join(__dirname, "../public")));

app.use((req: Request, res: Response) => {
  res.status(404).send("Página Não Encontrada");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
