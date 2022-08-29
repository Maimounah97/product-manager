const Products = require('../models/products.model');
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World"
  });
}
// create a nes product
module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Products.create({
    title,
    price,
    description
  })
    .then(products => response.json(products))
    .catch(err => response.json(err));
}

module.exports.findAllProducts = (req, res) => {
  Products.find()
    .then(allProducts => res.json({ Products: allProducts }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.getProduct = (request, response) => {
  Products.findOne({_id:request.params.id})
      .then(product => response.json(product))
      .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) => {
  Products.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
      .then(updatedProduct => response.json(updatedProduct))
      .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
  Products.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}







