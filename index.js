const {connection} = require("./dataBase/connection");
const express = require("express");
const cors = require("cors");

console.log("API social network started");

// bd connection
connection();

// node server
const app = express();
const puerto = 3900;

// cors configuration
app.use(cors());

// transform body data to object js
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
const UserRoutes = require("./routes/user");
const PublicationRoutes = require("./routes/publications");
const FollowRoutes = require("./routes/follows");

app.use("/api", UserRoutes);
app.use("/api", PublicationRoutes);
app.use("/api", FollowRoutes);

// routes configuration
app.get("/test-rout", (req, res) => {
    return res.status(200).json({
        "id": 1,
        "nombre": "Sebastian",
        "web": "panda.com"
    });
})

// Listen to http request
app.listen(puerto, () => {
    console.log("Server listening on port: ", puerto)
});