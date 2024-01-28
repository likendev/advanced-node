const express = require("express");
const app = express();
const { Worker } = require("node:worker_threads");

app.get("/", (req, res) => {
  const worker = new Worker("./worker.js");

  worker.on("message", function (message) {
    console.log(message);
    res.send("" + message);
  });
  worker.postMessage("start!");
});

app.get("/fast", (req, res) => {
  res.send("Load instantly!");
});

app.listen(3000);
