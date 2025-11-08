const express = require('express');
const app = express();
const port = 2000;

app.get('/',(req, res)=>{
    res.send('สวัสดีหน้าแรก')
});

app.listen(port, ()=> {
    console.log(`start at port ${port}`)
});