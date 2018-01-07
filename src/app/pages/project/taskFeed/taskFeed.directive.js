/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('IntSite.pages.project')
      .directive('taskFeed', taskFeed);

  /** @ngInject */
  function taskFeed() {
    return {
      restrict: 'E',
      controller: 'TaskFeedCtrl',
      templateUrl: 'app/pages/project/taskFeed/taskFeed.html'
    };
  }
})();
