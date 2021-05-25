//User is coming from mongoDB Schema
//in human term -- a template to create a user
const User = require("../model/User");

//exporting an object with key and value
module.exports = {
  getAllUsers: function (callback) {
    //User.find({}) is a mongoose function to query the database
    //it takes in a callback the returns two parameters- the first one is always error and the second one is payload (Users data)
    User.find({}, function (err, payload) {
      //err parameter
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
  //Payload parameter
  createUser: function (body, callback) {
    //Create a mongodb User Object it will assign a unique ID for the user
    let createdUser = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      email: body.email,
      username: body.username,
    });
    createdUser.save(function (err, payload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
  updateUserById: function (id, body, callback) {
    User.findByIdAndUpdate(
      { _id: id },
      body,
      { new: true },
      function (err, updatedPayload) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, updatedPayload);
        }
      }
    );
  },
  deleteUserByID: function (id, callback) {
    User.findByIdAndRemove({ _id: id }, function (err, deletedPayload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, deletedPayload);
      }
    });
  },
};
