/**
 * @author ohad
 * Created on 31.01.2017
 */
(function () {
  'use strict';

  angular.module('BrainPal.theme')
         .directive('includeWithScope', includeWithScope);

  /** @ngInject */
  function includeWithScope() {
    return {
      restrict   : 'AE',
      templateUrl: function (ele, attrs) {
        return attrs.includeWithScope;
      }
    };
  }

})();
