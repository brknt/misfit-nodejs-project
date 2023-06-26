const express = require("express");

const pageController = require("../controllers/pageController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/",authMiddleware.authenticateToken, pageController.getIndexPage);
router.get("/about", pageController.getAboutPage);
router.get("/trainer", pageController.getTrainerPage);
router.get("/gallery", pageController.getGalleryPage);
router.get("/contact", pageController.getContactPage);
router.get("/register", pageController.getRegisterPage);
router.get("/login", pageController.getLoginPage);

module.exports = {
  routes: router,
};
