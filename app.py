from flask import Flask, request
import secrets
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)


secret_key = secrets.token_hex(16)
app.config['SECRET_KEY'] = secret_key
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config[' SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)
app.app_context().push()
migrate = Migrate(app, db)

@app.route('/register', method=['POST'])
def register():
        data = request.get_json()
        print("Received data:", data) 
        hospitalName =data.get('hospitalName') 
        address = data.get('address')
        city = data.get('city')
        state = data.get('state')
        pincode = data.get('pincode')
        hospitalRegistrationDate = data.get('hospitalRegistrationDate')  
        ambulanceAvailable = data.get('ambulanceAvailable')
        email = data.get('email')
        phoneNumber = data.get("phoneNumber")
        registerNumber = data.get("registerNumber")
        registerCertificate = data.get("registerCertificate")


if __name__ == '__main__':
      
        app.run(debug=True)

