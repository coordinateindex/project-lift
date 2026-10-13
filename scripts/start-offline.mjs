// Default startup never inherits provider credentials, authorization, or saved state paths.
import {fileURLToPath} from 'node:url';
for(const key of Object.keys(process.env))if(key.startsWith('HYDRA_')||key==='CODEX_CLI')delete process.env[key];
process.env.BRAIN_MODEL_AUTHORIZED='no';
process.env.BRAIN_DATA_DIR=fileURLToPath(new URL('../.runtime/',import.meta.url));
process.env.PORT=process.env.PORT||'4318';
await import('../app/server.ts');
