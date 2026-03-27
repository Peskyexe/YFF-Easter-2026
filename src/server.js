// Express
const express = require("express");
const app = express();


// Paths
const paths = require("./config/paths")
const publicPath = paths.public


// Live reload
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(publicPath);

liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
        liveReloadServer.refresh('/');
    }, 500);
});


// Middleware
app.use(connectLivereload());
app.use(express.json());
app.use(express.static(publicPath));


// Routing
const pagesRoutes = require("./routes/pages.routes");
app.use("/", pagesRoutes);

const orderApiRoutes = require("./routes/order.routes");
app.use("/api/order", orderApiRoutes);


app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on http://localhost:3000/bestill. To stop the server, press Ctrl + C");
});
