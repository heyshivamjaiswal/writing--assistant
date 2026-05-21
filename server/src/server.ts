import 'dotenv/config';
import app from './aap';
import authRoutes from './routes/auth.routes';
import documentRoutes from './routes/document.routes';
import generateRoutes from './routes/generate.routes';

const PORT = process.env.PORT || 5000;

app.use('auth', authRoutes);
app.use('/documents', documentRoutes);
app.use('/generate', generateRoutes);

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
