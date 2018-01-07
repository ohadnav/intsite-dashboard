/**
 * @author ohad
 * Created on 31.01.2017
 */
(function () {
  'use strict';

  angular.module('IntSite.pages.project')
         .controller('OutputChartCtrl', OutputChartCtrl);

  /** @ngInject */
  function OutputChartCtrl(baUtil, baConfig, $element, layoutPaths, $timeout) {
    var id        = $element[0].getAttribute('id');
    AmCharts.makeChart(id, {
      theme        : "light",
      type         : "serial",
      dataProvider : [
        {
          task: 'Framework',
          taskColor: '#28B463',
          completed: 80,
          remainder: 20,
        },
        {
          task: 'Reinforcement',
          taskColor: '#F4D03F',
          completed: 45,
          remainder: 55
        },
        {
          task: 'Concrete',
          taskColor: '#F1948A',
          completed: 15,
          remainder: 85
        },
        {
          task: 'Stripping',
          taskColor: '#CD6155',
          completed: 5,
          remainder: 95
        }
      ],
      graphs       : [
        {
          balloonText    : "[[category]]: <b>[[value]]%</b>",
          fillColorsField: 'taskColor',
          fillAlphas     : 1,
          lineAlpha      : 0,
          type           : "column",
          valueField     : "completed",
          topRadius: 1
        },
        {
          showBalloon: false,
          fillColors: '#dddddd',
          fillAlphas     : 1,
          lineAlpha      : 0,
          type           : "column",
          valueField     : "remainder",
          topRadius: 1
        }],
      depth3D: 40,
      angle: 10,
      chartCursor  : {
        categoryBalloonColor   : '#209e91',
        categoryBalloonAlpha   : 0.7,
        cursorAlpha            : 0,
        valueLineEnabled       : false,
        valueLineBalloonEnabled: true,
        valueLineAlpha         : 0.5,
        zoomable               : false
      },
      categoryField: "task",
      categoryAxis : {
        gridPosition : "start",
        labelRotation: 60
      },
      valueAxes    : [{
        stackType    : "regular",
        labelsEnabled: true,
        maximum: 100
      }],
      export       : {
        enabled: true
      },
      pathToImages : layoutPaths.images.amChart
    });
  }

  function depth3D() {
    if (window.innerWidth) {
      // Returns ~30 for MacBook Pro 15', and ~2 for iPhone 6.
      return Math.min(Math.max(Math.round(window.innerWidth / 150 + 2), 2), 10);
    }
    return 4;
  }

  function angle() {
    return 80;
  }
})();
