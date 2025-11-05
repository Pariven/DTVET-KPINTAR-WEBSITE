const fs = require('fs');
const path = require('path');
const f = path.join(__dirname, '..', '.next', 'trace');
console.log('Trying to remove', f);
try {
  if (fs.existsSync(f)) {
    fs.unlinkSync(f);
    console.log('Deleted trace file');
  } else {
    console.log('trace file does not exist');
  }
} catch (err) {
  console.error('Failed to delete trace file:', err && err.message ? err.message : err);
}
