const express = require("express");
const router = express.Router();

const productController = require("./controller/productController");
const Product = require("./model/Product");

router.get("/", function (req, res) {
  res.json({
    test: true,
  });
});

router.get("/get-all-products", function (req, res) {
  productController.getAllProducts(function (err, payload) {
    if (err) {
      res.status(500).json({
        message: "Error",
        error: err,
      });
    } else {
      res.json({
        message: "success",
        data: payload,
      });
    }
  });
});

router.post("/create-product", function (req, res) {
  productController.createProduct(req.body, function (err, payload) {
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: payload });
    }
  });
});

router.get("/get-product-by-id/:id", function (req, res) {
  productController.getProductById(
    req.params.id,
    req.body,
    function (err, payload) {
      if (err) {
        res.status(500).json({ message: "Error", error: err });
      } else {
        res.json({ message: "success", data: payload });
      }
    }
  );
});

router.put("/update-product-by-id/:id", function (req, res) {
  productController.updateProductById(
    req.params.id,
    req.body,
    function (err, updatedPayload) {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Error", error: err });
      } else {
        res.json({
          message: "success",
          data: updatedPayload,
        });
      }
    }
  );
});

router.delete("/delete-product-by-id/:id", function (req, res) {
  productController.deleteProductById(
    req.params.id,
    function (err, deletedPayload) {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Error", error: err });
      } else {
        res.json({ message: "success", data: deletedPayload });
      }
    }
  );
});
module.exports = router;
