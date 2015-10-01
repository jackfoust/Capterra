/**
 * @file
 * Enables Capterra conversion tracking.
 */

(function ($) {
  'use strict';
  Drupal.behaviors.capterra = {
    attach: function (context, settings) {
      var capterra_vkey = Drupal.settings.capterra.capterra_vkey;
      var capterra_vid = Drupal.settings.capterra.capterra_vid;
      var capterra_prefix = ((document.location.protocol === 'https:') ? 'https://ct.capterra.com' : 'http://ct.capterra.com');
      (function () {
        var ct = document.createElement('script'); ct.type = 'text/javascript'; ct.async = true;
        ct.src = capterra_prefix + '/capterra_tracker.js?vid=' + capterra_vid + '&vkey=' + capterra_vkey;
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ct, s);
      })();
    }
  };
})(jQuery);
