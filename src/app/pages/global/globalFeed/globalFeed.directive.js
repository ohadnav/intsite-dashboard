/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('IntSite.pages.global')
      .directive('globalFeed', globalFeed);

  /** @ngInject */
  function globalFeed() {
    return {
      restrict: 'E',
      controller: 'GlobalFeedCtrl',
      templateUrl: 'app/pages/global/globalFeed/globalFeed.html'
    };
  }
})();
