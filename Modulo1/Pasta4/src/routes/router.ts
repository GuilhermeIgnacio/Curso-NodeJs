import { Router } from "express";

import { home } from "../controllers/homeController";
import * as InfoController from "../controllers/infoController";
import * as UserController from "../controllers/userController";

const router = Router();

router.get("/", home);
router.get("/contato", InfoController.contato);
router.get("/sobre", InfoController.sobre);
router.get("/nome", UserController.nome);
router.get("/idade", UserController.idadeForm);
router.post("/idade-resultado", UserController.idadeAction);

export default router;
