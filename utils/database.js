import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    const mongoUri=process.env.MONGO_URI;
  const client = await MongoClient.connect(
    mongoUri
  );
  return client;
}