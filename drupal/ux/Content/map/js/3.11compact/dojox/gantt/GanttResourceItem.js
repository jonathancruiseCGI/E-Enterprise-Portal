//>>built
define("dojox/gantt/GanttResourceItem","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/date/locale dojo/request dojo/on dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-style dojo/dom-attr dojo/dom-geometry dojo/keys dojo/domReady!".split(" "),function(p,g,q,u,v,r,w,m,f,d,s,x,t){return p("dojox.gantt.GanttResourceItem",[],{constructor:function(a){this.ganttChart=a;this.ownerItem=[];this.ownerNameItem=[];this.ownerTaskNodeMapping={};this.ownerTaskNodeMapping_time={};this.resourceInfo=
{};this.ownerTimeConsume={}},clearAll:function(){this.clearData();this.clearItems()},clearData:function(){this.ownerItem=[];this.ownerNameItem=[];this.ownerTaskNodeMapping={};this.ownerTaskNodeMapping_time={};this.resourceInfo={};this.ownerTimeConsume={}},clearItems:function(){this.content.firstChild&&f.destroy(this.content.firstChild)},buildResource:function(){var a={};g.forEach(this.ganttChart.arrProjects,function(b){g.forEach(b.arrTasks,function(b){b.buildResourceInfo(a)},this)},this);return a},
buildOwnerTimeConsume:function(){var a={},b;for(b in this.resourceInfo){for(var c=this.resourceInfo[b],e={},d=0;d<c.length;d++){var k=c[d],h=k.taskItem.startTime.getTime(),k=864E5*k.taskItem.duration/this.ganttChart.hsPerDay;e.min=e.min?Math.min(e.min,h):h;e.max=e.max?Math.max(e.max,h+k):h+k}e.dur=(e.max-e.min)*this.ganttChart.hsPerDay/864E5;e.min=new Date(e.min);e.max=new Date(e.max);a[b]=e}return a},refresh:function(){this.ownerTimeConsume=this.buildOwnerTimeConsume();this.contentData.firstChild.style.width=
Math.max(1200,this.ganttChart.pixelsPerDay*this.ganttChart.totalDays)+"px";for(var a in this.resourceInfo)this.refreshOwnerEntry(a)},reConstruct:function(){this.clearAll();this.resourceInfo=this.buildResource();this.ownerTimeConsume=this.buildOwnerTimeConsume();this.tableControl=f.create("table",{cellPadding:"0",cellSpacing:"0",className:"ganttResourceTableControl"});var a=this.tableControl.insertRow(this.tableControl.rows.length);this.contentHeight=this.content.offsetHeight;this.contentWidth=this.content.offsetWidth;
this.content.appendChild(this.tableControl);this.contentData=f.create("div",{className:"ganttResourceContentDataContainer"});this.contentData.appendChild(this.createPanelOwners());d.set(this.contentData,"height",this.contentHeight-this.ganttChart.panelTimeHeight+"px");var b=f.create("td",{vAlign:"top"});this.panelNames=f.create("div",{className:"ganttResourcePanelNames"});this.panelNames.appendChild(this.createPanelNamesOwners());b.appendChild(this.panelNames);a.appendChild(b);var b=f.create("td",
{vAlign:"top"}),c=f.create("div",{className:"ganttResourceDivCell"});c.appendChild(this.contentData);b.appendChild(c);a.appendChild(b);d.set(this.panelNames,{height:this.contentHeight-this.ganttChart.panelTimeHeight-this.ganttChart.scrollBarWidth+"px",width:this.ganttChart.maxWidthPanelNames+"px"});this.contentData.style.width=this.contentWidth-this.ganttChart.maxWidthPanelNames+"px";this.contentData.firstChild.style.width=this.ganttChart.pixelsPerDay*this.ganttChart.panelTime.firstChild.firstChild.rows[3].cells.length+
"px";var e=this;this.contentData.onscroll=function(){e.panelNames&&(e.panelNames.scrollTop=this.scrollTop)};this.contentData.scrollLeft=this.ganttChart.contentData.scrollLeft;for(var n in this.resourceInfo)this.createOwnerEntry(n);this.postAdjustment()},create:function(){var a=f.create("div",{innerHTML:"Resource Chart:",className:"ganttResourceHeader"},this.ganttChart.content,"after");d.set(a,"width",this.ganttChart.contentWidth+"px");a=f.create("div",{className:"ganttResourceContent"},a,"after");
d.set(a,{width:this.ganttChart.contentWidth+"px",height:(this.ganttChart.resourceChartHeight||0.8*this.ganttChart.contentHeight)+"px"});this.content=a||this.content;this.reConstruct()},postAdjustment:function(){this.contentData.firstChild.style.height=23*this.ownerItem.length+"px";this.panelNames.firstChild.style.height=23*this.ownerItem.length+"px"},refreshOwnerEntry:function(a){this.refreshOwnerItem(a);g.forEach(this.resourceInfo[a],function(b,c){this.refreshDetailedTaskEntry(a,this.ownerTaskNodeMapping[a].tasks[c][0],
b)},this)},createOwnerEntry:function(a){var b=this.contentData.firstChild,c=this.ownerItem[this.ownerItem.length-1];this.ownerTaskNodeMapping[a]={};this.ownerTaskNodeMapping[a][a]=[];var c=(c?parseInt(c.style.top):-17)+this.ganttChart.heightTaskItem+11,e=this.createOwnerItem(a,c);b.appendChild(e);this.ownerItem.push(e);this.ownerTaskNodeMapping[a][a].push(e);this.panelNames&&(b=this.createOwnerNameItem(a,c),this.panelNames.firstChild.appendChild(b),this.ownerNameItem.push(b),this.ownerTaskNodeMapping[a][a].push(b));
var d=this.ownerNameItem[this.ownerNameItem.length-1];this.panelNames&&(this.checkWidthTaskNameItem(d),b=this.createTreeImg(d),this.panelNames.firstChild.appendChild(b),this.ownerTaskNodeMapping[a][a].push(b));this.ownerTaskNodeMapping[a].taskCount=this.resourceInfo[a].length;this.ownerTaskNodeMapping[a].isOpen=!1;this.ownerTaskNodeMapping[a].tasks=[];g.forEach(this.resourceInfo[a],function(b){this.ownerTaskNodeMapping[a].tasks.push(this.createDetailedTaskEntry(a,d,b))},this);return this},createOwnerNameItem:function(a,
b){var c=f.create("div",{id:a,title:a,innerHTML:a,className:"ganttOwnerNameItem"});d.set(c,"top",b+"px");return c},refreshOwnerItem:function(a){var b=this.ownerTaskNodeMapping[a][a][0],c=this.ownerTimeConsume[a].dur,e=this.ganttChart.getPosOnDate(this.ownerTimeConsume[a].min);b.style.left=e+"px";b.style.width=c*this.ganttChart.pixelsPerWorkHour+"px";g.forEach(this.resourceInfo[a],function(a,c){var h=this.ganttChart.getPosOnDate(a.taskItem.startTime);d.set(b.childNodes[c],{left:h-e+"px",width:a.taskItem.duration*
this.ganttChart.pixelsPerWorkHour+"px"})},this)},createOwnerItem:function(a,b){var c=this.ownerTimeConsume[a].dur,e=this.ganttChart.getPosOnDate(this.ownerTimeConsume[a].min),n=f.create("div",{id:a,owner:!0,className:"ganttOwnerBar"});d.set(n,{left:e+"px",top:b+"px",width:c*this.ganttChart.pixelsPerWorkHour+"px",height:this.ganttChart.heightTaskItem+"px"});g.forEach(this.resourceInfo[a],function(b){var c=f.create("div",{id:a,className:"ganttOwnerTaskBar"},n),g=this.ganttChart.getPosOnDate(b.taskItem.startTime);
d.set(c,{left:g-e+"px",width:b.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px",height:this.ganttChart.heightTaskItem+"px"})},this);return n},refreshDetailedTaskEntry:function(a,b,c){this.refreshTaskItem(b,c)},createDetailedTaskEntry:function(a,b,c){a=[];var e=this.contentData.firstChild,f=parseInt(b.style.top),k=this.createTaskItem(c,f);k.style.display="none";e.appendChild(k);this.ownerItem.push(k);a.push(k);this.panelNames&&(c=this.createTaskNameItem(c.taskItem.name,f),this.panelNames.firstChild.appendChild(c),
c.style.display="none",this.ownerNameItem.push(c),a.push(c));this.panelNames&&(this.ownerNameItem[this.ownerNameItem.length-1].style.left=d.get(b,"left")+15+"px",b=this.createConnectingLinesPN(b,this.ownerNameItem[this.ownerNameItem.length-1]),g.forEach(b,function(a){a.style.display="none"},this),a.push({v:b[0],h:b[1]}),this.checkWidthTaskNameItem(this.ownerNameItem[this.ownerNameItem.length-1]));return a},createTaskNameItem:function(a,b){var c=f.create("div",{id:a,className:"ganttTaskNameItem",title:a,
innerHTML:a});d.set(c,"top",b+"px");return c},refreshTaskItem:function(a,b){var c=this.ganttChart.getPosOnDate(b.taskItem.startTime);d.set(a,{left:c+"px",width:b.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px"})},createTaskItem:function(a,b){var c=this.ganttChart.getPosOnDate(a.taskItem.startTime),e=f.create("div",{id:a.taskItem.name,className:"ganttTaskBar"});d.set(e,{left:c+"px",top:b+"px",width:a.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px",height:this.ganttChart.heightTaskItem+
"px"});return e},createConnectingLinesPN:function(a,b){var c=[],e=f.create("div",{innerHTML:"\x26nbsp;",className:"ganttResourceLineVerticalLeft"},this.panelNames.firstChild);e.cNode=b;e.pNode=a;var d=f.create("div",{noShade:!0,color:"#000",className:"ganttResourceLineHorizontalLeft"},this.panelNames.firstChild);d.cNode=b;d.pNode=a;this.panelNames.firstChild.appendChild(d);c.push(e);c.push(d);return c},createTreeImg:function(a){var b=f.create("div",{id:a.id,className:"ganttImageTreeExpand"});s.set(b,
"tabIndex",0);var c=this.ownerTaskNodeMapping[a.id];g.forEach(["click","keydown"],function(e){this.ganttChart._events.push(r(b,e,q.hitch(this,function(f){var k=!1,h,l;if(!("keydown"==e&&f.keyCode!=t.ENTER))if(c.isOpen)for(h in m.remove(b,"ganttImageTreeCollapse"),m.add(b,"ganttImageTreeExpand"),c.isOpen=!1,this.ownerTaskNodeMapping)l=this.ownerTaskNodeMapping[h],k?(g.forEach(l[h],function(a){d.set(a,"top",d.get(a,"top")-23*c.taskCount+"px")}),g.forEach(l.tasks,function(a){g.forEach(a,function(a){g.forEach(!a.v&&
!a.h?[a]:[a.v,a.h],function(a){d.set(a,"top",d.get(a,"top")-23*c.taskCount+"px")})})})):h==a.id&&(k=!0,g.forEach(l.tasks,function(a){g.forEach(a,function(a){this.styleOwnerItem(a,l[h][0],"none",0)},this)},this));else for(h in m.remove(b,"ganttImageTreeExpand"),m.add(b,"ganttImageTreeCollapse"),c.isOpen=!0,this.ownerTaskNodeMapping)l=this.ownerTaskNodeMapping[h],k?(g.forEach(l[h],function(a){d.set(a,"top",d.get(a,"top")+23*c.taskCount+"px")}),g.forEach(l.tasks,function(a){g.forEach(a,function(a){g.forEach(!a.v&&
!a.h?[a]:[a.v,a.h],function(a){d.set(a,"top",d.get(a,"top")+23*c.taskCount+"px")})})})):h==a.id&&(k=!0,g.forEach(l.tasks,function(a,b){g.forEach(a,function(a){this.styleOwnerItem(a,l[h][0],"inline",23*(b+1))},this)},this))})))},this);m.add(b,"ganttResourceTreeImage");d.set(b,{left:d.get(a,"left")-12+"px",top:d.get(a,"top")+3+"px"});return b},styleOwnerItem:function(a,b,c,e){a.v||a.h?(d.set(a.v,{height:Math.max(1,a.v.cNode.offsetTop-a.v.pNode.offsetTop)+"px",top:a.v.pNode.offsetTop+5+"px",left:a.v.pNode.offsetLeft-
9+"px",display:c}),d.set(a.h,{width:Math.max(1,a.h.cNode.offsetLeft-a.h.pNode.offsetLeft+4)+"px",top:a.h.cNode.offsetTop+5+"px",left:a.h.pNode.offsetLeft-9+"px",display:c})):d.set(a,{display:c,top:parseInt(b.style.top)+e+"px"})},checkWidthTaskNameItem:function(a){if(a&&a.offsetWidth+a.offsetLeft>this.ganttChart.maxWidthPanelNames){var b=Math.round((a.offsetWidth+a.offsetLeft-this.ganttChart.maxWidthPanelNames)/(a.offsetWidth/a.firstChild.length)),b=a.id.substring(0,a.firstChild.length-b-3);a.innerHTML=
b+"..."}},createPanelOwners:function(){var a=f.create("div",{className:"ganttOwnerPanel"});d.set(a,{height:this.contentHeight-this.ganttChart.panelTimeHeight-this.ganttChart.scrollBarWidth+"px"});return a},createPanelNamesOwners:function(){var a=f.create("div",{innerHTML:"\x26nbsp;",className:"ganttResourcePanelNamesOwners"});d.set(a,{height:this.contentHeight-this.ganttChart.panelTimeHeight-this.ganttChart.scrollBarWidth+"px",width:this.ganttChart.maxWidthPanelNames+"px"});return a}})});