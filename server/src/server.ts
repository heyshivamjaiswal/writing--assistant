import dotenv from 'dotenv';
import app from './aap';

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
