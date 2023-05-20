const User = require('../models/user');
const colors = require('colors');

const signup = async(req,res)=>{
    const {firstName, lastName, gender, email, phoneNumber} = req.body;
    try {
        const user = await User.create({firstName, lastName, gender, email, phoneNumber});
        console.log(user);
        console.log("data stored in the database successfully".green);
        res.json({msg: 'Succuss'});
    } catch (err) {
        console.log(err);
        console.log('There\'s an error while storing the user details in the database'.red);
        res.json({msg: "Failure"});
    }
}

module.exports = signup;