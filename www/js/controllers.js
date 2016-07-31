angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {



})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Information 1', id: 1 },
    { title: 'Information 2', id: 2 },
    { title: 'Information 3', id: 3 },
    { title: 'Information 4', id: 4 },
    { title: 'Information 5', id: 5 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
