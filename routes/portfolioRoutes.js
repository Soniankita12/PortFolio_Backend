const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Experience,
  Contact,
} = require("../Models/portfolioModel");
// get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const experiences = await Experience.find();
    const contacts = await Contact.find();
    res.send({
      intro: intros[0],
      about: abouts[0],
      project: projects,
      experience: experiences,
      contact: contacts[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update intro
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "intro is updadated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update about
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "about is updadated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add-experience
router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience added succesfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// update-experience
router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience is updadated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete-experience
router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({ _id: req.body._id });
    res
      .status(200)
      .send({
        data: experience,
        success: true,
        message: "Experience deleted successfullly",
      });
  } catch {
    res.status(500).send(error.message);
  }
});

// add-project
router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Project added succesfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// update-project
router.post("/update-project", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "Project is updadated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


//delete-project
router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: project,
      success: true,
      message: "Project deleted successfullly",
    });
  } catch {
    res.status(500).send(error.message);
  }
});


module.exports = router;
