/**
 * @author ohad
 * Created on 31.01.2017
 */
(function () {
  'use strict';

  angular.module('IntSite.pages.global')
         .controller('FloorsChartCtrl', FloorsChartCtrl);

  /** @ngInject */
  function FloorsChartCtrl(baUtil, baConfig, $element, layoutPaths, $timeout) {
    var isNarrow  = window.innerWidth && window.innerWidth < 600;
    var id        = $element[0].getAttribute('id');
    var upliftChart;
    var chartData = dataProvider();
    var createFn  = function () {
      upliftChart = AmCharts.makeChart(id, {
        theme        : "light",
        type         : "serial",
        dataProvider : chartData,
        graphs       : [
          {
            balloonText    : "[[category]]: <b>[[value]]</b>",
            fillColorsField: 'revenueColor',
            fillAlphas     : 1,
            lineAlpha      : 0,
            type           : "column",
            valueField     : "revenue"
          },
          {
            balloonText    : "<i class='ion-arrow-up-c'></i> Uplift: <b>[[value]]</b>",
            fillColorsField: 'upliftColor',
            fillAlphas     : 1,
            lineAlpha      : 0,
            type           : "column",
            valueField     : "uplift"
          }],
        depth3D      : depth3D(),
        angle        : angle(),
        chartCursor  : {
          categoryBalloonColor   : '#209e91',
          categoryBalloonAlpha   : 0.7,
          cursorAlpha            : 0,
          valueLineEnabled       : false,
          valueLineBalloonEnabled: true,
          valueLineAlpha         : 0.5,
          zoomable               : false
        },
        categoryField: "date",
        categoryAxis : {
          gridPosition : "start",
          labelRotation: 60
        },
        valueAxes    : [{
          stackType    : "regular",
          labelsEnabled: !isNarrow
          // axisAlpha: 0.3,
          // gridAlpha: 0
        }],
        export       : {
          enabled: true
        },
        pathToImages : layoutPaths.images.amChart
      });
      // upliftChart.zoomToIndexes(chartData.length - numDays(), chartData.length - 1);
    };
    // baUtil.onEnterViewport($element[0], createFn, function () {
    //   $timeout(createFn, 2000);
    // });
    createFn();

    function depth3D() {
      if (window.innerWidth) {
        return Math.min(Math.max(Math.round(window.innerWidth / 150 + 2), 2), 10);
      }
      return 4;
    }

    function angle() {
      if (window.innerWidth) {
        return Math.min(Math.max(Math.round(window.innerWidth / 112 + 67), 70), 80);
      }
      return 80;
    }

    // Returns ~30 for MacBook Pro 15', and ~10 for iPhone 6.
    function numDays() {
      if (window.innerWidth) {
        return Math.max(Math.round(window.innerWidth / 60 + 4), 7);
      }
      return 10;
    }

    function dataProvider() {
      var data = [];
      for (var i = 0; i < numDays(); i++) {
        var uplift = 0.5 + truncateFloat(Math.random() / 5);
        var pace = 4 + truncateFloat(Math.random() / 2);
        if (moment().add(i - numDays(), 'days').format('dddd') === 'Sunday' || moment().add(i - numDays(), 'days').format('dddd') === 'Saturday') {
          uplift = 0;
          pace = 0;
        }
        data.push({
                    date        : moment().add(i - numDays(), 'days').format('MMM D'),
                    revenue     : pace,
                    revenueColor: '#bbb',
                    uplift      : Math.max(uplift, 0),
                    upliftColor : upliftColor(Math.min(Math.max(uplift / 0.1, 0), 1))
                  });
      }
      return data;
    }

    function upliftColor(scale) {
      var lowHex  = '#FFFF33';
      var highHex = '#04D215';
      var r       = (Math.round((1 - scale) * parseInt(lowHex.slice(1, 3), 16) +
                                scale * parseInt(highHex.slice(1, 3), 16))).toString(16);
      if (r.length === 1) r = '0' + r;
      var g = (Math.round((1 - scale) * parseInt(lowHex.slice(3, 5), 16) +
                          scale * parseInt(highHex.slice(3, 5), 16))).toString(16);
      if (g.length === 1) g = '0' + g;
      var b = (Math.round((1 - scale) * parseInt(lowHex.slice(5, 7), 16) +
                          scale * parseInt(highHex.slice(5, 7), 16))).toString(16);
      if (b.length === 1) b = '0' + b;
      return '#' + r.toString(16) + g.toString(16) + b.toString(16);
    }

    function truncateFloat(f) {
      return Math.round(f * 100) / 100.0;
    }
  }

})();
