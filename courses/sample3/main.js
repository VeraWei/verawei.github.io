const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/bmi"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmi");
    //   res.send(__dirname);
});

app.post("/", function (req, res) {
    // const age = Number(req.body.age);
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);
    const result = weight / (height * height);
    console.log(req.body, result);
    // FIXME Is there a convinent way to get the homepage and then set the result into it?
    res.send(`<link rel="stylesheet" href="bmi.css" />
    <!DOCTYPE html>
    <html lang="en">
        <!-- Notes 
    
      BMI Fomula in this site: https://www.cdc.gov/healthyweight/assessing/bmi/childrens_bmi/childrens_bmi_formula.html
    Age is irrelevant 
    
    -->
    
        <head>
            <!-- <link rel="stylesheet" href="styles.css"> -->
            <link src="bmi.css" />
            <link
                href="https://fonts.googleapis.com/css?family=Noto+Sans"
                rel="stylesheet"
            />
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>BMI checker</title>
        </head>
    
        <body>
            <div class="header">
                <div class="wrapper">
                    <form action="/" method="POST">
                        <h1>BMI calculator</h1>
                        <p>Insert Your Age</p>
                        <input type="text" name="age" id="age" />
                        <p>Insert Weight in Kg</p>
                        <input type="text" name="weight" id="weight" />
                        <br />
                        <p>Insert Height in cm</p>
                        <input type="text" name="height" id="height" />
                        <br />
                        <button type="submit" id="calc">check</button>
                        <p id="result">The BMI is ${result}</p>
                    </form>
                </div>
            </div>
        </body>
    </html>`);
});

app.listen(3001, function () {
    console.log("server started on port 3000");
});
