/**
 * Proudly created by ohad on 24/01/2017.
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.autopilot')
         .directive('timeline', timeline);

  /** @ngInject */
  function timeline() {
    return {
      restrict: 'E',
      controller: 'TimelineCtrl',
      templateUrl: 'app/pages/autopilot/timeline/timeline.html'
    };
  }
})();
