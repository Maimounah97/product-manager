const PrroductController = require('../controllers/products.controller');
module.exports = function(app){
    app.get('/api', PrroductController.index);
    app.get("/api/products", PrroductController.findAllProducts);
    app.post('/api/products/new', PrroductController.createProduct);
    app.get('/api/products/:id', PrroductController.getProduct);
    app.put('/api/products/:id', PrroductController.updateProduct);
    app.delete('/api/products/:id', PrroductController.deleteProduct);




}

