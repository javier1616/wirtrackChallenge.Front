const express = require('express');
const app = express();
const path = require('path');
const port = 3000
const router = express.Router();


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));

});

//add the router
app.use('/',router);
// add public folder
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));