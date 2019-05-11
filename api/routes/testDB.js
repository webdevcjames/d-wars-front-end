const express = require("express")
const router = express.Router()
const pgp = require("pg-promise")(/*options*/)

// Variable to be sent to Frontend with Database status
let databaseConnection = "Waiting for Database response..."
router.get("/", function(req, res, next) {
  console.log("something")
  res.send(databaseConnection)
})

// mongoose.connect("mongodb://mongodb:27017/test", { useNewUrlParser: true })
  // .then(() => console.log("done"))
  // .catch(() => console.log("not done"))

const config = {
  host: "d-wars-front-end_db_1",
  port: "5432",
  database: "database_development",
  user: "username",
  password: "password"
}
const db = pgp(config)

db.connect()
  .then(() => console.log("done"))
  .catch((err) => console.log("not done: ", err))

// If there is a connection error send an error message
// db.on("error", error => {
  // console.log("Database connection error:", error)
  // databaseConnection = error
// })

// // If connected to MongoDB send a success message
// db.once("open", () => {
  // console.log("Connected to Database!")
  // databaseConnection = "Connected to Database"
// })


// db.one("open", () => {
//   console.log("Connected to Database!")
//   databaseConnection = "Connected to Database"
// })

module.exports = router