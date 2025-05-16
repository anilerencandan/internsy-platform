import { Router, Request, Response } from 'express';
import { supabase } from '../supabaseClient';

const authRouter = Router();

interface AuthBody {
  email: string;
  password: string;
}

// POST /auth/register
authRouter.post('/register', async (req: Request<{}, {}, AuthBody>, res: Response):Promise<any> => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: 'http://localhost:3000/auth/callback'
    }
  });

  if (error) return res.status(400).json({ error: error.message });
  return res.status(200).json({ user: data.user });
});

// POST /auth/login
authRouter.post('/login', async (req: Request<{}, {}, AuthBody>, res: Response):Promise<any> => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return res.status(400).json({ error: error.message });
  return res.status(200).json({ session: data.session, user: data.user });
});

export default authRouter;
