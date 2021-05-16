import express from 'express';
const app = express()
const port = 3000

import listsRoutes from './routes/lists.js';

app.use('/v1', listsRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})