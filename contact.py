import smtplib

content = "example email stuff"

mail = smtplib.SMTP("smtp.gmail.com",587)

mail.ehlo()

mail.starttls()

mail.login("mikecalabrese0@gmail.com","Theman16")

mail.sendmail ('mikecalabrese0@gmail.com','mikeclbrs@gmail.com',content)

mail.close()
