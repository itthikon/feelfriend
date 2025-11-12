const express = require('express');

const router = express.Router();


const allPosts = [
    {id: 1, title: 'น่ารัก111', from: 'คนน่ารัก', createdAtText: '14 April 2022', commentsCount: 2},
    {id: 2, title: 'น่ารัก222', from: 'คนน่ารัก', createdAtText: '12 April 2022', commentsCount: 0}
];

router.get('/',(req, res)=>{
    res.render('home', { allPosts });
});

module.exports = router;