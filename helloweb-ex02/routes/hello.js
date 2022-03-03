const express = require('express');

const router = express.Router();

router.route('/01').get(function(req,resp){
    resp.writeHead(200,{
        'Content-Type':'text-html'
    });

    resp.end("<h1>/hello/01</h1>")
});




module.exports = router;