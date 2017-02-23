app.controller('nerdController', function($scope, userFactory, nerdFactory){
    nerdFactory.getAll(function(data){
        $scope.all_nerds = data
        $scope.active =[]
        $scope.inactive = []
        for (var i = 0; i <$scope.all_nerds.length; i++){
            if ($scope.all_nerds[i].status == 'Active'){
                $scope.active.push($scope.all_nerds[i])
            }
            else{
                $scope.inactive.push($scope.all_nerds[i])
            }
        }
    })

    $scope.addNerd=function(){
        if (!$scope.newNerd|| !$scope.newNerd.name || !$scope.newNerd.power || $scope.newNerd.name.length<2 ){
            alert("All fields are mandatory! Name must be at least 2 characters")
        }
        else{
            $scope.newNerd.status = "Active"
            $scope.newNerd.likes = 0;
            nerdFactory.addNerd($scope.newNerd)
    }
        }
    
    $scope.changeStatus  = function(nerd){
        if(nerd.status=='Active'){
            nerd.status = 'Inactive'
        }
        else{
            nerd.status = "Active"
        }
        nerdFactory.changeStatus(nerd);
    }
    $scope.Like = function(nerd){
       if(!nerd.likes){
           nerd.likes = 1;
       }    
       else{
           nerd.likes = nerd.likes+1
       }
       console.log("literally the line above function call")
       nerdFactory.Like(nerd);
    }
    
})