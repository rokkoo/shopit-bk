import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { ShopListController } from "./shopListController";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`Server started on PORT:${port}`);
});

app.get("/test", ShopListController);

export default app;
