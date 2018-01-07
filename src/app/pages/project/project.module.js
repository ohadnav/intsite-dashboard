/**
 * @author ohad
 * Created on 31.01.2017
 */
(function () {
  'use strict';

  angular.module('IntSite.pages.project', [])
         .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('project', {
        url        : '/project',
        templateUrl: 'app/pages/project/project.html',
        title      : 'Project',
        sidebarMeta: {
          icon : 'ion-settings',
          order: 0,
        },
      });
  }

})();
