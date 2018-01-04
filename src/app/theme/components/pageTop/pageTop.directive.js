/**
 * @author ohad
 * Created on 31.01.2017
 */
(function () {
  'use strict';

  angular.module('IntSite.theme.components')
         .directive('pageTop', pageTop);

  /** @ngInject */
  function pageTop() {
    return {
      restrict   : 'E',
      templateUrl: 'app/theme/components/pageTop/pageTop.html'
    };
  }

})();
