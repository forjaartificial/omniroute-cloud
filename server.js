import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || '20128';
const host = process.env.OMNIROUTE_SERVER_HOST || '0.0.0.0';

process.env.PORT = port;
process.env.OMNIROUTE_PORT = port;
process.env.OMNIROUTE_SERVER_HOST = host;

console.log(`[OmniRoute Cloud] Starting server on ${host}:${port}...`);

const distDir = path.join(__dirname, 'node_modules', 'omniroute', 'dist');
const serverWs = path.join(distDir, 'server-ws.mjs');

const child = spawn(
  process.execPath,
  ['--max-old-space-size=384', serverWs],
  {
    cwd: distDir,
    stdio: 'inherit',
    env: {
      ...process.env,
      PORT: String(port),
      DASHBOARD_PORT: String(port),
      API_PORT: String(port),
      OMNIROUTE_PORT: String(port),
      HOSTNAME: host,
      OMNIROUTE_SERVER_HOST: host,
      NODE_ENV: 'production',
      NODE_OPTIONS: '--max-old-space-size=384'
    }
  }
);

child.on('exit', (code) => {
  console.log(`[OmniRoute Cloud] Exited with code ${code}`);
  process.exit(code || 0);
});

