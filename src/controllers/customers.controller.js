import Customer from "../models/Customer"
import jwt from 'jsonwebtoken'
import config from '../config'

export const getCustomerById = async (req, res) => {
    let userType
    const customer = await Customer.findById(req.params.customerId)
    const token = req.headers["x-access-token"]
    const decoded = jwt.verify(token, config.SECRET)
    console.log(decoded.privilege);
    if (decoded.privilege == 'manager') {
        let jsonCustomer = {
            "Series_reference": customer.Series_reference,
            "Period": customer.Period,
            "Data_value": customer.Data_value,
            "STATUS": customer.STATUS,
            "UNITS": customer.UNITS,
            "Subject": customer.Subject,
            "Group": customer.Group,
            "Series_title_1": customer.Series_title_1,
            "Series_title_2": customer.Series_title_2,
            "Series_title_3": customer.Series_title_3,
            "Series_title_4": customer.Series_title_4,
            "Series_title_5": customer.Series_title_5
        }
        res.json(jsonCustomer)
    }
    if (decoded.privilege == 'validador') {
        let jsonCustomer = {
            "Series_reference": customer.Series_reference,
            "Period": customer.Period,
            "Data_value": customer.Data_value.substring(0, 3) + '***********',
            "STATUS": customer.STATUS.substring(0, 3) + '***********',
            "UNITS": customer.UNITS.substring(0, 3) + '***********',
            "Subject": customer.Subject.substring(0, 3) + '***********',
            "Group": customer.Group.substring(0, 3) + '***********',
            "Series_title_1": customer.Series_title_1,
            "Series_title_2": customer.Series_title_2,
            "Series_title_3": customer.Series_title_3,
            "Series_title_4": customer.Series_title_4,
            "Series_title_5": customer.Series_title_5
        }
        res.json(jsonCustomer)
    }
    if (decoded.privilege == 'restringido') {
        let jsonCustomer = {
            "Series_reference": customer.Series_reference,
            "Period": customer.Period,
            "Series_title_1": customer.Series_title_1,
            "Series_title_2": customer.Series_title_2,
            "Series_title_3": customer.Series_title_3,
            "Series_title_4": customer.Series_title_4,
            "Series_title_5": customer.Series_title_5
        }
        res.json(jsonCustomer)
    }
}

