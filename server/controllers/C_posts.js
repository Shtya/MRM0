const Post = require("../models/M_posts")
const path = require("path")
const fs = require("fs")
const AsyncHandler = require("express-async-handler")



const sharp            = require("sharp")
const multer           = require("multer")
const { v4: uuidv4 } = require("uuid")



const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('only images allowed'), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

const IMG = upload.fields([{ name: 'thumbnail', maxCount: 1 },]);

const Resize = AsyncHandler(async (req, res, next) => {

  if (req.files.thumbnail) {
    const ext = req.files.thumbnail[0].mimetype.split('/')[1];
    const thumbnailFilename = `blog-${Date.now()}-cover.${ext}`;
    await sharp(req.files.thumbnail[0].buffer).jpeg({quality:60})
      .toFile(`uploads/${thumbnailFilename}`); 
    req.body.thumbnail = thumbnailFilename;
  }

  req.body.images = [];
  if (req.files.images) {
    await Promise.all(
      req.files.images.map(async (img, index) => {
        const ext = img.mimetype.split('/')[1];
        const filename = `blog-inner-${Date.now()}-${index + 1}.${ext}`;
        await sharp(img.buffer).jpeg({quality:60})
          .toFile(`uploads/${filename}`);
        req.body.images.push(filename);
      })
    );
  }
  next();
});



const createPost = AsyncHandler(async(req , res , next)=>{
    const data = await Post.create(req.body)
    if(!data) return next(new Error("Post couldn't be created."))
      res.status(200).json({data})
})


const  getPosts = AsyncHandler(async (req, res) => {
  let data = await Post.find({}).sort({updateAt:-1})
    res.status(200).json({data})
})

const  getPost = AsyncHandler(async (req, res , next) => {
  const data = await Post.findById(req.params.id)
  if(!data) next( new Error("There is not blog with this id"))
  res.status(200).json({data})
})

const  getPostCate = AsyncHandler(async (req, res , next) => {
  const data = await Post.find({category: req.params.categoryId}).sort({createAt : -1})
  if(!data) next( new Error("There is not blog with this id"))
  res.status(200).json({data})
})


const  editPost = AsyncHandler(async (req, res , next) => {
  const data = await Post.findByIdAndUpdate(req.params.id, req.body , { new: true })
  if(!data) next( new Error("There is not blog with this id"))
  res.status(201).json({data})
})


const  deletePost = AsyncHandler(async (req, res , next) => {
  const data = await Post.findByIdAndDelete(req.params.id)
  if(!data) next( new Error("There is not blog with this id"))
  res.status(200).json("Done Deleted")
})

module.exports = {createPost, getPosts, getPost, editPost, deletePost , IMG , Resize , getPostCate}

