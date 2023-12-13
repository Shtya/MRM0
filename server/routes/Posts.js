const {Router} = require('express') 
const {createPost, getPosts, getPost, editPost, deletePost, IMG, Resize , getPostCate} = require('../controllers/C_posts')
const router = Router() 

router.post('/' , IMG ,Resize , createPost) 
router.get('/', getPosts) 
router.get('/:id', getPost) 

router.get('/:categoryId', getPostCate) 
router.put('/:id', IMG ,Resize , editPost) 
router.delete('/:id', deletePost) 

module.exports = router ; 