const { connectDB } = require("./db/connect")
require("dotenv").config()

const express = require("express");
const app = express();

app.use(express.json())
const tasks = require("./routes/tasks");
app.use("/api/v1/tasks", tasks)
app.use(express.static("./public"))

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log("Successfully connected to db...")
        app.listen(3000, () => {
            console.log("Server listening at http://localhost:3000 ...");
        });
    }
    catch (err) {
        console.log("db connection error:", err);
    }
}
start()