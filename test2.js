const axios = require('axios');
axios.get("https://www.biquke.com/bq/0/990/").then((result)=>{
    console.log(result.data)
})