/**
 * @author ohad
 * Created on 31.01.2017
 */
(function () {
  'use strict';

  angular.module('IntSite.pages.project')
         .directive('dashboardPieChart', dashboardPieChart);

  /** @ngInject */
  function dashboardPieChart() {
    return {
      restrict   : 'E',
      controller : 'DashboardPieChartCtrl',
      templateUrl: 'app/pages/project/dashboardPieChart/dashboardPieChart.html'
    };
  }
})();
