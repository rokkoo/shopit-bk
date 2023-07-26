import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import ShopListIconController from "./shopListController";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server started on PORT:${port}`);
});

app.get("/icons", ShopListIconController.getIcons);
app.post("/createList", ShopListIconController.createList);
app.get("/getList", ShopListIconController.getLists);

export default app;
