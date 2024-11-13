const express = require('express');
const router = express.Router();
const {upload} = require("../middllwhere/multer")

const { getpost, savepost, updatepost, deletepost } = require('../controller/pizza');


router.post('/postpizza', upload.single("image"), savepost);
router.get('/getpizza', getpost);
router.delete('/deletepizza/:id', deletepost);
router.put('/updatepizza/:id', upload.single("image"), updatepost);

module.exports = router;
