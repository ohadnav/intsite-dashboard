/**
 * @author ohad
 * Created on 31.01.2017
 */
(function () {
  'use strict';

  angular.module('IntSite.theme.components')
         .directive('backTop', backTop);

  /** @ngInject */
  function backTop() {
    return {
      restrict   : 'E',
      templateUrl: 'app/theme/components/backTop/backTop.html',
      controller : function () {
        $('#backTop').backTop({
                                'position': 200,
                                'speed'   : 100
                              });
      }
    };
  }

})();
