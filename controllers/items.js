const ItemModel = require('../models/items');

module.exports ={
    createItem(req, res){
        ItemModel.findOne({ name: req.body.name }, function (err, item) {
            if (err){
                res.status(500).send({ success: false, message: 'Server encountered problem while saving.' });
            }
            else if(item){
                res.status(409).send({ success: false, message: 'Item already exists' });
            }
            else{
                const item  = new ItemModel(req.body);
                item.save(function(err){
                    if (err){
                        res.status(500).send({sucess:false, message:err});
                    }
                    else{
                        res.status(201).send({sucess:true, message:'item has been created successfully'});
                    }
                });
              }
    });
},
    getItem(req, res){
        ItemModel.findOne({_id:req.params.id},
            function(err, item){
                if (err){
                    res.status(500).send({sucess:false, message:'Failed'});
                }
                else {
                    res.status(200).send({sucess:true, message:item});
                }
            }
        );
    },
    getItems(req, res){
        let page = parseInt(req.query.page);
        let limit = parseInt(req.query.limit);

        if (page && limit) {
            ItemModel.paginate({}, { page: page, limit: limit}, function (err, item) {
                if (err){
                    res.status(500).send({sucess:false, message:err});
                }
                else {
                    res.status(200).send({sucess:true, message:item});
                }
            });
          }
        else {
            ItemModel.find({}, function (err, item) {
                if (err){
                    res.status(500).send({sucess:false, message:err});
                }
                else {
                    res.status(200).send({sucess:true, message:item});
                }
            });
          }
    },
    updateItem(req, res) {
        ItemModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, item) {
            if (err){
                res.status(500).send({sucess:false, message:'Failed'});
            }
            else {
                res.status(200).send({sucess:true, message:item});
            }
        });
    
      },
    searchByCategory(req, res) {
        let category = req.query.category;
        let page = parseInt(req.query.page);
        let limit = parseInt(req.query.limit);
        if (category) {
          if (page && limit) {
            ItemModel.paginate({ category:new RegExp(category, "i") }, { page: page, limit: limit}, function (err, message) {
              if (err)
                res.status(500).send({ success: false, message: err });
              res.status(200).send({ success: true, message: message });
            });
          }
          else {
            ItemModel.find({ category:new RegExp(category, "i") }, function (err, message) {
              if (err)
                res.status(500).send({ success: false, message: err });
              res.status(200).send({ success: true, message: message });
            });
          }
        }
        else {
          res.status(400).send({ success: false, message: 'Bad Request' });
        }
      },      
    deleteItem(req, res){
        ItemModel.findByIdAndRemove(req.params.id , function (err, message) {
            if (err){
              res.status(500).send({ success: false, message: 'Failed' });
            }
            else{
            res.status(200).send({ success: true, message: 'Item deleted successfully' });
            }
          });
      
    }
}