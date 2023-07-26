import { Request, Response } from "express";
import { Deta } from "deta";

const deta = Deta();
const db = deta.Base("shopit_icons_db");
const LIST_DB = deta.Base("shopit_list_db");

export const getIcons = async (req: Request, res: Response) => {
  const list = await db.fetch();
  console.log(list);

  res.status(200).json({
    list,
  });
};

const createList = async (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    res.status(402).json({ error: "missing title field" });
    return;
  }

  const list = await LIST_DB.put({
    title,
  });

  res.status(200).json({
    list,
  });
};

const getLists = async (req: Request, res: Response) => {
  const lists = await LIST_DB.fetch();

  res.status(200).json({
    lists,
  });
};

const ShopListIconController = {
  getIcons,
  createList,
  getLists,
};

export default ShopListIconController;
