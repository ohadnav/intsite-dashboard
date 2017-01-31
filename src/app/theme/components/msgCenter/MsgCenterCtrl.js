/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BrainPal.theme.components')
         .controller('MsgCenterCtrl', MsgCenterCtrl);

  /** @ngInject */
  function MsgCenterCtrl($scope, $sce) {
    $scope.users = {
      0: {
        name: 'Vlad',
      },
      1: {
        name: 'Kostya',
      },
      2: {
        name: 'Andrey',
      },
      3: {
        name: 'Nasta',
      }
    };

    $scope.notifications = [
      // {
      //   userId: 0,
      //   template: '&name posted a new article.',
      //   time: '1 min ago'
      // },
      // {
      //   userId: 1,
      //   template: '&name changed his contact information.',
      //   time: '2 hrs ago'
      // },
      {
        image   : 'assets/img/shopping-cart.svg',
        template: 'New record for purchases per day.',
        time    : '5 hrs ago'
      },
      // {
      //   userId: 2,
      //   template: '&name replied to your comment.',
      //   time: '1 day ago'
      // },
      // {
      //   userId: 3,
      //   template: 'Today is &name\'s birthday.',
      //   time: '2 days ago'
      // },
      {
        image   : 'assets/img/arrow-green-up.svg',
        template: 'New experiment launched.',
        time    : '3 days ago'
      },
      // {
      //   userId: 1,
      //   template: '&name invited you to join the event.',
      //   time: '1 week ago'
      // }
    ];

    $scope.messages = [
      {
        userId: 3,
        text  : 'Experiment awaits your approval.',
        time  : '1 min ago'
      },
      // {
      //   userId: 0,
      //   text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
      //   time: '2 hrs ago'
      // },
      {
        userId: 1,
        text  : 'Need help setting BrainPal up?',
        time  : '10 hrs ago'
      },
      {
        userId: 3,
        text  : 'Weekly summary awaiting in your mailbox.',
        time  : '1 day ago'
      },
      // {
      //   userId: 3,
      //   text: 'Get to know who we are - from the inside out. From our history and culture, to
      // the...', time: '1 day ago' }, { userId: 1, text: 'Need some support to reach your goals?
      // Apply for scholarships across a variety of...', time: '2 days ago' }, { userId: 0, text:
      // 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...', time: '1
      // week ago' }
    ];

    $scope.getMessage = function (msg) {
      var text = msg.template;
      if (msg.userId || msg.userId === 0) {
        text = text.replace('&name', '<strong>' + $scope.users[msg.userId].name + '</strong>');
      }
      return $sce.trustAsHtml(text);
    };
  }
})();
