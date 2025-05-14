import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import authRouter from './routes/auth';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// All /auth routes
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
