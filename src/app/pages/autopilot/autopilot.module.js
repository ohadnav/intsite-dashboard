/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BrainPal.pages.autopilot', [])
         .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('autopilot', {
        url        : '/autopilot',
        templateUrl: 'app/pages/autopilot/autopilot.html',
        title      : 'Autopilot',
        sidebarMeta: {
          icon : 'ion-jet',
          order: 50,
        },
      });
  }
})();
