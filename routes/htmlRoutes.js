const router = require("express").Router();
const path = require("path");

//index.html route
router.get("/" , (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// notes html route
router.get("/notes" , (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});


module.exports = router;