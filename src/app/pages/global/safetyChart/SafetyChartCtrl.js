/**
 * @author ohad
 * Created on 31.01.2017
 */
(function () {
  'use strict';

  angular.module('IntSite.pages.global')
         .controller('SafetyChartCtrl', SafetyChartCtrl);

  /** @ngInject */
  function SafetyChartCtrl(baUtil, baConfig, $element, layoutPaths, $timeout) {
    var id        = $element[0].getAttribute('id');
    var safetyChart;
    var chartData = dataProvider();
    var createFn  = function () {
      safetyChart = AmCharts.makeChart(id, {
        theme           : 'light',
        type            : 'serial',
        dataProvider    : chartData,
        marginRight     : 40,
        marginLeft      : 40,
        autoMarginOffset: 20,
        dataDateFormat  : 'YYYY-MM-DD',
        valueAxes       : [{
          id             : 'v1',
          axisAlpha      : 0,
          position       : 'left',
          ignoreAxisWidth: true,
          precision      : 0,
          maximum        : 10,
          minimum        : 0
        }],
        balloon         : {
          borderThickness: 1,
          shadowAlpha    : 0
        },
        graphs          : [{
          id                         : 'g1',
          balloon                    : {
            drop             : true,
            adjustBorderColor: false,
          },
          bullet                     : 'round',
          bulletBorderAlpha          : 1,
          bulletSize                 : 10,
          hideBulletsCount           : 50,
          lineThickness              : 1,
          useLineColorAsBulletColor: true,
          valueField                 : 'value',
          balloonText                : '[[category]]: <b>[[value]]</b>'
        }],
        chartCursor     : {
          pan                    : true,
          valueLineEnabled       : true,
          valueLineBalloonEnabled: true,
          cursorAlpha            : 1,
          cursorColor            : '#209e91',
          limitToGraph           : 'g1',
          valueLineAlpha         : 0.2,
        },
        categoryField   : 'date',
        categoryAxis    : {
          parseDates      : true,
          dashLength      : 1,
          minorGridEnabled: true
        },
        export          : {
          enabled: true
        },
        pathToImages    : layoutPaths.images.amChart
      });
    };
    createFn();

    // Returns ~15 for MacBook Pro 15', and ~10 for iPhone 6.
    function numDays() {
      if (window.innerWidth) {
        return Math.max(Math.round(window.innerWidth / 120 + 4), 7);
      }
      return 10;
    }

    function dataProvider() {
      var data = [];
      for (var i = 0; i < numDays(); i++) {
        var score = Math.round((1 - Math.random() * Math.random()) * 10);
        if (moment().add(i - numDays(), 'days').format('dddd') === 'Sunday' || moment().add(i - numDays(), 'days').format('dddd') === 'Saturday') {
          score = 0;
        }
        data.push({
                    date      : moment().add(i - numDays(), 'days').format('YYYY-MM-DD'),
                    value     : score,
                    valueColor: bulletColor(score / 10.0)
                  })
      }
      return data;
    }

    function bulletColor(scale) {
      var red = '#ce3311';
      var yellow = '#FFFF33';
      var green = '#04D215';
      var lowHex  = red;
      var highHex = yellow;
      if (scale > 0.5) {
        lowHex = yellow;
        highHex = green;
      }
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
  }

})();
