
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get('/healthz', (_req, res) => res.json({ ok: true, name: 'ignytion-api', ts: new Date().toISOString() }));
app.get('/', (_req, res) => res.send('IGNYTION API — Coming Soon'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`IGNYTION API running on :${PORT}`));
