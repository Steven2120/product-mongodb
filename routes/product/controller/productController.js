const Product = require("../model/Product");

module.exports = {
  getAllProducts: function (callback) {
    Product.find({}, function (err, payload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
  createProduct: function (body, callback) {
    let createdProduct = new Product({
      productName: body.productName,
    });
    createdProduct.save(function (err, payload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
  getProductById: function (id, body, callback) {
    Product.findById({ _id: id }, body, { new: true }, function (err, payload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
  updateProductById: function (id, body, callback) {
    Product.findByIdAndUpdate(
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
  deleteProductById: function (id, callback) {
    Product.findByIdAndRemove({ _id: id }, function (err, deletedPayload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, deletedPayload);
      }
    });
  },
};
