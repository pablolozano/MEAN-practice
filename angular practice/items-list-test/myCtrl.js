app.controller('myCtrl', function($scope) {
  $scope.itemArr = ["cheese", "milk"];
  $scope.pushItem = function(){
    $scope.errortext = "";
    if (!$scope.tempItem) {return;}
    if ($scope.itemArr.indexOf($scope.tempItem) == -1) {
        $scope.itemArr.push($scope.tempItem);
    } else {
      $scope.errortext = "The item is already in your shopping list.";
    }
  }
  $scope.removeItem = function(index){
    $scope.itemArr.splice(index,1);
  }
});
