/*
 * RFP Ads jQuery Plugin
 */

(function ( $ ) {

    // retrieve the file root so that other assets are loaded relative
    // to this script.
    function getFileRoot()
    {
        var r = '';
        var scripts = document.getElementsByTagName('script');
        if (scripts) {
            r = scripts[scripts.length-1].src;
            r = r.split('/');
            if (r) {
                r = r.slice(0,r.length-1).join('/') + '/';
            }
        }
        return r;
    }
    var FILE_ROOT = getFileRoot();

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
              'position': 'relative',
              'top': '200px',
              'max-width': '1200px',
              'margin': '0px auto'
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
        $('#rfp-ad-container').append($("<img src='" + settings.imageCancel + "'/>").css({
          'position': 'absolute',
          'top': '0px',
          'right': '0px',
          'width':  '6%',
          'display': 'block'
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
        hideDays: 0,
        destination: '',
        image12: FILE_ROOT + 'images/rfp12.jpg',
        image24: FILE_ROOT + 'images/rfp24.jpg',
        imageCancel: FILE_ROOT + 'images/cancel.png',
        cookieName: 'rfp-advertisements'
    };

}( jQuery ))
