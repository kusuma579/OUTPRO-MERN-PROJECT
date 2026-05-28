const Activity =
require("../models/Activity");

const logActivity = async(action,type)=>{

    try{

        await Activity.create({

            action,
            type
        });

    }catch(error){

        console.log(error);
    }
};

module.exports = logActivity;