import webapp2
import os
import json
import cgi
import urllib
from google.appengine.api import mail

class SendMail(webapp2.RequestHandler):
    def post(self):
        args = [self.request.get(x) for x in ['name', 'email', 'message']]
        mail.send_mail(sender='nimajnebs@gmail.com', 
            to='nimajnebs@gmail.com', 
            subject='Contact Form Message', 
            body='From: {0} | {1} \nMessage: {2}'.format(*args))
        self.response.out.write('Thanks!  Your message has been sent.')

app = webapp2.WSGIApplication([
  ('/mail', SendMail)
])