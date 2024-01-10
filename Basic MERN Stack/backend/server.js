import express from 'express';

const app = express();

// app.get('/', (req,res) => {
//     res.send("Server is running");
// })

app.get('/api/jokes', (req,res) => {
    const jokeList = [
        {
            id: 1,
            title: "Joke 1",
            content:"This is first Joke"
        },
        {
            id: 2,
            title: "Joke 2",
            content:"This is Second Joke"
        },
        {
            id: 3,
            title: "Joke 3",
            content:"This is Third Joke"
        },
        {
            id: 4,
            title: "Joke 4",
            content:"This is Forth Joke"
        },
        {
            id: 5,
            title: "Joke 5",
            content:"This is Fifth Joke"
        },
    ]
    res.send(jokeList);
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})
