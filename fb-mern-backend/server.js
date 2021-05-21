import express from "express";
import mongoose from "mongoose"
import cors from "cors";
import multer from "multer";
import Grid from "gridfs-stream";
import bodyParser from "body-parser";
import GridFsStorage from "multer-gridfs-storage";
import path from "path";
import Pusher from "pusher";

import mongoPosts from './PostModel.js'
import { ReadStream } from "fs";

// storage for adding images
Grid.mongo = mongoose.mongo

// app config
const app = express()
const port = process.env.PORT || 9000

// middleware
app.use(bodyParser.json());
app.use(cors())

// db confiq
const mongoURI = 'mongodb+srv://himesh:himesh123@fbmern.5j7wi.mongodb.net/facebookclone?retryWrites=true&w=majority'

const conn = mongoose.createConnection(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// gfs-grid file system(basic file sysytem for mongodb) i.e normally create files larger than 16MB much simpler way for saving images
let gfs 

conn.once('open', () => {
    console.log('DB Connected')

    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('images')
})

const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = `image-${Date.now()}${path.extname(file.originalname)}`

            const fileInfo = {
                filename: filename,
                bucketName: 'images'
            };
            resolve(fileInfo)
        })
    }
})

const upload = multer({ storage })

mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// api routes
app.get('/', (req,res) => res.status(200).send('hello world'))

app.post('/upload/image', upload.single('file'), (req, res) => {
    res.status(201).send(req.file)
})

app.post('/upload/post',(req, res) => {
    const dbPost = req.body

    mongoPosts.create(dbPost, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(err)
        }
    })
})

app.get('/retrieve/podts',(req,res) => {
    mongoPosts.find((err,data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            data.sort((b,a) => {
                return a.timestamp - b.timestamp;
            })

            res.status(200).send(data)
        }
    })
})

app.get('/retrieve/images/single',(req,res) => {
    gfs.files.findOne({ filename: req.query.name}, (err,file)=> {
        if (err){
            res.status(500).send(err)
        } else {
            if (!file || file.length === 0) {
                res.status(404).json({ err: 'file not found'})
            }else {
                const readstream = gfs.createReadStream(file.filename)
                readstream.pipe(res)
            }
        }
    })
})

//  listen
app.listen(port, () => console.log(`listing on localhost:${port}`))