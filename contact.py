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
