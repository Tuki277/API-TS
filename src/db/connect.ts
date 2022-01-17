import mongoose from 'mongoose';
import config from 'config';
import log from '../logger';

const connectDB = async () => {
    const dbUrl = config.get("url") as string;

    try {
        await mongoose.connect(dbUrl, {})
        log.info("Database has connected");
    } catch (error) {
        log.info(error);
        process.exit(1)
    }
}

export default connectDB;