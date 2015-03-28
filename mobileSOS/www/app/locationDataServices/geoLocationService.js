(function(){

  angular
    .module('distress')
    .factory('GeoLocation', GeoLocation);

  GeoLocation.$inject = ['$rootScope', 'cordovaReady'];

  function GeoLocation($rootScope, cordovaReady){

    return {
      latitude: 0,
      longitude: 0,
      mapLink: '',

      getCurrentPosition: function (cb) {
        navigator.geolocation.getCurrentPosition(cb);

          // this.storeLocation.bind(this, cb));

        // function(position) {
        //   var that = this,

        //   if (onSuccess) {
        //     $rootScope.$apply(function () {
        //       onSuccess.apply(that, position);
        //       this.storeLocation.apply(that, [cb, position]);
        //     });

        //     // cb.apply(that, args);
        //   }
        // }, function () {
        //   var that = this,
        //     args = arguments;

        //   if (onError) {
        //     $rootScope.$apply(function () {
        //       onError.apply(that, args);
        //     });
        //   }
        // },
        // options);
      },

      storeLocation: function(cb, position) {
        alert('inside storeLocation, heres position object: ', position);
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.mapLink = 'http://maps.google.com/?q=' + this.latitude + ',' + this.longitude;
        cb(this.latitude, this.longitude);
      }

    };
  }

})();