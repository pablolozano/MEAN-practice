app.directive("testDirective", function (){
  return{
    restrict : "C",
    template : "<h1 ng-click='changeCol()'>Click to change color</h1>"
  };
});
