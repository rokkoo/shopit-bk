import { Request, Response } from "express";
import { Deta } from "deta";

const deta = Deta();
const files = deta.Drive("icons");

export const ShopListController = async (req: Request, res: Response) => {
  const list = await files.get("hello.txt");
  console.log(list);

  res.status(200).json({ hola: "it works2", list });
};
