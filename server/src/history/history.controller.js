const express = require("express");
const { historyCreate } = require("./history.service")

const router = express.Router();

router.post("/:history_id", async (req, res) => {
    try {
        const { history } = req.body
        console.log(req.params.history_id, history);
        const created = await historyCreate(req.params.history_id, history);

        res.status(200).send(created);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;