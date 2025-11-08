const express = require('express');
const app = express();
const port = 2000;

app.get('/',(req, res)=>{
    console.log(req.query);
    const { q, sortBy } = req.query;
    res.send(`สวัสดีจ้าาา q=${q}, sortBy=${sortBy}`);
});

app.listen(port, ()=> {
    console.log(`start at port ${port} click link : http://localhost:${port}`)
});