const express = require("express")
const app = express()
const path = require("path");
const fs = require("fs");
const { extensionConverter } = require("./middlewares/extensionConverter.multer.middleware")
const multer = require("multer")
const sharp = require("sharp")
//use json middleware
app.use(express.json())
// use urlEncoded middleware
app.use(express.urlencoded({ extended: true }))


// test the server
app.get("/", function (req, res) {
    res.json({ msg: "server is running successfully" })
})



app.use("/converted-files",express.static(path.join(__dirname, 'result', 'extensionConverter')));
// handle to change the extension
app.post("/imageExtensionConverter", function (req, res) {
    extensionConverter.single('upload_file')(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({ msg: 'file size exceeds 50 MB limit' });
            }
            if (err.code === 'LIMIT_FILE_COUNT') {
                return res.status(400).json({ msg: 'Too many files uploaded' });
            }
            return res.status(400).json({ msg: err.message });
        } else if (err) {
            return res.status(500).json({ msg: err });
        }

        if (!req.file) {
            return res.status(400).json({ msg: 'file is required' });
        }


        let inputFilePath = path.join(__dirname, req.file.path)
        let outputFilePath = path.join(__dirname, 'result', 'extensionConverter', path.parse(req.file.path).name + '.' + req.body.target)
        // console.log(outputFilePath)
        // console.log(inputFilePath);
        // console.log(req.file.mimetype) 
        try {
            const result = await sharp(inputFilePath).toFormat(`${req.body.target}`).toFile(outputFilePath)
            // console.log("result : ", result)
            fs.unlinkSync(inputFilePath);
            res.status(200).json({ fileUrl: `converted-files/${path.parse(req.file.path).name + '.' + req.body.target}` })
        } catch (err) {
            console.log(err)
            return res.status(401).json({ msg: "something went wrong while changing image format" })
        }
    });
})
app.listen(5000)