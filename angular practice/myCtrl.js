app.run(function($rootScope){
  $rootScope.color = "blue";
});
app.controller('myCtrl', function($scope, $location, $http, $timeout) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
  $scope.myCol = "lightblue";
  $scope.color = "red";
  $scope.aux = "not timed out";
  $scope.loaded = false;
  $scope.myUrl = $location.absUrl();
  $scope.nameArr = [
    {fName:"john1",lName:"snow"},
    {fName:"john2",lName:"snow"},
    {fName:"john3",lName:"snow"}
  ];
  $scope.formText = "post@myweb.com";
  $scope.changeCol = function() {
    if($scope.myCol == "lightblue"){
      $scope.myCol = "green";
    }else{
      $scope.myCol = "lightblue";
    }
  }
  $scope.loadData = function(){
    $scope.loaded = !$scope.loaded;
    $http({
          method : "GET",
          url : "testingHTTP.html"
      }).then(function mySuccess(response) {
          $scope.myHTTPtest = response.data.records;
          $scope.statuscode = response.status;
          $scope.statustext = response.statustext;
      }, function myError(response) {
          $scope.myHTTPtest = response.statusText;
      });
  }
  $timeout(function () {
    $scope.aux = "timed out";
  }, 2000);
});
