describe('RaffleCtrl', function() {
  var scope, $httpBackend, ctrl, entries;

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('rafflerApp'));

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    entries = [
        {name: "Shaan"},
        {name: "Shehzahn"},
        {name: "Harsh"}
    ]
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/entries').
      respond(entries);

    scope = $rootScope.$new();
    ctrl = $controller('RaffleCtrl', {$scope: scope});
  }));

  // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
  // This allows us to inject a service but then attach it to a variable
  // with the same name as the service in order to avoid a name conflict.
  it('should get entries', function() {
    // The responses are not returned until we call the $httpBackend.flush 
    $httpBackend.flush();
    expect(scope.entries).toEqualData(entries);
  });

});
