var mongoose = require('mongoose');
var Nerd = mongoose.model('Nerd');

module.exports = (function(){
    return{
        addNerd: function(req,res){
           
          var nerd = new Nerd(req.body)
          nerd.save();
           console.log(nerd, "backend controller test")
          res.json(req.body)
        },
    getAll: function(req,res){
        Nerd.find({}, function(err,data){
            res.json(data)
        })

    },
    changeStatus: function(req,res){
        Nerd.findById({_id: req.body._id}, function(err,data){
            data.status = req.body.status;
            data.save();
            res.json(data)
        })
    },
    Like: function(req,res){
        console.log("hi im paul")
        Nerd.findById({_id: req.body._id},function(err,data){
            console.log("hi steve!")
            data.likes = req.body.likes;
            data.save();
        })
    }
    }
})()
