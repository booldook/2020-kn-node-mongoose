const mongoose = require('mongoose');
const uris = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}`;
const options = {
	useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}

module.exports = () => {
	const connect = () => {
		mongoose.connect(uris, options, (err) => {
			if(err) console.log(err);
			else console.log('몽고디비 연결 성공');
		});
	}

	connect();

	mongoose.connection.on('error', (err) => {
		throw new Error(err);
	});

	mongoose.connection.on('disconnected', connect);

	require('./Books');
}