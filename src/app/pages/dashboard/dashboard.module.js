/**
 * @author ohad
 * Created on 31.01.2017
 */
(function () {
  'use strict';

  angular.module('BrainPal.pages.dashboard', [])
         .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url        : '/dashboard',
        templateUrl: 'app/pages/dashboard/dashboard.html',
        title      : 'Dashboard',
        sidebarMeta: {
          icon : 'ion-stats-bars',
          order: 0,
        },
      });
  }

})();
