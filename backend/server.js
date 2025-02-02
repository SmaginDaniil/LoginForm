require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const { authenticateUser } = require("./middleware/authMiddleware");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Роуты
app.use("/auth", authRoutes);
app.use("/users", authenticateUser, userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
