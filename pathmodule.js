const path = require('node:path');
const a=path.win32.basename('C:\\temp\\index.html');
const b=path.win32.dirname('C:\\temp\\index.html');
// Returns: 'myfile.html'
console.log(a);
console.log(b);
const c=path.extname(__filename);
console.log(__filename,c);
console.log(path.delimiter);
