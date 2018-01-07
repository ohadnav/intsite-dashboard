/**
 * @author ohad
 * created on 21.12.2015
 */
(function () {
  'use strict';

  angular.module('IntSite.pages.global', [])
         .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('driver', {
        url        : '/global',
        templateUrl: 'app/pages/global/global.html',
        title      : 'Global',
        sidebarMeta: {
          order: 10,
          icon : 'ion-earth',
        },
      });
  }

})();
