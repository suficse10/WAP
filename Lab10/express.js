const express = require('express');
const app = express();
app.listen(3000, () => { console.log('Your Server is running on 3000'); })
var path = require("path");
const { send } = require('process');
var ejs = require("ejs");
var cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

let obj = {};
let userName = "admin";
let password = "admin";

app.use("/list", function (req, res, next) {
    res.render(path.join(__dirname, "/view", "/index.html"), { list: ["apple", "banana"] });
});

app.get("/login", (req, res, next) => {
    res.send('<form action="/middle" method="post">User: <input name="user"/>'
        + 'Password: <input name="pwd" type="password"/> <input type="submit" value="Login"/>'
        + '<br/><input type="checkbox" name="remember"/>Remember User</form>');
});

app.post("/middle", function (req, res, next) {
    console.log("In the post", req.body);
    //res.send('<div> Name: '+req.body.name+'About'+req.body+'</div>');
    obj = req.body;
    console.log("obj:", obj.user, obj.pwd, obj.remember);
    if (obj.remember) {
        res.cookie("username", obj.user);
        res.cookie("password", obj.pwd);
        console.log("Cookies: ", req.cookies);
        if (req.cookies.username == userName && req.cookies.password == password) {
            res.redirect("/form");
        }
        else {
            res.redirect("/login");
        }
    }
    else {
        if (obj.user == userName && obj.pwd == password) {
            res.redirect("/form");
        }
        else {
            res.redirect("/login");
        }
    }
    // if(obj.user == userName && obj.pwd == password){
    //     res.redirect("/form");
    // }
    // else{
    //     res.redirect("/login");
    // }
});

app.get("/form", (req, res, next) => {
    console.log("Get the form");
    //res.sendFile(path.join(__dirname,"form.html"));
    next();
});

app.use("/form", (req, res, next) => {
    console.log("In the form");
    res.sendFile(path.join(__dirname, "form.html"));
});

app.get("/person", (req, res, next) => {
    res.send('<form action="/postData" method="post">Name: <input name="name"/> <br>About:<br><textarea name="about" cols="30" rows="5"></textarea> <br>Gender:<div id="radioDiv"><input type="radio" name="genderRad" value="Male">Male<input type="radio" name="genderRad" value="Female">Female</div><br>Department:<div id="deptDiv"><select name="selectDept" id="slDept"><option value="">Select</option><option value="Compro">Compro</option><option value="MBA">MBA</option></select> <br><br></div><br>Courses:<div id="courseDiv"><input type="checkbox" name="checkCourse" value="WAP">WAP<input type="checkbox" name="checkCourse" value="MWA">MWA<input type="checkbox" name="checkCourse" value="WAA">WAA<input type="checkbox" name="checkCourse" value="MGT">MGT<input type="checkbox" name="checkCourse" value="ACC">ACC</div><br><input type="submit" value="Submit" /></form>');
});

app.post("/postData", function (req, res, next) {
    console.log("In the post", req.body);
    //res.send('<div> Name: '+req.body.name+'About'+req.body+'</div>');
    res.send(req.body);
});

app.use(function (err, req, res, next) {
    console.log("Error handler", err);
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});