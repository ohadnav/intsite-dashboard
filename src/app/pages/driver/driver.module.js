/**
 * @author v.lugovsky
 * created on 21.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.driver', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('driver', {
          url: '/driver',
          templateUrl: 'app/pages/driver/driver.html',
          title: 'Driver\'s Seat',
          sidebarMeta: {
            order: 100,
            icon: 'ion-model-s',
          },
        });
  }

})();
