/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('IntSite.pages.global')
      .controller('GlobalFeedCtrl', GlobalFeedCtrl);

  /** @ngInject */
  function GlobalFeedCtrl($scope) {
    $scope.feed = [
      {
        type: 'warning-message',
        site: 'new-york',
        displayName: 'Bank of America HQ',
        header: 'Resource delay',
        text: 'Safety level is low.',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'text-message',
        site: 'canada',
        displayName: 'Apartments Johnson & Johnson',
        header: 'Stage 1 completed',
        text: 'Starting first floor next week.',
        time: 'Today 9:30 pm',
        ago: '3 hrs ago',
        expanded: false,
      }, {
        type: 'text-message',
        site: 'new-york',
        displayName: 'Bank of America HQ',
        header: 'Stage completed',
        text: 'Design completed',
        time: 'Today 2:20 pm',
        ago: '10 hrs ago',
        expanded: false,
      }, {
        type: 'warning-message',
        site: 'paris',
        displayName: 'New Paris Town Hall',
        header: 'Legal issue',
        text: 'Building sketch disapproved.',
        time: 'Last week',
        ago: '2 days ago',
        expanded: false,
      }, {
        type: 'warning-message',
        displayName: 'Apartments Johnson & Johnson',
        site: 'canada',
        header: 'Resource delay',
        text: 'Digging delayed',
        time: 'Last week',
        ago: '2 days ago',
        expanded: false,
      }
    ];

    $scope.expandMessage = function(message){
      message.expanded = !message.expanded;
    }
  }
})();
