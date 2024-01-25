//directs the querys down relevent url routes
import express from "express";
import cors from "cors";
import 'dotenv/config'

import { getAll, addMarker } from "./controllers.js";

export const app = express()

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT ?? 7001;
const HOST = process.env.HOST ?? '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

app.get("/", getAll)


app.post("/", addMarker)