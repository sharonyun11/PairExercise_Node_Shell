const exportsFromPWD = require('./pwd');
exportsFromPWD();

const exportsFromLS = require('./ls');
exportsFromLS();

process.stdout.write('prompt > ');
