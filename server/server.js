const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour", "userFive", "userSix", "userSeven", "userEight"] })
})

app.listen(5000, () => { console.log("Server is running on port 5000") })