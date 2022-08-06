const path = require('path');
const util = require('util');
// const { log } = require('util');
const v8 = require('v8');
// const { getHeapStatistics } = require('util');

const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
console.log('dirUploads: ', dirUploads);

util.log(path.basename(__filename));
util.log(' ^ The name of the current file.');
util.log(v8.getHeapSpaceStatistics());