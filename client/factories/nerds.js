app.factory('nerdFactory', function($http, $location, $route){
    var factory = {};
     
    factory.addNerd = function(nerd){
        console.log(nerd.status)
        $http.post('/addNerd', nerd).then(function(output){
            $location.url("/dash")
        })
    }
    factory.getAll = function(cb){
        $http.get('/getAll').then(function(output){
            cb(output.data)
        })
    }
    factory.changeStatus = function(nerd){
        $http.post('/changeStatus', nerd).then(function(){
            $route.reload();
        })
    }
    factory.Like = function(nerd){
        console.log("like in fac")
        $http.post('/Like',nerd).then(function(){
            $route.reload();
        })
    }
    return factory
})