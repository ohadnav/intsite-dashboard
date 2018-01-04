/**
 * @author ohad
 * Created on 31.01.2017
 */
(function () {
  'use strict';

  angular.module('IntSite.pages', [
    'ui.router',

    'IntSite.pages.dashboard',
    'IntSite.pages.autopilot',
    'IntSite.pages.driver',
    // 'IntSite.pages.ui',
    // 'IntSite.pages.components',
    // 'IntSite.pages.form',
    // 'IntSite.pages.tables',
    // 'IntSite.pages.charts',
    // 'IntSite.pages.maps',
    // 'IntSite.pages.profile',
  ])
         .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Pages',
    //   icon: 'ion-document',
    //   subMenu: [{
    //     title: 'Sign In',
    //     fixedHref: 'auth.html',
    //     blank: true
    //   }, {
    //     title: 'Sign Up',
    //     fixedHref: 'reg.html',
    //     blank: true
    //   }, {
    //     title: 'User Profile',
    //     stateRef: 'profile'
    //   }, {
    //     title: '404 Page',
    //     fixedHref: '404.html',
    //     blank: true
    //   }]
    // });
    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Menu Level 1',
    //   icon: 'ion-ios-more',
    //   subMenu: [{
    //     title: 'Menu Level 1.1',
    //     disabled: true
    //   }, {
    //     title: 'Menu Level 1.2',
    //     subMenu: [{
    //       title: 'Menu Level 1.2.1',
    //       disabled: true
    //     }]
    //   }]
    // });
  }

})();
