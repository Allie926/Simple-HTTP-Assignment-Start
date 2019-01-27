const fs = require('fs'); // pull in the file system module

const picture = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getPicture = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(picture);
  response.end();
};

module.exports.getPicture = getPicture;
