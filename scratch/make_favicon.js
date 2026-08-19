import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pngBuffer = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA' +
  'B3RJTUUH5wgFDxk1kF90vAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUH' +
  'AAAAFklEQVQ4y2NkYGD4z0ABYBw1gGEUAABXnQIRd7YTYwAAAABJRU5ErkJggg==',
  'base64'
);

const icoHeader = Buffer.from([
  0x00, 0x00,
  0x01, 0x00,
  0x01, 0x00,
  0x10,
  0x10,
  0x00,
  0x00,
  0x01, 0x00,
  0x20, 0x00,
  pngBuffer.length & 0xFF,
  (pngBuffer.length >> 8) & 0xFF,
  (pngBuffer.length >> 16) & 0xFF,
  (pngBuffer.length >> 24) & 0xFF,
  0x16, 0x00, 0x00, 0x00
]);

const finalIcoBuffer = Buffer.concat([icoHeader, pngBuffer]);
const outputPath = path.join(__dirname, '..', 'public', 'favicon.ico');
fs.writeFileSync(outputPath, finalIcoBuffer);
console.log('Successfully created public/favicon.ico (size:', finalIcoBuffer.length, 'bytes)');
