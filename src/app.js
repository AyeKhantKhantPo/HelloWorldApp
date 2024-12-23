import express from 'express';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.routes.js';

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 4000; // Fallback to 4000 if PORT is not set

app.use(express.json());
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
