const multer = require("multer");

const MIMETYPE = {
    "image/png": "png",
    "image/jpg": "jpg",
    "image/jpeg": "jpeg"
}

const fileUpload = multer({
    limits: {
        fileSize: 1024*1024*2,
        files:2
    },
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            console.log("Destination called");
            cb(null, "uploads/userImages");
        },
        filename: (req, file, cb) => {
            console.log("Filename called")
            const ext = MIMETYPE[file.mimetype];
            cb(null, Date.now() + "." + ext);
        }
    }),
    fileFilter: (req, file, cb) => {
        console.log("file filter called")
        const isValid = !!MIMETYPE[file.mimetype];
        let error = isValid ? null : new Error("Invalid mime type");
        cb(error, isValid);
    }       
});

module.exports = fileUpload;