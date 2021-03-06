const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const tokenConfig = require("../config/tokenConfig.js");

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a User
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    password: hash,
  });

  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else res.send(data);
  });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    else res.send(data);
  });
};

// Find a single User with a userId
exports.findOne = (req, res) => {
  User.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.userId,
        });
      }
    } else res.send(data);
  });
};

// Update a User identified by the userId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  User.updateById(req.params.userId, new User(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating User with id " + req.params.userId,
        });
      }
    } else res.send(data);
  });
};

// Delete a User with the specified userId in the request
exports.delete = (req, res) => {
  User.remove(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.params.userId,
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while removing all users.",
      });
    else res.send({ message: `All Users were deleted successfully!` });
  });
};

// Fing a single User with a email
exports.login = (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.password) {
      res.status(400).send({
        message: "Content can not be emplty!",
      });
    }
  // Login
  User.login(req.body.email, req.body.password, (err, data) => {
    if(err) {
      if(err.kind === "not found") {
        res.status(404).send({
          message: `Not found User with email ${req.body.email}.`,
        });
      } else if(err.kind === "error password") {
        res.status(500).send({
          message: "Error password with email " + req.body.email,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with email " + req.body.email,
        });
      }
    } else {
      res.status(200).json({
        userId: data.id,
        token: jwt.sign(
          { userId: data.id },
          tokenConfig.RANDOM_TOKEN_SECRET,
          { expiresIn: tokenConfig.EXPIRESIN }
        )
      });
    }
  });
};
