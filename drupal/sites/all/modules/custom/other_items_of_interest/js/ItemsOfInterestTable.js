var ItemsOfInterestTable;!function(a){a.fn.dataTableExt.oApi.fnPagingInfo=function(a){return{iStart:a._iDisplayStart,iEnd:a.fnDisplayEnd(),iLength:a._iDisplayLength,iTotal:a.fnRecordsTotal(),iFilteredTotal:a.fnRecordsDisplay(),iPage:a._iDisplayLength===-1?0:Math.ceil(a._iDisplayStart/a._iDisplayLength),iTotalPages:a._iDisplayLength===-1?0:Math.ceil(a.fnRecordsDisplay()/a._iDisplayLength)}},ItemsOfInterestTable=function(b,c,d){a.fn.dataTableExt.oStdClasses.sPageButton="favorites-ignore fa",b.hide();var e={bLengthChange:!1,iDisplayLength:3,oLanguage:{sSearch:"Filter:"},pagingType:"simple",dom:"iftp",fnDrawCallback:function(){var c=this.fnPagingInfo(),d=c.iPage+1,e=c.iTotalPages+1;if(e>1){var f=a("<li />",{class:"pager-current"}).html(d+" of "+e);b.find(".dataTables_paginate li:first").after(f)}}},f=!1;this.wrapper=b,this.ajax_url=c,d?d.indexOf(",")===-1?this.state_code=d:this.state_code=a.trim(d.split(",")[1]):this.state_code=!1,this.hideTable=function(){b.hide()},this.update_current_location=function(b){b.indexOf(",")===-1?this.state_code=b:this.state_code=a.trim(b.split(",")[1]),this.ajax_request()},this.ajax_request=function(){var d=this.state_code;a.ajax({beforeSend:function(){b.html("<p>Loading&hellip;</p>")},url:c,method:"POST",data:{state:d},success:function(c){var d=0;a("table[id^='datatable-']").each(function(){d=Math.max(d,parseInt(a(this).attr("id").substr("datatable-".length),10))}),d++;var g=a("<div>"+c+"</div>");g.find("table").attr("id","datatable-"+d),b.html(g.html()),g=b.find("table"),g.length>0&&(g.dataTable(e),g.removeClass("dataTable display no-footer").addClass("views-table responsive-table usa-table-borderless")),f=!0}})},this.showTable=function(){f?b.show():(this.ajax_request(),b.show())}}}(jQuery);
//# sourceMappingURL=src/ItemsOfInterestTable.js.map