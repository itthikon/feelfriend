const express = require('express');
const hbs = require('hbs');
const generalRorter = require('./routers/general');
const postRouter = require('./routers/posts');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
const port = 2000;

app.use('/', generalRorter);
app.use('/p', postRouter);




app.listen(port, ()=> {
    console.log(`start at port ${port} click link : http://localhost:${port}`)
});