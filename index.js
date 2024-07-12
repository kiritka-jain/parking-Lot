import express from 'express';
import bodyParser from 'body-parser';
import indexRouter from './routes/index.js';
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');

// Set the views directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());

app.use('/', indexRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
