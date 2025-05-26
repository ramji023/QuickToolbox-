const multer = require("multer")
const extensionConverterStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/extensionConverter")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const extensionConverterFileFilter = (req, file, cb) => {
    const imageMimeTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/svg+xml',
        'image/bmp',
        'image/tiff',
        'image/vnd.microsoft.icon',
        'image/heic',
    ];
    // console.log(file.mimetype)
    imageMimeTypes.includes(file.mimetype) ? cb(null,true) : cb("Only Image file are allowed",false)
}


const extensionConverter = multer({
    storage: extensionConverterStorage,
    limits: { fileSize: 50 * 1024 * 1024 },
    fileFilter: extensionConverterFileFilter
})

module.exports = { extensionConverter }