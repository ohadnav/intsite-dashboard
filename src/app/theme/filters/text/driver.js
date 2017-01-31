/**
 * Proudly created by ohad on 30/01/2017.
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
         .filter('experimentLocale', locale);

  /** @ngInject */
  function locale() {
    return function (text) {
      return text || 'Worldwide';
    };
  }

  angular.module('BlurAdmin.theme')
         .filter('experimentSource', source);

  /** @ngInject */
  function source() {
    return function (text) {
      return text.replace(/\w+/g, function (w) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase();
      });
    };
  }

  angular.module('BlurAdmin.theme')
         .filter('experimentStateIcon', stateIcon);

  /** @ngInject */
  function stateIcon() {
    return function (state) {
      return (function () {
        switch (state) {
          case 'repeat':
            return 'refresh';
          case 'new':
            return 'user-plus';
        }
      })();
    };
  }

  angular.module('BlurAdmin.theme')
         .filter('experimentStateText', sourceText);

  /** @ngInject */
  function sourceText() {
    return function (state) {
      return (function () {
        switch (state) {
          case 'repeat':
            return 'Repeat visitors';
          case 'new':
            return 'First time visitors';
        }
      })();
    };
  }

})();