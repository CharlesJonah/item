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
                    res.status(500).send({sucess:false, message:err});
                }
                else if(item){
                    res.status(200).send({sucess:true, message:item});
                }
                else{
                    res.status(404).send({sucess:true, message:'Sorry, could not find item with the supplied id'});
                }
            }
        );
    },
    getItems(req, res){
        ItemModel.find({},
            function(err, item){
                if (err){
                    res.status(500).send({sucess:false, message:err});
                }
                else if(item){
                    res.status(200).send({sucess:true, message:item});
                }
                else{
                    res.status(404).send({sucess:true, message:'Sorry, no items found'});
                }
            }
        );
    },
    updateItem(req, res) {
        ItemModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, message) {
          if (err)
            res.status(500).send({ success: false, message: err });
          res.status(200).send({ success: true, message: message });
        });
    
      },    
    deleteItem(req, res){
        ItemModel.remove({ _id: req.params.id }, function (err, message) {
            if (err)
              res.status(500).send({ success: false, message: err });
            res.status(200).send({ success: true, message: 'Item deleted successfully' });
          });
      
    }
}