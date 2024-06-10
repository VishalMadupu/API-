const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const UserDetails = require('./models/item');

const app = express();

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));

app.use(express.json());

mongoose.connect("mongodb+srv://vishalreddy:Mvr1234@apidata.ol6pzet.mongodb.net/?retryWrites=true&w=majority&appName=APIData",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
).then(() => console.log("DB connected..."))
.catch(err => console.log(err));

app.post('/adduser', async (req, res) => {
    try {
        const newUser = new UserDetails(req.body);
        await newUser.save();
        return res.json({ message: "User added successfully" });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get('/getallusers', async (req, res) => {
    try {
        const allData = await UserDetails.find();
        return res.json(allData);
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000..."));