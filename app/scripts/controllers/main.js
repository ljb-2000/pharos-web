'use strict';

/**
 * @ngdoc function
 * @name pharosWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pharosWebApp
 */
angular.module('pharosWebApp')
  .controller('MainCtrl', ['$scope', '$log', 'pharosService',
  function($scope, $log, api) {
    $scope.requestNode = function(){
      $log.info('requestNode');
      api.node(function(data){
        $scope.nodes = data;
      });
    };
    $scope.requestNodeData = function(containerName){
      $log.info('reqeustNodeData', containerName);
      api.nodeData(containerName, function(data){
        $scope.nodeData = data;
      });
    };
    $scope.requestContainer = function(){
      $log.info('reqeustContainer');
      api.container(function(data){
        $scope.containers = data;
      });
    };
    $scope.requestContinaerName = function(containerName){
      $log.info('reqeustContainer', containerName);
      api.container(containerName, function(data){
        $scope.container = data;
      });
    };
    $scope.requestContinaerId = function(containerId){
      $log.info('reqeustContainer', containerId);
      api.container(containerId, function(data){
        $scope.nodeData = data;
      });
    };
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
