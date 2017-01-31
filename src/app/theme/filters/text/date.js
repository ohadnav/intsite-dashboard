/**
 * Proudly created by ohad on 29/01/2017.
 */
(function () {
  'use strict';

  angular.module('BrainPal.theme')
         .filter('timelineDate', dateFilter);

  /** @ngInject */
  function dateFilter() {
    return function(text) {
      if (text) {
        return  moment(text).format('MMM D');
      }
      return 'current';
    };
  }

})();
