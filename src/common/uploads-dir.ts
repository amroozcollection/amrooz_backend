import { join } from 'path';

/**
 * Where uploaded files (product images) live on disk.
 *
 * In production set UPLOADS_DIR to a folder OUTSIDE the deployed app folder
 * (e.g. /home/<user>/persistent/api-uploads). Every deployment creates a fresh
 * app folder, so files stored inside it would disappear on the next deploy.
 * Locally it falls back to ./uploads.
 */
export function uploadsDir(): string {
  return process.env.UPLOADS_DIR || join(process.cwd(), 'uploads');
}
