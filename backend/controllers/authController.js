const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const logActivity = require("../utils/logActivity");

const signup = async(req,res)=>{

    try{

        const {name,email,password} = req.body;

        const userExists =
        await User.findOne({email});

        if(userExists){

            return res.status(400).json({

                message:"User Already Exists"
            });
        }

        const hashedPassword =
        await bcrypt.hash(password,10);

        const user =
        await User.create({

            name,
            email,
            password:hashedPassword
        });

        res.status(201).json({

            message:"Signup Successful",
            user
        });
        await logActivity(
            `New User Signup : ${name}`,
            "user"
        );

    }catch(error){

        res.status(500).json({

            message:error.message
        });
    }
};

const login = async(req,res)=>{

    try{

        const {email,password} = req.body;

        const user =
        await User.findOne({email});

        if(!user){

            return res.status(400).json({

                message:"Invalid Credentials"
            });
        }

        const isMatch =
        await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatch){

            return res.status(400).json({

                message:"Invalid Credentials"
            });
        }

        const token = jwt.sign(

            {
                id:user._id,
                role:user.role
            },
            "SECRETKEY",
            {expiresIn:"7d"}
        );

        res.status(200).json({

            message:"Login Successful",

            token,

            user
        });

    }catch(error){

        res.status(500).json({

            message:error.message
        });
    }
};

module.exports = {
    signup,
    login
};