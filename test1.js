const cheerio = require('cheerio');
const $ = cheerio.load('<ul id="fruits">22222</ul>');

console.log($("#fruits").text())
