/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BrainPal.pages.dashboard')
         .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

  /** @ngInject */
  function DashboardPieChartCtrl($scope, $timeout, baConfig, baUtil) {
    var pieColor  = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    $scope.charts = [{
      color      : pieColor,
      description: 'New Visits',
      stats      : baUtil.abbr(57820),
      icon       : 'person',
    }, {
      color      : pieColor,
      description: 'Purchases',
      stats      : '$' + baUtil.abbr(57820),
      icon       : 'money',
    }, {
      color      : pieColor,
      description: 'Active Users',
      stats      : baUtil.abbr(57820),
      icon       : 'face',
    }, {
      color      : pieColor,
      description: 'Return Users',
      stats      : baUtil.abbr(57820),
      icon       : 'refresh',
    }];

    function loadGauge(i) {
      var customOptions = {
        value: 9 * (5 - i)
      };
      baUtil.loadGauge('pie-chart-' + i, customOptions);
    }

    $timeout(function () {
      loadGauge(0);
    }, 500);
    $timeout(function () {
      loadGauge(1);
    }, 800);
    $timeout(function () {
      loadGauge(2);
    }, 1100);
    $timeout(function () {
      loadGauge(3);
    }, 1400);
  }
})();
