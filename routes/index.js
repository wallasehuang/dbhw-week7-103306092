var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: '首頁',
    who: req.session.who
  });
});

router.post('/verify', function(req, res) {
	if (req.body.username) {
		req.session.who = req.body.username;
	}
	res.render('index', {
		title : '首頁',
		who : req.session.who
	});
});

router.get('/logout',function(req,res,next){
	req.session.who=null;
	res.render('index', {
		title : '首頁',
		who : req.session.who
	});
});


module.exports = router;
