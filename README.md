
RFP Ads jQuery Plugin
======

This plugin makes it easy for RFP dealers to serve an advertisement for
funding with First Financial bank. On pages where you want the ad to appear,
reference the script as follows:

    <script src="https://cdn.rawgit.com/mrlowe/rfp_ads/master/rfpAdvertisements.js"></script>

Make sure this reference comes after your jQuery script reference.

Then initialize `rfpAdverisements` in `$(document).ready()` as follows:

    $(document).ready( function() {
        $(document).rfpAdvertisements({
            term: 24,
            hideDays: 7
        });
    });

To see a full example, consult the sample.html file in this folder.

## Options

#### term
The month term that should appear in the ad. Allowed values are 12 and 24. Default is 12.

#### destination
The url that should be shown when the user clicks the ad. By default, clicking will just hide the ad.

#### hideDays
The number of days before the advertisement should be shown again. Default is 7. A hideDays value of less than one will clear the current cookie.
