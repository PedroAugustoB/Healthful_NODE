import express from "express";
import cors from "cors";
import { routes } from "./routes.js";
const port = process.env.PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended : true,
}),
);

app.use(routes);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})