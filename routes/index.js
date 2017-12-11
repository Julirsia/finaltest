const cwd = process.cwd();
var express = require('express');
const db = require(cwd+'/database/db');
const controller=require(cwd+'/controller/controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {res.render('index');});

router.get('/main', function(req, res, next) {res.render('main');});

router.get('/notice',function(req,res,next){res.render('notice');});

router.get('/story',controller.story_list);
router.get('/review',controller.review_list);

router.get('/story/:id',controller.story_view);
router.get('/review/:id',controller.review_view);

router.post('/story_write',controller.story_write);
router.get('/story_write',function(req,res,next){res.render('story_write');});

router.post('/review_write',controller.review_write);
router.get('/review_write',function(req,res,next){res.render('review_write');});
module.exports = router;
