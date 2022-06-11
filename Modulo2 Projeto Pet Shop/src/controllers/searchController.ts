import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { pet } from "../models/pet";

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;

  if (!query) {
    res.redirect("/");
    return;
  }

  let list = pet.getFromName(query);

  res.render("pages/page", {
    menu: createMenuObject(""),
    query,
    list,
  });
};
