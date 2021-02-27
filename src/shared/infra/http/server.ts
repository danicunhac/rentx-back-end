import 'dotenv/config';

/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';

import '../typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Welcome Renter' });
});

app.listen(process.env.PORT, () => {
  console.log(`🧪 Server running on port ${process.env.PORT}`);
});
