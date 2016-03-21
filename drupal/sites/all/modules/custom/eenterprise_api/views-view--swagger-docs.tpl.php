<?php
use Swagger\Swagger;
    $path = $_SERVER['DOCUMENT_ROOT']  . "/vendor/autoload.php";
    if (current_server() == 'localhost')
        require("/vendor/autoload.php");
    else
        require($path);

drupal_add_http_header('Access-Control-Allow-Origin', "*");
    header('Content-Type: application/json');

    $swagger = \Swagger\scan($_SERVER['DOCUMENT_ROOT'] . '/sites/all/modules/custom/eenterprise_api'); ///drupal/sites/all/modules/custom/eenterprise_api/views-view--api-test-harness.tpl.php');
    echo $swagger;

    // Exit to avoid drupal loading its templates/framework
    exit();

