var express = require('express');
var router = express.Router();
var Books = require('../schemas/Books');

/* GET users listing. */
router.get('/create', async function(req, res, next) {
	try {
		const book = new Books({
			title: '홍길동전',
			writer: '길동이',
			comment: '형을 형이라...'
		});
		const result = await book.save();
		res.json(result);
	}
	catch(e) {
		console.log(e);
	}
});

router.get('/list', async function(req, res, next) {
	try {
		const result = await Books.find();
		res.json(result);
	}
	catch(e) {
		console.log(e);
	}
});

module.exports = router;
