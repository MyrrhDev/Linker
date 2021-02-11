import os
import csv
import json
import dotenv
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from python_http_client import exceptions

def send_it():
    dotenv.load()
    with open("report-file.csv") as csv_file:
        recipients = [
            {k:v for k, v in row.items()}
            for row in csv.DictReader(csv_file, skipinitialspace=True)
        ]
  
    print(recipients)
    message = Mail(
        from_email='17cs058@mgits.ac.in',
        to_emails='amalaabraham3@gmail.com',
        subject='Sending with Twilio SendGrid is Fun',
       )

    #Using os won't work for Chrome extension...
    message.dynamic_template_data = {
        'row': recipients,
    }
    message.template_id = 'd-c6ae2c86405045a1a9ca715875976a7e'
    print(dotenv.get('SENDGRID_API_KEY'))
    sg = SendGridAPIClient(dotenv.get('SENDGRID_API_KEY'))

    try:
      response = sg.send(message)
      print(response.status_code)
      print(response.body)
      print(response.headers)
    except exceptions.BadRequestsError as e:
        print(e.body)
        exit()
    print(response.status_code, response.body, response.headers)
send_it()

