# OmniRoute Cloud 24/7

Instancia permanente de **OmniRoute** desplegada en Render para proveer endpoints OpenAI-Compatible (`/v1/chat/completions`) accesibles globalmente las 24 horas para aplicaciones como ProCV Forge y SEO Architect Pro.

## Endpoints
- **Web Dashboard:** `https://<tu-subdominio>.onrender.com/`
- **OpenAI API Gateway:** `https://<tu-subdominio>.onrender.com/v1`

## Configuración en Render
- **Runtime:** Node
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Environment Variables:**
  - `PORT`: 10000 (o el asignado por Render)
  - `OMNIROUTE_SERVER_HOST`: `0.0.0.0`
