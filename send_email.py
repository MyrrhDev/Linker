import os
import csv
import json
import dotenv
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from python_http_client import exceptions

def send_it(errorList):
    dotenv.load()
    message = Mail(
        from_email='amalaabraham3@gmail.com',
        to_emails='amalaabraham3@gmail.com',
        subject='Sending with Twilio SendGrid is Fun',
       )
    print(errorList)
    #Using os won't work for Chrome extension...
    message.dynamic_template_data = {
        'row': errorList,
    }
    message.template_id = dotenv.get('TEMPLATE_ID')
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