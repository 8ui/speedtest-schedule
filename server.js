const fs = require('fs');
const path = require('path');
const speedTest = require('speedtest-net');
const nodeSchedule = require('node-schedule');

const PATH = path.join('public', 'data.json');

const interval = 5;

/**
 * Starts scheduled speed test
 */
const runScheduler = (interval) => {
  runSpeedTest();
  console.log('Scheduler starting. First test will run in ' + interval + ' minutes.');
  console.log('*/'+interval+' * * * *');
  nodeSchedule.scheduleJob('*/'+interval+' * * * *', runSpeedTest);
};

/**
 * Runs the speed test
 */
const runSpeedTest = async() => {
  try {
    const test = await speedTest();
    writeData(test);
  } catch (e) {
    console.log(e)
  }
};

/**
 * Writes and returns the speed test results
 * @param data
 */
const writeData = (data) => {
  fs.readFile(PATH, 'utf8', (err, fileData) => {
    if (err || !fileData) {
      fileData = "[]";
    }

    const r = JSON.parse(fileData);
    r.push(data)

    fs.writeFile(PATH, JSON.stringify(r), (err) => {
      if (err) throw err;
    });
  });

  console.log("\n");
  console.log('Date: ' + data.timestamp);
  console.log('Ping: ' + data.ping.latency);
  console.log('Download Speed: ' + data.download.bytes);
  console.log('Upload Speed: ' + data.upload.bytes);
  console.log("\n");
};

/**
 * Runs the script
 */
runScheduler(interval);
