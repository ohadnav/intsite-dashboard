/**
 * Proudly created by ohad on 29/01/2017.
 */
(function () {
  'use strict';

  angular.module('IntSite.theme')
         .filter('experimentBefore', beforeImage);

  /** @ngInject */
  function beforeImage(layoutPaths) {
    return function (input) {
      input = input || 'defaultBefore.jpg';
      return layoutPaths.images.experiments + input;
    };
  }

  angular.module('IntSite.theme')
         .filter('experimentAfter', afterImage);

  /** @ngInject */
  function afterImage(layoutPaths) {
    return function (input) {
      input = input || 'defaultAfter.jpg';
      return layoutPaths.images.experiments + input;
    };
  }

})();
