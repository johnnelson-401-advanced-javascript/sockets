const readFile = require('../../read-file');
const writeFile = require('../../write-file');

describe('tests function of read/write', () => {
  it('should read a file', () => {
    readFile('text.txt')
      .then((data) => {
        expect(data).toBe('capitalize me');
      });
  });
  it('should write a file ', () => {
    return writeFile('test', 'utf8')
      .then(() =>{
        return readFile('./write.txt')
          .then((body) =>{
            expect(body).toBe('test');
          });
      });
  });
});