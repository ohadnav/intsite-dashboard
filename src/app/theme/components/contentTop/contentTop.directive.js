/**
 * @author ohad
 * Created on 31.01.2017
 */
(function () {
  'use strict';

  angular.module('BrainPal.theme.components')
         .directive('contentTop', contentTop);

  /** @ngInject */
  function contentTop($location, $state) {
    return {
      restrict   : 'E',
      templateUrl: 'app/theme/components/contentTop/contentTop.html',
      link       : function ($scope) {
        $scope.$watch(function () {
          $scope.activePageTitle = $state.current.title;
        });
      }
    };
  }

})();
