const sql = require("./db.js");

// constructor
const Picture = function(picture) {
  this.userId = picture.userId;
  this.title = picture.title;
  this.description = picture.description;
  this.category = picture.category;
  this.url = picture.url;
  this.private = picture.private;
};

Picture.create = (newPicture, result) => {
  sql.query("INSERT INTO pictures SET ?", newPicture, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created picture: ", { id: res.insertId, ...newPicture });
    result(null, { id: res.insertId, ...newPicture });
  });
};

Picture.findById = (pictureId, result) => {
  sql.query(`SELECT * FROM pictures WHERE id = ${pictureId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found picture: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Picture with the id
    result({ kind: "not_found" }, null);
  });
};

Picture.getAll = result => {
  sql.query("SELECT * FROM pictures", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("pictures: ", res);
    result(null, res);
  });
};

Picture.updateById = (id, picture, result) => {
  sql.query(
    "UPDATE pictures SET email = ?, name = ? WHERE id = ?",
    [picture.email, picture.name, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Picture with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated picture: ", { id: id, ...picture });
      result(null, { id: id, ...picture });
    }
  );
};

Picture.remove = (id, result) => {
  sql.query("DELETE FROM pictures WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Picture with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted picture with id: ", id);
    result(null, res);
  });
};

Picture.removeAll = result => {
  sql.query("DELETE FROM pictures", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} pictures`);
    result(null, res);
  });
};

module.exports = Picture;