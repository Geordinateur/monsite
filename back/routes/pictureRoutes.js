module.exports = app => {
    const pictures = require("../controllers/pictureController.js");
  
    // Create a new User 
    app.post("/pictures", pictures.create);
  
    // Retrieve all Users 
    app.get("/pictures", pictures.findAll);
  
    // Retrieve a single User with pictureId
    app.get("/pictures/:pictureId", pictures.findOne);
  
    // Update a User with pictureId
    app.put("/pictures/:pictureId", pictures.update);
  
    // Delete a User with pictureId
    app.delete("/pictures/:pictureId", pictures.delete);
  
    // Delete all pictures
    app.delete("/pictures", pictures.deleteAll);
  };