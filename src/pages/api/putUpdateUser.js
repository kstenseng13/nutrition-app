'use server';

import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

export default async function handler(req, res) {
    if (req.method === "PUT") {
        const { username, lowFat, lowSodium } = req.body;

        if (!username || typeof lowFat !== "boolean" || typeof lowSodium !== "boolean") {
            return res.status(400).json({ message: "Username and dietary preferences are required!" });
        }

        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        try {
            await client.connect();

            const database = client.db("660NutritionApp");
            const collection = database.collection("UserData");

            // Update the user's dietary preferences
            const result = await collection.updateOne(
                { "user.username": username },  // Filter
                { $set: { "user.lowFat": lowFat, "user.lowSodium": lowSodium } }  // Update
            );

            if (result.matchedCount === 0) {
                return res.status(404).json({ message: "User not found!" });
            }

            res.status(200).json({ message: "User dietary preferences updated successfully!" });

        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            res.status(500).json({ message: "Something went wrong!" });
        } finally {
            await client.close();
        }
    } else if (req.method === "GET") {
        res.status(200).json({ message: "You've hit the updateUserDiet endpoint" });
    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}
