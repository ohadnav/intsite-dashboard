/**
 * @author ohad
 * Created on 31.01.2017
 */
(function () {
  'use strict';

  angular.module('IntSite.pages.project')
         .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

  /** @ngInject */
  function DashboardPieChartCtrl($scope, $timeout, baConfig, baUtil) {
    var pieColor  = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    $scope.charts = [{
      color      : pieColor,
      description: 'Floors Today',
      stats      : baUtil.abbr(0.1),
      icon       : 'building',
    }, {
      color      : pieColor,
      description: 'Safety',
      stats      : 'low',
      icon       : 'helmet',
    },
    //   {
    //   color      : pieColor,
    //   description: 'Active Users',
    //   stats      : baUtil.abbr(57820),
    //   icon       : 'face',
    // }, {
    //   color      : pieColor,
    //   description: 'Return Users',
    //   stats      : baUtil.abbr(57820),
    //   icon       : 'refresh',
    // }
    ];

    function loadGauge(i, percent) {
      var customOptions = {
        value: percent
      };
      baUtil.loadGauge('pie-chart-' + i, customOptions);
    }

    $timeout(function () {
      loadGauge(0, 70);
    }, 500);
    $timeout(function () {
      loadGauge(1, 20);
    }, 800);
    $timeout(function () {
      loadGauge(2, 80);
    }, 1100);
    $timeout(function () {
      loadGauge(3, 60);
    }, 1400);
  }
})();
