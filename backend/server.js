import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Configurável via ENV, padrão para Netlify frontend
const FRONTEND_URL = process.env.FRONTEND_URL || 'https://chatbotdplay.netlify.app';

app.use(cors({
  origin: FRONTEND_URL
}));

// Conexão MongoDB - aceita múltiplos nomes de variável de ambiente
const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI || process.env.DATABASE_URL;

async function connectMongo() {
  if (!mongoUri) {
    console.error('❌ Erro MongoDB: variável de ambiente MONGO_URI (ou MONGODB_URI/DATABASE_URL) não definida.');
    console.error('Defina a variável e faça deploy novamente.');
    return;
  }
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB conectado');
  } catch (err) {
    console.error('❌ Erro MongoDB:', err);
  }
}

connectMongo();

// Exemplo de rota
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok' });
});

// Porta
const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

export default app;
