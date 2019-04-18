'use strict'

const v8 = require('v8');

let totalSizeGb = ((v8.getHeapStatistics().total_available_size) / 1024 / 1024 / 1024).toFixed(2);

console.log(totalSizeGb);