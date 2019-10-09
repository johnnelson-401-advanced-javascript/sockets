const fs = require('fs').promises;

const writeFile = data => {
  return fs.writeFile(data, 'utf8');
};
module.exports = writeFile;