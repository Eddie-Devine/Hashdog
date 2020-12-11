const crypto = require('crypto');
var testHash = crypto.createHash('sha256').update('yeet').digest('hex');
console.log(testHash);