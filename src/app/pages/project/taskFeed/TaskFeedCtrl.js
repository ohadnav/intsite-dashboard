/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('IntSite.pages.project')
         .controller('TaskFeedCtrl', TaskFeedCtrl);

  /** @ngInject */
  function TaskFeedCtrl($scope) {
    $scope.feed = [
      {
        type    : 'error',
        text    : 'Reinforcement delay risk completion of daily tasks.',
        time    : '11:10',
        icon    : 'ion-nuclear',
      }, {
        type    : 'warning',
        text    : 'Iron truck waiting for over 2 hours.',
        time    : '11:05',
        icon    : 'ion-alert-circled',
      }, {
        type    : 'info',
        text    : 'Reinforcement 11 completed.',
        time    : '10:34',
        icon    : 'ion-information-circled',
      }, {
        type    : 'info',
        text    : 'Framework 2 completed.',
        time    : '9:03',
        icon    : 'ion-information-circled',
      }, {
        type    : 'error',
        text    : 'Workers without helmets.',
        time    : '8:25',
        icon    : 'ion-nuclear',
      }, {
        type    : 'warning',
        text    : 'Concrete delivery delayed',
        time    : '8:07',
        icon    : 'ion-alert-circled',
      }
    ];

    $scope.expandMessage = function (message) {
      message.expanded = !message.expanded;
    }
  }
})();
