const express = require('express');
const router = express.Router();
const {upload} = require("../middllwhere/multer")

const { getpost, savepost, updatepost, deletepost } = require('../controller/chicken');


router.post('/postchicken', upload.single("image"), savepost);
router.get('/getchicken', getpost);
router.delete('/deletechicken/:id', deletepost);
router.put('/updatechicken/:id', upload.single("image"), updatepost);

module.exports = router;
