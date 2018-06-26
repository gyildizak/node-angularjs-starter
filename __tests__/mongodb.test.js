import mongoose from "mongoose";

describe('MongoDB Server', () => {
	it('MongoDB server connection', done => {
		mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`)
			.then(() => {
				done()
			});
	});
});
