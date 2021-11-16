import express from "express";
import User from "../models/userModel";
import { generateToken, isAuth } from "../utils.js";
// import { generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.get(
  "/createadmin",
  async (req, res) => {
    try {
      const user = new User({
        name: "admin",
        email: "admin@example.com",
        password: "jsamazona",
        isAdmin: true,
      });
      const createdUser = await user.save();
      res.status(201).send(createdUser);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });
  
  userRouter.post(
    "/createadmin", async (req, res) => {
    try {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isAdmin: true,
      });
      const createdUser = await user.save();
      res.status(201).send(createdUser);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

userRouter.post(
  "/signin",
  async (req, res) => {
    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!signinUser) {
      res.status(401).send({
        message: "Invalid Email or Password",
      });
    } else {
      res.status(202).send({
        _id: signinUser._id,
        name: signinUser.name,
        email: signinUser.email,
        isAdmin: signinUser.isAdmin,
        token: generateToken(signinUser),
      });
    }
  });

  userRouter.post("/register", async (req, res) => {
    const newUser = await User.findOne({
      email: req.body.email,
    });
    if (newUser) {
      res.status(409).send({
        message: "User Already Registered",
      });
      return;
    }
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const createdUser = await user.save();
    if (!createdUser) {
      res.status(403).send({
        message: "Invalid User Data",
      });
    } else {
      res.status(201).send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser),
      });
    }
  });

    userRouter.put("/:id", 
    isAuth,
    async (req, res) => {
      console.log(req.body)
      console.log(req.params.id)
      const user = await User.findById(req.params.id);
      if (!user) {
        res.status(404).send({
          message: "User Not Found",
        });
      } else {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.password = req.body.password || user.password;
        const updatedUser = await user.save();
        if (!updatedUser) {
          res.status(406).send({
            message: "Update User Fail",
          });
        } else {
          res.status(200).send({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser),
          });
        }
      }
    });
  
export default userRouter;