// Creation serveur via npm i express
// Creation route
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Creation route
app.get('/', (req, res) => {
    res.status(200).send('TODO List');
});

// With Router and Controller
const taskRouter = require('./route/task');
app.use('/tasks', taskRouter);

// Running server
app.listen(port, () => {
    console.log('C\'est good, le serveur tourne');
})