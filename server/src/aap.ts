import express from 'express';
import cors from 'cors';
import authRoute from './routes/auth.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Quillr api running');
});

app.use('/auth', authRoute);

export default app;
