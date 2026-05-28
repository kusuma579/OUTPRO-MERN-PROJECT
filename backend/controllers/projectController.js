const Project = require("../models/Project");
const logActivity =
require("../utils/logActivity");

const cloudinary =
require("../config/cloudinary");

const streamifier = require("streamifier");

const createProject = async(req,res)=>{

    try{

        const {title,description,github} = req.body;

        let imageUrl = "";

        if(req.file){

            const streamUpload = () => {

                return new Promise((resolve,reject)=>{

                    const stream =
                    cloudinary.uploader.upload_stream(

                        {folder:"major-project"},

                        (error,result)=>{

                            if(result){

                                resolve(result);

                            }else{

                                reject(error);
                            }
                        }
                    );

                    streamifier
                    .createReadStream(req.file.buffer)
                    .pipe(stream);
                });
            };

            const result =
            await streamUpload();

            imageUrl = result.secure_url;
        }

        const project =
        await Project.create({

            title,
            description,
            github,
            image:imageUrl
        });

        res.status(201).json(project);
        await logActivity(

            `New Project Added : ${title}`,

            "project"
        );

    }catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};

const getProjects = async(req,res)=>{

    try{

        const projects =
        await Project.find().sort({createdAt:-1});

        res.status(200).json(projects);

    }catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};

const deleteProject = async(req,res)=>{

    try{

        await Project.findByIdAndDelete(req.params.id);
        await logActivity(
            "Project Deleted",
            "project"
        );

        res.status(200).json({
            message:"Project Deleted"
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};

module.exports = {
    createProject,
    getProjects,
    deleteProject
};