angular.module("rafflerApp")
.controller('RaffleCtrl', function($scope, $resource){

  var Entry = $resource("/entries/:id", {id: "@id"}, {update: {method: "PATCH"}})

  $scope.entries = Entry.query(function(data) {
    // success handler
  }, function(error) {
      // error handler
     $scope.state = "error";
  });

  $scope.addEntry = function(){
    entry = Entry.save($scope.newEntry)
    $scope.entries.push(entry)
    $scope.newEntry = {}
  }

})
