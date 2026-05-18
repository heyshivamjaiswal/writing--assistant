import 'dotenv/config';
import app from './aap';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
