const express = require('express');
const app = express();

app.use(express.static('./assets'))
app.use('./assets',express.static(__dirname + '/style.css'))
app.use('/',(req,res,next)=>{
    console.log('Someone made a request for' + req.url);
    res.cookie('cookiename','cookievalue')
    next()
})

app.get('/',(req,res)=>{
  const fs = require('fs');
  let HTML = fs.readFileSync(`./assets/texxt.html`)
  const html = HTML
    res.send(`${html}`)
});

const port = process.env.PORT || 4000;

app.listen(port)
