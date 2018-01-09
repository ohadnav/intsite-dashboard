/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('IntSite.pages.global')
         .controller('ControlMapCtrl', ControlMapCtrl);

  /** @ngInject */
  function ControlMapCtrl(baConfig, layoutPaths) {
    /**
     * Define SVG path for target icon
     */
    var targetSVG    = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
    var layoutColors = baConfig.colors;
    var map          = AmCharts.makeChart('amChartMap', {
      type         : "map",
      theme        : "none",
      projection   : "miller",
      zoomControl  : {
        zoomControlEnabled: true,
        panControlEnabled : false
      },
      imagesSettings: {
        rollOverColor: "#089282",
        rollOverScale: 3,
        selectedScale: 3,
        selectedColor: "#089282",
        color: "#13564e",
      },
      dataProvider : {
        map            : "worldLow",
        getAreasFromMap: true,
        images         : [
          {
            svgPath  : targetSVG,
            zoomLevel: 5,
            scale    : 0.5,
            title    : "Washington tower",
            latitude : 38.8921,
            longitude: -77.0241
          },
          {
            svgPath  : targetSVG,
            zoomLevel: 5,
            scale    : 0.5,
            title    : "London theatre tower",
            latitude : 51.5002,
            longitude: -0.1262
          },
          {
            svgPath  : targetSVG,
            zoomLevel: 5,
            scale    : 0.5,
            title    : "Johnson & Johnson",
            latitude : 45.4235,
            longitude: -75.6979
          },
          {
            svgPath  : targetSVG,
            zoomLevel: 5,
            scale    : 0.5,
            title    : "Berlin Police",
            latitude : 52.5235,
            longitude: 13.4115
          },
          {
            svgPath  : targetSVG,
            zoomLevel: 5,
            scale    : 0.5,
            title    : "Los Angeles tower",
            latitude : 34.05,
            longitude: -118.24
          },
          {
            svgPath  : targetSVG,
            zoomLevel: 5,
            scale    : 0.8,
            title    : "Bank of America",
            latitude : 40.71,
            longitude: -74.00,
            rollOverColor: "#e85656",
            selectedColor: "#e85656",
            color: "#af1717"
          },
          {
            svgPath  : targetSVG,
            zoomLevel: 5,
            scale    : 0.8,
            title    : "Paris hotel",
            latitude : 48.8567,
            longitude: 2.3510,
            rollOverColor: "#e85656",
            selectedColor: "#e85656",
            color: "#af1717"
          }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "Vienna Tower",
            latitude: 48.2092,
            longitude: 16.3728
          }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "Sofia Business Center",
            latitude: 42.7105,
            longitude: 23.3238
          }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "Athens Embassy",
            latitude: 37.9792,
            longitude: 23.7166
          }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "Dublin Tower",
            latitude: 53.3441,
            longitude: -6.2675
          }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "Rome Chruch",
            latitude: 41.8955,
            longitude: 12.4823
          }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "Luxembourg Bank",
            latitude: 49.6100,
            longitude: 6.1296
          }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "Amsterdam Trading Center",
            latitude: 52.3738,
            longitude: 4.8910
          }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "Jerusalem US Embassy",
            latitude: 31.76,
            longitude: 35.17
          }]
      },
      areasSettings: {
        autoZoom     : true,
        color        : "#bdf1ec",
        selectedColor: "#209e91",
        rollOverOutlineColor: "#209e91"
      },
      smallMap     : {},
      export       : {
        enabled : true,
        position: "bottom-right"
      },
      pathToImages : layoutPaths.images.amChart
    });

  }
})();
