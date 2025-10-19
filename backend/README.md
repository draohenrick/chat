# Dplay Backend

## Instalação

```
npm install
```

## Rodar localmente

```
node server.js
```

O backend roda na porta `3001` por padrão.

## Deploy

Suba no Render. Configure variáveis de ambiente:
- PORT=3001
- JWT_SECRET=dplay_super_secret_key_12345

## Configuração de variáveis de ambiente

Crie um arquivo `.env` (ou configure no Render) com as variáveis:

```
MONGO_URI=<sua string mongodb>
FRONTEND_URL=https://chatbotdplay.netlify.app
PORT=10000
```

## Observações para deploy no Render

- Adicione `MONGO_URI` nas Environment Variables do serviço.
- Se usar sintaxe ESM, já adicionamos `"type": "module"` em `package.json`.
