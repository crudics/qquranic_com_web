const nodemailer = require("nodemailer");

//nodmailer mail sender detail
var transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp-mail.outlook.com",
  secureConnection: false,
  port: 587,
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: "qquranicdomain@gmail.com",
    pass: "yousufmalana99",
  },
  from: "qquranicdomain@gmail.com",
});

function ContactusInfo(req, res) {
  const { firstName, lastName, phone, email, address, message } = req.body;

  if (!firstName || !lastName || !phone || !email || !address || !message) {
    res.end("all fields required");
  } else {
  var mailOption = {
    from: "Q Quranic - qquranicdomain@gmail.com",
    to: "mdkprogrammer@gmail.com",
    subject: "Contact-Us",
    text: "this email from Q Quranic",
    html: ` <h2>Information</h2>
              <h4>Name: ${firstName} ${lastName}</h4>
              <h4>Phone: ${phone}</h4>
              <p>Email: ${email}</p>
              <p>Address: ${address}</p>
              <p>Address: ${message}</p>`
  };

  //send email to user for verification of account
  transporter.sendMail(mailOption, function (err, info) {
    if (err) {
      res.end("Email not sent check your internet connection");
    } else {
      res.send();
    }
  });
 }
}

module.exports = ContactusInfo;
