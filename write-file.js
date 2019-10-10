const fs = require('fs').promises;

const writeFile = data => {
  return fs.writeFile('./write.txt', data, 'utf8');
};
module.exports = writeFile;