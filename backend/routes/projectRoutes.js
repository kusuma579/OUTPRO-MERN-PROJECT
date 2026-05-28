const express = require("express");

const router = express.Router();

const {

    createProject,
    getProjects,
    deleteProject

} = require("../controllers/projectController");

const upload =require("../middleware/upload");
router.post(
    "/",
    upload.single("image"),
    createProject
);

router.get("/",getProjects);

router.delete("/:id",deleteProject);

module.exports = router;