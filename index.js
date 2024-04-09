const express = require("express");

const app = express();

//cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/notes", (req, res) => {
  const data = [
    { id: 1, note: "Buy vegetables", description: "" },
    { id: 2, note: "Do laundry", description: "Urgent" },
    { id: 3, note: "Call mom", description: "" },
  ];
  res.json(data);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
