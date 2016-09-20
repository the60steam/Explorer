// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('join', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .controller("joinController", function($scope) {

    $scope.data = {};

    $scope.userData = [];

    $scope.join = function() {
      window.location = "login.html";

      $scope.data["name"] = $scope.newName;
      $scope.data["usernames"] = $scope.newUsername;
      $scope.data["email"] = $scope.newEmail;
      $scope.data["password"] = $scope.newPassword;
      $scope.data["newusername"] = $scope.newPassword;

      JSON.stringify($scope.data);

      //code for connecting to database starts
      // "connect" to the database
      //var db = $.couch.db(nadi);
      // make our bulk insert object
      //var docs = $scope.data;

      // make the bulk commit
      //db.bulkSave(docs, {
      //  success: function(resp) {
      //  console.log("this is it ");
      //},
      //  error: function(resp, textStatus, errorThrown) {
      //  console.log("this is wrong");
      //  }
      //  });

      //code for connecting to database ends

      console.log($scope.data);

    }

  });
