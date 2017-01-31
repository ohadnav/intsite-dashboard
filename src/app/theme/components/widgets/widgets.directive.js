/**
 * @author ohad
 * Created on 31.01.2017
 */
(function () {
  'use strict';

  angular.module('BrainPal.theme.components')
         .directive('widgets', widgets);

  /** @ngInject */
  function widgets() {
    return {
      restrict   : 'EA',
      scope      : {
        ngModel: '='
      },
      templateUrl: 'app/theme/components/widgets/widgets.html',
      replace    : true
    };
  }

})();
