/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('IntSite.pages.global')
      .directive('controlMap', controlMap);

  /** @ngInject */
  function controlMap() {
    return {
      restrict: 'E',
      controller: 'ControlMapCtrl',
      templateUrl: 'app/pages/global/controlMap/controlMap.html'
    };
  }
})();
