/*
 * RFP Ads jQuery Plugin
 */

(function ( $ ) {

    function createCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        } else {
            value = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    $.fn.rfpAdvertisements = function( options ) {

        var settings = this.extend(
          this.rfpAdvertisements.defaults,
          options);

        var cookie = readCookie(settings.cookieName);
        if (cookie && settings.hideDays > 0) {
            return;
        } else {
            createCookie(settings.cookieName, '1', settings.hideDays);
        }

        // the only valid terms are 12 and 24 months
        var imageSource = (settings.term == 24) ? settings.image24 : settings.image12;

        $('body').append($("<div id='rfp-overlay'></div>").css({
            'position': 'fixed',
            'display': 'block',
            'width': '100%',
            'height': '100%',
            'top': '0',
            'left': '0',
            'right': '0',
            'bottom': '0',
            'background-color': 'rgba(0,0,0,0.8)',
            'z-index': '10000',
            'cursor': 'pointer'
        }));
        $('#rfp-overlay').click(function(){
            $('#rfp-overlay').hide();
        }).append($("<div id='rfp-ad-container'></div>")
            .css({
                'display': 'block',
                'margin': '200px auto',
                'max-width': '1200px',
                'height': 'auto',
                'background': 'white'
            }));
        $('#rfp-ad-container').click(function (event) {
            if (settings.destination) {
                event.stopPropagation();
                window.location = settings.destination;
            }
        }).append($("<img src='" + imageSource + "'/>").css({
            'display': 'block',
            'max-width': '100%'
        }));
        $('#rfp-ad-container').append($("<div id='rfp-cancel-container'></div>").css({
          'display': 'block',
          'position': 'absolute',
          'margin': '200px auto',
          'top': 0,
          'max-width': '1200px',
          'height': 'auto'
        }));
        $('#rfp-cancel-container').append($("<img src='" + settings.imageCancelBar + "'/>").css({
          'display': 'block',
          'max-width': '100%'
        }));
        $('#rfp-cancel-container').append($("<img src='" + settings.imageCancel + "'/>").css({
          'display': 'block',
          'position': 'absolute',
          'top': 0,
          'right': 0,
          'height': '100%',
          'color': 'white'
        }).click(function (event) {
          if (settings.destination) {
              event.stopPropagation();
              $('#rfp-overlay').hide();
          }
        }));

        return this;
    };

    $.fn.rfpAdvertisements.defaults = {
        term: 12,
        hideDays: 7,
        destination: '',
        image12: 'https://rawgit.com/mrlowe/rfp-ads/master/images/rfp12.jpg',
        image24: 'https://rawgit.com/mrlowe/rfp-ads/master/images/rfp24.jpg',
        imageCancelBar: 'images/cancel-bar.png',
        imageCancel: 'images/cancel.png',
        cookieName: 'rfp-advertisements'
    };

}( jQuery ))
