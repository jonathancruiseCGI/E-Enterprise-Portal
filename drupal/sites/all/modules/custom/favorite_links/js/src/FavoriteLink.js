$ = jQuery;
// global id for link tracking
var id = 0;
var favorite_urls;
var favorite_url_mapping;
var id_label_mapping;
var link_status_changing = false;

function preload_links() {
    $('#load_more').hide();
    var data = $.parseJSON(Drupal.settings.preloaded_link_data);
    if (data.url_data != 'false') {
        favorite_urls = data.urls;
        favorite_url_mapping = data.url_mapping;
        id_label_mapping = data.label_mapping;
    }
}

$(document).ready(function () {
    preload_links();
});

function createFavoriteButton(url, text_title) {

    var id;
    var favorite_button;
    if ($.inArray(url, favorite_urls) >= 0) {
        id = favorite_url_mapping[url];
        favorite_button =
            "<div class='button_input_holder' style='display:none'><span title='Remove Favorite' id='" + id + "__favorite_link' " +
            " class=' remove_link favorite_hover old_link fa fa-heart filled' aria-hidden='true'></span><span class='sr-only'>Favorited. To remove favorite, press Ctrl + D</span></div>";
    }
    else {
        id = url;
        favorite_button = '<div class="button_input_holder" style="display:none"><span title="Add Favorite" id="' + id + '__' + text_title + '"' +
            " class='add_link favorite_hover new_link fa fa-heart empty' aria-hidden='true'></span><span class='sr-only'>To favorite, press Ctrl + D</span></div>";
    }
    return favorite_button;
}

var FavoriteLink = function ($container) {

    // Private
    var id = -1;
    var url = encodeURIComponent($container.closest('a').attr('href'));
    var favored = false;
    var parent = null; // id of
    var children = [];
    var title = $container.attr('alt');
    var favorite_button = null;


    // Public
    this.is_parent = false;
    this.qtip_postion = {
        my: 'right bottom',  // Position my top left...
        at: 'right bottom', // at the bottom right of...
        target: $container
    }

    // initial DOM element processing
    $container.closest('a').addClass('processed-favorite');


    this.addFavoriteButton = function () {
        favorite_button = createFavoriteButton(url, title);
        $container.after(favorite_button);
        $container.qtip({ // Grab some elements to apply the tooltip to // add into class
            content: {
                text: $container.next('div')
            },
            hide: {
                fixed: true,
                delay: 300
            },
            position: this.qtip_postion,
            style: {
                classes: 'transparent-qtip',
                width: 4
            }
        });
    }

    this.setUrl = function (in_url) {
        url = encodeURIComponent(in_url);
    }
    this.getUrl = function () {
        return url;
    }
    this.setId = function (in_id) {
        id = in_id;
    }
    this.getId = function () {
        return id;
    }

    this.getState = function () {
        return favored;
    }
    this.setState = function (in_favored) {
        favored = in_favored;
    }

    this.triggerParentForRemoval = function () {
        parent.unfavor();
        parent.unfavor_children();
    }

    this.setTitle = function(in_title) {
        title = in_title;
    }

    // Private

    var unfavor = function () {
        favored = false;
        parent = null;
        $anchor.unfavorHeart();
    }

    var favor = function () {
        favored = true;
        $anchor.favorHeart();
    }

    var unfavorChildren = function () {
        $.each(children, function () {
            this.unfavor();
        });
    }
}
