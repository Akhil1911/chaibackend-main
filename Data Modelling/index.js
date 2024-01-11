import express from "express";

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send("Done Scene");
})

app.listen(port, () => {
    console.log(`Port running at ${port}`);
})
