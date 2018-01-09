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
        type    : 'info',
        text    : 'Reinforcement back on track.',
        time    : '10:42',
        icon    : 'ion-information',
      }, {
        type    : 'warning',
        text    : 'Reinforcement delay - concrete pour at risk.',
        time    : '10:17',
        icon    : 'ion-alert',
      }, {
        type    : 'success',
        text    : 'Framework stripping completed.',
        time    : '9:57',
        icon    : 'ion-checkmark-round',
      }, {
        type    : 'error',
        text    : 'Crane load fall.',
        time    : '9:28',
        icon    : 'ion-nuclear',
      }, {
        type    : 'info',
        text    : 'Framework started on floor 16.',
        time    : '8:52',
        icon    : 'ion-information',
      }, {
        type    : 'info',
        text    : 'Framework stripping have started',
        time    : '8:07',
        icon    : 'ion-information',
      }
    ];

    $scope.expandMessage = function (message) {
      message.expanded = !message.expanded;
    }
  }
})();
