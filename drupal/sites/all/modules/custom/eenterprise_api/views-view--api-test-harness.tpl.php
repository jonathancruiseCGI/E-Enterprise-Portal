<?php

/**
 * @file
 * Main view template.
 *
 * Variables available:
 * - $classes_array: An array of classes determined in
 *   template_preprocess_views_view(). Default classes are:
 *     .view
 *     .view-[css_name]
 *     .view-id-[view_name]
 *     .view-display-id-[display_name]
 *     .view-dom-id-[dom_id]
 * - $classes: A string version of $classes_array for use in the class attribute
 * - $css_name: A css-safe version of the view name.
 * - $css_class: The user-specified classes names, if any
 * - $header: The view header
 * - $footer: The view footer
 * - $rows: The results of the view query, if any
 * - $empty: The empty text to display if the view is empty
 * - $pager: The pager next/prev links to display, if any
 * - $exposed: Exposed widget form/info to display
 * - $feed_icon: Feed icon to display, if any
 * - $more: A link to view more, if any
 *
 * @ingroup views_templates
 */
?>

<?php
$module_name = "eenterprise_api";

drupal_add_js('sites/all/modules/contrib/datatables/dataTables/media/js/jquery.dataTables.js');
drupal_add_js(drupal_get_path('module', $module_name) . "/js/test_harness.js", "file");

?>
<div class="row">
    <div class="col-xs-3">
        <h2>Search State Resources</h2>

        <p>https://eenterprise-dev-portal.apps.cloud.gov/api/1.1/state_resources.json</p>
        <input id="state_request"/>
        <button id="search_states">Search</button>
        <p>Request URL: <span id="url_used_state"></span></p>
    </div>
    <div class="col-xs-4">
        <h3>Json output</h3>
        <div id="state_json"></div>
    </div>
    <div class="col-xs-5">
        <h3>Table</h3>

        <div id="state_table"></div>
    </div>
</div>
<div class="row">
    <div class="col-xs-3">
        <h2>Search Local Resources</h2>
        <p>https://eenterprise-dev-portal.apps.cloud.gov/api/1.1/local_resources.json</p>
        <input id="local_request"/>
        <button id="search_locals">Search</button>
        <p>Request URL: <span id="url_used_local"></span></p>
    </div>
    <div class="col-xs-4">
        <h3>Json output</h3>

        <div id="local_json"></div>
    </div>
    <div class="col-xs-5">
        <h3>Table</h3>

        <div id="local_table"></div>
    </div>
</div>
