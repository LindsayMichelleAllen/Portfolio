const express = require("express");
const mongo = require("mongodb").MongoClient;
const path = require("path");
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var db;

const app = express();
const port = process.env.PORT || 5000;

console.log(port)
/*
async function startup() {
  await mongo.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/messages', { useUnifiedTopology: true }, function (err, client) {
    if (err) throw err
    db = client.db('messages');
    db.createCollection("message");
  })
};

startup();
*/
// Serve static files built by React
app.use(express.static(path.join(__dirname, "portfolio/build")));

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "portfolio/build", "index.html"));
});

app.post('/api/sendMessage', function(req, res) {
  console.log(req.body);
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let company = req.body.company;
  let department = req.body.department;
  let message = req.body.message;

  var finalMessage = 'Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nCompany: ' + company + '\nDepartment: ' + department + '\nMessage: \n' + message;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'contact.portfolio.allen@gmail.com',
      pass: 'TempPass1234'
    }
  });

  var mailOptions = {
    from: 'contact.portfolio.allen@gmail.com',
    to: 'nanos.game.dev@gmail.com',
    subject: 'New Message from Portfolio App',
    text: finalMessage
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  let item = { "name": name, "email": email, "phone": phone, "company": company, "department": department, "message": message};
  db.collection("message").insertOne(item).catch(err => console.error(err));

  res.sendStatus(200)
});

app.listen(port, () => console.log(`Listening on port ${port}`));