require('dotenv').config({path: 'src/.env'})
const express = require('express');
const app = express();
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const commentRoutes = require("./routes/commentRoutes")
const cors = require('cors')

const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/blogs',blogRoutes);
app.use('/api/blogs', commentRoutes);

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.error('Could not connect to MongoDB',err))

app.get("/",(req,res) => {
    res.send('Backend Server is running');
});

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
})