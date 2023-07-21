import { Request, Response } from "express";

export const ShopListController = (req: Request, res: Response) => {
  res.status(200).json({ hola: "it works" });
};
