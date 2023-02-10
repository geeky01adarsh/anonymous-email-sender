import express from 'express';

console.log("Hello")

const app = express();


const PORT = 5000;

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Sucessfully connected to PORT ${PORT}`)
    }
})