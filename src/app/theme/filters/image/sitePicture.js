/**
 * @author ohad
 * created on 17.12.2015
 */
(function () {
  'use strict';

  angular.module('IntSite.theme')
         .filter('sitePicture', sitePicture);

  /** @ngInject */
  function sitePicture(layoutPaths) {
    return function (input, ext) {
      ext = ext || 'jpg';
      return layoutPaths.images.site + input + '.' + ext;
    };
  }

})();
