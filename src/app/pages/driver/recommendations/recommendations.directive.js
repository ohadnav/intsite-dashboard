/**
 * Proudly created by ohad on 24/01/2017.
 */
(function () {
  'use strict';

  angular.module('BrainPal.pages.driver')
         .directive('recommendations', recommendations);

  /** @ngInject */
  function recommendations() {
    return {
      restrict: 'E',
      controller: 'RecommendationsCtrl',
      templateUrl: 'app/pages/driver/recommendations/recommendations.html'
    };
  }
})();
