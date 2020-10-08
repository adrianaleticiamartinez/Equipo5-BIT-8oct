import Customer from "../models/Customer"
import jwt from 'jsonwebtoken'
import config from '../config'

export const getCustomerById = async (req, res) => {
        
    Customer.findOne({ username: username }, function(err, user) {
        if (err) { 
            console.log('Error: ', err);
          // user not found 
        return res.send(401);
        }
  
        if (!user) {
        // incorrect username
        return res.send(401);
        }
  
        if (!user.validPassword(password)) {
        // incorrect password
        return res.send(401);
        }
        // User has authenticated OK
        res.send(200);
    });

    var expires = moment().add('days', 7).valueOf();
    var token = jwt.encode({
      iss: user.id,
      exp: expires
    }, app.get('jwtTokenSecret'));
    
    res.json({
      token : token,
      expires: expires,
      user: user.toJSON()
    });
}