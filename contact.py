#!/usr/bin/python
print ("content-type:text/html\n")



import smtplib
import cgi
import django
name = ""
email = ""
phoneNumber = ""
message = ""
form = cgi.FieldStorage()
if form.getvalue('message'):
    message = form.getvalue('message')
if form.getvalue('email'):
    email = form.getvalue('email')
if form.getvalue('phoneNumber'):
    phoneNumber = form.getvalue('phoneNumber')
if form.getvalue('name'):
    name = form.getvalue('name')

content = "\n" + 'message : '  + message + "\n"  + "Phone Number : " + phoneNumber + "\n"  + "E-mail : " + email + "\n" "name : " + name + "\n"

mail = smtplib.SMTP("smtp.gmail.com",587)

mail.ehlo()

mail.starttls()

mail.login("mikecalabrese0@gmail.com","Theman16")

mail.sendmail ('mikecalabrese0@gmail.com','mikeclbrs@gmail.com',content)

mail.close()

print """<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="desciption" content="Front end web deveopler portfolio of Mike Calabrese">
  <meta name="keywords" content="Front End, HTMl, CSS, Pittsburgh,Washington DC, JavaScript">
  <meta name="author" content="Mike Calabrese">
  <link type="text/css" rel="stylesheet" href="portfolio.css"
  <script type="text/javascript" src="script.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Trirong" rel="stylesheet">
  <title>Mike Calabrese Contact</title>
</head>
<body>
  <body>
    <div class="wrapper">
    <div class="topNav" id="Secondpages">
      <img id="headerLogo" src="images/LogoCutFinal.png" alt="Logo">
      <ul class="navbar">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="portfolio.html">Portfolio</a></li>
      <li><a href="contact.html">Contact</a>
      </ul>
    </div>
    <div class="SecondPageHeadings">
      <h1></h1>
        </div>

        <div class="content" id="download">
          <h2> Thank You!</h2>




        </div>








        <footer>
          <p>&copy;Mike Calabrese Production <br>
            All trademarks and registered trademarks appearing on
              this site are the property of their respective owners. </p>
        </footer>
    </div>
</body>

</html>
"""
