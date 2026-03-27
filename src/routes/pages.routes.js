const express = require("express");
const { readFile } = require("fs").promises;
const router = express.Router();

const path = require("path")
const paths = require("../config/paths")
const publicPath = paths.public


router.get("/bestill", async (request, response) => {
    response.send(await readFile(path.join(publicPath, "ordering.html"), "utf8"));
});

router.get("/admin", async (request, response) => {
    response.send(await readFile(path.join(publicPath, "admin.html"), "utf8"));
});


module.exports = router;