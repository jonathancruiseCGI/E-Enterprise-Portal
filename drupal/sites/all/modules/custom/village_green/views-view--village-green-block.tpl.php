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

drupal_add_css(drupal_get_path('module', 'village_green') ."/css/village_green.css", ['preprocess'=>true, 'group'=>CSS_DEFAULT]);
drupal_add_js(drupal_get_path('module', 'village_green') ."/js/chosen.jquery.js", ['scope'=>'footer', 'preprocess'=>true, 'group'=>JS_LIBRARY, 'type'=>'file', 'cache'=>true, 'requires_jquery'=>true]);
drupal_add_js(drupal_get_path('module', 'village_green') ."/js/backstretch.js", ['scope'=>'footer', 'preprocess'=>true, 'group'=>JS_LIBRARY, 'type'=>'file', 'cache'=>true, 'requires_jquery'=>true]);
drupal_add_js(drupal_get_path('module', 'village_green') ."/js/STI.js", ['scope'=>'footer', 'preprocess'=>true, 'group'=>JS_LIBRARY, 'type'=>'file', 'cache'=>true, 'requires_jquery'=>true]);
drupal_add_js(drupal_get_path('module', 'village_green') ."/js/VillageGreenDAL.js", ['scope'=>'footer', 'preprocess'=>true, 'group'=>JS_LIBRARY, 'type'=>'file', 'cache'=>true, 'requires_jquery'=>true]);
drupal_add_js(drupal_get_path('module', 'village_green') ."/js/welcome.js", ['scope'=>'footer', 'preprocess'=>true, 'group'=>JS_LIBRARY, 'type'=>'file', 'cache'=>true, 'requires_jquery'=>true]);
?>

<script type="text/javascript">
    (function() {
        if (!window.VG) {
            window.VG = {}
        }
    
        VG.config = {
            baseUrl : ""
        };
    })();
</script>

<div id="village-green" class="view-content">
	<p class="widget-note">Updated every minute via <a target="_blank" href="http://villagegreen.airnowtech.org/">Village Green</a></p>
	<div class="usa-grid-full">
		<div class="usa-width-one-half">
      <label for="currentSiteID">Air monitoring station</label>
      <select id="currentSiteID" aria-controls="vg-city-numbers">
          <option value="24607">Chicago, IL</option>
          <option value="24290" selected>Durham, NC</option>
          <option value="24538">Hartford, CT</option>
          <option value="24294">Kansas City, KS</option>
          <option value="24291">Oklahoma City, OK</option>
          <option value="24292">Philadelphia, PA</option>
          <option value="24293">Washington, DC</option>
      </select>
  	</div>
	  <div class="usa-width-one-half">
	    <div class="latest-reading usa-width-one-half">
	    	<span class="aria-label" id="vg-obsdatelabel">Latest reading <span class="sr-only">at</span></span>
	      <span aria-labelledby="vg-obsdatelabel" class="currentObsDate"></span>
	    </div>
	    <div class="usa-width-one-half">
    	    <span class="sr-only">Updates every 60 seconds</span>
	    	<span class="aria-label" id="vg-countdown-label" aria-hidden="true">Update in</span>
	    	<div class="active village-green-countdown" aria-hidden="true"><span class="countdownContainer"></span></div>
			</div>
	  </div>
</div>
<div class="usa-grid-full vg-numbers-container">
  <span class="sr-only" aria-describedby="currentSiteID">Air station readings</span>
  <ul class="vg-numbers" id="vg-city-numbers" aria-live="off">
      <li><h4 id="temp-label" aria-describedby="currentSiteID">Temp</h4><p aria-labelledby="temp-label"><span class="curTempReading">0</span> <span class="vg-units" id="temp-units"><abbr class="ee-bootstrap-tooltip" data-toggle="tooltip" data-placement="bottom" title="Degrees fahrenheit">&deg; F</abbr></span></p></li>
      <li><h4 id="humid-label" aria-describedby="currentSiteID">Humidity</h4><p aria-labelledby="humid-label"><span class="curHumidReading">0</span> <span class="vg-units" id="humid-units">%</span></p></li>
      <li><h4 id="wind-label" aria-describedby="currentSiteID">Wind</h4><p aria-labelledby="wind-label"><span class="curWSReading">0</span> <abbr class="ee-bootstrap-tooltip curWDReading" data-toggle="tooltip" data-placement="bottom" title="Wind Direction"></abbr><span class="vg-units" id="wind-units"><abbr class="ee-bootstrap-tooltip" data-toggle="tooltip" data-placement="bottom" title="Miles per hour">mph</abbr></span></p></li>
      <li><h4 id="ozone-label" aria-describedby="currentSiteID">Ozone</h4><p aria-labelledby="ozone-label"><span class="curOzoneReading">0</span> <span class="vg-units" id="ozone-units"><abbr class="ee-bootstrap-tooltip" data-toggle="tooltip" data-placement="bottom" title="Parts per billion">ppb</abbr></span></p></li>
      <li><h4 id="pm-label">PM<sub>2.5</sub></h4><p aria-labelledby="pm-label"><span class="curPMReading">0</span><span class="vg-units" id="pm-units"><abbr class="ee-bootstrap-tooltip" data-toggle="tooltip" data-placement="bottom" title="Micrograms per cubic meter">&mu;g/m<sup>3</sup></abbr></span></p></li>
  </ul>
</div>
</div>
<div class="village-green-source"><a target="_blank" href="http://villagegreen.airnowtech.org" class="village-green-external-link"></a></div>
