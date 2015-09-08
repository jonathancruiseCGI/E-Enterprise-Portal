<?php
/**
 * @file
 * my_air_quality_chart_view.features.inc
 */

/**
 * Implements hook_theme_registry_alter().
 */
function village_green_block_theme_registry_alter(&$theme_registry) {

    // Defined path to the current module.
    $module_path = drupal_get_path('module', 'village_green_block');
    // Find all .tpl.php files in this module's folder recursively.
    $template_file_objects = drupal_find_theme_templates($theme_registry, '.tpl.php', $module_path);

    // Iterate through all found template file objects.
    foreach ($template_file_objects as $key => $template_file_object) {
        // If the template has not already been overridden by a theme.
        if (!isset($theme_registry[$key]['theme path']) || !preg_match('#/themes/#', $theme_registry[$key]['theme path'])) {
            // Alter the theme path and template elements.
            $theme_registry[$key]['theme path'] = $module_path;
            $theme_registry[$key] = array_merge($theme_registry[$key], $template_file_object);
            $theme_registry[$key]['type'] = 'module';
        }
    }
}

/**
 * Implements hook_views_api().
 */
function village_green_block_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_menu().
 */
function village_green_block_menu() {
  $items = array();

  $items['village_green_block/api/getDataForCurrentMinute'] = array(
    'title' => 'Most Recent Observations',
    'page callback' => 'village_green_block_get_data_for_current_minute',
    'access callback' => 'user_is_logged_in',
    'type' => MENU_CALLBACK,
  );

  return $items;
}

/**
 * Menu callback: Get data for current minute
 */
function village_green_block_get_data_for_current_minute() {

  $url = 'http://villagegreen.airnowtech.org/welcome/getDataForCurrentMinuteWelcomePage?'.http_build_query($_GET);

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_HEADER, false); 
  curl_setopt($ch, CURLINFO_HEADER_OUT, false);
  curl_setopt($ch, CURLOPT_VERBOSE, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

  curl_setopt($ch, CURLOPT_URL, $url);

  $response = curl_exec($ch);

  curl_close($ch);

  print $response;
  exit;
}