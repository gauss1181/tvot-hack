widget.getTLBRfromPercent=function(d,b){var c=0;for(var a in d){if(d[a].toString().indexOf("%")!=-1){d[a]=(parseFloat(d[a])/100)*b[c];c++;if(c>=2){c=0}}}return d},widget.setupSegments=function(c,x){return;var j=[];if(c.seg){var K=c.sc||1;var z=c.sl||"h";var t=c.sp||[0,0,0,0];var a=c.sa||"tl";t=widget.getTLBRfromPercent([t[0],t[1],t[2],t[3]],c.wh);var I=0;var G=[];var h=z=="h"?0:1;function s(P,M,L){var O={wId:P,wObj:M};if(!L||x===undefined){j.push(O)}else{j.splice(x,0,O);x++}var N=M.wh[h];if(N=="a"||M.autoSize){M.autoSize=true;G.push(O)}else{I+=N}}if(c.segments){if(c.segments.length>0&&c.segments[0].hasOwnProperty("id")){var w=0;var y={};for(var J=0,o=c.segments.length;J<o;J++){var C=storage.get(c.segments[J].id);if(C){var r=c.segments[J].widget;s(r,C);w++;if(y[r]){y[r]++}else{y[r]=1}}}for(var q=w;q<K;q++){var H=Number.MAX_VALUE;var p;for(var A=0;A<c.seg.length;A++){var g=c.seg[A];var u=y[g]||0;if(u<H){H=u;p=g}}var b=widget.get(p);if(b.rr){if(b.rr=="y"){b.wh=c.wh}else{if(b.rr.indexOf("h")>-1){b.wh[0]=c.wh[0]}if(b.rr.indexOf("v")>-1){b.wh[1]=c.wh[1]}}}s(p,b,true)}}else{for(var J=0,o=c.segments.length;J<o;J++){var g=c.segments[J].originalID;var b=widget.get(g);if(!b){b=widget.get(c.segments[J].widget)}else{b.id=c.segments[J].widget}s(c.segments[J].widget,b)}}}else{var d=c.seg.length;for(var A=0,v=0;A<K;A++,v=A%d){var g=c.seg[v];var e=widget.get(g);s(g,e)}}if(c.wh[h]=="f"||(c.wh[h]=="a"&&G.length>0)){var B=project.get("pageWH");c.wh[h]=z=="h"?B[0]:B[1]}var l=z=="h"?0:1;var m=[t[0]||0,t[1]||0];var n=t[2+l]||0;var E=c.wh[h]-m[l]-n-I;if(G.length>0){var k=Math.floor(E/G.length);var D=E-(k*G.length);for(var J=0;J<G.length;J++,D--){var f=G[J].wObj.wh[h]=k+Number(D>0);I+=f}}if(c.wh[h]=="a"||c.autoSize){c.autoSize=true;c.wh[h]=I+m[l]+n}var i=0;var F=0;switch(a){case"br":m[l]=c.wh[h]-n-I;break;case"c":m[l]+=E>>1;break;case"d":i=Math.floor(E/(K+1));F=E-(i*(K+1));break}for(var J=0;J<j.length;J++,F--){m[l]+=i+Number(F>0);j[J].pos=[m[0],m[1]];m[l]+=j[J].wObj.wh[h]}}return j},widget.addOrUpdateSegments=function(k,o,l){var f=$("#"+k.id);k.segments=[];for(var n=0;n<o.length;n++){var a=widget.setSegmentBorder(k,o,n);var q=o[n];var i=q.wObj.id;if(i.substr(0,2)=="w_"||(i.substr(0,1)=="w"&&i.length==33)){var j=f.position();var d={left:j.left+q.pos[0],top:j.top+q.pos[1],wh:[q.wObj.wh[0],q.wObj.wh[1]]};var c=$("#"+i);var h=c.position();var p=d.left-h.left;var m=d.top-h.top;var r=[c.width(),c.height()];var s=r[0]!=d.wh[0]||r[1]!=d.wh[1];if(a||s){var e=$("canvas, img",c);if(a){d.border=$.merge([],q.wObj.border)}if(s){c.add(e).add($("textarea, .widgetText",c)).css({width:d.wh[0]+"px",height:d.wh[1]+"px"});e.attr({width:d.wh[0],height:d.wh[1]})}}$('[data-segment="'+i+'"]').each(function(){var u=$(this).position();var t={left:u.left+p,top:u.top+m};$(this).css({left:t.left+"px",top:t.top+"px"});widget.set(t,$(this).attr("id"))});widget.set(d,i)}else{var b=$("#"+k.id);if(b.size()>0){var j=b.offset();var g=$("#libraryWidgetDragging").position();if(g==null){g={top:5,left:5}}var d={left:j.left+q.pos[0]-g.left,top:j.top+q.pos[1]-g.top,border:q.wObj.border};if(q.wObj.autoSize){d.autoSize=true}d.wh=[q.wObj.wh[0],q.wObj.wh[1]];d.bgc=q.wObj.bgc;d.b=q.wObj.b}}k.segments.push({id:i,widget:q.wId})}f.css({width:k.wh[0]+"px",height:k.wh[1]+"px"});f.find("canvas").attr({width:k.wh[0],height:k.wh[1]});widget.set({wh:k.wh,sc:o.length,segments:k.segments},k.id)},widget.setSegmentBorder=function(g,e,b){if(!e){e=g.segments||[]}if(e&&e.length>0){var a=e.length-1;var f=g.sl||"h";var h="b";if(a>0){switch(b){case 0:h=f=="h"?"bls":"bts";break;case a:h=f=="h"?"brs":"bbs";break;default:h="bms";break}}}var c=e[b].wObj;var d=c.border;c.border=$.merge([],c[h]||c.b||[]);return !utils.arraysEqual(c.border,d||[])},widget.getLastSegment=function(c){var b=storage.get(c);var a=b&&b.segments;if(a&&a.length>0){return a[a.length-1].id}return false};widget.isMultiSegment=function(d){if(d==""){return false}var a=$("#"+d).attr("data-lockto");var c=storage.get(a);var b=c&&c.segments;if(b&&b.length>0){return true}return false};widget.addSegment=function(){$(".ui-selected").addClass("rememberSelected").each(function(){var e=$(this).attr("id");var f=$(this).attr("data-segment")==e;var c=widget.getRoots($(this));var b=widget.get(c.attr("id"));var d;if(f){d=0;for(var a=b.segments.length;d<a;d++){if(b.segments[d].id==e){d++;break}}}if(b&&b.seg){b.sc++;widget.addOrUpdateSegments(b,widget.setupSegments(b,d),project.getActivePage().find(".widgetHolder"))}});widget.resetSelection();$(".rememberSelected").removeClass("rememberSelected").addClass("ui-selected");return false};widget.deleteSegment=function(){storage.cacheStart();$(".ui-selected").each(function(){if($(this).hasClass("rootWidget")){var j=$(this).attr("id");var b=storage.get(j);var e=b&&b.segments;var h=j;var c=storage.get(h);if(e&&e.length>0){var f=e[e.length-1].id;widget.del($("#"+f));c.segments.splice(e.length-1,1);storage.set(h,c)}}else{var j=$(this).attr("data-segment");var h=widget.getRoots($(this));var c=storage.get(h.attr("id"));var f=-1;for(var d=0;d<c.segments.length;d++){if(c.segments[d].id==j){f=d;break}}var a=$("#"+$("#"+j).prev().attr("data-segment"));var g=c.segments.splice(f,1);widget.del(j);storage.set(h,c);widget.resetSelection();widget.select(null,a)}if(c.segments.length==0){widget.del($("#"+h));contextMenu.hide();propInspector.resetPropInspector()}else{}});return false};