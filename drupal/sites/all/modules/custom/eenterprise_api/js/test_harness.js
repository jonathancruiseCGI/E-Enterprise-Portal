!function(a){function b(b){var c="<table><thead><tr><th>Title</th><th>Description</th><th>Link</th></tr></thead><tbody>";return a.each(b,function(a,b){c=c+"<tr><td>"+b.Tool+"</td><td>"+b.Description+"</td><td>"+b.Link+"</td></tr>"}),c+="</tbody></table>"}function c(b){var c="<table><thead><tr><th>Resource</th><th>Topic</th><th>URL</th></tr></thead><tbody>";return a.each(b,function(a,b){c=c+"<tr><td>"+b.Resource+"</td><td>"+b.Topic+"</td><td>"+b.URL+"</td></tr>"}),c+="</tbody></table>"}var d=function(d,e,f,g,h,i,j){function k(d){var h,i,k=a("#"+e),l=a("#"+g),m=a("#"+f);a.ajax({url:"/rest_request",method:"GET",data:{url:d},dataType:"JSON",success:function(e){i=a.parseJSON(e),k.html("");var f="";0==i.length?f="No results found":"any"!=j?(a.each(i,function(a,b){f=JSON.stringify(b,void 0,4),k.append(f+"<br />"),l.text(d)}),h="local"==j?b(i):c(i),m.html(h)):k.append(i)},failure:function(a){console.log(a)}})}this.$button=a("#"+h);this.$button.click(function(){var b;"any"!=j?(b=encodeURIComponent(a("#"+d).val()),k(b)):(b=a("#"+d).val(),k(b))})};a(document).ready(function(){new d("local_request","local_json","local_table","url_used_local","search_locals","https://eenterprise-dev-portal.apps.cloud.gov/api/1.1/local_resources.json","local"),new d("state_request","state_json","state_table","url_used_state","search_states","https://eenterprise-dev-portal.apps.cloud.gov/api/1.1/state_resources.json","state")})}(jQuery);
//# sourceMappingURL=test_harness.js.map