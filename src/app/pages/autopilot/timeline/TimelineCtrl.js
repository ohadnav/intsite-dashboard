/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.autopilot')
         .controller('TimelineCtrl', TimelineCtrl);

  /** @ngInject */
  function TimelineCtrl($scope, $timeout) {
    $scope.experiments = [
      {
        colorClass : 'primary',
        icon       : 'Microscope',
        title      : 'Expose the CTA',
        uplift     : 5,
        description: 'Hidden CTA requires unnecessary extra action from the user and harm sales.',
        startDate  : '20160120',
        beforeSrc  : 'compactBefore.jpg',
        afterSrc   : 'compactAfter.jpg'
      },
      {
        colorClass : 'warning',
        icon       : 'Party-Poppers',
        title      : 'Dynamic Content',
        uplift     : 3,
        description: 'When the content is vivid the user is buying.',
        startDate  : '20160110',
        endDate  : '20160117',
        beforeSrc  : 'dynamicBefore.jpg',
        afterSrc   : 'dynamicAfter.gif'
      },
      {
        colorClass : 'danger',
        icon       : 'Boss-5',
        title      : 'Reviews',
        uplift     : 2,
        description: 'Reviews make your offer seem more trustworthy.',
        startDate  : '20160102',
        endDate  : '20160111',
        beforeSrc  : 'compactBefore.jpg',
        afterSrc   : 'reviewsAfter.jpg'
      }];
    function init() {
      var timelineBlocks = $('.cd-timeline-block'),
          offset         = 0.8;

      document.querySelectorAll('div.cd-timeline-block img.cd-img').forEach(function (img) {
        new Luminous(img, {sourceAttribute: 'src'});
        img.nextElementSibling.addEventListener('click', function () {
          img.dispatchEvent(new Event('click'));
        });
      });

      //hide timeline blocks which are outside the viewport
      hideBlocks(timelineBlocks, offset);
      showBlocks(timelineBlocks, offset);

      //on scolling, show/animate timeline blocks when enter the viewport
      $(window).on('scroll', function () {
        if (!window.requestAnimationFrame) {
          setTimeout(function () {
            showBlocks(timelineBlocks, offset);
          }, 100);
        } else {
          window.requestAnimationFrame(function () {
            showBlocks(timelineBlocks, offset);
          });
        }
      });

      function hideBlocks(blocks, offset) {
        blocks.each(function () {
          ( $(this).offset().top > $(window).scrollTop() + $(window).height() * offset ) &&
          $(this).find('.cd-timeline-icon, .cd-timeline-content').addClass('is-hidden');
        });
      }

      function showBlocks(blocks, offset) {
        blocks.each(function () {
          ( $(this).offset().top <= $(window).scrollTop() + $(window).height() * offset &&
          $(this).find('.cd-timeline-icon').hasClass('is-hidden') ) &&
          $(this).find('.cd-timeline-icon, .cd-timeline-content')
                 .removeClass('is-hidden')
                 .addClass('bounce-in');
        });
      }
    }

    $timeout(init, 300);
  }
})();
