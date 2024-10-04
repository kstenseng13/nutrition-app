'use server';

import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { user } = req.body;

        if (!user) {
            return res.status(400).json({ message: "user is required!" });
        }

        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        try {
            await client.connect();

            // Choose a name for your database
            const database = client.db("660NutritionApp");

            // Choose a name for your collection
            const collection = database.collection("UserData");

            const thisusername = user.username;
            const thisemail = user.email;

            // Check if the username or email already exists
            const existingUser = await collection.findOne({ $or: [{ "user.username": thisusername }, { "user.email": thisemail }] });

            if (existingUser) {
                return res.status(409).json({ message: "Username or email already exists!" });
            }

            const dbResponse = await collection.insertOne({ user });
            if (dbResponse.acknowledged !== true) {
                return res.status(500).json({ message: "User not saved!" });
            }
            else{
                console.log("Data saved successfully:", dbResponse);
                res.status(201).json({ message: "User saved successfully!" });
            }
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            res.status(500).json({ message: "Something went wrong!" });
        } finally {
            await client.close();
        }
    } else if (req.method === "GET") {
        res.status(200).json({ message: "You've hit the postCreateUser endpoint" });
    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}
