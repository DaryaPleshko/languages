const express = require("express");
const { usersCreate, getUsers } = require("./users.servise")

const router = express.Router();


router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const createdUser = await usersCreate(name, email, password);

        res.status(200).send(createdUser);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.post("/auth", async (req, res) => {
    try {
        const { email, password } = req.body;
        const authUsers = await getUsers(email, password);
        res.status(200).send(authUsers);
    } catch (error) {
        res.status(404).send(error.message);
    }
});


module.exports = router