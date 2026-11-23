import { existsSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

/**
 * Where uploaded files (product images) live on disk.
 *
 * Every deployment creates a fresh app folder, so files stored inside it would
 * disappear on the next deploy. Order of preference:
 *   1. UPLOADS_DIR environment variable, if set;
 *   2. ~/persistent/api-uploads, if that folder exists (the production server);
 *   3. ./uploads next to the app (local development).
 */
export function uploadsDir(): string {
  if (process.env.UPLOADS_DIR) return process.env.UPLOADS_DIR;
  const persistent = join(homedir(), 'persistent', 'api-uploads');
  if (existsSync(persistent)) return persistent;
  return join(process.cwd(), 'uploads');
}
