import { connect } from 'mongoose';

export async function connectMongo() {
  try {
    await connect(process.env.MONGODB_URI || 'mongodb://localhost:27017');
  } catch (error) {
    console.error(`Failed connect to MongoDB: ${error}`);
  }
}
