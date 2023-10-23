const express = require("express");
const { userInfo } = require("os");
const app = express ();
const path = require("path");
const fs = require('fs');
const { log } = require("console");
const http = require('http');
const bodyParser = require('body-parser');



app.use(express.static('public'));

const server = http.createServer(app);
app.use(bodyParser.urlencoded({extended: false}));

app.get ('/',(req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "/public/3.html"));
});

app.get ('/game',(req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "/public/trial4.html"));
});

app.get ('/login',(req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "/public/login.html"));
});


app.get ('/users',(req, res) => {
    console.log('get users');
    var a = fs.readFileSync('users.json');
    var b = JSON.parse(a);
    // console.log(b);
    res.send(b)
    
});

app.post('/login', async (req, res) => {
    try{
        var emailLogin = req.body.email
        var usernameLogin = req.body.username
        var passwordLogin = req.body.password
        console.log(usernameLogin);
        

        //pengganti DB, pakai json
        var a = fs.readFileSync('users.json');
        var b = JSON.parse(a);

        var foundUser = b.find((data) => usernameLogin === data.name);
        var foundPass = b.find((data) => passwordLogin === data.password);

        console.log(foundUser);
        if (foundUser && foundPass)  {
            let usrname = foundUser.name;
            res.send(`<div align ='center'><h2>login successful</h2></div><br><br><br><div align ='center'><h3>Hello ${usrname}</h3></div><br><br><div align='center'><a href='./login.html'>logout</a></div>`);
        } else {
            res.send("<div align ='center'><h2>Invalid username or password</h2></div><br><br><div align ='center'><a href='./login.html'>LOGIN AGAIN</a></div>");
        }
    } catch{
        res.send("Internal server error");
    }
});

app.listen(3100);