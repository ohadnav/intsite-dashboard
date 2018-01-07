/**
 * Proudly created by ohad on 24/01/2017.
 */
(function () {
  'use strict';

  angular.module('IntSite.pages.global')
         .directive('recommendations', recommendations);

  /** @ngInject */
  function recommendations() {
    return {
      restrict   : 'E',
      controller : 'RecommendationsCtrl',
      templateUrl: 'app/pages/global/recommendations/recommendations.html'
    };
  }
})();
