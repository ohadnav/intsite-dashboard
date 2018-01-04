/**
 * @author ohad
 * Created on 31.01.2017
 */
(function () {
  'use strict';

  angular.module('IntSite.theme.components')
         .directive('msgCenter', msgCenter);

  /** @ngInject */
  function msgCenter() {
    return {
      restrict   : 'E',
      templateUrl: 'app/theme/components/msgCenter/msgCenter.html',
      controller : 'MsgCenterCtrl'
    };
  }

})();
