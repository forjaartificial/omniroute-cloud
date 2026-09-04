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

const binPath = path.join(__dirname, 'node_modules', 'omniroute', 'bin', 'omniroute.mjs');
const child = spawn(process.execPath, ['--max-old-space-size=384', binPath], {
  stdio: 'inherit',
  env: {
    ...process.env,
    PORT: port,
    OMNIROUTE_PORT: port,
    OMNIROUTE_SERVER_HOST: host,
    NODE_OPTIONS: '--max-old-space-size=384'
  }
});

child.on('exit', (code) => {
  console.log(`[OmniRoute Cloud] Exited with code ${code}`);
  process.exit(code || 0);
});

