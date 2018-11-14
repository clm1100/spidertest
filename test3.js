const cheerio = require('cheerio');
const axios = require('axios');
axios.get("https://www.biquke.com/bq/0/990/").then((result)=>{
    let $ = cheerio.load(result.data)
    $("#list dd a").each(function(i,e){
        console.log($(e).text())
    })
})