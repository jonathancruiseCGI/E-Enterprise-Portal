<?php
drupal_add_js(drupal_get_path('theme', 'eenterprise') . '/js/location_input_engine.js', ['scope'=>'footer', 'preprocess'=>true, 'group'=>JS_THEME, 'type'=>'file', 'cache'=>true, 'requires_jquery'=>true]);
drupal_add_css("sites/all/libraries/jqueryui/themes/base/minified/jquery.ui.tabs.min.css", ['scope'=>'footer', 'preprocess'=>true, 'group'=>CSS_DEFAULT]);
drupal_add_js("sites/all/libraries/jqueryui/ui/minified/jquery.ui.tabs.min.js", ['scope'=>'footer', 'preprocess'=>true, 'group'=>JS_THEME, 'type'=>'file', 'cache'=>true, 'requires_jquery'=>true]);
drupal_add_js(drupal_get_path('theme', 'eenterprise') . '/js/eenterprise_utility.js', ['scope'=>'footer', 'preprocess'=>true, 'group'=>JS_THEME, 'type'=>'file', 'cache'=>true, 'requires_jquery'=>true]);
drupal_add_js(drupal_get_path('module', 'chemical_rules') . '/js/Chemical_Rules_Profile.js', ['scope'=>'footer', 'preprocess'=>true, 'group'=>JS_THEME, 'type'=>'file', 'cache'=>true, 'requires_jquery'=>true]);
drupal_add_js(drupal_get_path('module', 'chemical_rules') . '/js/chemical_rules.js', ['scope'=>'footer', 'preprocess'=>true, 'group'=>JS_THEME, 'type'=>'file', 'cache'=>true, 'requires_jquery'=>true]);

$font_awesome_path = libraries_get_path('font-awesome-4.5.0');
drupal_add_css( $font_awesome_path . "/css/font-awesome.min.css", ['preprocess'=>true, 'group'=>CSS_DEFAULT]);
?>
<div class="edit-user-profile">
    <div id="profile-tabs">
        <ul>
            <li><a class="favorites-ignore" href="#profile-account">Account</a></li>
            <li><a class="favorites-ignore" href="#profile-locations">Locations</a></li>
            <li><a class="favorites-ignore" href="#profile-interests">Interests</a></li>
            <li><a class="favorites-ignore" href="#profile-favorites">Favorites</a></li>

        </ul>
        <div id="profile-account">
            <h3>User Information</h3>

            <?php
            print render($form['field_profile_first_name']);
            print render($form['account']['mail']);
            ?>
            <p>All unsaved data will be lost upon navigating away from the Profile page.</p>
        </div>
        <div id="profile-locations">
            <h3>Locations of Interest</h3>
            <p class="eenterprise-utility-form-item-description-p">
                <?php
                print location_description();
                ?>
                <span class='zip_code_ajax_error'></span>
            </p>
            <div id='zipcode_description' class='form-group'>
                <?php
                print render($form['field_zip_code']);
                ?>
            </div>
            <div style="clear:both"></div>
            <p>All unsaved data will be lost upon navigating away from the Profile page.</p>

        </div>
        <div id="profile-interests">
            <h3>Interests</h3>
            <div id='lgc_description' class='form-group'>
                <div class="usa-grid">
                    <div class="usa-width-one-fourth">
                        <?php
                        print render($form['field_organization']);
                        ?>
                    </div>
                    <div class="usa-width-one-fourth">

                        <?php
                        print render($form['field_role']);
                        ?>
                    </div>
                    <?php
                    $term = taxonomy_term_load($form['field_organization'][LANGUAGE_NONE]['#default_value'][0]);
                    $name = $term->name;
                    if ($name != 'Local government') {
                        $style = "style='display:none;'";
                    } else {
                        $style = '';
                    }

                    ?>
                    <div class="usa-width-one-fourth">
                        <div class="local-government-options" <?php echo $style; ?>>
                            <?php
                            print render($form['field_community_type']);
                            ?>
                        </div>
                    </div>
                    <div class="usa-width-one-fourth">
                        <div class="local-government-options" <?php echo $style; ?>>
                            <?php
                            print render($form['field_community_size']);
                            ?>
                        </div>
                    </div>
                </div>
                <div class='usa-grid-full'>

                    <div class="form-group">

                        <?php
                        print render($form['field_lgc_topics_of_interest']);
                        ?>
                    </div>
                </div>
            </div>
            <p>All unsaved data will be lost upon navigating away from the Profile page.</p>

        </div>

        <div id="profile-favorites">
            <h3>Favorite Links</h3>
            <p class="eenterprise-utility-form-item-description-p field-title-below">
                Add and manage your favorite links.  All unsaved favorite links will be lost upon navigating away from the Profile page.</p>                

            <div id='links_description' class='form-group'>
                <?php
                print render($form['field_profile_favourites']);
                ?>
            </div>
            
            <?php
              if (module_exists('chemical_rules')) {
            ?>
              <div id="favorite-chemicals">
                <h3>Favorite Chemicals</h3>
                <p class="cr-chemicals"><span id="cr-count-chemicals"></span> Chemicals</p>
                <ul class="cr-lists cr-favorite-chemicals">
                </ul>   
              </div>
              <div id="favorite-laws">
                <h3>Favorite Laws and Regulations</h3>
                <p class="cr-laws"><span id="cr-count-laws"></span> Laws / Regulations</p>
                <ul class="cr-lists cr-favorite-laws">
                </ul>
              </div>
            <?php 
              }
            ?>

        </div>
    </div>
    <div class="col-xs-12">
        <?php
        print drupal_render_children($form);
        ?>
        <div id="delete-holder" style="display:none">
            <div>This will delete your entire profile, including any selected preferences, from the E-Enterprise
                Platform and will log you out from the system. Are you sure that you want to do this?
            </div>
            <div class="pull-right">
                <button id="cancel-delete-profile" class="usa-button" type="button">Back</button>
                <button id="confirm-delete-profile" type="button" class="btn btn-danger">Delete Profile</button>
            </div>
        </div>

    </div> <!--col-->

</div> <!-- edit user-profile -->
<div id="chemical-rules-modal"></div>
