const express = require('express');
const router = express.Router();
const {upload} = require("../middllwhere/multer")

const { getpost, savepost, updatepost, deletepost } = require('../controller/buger_controller');

// Define routes with correct `upload` usage
router.post('/postbuger', upload.single("image"), savepost);
router.get('/getbuger', getpost);
router.delete('/deletebuger/:id', deletepost);
router.put('/updatebuger/:id', upload.single("image"), updatepost);

module.exports = router;
