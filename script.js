const express = require("express");
const app = express();

app.get('/', (req, res)=> {
    res.send('this is the home page');
});

app.put('/', (req, res)=> {
    res.send('this is the home page');
});


app.put('/', (req, res)=> {
    res.send('this is the home page');
});

app.put('/', (req, res)=> {
    res.send('this is the home page');
});

app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
});