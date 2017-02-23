var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
    return{
        login:function(req,res){
            console.log("first test")

User.findOne({name: req.body.name}, function(err, data){
    
    if(!data){
        console.log("condish 1")
        var user = new User(req.body)
        user.save(function(err,data){
            req.session.user = data;
            req.session.save()
            res.json(data)
        })
    }else{
        console.log("condish 2")
        req.session.user = data;
        req.session.save()
        res.json(data)

    }

})
        },
checkStatus: function(req,res){
    console.log("backend controller")
    if(req.session.user){
        console.log(req.session.user,"my test")
        res.json(req.session.user)
    }else{
        console.log("my test")
        res.json(null)
        }
}
    }
})()
