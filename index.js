const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
const port = 2000;

app.get('/',(req, res)=>{
    console.log(req.query);
    const { q, sortBy } = req.query;
    res.render('home', {q, sortBy});
});

app.get('/p/new', (req, res) =>{
    res.render('postNew');
});

app.post('/p/new', (req, res) => {
    console.log(req.body);
    const { title } = req.body ?? {};
    res.send(`Submit ฟอร์มแล้วจ้า title=${title}`);
});


app.get('/p/:postId', (req, res)=>{
    console.log(req.params);
    const { postId } = req.params;
    res.render('postId', { postId });
});

app.listen(port, ()=> {
    console.log(`start at port ${port} click link : http://localhost:${port}`)
});