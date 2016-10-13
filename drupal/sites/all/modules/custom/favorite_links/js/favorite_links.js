!function($){function reloadView(){$("#reload_favorite_links").trigger("click")}function load_links(async_setting){$("#load_more").hide(),$.ajax({url:Drupal.settings.basePath+"load_links",method:"GET",async:async_setting,data:{json:!0},success:function(data){var data=$.parseJSON(data);"false"!=data.url_data&&(favorite_urls=data.urls,favorite_url_mapping=data.url_mapping,id_label_mapping=data.label_mapping)}})}function processPageAnchors(){var ignore_panels=[".pane-views-cdx-facility-management-block",".pane-views-progress-tracker-block-1",".pane-views-to-do-block-1"];$(".panel-pane:not("+ignore_panels.join(",")+") img").each(function(){if("#"!=$(this).closest("a").attr("href")&&""!=$(this).closest("a").attr("href")&&!$(this).closest("a").hasClass("about-widget")&&!$(this).closest("a").hasClass("processed-favorite")){var linkControl=new FavoriteLink($(this));linkControl.addFavoriteButton()}}),$(".panel-pane:not("+ignore_panels.join(",")+") a:not(.favorites-ignore, .menu-link, .skip-link, .paginate_button,[href^=mailto], [href^=javascript]), .about-widget").each(function(){if($(this).text().length>0&&"#"!=$(this).attr("href")&&"/"!=$(this).attr("href")&&"#close"!=$(this).attr("href")&&!$(this).hasClass("about-widget")&&!$(this).hasClass("processed-favorite")&&""!=$(this).attr("href")){var linkControl=new FavoriteLink($(this));linkControl.setUrl($(this).attr("href")),linkControl.setTitle($(this).text()),linkControl.qtip_postion={my:"left center",at:"right center",target:$(this)},linkControl.addFavoriteButton()}})}function triggerQtip(findLink,hideQtip){try{if(1==hideQtip)return $(findLink).trigger("mouseover"),findQtip="#"+$(findLink).attr("aria-describedby");$(findLink).trigger("mouseout")}catch(err){}}function refocusLink(focus_link_id){""!=focus_link_id?$("#favorite_links-ajax-wrapper").find(focus_link_id).focus():$("#favorite_links-ajax-wrapper").find(".favorites-ignore").focus()}function processFavoriteLink(button,action,unparsed_url,label){var id,url,old_link=!1;$.isNumeric(unparsed_url)?(id=unparsed_url,old_link=!0,url="id"):url=encodeURIComponent(unparsed_url),$.ajax({url:Drupal.settings.basePath+"process_favorite_link",type:"POST",async:!1,data:{url:url,action:action,title:label,id:id},success:function(data){if(button.unbind("click"),"add"==action)reloadView(),load_links(!1),button.removeClass("add_link").removeClass("new_link").removeClass("old_link").removeClass("filled").removeClass("empty").attr("title","Remove favorite").addClass("remove_link old_link filled").attr("id",favorite_url_mapping[unparsed_url]+"__favorite_link"),button.next(".sr-only").text("Favorited. Press Ctrl + D to unfavorite");else{if(button.hasClass("in-widget")){unparsed_url=$(button).closest("tr").find("a").attr("href");var row=$(button).closest("tr"),row_num=row[0].rowIndex-1,row_total=$("#favorite_links-ajax-wrapper").find("table").find("tbody").children("tr").length-1;if(row_num<row_total){var next_link=row.next().find("a");focus_link_id="#"+next_link[0].id}else if(row_num==row_total&&1!=row_total){var previous_link=row.prev().find("a");focus_link_id="#"+previous_link[0].id}else focus_link_id="";$(button).closest("tr").remove()}else{var widget_button=$('*[id="'+id+'__favorite_link"].in-widget');unparsed_url=$(widget_button).closest("tr").find(".favorites-link").attr("href")}button=$('*[id="'+id+'__favorite_link"]'),label=id_label_mapping[id],reloadView(),button.attr("id",unparsed_url+"__"+label),button.removeClass("remove_link").removeClass("new_link").removeClass("old_link").removeClass("filled").removeClass("empty"),button.attr("title","Add favorite"),button.addClass("add_link new_link empty "),button.next(".sr-only").text("Press Ctrl + D to favorite this link.")}refocusLink(focus_link_id)}})}var focus_link_id,findLink,findQtip;$(document).ready(function(){$(document.body).on("click",".old_link",function(){var action,string_array=$(this).attr("id").split("__"),id=string_array[0],$this=$(this);action=$this.hasClass("add_link")?"add":"remove",processFavoriteLink($this,action,id,""),$this.hasClass(".in-widget")&&load_links(!0)}),$(document.body).on("click",".new_link",function(){var action,string_array=$(this).attr("id").split("__"),url=string_array[0],label=string_array[1],$this=$(this);action=$this.hasClass("add_link")?"add":"remove",processFavoriteLink($this,action,url,label),$this.hasClass(".in-widget")&&load_links(!0)}),$(document).ajaxSuccess(function(event,xhr,settings){"favorite_sites-ajax/ajax"==settings.url?refocusLink(focus_link_id):processPageAnchors()}),$(document).on("ee:new_links_to_process",function(){processPageAnchors()}),$("a").not(".menu-link",".ctools-use-modal",".skip-link",".favorites-ignore",".paginate_button",".about-widget","[href^=mailto]","[href^=javascript]").focus(function(){$("a").not(".menu-link",".ctools-use-modal",".skip-link",".favorites-ignore",".paginate_button",".about-widget","[href^=mailto]","[href^=javascript]").keydown(function(event){try{if(16===event.which){if(9===event.which)return event.stopImmediatePropagation(),!1;var linkQtip=$(this).attr("data-hasqtip"),imgQtip=$(this).find("img").attr("data-hasqtip");return linkQtip>0?(event.stopImmediatePropagation(),findLink=$(this),triggerQtip(findLink,!0)):imgQtip>0&&(event.stopImmediatePropagation(),findLink=$(this).find("img"),triggerQtip(findLink,!0)),!1}if(68===event.which&&event.ctrlKey){event.stopImmediatePropagation();var linkQtip=$(this).attr("data-hasqtip");findLink=linkQtip>0?$(this):$(this).find("img"),triggerQtip(findLink,!0);var qTipSpan=findQtip+" .favorite_hover";return $(qTipSpan).trigger("click"),triggerQtip(findLink,!0),$(this).unbind("click"),!1}}catch(e){}})})})}(jQuery);
//# sourceMappingURL=src/favorite_links.js.map