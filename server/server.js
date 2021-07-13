// // const express = require('express');
// // const path = require('path');
// // let app = express();

// // app.get('/', (req, res) => {
// //     // res.send('Hola Mundo!');
// //     res.sendFile(path.join(__dirname, '../public/index.html'));
// // });

// // app.get('/css/styles.css', (req, res) => {
// //     res.sendFile(path.join(__dirname, '../public/css/styles.css'));
// // });

// // app.listen(3000);


// /*******/


// // const express = require('express');
// // const path = require('path');

// // let app = express();


// // app.use(express.static(path.join(__dirname, '../public')));


// // app.get('/order/:name', (req, res) => {
// //     let name = req.params.name;
// //     let email = req.query.email;
// //     res.send(`Your name is ${name} and email is ${email}`);
// //     /*http://localhost:3000/order/123Daze?email=test@test.com <= what is inputed in chrome browser
// //     output: Your name is 123Daze and email is test@test.com*/
// // });


// // app.listen(3000);


// /*******/

// // const express = require('express');
// // const path = require('path');

// // let app = express();

// // /*Super special middleware logger!*/
// // app.use((req, res, next) => {
// //     console.log(req.originalUrl);
// //     next();
// // });

// // // app.get('/', (req, res) => {
// // //     res.send('Hola Mundo!');
// // // });

// // app.use(express.static(path.join(__dirname, '../public')));

// // app.listen(3000);


// /*******/

// // const express = require('express');
// // const path = require('path');
// // const fs = require('fs');

// // let app = express();

// // /*Super special middleware logger!*/
// // app.use((req, res, next) => {
// //     fs.appendFileSync('log.txt', `${req.url}\n`);
// //     next();
// // });

// // app.use(express.static(path.join(__dirname, '../public')));

// // app.listen(3000);


// /*******/

// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');

// let app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// app.post('/contact-form', (req, res) => {
//     console.log(req.body.email);
//     console.log(req.body.name);
//     res.send('Thank you for submitting your contact form.');
// });

// app.use(express.static(path.join(__dirname, '../public')));

// app.listen(3000);



/*****ExpressJS Lab*****/


const express = require('express');
const path = require('path');
const fs = require('fs');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // parse form data from any request

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.send('Hello from the web server side...');
});

//writes values from the form to a json file on server..
app.use((req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    fs.appendFileSync('values.json', `Name: ${name} and Email: ${email}\n`);
    next();
});

app.get('/formsubmissions', (req, res) => {
    res.send(`Results: ${res}`);
});

/***Advanced***/

app.post('/formsubmissions', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    res.send(`Your name is ${name} and email is ${email}`);
    /*http://localhost:3000/order/123Daze?email=test@test.com <= what is inputed in chrome browser
    output: Your name is 123Daze and email is test@test.com*/
    console.log(req.body);
});

/*Super special middleware logger!*/
app.use((req, res, next) => {
    console.log(req.url);
    next();
});


app.listen(3000);

/**/