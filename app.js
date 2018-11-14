const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const path = require("path");
const template = require('art-template')
const app = express();

app.get("/book", (req, res) => {
    axios.get("https://www.biquke.com/bq/0/990/").then((result) => {
        let $ = cheerio.load(result.data)
        let book = [];
        $("#list dd a").each(function (i, e) {
            let obj ={
                title:$(e).text(),
                herf:$(e).attr('href')
            }
            book.push(obj);
        })
        let temstr = template(path.join(__dirname,'views/index.html'),{book:book})
        res.send(temstr);

    })
})
app.get('/:page',(req,res)=>{
    // res.send(req.params.page)
    let page = req.params.page
    axios.get("https://www.biquke.com/bq/0/990/"+page).then((result) => {
        let bookcontent = {}
        let $ = cheerio.load(result.data)
        bookcontent.title = $(".bookname h1").text()
        bookcontent.content = $("#content").text()
        // res.send(bookcontent)
        let tempstr = template(path.join(__dirname,'views/content.html'),bookcontent)
        res.send(tempstr);
    })

})




app.listen(3000,()=>{
    console.log("running")
})