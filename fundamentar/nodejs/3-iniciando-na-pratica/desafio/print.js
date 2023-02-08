const getFlagValue = require('./flag');

console.log(`${getFlagValue('--greeting')}, ${getFlagValue('--name')}`);