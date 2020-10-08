import Customer from "../models/Customer"
import jwt from 'jsonwebtoken'
import config from '../config'

export const getCustomerById = async (req, res) => {
    Customer.find({}).exec(function(err, customerfile){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/product/index', {customer: customerfile} );
        
}
