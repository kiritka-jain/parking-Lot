import express from 'express';
import indexRouter from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', indexRouter);

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
