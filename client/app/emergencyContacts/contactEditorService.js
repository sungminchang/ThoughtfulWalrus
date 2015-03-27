(function(){

  angular
    .module('distress')
    .factory('ContactEditor', ContactEditor);

  ContactEditor.$inject = ['$http', 'baseURL'];

  function ContactEditor($http, baseURL){

    var instance = {
      addContact: addContact,
      updateContact: updateContact,
      getContacts: getContacts,
      deleteContact: deleteContact
    };

    return instance;

    ////// IMPLEMENTATION ///////

    function addContact(contact){
      return $http({
        method: 'POST',
        url: baseURL + '/user/addContact',
        data: {contact: contact}
      });
    }

    function updateContact(contact){
      return $http({
        method: 'POST',
        url: baseURL + '/user/updateContact',
        data: {contact: contact}
      });
    }

    function deleteContact(contact){
      return $http({
        method: 'POST',
        url: baseURL + '/user/deleteContact',
        data: {contact: contact}
      });
    }

    function getContacts(){
      return $http({
        method: 'GET',
        url: baseURL + '/user/getContacts'
      }).then(function (resp) {
        return resp.data;
      });
    }
  }
})();

