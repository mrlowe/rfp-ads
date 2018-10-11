
RFP Ads jQuery Plugin
======

This plugin makes it easy for RFP dealers to serve an advertisement for
funding with First Financial bank. On pages where you want the ad to appear,
reference the rfp scripts as follows:

    <script src="https://cdn.rawgit.com/mrlowe/rfp-ads/master/rfpAdvertisements.js"></script>
    <script src="https://cdn.rawgit.com/mrlowe/rfp-ads/master/rfpUseDefaults.js"></script>

Make sure this reference comes after your jQuery script reference.

## Customizing

If you want to change the default values, then **omit** the `rfpDefaults.js` script
and initialize `rfpAdvertisements` in `$(document).ready()` as follows:

    $(document).ready( function() {
        $(document).rfpAdvertisements({
            term: 24,
            hideDays: 7
        });
    });

To see a full example, consult the sample.html file in this folder. (Note that
most browsers won't save a cookie for a filesystem URL, so the ad-hiding
functionality may not work.)

## Options

#### term
The month term that should appear in the ad. Allowed values are 12 and 24. Default is 12.

#### destination
The url that should be shown when the user clicks the ad. By default, clicking will just hide the ad.

#### hideDays
The number of days before the advertisement should be shown again. Default is 7.
A hideDays value of less than one will clear the current cookie.

## Contact Us
If you need help with this plugin, please contact us at (325) 627-7273 or rfpcustomerservice@ffin.com. You can find [a full list of financing options here](https://mrlowe.github.io/rfp-ads/).
