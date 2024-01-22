const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const employeeSignup = require("../controllers/signup");
const employeeLogin = require("../controllers/login");
const { employeeAuth, checkRole } = require("../middleware");

router.get("/", (req, res) => {
    res.send("Hello World");
  }
);

// Software engineering Registeration Route
router.post("/register-se", (req, res) => {
    console.log(req.body);
    if (!req.body) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }
    employeeSignup(req.body, "se", res);
  });
  
  //Marketer Registration Route
  router.post("/register-marketer", async (req, res) => {
    console.log(req.body);
    if (!req.body) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }
    await employeeSignup(req.body, "marketer", res);
  });
  
  //Human resource Registration route
  router.post("/register-hr", async (req, res) => {
    console.log(req.body);
    if (!req.body) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }
    const validRoles = ['se', 'admin', 'hr', 'marketer'];
    if (!req.body || !req.body.role || !validRoles.includes(req.body.role)) {
      return res.status(400).json({
        message: "Invalid or missing role in the request body",
      });
    }
    await employeeSignup(req.body, req.body.role, res);
  });
  
  // Software engineers Login Route
  router.post("/Login-se", async (req, res) => {
    console.log(req.body);
    if (!req.body) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }
    await employeeLogin(req.body, "se", res);
  });
  
  // Human Resource Login Route
  router.post("/Login-hr", async (req, res) => {
    console.log(req.body);
    if (!req.body) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }
    const validRoles = ['se', 'admin', 'hr', 'marketer'];
    if (!req.body || !req.body.role || !validRoles.includes(req.body.role)) {
      return res.status(400).json({
        message: "Invalid or missing role in the request body",
      });
    }
    await employeeLogin(req.body, req.body.role, res);
  });
  
  // Marketer Login Route
  router.post("/Login-marketer", async (req, res) => {
    console.log(req.body);
    if (!req.body) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }
    await employeeLogin(req.body, "marketer", res);
  });
  
  router.get("/se-protected", employeeAuth, checkRole(["se"]),
  async (req, res) => {
   return res.json(`welcome ${req.body.name}`);
  });
  
  router.get(
    "/marketers-protected",
    employeeAuth,
    checkRole(["marketer"]),
    async (req, res) => {
      return res.json(`welcome ${req.body.name}`);
    }
  );
  

  // se route protected
router.get("/se-protected", employeeAuth, checkRole(["se"]), async (req, res) => {
    return res.json(`welcome ${req.body.name}`);
  });

    // hr route protected
router.get("/hr-protected", employeeAuth, checkRole(["hr"]), async (req, res) => {
    return res.json(`welcome ${req.body.name}`);
  }
);

// marketer route protected
router.get(
    "/marketers-protected",
    employeeAuth,
    checkRole(["marketer"]),
    async (req, res) => {
      return res.json(`welcome ${req.body.name}`);
    }
  );

    module.exports = router;
    
  