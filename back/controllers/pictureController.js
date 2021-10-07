const Picture = require("../models/pictureModel.js");

// Create and Save a new Picture
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Picture
    const picture = new Picture({
      userId: req.body.userId,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      private: req.body.private,
      url: req.body.url 
    });
  
    // Save Picture in the database
    Picture.create(picture, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Picture."
        });
      else res.send(data);
    });
  };

// Retrieve all Pictures from the database.
exports.findAll = (req, res) => {
    Picture.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving pictures."
        });
      else res.send(data);
    });
  };

// Find a single Picture with a pictureId
exports.findOne = (req, res) => {
    Picture.findById(req.params.pictureId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Picture with id ${req.params.pictureId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Picture with id " + req.params.pictureId
          });
        }
      } else res.send(data);
    });
  };

// Update a Picture identified by the pictureId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Picture.updateById(
      req.params.pictureId,
      new Picture(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Picture with id ${req.params.pictureId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Picture with id " + req.params.pictureId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a Picture with the specified pictureId in the request
exports.delete = (req, res) => {
    Picture.remove(req.params.pictureId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Picture with id ${req.params.pictureId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Picture with id " + req.params.pictureId
          });
        }
      } else res.send({ message: `Picture was deleted successfully!` });
    });
  };

// Delete all Pictures from the database.
exports.deleteAll = (req, res) => {
    Picture.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all pictures."
        });
      else res.send({ message: `All Pictures were deleted successfully!` });
    });
  };