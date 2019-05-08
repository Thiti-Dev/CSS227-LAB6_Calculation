const express = require('express');
const app = express();

//set body-parser
var bodyParser = require('body-parser')

//---------set up body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
//app.use(bodyParser.json());


//Set the view engine to use ejs
app.set('view engine', 'ejs');

//static
const port = 5000;

//Local Storage
const numberList = {
    number1: 0,
    number2: 0
}


app.get('/', (req,res) => {
    res.render('pages/index');
})

app.get('/var2', (req,res) => {
    res.render('pages/second');
})


app.post('/addFirstNumber' , (req,res) => {
    numberList.number1 = req.body.number1;
    console.log(numberList.number1 + " was added")
    res.render('pages/second');
})

app.post('/addSecondNumber' , (req,res) => {
    numberList.number2 = req.body.number2;
    console.log(numberList.number2 + " was added")

    //generate resukt
    result = numberList.number1 * numberList.number2

    res.render('pages/result' , {result});
})


app.listen(port , () => {
    console.log(`Server currently Running on ${port}`);
})

 