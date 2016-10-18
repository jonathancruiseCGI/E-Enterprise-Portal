function showElementOutOfMany($wrapper_to_show,$common_selector){$common_selector.hide(),$wrapper_to_show.show(),resizeModal()}function resizeModal(){jQuery("#chemical-rules-modal").dialog({position:{my:"center",at:"center"}}),jQuery(".chemical-rules-modal").css("top").replace("px","")<1&&jQuery(".chemical-rules-modal").css("top",0)}function checkValues(previous,current,cIndex,keys){var previousKeys=[];return"object"==typeof previous[keys[cIndex]]&&(previousKeys=Object.keys(previous[keys[cIndex]])),previousKeys.indexOf("Value")>-1&&""==previous[keys[cIndex]].Value?delete previous[keys[cIndex]]:["object"].indexOf(typeof previous[keys[cIndex]])>-1&&(previous[keys[cIndex]]=previousKeys.reduce(checkValues,previous[keys[cIndex]]),0==Object.keys(previous[keys[cIndex]]).length&&delete previous[keys[cIndex]]),previous}function resetCRForm(){var $form=$("#cr-search");$form.val("")}function populate_substance_modal(chemical_rules_response_json){var $body=$("body");if(null!=chemical_rules_response_json.data&&0==chemical_rules_response_json.error){$("#chemical-rules-modal").dialog("option","title",chemical_rules_response_json.data.Substance.CASRegistryNumber+": "+chemical_rules_response_json.data.Substance.ChemicalSubstanceSystematicName),$body.find(".cr-chemical-name").text(chemical_rules_response_json.data.Substance.EPAChemicalRegistryName);var $list=$body.find(".cr-rules-regs_lists"),$programs=$body.find("#cr-programs-list"),$synonyms=$body.find("#cr-synonyms-list"),$propertiestable=$body.find("#cr-properties-table > tbody"),$substance_lists=$body.find("#cr-substances-list");$("#cr-save-chemical").data("cr-srsid",chemical_rules_response_json.data.Substance.EPAChemicalInternalNumber),chemical_rules_response_json.data.LawsRegs.length>0&&$(chemical_rules_response_json.data.LawsRegs).each(function(index){$list.append('<li><a href="'+this.source+'" target="_blank">'+this.name+"</a></li>")}),chemical_rules_response_json.data.Programs.length>0&&$(chemical_rules_response_json.data.Programs).each(function(index){$programs.append('<li><a href="'+this.source+'" target="_blank">'+this.name+"</a></li>")}),chemical_rules_response_json.data.Substance.Synonym.length>0&&$(chemical_rules_response_json.data.Substance.Synonym).each(function(index){$synonyms.append("<li>"+this+"</li>")});var tr_start='<tr><th scope="row">',tr_end="</td></tr>",properties=tr_start+"Molecular Weight</th><td>"+chemical_rules_response_json.data.Substance.MolecularWeight+tr_end;properties+=tr_start+"Solubility</th><td>"+chemical_rules_response_json.data.Substance.Solubility+tr_end,properties+=tr_start+"Vapor Pressure</th><td>"+chemical_rules_response_json.data.Substance.VaporPressure+tr_end,properties+=tr_start+"LogP</th><td>"+chemical_rules_response_json.data.Substance.LogP+tr_end,properties+=tr_start+"Stability</th><td>"+chemical_rules_response_json.data.Substance.Stability+tr_end,properties+=tr_start+"pKA</th><td>"+chemical_rules_response_json.data.Substance.pKA+tr_end,$propertiestable.append(properties),chemical_rules_response_json.data.SubstanceList.length>0&&$(chemical_rules_response_json.data.SubstanceList).each(function(index){$substance_lists.append("<li>"+this+"</li>")}),$("#chemical-rules-modal").dialog("open")}}var sampleData=function(){};!function($){var $body=$("body"),num_chem_faves=($("#cr-tabs").tabs(),0),num_rules_faves=0,$cr_empty=$(".cr-tabs_favorites_empty"),$cr_avail=$(".cr-tabs_favorites_available");0===num_chem_faves&&0===num_rules_faves?($cr_empty.toggleClass("hidden",!1),$cr_avail.toggleClass("hidden",!0)):($cr_empty.toggleClass("hidden",!1),$cr_avail.toggleClass("hidden",!0)),$("#chemical-rules-modal").html(Drupal.settings.chemical_rules.modal).dialog({title:"Results",modal:!0,width:"auto",position:{my:"left top",at:"left top"},dialogClass:"chemical-rules-modal",draggable:!1,autoOpen:!1,create:function(event,ui){},close:function(event,ui){resetCRForm()}}),$body.on("click","#cr-search-chems-btn",function(ev){var chem_search_form_data=$("#chem_search_form").serialize();$.ajax({url:"chemical_rules/form_submission",method:"POST",data:chem_search_form_data,before_send:showElementOutOfMany($("#chemical-rules-loading-wrapper"),$(".chemical-rules-modal-wrapper")),complete:showElementOutOfMany($("#chemical-rules-results-wrapper"),$("#chemical-rules-loading-wrapper")),success:populate_substance_modal});var chemicalNameOrNum=$body.find("#cr-search_input").val();$body.find("#chemical-error").length>0&&($body.find("#chemical-error").remove(),$body.find("#cr-search_input").removeAttr("aria-describedby"));var is_valid_chemical=!0;if(is_valid_chemical){$("#cr-modal-toc-icons").toc({selectors:"h2",container:"#chemical-rules-modal",itemClass:function(i,heading,$heading,prefix){return $heading[0].tagName.toLowerCase()}});resizeModal()}else{error=!0;var error_message='<p class="has-error" id="chemical-error">No results were found for <b>'+chemicalNameOrNum+"</b>.  Please try another variation.</p>";$(error_message).insertBefore("#cr-search_description"),$body.find("#cr-search_input").attr("aria-describedby","chemical-error")}}),$("#chemical-rules-modal").on("dialogclose",function(){var $chemical_loading=$("#chemical-rules-loading-wrapper"),$all_wrappers=$(".chemical-rules-modal-wrapper");showElementOutOfMany($chemical_loading,$all_wrappers),resizeModal()})}(jQuery);
//# sourceMappingURL=src/chemical_rules.js.map