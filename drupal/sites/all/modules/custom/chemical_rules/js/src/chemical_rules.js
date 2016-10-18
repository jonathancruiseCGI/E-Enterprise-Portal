function showElementOutOfMany($wrapper_to_show, $common_selector) {
  $common_selector.hide();
  $wrapper_to_show.show();
  resizeModal()
}

function resizeModal() {
  jQuery('#chemical-rules-modal').dialog({
    position: { 'my': 'center', 'at': 'center' }
  });
  if(jQuery('.chemical-rules-modal').css('top').replace('px', '') < 1){
    jQuery('.chemical-rules-modal').css('top', 0)
  }
}

function checkValues(previous, current, cIndex, keys) {
  var previousKeys = [];
  if(typeof previous[keys[cIndex]] == 'object'){
    previousKeys = Object.keys(previous[keys[cIndex]])
  }

  if ((previousKeys.indexOf('Value') > -1 && previous[keys[cIndex]].Value == "")) {
    delete previous[keys[cIndex]];
  }
  else if (['object'].indexOf(typeof previous[keys[cIndex]]) > -1) {
    previous[keys[cIndex]] = previousKeys.reduce(checkValues, previous[keys[cIndex]])
    if (Object.keys(previous[keys[cIndex]]).length == 0) {
      delete previous[keys[cIndex]];
    }
  }
  return previous
}

var sampleData = function() {};

/**
 * Clear form inputs and hide warning messages
 */
function resetCRForm() {
  var $form = $('#cr-search');
  //$form.find('input[type=text]').val('');
  $form.val('');
}

(function($) {
  var $cr_tabs = $('#cr-tabs').tabs();
  var sampleSetIndex = 0;
  /*sampleData =  function(sample) {
    // lets us cycle through different sets of test data
    if(!sample) {
      // different handy test cases
      sampleSet = [{"CityName":"Anonymous","RoutineContaminants":{"As":{"Symbol":"As","Name":"Arsenic","Value":".009","Unit":"mg/L"},"Cl":{"Symbol":"Cl","Name":"Chloride","Value":"5.2","Unit":"mg/L"},"Cu":{"Symbol":"Cu","Name":"Copper","Value":".104","Unit":"mg/L"},"CuSt":{"Symbol":"CuSt","Name":"Copper, Stagnant","Value":".636","Unit":"mg/L"},"Fl":{"Symbol":"Fl","Name":"Fluoride","Value":".8","Unit":"mg/L"},"Har":{"Symbol":"Har","Name":"Hardness as CaCO3","Value":"34.1","Unit":"mg/L"},"Fe":{"Symbol":"Fe","Name":"Iron","Value":"0","Unit":"mg/L"},"Pb":{"Symbol":"Pb","Name":"Lead","Value":"0","Unit":"mg/L"},"PbSt":{"Symbol":"PbSt","Name":"Lead, Stagnant","Value":".010","Unit":"mg/L"},"Mn":{"Symbol":"Mn","Name":"Manganese","Value":"0","Unit":"mg/L"},"NO3":{"Symbol":"NO3","Name":"Nitrate-N","Value":".99","Unit":"mg/L"},"NO2":{"Symbol":"NO2","Name":"Nitrite-N","Value":"0","Unit":"mg/L"},"ph":{"Symbol":"ph","Name":"pH","Value":"6.62","Unit":"units"},"Na":{"Symbol":"Na","Name":"Sodium","Value":"9.24","Unit":"mg/L"}},"Bac_G":"rdb_Bac_False","Ecoli_G":"rdb_Ecoli_False","RadionuclideContaminants":{"Rn":{"Symbol":"Rn","Name":"Radon","Value":"2194","Unit":"pCi/L"},"U":{"Symbol":"U","Name":"Uranium","Value":"8","Unit":"μg/L"},"AGA":{"Symbol":"AGA","Name":"Gross Alpha","Value":"7.3","Unit":"pCi/L"}}},
        { "CityName":"Anonymous", "RoutineContaminants":{ "As": { "Symbol":"As", "Name": "Arsenic", "Value": "1234", "Unit": "mg/L"}, "Cl": { "Symbol":"Cl", "Name": "Chloride", "Value": "1234", "Unit": "mg/L"}, "Cu": { "Symbol":"Cu", "Name": "Copper", "Value": "1234", "Unit": "mg/L"}, "CuSt":{ "Symbol": "CuSt", "Name": "Copper, Stagnant", "Value": "1234", "Unit": "mg/L"}, "Fl": { "Symbol":"Fl", "Name": "Fluoride", "Value": "1234", "Unit": "mg/L"}, "Har": { "Symbol": "Har", "Name": "Hardness as CaCO3", "Value": "1234", "Unit": "mg/L"}, "Fe": { "Symbol":"Fe", "Name": "Iron", "Value": "1234", "Unit": "mg/L"}, "Pb": { "Symbol":"Pb", "Name": "Lead", "Value": "1234", "Unit": "mg/L"}, "PbSt":{ "Symbol": "PbSt", "Name": "Lead, Stagnant", "Value": "1234", "Unit": "mg/L"}, "Mn": { "Symbol":"Mn", "Name": "Manganese", "Value": "1234", "Unit": "mg/L"}, "NO3": { "Symbol": "NO3", "Name": "Nitrate-N", "Value": "1234", "Unit": "mg/L"}, "NO2": { "Symbol": "NO2", "Name": "Nitrite-N", "Value": "1234", "Unit": "mg/L"}, "ph": { "Symbol":"ph", "Name": "pH", "Value": "6.1", "Unit": "units"}, "Na": { "Symbol":"Na", "Name": "Sodium", "Value": "1234", "Unit": "mg/L"}}, "BacterialContaminants":{ "Bac": { "Symbol":"Bac", "Name": "Total Coliform", "Value": "1234", "Unit": "CFU/100 mL"}, "Ecoli":{ "Symbol": "Ecoli", "Name": "E. Coli", "Value": "1234", "Unit": "CFU/100 mL"}}, "Bac_G":"rdb_Bac_True", "Ecoli_G":"rdb_Ecoli_True", "RadionuclideContaminants":{ "Rn": { "Symbol":"Rn", "Name": "Radon", "Value": "1234", "Unit": "pCi/L"}, "Ur": { "Symbol":"Ur", "Name": "Uranium", "Value": "1234", "Unit": "μg/L"}, "AGA": { "Symbol": "AGA", "Name": "Gross Alpha", "Value": "1234", "Unit": "pCi/L"}}},
        {"CityName":"Anonymous","RoutineContaminants":{"As":{"Symbol":"As","Name":"Arsenic","Value":"1234","Unit":"mg/L"},"Cl":{"Symbol":"Cl","Name":"Chloride","Value":"1234","Unit":"mg/L"},"Har":{"Symbol":"Har","Name":"Hardness as CaCO3","Value":"1234","Unit":"mg/L"}}},
        {"CityName":"Anonymous","RoutineContaminants":{"As":{"Symbol":"As","Name":"Arsenic","Value":"1234","Unit":"mg/L"},"Cl":{"Symbol":"Cl","Name":"Chloride","Value":"1234","Unit":"mg/L"},"Cu":{"Symbol":"Cu","Name":"Copper","Value":"1234","Unit":"mg/L"},"CuSt":{"Symbol":"CuSt","Name":"Copper, Stagnant","Value":"1234","Unit":"mg/L"},"Fl":{"Symbol":"Fl","Name":"Fluoride","Value":"1234","Unit":"mg/L"},"Har":{"Symbol":"Har","Name":"Hardness as CaCO3","Value":"1234","Unit":"mg/L"},"Fe":{"Symbol":"Fe","Name":"Iron","Value":"1234","Unit":"mg/L"},"Pb":{"Symbol":"Pb","Name":"Lead","Value":"1234","Unit":"mg/L"},"PbSt":{"Symbol":"PbSt","Name":"Lead, Stagnant","Value":"1234","Unit":"mg/L"},"Mn":{"Symbol":"Mn","Name":"Manganese","Value":"1234","Unit":"mg/L"},"NO3":{"Symbol":"NO3","Name":"Nitrate-N","Value":"1234","Unit":"mg/L"},"NO2":{"Symbol":"NO2","Name":"Nitrite-N","Value":"1234","Unit":"mg/L"},"ph":{"Symbol":"ph","Name":"pH","Value":"6.1","Unit":"units"},"Na":{"Symbol":"Na","Name":"Sodium","Value":"1234","Unit":"mg/L"}},"BacterialContaminants":{"Bac":{"Symbol":"Bac","Name":"Total Coliform","Value":"1234","Unit":"CFU/100 mL"},"Ecoli":{"Symbol":"Ecoli","Name":"E. Coli","Value":"1234","Unit":"CFU/100 mL"}},"Bac_G":"rdb_Bac_True","Ecoli_G":"rdb_Ecoli_True","RadionuclideContaminants":{"Rn":{"Symbol":"Rn","Name":"Radon","Value":"1234","Unit":"pCi/L"},"Ur":{"Symbol":"Ur","Name":"Uranium","Value":"1234","Unit":"μg/L"},"AGA":{"Symbol":"AGA","Name":"Gross Alpha","Value":"1234","Unit":"pCi/L"}},"InteractivePromptResponses":{"0":{"InteractionIdentifier":"Cl_True","Symbol":"Cl"},"1":{"InteractionIdentifier":"Har_True","Symbol":"Har"}}},
      ]
      sample = sampleSet[sampleSetIndex]
      sampleSetIndex = ++sampleSetIndex % sampleSet.length
    }

    resetCRForm();

  }*/

  $('#cr-search-chems-btn').click(function() {
    $('#chemical-rules-modal')
      .dialog({
        modal: true,
        width: "auto",
        position: { 'my': 'center', 'at': 'center' },
        dialogClass: 'chemical-rules-modal',
        //autoOpen: false,
        autoOpen: true,
        draggable: false,
        create: function(event, ui) {
          var toc = $("#cr-modal-toc-icons").tocify({ selectors: "h2" }).data("toc-tocify");
          $(window).resize(function(){resizeModal();})
        },
        close: function(event, ui) {
        }
    });
    resizeModal()
  });

  /**
   * Close Listener on Chemical Rules Modal
   * -  Remove Previous Results ?
   * -  Cancel Pending Form submission
   */
  $('#chemical-rules-modal').on('dialogclose', function() {
    var $form_wrapper = $('#chemical-rules-form-wrapper');
    var $all_wrappers = $('.chemical-rules-modal-wrapper');

    showElementOutOfMany($form_wrapper, $all_wrappers);
    resizeModal()
  });

})(jQuery);
