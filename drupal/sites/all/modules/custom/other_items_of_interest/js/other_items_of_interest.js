(function ($) {

  var ItemsOfInterestTable = function ($wrapper, ajax_url, location) {

    $wrapper.hide();

    var datatable_options = {
      "bLengthChange": false,
      "sPageButton": "favorites-ignore",
      "oLanguage": {
        "sSearch": "Filter:"
      },

      "iDisplayLength": 3
    };

    var cached = false;
    this.wrapper = $wrapper;
    this.ajax_url = ajax_url;

    if (location) {
      // find if in city, state code pattern
      if (location.indexOf(',') === -1)
        this.state_code = location;
      else
        this.state_code = $.trim(location.split(',')[1]);
    }
    else {
      this.state_code = false;
    }


    this.hideTable = function () {
      $wrapper.hide();
    };

    this.update_current_location = function (location) {
      // find if in city, state code pattern
      if (location.indexOf(',') === -1)
        this.state_code = location;
      else
        this.state_code = $.trim(location.split(',')[1]);
      this.ajax_request();
    };

    this.ajax_request = function () {
      var state_code = this.state_code;
      $.ajax({
        beforeSend: function () {
          $wrapper.html('<p>Loading&hellip;</p>');
        },
        url: ajax_url,
        method: "POST",
        data: {state: state_code},
        success: function (table) {
          /**
           * TODO: refactor - duplicate code block in the following files:
           * recommended_resources/js/LocalResourcesTable.js
           * other_items_of_interest/js/ItemsOfInterestTable.js
           */
          // alter the datatable id, one digit larger than the largest id
          var newId = 0;
          $("table[id^='datatable-']").each(function () {
            newId = Math.max(newId, parseInt($(this).attr('id').substr('datatable-'.length), 10));
          });
          newId++;
          var $table = $('<div>' + table + '</div>'); // wrap contents in a div for now, will unwrap later
          $table.find('table').attr('id', 'datatable-' + newId);
          $wrapper.html($table.html()); // unwrap

          $table = $wrapper.find('table');
          if ($table.length > 0) {
            $table.DataTable(datatable_options);
            $table.removeClass("dataTable display no-footer").addClass('views-table responsive-table usa-table-borderless');
          }
          cached = true;
        }
      });
    };

    this.showTable = function () {
      if (cached) {
        $wrapper.show();
      }
      else {
        this.ajax_request();
        $wrapper.show();
      }
    }

  };


  function return_location_name(location) {
    var index = location.indexOf('(');
    if (index > 0) {
      return $.trim(location.substr(0, location.indexOf('(')));
    }
    else {
      return location;
    }
  }


  $(document).ready(function () {

    var $tabs = $("#other-areas-tabs");
    $tabs.tabs();
    $tabs.find('.ui-corner-top').on('click', function(ev) {
      $(this).focus();
    });

    var $location_select;
    var guest_user;
    var location;

    if ($('#location-select').length > 0) {
      $location_select = $('#location-select');
      guest_user = false;
      location = $('#location-select').find('option:selected').text();
      location = return_location_name(location);
      $location_select.change(function () {
        var location = $('#location-select option:selected').text();
        location = return_location_name(location);
        $('#restrict-to-current-button a').text(location);
        current_state_table.update_current_location(location);
        current_state_table.ajax_request();
      });
    }
    else {
      $location_select = $('#location-input-guests');
      guest_user = true;
      location = $location_select.text();
      location = return_location_name(location);
    }

    if (guest_user) {
      $(document).on('ee:zipCodeQueried', function (e, queryResponse) {
        location = queryResponse.city + ', ' + queryResponse.state;
        $('#restrict-to-current-button a').text(location);
        current_state_table.update_current_location(location);
        current_state_table.ajax_request();

      });
    }

    var current_state_table = new ItemsOfInterestTable($("#current-state-resources"), 'generateCurrentAreaOfInterestTable', location);
    if (!guest_user) {
      var favorite_states_table = new ItemsOfInterestTable($("#favorite-state-resources"), 'generateFavoriteAreasOfInterestTable');
    }
    var all_states_resource_table = new ItemsOfInterestTable($("#all-state-resources"), 'generateAllAreasOfInterestTable');
    // Generating EPA by using current location as EPA
    var epa_table = new ItemsOfInterestTable($("#epa-resources"), 'generateCurrentAreaOfInterestTable', 'US EPA');


    if (!guest_user) {
      $('#restrict-to-states-button').click(function () {
        if ($(this).hasClass('inactive')) {
          $(this).removeClass('inactive');
          $("#all-states-button").addClass('inactive');
          $('#restrict-to-current-button').addClass('inactive');
          $("#epa-button").addClass('inactive');
          all_states_resource_table.hideTable();
          current_state_table.hideTable();
          epa_table.hideTable();
          favorite_states_table.showTable();
        }
      });
    }

    $("#all-states-button").click(function () {
      if ($(this).hasClass('inactive')) {
        $(this).removeClass('inactive');
        $('#restrict-to-states-button').addClass('inactive');
        $('#restrict-to-current-button').addClass('inactive');
        $("#epa-button").addClass('inactive');

        all_states_resource_table.showTable();
        current_state_table.hideTable();
        if (!guest_user) {
          favorite_states_table.hideTable();
        }
        epa_table.hideTable();
      }
    });

    $('#restrict-to-current-button').click(function () {
      if ($(this).hasClass('inactive')) {
        $(this).removeClass('inactive');
        $('#restrict-to-states-button').addClass('inactive');
        $("#all-states-button").addClass('inactive');
        $("#epa-button").addClass('inactive');
        current_state_table.showTable();
        if (!guest_user) {
          favorite_states_table.hideTable();
        }
        all_states_resource_table.hideTable();
        epa_table.hideTable();
      }
    });

    $('#epa-button').click(function () {
      if ($(this).hasClass('inactive')) {
        $(this).removeClass('inactive');
        $('#restrict-to-states-button').addClass('inactive');
        $('#restrict-to-current-button').addClass('inactive');
        $("#all-states-button").addClass('inactive');
        current_state_table.hideTable();
        if (!guest_user) {
          favorite_states_table.hideTable();
        }
        all_states_resource_table.hideTable();
        epa_table.showTable();
      }
    });


    // Dynamically set button text for currently selected location
    $('#restrict-to-current-button a').text(location);


    current_state_table.showTable();
    if (!guest_user) {
      favorite_states_table.ajax_request();
    }
    all_states_resource_table.ajax_request();
    epa_table.ajax_request();

  });


}(jQuery));