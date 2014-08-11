angular.module("rafflerApp")
.controller('RaffleCtrl', function($scope){

  $scope.addEntry = function(){
    $scope.entries.push($scope.newEntry)
    $scope.newEntry = {}
  }

  $scope.entries = [
    {name: "Shaan"},
    {name: "Shehzahn"},
    {name: "Harsh"}
  ]

})
