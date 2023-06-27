const express = require("express");

const pageController = require("../controllers/pageController");

const router = express.Router();

router.get("/",pageController.getIndexPage);
router.get("/about", pageController.getAboutPage);
router.get("/gallery", pageController.getGalleryPage);
router.get("/contact", pageController.getContactPage);
router.get("/register", pageController.getRegisterPage);
router.get("/login", pageController.getLoginPage);
router.get("/logout", pageController.getLogoutPage);

module.exports = {
  routes: router,
};
