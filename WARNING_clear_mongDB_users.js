require('dotenv').config();
const { MongoClient } = require('mongodb');
const readline = require('readline');

// Connection URL
const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

// Database Name
const dbName = '660NutritionApp';

async function deleteAllDocuments() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to server');

    // Get the database and collection
    const db = client.db(dbName);
    const collection = db.collection('UserData');

    // Warning prompt
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const warningMessage = `
    WARNING... I repeat, WARNING...
    
    WARNING: You are about to delete all documents in the UserData collection of the 660NutritionApp database.
    This action is irreversible and will permanently remove all user data stored in this collection.
    Please ensure that you have backed up any important data before proceeding.
    Deleting all documents will result in the loss of all user information, including but not limited to:
    - User profiles
    - Nutrition data
    - Activity logs
    - Any other user-related information

    If you are absolutely sure that you want to proceed with this action, type 'yes' and press Enter.
    Otherwise, type 'no' to cancel the operation.
    `;

    rl.question(warningMessage, async (answer) => {
      if (answer.toLowerCase() === 'yes') {
        // Delete all documents
        const result = await collection.deleteMany({});
        console.log(`${result.deletedCount} documents were deleted`);
      } else {
        console.log('Operation cancelled');
      }
      rl.close();
      await client.close();
    });

  } catch (err) {
    console.error(err);
  }
}

deleteAllDocuments();
