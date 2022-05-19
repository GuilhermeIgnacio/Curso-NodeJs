import express from "express";
import mainRoutes from "./routes/router";
import painelRoutes from "./routes/painel";

const app = express();
const port = 3000;

app.use(mainRoutes);
app.use("/painel", painelRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
