const express = require('express');

const router = express.Router();

const allPosts = [
    {id: 1, title: 'น่ารัก111', from: 'คนน่ารัก', createdAtText: '14 April 2022', commentsCount: 2},
    {id: 2, title: 'น่ารัก222', from: 'คนน่ารัก', createdAtText: '12 April 2022', commentsCount: 0}
];

router.get('/new', (req, res) =>{
    res.render('postNew');
});

router.post('/new', (req, res) => {
    console.log(req.body);
    const { title } = req.body ?? {};
    res.send(`Submit ฟอร์มแล้วจ้า title=${title}`);
});


router.get('/:postId', (req, res)=>{
    console.log(req.params);
    const { postId } = req.params;
    const onePost = allPosts.find(post => post.id === +postId);
    const customTitle = !!onePost ? `${ onePost.title } | ` : 'ไม่พบเนื้อหา |';
    res.render('postId', { onePost, customTitle });
});


module.exports = router;