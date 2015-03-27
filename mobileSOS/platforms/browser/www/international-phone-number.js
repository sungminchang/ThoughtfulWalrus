// Author Marek Pietrucha
// https://github.com/mareczek/international-phone-number

// Original lib from international-phone-number, however, the utilsScript directory was wrong
// in order for later deployment, remove the lib file here. Will submit pull request to the 
// repo to fix the issue.

(function() {
  "use strict";
  angular.module("internationalPhoneNumber", []).directive('internationalPhoneNumber', function() {
    return {
      restrict: 'A',
      require: '^ngModel',
      scope: true,
      link: function(scope, element, attrs, ctrl) {
        var handleWhatsSupposedToBeAnArray, options, read;
        read = function() {
          return ctrl.$setViewValue(element.val());
        };
        handleWhatsSupposedToBeAnArray = function(value) {
          if (typeof value === "object") {
            return value;
          } else {
            return value.toString().replace(/[ ]/g, '').split(',');
          }
        };
        options = {
          autoFormat: true,
          autoHideDialCode: true,
          defaultCountry: 'us',
          nationalMode: false,
          numberType: '',
          onlyCountries: void 0,
          preferredCountries: ['us', 'tw'],
          responsiveDropdown: false,
          utilsScript: "./lib/bower_components/intl-tel-input/lib/libphonenumber/build/utils.js"
        };
        angular.forEach(options, function(value, key) {
          var option;
          option = eval("attrs." + key);
          if (angular.isDefined(option)) {
            if (key === 'preferredCountries') {
              return options.preferredCountries = handleWhatsSupposedToBeAnArray(option);
            } else if (key === 'onlyCountries') {
              return options.onlyCountries = handleWhatsSupposedToBeAnArray(option);
            } else if (typeof value === "boolean") {
              return options[key] = option === "true";
            } else {
              return options[key] = option;
            }
          }
        });
        element.intlTelInput(options);
        if (!options.utilsScript) {
          element.intlTelInput('loadUtils', './lib/bower_components/intl-tel-input/lib/libphonenumber/build/utils.js');
        }
        ctrl.$parsers.push(function(value) {
          if (!value) {
            return value;
          }
          return value.replace(/[^\d]/g, '');
        });
        ctrl.$parsers.push(function(value) {
          if (value) {
            ctrl.$setValidity('international-phone-number', element.intlTelInput("isValidNumber"));
          } else {
            value = '';
            delete ctrl.$error['international-phone-number'];
          }
          return value;
        });
        element.on('blur keyup change', function(event) {
          return scope.$apply(read);
        });
        return element.on('$destroy', function() {
          return element.off('blur keyup change');
        });
      }
    };
  });

}).call(this);
