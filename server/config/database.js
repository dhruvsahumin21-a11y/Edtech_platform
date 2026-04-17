const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
require("dotenv").config();

const { MONGODB_URL } = process.env;
const LOCAL_MONGO_URL = "mongodb://127.0.0.1:27017/StudyNotionDB";

async function connectToDatabase(uri) {
	return mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
}

async function startMemoryServer() {
	const mongoServer = await MongoMemoryServer.create();
	return mongoServer.getUri();
}

exports.connect = async () => {
	const uri = MONGODB_URL || LOCAL_MONGO_URL;
	try {
		await connectToDatabase(uri);
		console.log("DB Connection Success");
	} catch (err) {
		console.log("DB Connection Failed");
		console.log(err.message || err);

		if (!MONGODB_URL) {
			process.exit(1);
		}

		console.log("Attempting fallback to in-memory MongoDB for local development...");
		try {
			const memoryUri = await startMemoryServer();
			await connectToDatabase(memoryUri);
			console.log("Connected to in-memory MongoDB");
		} catch (fallbackErr) {
			console.log("In-memory MongoDB connection failed");
			console.log(fallbackErr.message || fallbackErr);
			process.exit(1);
		}
	}
};


