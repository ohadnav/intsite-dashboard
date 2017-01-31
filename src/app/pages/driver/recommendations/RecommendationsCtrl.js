/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.driver')
         .controller('RecommendationsCtrl', RecommendationsCtrl);

  /** @ngInject */
  function RecommendationsCtrl($scope, $timeout) {
    $scope.recommendations = [
      {
        state   : 'repeat',
        source  : 'google',
        analysis: 'Repeat visitors from Google ads spend 6 seconds less on deal offers. Use' +
                  ' dynamic content to engage them.',
        imgSrc  : 'dynamicAfter.gif'
      },
      {
        state  : 'new',
        source : 'facebook',
        showTop: true,
        analysis: 'Visitors from Facebook are 13% more likely to buy offers with favourable' +
                  ' reviews.',
        imgSrc  : 'reviewsAfter.jpg'
      },
      {
        showTop: true,
        analysis: 'The average user spends less than 7 seconds per offer, don\'t make them waste' +
                  ' them looking for a CTA.',
        imgSrc  : 'compactAfter.jpg'
      }];
    $timeout(function () {
      document.querySelectorAll('.driver-bg').forEach(function (img) {
        new Luminous(img, {sourceAttribute: 'src'});
        img.parentNode.querySelector('.driver-overlay')
           .addEventListener('click', function () {
             img.dispatchEvent(new Event('click'));
           });
        img.parentNode.querySelector('.driver-analysis')
           .addEventListener('click', function () {
             img.dispatchEvent(new Event('click'));
           });
      });

    }, 300);
  }
})();
