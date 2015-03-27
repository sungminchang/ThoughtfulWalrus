(function(){

  angular
    .module('distress')
    .factory('DistressButton', DistressButton);

  DistressButton.$inject = ['$http', '$state', 'baseURL'];

  function DistressButton($http, $state, baseURL){

    var instance = {
      sendDistress: sendDistress
    };

    return instance;

    ///// IMPLEMENTATION /////

    //sends username to server, which will grab
    //the contactList from the database and send the
    //messages.
    function sendDistress(latitude, longitude, mapLink, dateTime){
      return $http({
        method: 'POST',
        url: baseURL + '/sms/text/',
        data: {latitude: latitude, 
               longitude: longitude, 
               mapLink: mapLink, 
               timeOfDistress: dateTime}
      });
    }
  }
})();