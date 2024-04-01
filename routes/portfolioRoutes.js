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
    const intro = await Intro.findOneAndUpdate({ _id: req.body._id }, req.body, {
      new: true,
    });
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

module.exports = router;
