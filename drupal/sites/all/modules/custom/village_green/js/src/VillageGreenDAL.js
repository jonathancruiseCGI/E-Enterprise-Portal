(function($) {
    var VillageGreen = STI.namespace("VillageGreen");

    var VGD = (VillageGreen.VillageGreenDAL = function() {
            return {			                

                getDataForCurrentMinuteWelcomePage : function(siteID, callbackFn) {
                    jQuery.ajax({
                       url: VG.config.baseUrl + '/village_green/api/getDataForCurrentMinute?siteID=' + siteID,
                       complete: callbackFn,
                       dataType: 'json',
                       type: "POST"
                    });                          
                }

            };
    }());
}(jQuery));