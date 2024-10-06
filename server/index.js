const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Ensure .env is correctly loaded
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You are successfully connected to MongoDB!");



    //Store food details to database
    app.post("/add-food", async (req, res) => {
      const newFood = req.body;
      console.log(newFood);

      try {
        // Insert into MongoDB
        const result = await client
          .db("GustoGardenDB")
          .collection("food-items")
          .insertOne(newFood);
        res.status(200).json({ success: true, data: result }); // Send JSON response on success
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ success: false, message: "Failed to insert food item." }); // Send JSON response on error
      }
    });
    
    //Store user details to database
    


    
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Gusto Garden Server is running...");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
