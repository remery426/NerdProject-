var user = require('./../controllers/users.js')
var nerd = require('./../controllers/nerds.js')
module.exports = function(app){
    app.post('/login', function(req,res){
        user.login(req, res)
    })
    app.get('/checkStatus', function(req,res){
        user.checkStatus(req,res)
    })
    app.post('/addNerd', function(req,res){
        nerd.addNerd(req,res)
    })
    app.get('/getAll', function(req,res){
        nerd.getAll(req,res)
    })
    app.post('/changeStatus', function(req,res){

        nerd.changeStatus(req,res)
    })
    app.post('/Like', function(req,res){
        nerd.Like(req,res)
    })
}

    