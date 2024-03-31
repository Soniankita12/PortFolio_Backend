const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Experience,
  Contact,
} = require("../Models/portfolioModel");

router.get('/get-portfolio-data', async (req, res) => {
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

module.exports = router;
