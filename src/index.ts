import express, { Express, Request, Response } from "express";
import cors from 'cors';

const PORT = 3000;
const app: Express = express();
const corsOptions = {
  origin: 'https://www.section.io'
}
app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response) => {
  res.json({
      message: 'Hello World'
  });
});

app.get('/:name', (req: Request, res: Response) => {
  let name = req.params.name;
  res.json({
      message: `Hello ${name}`
  });
});;
