function cr_showElementOutOfMany($wrapper_to_show,$common_selector){$common_selector.hide(),$wrapper_to_show.show(),cr_resizeModal()}function cr_resizeModal(){jQuery("#chemical-rules-modal").dialog({position:{my:"center",at:"center"},width:$(window).width()-180,height:$(window).height()-180}),jQuery(".chemical-rules-modal").css("top").replace("px","")<1&&jQuery(".chemical-rules-modal").css("top",0),jQuery(".sticky-toc").length>0&&jQuery("#cr-modal-toc-icons").css("width",jQuery("#chemical-rules-modal").width()+6)}function create_favlaw_heart(epaintnum){var law_in_favorites=find_matching_favorites(epaintnum,"Laws"),fav_law_holder="";return fav_law_holder=law_in_favorites===!1?'<a href="javascript:void(0);" class="fa fa-heart empty save-favorite" data-epaintnum="'+epaintnum+'" data-favtype="Law"><span class="sr-only">Click to favorite.</span></a>':'<a href="javascript:void(0);" class="fa fa-heart filled remove-link remove-favorite" data-epaintnum="'+epaintnum+'" data-favtype="Law"><span class="sr-only">Favorited. Click to unfavorite.</span></a>'}function find_matching_favorites(check_id,check_type){for(var match_found=!1,i=0;i<favs[check_type].length;i++)if(favID=favs[check_type][i].ID,favID==check_id)return match_found=!0,i;if(0==match_found)return!1}function is_valid_cas_number(stringToCheck){var cas=/(\d{2,7}).{0,2}(\d{2}).{0,2}(\d)/g,casgroup=cas.exec(stringToCheck);if(casgroup){var checkDigit=(casgroup[1]+casgroup[2]).split("").reduce(function(previousValue,currentValue,currentIndex,array){return(previousValue+array[array.length-currentIndex-1]*(currentIndex+1))%10},0);return checkDigit==casgroup[3]}return!1}function lookup_chemical(lookup_value){var $body=$("body");$body.find("#cr-search_input").val(lookup_value),$body.find("#cr-search-chems-btn").trigger("click")}function populate_substance_modal(chemical_rules_response_json){var $body=$("body"),json=chemical_rules_response_json;if(null!==json.data&&json.error===!1){if($body.find("#search-message").length>0&&($body.find("#cr-search_input").prop("aria-describedby",!1),$body.find("#search-message").remove()),""!==json.data.Substance.CASRegistryNumber&&null!==json.data.Substance.CASRegistryNumber){json.data.Substance.CASRegistryNumber+": "}else;if(null!==json.data.Substance.EPAChemicalRegistryName&&""!==json.data.Substance.EPAChemicalRegistryName){" ("+json.data.Substance.EPAChemicalRegistryName+")"}else;$body.find(".cr-chemical-name").text(json.data.Substance.EPAChemicalRegistryName);var $list=$body.find("#cr-laws-regs-substances"),$synonyms=($body.find("#cr-programs-list"),$body.find("#cr-synonyms-list")),$image=$body.find(".cr-structure_image"),$propertiestable=$body.find("#cr-properties-table > tbody"),$substance_lists=$body.find("#cr-substances-list"),html_to_add=[],substance_lists=[],favorite_exists=find_matching_favorites(json.data.Substance.EPAChemicalInternalNumber,"Chemicals"),count_all_cfrs=0;$body.find("#cr-save-favorite").attr("data-epaintnum",json.data.Substance.EPAChemicalInternalNumber).attr("data-sysname",json.data.Substance.ChemicalSubstanceSystematicName),$body.find("#metadata-sys-name").text(json.data.Substance.ChemicalSubstanceSystematicName),null!==json.data.Substance.EPAChemicalRegistryName&&($body.find("#cr-save-favorite").attr("data-commonname",json.data.Substance.EPAChemicalRegistryName),$body.find("#metadata-common-name").text(json.data.Substance.EPAChemicalRegistryName)),null!==json.data.Substance.CASRegistryNumber&&($body.find("#cr-save-favorite").attr("data-casnum",json.data.Substance.CASRegistryNumber),$body.find("#metadata-cas-num").text(json.data.Substance.CASRegistryNumber)),$body.find("#cr-remove-favorite").attr("data-epaintnum",json.data.Substance.EPAChemicalInternalNumber).attr("data-favtype","Chemical"),favorite_exists===!1?($body.find("#cr-save-favorite").parent("li").show(),$body.find("#cr-remove-favorite").parent("li").hide()):($body.find("#cr-save-favorite").parent("li").hide(),$body.find("#cr-remove-favorite").parent("li").show()),$list.html("");var cfr_id="";if(json.data.SubstanceList&&""!==json.data.SubstanceList){for(var listI in json.data.SubstanceList)if(Object.keys(json.data.SubstanceList[listI].cfrs).length>0){count_all_cfrs+=Object.keys(json.data.SubstanceList[listI].cfrs).length,html_to_add.push('<h3><span class="cr-laws-regs_count">'+json.data.SubstanceList[listI].cfrs.length+"</span> laws and regulations for "+json.data.SubstanceList[listI].substanceListName+'</h3><ul class="cr-lists">'),substance_lists.push("<li>"+json.data.SubstanceList[listI].substanceListName+"</li>");for(var index in json.data.SubstanceList[listI].cfrs)cfr_id=json.data.SubstanceList[listI].cfrs[index],fav_holder=create_favlaw_heart(cfr_id),html_to_add.push('<li><a data-favtype="Law" data-epaintnum="'+cfr_id+'" href="'+json.data.LawsRegs[cfr_id].attributes.URL+'" target="_blank">'+json.data.LawsRegs[cfr_id].attributes.Citation+" &mdash; "+json.data.LawsRegs[cfr_id].attributes.Title+"</a>"+fav_holder+'<span class="law-citation">Authority: '+json.data.LawsRegs[cfr_id].attributes["CFR Authority"]+"</span></li>");html_to_add.push("</ul>")}$list.append(html_to_add.join("")),$body.find("#count-all-cfrs").text(count_all_cfrs)}var synonym_list=[];$synonyms.html(""),json.data.Substance.Synonym.length>0&&($(json.data.Substance.Synonym).each(function(index){synonym_list.push("<li>"+this+"</li>")}),$synonyms.append(synonym_list.sort())),$image.html(""),null!=json.data.Image&&""!=json.data.Image?$image.append('<img src="'+json.data.Image+'" alt="A structure of '+json.data.Substance.EPAChemicalRegistryName+'"><p>Powered by <a href="https://pubchem.ncbi.nlm.nih.gov" rel="external" target="_blank">PubChem</a></p>'):$image.append("No image available for this substance.");var tr_start='<tr><th scope="row">',tr_end="</td></tr>";$propertiestable.html("");var properties=tr_start+"Molecular Weight <span class='cr-definition'></span></th><td>"+json.data.Substance.MolecularWeight+tr_end;properties+=tr_start+"Solubility <span class='cr-definition'>The solubility of a substance is the amount of that substance that will dissolve in a given amount of solvent. The default solvent is water, if not indicated.</span></th><td>"+json.data.Substance.Solubility+tr_end,properties+=tr_start+"Vapor Pressure <span class='cr-definition'>Vapor pressure is the pressure of a vapor in thermodynamic equilibrium with its condensed phases in a closed system.</span></th><td>"+json.data.Substance.VaporPressure+tr_end,properties+=tr_start+"LogP <span class='cr-definition'>Octanol/Water Partition Coefficient, used as a measure of molecular lipophilicity</span></th><td>"+json.data.Substance.LogP+tr_end,properties+=tr_start+"Stability <span class='cr-definition'>Tendency of a material to resist change or decomposition due to internal reaction, or due to the action of air, heat, light, pressure, etc. (See also Stability and Reactivity section under Safety and Hazards)</span></th><td>"+json.data.Substance.Stability+tr_end,properties+=tr_start+"pKA <span class='cr-definition'></span></th><td>"+json.data.Substance.pKA+tr_end,$propertiestable.append(properties),$substance_lists.html(""),Object.keys(json.data.SubstanceList).length>0?$substance_lists.append(substance_lists.sort()):$substance_lists.html("<p>No substance lists found for this chemical.</p>"),$body.addClass("fixed-modal-open")}else $body.find("#cr-search_description").before('<div id="search-message" class="has-error">No chemicals found.  Please try a different name or CAS #.</div>'),$body.find("#cr-search_input").prop("aria-describedby","search-message")}function render_favorite_chemicals(favs){var $body=$("body");if(favs.Chemicals.length>0){num_chem_faves=favs.Chemicals.length;var favorite_chemicals=[];$body.find("#cr-count-chemicals").text(num_chem_faves),$.each(favs.Chemicals,function(index,val){var cas="";if(null!=val.CAS&&""!=val.CAS){cas=val.CAS;var link_casnum=" data-casnum='"+cas+"' ";cas+=": "}else link_casnum="";var include_commonname="";null!=val.CommonName&&""!=val.CommonName&&(include_commonname=" ("+val.CommonName+")"),favorite_chemicals.push('<li><a class="favorite-chemical cr-favorite" href="javascript:void(0);" data-favtype="Chemical" data-epaintnum="'+val.ID+'" '+link_casnum+'data-commonname="'+val.CommonName+'">'+cas+val.SysName+include_commonname+'</a><a class="favorite-chemical-remove remove-link" data-favtype="Chemical" data-epaintnum="'+val.ID+'" data-commonname="'+val.CommonName+'">Remove<span class="sr-only"> '+val.SysName+" from favorites</span></a></li>")}),$body.find(".cr-chemicals").show(),$body.find(".cr-favorite-chemicals").html(favorite_chemicals).show()}else $body.find(".cr-chemicals").hide(),$body.find(".cr-favorite-chemicals").html("").hide()}function render_favorite_laws(favs){var $body=$("body");if(favs.Laws.length>0){num_rules_faves=favs.Laws.length;var favorite_laws=[];$body.find("#cr-count-laws").text(num_rules_faves),$.each(favs.Laws,function(index,val){favorite_laws.push('<li><a class="favorite-law cr-favorite" href="'+val.URL+'" data-favtype="Law" data-epaintnum="'+val.ID+'" target="_blank">'+val.Citation+":  "+val.Title+'</a><a class="favorite-law-remove remove-link" data-favtype="Law" data-epaintnum="'+val.ID+'">Remove<span class="sr-only"> '+val.Title+" from favorites</span></a></li>")}),$body.find(".cr-laws").show(),$body.find(".cr-favorite-laws").html(favorite_laws).show()}else $body.find(".cr-laws").hide(),$body.find(".cr-favorite-laws").html("").hide()}function reset_cr_form(){var $form=$("#cr-search_input");$form.val("")}function trigger_law_qTip(findLink,hideQtip){try{if(1==hideQtip)return $(findLink).trigger("mouseover"),findQtip="#"+$(findLink).attr("aria-describedby"),findQtip;$(findLink).trigger("mouseout")}catch(err){}}function update_clicked_heart(this_link,filled_if_true){filled_if_true===!0?(this_link.removeClass("empty save-favorite"),this_link.addClass("filled remove-favorite remove-link")):filled_if_true===!1&&(this_link.addClass("empty save-favorite"),this_link.removeClass("filled remove-favorite remove-link"))}function update_favorite_lists(type){var clicked_favorite_type=type;"Chemical"==clicked_favorite_type?render_favorite_chemicals(favs):"Law"==clicked_favorite_type&&render_favorite_laws(favs)}function isValidCasNumber(stringToCheck){var cas=/(\d{2,7}).{0,2}(\d{2}).{0,2}(\d)/g,casgroup=cas.exec(stringToCheck);if(casgroup){var checkDigit=(casgroup[1]+casgroup[2]).split("").reduce(function(previousValue,currentValue,currentIndex,array){return(previousValue+array[array.length-currentIndex-1]*(currentIndex+1))%10},0);return checkDigit==casgroup[3]}return console.log("invalid string"),!1}var originalDialog,favs=Drupal.settings.chemical_rules.profile?Drupal.settings.chemical_rules.profile:{Chemicals:[],Laws:[]};!function($){var $body=$("body"),num_chem_faves=($("#cr-tabs").tabs(),0),num_rules_faves=0,$cr_empty=$(".cr-tabs_favorites_empty"),$cr_avail=$(".cr-tabs_favorites_available");num_chem_faves=favs.Chemicals.length,num_rules_faves=favs.Laws.length,0===num_chem_faves&&0===num_rules_faves?($cr_empty.show(),$cr_avail.hide()):($cr_empty.hide(),$cr_avail.show(),num_chem_faves>0&&render_favorite_chemicals(favs),num_rules_faves>0&&render_favorite_laws(favs)),$("#chemical-rules-modal").html(Drupal.settings.chemical_rules.modal).dialog({title:"Results",modal:!0,width:$(window).width()-180,height:$(window).width()-180,closeOnEscape:!0,position:{my:"left top",at:"left top"},dialogClass:"chemical-rules-modal",draggable:!1,autoOpen:!1,resizable:!1,create:function(event,ui){$(window).resize(function(){cr_resizeModal()})},open:function(event,ui){$("#chemical-rules-modal").parent().css("position","fixed")},close:function(event,ui){reset_cr_form(),$("#chemical-rules-modal").html(originalDialog),$body.removeClass("fixed-modal-open")}}),$body.on("click","#cr-search-chems-btn",function(ev){var chem_search_form_data=$("#chem_search_form").serialize(),chem_search_input=$body.find("#cr-search_input").val();if(ev.preventDefault(),ev.stopPropagation(),""!==chem_search_input){$.ajax({url:"chemical_rules/form_submission",method:"POST",data:chem_search_form_data,beforeSend:function(){$("#chemical-rules-modal").dialog("option","title","Searching for "+chem_search_input),$body.find("#searching-chemical-name").text(chem_search_input),$("#chemical-rules-modal").dialog("open"),cr_showElementOutOfMany($("#chemical-rules-loading-wrapper"),$(".chemical-rules-modal-wrapper"))},complete:function(){$("#chemical-rules-modal").dialog("option","title","Search results for "+chem_search_input),cr_showElementOutOfMany($("#chemical-rules-results-wrapper"),$("#chemical-rules-loading-wrapper")),originalDialog=$body.find("#chemical-rules-modal").html()},success:populate_substance_modal});var chemicalNameOrNum=$body.find("#cr-search_input").val();$body.find("#chemical-error").length>0&&($body.find("#chemical-error").remove(),$body.find("#cr-search_input").removeAttr("aria-describedby"));var is_valid_chemical=!0;if(!is_valid_chemical){error=!0;var error_message='<p class="has-error" id="chemical-error">No results were found for <b>'+chemicalNameOrNum+"</b>.  Please try another variation.</p>";$(error_message).insertBefore("#cr-search_description"),$body.find("#cr-search_input").attr("aria-describedby","chemical-error")}cr_resizeModal()}}),$body.find(".favorite-chemical").length>0&&$body.on("click",".favorite-chemical",function(ev){var cas_clicked=$(this).attr("data-casnum");if("undefined"!=typeof cas_clicked&&cas_clicked!==!1)lookup_chemical($(this).attr("data-casnum"));else{var chem_name=$(this).text();lookup_chemical(chem_name)}$("#chemical-rules-modal").dialog("open"),$("#searching-chemical-name").text($(this).text()),$("#chemical-rules-modal").dialog("option","title",$(this).text()),$body.addClass("fixed-modal-open")}),$body.find(".remove-link").length>0&&$body.on("click",".remove-link",function(ev){ev.preventDefault();var clicked_favorite_ID=$(this).data("epaintnum"),clicked_favorite_type=$(this).data("favtype")+"s",match_index=find_matching_favorites(clicked_favorite_ID,clicked_favorite_type);match_index!==!1&&(favs[clicked_favorite_type].splice(match_index,1),"Chemicals"==clicked_favorite_type?render_favorite_chemicals(favs):"Laws"==clicked_favorite_type&&render_favorite_laws(favs)),"cr-remove-favorite"==$(this).attr("id")?($body.find("#cr-save-favorite").parent("li").show(),$body.find("#cr-remove-favorite").parent("li").hide()):$(this).hasClass("fa-heart")&&update_clicked_heart($(this),!1),$.ajax({method:"POST",url:Drupal.settings.basePath+"chemical_rules/update_chem_profile",dataType:"json",data:{profile:favs}}).done(function(){console.log("done",arguments),render_favorite_chemicals(favs),render_favorite_laws(favs)}).fail(function(){console.log("fail",arguments)})}),$body.find(".save-favorite").length>0&&$body.on("click",".save-favorite",function(ev){var type=$(this).data("favtype")+"s",favorite=[];if("Chemicals"==type){if(""!==$(this).data("casnum")&&null!==$(this).data("casnum"))var cas_num=$(this).data("casnum");else var cas_num="";if(""!==$(this).data("commonname")&&null!==$(this).data("commonname")){$(this).data("commonname")}else;favorite={ID:$(this).data("epaintnum"),CAS:cas_num,SysName:$(this).data("sysname"),CommonName:$(this).data("commonname")},"cr-save-favorite"==$(this).attr("id")&&($body.find("#cr-save-favorite").parent("li").hide(),$body.find("#cr-remove-favorite").parent("li").show())}else if("Laws"==type){var law_text=$(this).prev("a").text(),law_pieces=law_text.split("—"),citation=law_pieces[0].trim(),title=law_pieces[1].trim();favorite={ID:$(this).data("epaintnum"),Citation:citation,Title:title,URL:$(this).prev("a").attr("href")},update_clicked_heart($(this),!0)}""!=favorite&&(favs[type].push(favorite),$.ajax({method:"POST",url:Drupal.settings.basePath+"chemical_rules/update_chem_profile",dataType:"json",data:{profile:favs}}).done(function(){console.log("done",arguments),render_favorite_chemicals(favs),render_favorite_laws(favs)}).fail(function(){console.log("fail",arguments)}))}),$("#chemical-rules-modal").on("dialogclose",function(){var $chemical_loading=$("#chemical-rules-loading-wrapper"),$all_wrappers=$(".chemical-rules-modal-wrapper");cr_showElementOutOfMany($chemical_loading,$all_wrappers),cr_resizeModal()});var sticky_gap=$("#cr-modal-toc-icons").offset().top;$("#chemical-rules-modal").scroll(function(){$("#chemical-rules-modal").scrollTop()>sticky_gap?($("#cr-modal-toc-icons").addClass("sticky-toc"),$("#cr-modal-toc-icons").css("width",$("#chemical-rules-modal").width()+6).css("top",$("#chemical-rules-modal").offset().top)):$("#cr-modal-toc-icons").removeClass("sticky-toc").removeAttr("style")});var sticky_gap=$("#cr-modal-toc-icons").offset().top;$("#cr-modal-toc-icons li a").on("click",function(){$body.find(".anchor-spacing").length>0&&$("#chemical-rules-modal").find("h2").removeClass("anchor-spacing"),"#cr-lists"!=$(this).attr("href")&&$("#chemical-rules-modal").find($(this).attr("href")).addClass("anchor-spacing"),$("#chemical-rules-modal").scrollTop()>sticky_gap?($("#cr-modal-toc-icons").addClass("sticky-toc"),$("#cr-modal-toc-icons").css("width",$("#chemical-rules-modal").width()).css("top",$("#chemical-rules-modal").offset().top)):$("#cr-modal-toc-icons").removeClass("sticky-toc").removeAttr("style")})}(jQuery);
//# sourceMappingURL=src/chemical_rules.js.map