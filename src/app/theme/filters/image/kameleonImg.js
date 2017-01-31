/**
 * @author ohad
 * created on 17.12.2015
 */
(function () {
  'use strict';

  angular.module('BrainPal.theme')
         .filter('kameleonImg', kameleonImg);

  /** @ngInject */
  function kameleonImg(layoutPaths) {
    return function (input) {
      return layoutPaths.images.root + 'theme/icon/kameleon/' + input + '.svg';
    };
  }

})();
