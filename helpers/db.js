import mongoose from 'mongoose';

module.exports = () => {
	mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`);

	mongoose.connection.on('open', () => {
		// console.log('MongoDB: Connected');
	});

	mongoose.connection.on('error', err => {
		console.log('MongoDB: Error', err);
		throw(err);
	});

	mongoose.Promise = global.Promise;
};
