/*!
 * jQuery UI 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */(function(a,b){function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;if(!b.href||!g||f.nodeName.toLowerCase()!=="map")return!1;h=a("img[usemap=#"+g+"]")[0];return!!h&&d(h)}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}a.ui=a.ui||{};a.ui.version||(a.extend(a.ui,{version:"1.8.18",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)});return c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){if(c===b)return g["inner"+d].call(this);return this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){if(typeof b!="number")return g["outer"+d].call(this,b);return this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!!d&&!!a.element[0].parentNode)for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;if(b[d]>0)return!0;b[d]=1,e=b[d]>0,b[d]=0;return e},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}}))})(jQuery);/*!
 * jQuery UI Widget 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}});return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e;if(f&&e.charAt(0)==="_")return h;f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b){h=f;return!1}}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))});return h}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);this.element.trigger(c,d);return!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);/*!
 * jQuery UI Mouse 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent")){a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation();return!1}}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted){b.preventDefault();return!0}}!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0;return!0}},_mouseMove:function(b){if(a.browser.msie&&!(document.documentMode>=9)&&!b.button)return this._mouseUp(b);if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b));return!this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b));return!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);/*
 * jQuery UI Position 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1];return this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]!==e){var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0}},top:function(b,c){if(c.at[1]!==e){var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];if(!c||!c.ownerDocument)return null;if(b)return this.each(function(){a.offset.setOffset(this,b)});return h.call(this)}),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);/*
 * jQuery UI Draggable 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!!this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy();return this}},_mouseCapture:function(b){var c=this.options;if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle"))return!1;this.handle=this._getHandle(b);if(!this.handle)return!1;c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")});return!0},_mouseStart:function(b){var c=this.options;this.helper=this._createHelper(b),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment();if(this._trigger("start",b)===!1){this._clear();return!1}this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.helper.addClass("ui-draggable-dragging"),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b);return!0},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1){this._mouseUp({});return!1}this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";a.ui.ddmanager&&a.ui.ddmanager.drag(this,b);return!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var d=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){d._trigger("stop",b)!==!1&&d._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b);return a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)});return c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute");return d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute"));return a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.18"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!!e.length){var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);/*
 * jQuery UI Droppable 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */(function(a,b){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var b=this.options,c=b.accept;this.isover=0,this.isout=1,this.accept=a.isFunction(c)?c:function(a){return a.is(c)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[],a.ui.ddmanager.droppables[b.scope].push(this),b.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];for(var c=0;c<b.length;c++)b[c]==this&&b.splice(c,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(b,c){b=="accept"&&(this.accept=a.isFunction(c)?c:function(a){return a.is(c)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;!!c&&(c.currentItem||c.element)[0]!=this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;!!c&&(c.currentItem||c.element)[0]!=this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current;if(!d||(d.currentItem||d.element)[0]==this.element[0])return!1;var e=!1;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"droppable");if(b.options.greedy&&!b.options.disabled&&b.options.scope==d.options.scope&&b.accept.call(b.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(b,{offset:b.element.offset()}),b.options.tolerance)){e=!0;return!1}});if(e)return!1;if(this.accept.call(this.element[0],d.currentItem||d.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d));return this.element}return!1},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.extend(a.ui.droppable,{version:"1.8.18"}),a.ui.intersect=function(b,c,d){if(!c.offset)return!1;var e=(b.positionAbs||b.position.absolute).left,f=e+b.helperProportions.width,g=(b.positionAbs||b.position.absolute).top,h=g+b.helperProportions.height,i=c.offset.left,j=i+c.proportions.width,k=c.offset.top,l=k+c.proportions.height;switch(d){case"fit":return i<=e&&f<=j&&k<=g&&h<=l;case"intersect":return i<e+b.helperProportions.width/2&&f-b.helperProportions.width/2<j&&k<g+b.helperProportions.height/2&&h-b.helperProportions.height/2<l;case"pointer":var m=(b.positionAbs||b.position.absolute).left+(b.clickOffset||b.offset.click).left,n=(b.positionAbs||b.position.absolute).top+(b.clickOffset||b.offset.click).top,o=a.ui.isOver(n,m,k,i,c.proportions.height,c.proportions.width);return o;case"touch":return(g>=k&&g<=l||h>=k&&h<=l||g<k&&h>l)&&(e>=i&&e<=j||f>=i&&f<=j||e<i&&f>j);default:return!1}},a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(b,c){var d=a.ui.ddmanager.droppables[b.options.scope]||[],e=c?c.type:null,f=(b.currentItem||b.element).find(":data(droppable)").andSelf();droppablesLoop:for(var g=0;g<d.length;g++){if(d[g].options.disabled||b&&!d[g].accept.call(d[g].element[0],b.currentItem||b.element))continue;for(var h=0;h<f.length;h++)if(f[h]==d[g].element[0]){d[g].proportions.height=0;continue droppablesLoop}d[g].visible=d[g].element.css("display")!="none";if(!d[g].visible)continue;e=="mousedown"&&d[g]._activate.call(d[g],c),d[g].offset=d[g].element.offset(),d[g].proportions={width:d[g].element[0].offsetWidth,height:d[g].element[0].offsetHeight}}},drop:function(b,c){var d=!1;a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){!this.options||(!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,c)))});return d},dragStart:function(b,c){b.element.parents(":not(body,html)").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var d=a.ui.intersect(b,this,this.options.tolerance),e=!d&&this.isover==1?"isout":d&&this.isover==0?"isover":null;if(!e)return;var f;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");g.length&&(f=a.data(g[0],"droppable"),f.greedyChild=e=="isover"?1:0)}f&&e=="isover"&&(f.isover=0,f.isout=1,f._out.call(f,c)),this[e]=1,this[e=="isout"?"isover":"isout"]=0,this[e=="isover"?"_over":"_out"].call(this,c),f&&e=="isout"&&(f.isout=0,f.isover=1,f._over.call(f,c))}})},dragStop:function(b,c){b.element.parents(":not(body,html)").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}}})(jQuery);/*
 * jQuery UI Resizable 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */(function(a,b){a.widget("ui.resizable",a.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var b=this,c=this.options;this.element.addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=c.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");var d=this.handles.split(",");this.handles={};for(var e=0;e<d.length;e++){var f=a.trim(d[e]),g="ui-resizable-"+f,h=a('<div class="ui-resizable-handle '+g+'"></div>');/sw|se|ne|nw/.test(f)&&h.css({zIndex:++c.zIndex}),"se"==f&&h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[f]=".ui-resizable-"+f,this.element.append(h)}}this._renderAxis=function(b){b=b||this.element;for(var c in this.handles){this.handles[c].constructor==String&&(this.handles[c]=a(this.handles[c],this.element).show());if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var d=a(this.handles[c],this.element),e=0;e=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth();var f=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join("");b.css(f,e),this._proportionallyResize()}if(!a(this.handles[c]).length)continue}},this._renderAxis(this.element),this._handles=a(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!b.resizing){if(this.className)var a=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=a&&a[1]?a[1]:"se"}}),c.autoHide&&(this._handles.hide(),a(this.element).addClass("ui-resizable-autohide").hover(function(){c.disabled||(a(this).removeClass("ui-resizable-autohide"),b._handles.show())},function(){c.disabled||b.resizing||(a(this).addClass("ui-resizable-autohide"),b._handles.hide())})),this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(b){a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var c=this.element;c.after(this.originalElement.css({position:c.css("position"),width:c.outerWidth(),height:c.outerHeight(),top:c.css("top"),left:c.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle),b(this.originalElement);return this},_mouseCapture:function(b){var c=!1;for(var d in this.handles)a(this.handles[d])[0]==b.target&&(c=!0);return!this.options.disabled&&c},_mouseStart:function(b){var d=this.options,e=this.element.position(),f=this.element;this.resizing=!0,this.documentScroll={top:a(document).scrollTop(),left:a(document).scrollLeft()},(f.is(".ui-draggable")||/absolute/.test(f.css("position")))&&f.css({position:"absolute",top:e.top,left:e.left}),this._renderProxy();var g=c(this.helper.css("left")),h=c(this.helper.css("top"));d.containment&&(g+=a(d.containment).scrollLeft()||0,h+=a(d.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:g,top:h},this.size=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalSize=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalPosition={left:g,top:h},this.sizeDiff={width:f.outerWidth()-f.width(),height:f.outerHeight()-f.height()},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio=typeof d.aspectRatio=="number"?d.aspectRatio:this.originalSize.width/this.originalSize.height||1;var i=a(".ui-resizable-"+this.axis).css("cursor");a("body").css("cursor",i=="auto"?this.axis+"-resize":i),f.addClass("ui-resizable-resizing"),this._propagate("start",b);return!0},_mouseDrag:function(b){var c=this.helper,d=this.options,e={},f=this,g=this.originalMousePosition,h=this.axis,i=b.pageX-g.left||0,j=b.pageY-g.top||0,k=this._change[h];if(!k)return!1;var l=k.apply(this,[b,i,j]),m=a.browser.msie&&a.browser.version<7,n=this.sizeDiff;this._updateVirtualBoundaries(b.shiftKey);if(this._aspectRatio||b.shiftKey)l=this._updateRatio(l,b);l=this._respectSize(l,b),this._propagate("resize",b),c.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(l),this._trigger("resize",b,this.ui());return!1},_mouseStop:function(b){this.resizing=!1;var c=this.options,d=this;if(this._helper){var e=this._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&a.ui.hasScroll(e[0],"left")?0:d.sizeDiff.height,h=f?0:d.sizeDiff.width,i={width:d.helper.width()-h,height:d.helper.height()-g},j=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,k=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;c.animate||this.element.css(a.extend(i,{top:k,left:j})),d.helper.height(d.size.height),d.helper.width(d.size.width),this._helper&&!c.animate&&this._proportionallyResize()}a("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove();return!1},_updateVirtualBoundaries:function(a){var b=this.options,c,e,f,g,h;h={minWidth:d(b.minWidth)?b.minWidth:0,maxWidth:d(b.maxWidth)?b.maxWidth:Infinity,minHeight:d(b.minHeight)?b.minHeight:0,maxHeight:d(b.maxHeight)?b.maxHeight:Infinity};if(this._aspectRatio||a)c=h.minHeight*this.aspectRatio,f=h.minWidth/this.aspectRatio,e=h.maxHeight*this.aspectRatio,g=h.maxWidth/this.aspectRatio,c>h.minWidth&&(h.minWidth=c),f>h.minHeight&&(h.minHeight=f),e<h.maxWidth&&(h.maxWidth=e),g<h.maxHeight&&(h.maxHeight=g);this._vBoundaries=h},_updateCache:function(a){var b=this.options;this.offset=this.helper.offset(),d(a.left)&&(this.position.left=a.left),d(a.top)&&(this.position.top=a.top),d(a.height)&&(this.size.height=a.height),d(a.width)&&(this.size.width=a.width)},_updateRatio:function(a,b){var c=this.options,e=this.position,f=this.size,g=this.axis;d(a.height)?a.width=a.height*this.aspectRatio:d(a.width)&&(a.height=a.width/this.aspectRatio),g=="sw"&&(a.left=e.left+(f.width-a.width),a.top=null),g=="nw"&&(a.top=e.top+(f.height-a.height),a.left=e.left+(f.width-a.width));return a},_respectSize:function(a,b){var c=this.helper,e=this._vBoundaries,f=this._aspectRatio||b.shiftKey,g=this.axis,h=d(a.width)&&e.maxWidth&&e.maxWidth<a.width,i=d(a.height)&&e.maxHeight&&e.maxHeight<a.height,j=d(a.width)&&e.minWidth&&e.minWidth>a.width,k=d(a.height)&&e.minHeight&&e.minHeight>a.height;j&&(a.width=e.minWidth),k&&(a.height=e.minHeight),h&&(a.width=e.maxWidth),i&&(a.height=e.maxHeight);var l=this.originalPosition.left+this.originalSize.width,m=this.position.top+this.size.height,n=/sw|nw|w/.test(g),o=/nw|ne|n/.test(g);j&&n&&(a.left=l-e.minWidth),h&&n&&(a.left=l-e.maxWidth),k&&o&&(a.top=m-e.minHeight),i&&o&&(a.top=m-e.maxHeight);var p=!a.width&&!a.height;p&&!a.left&&a.top?a.top=null:p&&!a.top&&a.left&&(a.left=null);return a},_proportionallyResize:function(){var b=this.options;if(!!this._proportionallyResizeElements.length){var c=this.helper||this.element;for(var d=0;d<this._proportionallyResizeElements.length;d++){var e=this._proportionallyResizeElements[d];if(!this.borderDif){var f=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],g=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];this.borderDif=a.map(f,function(a,b){var c=parseInt(a,10)||0,d=parseInt(g[b],10)||0;return c+d})}if(a.browser.msie&&(!!a(c).is(":hidden")||!!a(c).parents(":hidden").length))continue;e.css({height:c.height()-this.borderDif[0]-this.borderDif[2]||0,width:c.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset();if(this._helper){this.helper=this.helper||a('<div style="overflow:hidden;"></div>');var d=a.browser.msie&&a.browser.version<7,e=d?1:0,f=d?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+f,height:this.element.outerHeight()+f,position:"absolute",left:this.elementOffset.left-e+"px",top:this.elementOffset.top-e+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(a,b,c){return{width:this.originalSize.width+b}},w:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{left:f.left+b,width:e.width-b}},n:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{top:f.top+c,height:e.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),b!="resize"&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.extend(a.ui.resizable,{version:"1.8.18"}),a.ui.plugin.add("resizable","alsoResize",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=function(b){a(b).each(function(){var b=a(this);b.data("resizable-alsoresize",{width:parseInt(b.width(),10),height:parseInt(b.height(),10),left:parseInt(b.css("left"),10),top:parseInt(b.css("top"),10)})})};typeof e.alsoResize=="object"&&!e.alsoResize.parentNode?e.alsoResize.length?(e.alsoResize=e.alsoResize[0],f(e.alsoResize)):a.each(e.alsoResize,function(a){f(a)}):f(e.alsoResize)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0},i=function(b,d){a(b).each(function(){var b=a(this),e=a(this).data("resizable-alsoresize"),f={},g=d&&d.length?d:b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(g,function(a,b){var c=(e[b]||0)+(h[b]||0);c&&c>=0&&(f[b]=c||null)}),b.css(f)})};typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?a.each(e.alsoResize,function(a,b){i(a,b)}):i(e.alsoResize)},stop:function(b,c){a(this).removeData("resizable-alsoresize")}}),a.ui.plugin.add("resizable","animate",{stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d._proportionallyResizeElements,g=f.length&&/textarea/i.test(f[0].nodeName),h=g&&a.ui.hasScroll(f[0],"left")?0:d.sizeDiff.height,i=g?0:d.sizeDiff.width,j={width:d.size.width-i,height:d.size.height-h},k=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,l=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;d.element.animate(a.extend(j,l&&k?{top:l,left:k}:{}),{duration:e.animateDuration,easing:e.animateEasing,step:function(){var c={width:parseInt(d.element.css("width"),10),height:parseInt(d.element.css("height"),10),top:parseInt(d.element.css("top"),10),left:parseInt(d.element.css("left"),10)};f&&f.length&&a(f[0]).css({width:c.width,height:c.height}),d._updateCache(c),d._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(b,d){var e=a(this).data("resizable"),f=e.options,g=e.element,h=f.containment,i=h instanceof a?h.get(0):/parent/.test(h)?g.parent().get(0):h;if(!!i){e.containerElement=a(i);if(/document/.test(h)||h==document)e.containerOffset={left:0,top:0},e.containerPosition={left:0,top:0},e.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight};else{var j=a(i),k=[];a(["Top","Right","Left","Bottom"]).each(function(a,b){k[a]=c(j.css("padding"+b))}),e.containerOffset=j.offset(),e.containerPosition=j.position(),e.containerSize={height:j.innerHeight()-k[3],width:j.innerWidth()-k[1]};var l=e.containerOffset,m=e.containerSize.height,n=e.containerSize.width,o=a.ui.hasScroll(i,"left")?i.scrollWidth:n,p=a.ui.hasScroll(i)?i.scrollHeight:m;e.parentData={element:i,left:l.left,top:l.top,width:o,height:p}}}},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.containerSize,g=d.containerOffset,h=d.size,i=d.position,j=d._aspectRatio||b.shiftKey,k={top:0,left:0},l=d.containerElement;l[0]!=document&&/static/.test(l.css("position"))&&(k=g),i.left<(d._helper?g.left:0)&&(d.size.width=d.size.width+(d._helper?d.position.left-g.left:d.position.left-k.left),j&&(d.size.height=d.size.width/e.aspectRatio),d.position.left=e.helper?g.left:0),i.top<(d._helper?g.top:0)&&(d.size.height=d.size.height+(d._helper?d.position.top-g.top:d.position.top),j&&(d.size.width=d.size.height*e.aspectRatio),d.position.top=d._helper?g.top:0),d.offset.left=d.parentData.left+d.position.left,d.offset.top=d.parentData.top+d.position.top;var m=Math.abs((d._helper?d.offset.left-k.left:d.offset.left-k.left)+d.sizeDiff.width),n=Math.abs((d._helper?d.offset.top-k.top:d.offset.top-g.top)+d.sizeDiff.height),o=d.containerElement.get(0)==d.element.parent().get(0),p=/relative|absolute/.test(d.containerElement.css("position"));o&&p&&(m-=d.parentData.left),m+d.size.width>=d.parentData.width&&(d.size.width=d.parentData.width-m,j&&(d.size.height=d.size.width/d.aspectRatio)),n+d.size.height>=d.parentData.height&&(d.size.height=d.parentData.height-n,j&&(d.size.width=d.size.height*d.aspectRatio))},stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.position,g=d.containerOffset,h=d.containerPosition,i=d.containerElement,j=a(d.helper),k=j.offset(),l=j.outerWidth()-d.sizeDiff.width,m=j.outerHeight()-d.sizeDiff.height;d._helper&&!e.animate&&/relative/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m}),d._helper&&!e.animate&&/static/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m})}}),a.ui.plugin.add("resizable","ghost",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size;d.ghost=d.originalElement.clone(),d.ghost.css({opacity:.25,display:"block",position:"relative",height:f.height,width:f.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost=="string"?e.ghost:""),d.ghost.appendTo(d.helper)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})},stop:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.helper&&d.helper.get(0).removeChild(d.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size,g=d.originalSize,h=d.originalPosition,i=d.axis,j=e._aspectRatio||b.shiftKey;e.grid=typeof e.grid=="number"?[e.grid,e.grid]:e.grid;var k=Math.round((f.width-g.width)/(e.grid[0]||1))*(e.grid[0]||1),l=Math.round((f.height-g.height)/(e.grid[1]||1))*(e.grid[1]||1);/^(se|s|e)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l):/^(ne)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l):/^(sw)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.left=h.left-k):(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l,d.position.left=h.left-k)}});var c=function(a){return parseInt(a,10)||0},d=function(a){return!isNaN(parseInt(a,10))}})(jQuery);/*
 * jQuery UI Selectable 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */(function(a,b){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var b=this;this.element.addClass("ui-selectable"),this.dragged=!1;var c;this.refresh=function(){c=a(b.options.filter,b.element[0]),c.addClass("ui-selectee"),c.each(function(){var b=a(this),c=b.offset();a.data(this,"selectable-item",{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass("ui-selected"),selecting:b.hasClass("ui-selecting"),unselecting:b.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=c.addClass("ui-selectee"),this._mouseInit(),this.helper=a("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"),this._mouseDestroy();return this},_mouseStart:function(b){var c=this;this.opos=[b.pageX,b.pageY];if(!this.options.disabled){var d=this.options;this.selectees=a(d.filter,this.element[0]),this._trigger("start",b),a(d.appendTo).append(this.helper),this.helper.css({left:b.clientX,top:b.clientY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=a.data(this,"selectable-item");d.startselected=!0,!b.metaKey&&!b.ctrlKey&&(d.$element.removeClass("ui-selected"),d.selected=!1,d.$element.addClass("ui-unselecting"),d.unselecting=!0,c._trigger("unselecting",b,{unselecting:d.element}))}),a(b.target).parents().andSelf().each(function(){var d=a.data(this,"selectable-item");if(d){var e=!b.metaKey&&!b.ctrlKey||!d.$element.hasClass("ui-selected");d.$element.removeClass(e?"ui-unselecting":"ui-selected").addClass(e?"ui-selecting":"ui-unselecting"),d.unselecting=!e,d.selecting=e,d.selected=e,e?c._trigger("selecting",b,{selecting:d.element}):c._trigger("unselecting",b,{unselecting:d.element});return!1}})}},_mouseDrag:function(b){var c=this;this.dragged=!0;if(!this.options.disabled){var d=this.options,e=this.opos[0],f=this.opos[1],g=b.pageX,h=b.pageY;if(e>g){var i=g;g=e,e=i}if(f>h){var i=h;h=f,f=i}this.helper.css({left:e,top:f,width:g-e,height:h-f}),this.selectees.each(function(){var i=a.data(this,"selectable-item");if(!!i&&i.element!=c.element[0]){var j=!1;d.tolerance=="touch"?j=!(i.left>g||i.right<e||i.top>h||i.bottom<f):d.tolerance=="fit"&&(j=i.left>e&&i.right<g&&i.top>f&&i.bottom<h),j?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,c._trigger("selecting",b,{selecting:i.element}))):(i.selecting&&((b.metaKey||b.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),c._trigger("unselecting",b,{unselecting:i.element}))),i.selected&&!b.metaKey&&!b.ctrlKey&&!i.startselected&&(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,c._trigger("unselecting",b,{unselecting:i.element})))}});return!1}},_mouseStop:function(b){var c=this;this.dragged=!1;var d=this.options;a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-unselecting"),d.unselecting=!1,d.startselected=!1,c._trigger("unselected",b,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger("selected",b,{selected:d.element})}),this._trigger("stop",b),this.helper.remove();return!1}}),a.extend(a.ui.selectable,{version:"1.8.18"})})(jQuery);/*
 * jQuery UI Sortable 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */(function(a,b){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var a=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?a.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},destroy:function(){a.Widget.prototype.destroy.call(this),this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var b=this.items.length-1;b>=0;b--)this.items[b].item.removeData(this.widgetName+"-item");return this},_setOption:function(b,c){b==="disabled"?(this.options[b]=c,this.widget()[c?"addClass":"removeClass"]("ui-sortable-disabled")):a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(b,c){var d=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type=="static")return!1;this._refreshItems(b);var e=null,f=this,g=a(b.target).parents().each(function(){if(a.data(this,d.widgetName+"-item")==f){e=a(this);return!1}});a.data(b.target,d.widgetName+"-item")==f&&(e=a(b.target));if(!e)return!1;if(this.options.handle&&!c){var h=!1;a(this.options.handle,e).find("*").andSelf().each(function(){this==b.target&&(h=!0)});if(!h)return!1}this.currentItem=e,this._removeCurrentsFromItems();return!0},_mouseStart:function(b,c,d){var e=this.options,f=this;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),e.containment&&this._setContainment(),e.cursor&&(a("body").css("cursor")&&(this._storedCursor=a("body").css("cursor")),a("body").css("cursor",e.cursor)),e.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",e.opacity)),e.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",e.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!d)for(var g=this.containers.length-1;g>=0;g--)this.containers[g]._trigger("activate",b,f._uiHash(this));a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b);return!0},_mouseDrag:function(b){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){var c=this.options,d=!1;this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<c.scrollSensitivity?this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop+c.scrollSpeed:b.pageY-this.overflowOffset.top<c.scrollSensitivity&&(this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop-c.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<c.scrollSensitivity?this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft+c.scrollSpeed:b.pageX-this.overflowOffset.left<c.scrollSensitivity&&(this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft-c.scrollSpeed)):(b.pageY-a(document).scrollTop()<c.scrollSensitivity?d=a(document).scrollTop(a(document).scrollTop()-c.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<c.scrollSensitivity&&(d=a(document).scrollTop(a(document).scrollTop()+c.scrollSpeed)),b.pageX-a(document).scrollLeft()<c.scrollSensitivity?d=a(document).scrollLeft(a(document).scrollLeft()-c.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<c.scrollSensitivity&&(d=a(document).scrollLeft(a(document).scrollLeft()+c.scrollSpeed))),d!==!1&&a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var e=this.items.length-1;e>=0;e--){var f=this.items[e],g=f.item[0],h=this._intersectsWithPointer(f);if(!h)continue;if(g!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=g&&!a.ui.contains(this.placeholder[0],g)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],g):!0)){this.direction=h==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(f))this._rearrange(b,f);else break;this._trigger("change",b,this._uiHash());break}}this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs;return!1},_mouseStop:function(b,c){if(!!b){a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b);if(this.options.revert){var d=this,e=d.placeholder.offset();d.reverting=!0,a(this.helper).animate({left:e.left-this.offset.parent.left-d.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-d.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1}},cancel:function(){var b=this;if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("deactivate",null,b._uiHash(this)),this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",null,b._uiHash(this)),this.containers[c].containerCache.over=0)}this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem));return this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"=");return d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")});return d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l=d+j>h&&d+j<i&&b+k>f&&b+k<g;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?l:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(b){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top,b.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left,b.width),e=c&&d,f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();if(!e)return!1;return this.floating?g&&g=="right"||f=="down"?2:1:f&&(f=="down"?2:1)},_intersectsWithSides:function(b){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top+b.height/2,b.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left+b.width/2,b.width),e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return this.floating&&f?f=="right"&&d||f=="left"&&!d:e&&(e=="down"&&c||e=="up"&&!c)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){this._refreshItems(a),this.refreshPositions();return this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){var c=this,d=[],e=[],f=this._connectWith();if(f&&b)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&e.push([a.isFunction(j.options.items)?j.options.items.call(j.element):a(j.options.items,j.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),j])}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var g=e.length-1;g>=0;g--)e[g][0].each(function(){d.push(this)});return a(d)},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");for(var b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(b){this.items=[],this.containers=[this];var c=this.items,d=this,e=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],f=this._connectWith();if(f&&this.ready)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&(e.push([a.isFunction(j.options.items)?j.options.items.call(j.element[0],b,{item:this.currentItem}):a(j.options.items,j.element),j]),this.containers.push(j))}}for(var g=e.length-1;g>=0;g--){var k=e[g][1],l=e[g][0];for(var i=0,m=l.length;i<m;i++){var n=a(l[i]);n.data(this.widgetName+"-item",k),c.push({item:n,instance:k,width:0,height:0,left:0,top:0})}}},refreshPositions:function(b){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var c=this.items.length-1;c>=0;c--){var d=this.items[c];if(d.instance!=this.currentContainer&&this.currentContainer&&d.item[0]!=this.currentItem[0])continue;var e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item;b||(d.width=e.outerWidth(),d.height=e.outerHeight());var f=e.offset();d.left=f.left,d.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var c=this.containers.length-1;c>=0;c--){var f=this.containers[c].element.offset();this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight()}return this},_createPlaceholder:function(b){var c=b||this,d=c.options;if(!d.placeholder||d.placeholder.constructor==String){var e=d.placeholder;d.placeholder={element:function(){var b=a(document.createElement(c.currentItem[0].nodeName)).addClass(e||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];e||(b.style.visibility="hidden");return b},update:function(a,b){if(!e||!!d.forcePlaceholderSize)b.height()||b.height(c.currentItem.innerHeight()-parseInt(c.currentItem.css("paddingTop")||0,10)-parseInt(c.currentItem.css("paddingBottom")||0,10)),b.width()||b.width(c.currentItem.innerWidth()-parseInt(c.currentItem.css("paddingLeft")||0,10)-parseInt(c.currentItem.css("paddingRight")||0,10))}}}c.placeholder=a(d.placeholder.element.call(c.element,c.currentItem)),c.currentItem.after(c.placeholder),d.placeholder.update(c,c.placeholder)},_contactContainers:function(b){var c=null,d=null;for(var e=this.containers.length-1;e>=0;e--){if(a.ui.contains(this.currentItem[0],this.containers[e].element[0]))continue;if(this._intersectsWith(this.containers[e].containerCache)){if(c&&a.ui.contains(this.containers[e].element[0],c.element[0]))continue;c=this.containers[e],d=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",b,this._uiHash(this)),this.containers[e].containerCache.over=0)}if(!!c)if(this.containers.length===1)this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1;else if(this.currentContainer!=this.containers[d]){var f=1e4,g=null,h=this.positionAbs[this.containers[d].floating?"left":"top"];for(var i=this.items.length-1;i>=0;i--){if(!a.ui.contains(this.containers[d].element[0],this.items[i].item[0]))continue;var j=this.items[i][this.containers[d].floating?"left":"top"];Math.abs(j-h)<f&&(f=Math.abs(j-h),g=this.items[i])}if(!g&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[d],g?this._rearrange(b,g,null,!0):this._rearrange(b,null,this.containers[d].element,!0),this._trigger("change",b,this._uiHash()),this.containers[d]._trigger("change",b,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):c.helper=="clone"?this.currentItem.clone():this.currentItem;d.parents("body").length||a(c.appendTo!="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(d[0].style.width==""||c.forceHelperSize)&&d.width(this.currentItem.width()),(d[0].style.height==""||c.forceHelperSize)&&d.height(this.currentItem.height());return d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)){var c=a(b.containment)[0],d=a(b.containment).offset(),e=a(c).css("overflow")!="hidden";this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(e?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(e?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName);this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());var f=b.pageX,g=b.pageY;if(this.originalPosition){this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top));if(c.grid){var h=this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1];g=this.containment?h-this.offset.click.top<this.containment[1]||h-this.offset.click.top>this.containment[3]?h-this.offset.click.top<this.containment[1]?h+c.grid[1]:h-c.grid[1]:h:h;var i=this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0];f=this.containment?i-this.offset.click.left<this.containment[0]||i-this.offset.click.left>this.containment[2]?i-this.offset.click.left<this.containment[0]?i+c.grid[0]:i-c.grid[0]:i:i}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this,f=this.counter;window.setTimeout(function(){f==e.counter&&e.refreshPositions(!d)},0)},_clear:function(b,c){this.reverting=!1;var d=[],e=this;!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var f in this._storedCSS)if(this._storedCSS[f]=="auto"||this._storedCSS[f]=="static")this._storedCSS[f]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!c&&d.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!c&&d.push(function(a){this._trigger("update",a,this._uiHash())});if(!a.ui.contains(this.element[0],this.currentItem[0])){c||d.push(function(a){this._trigger("remove",a,this._uiHash())});for(var f=this.containers.length-1;f>=0;f--)a.ui.contains(this.containers[f].element[0],this.currentItem[0])&&!c&&(d.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.containers[f])),d.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.containers[f])))}for(var f=this.containers.length-1;f>=0;f--)c||d.push(function(a){return function(b){a._trigger("deactivate",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over&&(d.push(function(a){return function(b){a._trigger("out",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over=0);this._storedCursor&&a("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!c){this._trigger("beforeStop",b,this._uiHash());for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}return!1}c||this._trigger("beforeStop",b,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!c){for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}this.fromOutside=!1;return!0},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}}),a.extend(a.ui.sortable,{version:"1.8.18"})})(jQuery);/*
 * jQuery UI Effects 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */jQuery.effects||function(a,b){function l(b){if(!b||typeof b=="number"||a.fx.speeds[b])return!0;if(typeof b=="string"&&!a.effects[b])return!0;return!1}function k(b,c,d,e){typeof b=="object"&&(e=c,d=null,c=b,b=c.effect),a.isFunction(c)&&(e=c,d=null,c={});if(typeof c=="number"||a.fx.speeds[c])e=d,d=c,c={};a.isFunction(d)&&(e=d,d=null),c=c||{},d=d||c.duration,d=a.fx.off?0:typeof d=="number"?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,e=e||c.complete;return[b,c,d,e]}function j(a,b){var c={_:0},d;for(d in b)a[d]!=b[d]&&(c[d]=b[d]);return c}function i(b){var c,d;for(c in b)d=b[c],(d==null||a.isFunction(d)||c in g||/scrollbar/.test(c)||!/color/i.test(c)&&isNaN(parseFloat(d)))&&delete b[c];return b}function h(){var a=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,b={},c,d;if(a&&a.length&&a[0]&&a[a[0]]){var e=a.length;while(e--)c=a[e],typeof a[c]=="string"&&(d=c.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),b[d]=a[c])}else for(c in a)typeof a[c]=="string"&&(b[c]=a[c]);return b}function d(b,d){var e;do{e=a.curCSS(b,d);if(e!=""&&e!="transparent"||a.nodeName(b,"body"))break;d="backgroundColor"}while(b=b.parentNode);return c(e)}function c(b){var c;if(b&&b.constructor==Array&&b.length==3)return b;if(c=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))return[parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3],10)];if(c=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b))return[parseFloat(c[1])*2.55,parseFloat(c[2])*2.55,parseFloat(c[3])*2.55];if(c=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))return[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)];if(c=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))return[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)];if(c=/rgba\(0, 0, 0, 0\)/.exec(b))return e.transparent;return e[a.trim(b).toLowerCase()]}a.effects={},a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(b,e){a.fx.step[e]=function(a){a.colorInit||(a.start=d(a.elem,e),a.end=c(a.end),a.colorInit=!0),a.elem.style[e]="rgb("+Math.max(Math.min(parseInt(a.pos*(a.end[0]-a.start[0])+a.start[0],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[1]-a.start[1])+a.start[1],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[2]-a.start[2])+a.start[2],10),255),0)+")"}});var e={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=function(b,c,d,e){a.isFunction(d)&&(e=d,d=null);return this.queue(function(){var g=a(this),k=g.attr("style")||" ",l=i(h.call(this)),m,n=g.attr("class");a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),m=i(h.call(this)),g.attr("class",n),g.animate(j(l,m),{queue:!1,duration:c,easing:d,complete:function(){a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),typeof g.attr("style")=="object"?(g.attr("style").cssText="",g.attr("style").cssText=k):g.attr("style",k),e&&e.apply(this,arguments),a.dequeue(this)}})})},a.fn.extend({_addClass:a.fn.addClass,addClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{add:b},c,d,e]):this._addClass(b)},_removeClass:a.fn.removeClass,removeClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{remove:b},c,d,e]):this._removeClass(b)},_toggleClass:a.fn.toggleClass,toggleClass:function(c,d,e,f,g){return typeof d=="boolean"||d===b?e?a.effects.animateClass.apply(this,[d?{add:c}:{remove:c},e,f,g]):this._toggleClass(c,d):a.effects.animateClass.apply(this,[{toggle:c},d,e,f])},switchClass:function(b,c,d,e,f){return a.effects.animateClass.apply(this,[{add:c,remove:b},d,e,f])}}),a.extend(a.effects,{version:"1.8.18",save:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.data("ec.storage."+b[c],a[0].style[b[c]])},restore:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.css(b[c],a.data("ec.storage."+b[c]))},setMode:function(a,b){b=="toggle"&&(b=a.is(":hidden")?"show":"hide");return b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e=document.activeElement;b.wrap(d),(b[0]===e||a.contains(b[0],e))&&a(e).focus(),d=b.parent(),b.css("position")=="static"?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"}));return d.css(c).show()},removeWrapper:function(b){var c,d=document.activeElement;if(b.parent().is(".ui-effects-wrapper")){c=b.parent().replaceWith(b),(b[0]===d||a.contains(b[0],d))&&a(d).focus();return c}return b},setTransition:function(b,c,d,e){e=e||{},a.each(c,function(a,c){unit=b.cssUnit(c),unit[0]>0&&(e[c]=unit[0]*d+unit[1])});return e}}),a.fn.extend({effect:function(b,c,d,e){var f=k.apply(this,arguments),g={options:f[1],duration:f[2],callback:f[3]},h=g.options.mode,i=a.effects[b];if(a.fx.off||!i)return h?this[h](g.duration,g.callback):this.each(function(){g.callback&&g.callback.call(this)});return i.call(this,g)},_show:a.fn.show,show:function(a){if(l(a))return this._show.apply(this,arguments);var b=k.apply(this,arguments);b[1].mode="show";return this.effect.apply(this,b)},_hide:a.fn.hide,hide:function(a){if(l(a))return this._hide.apply(this,arguments);var b=k.apply(this,arguments);b[1].mode="hide";return this.effect.apply(this,b)},__toggle:a.fn.toggle,toggle:function(b){if(l(b)||typeof b=="boolean"||a.isFunction(b))return this.__toggle.apply(this,arguments);var c=k.apply(this,arguments);c[1].mode="toggle";return this.effect.apply(this,c)},cssUnit:function(b){var c=this.css(b),d=[];a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])});return d}}),a.easing.jswing=a.easing.swing,a.extend(a.easing,{def:"easeOutQuad",swing:function(b,c,d,e,f){return a.easing[a.easing.def](b,c,d,e,f)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;g||(g=e*.3*1.5);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,c,d,e,f,g){g==b&&(g=1.70158);return e*(c/=f)*c*((g+1)*c-g)+d},easeOutBack:function(a,c,d,e,f,g){g==b&&(g=1.70158);return e*((c=c/f-1)*c*((g+1)*c+g)+1)+d},easeInOutBack:function(a,c,d,e,f,g){g==b&&(g=1.70158);if((c/=f/2)<1)return e/2*c*c*(((g*=1.525)+1)*c-g)+d;return e/2*((c-=2)*c*(((g*=1.525)+1)*c+g)+2)+d},easeInBounce:function(b,c,d,e,f){return e-a.easing.easeOutBounce(b,f-c,0,e,f)+d},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(b,c,d,e,f){if(c<f/2)return a.easing.easeInBounce(b,c*2,0,e,f)*.5+d;return a.easing.easeOutBounce(b,c*2-f,0,e,f)*.5+e*.5+d}})}(jQuery);
 /*
 * jQuery UI Slider 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */(function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=a(this).data("index.ui-slider-handle"),f,g,h,i;if(!b.options.disabled){switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:d.preventDefault();if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),f=b._start(d,e);if(f===!1)return}}i=b.options.step,b.options.values&&b.options.values.length?g=h=b.values(e):g=h=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:h=b._valueMin();break;case a.ui.keyCode.END:h=b._valueMax();break;case a.ui.keyCode.PAGE_UP:h=b._trimAlignValue(g+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:h=b._trimAlignValue(g-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g===b._valueMax())return;h=b._trimAlignValue(g+i);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g===b._valueMin())return;h=b._trimAlignValue(g-i)}b._slide(d,e,h)}}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy();return this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;if(c.disabled)return!1;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i);if(j===!1)return!1;this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0;return!0},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);this._slide(a,this._handleIndex,c);return!1},_mouseStop:function(a){this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1;return!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e;return this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values());return this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length)this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);else return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1)this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);else{if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()}},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;a=this._trimAlignValue(a);return a},_values:function(a){var b,c,d;if(arguments.length){b=this.options.values[a],b=this._trimAlignValue(b);return b}c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;Math.abs(c)*2>=b&&(d+=c>0?b:-b);return parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.18"})})(jQuery);
/*!
 * Tiny Scrollbar 1.65
 * http://www.baijs.nl/tinyscrollbar/
 *
 * Copyright 2010, Maarten Baijs
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/gpl-2.0.php
 *
 * Date: 10 / 05 / 2011
 * Depends on library: jQuery
 * 
 */

(function($){
	$.tiny = $.tiny || { };
	
	$.tiny.scrollbar = {
		options: {	
			axis: 'y', // vertical or horizontal scrollbar? ( x || y ).
			wheel: 40,  //how many pixels must the mouswheel scroll at a time.
			scroll: true, //enable or disable the mousewheel;
			size: 'auto', //set the size of the scrollbar to auto or a fixed number.
			sizethumb: 'auto' //set the size of the thumb to auto or a fixed number.
		}
	};	
	
	$.fn.tinyscrollbar = function(options) { 
		var options = $.extend({}, $.tiny.scrollbar.options, options); 		
		this.each(function(){ $(this).data('tsb', new Scrollbar($(this), options)); });
		return this;
	};
	$.fn.tinyscrollbar_update = function(sScroll) { return $(this).data('tsb').update(sScroll); };
	
	function Scrollbar(root, options){
		var oSelf = this;
		var oWrapper = root;
		var oViewport = { obj: $('.viewport', root) };
		var oContent = { obj: $('.overview', root) };
		var oScrollbar = { obj: $('.scrollbar', root) };
		var oTrack = { obj: $('.track', oScrollbar.obj) };
		var oThumb = { obj: $('.thumb', oScrollbar.obj) };
		var sAxis = options.axis == 'x', sDirection = sAxis ? 'left' : 'top', sSize = sAxis ? 'Width' : 'Height';
		var iScroll, iPosition = { start: 0, now: 0 }, iMouse = {};

		function initialize() {	
			oSelf.update();
			setEvents();
			return oSelf;
		}
		this.update = function(sScroll){
			oViewport[options.axis] = oViewport.obj[0]['offset'+ sSize];
			oContent[options.axis] = oContent.obj[0]['scroll'+ sSize];
			oContent.ratio = oViewport[options.axis] / oContent[options.axis];
			oScrollbar.obj.toggleClass('disable', oContent.ratio >= 1);
			oTrack[options.axis] = options.size == 'auto' ? oViewport[options.axis] : options.size;
			oThumb[options.axis] = Math.min(oTrack[options.axis], Math.max(0, ( options.sizethumb == 'auto' ? (oTrack[options.axis] * oContent.ratio) : options.sizethumb )));
			oScrollbar.ratio = options.sizethumb == 'auto' ? (oContent[options.axis] / oTrack[options.axis]) : (oContent[options.axis] - oViewport[options.axis]) / (oTrack[options.axis] - oThumb[options.axis]);
			iScroll = (sScroll == 'relative' && oContent.ratio <= 1) ? Math.min((oContent[options.axis] - oViewport[options.axis]), Math.max(0, iScroll)) : 0;
			iScroll = (sScroll == 'bottom' && oContent.ratio <= 1) ? (oContent[options.axis] - oViewport[options.axis]) : isNaN(parseInt(sScroll)) ? iScroll : parseInt(sScroll);
			setSize();
		};
		function setSize(){
            window.requestAnimationFrame(function(){
                oThumb.obj.css(sDirection, iScroll / oScrollbar.ratio);
                oContent.obj.css(sDirection, -iScroll);
                iMouse['start'] = oThumb.obj.offset()[sDirection];
                var sCssSize = sSize.toLowerCase();
                oScrollbar.obj.css(sCssSize, oTrack[options.axis]);
                oTrack.obj.css(sCssSize, oTrack[options.axis]);
                oThumb.obj.css(sCssSize, oThumb[options.axis]);
            });
		};		
		function setEvents(){
			oThumb.obj.bind('mousedown', start);
			oThumb.obj[0].ontouchstart = function(oEvent){
				oEvent.preventDefault();
				oThumb.obj.unbind('mousedown');
				start(oEvent.touches[0]);
				return false;
			};	
			oTrack.obj.bind('mouseup', drag);
			if(options.scroll && this.addEventListener){
				oWrapper[0].addEventListener('DOMMouseScroll', wheel, false);
				oWrapper[0].addEventListener('mousewheel', wheel, false );
			}
			else if(options.scroll){oWrapper[0].onmousewheel = wheel;}
		};
		function start(oEvent){
            window.requestAnimationFrame(function(){
                iMouse.start = sAxis ? oEvent.pageX : oEvent.pageY;
                var oThumbDir = parseInt(oThumb.obj.css(sDirection));
                iPosition.start = oThumbDir == 'auto' ? 0 : oThumbDir;
                $(document).bind('mousemove', drag);
                document.ontouchmove = function(oEvent){
                    $(document).unbind('mousemove');
                    drag(oEvent.touches[0]);
                };
                $(document).bind('mouseup', end);
                oThumb.obj.bind('mouseup', end);
                oThumb.obj[0].ontouchend = document.ontouchend = function(oEvent){
                    $(document).unbind('mouseup');
                    oThumb.obj.unbind('mouseup');
                    end(oEvent.touches[0]);
                };
            });
			return false;
		};		
		function wheel(oEvent){
            window.requestAnimationFrame(function(){
                if(!(oContent.ratio >= 1)){
                    oEvent = $.event.fix(oEvent || window.event);
                    var wheelDelta = oEvent.wheelDelta || (oEvent.originalEvent && oEvent.originalEvent.wheelDelta);
                    var iDelta = wheelDelta ? wheelDelta/120 : -(oEvent.detail || (oEvent.originalEvent && oEvent.originalEvent.detail))/3;
                    iScroll -= iDelta * options.wheel;
                    iScroll = Math.min((oContent[options.axis] - oViewport[options.axis]), Math.max(0, iScroll));
                    oThumb.obj.css(sDirection, iScroll / oScrollbar.ratio);
                    oContent.obj.css(sDirection, -iScroll);
                    oEvent.preventDefault();
                };
            });
		};
		function end(oEvent){
			$(document).unbind('mousemove', drag);
			$(document).unbind('mouseup', end);
			oThumb.obj.unbind('mouseup', end);
			document.ontouchmove = oThumb.obj[0].ontouchend = document.ontouchend = null;
			return false;
		};
		function drag(oEvent){

            if(!$.tiny.scrollbar.lastDragTime) {
                $.tiny.scrollbar.lastDragTime = new Date().getTime();
            }

            //console.log('this: ', new Date().getTime() - $.tiny.scrollbar.lastDragTime );
            window.requestAnimationFrame(function(){
                if(!(oContent.ratio >= 1)){
                    iPosition.now = Math.min((oTrack[options.axis] - oThumb[options.axis]), Math.max(0, (iPosition.start + ((sAxis ? oEvent.pageX : oEvent.pageY) - iMouse.start))));
                    iScroll = iPosition.now * oScrollbar.ratio;
                    oContent.obj.css(sDirection, -iScroll);
                    oThumb.obj.css(sDirection, iPosition.now);
                }
            });

			return false;
		};
		
		return initialize();
	};
})(jQuery);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(d){var b=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks){for(var a=b.length;a;){d.event.fixHooks[b[--a]]=d.event.mouseHooks}}d.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var e=b.length;e;){this.addEventListener(b[--e],c,false)}}else{this.onmousewheel=c}},teardown:function(){if(this.removeEventListener){for(var e=b.length;e;){this.removeEventListener(b[--e],c,false)}}else{this.onmousewheel=null}}};d.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}});function c(j){var h=j||window.event,g=[].slice.call(arguments,1),k=0,i=true,f=0,e=0;j=d.event.fix(h);j.type="mousewheel";if(h.wheelDelta){k=h.wheelDelta/120}if(h.detail){k=-h.detail/3}e=k;if(h.axis!==undefined&&h.axis===h.HORIZONTAL_AXIS){e=0;f=-1*k}if(h.wheelDeltaY!==undefined){e=h.wheelDeltaY/120}if(h.wheelDeltaX!==undefined){f=-1*h.wheelDeltaX/120}g.unshift(j,k,f,e);return(d.event.dispatch||d.event.handle).apply(this,g)}})(jQuery);
/*****************************************************
 * bounce.js 
 * 
 * TODO doesnt work for multiples.
 * TODO make sure the arrays are the same size / bounds checks.
 * 
 * usage: $("div").bounce(array[], options); - array of bounce scales to go through and their times 
 * Default bounce 1.33, 1.12, 1.05 end.
 * Dependencies: Uses utils.js 
 * 
 * Options: 
 * */

//You need an anonymous function to wrap around your function to avoid conflict
(function($){
    $.fn.extend({ 

        bounce : function(options){ // options needed for to extend the defaults.
        	var opts = {
    			//size : [],
    			//delay: [],
				size: [0.33, 1.33, 1.00, 1.12, 1.00, 1.05, 1.00], 
				delay: [0, 100, 80, 80, 80, 80, 50], 
			
    			step : function(t) // t = this object, e = event?
				{ 
    				var data = t.data('bounce');
    				if (data && data.nextStep < data.size.length)
					{
        				var nextTime = 0;
        				if(data.nextStep != 0) // the first value is the start point, the transition should start immediately - all others based on their duration.
        				{	
        					nextTime = data.delay[data.nextStep]; 
        				}
						
						var prevScale = data.nextStep > 0 ? data.size[data.nextStep - 1] : 0;
						var dScale = data.size[data.nextStep] - prevScale;
							
						utils.animateRaf(
							function(progress) {
		        				t.css({
		        					'-webkit-transform' : 'scale(' + (prevScale + dScale * progress) + ')',
		        					'-moz-transform' : 'scale(' + (prevScale + dScale * progress) + ')'
		        				});
							},
							data.delay[data.nextStep],
							function() {
			    				options.step(t);
							});
	
        				//console.log("Step: " + data.nextStep);
        				data.nextStep++;
					}
					else
					{
    					t.css({'-webkit-transform' : 'none', '-moz-transform' : 'none'});
					}
    			}
        	}
	  	
        	var options = $.extend(opts, options); // this gets the passed args object.
        	      		     		
       		// return the jquery object each time.
            return this.each(function() {
    			var $this = $(this).
					data('bounce', {
	                    size: options.size, 
	                    delay: options.delay, 
	                    nextStep : 0
	                }).
					css({
						'-webkit-transform' : 'scale(0.01)',
						'-moz-transform' : 'scale(0.01)'
					});

    			// set the starting point and do the first step immediately.
    			options.step($this);
            });	
        }
    });
})(jQuery);





function zoomAction(cT, cL, cW, cH, cpScale, duration, stepCallback, finishedCallback) // duration is in milliseconds.
{
	var $canvas = $('#canvas'),
        $viewPort = $('#viewport'),
		$canvasPages = $('#canvasPages');

    var pos = {
            left: -$viewPort.get(0).scrollLeft,
            top: -$viewPort.get(0).scrollTop
        },
		size = {width : $canvas.width(), height : $canvas.height()},
		scale = 1;

	if ($.browser.webkit)
	{
		scale = new WebKitCSSMatrix($canvasPages.css('-webkit-transform')).a;
	}
	else
	{
		var transform = $canvasPages.css('-moz-transform');
		var match = transform.match(/scale\s*\(\s*([\d\.]+)\s*\)/) || transform.match(/matrix\s*\(\s*([\d\.]+)/);
		if (match)
		{
			scale = parseFloat(match[1]);
		}
	}
	
	var dT = cT - pos.top,
		dL = cL - pos.left,
		dW = cW - size.width,
		dH = cH - size.height,
		dS = cpScale - scale;
	
	var callStep = stepCallback && $.isFunction(stepCallback);

	utils.animateRaf(
		function(progress)
		{
			$canvas.css({
				width : size.width + dW * progress + 'px',
				height : size.height + dH * progress + 'px'
			});
            $viewPort.get(0).scrollTop = -1 * ( pos.top + dT * progress);
            $viewPort.get(0).scrollLeft = -1 * (pos.left + dL * progress);
            //console.log('top: ',progress,  $viewPort.get(0).scrollTop, pos.top + dT * progress);

			$canvasPages.css({
				'-webkit-transform' : 'scale(' + (scale + dS * progress) + ')',
				'-moz-transform' : 'scale(' + (scale + dS * progress) + ')'
			});
			
			if (callStep)
			{
				stepCallback(progress);
			}
		},
		duration,
		'easeInOutQuad',
		function() {
			window.setTimeout(zoomActionCallback, 10);
			
			if (finishedCallback && $.isFunction(finishedCallback))
			{
				finishedCallback();
			}
		}
	);

    project.set({"currentZoom" : cpScale});
}


// Zoom in/out the canvas and sets all the appropriate settings for the zoom level.
// to replace zoomOutToAllPages via a fired per drag event.
function dragZoom(obj)
{
	$("#addPage").data("position", $("#addPage").css("right")).css({"right" : "0px"});
	$("#hud, #trash").fadeOut(300); //$("#trash").fadeOut(300);
	$(".template").fadeTo(300, 0.2);

	//var zoom = project.get("currentZoom");
	if(project.get("currentZoom") < 1) return; // the rest is for when zooming out only - could bezoomed out already.
	
	setZoomedOutActions();
	
	var origin, type;
	if($(obj).hasClass("templateLink"))
	{
		origin = $(obj);
		type = "template";
	}
	else if($(obj).attr("id") == "cmLink2")
	{
		origin = $(".zoomedOutSelected");
		type = "ahref";
	}
	else
	{
		return;
	}

	var newScale = 0.25;
	var duration = 300;
	
	var x = $("#canvas").data("lastOutX");
	var y = $("#canvas").data("lastOutY");	
	
	zoomAction(y, x, project.get("canvasWidth")*newScale, project.get("canvasHeight")*newScale, newScale, duration, null, function() {
		//this redraws the link after the zoom is complete - should now fade in here.
		link.draw($("#dragCanvas"), origin.attr('id'), $(".connectorHelper"), type);
		//link.draw($("#dragCanvas"), origin, $(".connectorHelper"), type);
		$("#dragCanvas").fadeIn(200);

        canvas2.updatePages();
        canvas2.updateLinks();

	});
	
	//$("#library").fadeOut(100);
	$("#library").hide();
}


function dragZoomStop()
{
	//console.log("Fired dragzoom stop.");
	$("#addPage").css({"right" : $("#addPage").data("position") || 10});
	$("#hud").fadeIn(300);
	$("#trash").fadeIn(300);
	$("#canvasPages .screen").stop().fadeTo(300, 1); // must be .page as another template could have just become not a template.
}


function setZoomedInActions()
{
	//console.log("Showing zoomed in actions");
	if (!project.readOnly())
	{
		//lib.showStepBegin(); // library is used globally?
	}
	
//	if($("#canvasPages .active").length == 0)
//	{
//        var active = $("#canvasPages .activeZoomedOut");
//        if (active.size() > 0)
//        {
//            //console.log("Activating!!!!!");
//            page.activate(active);
//        }
//	}

	$("#canvasPages .pageWidget").draggable('enable');
	$("#canvasPages .zoomedOutSelected").removeClass("zoomedOutSelected");
	$("#canvas").draggable("option", "distance", 50).addClass("canvas100").removeClass('zoomedOut');
	$("#canvasPages .activeZoomedOut").removeClass("activeZoomedOut");
	$("#canvasPages .screen").draggable( 'option', "handle", ".pageDragHandle" ); 

	var scrollable = $('.screen.active .selectArea');
	if( scrollable.length ) scrollable.tinyscrollbar_update();
	
	//console.log("setZoomedInActions triggered");
	//var pTLWH = utils.getTLWH(".page");
	//$(".pageTitle, .pageType").fadeIn(300);
	
	if (!project.readOnly())
	{
		project.getActivePage().find('.selectArea').selectable("enable");
	}
	
	
}



// Called on Load.
function zoomOutToLastPoint(originalScale, newScale, duration, callback)
{
	//$(".screen").hide(); if(active) $(active).show(); var active = page.atCanvasXY(x,y);
	var x = $("#canvas").data("lastOutX");
	var y = $("#canvas").data("lastOutY");

	zoomAction(y, x, project.get("canvasWidth")*newScale, project.get("canvasHeight")*newScale, newScale, duration, function(done) {
        if( done === 1 ) {
            if(callback) {
                callback();
            }

            //canvas2.updatePages();
            //canvas2.updateLinks();
        }
    });
	page.enableSelectableWidgetHolder(false);
}


// called when link is dropped too...
// should be called when link drag starts, no stops?
function setZoomedOutActions()
{
	//console.log("setZoomedOutActions");
	
	var screen = $("#canvasPages .screen");
	screen.not(".active, .activeZoomedOut").hide(); // more complicated in future with bounding.
	page.hideOptionsMenu();
	page.detachFrame();
	contextMenu.hide(); //should be done by zoom
	propInspector.resetPropInspector();
	$("#library").hide(); //, #projectView
	$("#projectView").fadeOut(500);
	$('#zoomOut').animate({
		opacity: 0
	}, 500);
	
	$('#zoomOut').css("pointer-events",'none');
    $("#canvasPages .screen.active").selectable("destroy").removeData("initSelectable");
	var pages = $("#canvasPages .active");
	$("#canvasPages .active").addClass("activeZoomedOut").removeClass("active");
	$("#canvasPages .pageWidget").draggable( 'disable' );		
	$("#canvas").removeClass("canvas100").addClass('zoomedOut').draggable("option", "distance", 4);
	$("#canvasPages .ui-selected").addClass("zoomedOutSelected");
	screen.draggable("option", "distance", 10);
	widget.resetSelection();
	screen.draggable("option", "handle", false );
	
	grid.hideGrid(); //hide the grid
	staticWidgets.hideStaticBoundary();

    //When zooming out diplay the bin if there are pages to delete and no linking is being executed
    var pages = project.get("pages");
    if((pages.length > 0) && (!link.isLinking))
    {
        $("#trash").fadeIn(300);
    }
}

// called after transitions are complete.
function zoomActionCallback()
{
	function showPagesAndLinks()
	{
//		$(".screen").not(":visible").add("#canvasLinks").fadeIn(200);
		var stuff = $(".screen").not(":visible").add("#canvasLinks");
		stuff.show().css({'opacity' : 0});
		setTimeout(function() { // no idea why it doesn't work immediately
			stuff.
				css({
					'-webkit-transition' : 'opacity 0.3s ease-in-out',
					'-moz-transition' : 'opacity 0.3s ease-in-out',
					'opacity' : 1
				}).
				bind('webkitTransitionEnd', function() {
					stuff.
						unbind('webkitTransitionEnd').
						css({
							'-webkit-transition' : '',
							'-moz-transition' : ''
						});
				});

            canvas2.updateLinks();
            canvas2.setScreenContainment();
		}, 10);
	}
	
	$("#canvas")
		.draggable( "option", "containment", canvas2.setContainment() )
		.css({'-webkit-transition': 'none', '-moz-transition': 'none'})
		.data('zooming', false); 

	//if(loading == false)
	//{
	//	link.drawAll("ahref");
	//}

	var zoom = project.get("currentZoom");
	var palShown = false;
	if(zoom == 1) // at 100% 
	{
		if (!project.readOnly())
		{
            if (!$("#library").is(":visible"))
            {
			    lib.show(showPagesAndLinks);
            }
			palShown = true;
		}
		
		//setTimeout(contextMenu.place, 300);
		$("#projectView").fadeIn(200);
		$('#zoomOut').animate({
			opacity: 1
		},200);
		$('#zoomOut').css("pointer-events",'auto');
	}
	
	if (!palShown)
	{
		showPagesAndLinks();
	}

}


function zoomInOnPoint(pX, pY, originalScale, newScale, duration)
{
	var canvasTop = parseInt($("#canvas").css('top'));  //auto
	var canvasLeft = parseInt($("#canvas").css('left')); //auto	
	
	var translateDist = {top: 0, left: 0};
	translateDist.top =  pY - (((pY-canvasTop)/originalScale) * newScale);
	translateDist.left = pX - (((pX-canvasLeft)/originalScale) * newScale);   

	zoomAction(translateDist.top, translateDist.left, project.get("canvasWidth"), project.get("canvasWidth"), newScale, duration);
}


function zoomOutToAllPages(originObj, duration)
{
	var outerPadding = 10;
	var viewportTLWH = utils.getTLWH("#viewport");
	var viewportCenter = utils.getCenterPoint("#viewport");
	var canvasTLWH = utils.getTLWH("#canvas");
	var pageBounding = utils.getBoundingArea(".page");
	
	var boundsWidth = pageBounding.right - pageBounding.left;
	var boundsHeight = pageBounding.bottom - pageBounding.top;
			
	var scaleX = (viewportTLWH.width / boundsWidth); // - (outerPadding / viewportTLWH.width);
	var scaleY = (viewportTLWH.height / boundsHeight); // - (outerPadding / viewportTLWH.height);
	var newScale = Math.min(scaleX, scaleY);
	
	if(newScale > 0.25)
	{
		newScale = 0.25;
	}
	
	var cT = outerPadding + canvasTLWH.top*newScale - pageBounding.top*newScale;
	var cL = outerPadding + canvasTLWH.left*newScale - pageBounding.left*newScale;
	var cW = project.get("canvasWidth")*newScale;
	var cH = project.get("canvasHeight")*newScale;
	
	zoomAction(cT, cL, cW, cH, newScale, duration);
}


// can be either click on page in full zoom to center or click to zoom in to a page.
// simplify this by creaking it into zoom and non zoom centering?
function zoomInAndCenterOnPage(pageObj, originalZoom, newZoom, duration)
{
	var translateDist = utils.getTranslateDistanceToCenter(pageObj, "#viewport");

	if(originalZoom != newZoom)
	{
		$("#canvasPages .screen").not(pageObj).hide(); // temporarily hide other pages - maybe keep a few showing?
	}
	
	var libWidth = 0; // closed. 
	if(!project.readOnly() && $("#library").css("left") == "0px")
	{
		libWidth = Math.floor(account.get("libraryWidth")/2);
	}

	if(translateDist.top == 0 && translateDist.left + libWidth == 0 && originalZoom == 1 && newZoom == 1)
	{
		return false; // nothing to do here, probably clicked a widget on an already centered page.
	}
	
//	var top = translateDist.top + parseInt($("#canvas").css("top"));
//	var left = translateDist.left + libWidth + parseInt($("#canvas").css("left"));

    var top = translateDist.top - parseInt($("#viewport").get(0).scrollTop);
    var left = translateDist.left + libWidth - parseInt($("#viewport").get(0).scrollLeft);

	zoomAction(top, left, project.get("canvasWidth"), project.get("canvasHeight"), newZoom, duration, function(done) {
        //viewport changed, need to add new pages
        if(done === 1) {
            canvas2.updatePages();
            canvas2.updateLinks();
        }
    });//, lib.showStep);
	page.enableSelectableWidgetHolder();
    hint.show("library");

	return true; // we need to know the page is centered so its not selected!
}

(function($) {
	$.fn.extend({

		zoom: function(options, callback)
		{
			var opts = {
				currentZoom: false,
				newZoom: false,
				duration: 400,
				centerIn: '#viewport',
				centerX: false,
				centerY: false,
				canvasX: false,
				canvasY: false,
				page: false,
				centering: false,
				savePosition: true
			};

			var options = $.extend(opts, options);

			//console.log("Options", options);console.trace();
			
			//var zooming = $("#canvas").data('zooming');
			if ( $("#canvas").data('zooming') ) return this;
			
			var pages = project.get("pages"); // check we are not trying to zoom in where there no pages.
			if (pages.length == 0 && options.newZoom == 1) return;

			if (options.currentZoom == false) options.currentZoom = project.get("currentZoom");
			if (options.currentZoom == options.newZoom) return true; // No zoom if same
			if (options.newZoom == 'auto') options.newZoom = 0.25;

			$('.linkToggle').remove();
			$("#canvas").data('zooming', true);
			$("#canvasLinks").filter(":visible").hide(); // hide #canvasLinks, too intensive to draw

			if (options.newZoom == 1)
			{
				setZoomedInActions();
				//$("#library").css("display", ""); // speed fix

			}
			else
			{
				setZoomedOutActions();
				//$("#library").css("display", ""); // speed fix
			}

			// Do the zooming based on type.
			if (options.page !== false && options.newZoom == 1) // if we were passed a page to center on
			{
				if (options.currentZoom < options.newZoom && options.savePosition != false)
				{
					$("#canvas").
                        data("lastOutX", -parseInt($("#viewport").get(0).scrollLeft)).
						data("lastOutY", -parseInt($("#viewport").get(0).scrollTop));
				}

				zoomInAndCenterOnPage(options.page, options.currentZoom, options.newZoom, options.duration);				
			}
			else if (options.centerX !== false && options.centerY !== false && options.newZoom == 1)
			{
				zoomInOnPoint(options.centerX, options.centerY, options.currentZoom, options.newZoom, options.duration);
			}
			else if (options.centering != false)
			{
				zoomOutToAllPages(options.centering, options.duration); // decides a newZoom and a positioning based on dragged item.	
			}
			else if (options.centerX !== false && options.centerY !== false) //zoom out button
			{
				zoomOutToLastPoint(options.currentZoom, options.newZoom, options.duration, callback);
			}

			return this;
		}
	});
})(jQuery);
/**
 * @license 
 * jQuery Tools @VERSION Tooltip - UI essentials
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/tooltip/
 *
 * Since: November 2008
 * Date: @DATE 
 */
(function($) { 	
	// static constructs
	$.tools = $.tools || {version: '@VERSION'};
	
	$.tools.tooltip = {
		
		conf: { 
			
			// default effect variables
			effect: 'toggle',			
			fadeOutSpeed: "fast",
			predelay: 0.5,
			delay: 10,
			opacity: 1,			
			tip: 0,
			
			// 'top', 'bottom', 'right', 'left', 'center'
			position: ['top', 'center'], 
			offset: [0, 0],
			relative: false,
			cancelDefault: true,
			
			// type to event mapping 
			events: {
				def: 			"mouseenter,mouseleave",
				input: 		"focus,blur",
				widget:		"focus mouseenter,blur mouseleave",
				tooltip:		"mouseenter,mouseleave"
			},
			
			// 1.2
			layout: '<div/>',
			tipClass: 'tooltip'
		},
		
		addEffect: function(name, loadFn, hideFn) {
			effects[name] = [loadFn, hideFn];	
		} 
	};
	
	
	var effects = { 
		toggle: [ 
			function(done) { 
				var conf = this.getConf(), tip = this.getTip(), o = conf.opacity;
				if (o < 1) { tip.css({opacity: o}); }
				tip.show();
				done.call();
			},
			
			function(done) { 
				this.getTip().hide();
				done.call();
			} 
		],
		
		fade: [
			function(done) { 
				var conf = this.getConf();
				this.getTip().fadeTo(conf.fadeInSpeed, conf.opacity, done); 
			},  
			function(done) { 
				this.getTip().fadeOut(this.getConf().fadeOutSpeed, done); 
			} 
		]		
	};   

		
	/* calculate tip position relative to the trigger */  	
	function getPosition(trigger, tip, conf) {	

		
		// get origin top/left position 
		var top = conf.relative ? trigger.position().top : trigger.offset().top, 
			 left = conf.relative ? trigger.position().left : trigger.offset().left,
			 pos = conf.position[0];

		top  -= tip.outerHeight() - conf.offset[0];
		left += trigger.outerWidth() + conf.offset[1];
		
		// iPad position fix
		if (/iPad/i.test(navigator.userAgent)) {
			top -= $(window).scrollTop();
		}
		
		// adjust Y		
		var height = tip.outerHeight() + trigger.outerHeight();
		if (pos == 'center') 	{ top += height / 2; }
		if (pos == 'bottom') 	{ top += height; }
		
		
		// adjust X
		pos = conf.position[1]; 	
		var width = tip.outerWidth() + trigger.outerWidth();
		if (pos == 'center') 	{ left -= width / 2; }
		if (pos == 'left')   	{ left -= width; }	 
		
		return {top: top, left: left};
	}		

	
	
	function Tooltip(trigger, conf) {

		var self = this, 
			 fire = trigger.add(self),
			 tip,
			 timer = 0,
			 pretimer = 0, 
			 title = trigger.attr("title"),
			 tipAttr = trigger.attr("data-tooltip"),
			 effect = effects[conf.effect],
			 shown,
				 
			 // get show/hide configuration
			 isInput = trigger.is(":input"), 
			 isWidget = isInput && trigger.is(":checkbox, :radio, select, :button, :submit"),			
			 type = trigger.attr("type"),
			 evt = conf.events[type] || conf.events[isInput ? (isWidget ? 'widget' : 'input') : 'def']; 
		
		
		// check that configuration is sane
		if (!effect) { throw "Nonexistent effect \"" + conf.effect + "\""; }					
		
		evt = evt.split(/,\s*/); 
		if (evt.length != 2) { throw "Tooltip: bad events configuration for " + type; } 
		
		
		// trigger --> show  
		trigger.bind(evt[0], function(e) {

			clearTimeout(timer);
			if (conf.predelay) {
				pretimer = setTimeout(function() { self.show(e); }, conf.predelay);	
				
			} else {
				self.show(e);	
			}
			
		// trigger --> hide
		}).bind(evt[1], function(e)  {
			clearTimeout(pretimer);
			if (conf.delay)  {
				timer = setTimeout(function() { self.hide(e); }, conf.delay);	
				
			} else {
				self.hide(e);		
			}
			
		}); 
		
		
		// remove default title
		if (title && conf.cancelDefault) { 
			trigger.removeAttr("title");
			trigger.data("title", title);			
		}		
		
		$.extend(self, {
				
			show: function(e) {  

				// tip not initialized yet
				if (!tip) {
					
					// data-tooltip 
					if (tipAttr) {
						tip = $(tipAttr);

					// single tip element for all
					} else if (conf.tip) { 
						tip = $(conf.tip).eq(0);
						
					// autogenerated tooltip
					} else if (title) { 
						tip = $(conf.layout).addClass(conf.tipClass).appendTo(document.body)
							.hide().append(title);

					// manual tooltip
					} else {	
						tip = trigger.next();  
						if (!tip.length) { tip = trigger.parent().next(); } 	 
					}
					
					if (!tip.length) { throw "Cannot find tooltip for " + trigger;	}
				} 
			 	
			 	if (self.isShown()) { return self; }  
				
			 	// stop previous animation
			 	tip.stop(true, true); 			 	
			 	
				// get position
				var pos = getPosition(trigger, tip, conf);			
		
				// restore title for single tooltip element
				if (conf.tip) {
					tip.html(trigger.data("title"));
				}

				// onBeforeShow
				e = e || $.Event();
				e.type = "onBeforeShow";
				fire.trigger(e, [pos]);				
				if (e.isDefaultPrevented()) { return self; }
		
				
				// onBeforeShow may have altered the configuration
				pos = getPosition(trigger, tip, conf);
				
				// set position
				tip.css({position:'absolute', top: pos.top, left: pos.left});					
				
				shown = true;
				
				// invoke effect 
				effect[0].call(self, function() {
					e.type = "onShow";
					shown = 'full';
					fire.trigger(e);		 
				});					

	 	
				// tooltip events       
				var event = conf.events.tooltip.split(/,\s*/);

				if (!tip.data("__set")) {
					
					tip.bind(event[0], function() { 
						clearTimeout(timer);
						clearTimeout(pretimer);
					});
					
					if (event[1] && !trigger.is("input:not(:checkbox, :radio), textarea")) { 					
						tip.bind(event[1], function(e) {
	
							// being moved to the trigger element
							if (e.relatedTarget != trigger[0]) {
								trigger.trigger(evt[1].split(" ")[0]);
							}
						}); 
					} 
					
					tip.data("__set", true);
				}
				
				return self;
			},
			
			hide: function(e) {

				if (!tip || !self.isShown()) { return self; }
			
				// onBeforeHide
				e = e || $.Event();
				e.type = "onBeforeHide";
				fire.trigger(e);				
				if (e.isDefaultPrevented()) { return; }
	
				shown = false;
				
				effects[conf.effect][1].call(self, function() {
					e.type = "onHide";
					fire.trigger(e);		 
				});
				
				return self;
			},
			
			isShown: function(fully) {
				return fully ? shown == 'full' : shown;	
			},
				
			getConf: function() {
				return conf;	
			},
				
			getTip: function() {
				return tip;	
			},
			
			getTrigger: function() {
				return trigger;	
			}		

		});		

		// callbacks	
		$.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","), function(i, name) {
				
			// configuration
			if ($.isFunction(conf[name])) { 
				$(self).bind(name, conf[name]); 
			}

			// API
			self[name] = function(fn) {
				if (fn) { $(self).bind(name, fn); }
				return self;
			};
		});
		
	}
		
	
	// jQuery plugin implementation
	$.fn.tooltip = function(conf) {
		
		// return existing instance
		var api = this.data("tooltip");
		if (api) { return api; }

		conf = $.extend(true, {}, $.tools.tooltip.conf, conf);
		
		// position can also be given as string
		if (typeof conf.position == 'string') {
			conf.position = conf.position.split(/,?\s/);	
		}
		
		// install tooltip for each entry in jQuery object
		this.each(function() {
			api = new Tooltip($(this), conf); 
			$(this).data("tooltip", api); 
		});
		
		return conf.api ? api: this;		 
	};
		
}) (jQuery);

		



var colorPicker = 
{
	getWidgetForCP : function(){
		var finalWidget = {};
	
		function iterate(){
			var $this = $(this);
			var id = $this.attr("id");
			var widg = widget.get(id);
			 
			if(widg.bgc){
                $.extend(true, finalWidget, widg); //set the widget for correct action
                return false;
            }
		}
		
		var selectedWidgets = propInspectorCtrl.shapeWidgets;
		selectedWidgets.each(iterate);
		return finalWidget;
	},
	
	getTextWidgetCP : function(){
		var thisWidget = propInspectorCtrl.textWidgets.last();
		var widg = widget.get(thisWidget.attr("id"));
		return widg;
	},
	
	segmentRootId : false,
	getSelectedOnly : function(sel){
		
		function iterate(){
			var $this = $(this);
			var id = $this.attr("id");
			var widg = widget.get(id);
			
			if(widg.seg){
				if(widg.bgc){
					outputWidgets = outputWidgets.add($this);
					colorPicker.segmentRootId = id;
				}
			}
			else{
				if(widg.segment && (widg.of == colorPicker.segmentRootId))
				{
					if($this.hasClass("ui-selected")){
						outputWidgets = outputWidgets.add($this);
					}
					else{
						outputWidgets = outputWidgets.not($this);
					}
				}
				else{
					outputWidgets = outputWidgets.add($this);
				}
			}
		}
		var outputWidgets = $([]);
		
		var widgets = sel || propInspectorCtrl.shapeWidgets;
		widgets.each(iterate);
		return outputWidgets;
	},

	clickOnSelectorEdge : function(e){
		// measure distance from the centreeee
		var radius = propInspector.pickerWidth / 2; // this is also the 
		
		var diffX = Math.abs(e.offsetX - radius);
		var diffY = Math.abs(e.offsetY - radius);
		
		var distance = Math.sqrt((diffX*diffX)+(diffY*diffY));
		if(distance > radius){
			if(e.originalEvent.target.id == 'hslSelector') // transfer to the appropriate function
			{
				colorPicker.hslClick(e);
			}
			else if(e.originalEvent.target.id == 'rgbSelector'){
				colorPicker.rgbClick(e);
			}
		}
		else {
			return;
		}
	},
	
	tempFontColor : false,
	getTextColor : function(){
		var widgObj = colorPicker.getTextWidgetCP();
		var fontColor = colorPicker.getFontColorFromCSS(widgObj.ts);
		colorPicker.tempFontColor = fontColor;
		var hsl = utils.toHSL(fontColor);
		colorPicker.updateDisplay(hsl);
		colorPicker.updateBackupColor(fontColor);
		
		$("#textColor").css("background-color",fontColor);
	},
	
	extractTextColor : function(elem)
	{
		var id = $(elem).attr("id");
		var widgObj = widget.get(id);
		var color = colorPicker.getFontColorFromCSS(widgObj.ts);
		return color;
	},
	
	getFontColorFromCSS : function(string){
		var widgetArr = string.split(/;/);
		for (var j=0; j<widgetArr.length; j++) 
		{
			if (widgetArr[j].match ("color")) 
			{
				var colorIndex = j;
			}
		}

		var colorString = widgetArr[colorIndex];
		var fontColor = colorString ? colorString.replace(/"/g,'').replace(/color:/,'') : 'rgb(0,0,0)';
		
		return fontColor;
	},
	
	rgbClick : function(e){
		
		// set active picker
		var event = e.target.id;
		colorPicker.setActivePickerBorder(event);
		
		var offset = $("#rainbowColorPicker").offset();
		var pos = colorPicker.getRGBAngle(e.pageX, e.pageY, offset.top, offset.left);
		$("#rgbSelector").css({top: pos.top, left: pos.left}); 	
	
		colorPicker.rgbSet(pos); // , click
		colorPicker.applyToWidget(null);
	},
	
	hslClick : function(e){
		
		var event = e.target.id;
		colorPicker.setActivePickerBorder(event);
		
		var offset = $("#rainbowColorPicker").offset();
		var pos = colorPicker.getHSLAngle(e.pageX, e.pageY, offset.top, offset.left);
		$("#hslSelector").css({top: pos.top, left: pos.left});

		colorPicker.hslSet(pos);
		colorPicker.applyToWidget(null);
	},
	
	setActivePickerBorder : function(event)
	{
		// set active picker
		$("#rgbSelector, #hslSelector").removeClass("inactiveSelector");
		if(event == "hslSelector" || event == "hslArea"){
			$("#rgbSelector").addClass("inactiveSelector");
		}
		else if(event == "rgbSelector" || event == "rgbArea"){
			$("#hslSelector").addClass("inactiveSelector");
		}
		else if(event == "return"){
			return;
		}
	},
	
	setColorStops : function(selEl){
		var widgObj = colorPicker.getWidgetForCP();
		var colorStopNumber = (propInspector.colorStopNumber) ? propInspector.colorStopNumber : 0;
		var color = widgObj.bgc[colorStopNumber];
		var hsl = utils.toHSL(color);
		colorPicker.updateDisplay(hsl);
		colorPicker.updateBackupColor(color);
		return false;
	},
	
	changeColorStopSlider : function(e){
		var targetEl = $(e.target);
		var targetIndex = targetEl.attr("data-colorStop");
		var sliderVal = Math.round(targetEl.attr('value'));
		$("#gradientStop .colorStopIndicator").eq(targetIndex).text(sliderVal);
		colorPicker.applyToWidget(e);
	},

	getColorBackground : function(){
		var widgObj = colorPicker.getWidgetForCP();
		var color = (widgObj.bgc) ? widgObj.bgc[0] : '#000000';
		var hsl = utils.toHSL(color);
		colorPicker.updateDisplay(hsl);
		colorPicker.updateBackupColor(color);
	},

	getBorderColor : function(){
		var widgObj = colorPicker.getWidgetForCP();
		var color = (widgObj.b) ? widgObj.b[1] : '#000000';
		var hsl = utils.toHSL(color);
		colorPicker.updateDisplay(hsl);	
		colorPicker.updateBackupColor(color);
	},

	inputFocusTime : 0,

	selectHex : function(){
		// if the input element was focused very recently
		if (new Date().getTime() - colorPicker.inputFocusTime < 500) {
			//select all text in the input element
			this.select();
		}
	},

	inputHex : function (event) {
		var element = event.target,
			cursorPosition = element.selectionStart,
			invalidChars = element.value.match(/[^0-9a-f]*/gi)
				.filter(function (s) {
					return s !== '';
				}),
			hexIn = element.value.replace(/[^0-9a-f]*/gi, ""),
			hex = hexIn.length === 3
				? [
					hexIn[0], hexIn[0],
					hexIn[1], hexIn[1],
					hexIn[2], hexIn[2]
				].join(''): hexIn;

		element.value = hexIn;
		cursorPosition -= invalidChars.length;
		element.setSelectionRange(cursorPosition, cursorPosition);

		if (!(hexIn.length === 3 || hexIn.length === 6)) {
			return false;
		}

		var hsl = utils.toHSL("#" + hex);
		var selEl = propInspectorCtrl.currentSelection;
		var widgObj = widget.get(selEl.attr("id"));
		colorPicker.updateDisplay(hsl, hexIn);
		colorPicker.applyToWidget(null);
	},
	
	colorWheelRadius : 79, //57 (original) - 5
	hslWheelRadius : 56,
	grayWheelRadius : 81,
	colorPickerWidth : 93,
	flatColorArc : 20, // variables for defining the colour wheel divisions
	numDegrees : 360,
	numColors : 6,
	hslLimit : 100, // generic variables - such as HSL	
	currentHSL : {h: false, s: false, l: false}, 
	
	updateDisplay : function(hsl, hex) // hsl = {h, s, l}
	{
		function getRgbAngleDivisions(hsl)
		{
			var degreesPerColor = colorPicker.numDegrees/colorPicker.numColors;
			var spaceBetweenFlatArcs = degreesPerColor - colorPicker.flatColorArc;
			var angleIndex = Math.floor(hsl.h/degreesPerColor);

			var angleOutputValue = angleIndex*degreesPerColor;
			if(hsl.h > angleOutputValue)
			{
				var angleOutputValue = (hsl.h*(spaceBetweenFlatArcs/degreesPerColor))+((colorPicker.flatColorArc*angleIndex)+(colorPicker.flatColorArc/2));
			}

			return angleOutputValue;
		}
		
		function getLightnessAngleDivisions(convertLightnessToAngle)
		{
			function calculateBlurredLimit() //calculate the S value at the blurred area
			{
				var constant = graphEndPoint / (graphEndPoint - graphStartPoint);
				var x = (graphMidPoint - graphStartPoint) * constant;
				var slope = colorPicker.hslLimit / graphEndPoint;
				var saturation = colorPicker.hslLimit - (slope * x);
				return saturation;
			}
			
			function calculateHypotenuse(){
				var slope = colorPicker.hslLimit / graphEndPoint;
				var x = (colorPicker.hslLimit - hsl.s) / slope;
				var constant = graphEndPoint / (graphEndPoint - graphStartPoint);
				var length = (x / constant) + graphStartPoint;
				return length;
			}
			var graphStartPoint = propInspector.pickerWidth / 2;
			var graphMidPoint = propInspector.pickerWidth;
			var graphEndPoint = colorPicker.hslWheelRadius - (propInspector.pickerWidth / 5);
			
			var calculateBlurredLimit = calculateBlurredLimit();
			
			if(hsl.s == 0){
				if (convertLightnessToAngle == 0)
				{
					var angle = colorPicker.flatColorArc / 2; // black
				}
				else if(convertLightnessToAngle > 0 && convertLightnessToAngle < colorPicker.numDegrees)
				{
					var difference = (colorPicker.numDegrees + (2 * colorPicker.flatColorArc)) / colorPicker.numDegrees;
					var angle = colorPicker.flatColorArc + convertLightnessToAngle / difference;
				}
				else if(convertLightnessToAngle == colorPicker.numDegrees)
				{
					var angle = colorPicker.numDegrees - (colorPicker.flatColorArc / 2); // white
				}
			}
			else if(hsl.s > 0 && hsl.s <= calculateBlurredLimit)
			{
				//calculate the value of a point where the 
				var angle = convertLightnessToAngle;
			}
			else if(hsl.s > calculateBlurredLimit && hsl.s < colorPicker.hslLimit)
			{
				var graphDifference = graphMidPoint - graphStartPoint;
				var startLight = colorPicker.hslLimit / 2;
		
				var hypot = calculateHypotenuse();
				var slope = (hsl.l - startLight) / (hypot - graphStartPoint);
				var endLight = slope * graphDifference + startLight
				var angle = (endLight * colorPicker.numDegrees) / colorPicker.hslLimit;
			}
			else if(hsl.s == colorPicker.hslLimit)
			{
				var angle = 0;
			}

			return angle;
		}
		
		function getHSLLength(){
			var graphStartPoint = propInspector.pickerWidth / 2;
			var graphEndPoint = colorPicker.hslWheelRadius - (propInspector.pickerWidth / 5);
			
			if(hsl.s == 0)
			{
				var length = colorPicker.hslWheelRadius;
			}
			else if(hsl.s > 0 && hsl.s < colorPicker.hslLimit)
			{
				var slope = colorPicker.hslLimit / graphEndPoint;
				var x = (colorPicker.hslLimit - hsl.s) / slope;
				var constant = graphEndPoint / (graphEndPoint - graphStartPoint);
				var length = (x / constant) + graphStartPoint;
			}
			else if(hsl.s == colorPicker.hslLimit)
			{
				var length = 0;
			}
			return length;
		}
				
		var pickerTopPosition = 0;
		var pickerLeftPosition = 0; 
		
		colorPicker.currentHSL.h = (hsl.h !== false) ? hsl.h : colorPicker.currentHSL.h;
		colorPicker.currentHSL.s = (hsl.s !== false) ? hsl.s : colorPicker.currentHSL.s;
		colorPicker.currentHSL.l = (hsl.l !== false) ? hsl.l : colorPicker.currentHSL.l;	
		hsl = colorPicker.currentHSL;
		
		//input handler - tell which picker to move if HSL value is certain colour - 
		var cpCenter = {top: 0, left: 0}; //$("#rainbowColorPicker").position(); // center of color picker.
		var pickerWidth = parseInt($("#rgbSelector").css('width'));
		var pickerHeight = parseInt($("#rgbSelector").css('height'));
		
		// rgb code
		var angleRGB = getRgbAngleDivisions(hsl) * 2 * Math.PI / colorPicker.numDegrees; // do not delete : var angleRGB = hsl.h * Math.PI / 180; // do not delete
		var topRGB = -(colorPicker.colorWheelRadius * Math.cos(angleRGB));
		var leftRGB = colorPicker.colorWheelRadius * Math.sin(angleRGB);
		topRGB = colorPicker.colorPickerWidth + pickerTopPosition - (pickerHeight/2) + topRGB; 
		leftRGB = colorPicker.colorPickerWidth + pickerLeftPosition - (pickerWidth /2) + leftRGB; 
		
		//hsl code
		var convertLightnessToAngle = hsl.l * colorPicker.numDegrees / colorPicker.hslLimit;
		var lightAngle = getLightnessAngleDivisions(convertLightnessToAngle);
		
		var angleHSL = (lightAngle * (Math.PI * 2)) / colorPicker.numDegrees;
		var lengthHSL = getHSLLength(); // USE THIS
		//var lengthHSL = 30;
		var topHSL = -(lengthHSL * Math.cos(angleHSL));
		var leftHSL = lengthHSL * Math.sin(angleHSL);
		
		topHSL = colorPicker.colorPickerWidth + pickerTopPosition - (pickerHeight/2) + topHSL; 
		leftHSL = colorPicker.colorPickerWidth + pickerLeftPosition - (pickerWidth /2) + leftHSL;

		$("#rgbSelector").css({top: topRGB, left: leftRGB});
		$("#hslSelector").css({top: topHSL, left: leftHSL});
		$("#colorHexValue").val(hex || utils.hslToHex(hsl));
		$("#bgColorDisplay").css('background-color', "hsl(" + hsl.h + "," + hsl.s + "%," + hsl.l + "%)");
	
		$("#hueSaturationBase")
			.css('background-image', '-webkit-radial-gradient(center center, hsl(' + hsl.h + ', 100%, 50%),hsl(0,0%,50%) 80%, hsl(0,0%,50%) 100%)')
			.css('background-image', '-moz-radial-gradient(center center, hsl(' + hsl.h + ', 100%, 50%),hsl(' + hsl.h + ', 100%, 50%) 20%, hsl(0,0%,50%) 80%, hsl(0,0%,50%) 100%)'); 
	},
	
	updateBackupColor : function (color){
		// convert color to right format
		$("#bgColorOriginal").css('background-color',color);	
	},

	dragEl : false,
	pickerWidth : false, 
	pickerRadius : false, 
	cpCenter : false,
	activeWidget : false,
	rainbowColorDivPosition : false,
	dragStart : function(e){
		colorPicker.cpCenter = colorPicker.cpCenter || $("#rainbowColorPicker").offset(); // center of color picker.
		colorPicker.dragEl = colorPicker.dragEl || $(this);
		
		// set active picker
		var event = e.target.id;
		colorPicker.setActivePickerBorder(event);
	},	

	getRGBAngle : function (eX, eY, cpCenterY, cpCenterX){
		var triWidth = eX - cpCenterX - (propInspector.pickerWidth /2) - colorPicker.colorWheelRadius;
		var triHeight = eY - cpCenterY - (propInspector.pickerWidth /2) - colorPicker.colorWheelRadius;
		var hypot =  Math.sqrt(triWidth*triWidth + triHeight*triHeight);
			
		var ratio = colorPicker.colorWheelRadius / hypot;
		var leftPos = propInspector.pickerRadius + (triWidth * ratio) -(propInspector.pickerWidth /2);// + propInspector.rainbowColorDivPosition.left -(propInspector.pickerWidth /2);
		var topPos = propInspector.pickerRadius + (triHeight * ratio) + propInspector.rainbowColorDivPosition.top - (propInspector.pickerWidth /2); 

		var radAngle = Math.asin(triWidth / hypot);
		var angle = (180/Math.PI) * radAngle;

		if(eY > cpCenterY + colorPicker.colorWheelRadius  + (propInspector.pickerWidth / 2)) 
		{
			angle = 180 - angle; 
		}
		else if(eX < cpCenterX + colorPicker.colorWheelRadius  + (propInspector.pickerWidth / 2)) 
		{
			angle = 360 + angle;
		}
		
		if(angle > 360) var angle = angle - colorPicker.numDegrees;
		return {top: topPos, left: leftPos, angle: angle};
	},
	
	rgbDrag : function(e){
		var pos = colorPicker.getRGBAngle(e.pageX, e.pageY, colorPicker.cpCenter.top, colorPicker.cpCenter.left);
		
		colorPicker.dragEl.data().draggable.position.top = pos.top;
		colorPicker.dragEl.data().draggable.position.left = pos.left;
		colorPicker.rgbSet(pos); // , false
		$('#colorPicker, #lightDarkOverlay').css('cursor', 'none');
	},
	
	rgbSet : function(pos) // , click
	{
		var hueOutputValue = setRgbAngleDivisions(pos.angle);	
		function setRgbAngleDivisions(angle){
			var degreesPerColor = colorPicker.numDegrees/colorPicker.numColors;
			var spaceBetweenFlatArcs = degreesPerColor - colorPicker.flatColorArc;
			var angleIndex = Math.floor(angle/degreesPerColor)*degreesPerColor;
			var flatAngleMin = angleIndex + degreesPerColor - (colorPicker.flatColorArc/2);
			var flatAngleMax = angleIndex + (colorPicker.flatColorArc/2);
				
			if(angle > flatAngleMin && angle < (angleIndex + degreesPerColor)) //1st half of the flat colour sector
			{
				var hueOutputValue = angleIndex  + degreesPerColor;	
			}
			else if(angle > angleIndex && angle < flatAngleMax) // 2nd half of the flat colour sector
			{
				var hueOutputValue = angleIndex;
			}
			else // transition between flat colour sector
			{
				var angleHueEqualizer = ((degreesPerColor/spaceBetweenFlatArcs)*(colorPicker.flatColorArc/2)) + (angleIndex/2);
				var hueOutputValue = (degreesPerColor/spaceBetweenFlatArcs)*angle - angleHueEqualizer;
			}
		
			return hueOutputValue;
		}
			
		var satValue = lValue = false;
		if(colorPicker.currentHSL.s === 0){
			satValue = colorPicker.hslLimit;
			lValue = 50;
		}
		colorPicker.updateDisplay({h: hueOutputValue, s: satValue, l: lValue});
	},
		
	rgbDragStop : function(e){
		colorPicker.rgbDrag(e);
		colorPicker.dragEl = false;	
		colorPicker.cpCenter = false;
		
		colorPicker.applyToWidget(null);
		$('#colorPicker, #lightDarkOverlay').css('cursor', 'default');
	},	

	hslDrag : function(e){		
		var pos = colorPicker.getHSLAngle(e.pageX, e.pageY, colorPicker.cpCenter.top, colorPicker.cpCenter.left);
		
		colorPicker.dragEl.data().draggable.position.top = pos.top;
		colorPicker.dragEl.data().draggable.position.left = pos.left;
		colorPicker.hslSet(pos);	
		$('#colorPicker, #lightDarkOverlay').css('cursor', 'none');	
	},
	
	getHSLAngle : function(eX, eY, cpCenterY, cpCenterX){
		var triWidth = eX - cpCenterX - colorPicker.hslWheelRadius - (3 * propInspector.pickerWidth / 2) + 0.01;
		var triHeight = eY - cpCenterY - colorPicker.hslWheelRadius - (3 * propInspector.pickerWidth / 2) + 0.01;
		var hypot =  Math.sqrt(triWidth*triWidth + triHeight*triHeight);

		var ratio = colorPicker.hslWheelRadius / hypot;
		var radAngle = Math.asin(triWidth / hypot);
		var angle = Math.round((180/Math.PI) * radAngle);
		
		//adjust greys here
		var leftPos = propInspector.pickerRadius + (triWidth * ratio) + $("#rainbowColorPicker").position().left - (propInspector.pickerWidth / 2);
		var topPos = propInspector.pickerRadius + (triHeight * ratio) + $("#rainbowColorPicker").position().top - (propInspector.pickerWidth / 2); 
		
		if(hypot < colorPicker.hslWheelRadius) //adjust colors here
		{
			var topPos = propInspector.pickerRadius + triHeight - (propInspector.pickerWidth / 2);
			var leftPos = propInspector.pickerRadius + triWidth - (propInspector.pickerWidth / 2);
		}

		//if(eY > cpCenterY + colorPicker.hslWheelRadius + (5/2 * propInspector.pickerWidth))//  + propInspector.pickerWidth - colorPicker.hslWheelRadius)
		if(eY > (cpCenterY + colorPicker.hslWheelRadius + (3/2 * propInspector.pickerWidth)))
		{
			angle = (colorPicker.numDegrees / 2) - angle; 
		}
		//else if(eX < (cpCenterX + colorPicker.hslWheelRadius + (5/2 * propInspector.pickerWidth)))// - colorPicker.hslWheelRadius)
		else if(eX < (cpCenterX + colorPicker.hslWheelRadius + (3/2 * propInspector.pickerWidth)))
		{
			angle = colorPicker.numDegrees + angle;	
		}
		
		
		if(angle > 360)
		{		
			var angle = angle - colorPicker.numDegrees;
		}
		
		var angle = Math.abs(angle);
		//return {top: topPos, left: leftPos, angle: angle, sat: satValue};
		return {top: topPos, left: leftPos, angle: angle, hypot: hypot};
	},
	
	hslSet : function(pos){
		//var lValue = Math.round(pos.angle / colorPicker.numDegrees * colorPicker.hslLimit); // set lightness value
		function setLightnessDivisions(){
			
			//if(pos.angle > 
		
			if(pos.hypot < graphStartPoint)
			{
				var lightness = colorPicker.hslLimit / 2;
			}
			else if(pos.hypot >= graphStartPoint && pos.hypot < graphMidPoint)
			{
				var startLight = colorPicker.hslLimit / 2;
				var endLight = pos.angle * colorPicker.hslLimit / colorPicker.numDegrees;
				var slope = (endLight - startLight) / (graphMidPoint - graphStartPoint);
				var lightness = (slope * (pos.hypot - graphStartPoint)) + startLight;
			}
			else if(pos.hypot >= graphMidPoint && pos.hypot < graphEndPoint)
			{
				
				var lightness = pos.angle * colorPicker.hslLimit / colorPicker.numDegrees;
			}
			else if(pos.hypot >= graphEndPoint)
			{
				if (pos.angle < colorPicker.flatColorArc)
				{
					var lightness = 0; // black
				}
				else if(pos.angle >= colorPicker.flatColorArc &&
					pos.angle <= (colorPicker.numDegrees - colorPicker.flatColorArc))
				{
					var difference = (colorPicker.numDegrees + (2 * colorPicker.flatColorArc)) / colorPicker.numDegrees;
					var modifiedAngle = (pos.angle - colorPicker.flatColorArc) * difference;
					var lightness = colorPicker.hslLimit * modifiedAngle / colorPicker.numDegrees;
				}
				else if (pos.angle > (colorPicker.numDegrees - colorPicker.flatColorArc))
				{
					var lightness = colorPicker.hslLimit; // white
				}
			}
			
			return lightness;
		}
		
		function setSaturation(){
			 //default saturation values
			//var graphDifference = graphEndPoint - graphStartPoint;
			
			saturation = colorPicker.hslLimit;
			
			if(pos.hypot >= graphStartPoint && pos.hypot < graphEndPoint)
			{
				var constant = graphEndPoint / (graphEndPoint - graphStartPoint);
				var x = (pos.hypot - graphStartPoint) * constant;
				var slope = colorPicker.hslLimit / graphEndPoint;
				var saturation = colorPicker.hslLimit - (slope * x); //some linear function
			}
			if(pos.hypot >= graphEndPoint)
			{
				var saturation = 0;
			}
			return saturation;
		}
		
		var graphStartPoint = propInspector.pickerWidth / 2;
		var graphMidPoint = propInspector.pickerWidth;
		var graphEndPoint = colorPicker.hslWheelRadius - (propInspector.pickerWidth / 5);
		
		var lValue = setLightnessDivisions();
		var satValue = setSaturation();
		colorPicker.updateDisplay({h: false, s: satValue, l: lValue});
	},
	
	hslDragStop : function(e){
		colorPicker.hslDrag(e);
		colorPicker.dragEl = false;
		colorPicker.cpCenter = false;
		
		colorPicker.applyToWidget(null);
		$('#colorPicker, #lightDarkOverlay').css('cursor', 'default');
	},
	
	populateAdvancedGradient : function(){
		var widgObj = colorPicker.getWidgetForCP();
				
		if(widgObj.bg == 's') // if it's a pattern
		{
			//var bgdx = $.merge([], widgObj.bgd);
			//bgdx = [0.00,1.00];
			//var bgcx = $.merge([], widgObj.bgc);
			colorPicker.colorStopNumber = 1;
			return false;
		}
		else if(widgObj.bgc[0] === 'rgba(0,0,0,0.0)' && widgObj.bgc[1] == 'rgba(0,0,0,0.0)'){
			colorPicker.colorStopNumber = 1;
			return false;
		}
		else // this is the bit that determines the colour 
		{
			var bgdx = (widgObj["bgd"]) ? $.merge([], widgObj["bgd"]) : [1];
			var bgcx = (widgObj["bgc"]) ? $.merge([], widgObj["bgc"]) : ["#fff"];
		}
		
		$("#gradientTypeSelector").val(widgObj.bg);	
		colorPicker.removeColorStop(null, "all", true);
		colorPicker.addColorStops(null, bgcx, bgdx, true);
		return false; 
	},
	

	redraw : function (id)// bgc, bgd, bg
	{
		var widgObj = widget.get(id);
		var widgEl = $("#" + id);
		var tmplVars = widget._setTMPLVars(id, widgObj, false, false); // extended version of object. , containerTLWH
		tmplVars.absTLWH = [parseInt(widgEl.css("top")) , parseInt(widgEl.css("left")) , widgEl.outerWidth() , widgEl.outerHeight() ];
		widget._drawCanvasOrImage(widgEl, tmplVars); // draws the canvas part of the widget.  canvas, obj, mode
	},

	sortApplyColors : function(e){
		var manualColor = $(e.target).css('background-color');

		colorPicker.applyToWidget(null, false, manualColor);
	},
	
	getCurrentColor : "rgb(0,0,0)",
	applyToWidget : function(e, noHistory, manualColor){
		function createBackgroundCommand(){
			command = fluid.command.create('setBackgroundColor', {
				id: mapSelToIdArray(colorPicker.getSelectedOnly(sel)),
				color: color,
				event: $.extend({}, e)
			});
		}
		
		var sel = colorPicker.getSelectedOnly();
		
		var color = (manualColor) ? manualColor : $('#bgColorDisplay').css('background-color'); 

		var command;

		function mapSelToIdArray(sel){
			return sel.map(function() { return $(this).attr('id'); }).get();
		}

		if (propInspector.lastAction == 'showTextColor')// apply to text
		{
			var sel = propInspectorCtrl.textWidgets;
			command = fluid.command.create('setColor', {
				id: mapSelToIdArray(sel),
				color: color
			});
		}
		else if (propInspector.lastAction == 'showFlatColor' || propInspector.lastAction == 'showGradientGallery'
		|| propInspector.lastAction == 'showColorStopEditor')
		{
			createBackgroundCommand();
		}
		else if(propInspector.lastAction == 'showAdvancedGradientEditor'){
			var firstWidgetId = sel.first().attr("id");
			var firstWidgetObj = widget.get(firstWidgetId);
				
			if(firstWidgetObj.bgc){
				if(firstWidgetObj.bgc.length > 0) { 
					colorPicker.getCurrentColor = firstWidgetObj.bgc[0];
				}
			}
				
			color = colorPicker.getCurrentColor;
			
			if(e){
				var targetEl = $(e.target);
				if(targetEl.hasClass("gradientStopSlider")){
					if(e.type == 'mouseup'){
						createBackgroundCommand();
					}
					else {
						colorPicker.applyToBackground(e, color, sel, color);
					}
				}
				else {
					createBackgroundCommand();
				}			
			}
			else {
				createBackgroundCommand();
			}
		}
		else if (propInspector.lastAction == 'showBorder'){
			command = fluid.command.create('setBorderColor', {
				id: mapSelToIdArray(colorPicker.getSelectedOnly(sel)),
				color: color
			});
		}

		if (command){
			command.dispatchTo('fluid.controllers.widget', !noHistory);
		}
	},
	
	
	applyToBackground : function(e, updateColor, selEl, previousColor){
		function apply(){
			var widgId = $(this).attr("id");
			var widgObj = $.extend(true, {}, widget.get(widgId));
			
			if($(this).hasClass("rootWidget") && !widgObj.bg && widgObj.seg) // multi segment no background handling
			{
				return true;
			}
			
			
			if(!widgObj.bg && widgObj.tc) return; // dont create backgrounds on text widgets.
			
			if (propInspector.lastAction == 'showFlatColor')
			{
				var inputColor = (widgObj.bgc) ? widgObj.bgc[0] : 'rgba(0,0,0,0.50)';
				var outputColor = colorPicker.addAlpha(inputColor,color,changeAlpha);
				
				var bgc = outputColor.split();
				delete widgObj['bgd'];
				widget.set({bg: 'c', bgc : bgc}, widgId);	
				//$("#shapeBackground").css('background-color',bgc[0]);
			}
			else if(propInspector.lastAction == 'showAdvancedGradientEditor')
			{
				var bgx = $("#gradientTypeSelector").val(); //originalWidget is set if reverting
				var bgcx = new Array(colorPicker.colorStopAmount);
				var bgdx = new Array(colorPicker.colorStopAmount);
				var inputColor = previousColor;
					
				for(var i = 0; i < colorPicker.colorStopAmount; i++)
				{	
					var newColor = $("#gradientStop .colorPickerTrigger").eq(i).css("background-color");
					bgcx[i] = colorPicker.addAlpha(inputColor,newColor,changeAlpha);
					bgdx[i] = $("#gradientStop .gradientStopSlider").eq(i).attr("value") / 100;
				}
				widget.set({bg: bgx, bgc : bgcx, bgd : bgdx}, widgId);
				//$("#shapeBackground").css('background-color',bgcx[0]); //update the colour of shape background
			}
			else if(propInspector.lastAction == 'showGradientGallery')
			{
				var gradient = $.parseJSON($(e.originalEvent.target).attr("data-color"));
				var newGradient = $.extend(true, {}, gradient); 
                var inputColor = (widgObj.bgc) ? widgObj.bgc[0] : 'rgb(0,0,0)';
                if(gradient.bgc[0] == 'rgba(0,0,0,0.0)'){
					newGradient = newGradient;
				}
				else{
					for(var j=0; j<gradient.bgc.length; j++) {
						var colorStop = gradient.bgc[j];
						var rgbColorStop = utils.hex2rgba(colorStop);
						newGradient.bgc[j] = colorPicker.addAlpha(inputColor,rgbColorStop,changeAlpha); 
					}
				}
				
				widget.set(newGradient, widgId);
				var newWidgetObject = widget.get(widgId);
				//$("#shapeBackground").css('background-color',newWidgetObject.bgc[0]); //update the colour of shape background
			}
			else if(propInspector.lastAction == 'showColorStopEditor')
			{
				var bgc = $.merge([], widgObj.bgc);
				var inputColor = bgc[propInspector.colorStopNumber];
				var outputColor = colorPicker.addAlpha(inputColor,color);
				bgc[propInspector.colorStopNumber] = outputColor;
				
				widget.set({bgc : bgc}, widgId);
				//$("#shapeBackground").css('background-color',bgc[0]);
			}
			colorPicker.redraw(widgId);	
		}
		
		selEl = selEl || colorPicker.getSelectedOnly();
		var color = updateColor || $("#bgColorDisplay").css('background-color');
		var changeAlpha = true;
		selEl.each(apply);
		
		propInspectorCtrl.updateBackgroundBorderInfo();
		return false;
	},
	
	applyToBorder : function(updateColor, selEl)
	{
		function setColor(b,widgId,borderProp){
			var inputColor = b[1];
			var outputColor = colorPicker.addAlpha(inputColor,color);
			b[1] = outputColor;
			
			var borderObject = {};
			borderObject[borderProp] = b;
			widget.set(borderObject, widgId);
			return outputColor;
		}
		
		function apply(){
			var widgId = $(this).attr("id");
			var widgObj = widget.get(widgId);
			
			if($(this).hasClass("rootWidget") && !widgObj.b) // multi segment no background handling
			{
				return true;
			}
			
			var widgObject = $.extend(true, {}, widgObj);
			
			if(widgObject.b || widgObject.bbs || widgObject.bts || widgObject.bms || widgObject.bls || widgObject.brs || widgObject.bs)
			{
				var brdProp = ['b','bs','bts', 'bls', 'bms', 'bbs', 'brs'];
				for (var bIdx = 0; bIdx < brdProp.length; bIdx++)
				{
					if(widgObject[brdProp[bIdx]]){
						var b = widgObject[brdProp[bIdx]];
						var newBorderColor = setColor(b,widgId,brdProp[bIdx]);
					}
				}
			}
			else{
				var b = [0,'#000',0];
				var newBorderColor = setColor(b,widgId);
			}
			colorPicker.redraw(widgId);	
		}
		
		var color = updateColor || $("#bgColorDisplay").css('background-color');
		selEl = selEl || colorPicker.getSelectedOnly();
		selEl.each(apply);
		propInspectorCtrl.updateBackgroundBorderInfo();
		return false;
	},

	addAlpha : function(inputColor,color,changeAlpha){
		// To troubleshoot this function, you need to console.log it a lot - ---- Yuri
		var inputColor = (inputColor) ? inputColor : 'rgba(0,0,0,1.0)'
		var rgbaTest = inputColor.match(/rgba/gi);
		if(rgbaTest == null){
			var outputColor = color;
		}
		else{
			var findColor = color.match(/\d+/g); //get RGB colors from the color
			var findAlpha = inputColor.match(/\d+/g); //get Alpha from input color
			var numlength = findAlpha.length;
			
			var addAlpha = 1.00;
			if(numlength == 4){
				addAlpha = findAlpha[3];
			}
			else if(numlength == 5){
				addAlpha = findAlpha[3]+"."+findAlpha[4];
			}
			
			if(changeAlpha){
				addAlpha = (parseFloat(addAlpha) == 0.0) ? 1.00 : addAlpha;
			}

			var outputColor = 'rgba(' + findColor[0] + ',' + findColor[1] + ',' + findColor[2] + ',' + addAlpha + ')';
		}
		return outputColor;
	},
	
	tempTextId : false,
	applyToText : function(color, selEl){
		function applyTextColor(widgObj,widgId,$this){
			var text = widgObj.ts;
			var ts = createTSstring(text);

			widget.set({ts: ts}, widgId);
			$($this).find('.widgetText').attr("style",ts);
			colorSelectors.css('background-color',textColor);
		}
		
		function createTSstring(ts){
				var widgetArr = ts.split(/;/);
				for(var j=0; j<widgetArr.length - 1; j++) 
				{
					if (widgetArr[j].match ("color")) 
					{
						var colorIndex = j;
						widgetArr[colorIndex] = 'color:'+textColor;
					}
				}
				
				var textArr = new Array();
				for(var i=0; i<widgetArr.length -1; i++)
				{
					textArr[i] = widgetArr[i] + ';';
				}
				
				var textString = textArr.toString();
				var newTextString = textString.replace(/;,/gi,';');
				
				return newTextString;
		}
		
		function apply(){
			var widgId = $(this).attr("id");
			var widgObj = widget.get(widgId); 
			var $this = this;
			if ('ts' in widgObj) { applyTextColor(widgObj,widgId,$this); }
		}
	
		var colorSelectors = $("#textColor");
		var textColor = color || $("#bgColorDisplay").css('background-color');
		selEl.each(apply);
		
		var selEl = selEl || propInspectorCtrl.textWidgets;
		colorSelectors.css('background-color',textColor);
		return false;
	},
	
	removeColorStop : function(e, toRemove, noHistory){
		if(toRemove == "all"){
			toRemove =  $("#gradientStop .colorStopOption");
		}
		toRemove.remove();	
		colorPicker.setColorStopProperties(e, noHistory);	
	}, 		
	
	addColorStops : function(e, bgc, bgd, noHistory){
		if(!bgc) bgc = ["#000"];
		if(!bgd) bgd = [1];
		for(var i = 0; i < bgc.length; i++)
		{
			var sliderVal = Math.round(bgd[i] * 100);
			$("#tmplGradientColorStop").tmpl({bgColor: bgc[i], bgIndex: bgd[i], val: sliderVal}).appendTo("#gradientStop");		
		}
		colorPicker.setColorStopProperties(e, noHistory);
	},	
	
	colorStopAmount : 1,
	setColorStopProperties : function(e, noHistory){
		var gradientStop = $("#gradientStop .colorStopOption");
		var gradientStopIndex = gradientStop.index();
		var gradientStopAmount = gradientStopIndex + 1;
		colorPicker.colorStopAmount = gradientStopAmount;
		
		var colorStopButton = $("#gradientStop .colorStopButton");
		var gradientStopSlider = $("#gradientStop .gradientStopSlider");
		var colorStopDelete = $("#gradientStop .colorStopDelete");
		
		if(!noHistory && (gradientStopAmount == 2)){
			var firstGradientStopVal = parseInt(gradientStopSlider.eq(0).val());
			if(firstGradientStopVal == 100){
				var setToValue = 50;//set the first colour stop to smaller value if two colour stops are at 100%
				gradientStopSlider.eq(0).val(setToValue);
				$("#gradientStop .colorStopIndicator").eq(0).text(setToValue);
			}
		}
		
		for(var j = 0; j < gradientStopAmount; j++)
		{
			gradientStop.eq(j).attr("data-colorStop",j);
			colorStopButton.eq(j).attr("data-colorStop",j);
			gradientStopSlider.eq(j).attr("data-colorStop",j);
			colorStopDelete.eq(j).attr("data-colorStop",j);
		}
        colorPicker.applyToWidget(null, noHistory);
	},
	
	extractBorderColor : function(elem){
		var widgObj = widget.get(elem);
		var borderValue = widgObj.b[1] || '#333';
		
		return borderValue;
	}
};









/*
 * jquery.simulate - simulate browser mouse and keyboard events
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 */

;(function($) {

$.fn.extend({
	simulate: function(type, options) {
		return this.each(function() {
			var opt = $.extend({}, $.simulate.defaults, options || {});
			new $.simulate(this, type, opt);
		});
	}
});

$.simulate = function(el, type, options) {
	this.target = el;
	this.options = options;

	if (/^drag$/.test(type)) {
		this[type].apply(this, [this.target, options]);
	} else {
		this.simulateEvent(el, type, options);
	}
}

$.extend($.simulate.prototype, {
	simulateEvent: function(el, type, options) {
		var evt = this.createEvent(type, options);
		this.dispatchEvent(el, type, evt, options);
		return evt;
	},
	createEvent: function(type, options) {
		if (/^mouse(over|out|down|up|move)|(dbl)?click$/.test(type)) {
			return this.mouseEvent(type, options);
		} else if (/^key(up|down|press)$/.test(type)) {
			return this.keyboardEvent(type, options);
		}
	},
	mouseEvent: function(type, options) {
		var evt;
		var e = $.extend({
			bubbles: true, cancelable: (type != "mousemove"), view: window, detail: 0,
			screenX: 0, screenY: 0, clientX: 0, clientY: 0,
			ctrlKey: false, altKey: false, shiftKey: false, metaKey: false,
			button: 0, relatedTarget: undefined
		}, options);

		var relatedTarget = $(e.relatedTarget)[0];

		if ($.isFunction(document.createEvent)) {
			evt = document.createEvent("MouseEvents");
			evt.initMouseEvent(type, e.bubbles, e.cancelable, e.view, e.detail,
				e.screenX, e.screenY, e.clientX, e.clientY,
				e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
				e.button, e.relatedTarget || document.body.parentNode);
		} else if (document.createEventObject) {
			evt = document.createEventObject();
			$.extend(evt, e);
			evt.button = { 0:1, 1:4, 2:2 }[evt.button] || evt.button;
		}
		return evt;
	},
	keyboardEvent: function(type, options) {
		var evt;

		var e = $.extend({ bubbles: true, cancelable: true, view: window,
			ctrlKey: false, altKey: false, shiftKey: false, metaKey: false,
			keyCode: 0, charCode: 0
		}, options);

		if ($.isFunction(document.createEvent)) {
			try {
				evt = document.createEvent("KeyEvents");
				evt.initKeyEvent(type, e.bubbles, e.cancelable, e.view,
					e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
					e.keyCode, e.charCode);
			} catch(err) {
				evt = document.createEvent("Events");
				evt.initEvent(type, e.bubbles, e.cancelable);
				$.extend(evt, { view: e.view,
					ctrlKey: e.ctrlKey, altKey: e.altKey, shiftKey: e.shiftKey, metaKey: e.metaKey,
					keyCode: e.keyCode, charCode: e.charCode
				});
			}
		} else if (document.createEventObject) {
			evt = document.createEventObject();
			$.extend(evt, e);
		}
		if ($.browser.msie || $.browser.opera) {
			evt.keyCode = (e.charCode > 0) ? e.charCode : e.keyCode;
			evt.charCode = undefined;
		}
		return evt;
	},

	dispatchEvent: function(el, type, evt) {
		if (el.dispatchEvent) {
			el.dispatchEvent(evt);
		} else if (el.fireEvent) {
			el.fireEvent('on' + type, evt);
		}
		return evt;
	},

	drag: function(el) {
		var self = this, center = this.findCenter(this.target), 
			options = this.options,	x = Math.floor(center.x), y = Math.floor(center.y), 
			dx = options.dx || 0, dy = options.dy || 0, target = this.target;
		var coord = { clientX: x, clientY: y };
		this.simulateEvent(target, "mousedown", coord);
		coord = { clientX: x + 1, clientY: y + 1 };
		this.simulateEvent(document, "mousemove", coord);
		coord = { clientX: x + dx, clientY: y + dy };
		this.simulateEvent(document, "mousemove", coord);
		this.simulateEvent(document, "mousemove", coord);
		this.simulateEvent(target, "mouseup", coord);
	},
	findCenter: function(el) {
		var el = $(this.target), o = el.offset();
		return {
			x: o.left + el.outerWidth() / 2,
			y: o.top + el.outerHeight() / 2
		};
	}
});

$.extend($.simulate, {
	defaults: {
		speed: 'sync'
	},
	VK_TAB: 9,
	VK_ENTER: 13,
	VK_ESC: 27,
	VK_PGUP: 33,
	VK_PGDN: 34,
	VK_END: 35,
	VK_HOME: 36,
	VK_LEFT: 37,
	VK_UP: 38,
	VK_RIGHT: 39,
	VK_DOWN: 40
});

})(jQuery);
// THIS CONTROLS ALL THE FRONT-END 'DOM' STUFF. 
// Calculations are performed in jQuery.colorPicker.js and class-shapeProperties.js

var propInspector = {

	init : function(){
		$("#tmplColorWheel").tmpl().appendTo($("#flatEditorView"));
		propInspector.masterElements = $('.masterElementsHidable');
		propInspector.hidablePropertyInspector = $('.piHidable');
		propInspector.shapeProps = $(".shapeProps");
		propInspector.textProps = $(".textProps");

		propInspector.backgroundBorderHolder = $("#backgroundBorder");
		propInspector.backgroundContainers = $("#captionBackground,#shapeBackground");
		propInspector.borderContainers = $("#captionBorder,#shapeBorder");
		propInspector.borderContainers.css({'pointer-events' : 'auto', 'opacity' : 1});
		propInspector.shapeBorderControl = $("#shapeBorderControl");
		propInspector.increaseBorderSize = $("#shapeBorderControl .increaseNumber").filter(".shapeBorderBtn");
		//propInspector.increaseBorderSize.css({'pointer-events' : 'auto', 'opacity' : 1});
		propInspector.increaseRadiusSize = $("#shapeBorderControl .increaseNumber").filter(".shapeRadiusBtn");
		//propInspector.increaseRadiusSize.css({'pointer-events' : 'auto', 'opacity' : 1});
		propInspector.shapeSizeProperties = $("#shapeSizeProperties");
		propInspector.shapeOpacityControl = $("#shapeOpacityControl");
		propInspector.heightProps = $("#widgetHeight");
		propInspector.heightProps.css({'pointer-events' : 'auto', 'opacity' : 1});
		propInspector.widthProps = $("#widgetWidth");
		propInspector.widthProps.css({'pointer-events' : 'auto', 'opacity' : 1});
		propInspector.widgetBorderRadius = $("#widgetBorderRadius");
		propInspector.widgetBorderRadius.css({'pointer-events' : 'auto', 'opacity' : 1});

		//colorPickerStuff
		propInspector.flatColorView = $(".flatColorView");
		propInspector.gradientGallery = $(".gradientGallery");
		propInspector.colorStopEditor = $(".colorStopEditor");
		propInspector.advancedGradientEditor = $(".advancedGradientEditor");
		propInspector.textColorPicker = $(".textColorPicker");
		propInspector.borderColor = $(".borderColor");
		
		propInspector.defaultColorFill = '-linear-gradient(45deg, transparent,transparent 44%,#f00 45%,#f00 55%,transparent 56%,transparent)';
		propInspector.defaultColor = 'background:-webkit' + propInspector.defaultColorFill + ';background:-moz' + propInspector.defaultColorFill + ';';
		
		$(".piClickable").click(propInspector.toggle);
		
		propInspector.initGradientGallery();
		propInspector.pickerWidth =  parseInt($("#rgbSelector").css('width'));
		propInspector.pickerRadius = parseInt($("#rainbowColorPicker").css('width')) / 2;
		propInspector.rainbowColorDivPosition = $("#rainbowColorPicker").position(); // center of color picker.
		
		$("#rgbSelector").draggable({start: colorPicker.dragStart, drag: colorPicker.rgbDrag, stop: colorPicker.rgbDragStop});
		$("#hslSelector").draggable({start: colorPicker.dragStart, drag: colorPicker.hslDrag, stop: colorPicker.hslDragStop});
		$("#rgbSelector, #hslSelector").click(colorPicker.clickOnSelectorEdge);
  
		$("#colorHexValue")
			.on('focus', function (event) {
				this.select();
				colorPicker.inputFocusTime = event.timeStamp;
			})
			.click(colorPicker.selectHex)
			.on("input", colorPicker.inputHex);
		
		$("#rgbArea").click(colorPicker.rgbClick);
		$("#hslArea").click(colorPicker.hslClick);
		
		$("#cPickerOptions").click(colorPicker.applyToWidget);	
		$("#gradientTypeSelector").change(colorPicker.applyToWidget);		// apply a default gradient.
	
		$("#addColorStop").click(colorPicker.addColorStops);
		$("#gradientStop").click(propInspector.gradientStopClick);
	
		$("#bgColorDisplay, #bgColorOriginal").click(colorPicker.sortApplyColors);
		$(".gradientStopSlider").live("change", colorPicker.changeColorStopSlider);
		$(".gradientStopSlider").live("mouseup",colorPicker.changeColorStopSlider);
	},
	
	colorStopNumber : false,
	gradientStopClick : function(e){
		var targetEl = $(e.originalEvent.target);
		var targetRootEl = targetEl.parent(".colorStopOption");

		if(targetEl.hasClass("colorStopButton"))
		{
			propInspector.colorStopNumber = targetEl.attr("data-colorStop");
			var colorStopButton = "colorStopButton";
			propInspector.toggle(null,colorStopButton);
			
		}
		else if(targetEl.hasClass("colorStopDelete"))
		{
			var stopCount = $("#gradientStop .colorStopOption").index();
			if(stopCount > 0)
			{
				colorPicker.removeColorStop(null, targetRootEl);
			}
		}
	},
	
	initGradientGallery : function(){
		var markup = $([]);
		var gradient = [
		'(rgba 0,0,0,0.0),(rgba 0,0,0,0.0))', 
		'radial-gradient(circle, #e6e6e6,#fafafa)',
		'linear-gradient(#FBFBFB,#B9B9B9)',
		'radial-gradient(circle, #F0F0F9,#A8A8B1)',
		'linear-gradient(rgb(221,221,223),rgb(221,221,223) 15%,rgb(206,207,209) 49%,rgb(184,186,188) 50%,rgb(188,190,193))', 
		
		'radial-gradient(circle, #ABABAB,#7B7B7B)',
		'linear-gradient(#A4A4A4,#848484)', 
		'linear-gradient(rgb(85,89,96),rgb(38,44,53) 49%,rgb(20,29,38) 50%,rgb(39,45,55))',
		'linear-gradient(rgb(217,130,136),rgb(207,86,96) 49%,rgb(188,19,32) 50%,rgb(188,19,32))', 
		'linear-gradient(left, #B03247,#CB3157)', 
		
		'linear-gradient(left, #C55746,#E45D40)',
		'linear-gradient(-45deg, #EF7165,#E94C3D,#E31E27)', 
		'linear-gradient(-45deg, #F9A665,#F68C3E,#F26D20)',
		'linear-gradient(#E4D0A0,#EFCD64 49%,#EFBD22 50%,#F6DC23)', 
		'linear-gradient(-45deg, #BBD87D,#8EBF3F)',
		
		'linear-gradient(#79BE80,#31AB3B 49%,#009E10 50%,#008F0B)',
		'linear-gradient(+45deg, #84C185,#369946)',
		'linear-gradient(left, #3E91A3,#49A9B9)',
		'linear-gradient(left, #277EDF,#3691EC)',	
		'radial-gradient(circle, #0298DB,#065A9D)',
		
		'linear-gradient(rgb(116,153,232),rgb(54,110,223) 49%,rgb(34,96,221) 50%,rgb(35,98,221))',		
		'linear-gradient(rgb(130,158,188),rgb(90,125,166) 49%,rgb(70,103,151) 50%,rgb(71,104,153))',
		'radial-gradient(circle, #9CBDD3,#657E8F)',
		'linear-gradient(-45deg, #6D90B3,#306393,#12477F)',
		'linear-gradient(left, #6031B1,#6F3CBD)'];
		
		var widgetGradient = [
			{bg:"l", bgc:["rgba(0,0,0,0.0)","rgba(0,0,0,0.0)"], bgd:[0.00,1.00]}, 
			{bg:"r", bgc:["#e6e6e6","#fafafa"], bgd:[0.00,1.00]},
			{bg:"l", bgc:["#FBFBFB","#B9B9B9"], bgd:[0.00,1.00]}, 
			{bg:"r", bgc:["#F0F0F9","#A8A8B1"], bgd:[0.00,1.00]},
			{bg:"l", bgc:["rgb(221,221,223)","rgb(221,221,223)","rgb(206,207,209)","rgb(184,186,188)","rgb(188,190,193)"], bgd:[0.00,0.15,0.49,0.5,1.00]}, 
			
			{bg:"r", bgc:["#ABABAB","#7B7B7B"], bgd:[0.00,1.00]},
			{bg:"l", bgc:["#A4A4A4","#848484"], bgd:[0.00,1.00]}, 
			{bg:"l", bgc:["rgb(85,89,96)","rgb(38,44,53)","rgb(20,29,38)","rgb(39,45,55)"], bgd:[0.00,0.49,0.5,1.00]}, 
			{bg:"l", bgc:["rgb(217,130,136)","rgb(207,86,96)","rgb(188,19,32)","rgb(188,19,32)"], bgd:[0.00,0.49,0.50,1.00]}, 
			{bg:"ld2", bgc:["#EF7165","#E94C3D","#E31E27"], bgd:[0.00,0.50,1.00]}, 
			
			{bg:"lrl", bgc:["#C55746","#E45D40"], bgd:[0.00,1.00]},
			{bg:"ld2", bgc:["#EF7165","#E94C3D","#E31E27"], bgd:[0.00,0.50,1.00]}, 
			{bg:"ld2", bgc:["#F9A665","#F68C3E","#F26D20"], bgd:[0.00,0.50,1.00]},
			{bg:"l", bgc:["#E4D0A0","#EFCD64","#EFBD22","#F6DC23"], bgd:[0.00,0.49,0.50,1.00]}, 
			{bg:"ld2", bgc:["#BBD87D","#8EBF3F"], bgd:[0.00,1.00]}, 
			
			{bg:"l", bgc:["#79BE80","#31AB3B","#009E10","#008F0B"], bgd:[0.00,0.49,0.50,1.00]}, 
			{bg:"ld", bgc:["#84C185","#369946"], bgd:[0.00,1.00]},
			{bg:"lrl", bgc:["#3E91A3","#49A9B9"], bgd:[0.00,1.00]}, 
			{bg:"lrl", bgc:["#277EDF","#3691EC"], bgd:[0.00,1.00]},
			{bg:"r", bgc:["#0298DB","#065A9D"], bgd:[0.00,1.00]},
			
			{bg:"l", bgc:["rgb(116,153,232)","rgb(54,110,223)","rgb(34,96,221)","rgb(35,98,221)"], bgd:[0.00,0.49,0.50,1.00]}, 
			{bg:"l", bgc:["rgb(130,158,188)","rgb(90,125,166)","rgb(70,103,151)","rgb(71,104,153)"], bgd:[0.00,0.49,0.50,1.00]}, 
			{bg:"r", bgc:["#9CBDD3","#657E8F"], bgd:[0.00,1.00]},
			{bg:"ld", bgc:["#6D90B3","#306393","#12477F"], bgd:[0.00,0.50,1.00]},
			{bg:"lrl", bgc:["#6031B1","#6F3CBD"], bgd:[0.00,1.00]}];
			
		for(var j = 0; j < gradient.length; j++)
		{
			var color2 = JSON.stringify(widgetGradient[j]);
			var data = {color: '-webkit-' + gradient[j], color3: '-moz-' + gradient[j], color2: color2, size: 36};
			markup = markup.add($("#tmplSwatchBox").tmpl(data));
		}	
		
		markup.appendTo($("#gradientColorPicker"));	
	},
	
	removeInputFocus : function(){
		$("#colorHexValue").blur(); //remove any focus events
		propInspector.masterElements.find(".numberInput").blur();
	},

	lastAction : false,
	menuButtonActions : {
			menuExpander : {to : 'showShapeInspector', alsoFrom : ['showGradientGallery','showBorder','showFlatColor','showColorStopEditor','showAdvancedGradientEditor','showBackground'], from : 'hideInspectors'},
			textMenuExpander : {to : 'showTextInspector', from : 'hideInspectors'},
			shapeBackground : {to : 'showBackground', alsoFrom : ['showGradientGallery','showFlatColor','showColorStopEditor','showAdvancedGradientEditor'], from : 'showShapeInspector'},
			shapeBorder : {to : 'showBorder', from : 'showShapeInspector'},
			textColor : {to : 'showTextColor', from : 'showTextInspector'},
			cgpButton : {to : 'showGradientGallery', alsoFrom : ['showAdvancedGradientEditor'], from : 'showFlatColor'},
			swatchEdit : {to : 'showAdvancedGradientEditor'},
			backButton : {to : 'showGradientGallery', alsoFrom : ['showColorStopEditor'],  from : 'showAdvancedGradientEditor'}, // REVISE
			captionBackground : {to : 'showShapeInspector'},
			captionBorder : {to : 'showShapeInspector'},
			colorStopButton : {to : 'showColorStopEditor'}},
			
	toggle : function(e, colorStopButton) // , autoChange
	{	
		if(e) {
			var clickedEl = (e.target.id) ? e.target.id : $(e.target).parent().attr("id");
		}
		else {
			var clickedEl = colorStopButton;
		}
		
		if(!propInspector.menuButtonActions[clickedEl]) {
			return;
		}

		var alsoFromIndex = $.inArray(propInspector.lastAction,propInspector.menuButtonActions[clickedEl].alsoFrom);
		var action = propInspector.menuButtonActions[clickedEl].to; //default
		
		if((action == propInspector.lastAction || alsoFromIndex > -1) && propInspector.menuButtonActions[clickedEl].from) 
		{
			action = propInspector.menuButtonActions[clickedEl].from;
		}
		propInspector.showCorrectScreen(action);
		contextMenu.removeOtherCmMenus(["staticWidgets"]);
	},
	
	showCorrectScreen : function(action){
		propInspector.lastAction = action;
		propInspector.hidablePropertyInspector.hide(); //hide everything, then show everything else in a function
		(propInspector[action])();
		propInspector.position();
		propInspector.removeInputFocus();
	},
		
		resetPropInspector : function(){
			propInspector.lastAction = 'hideInspectors';
			propInspector.removeInputFocus(); //safeguards
		},
		
		hideInspectors : function (){
			propInspector.masterElements.hide();
			propInspector.hidablePropertyInspector.hide();
		},
		
		showTextColor : function (){
			propInspector.masterElements.show();
			propInspector.textColorPicker.show();
			$('#textColor').addClass('pickerOpen');
			colorPicker.getTextColor();
		},
		
		showBorder : function (){
			propInspector.masterElements.show();
			propInspector.removePickerHighlight();
			$('#shapeBorder').addClass('pickerOpen');
			propInspector.borderColor.show();
			propInspectorCtrl.updateBackgroundBorderInfo();
			colorPicker.getBorderColor();
		},
		
		showBackground : function (){
			propInspector.masterElements.show();
			propInspector.removePickerHighlight();
			$('#shapeBackground').addClass('pickerOpen');
			var backgroundTypeAction = propInspectorCtrl.filterBackgroundTypes();
			propInspector.showCorrectScreen(backgroundTypeAction);
		},
		
		showFlatColor : function (){
			propInspector.flatColorView.show();
			$("#cgpButton").text("Gradient");
			//maybe get widget object here and pass it to those functions?
			propInspectorCtrl.updateBackgroundBorderInfo();
			colorPicker.getColorBackground();
		},
		
		showGradientGallery : function (){
			propInspector.gradientGallery.show();
			$("#cgpButton").text("Color");
			propInspectorCtrl.updateBackgroundBorderInfo();
		},
		
		showAdvancedGradientEditor : function (){
			propInspector.advancedGradientEditor.show();
			colorPicker.populateAdvancedGradient();
		},
		
		showColorStopEditor : function (){
			propInspector.colorStopEditor.show();
			colorPicker.setColorStops();
		},
		
		showShapeInspector : function(){		
			propInspector.removePickerHighlight();
			propInspector.masterElements.show();
			propInspector.shapeProps.show();
			propInspectorCtrl.updateShapeProps();
			var excludeBorderBlanking = true;
			propInspectorCtrl.updateBackgroundBorderInfo(excludeBorderBlanking);
		},
		
		showTextInspector : function (){		
			propInspector.removePickerHighlight();
			propInspector.masterElements.show();
			propInspector.textProps.show();
			propInspectorCtrl.updateTextProps();
		},
		
		removePickerHighlight : function(){
			$('#textColor, #shapeBorder, #shapeBackground').removeClass('pickerOpen');
		},
		
	position : function(){
		var masterElContainer = $("#propInspectors");
		var cmCoords = $('#propertyInspectorBtn, #propertyInspectorBtn2').not(":hidden").position(); // one or the other will do.
		if(cmCoords && cmCoords.left) masterElContainer.css({top: 45, left:cmCoords.left-168});	
	},
	
	update : function(sel) // only if visible - called from widget resize and others.
	{
		propInspectorCtrl.saveSelection(); // important function here - this gets selection
		var sel = sel || propInspectorCtrl.currentSelection;
		if(propInspector.lastAction == 'hideInspectors' || sel.length == 0) 
		{ 
			return; 
		}
	
		var actionsList = propInspectorCtrl.filterTextOrShape();
		if(!actionsList) {
			return; //maybe hide everything as well
		}
		else
		{
			var clickedStateHistoryMatch = $.inArray(propInspector.lastAction,actionsList.showDefaults);
			if(clickedStateHistoryMatch > -1){
				var newAction = actionsList.showDefaults[clickedStateHistoryMatch];
			}
			else{
				var newAction = actionsList.showDefaults[0];
			}
			
			var colorPickerHistory = ['showGradientGallery','showFlatColor','showBackground','showAdvancedGradientEditor','showColorStopEditor','showTextColor','showBorder'];
			var colorPickerHistoryCheck = $.inArray(propInspector.lastAction,colorPickerHistory);
			if(colorPickerHistoryCheck > -1) {
				if(actionsList.showColorPicker == false){
					var newAction = actionsList.showDefaults[0];
				}
				else {
					var colorPickerItem = colorPickerHistory[colorPickerHistoryCheck];
					var colorPickerItemCheck = $.inArray(colorPickerItem,actionsList.showColorPicker);
					if(colorPickerItemCheck > -1){
						var newAction = actionsList.showColorPicker[colorPickerItemCheck];
					}
					else{
						var newAction = actionsList.showColorPicker[0];
					}
				}
			}
		}
		propInspector.showCorrectScreen(newAction);
	}
};

/* All the actions that can be performed on the context menu */


// Contains all the actions that the  can do - actions on widgets.
var contextMenu = 
{
    buttonCollapsedSize : 32,
    buttonExpandedSize: 68,

	dragStart : function()
	{
		$("#contextMenuItems").toggleClass("locked").data("preventClick", true); 
		//propInspector.hide();
	},

	dragStop : function()
	{
		setTimeout(function()
		{
			$("#contextMenuItems").data("preventClick", false);
		},1);
	},
	
	linkClickDragStart : function(e)
	{
		var lastClick = $("#cmLink").data("lastClicked") || 0;
	
		if( (new Date()).getTime() > lastClick + 600 ) // ignore double clicks 
		{
			$("#cmLink2").simulate("mousedown").simulate("mousemove", {
				clientX : e.clientX,
				clientY : e.clientY
			});
		}

		$("#cmLink").data("lastClicked", (new Date()).getTime());
		return false; 
	},

	// replace widget with another placeholder. 
	toggleReplace : function()
	{
	
	
	},
		
	place : function(action)
	{
		var s = $("#canvasPages .ui-selected");
		
		if( action == 'hide' || s.length == 0) //tidy me up - toggle?
		{
			contextMenu.hide();
			return true;
		}

		if( $("#contextMenuItems").data("open") !== false ){		
			contextMenu.open(); // draw the right widgets.
		}

		if($("#contextMenuItems").hasClass("locked") || action == "dontMovePosition")
		{
			var baseOffsetLeft = parseFloat($("#contextMenu2").css("left"));
			var baseOffsetTop = parseFloat($("#contextMenu2").css("top"));
			var posLeft = parseFloat($("#contextMenuItems").css("left")) + baseOffsetLeft;
			var posTop = parseFloat($("#contextMenuItems").css("top")) + baseOffsetTop;
			var viewportTLWH = utils.getTLWH("#viewport");

			// if its outside the bounds of the page, we need to move it in again. 
			if(posLeft < viewportTLWH.width-100 && posTop < viewportTLWH.height-100) // 40 should be the width of the cm .main!
			{
				$("#contextMenu2").show();
				return true;			
			}
		}
        
        var cmCoords = contextMenu.getCmCoords(s);

		$("#contextMenu2")
			.show()
			.find("#contextMenuItems")
			.addClass("trans150")
			.css({top: cmCoords.top, left: cmCoords.left});
		
		function afterPosition()
        {
            $("#contextMenuItems").removeClass("trans150");
            propInspector.position();
			staticWidgets.positionMenu();
            page.displayMenu(false);
        }
			
		setTimeout(afterPosition, 160);
        //setTimeout(function(){$("#contextMenuItems").removeClass("trans150");propInspector.position();}, 160);
	},

    getCmCoords: function($selected) {
        var sel = widget.getRoots($selected);
        var bounding = utils.getBoundingArea(sel);
        var left, top, $lib = $('#library');

        left = bounding.left + 170;
        top = bounding.top - 47;

        //if widget is close to top edge of the screen
        if(bounding.top < 90) {
            top = 60;
            //if there is enough place to draw cm under the widget
            if(bounding.bottom < $('#viewport').height()/2) {
                top = bounding.bottom + 70;
            }
        }

        //if widget is close to left edge of the screen
        if(bounding.left < 400) {
            left = 550;
        }

        //if the library is visible, move cm to the right
        if(parseInt($lib.css('left')) === 0) {
            left = $lib.width() + 550;
        }

        return {
            left: left,
            top: top
        };
    },

	hide : function()
	{
	    
		$("#contextMenu2").hide();
		propInspector.hideInspectors();
	
        page.displayMenu();
    },

	open : function()
	{
        function countMultiSegments(roots)
		{
			var segmentCount = 0;
			roots.each(function()
			{
				var widgId = $(this).attr("id");
				var widgObj = widget.get(widgId);
				if(widgObj.seg || widgObj.segment)
				{
					segmentCount += 1;
				}
			});
			return segmentCount;
		}
		
		page.displayMenu(false);
		var roots = widget.getRoots("#canvasPages .ui-selected");
		var numSelected = roots.length;

		var dMargin = 3;
        //var dStep = 40;
		var distance = {up: -41, left: -44, down: 0, right: 47};

		$(".subExpander").not(".open").css({"top" : ""}).hide(); // reset this back as its hidden at 0px.
		var $sel = $("#canvasPages .ui-selected");
		var multiSegNum = countMultiSegments(roots);
        //decide what CM items to draw for this widget selection
        var noTextIconWidth;
		var enableGroupBtns = group.enableGroupBtns(roots);
		$("#contextMenuItems .cm").hide().each(function () {
			$this = $(this);

			if(numSelected < 2 && $this.hasClass("multiSelectOnly")) {
				return true;
			}

			if(numSelected > 1 && $this.hasClass("singleWidgetOnly")) {
				return true;
			}

			if($this.hasClass("multiSelectOnly") && enableGroupBtns == 'ungroup') {
				return true;
			}


			//if($this.hasClass("widgGroupOnly") && widgGroup.groupThem == false){return true;}
			if($this.hasClass("widgGroupOnly")) // && group.isGroup($sel) == false
			{
				if(enableGroupBtns)
				{
					if(enableGroupBtns == false || enableGroupBtns == 'ungroup')
					{
						return true;
					}
				}
				else
				{
					return true;
				}
			}
			
			
			if($this.hasClass("widgUngroupOnly") && enableGroupBtns != 'ungroup')
			{
				return true;
			}
			
			if($this.hasClass("multiSegmentOnly") && multiSegNum > 1)
			{
				return true;
			}
			
			if($this.hasClass("multiSegmentOnly"))// && enableGroupBtns != 'ungroup')
			{
				if(enableGroupBtns && enableGroupBtns == 'ungroup')
				{
					return true;
				}
			}
			
			if($this.hasClass("multiSegmentOnly") && (!widget._isMultiSegment($sel.attr("id")) ) ) // || !$sel.hasClass("rootWidget")
			{
				return true; 
			}
			
			if($this.hasClass("zAlignOnly") && (!$sel.hasClass("rootWidget") || $sel.hasClass("backgroundWidget"))  )
			{
				return true; 
			}
			
			if($this.hasClass("replaceGroupOnly")) // replacing not finished yet.
			{
				return true; 
			}
		
			if($this.hasClass("duplicatableOnly") && $sel.hasClass("backgroundWidget") )
			{
				return true; 
			}
				
			var obj = widget.get($sel.attr("id")); 
			
			if(obj.tc && $this.hasClass("backgroundBorderOnly")){
				return true;
			}
			
			if( !obj.bgc && !obj.b && !obj.seg && !obj.upload && $this.hasClass("backgroundBorderOnly") )  // && (!obj.tc && $this.hasClass("textOnly"))
			{
				return true;
			}

			if ($this.hasClass("uploadOnly") && obj.upload !== 'y') {
				return true;
			}
			
			if(obj.st == 'b' && $this.hasClass("staticWidgetsOnly")){
				return true;
			}
			/*
			var widgetsInBounds = staticWidgets.getWidgetsInBounds($sel,roots);
			if(widgetsInBounds == false && $this.hasClass("staticWidgetsOnly")){
				return true;
			}
			*/
            if((!widget.containsText($sel)) && ($this.hasClass("textOnly")))
			{
				return true;
			}

			$this.show();

			var icon = $this.find(".icon2");
			var iconWidth;

			// performance hack: width() is slow
			if (icon.find('.buttonText').text() == '')
			{
				iconWidth = noTextIconWidth || (noTextIconWidth = icon.width());
			}
			else
			{
				iconWidth = icon.width();
			}

            var dStep = dMargin + iconWidth + 9;     //9 = 8 padding + 1 border
            var extraSpace = iconWidth - contextMenu.buttonCollapsedSize;

			if( $this.hasClass('up') )
			{
				$this.css({top: distance.up});
				distance.up -=dStep;
			}
			if($this.hasClass('left'))
			{
				$this.css({left: distance.left - extraSpace });
				distance.left -=dStep;
			}
			if($this.hasClass('down'))
			{
				$this.css({top: distance.down});
				distance.down +=dStep;
			}
			if($this.hasClass('right'))
			{
				$this.css({left: distance.right });
				distance.right +=dStep;	
			}	
		});
		$("#contextMenuItems").data("open", true);
		propInspector.update();        //page.displayMenu(false);
        staticWidgets.updateMenu();
		hint.show("link");

		var autoFitMenu = document.getElementById('cmAutofitButtons');

		if (roots[0]) {
			var first = storage.get(roots[0].id);

			if (first.upload === 'y') {
				var pageObj = storage.get(document.querySelector('.canvasObject.active').id),
					res = widgets.summary[first.data].wh,
					fitToPage = document.getElementById('cmFitToPage'),
					title;

				if (res[0] < pageObj.width &&
					res[1] < pageObj.height) {

					fitToPage.classList.add('expand');
					title = 'Expand to Fit';
				}
				else {
					fitToPage.classList.remove('expand');
					title = 'Shrink to Fit';
				}

				fitToPage.setAttribute('title', title);
				fitToPage.setAttribute('alt', title);
			}
		}

		/*
		if(project.get("hint") == "link") // must come after zoom is complete
		{
			hint.show("link");
		}	
		*/
	},
	
	close : function()
	{
		propInspector.resetPropInspector();
		propInspector.hideInspectors();
		$("#contextMenuItems div, #contextMenuItems a").not(".up, #hint").css({left:0, top:0}); // .fadeOut(300); //.hide(); // .hide()
		$("#contextMenuItems").data("open", false);
		$(".subExpander").removeClass("open");
		contextMenu.closeSubmenu( $(".subExpander") );
        contextMenu.resetButtonsToOriginal(true);
        page.displayMenu();
	},
	
	markAsLastClicked : function()
	{
		if($(this).hasClass("subExpander"))
		{
			$(this).siblings().not(".subExpander, .lastClicked").removeClass("lastClicked");
		}
		else
		{
			$(this).siblings().not(this).not(".subExpander").removeClass("lastClicked");
		}
		//$(this).siblings().not(".subExpander").removeClass("lastClicked");
		
		$(this).addClass("lastClicked");
	}, 
		
	toggleSubmenu : function()
	{
		contextMenu.eraseSubmenu(this); //close all submenus!
		
		if($(this).hasClass("open")) // close it. 
		{
			contextMenu.closeSubmenu(this);
		}
		else // open it
		{
			contextMenu.openSubmenu(this);
		}
		return false; // dont propagate. 
	},	
	
	openSubmenu : function(t)
	{
		$(t).addClass("open");
		var x = 0;
		$(t).parent().children().removeClass("hidden").each(function()
		{
			$(this).css("top", x);
			x+=40;
		});
		$(t).parent().css("height", x-29);
		$(t).siblings().show();
	},
	
	closeSubmenu : function(t)
	{
		var siblingElements = $(t).siblings();
		$(t).removeClass("open").css("top", "");
		siblingElements.css("top", 0);
		$(t).parent().css("height", ""); // thediv
		setTimeout(function(){
			siblingElements.not(".lastClicked").addClass("hidden");
		},250);
		//siblingElements.not(".lastClicked").addClass("hidden");
		//$(t).hide();
	},
	
	eraseSubmenu : function(t)
	{
		var allCmMenus = $(".cm").filter(".left");
		
		var childElements = $([]);
		allCmMenus.each(function(){
			var $el = $(this);
			
			var itemHeight = parseInt($el.css("height"));
			var defaultHeight = 44;
			if(itemHeight > defaultHeight)
			{
				var children = $el.children().not(t);
				childElements = childElements.add(children);
				$el.css({height : defaultHeight});
			}
		});
		
		childElements.each(function(){
			var $this = $(this);
			
			if($this.hasClass("subExpander"))
			{
				var siblingElements = $this.siblings();
				$this.removeClass("open").css("top", "");
				siblingElements.css("top", 0);
				$this.parent().not(".lastClicked").css("height", ""); // thediv
				//siblingElements.not(".lastClicked").addClass("hidden");
				setTimeout(function(){
					siblingElements.not(".lastClicked").addClass("hidden");
				},250);
				//siblingElements.not(".lastClicked").hide();
				//$this.hide();
			}
			//$t.not(".lastClicked").not(".subExpander").css("top", 0).addClass("hidden");
		});
	},
	
	// Open or close the context menu sub elements.	
	toggle : function(e)
	{
		if($("#contextMenuItems").data("preventClick") == true)
		{
			return false;
		}
		
		if( $("#contextMenuItems").data("open")  )
		{
			contextMenu.close();
			// clear property inspector for toggle here
		}
		else
		{
			contextMenu.open();
		}
		//return false;		let it bubble to cm root.
	},

	cmZAlign : function(e, dir)
	{
		fluid.command.create('setZOrder', {
			id: widget.getRoots(".ui-selected").map(function() { return $(this).attr('id'); }).get(),
			dir: dir
		}).dispatchTo('fluid.controllers.widget');
	},
	
	cmZAlign2 : function(e, rootWidgets, direction) // move to back or front or back 1 or front 1. TODO: Merge with cmAlign?
	{
		direction = direction || $(e.target).parent().attr("id"); // what was clicked.
		rootWidgets = rootWidgets || widget.getRoots(".ui-selected");
		var parent = null;
		
		// the root of every widget that has at least one selected. 
		rootWidgets.each(function() // TODO: move the calculate of the target point outside of the loop for more speed?
		{	
			obj = $(this);
			var childWidgets = $('[data-lockto="' + obj.attr("id") + '"]');
			parent = obj.parent(); 
		
			if(direction == "cmFront")
			{  
				childWidgets.detach().appendTo( parent ); 
			}
			else if(direction == "cmBack")
			{
				
				if(parent.find(".backgroundWidget").length > 0)
				{
					childWidgets.detach().insertAfter( parent.find(".backgroundWidget") ); 
				}
				else
				{
					var gridStatus = account.get("gridStatus");
					if(gridStatus == 'on')
					{
						childWidgets.detach().insertAfter('#gridSquares');
					}
					else if(gridStatus == 'off')
					{
						childWidgets.detach().prependTo( parent );
					}						
				}	
			}
			else if(direction == "cmFrontOne")
			{
				var next = obj.nextAll(".rootWidget").not(".ui-selected").first(); 
				if(next.length == 0)
				{
					return false; // end the action - maybe this needs to be true to test others? Should be in dom order though 
				}
				var insert = $('[data-lockto="' + next.attr("id") + '"]').last();
				childWidgets.detach().insertAfter(insert);
			}
			else if(direction == "cmBackOne")
			{
				//var prev = obj.prevAll(".rootWidget").not(".ui-selected").not("#canvasPages .backgroundWidget, #gridSquares").first(); 
				var prev = obj.prevAll(".rootWidget").not(".ui-selected").not("#canvasPages .backgroundWidget").first(); 
				if(prev.length == 0)
				{
					return false; // end the action - maybe this needs to be true to test others? Should be in dom order though 
				}
				var insert = $('[data-lockto="' + prev.attr("id") + '"]').first();
				childWidgets.detach().insertBefore(insert);
			}
		});
		
		if(parent != null) // weve moves at least one.
		{
			page.orderWidgets(parent); // use the order of the widgets on the page to update the order in storage.	
		}


		return false; //e.stopPropagation();
	},
	

	cmAlign : function(e, dir)
	{
		fluid.command.create('align', {
			id: widget.getRoots(".ui-selected").not(".backgroundWidget").map(function() { return $(this).attr('id'); }).get(),
			dir: dir
		}).dispatchTo('fluid.controllers.widget');
	},

	//TODO: BD - this function relies on DOM elements. Refactor it so that it only uses storage values
	cmAlign2 : function(e, rootWidgets, direction)
	{
		var direction = direction || $(e.target).parent().attr("id"); // delegated format.
		var rootWidgets = rootWidgets || widget.getRoots("#canvasPages .ui-selected").not(".backgroundWidget");
		var area = utils.getBoundingAreaRelative(rootWidgets);
		
		rootWidgets.each(function() // TODO: move the calculate of the target point outside of the loop for more speed?
		{	
			var leftMove = null, topMove = null;
			
			var t = $(this);
			var id = t.attr("id");
			var groupOffset = group.calculateAlign(id,t);
				
			switch(direction) // Calculate the move.
			{
				case "cmAlignLeft":
					leftMove = parseFloat(t.css("left")) - area.left - groupOffset.left; // the amount the root needs to move left.
					break;
			
				case "cmAlignCenter":
					leftMove = parseFloat(t.css("left")) + (parseFloat(t.outerWidth()))/2 - (area.left + area.right)/2;
					if(groupOffset.width > 0)
					{					
						leftMove = groupOffset.groupLeft + (groupOffset.width/2) - (area.right + area.left)/2;
						//leftMove = ((area.right - area.left) - (groupOffset.width))/2; //groupOffset.left + groupOffset.right;
					}
					break;	
			
				case "cmAlignRight":
					leftMove = parseFloat(t.css("left")) + t.outerWidth() - area.right + groupOffset.right ;
					break;
	
				case "cmAlignTop":
					topMove = parseFloat(t.css("top")) - area.top - groupOffset.top;
					break;
					
				case "cmAlignMiddle":
					topMove = parseFloat(t.css("top")) + (parseFloat(t.outerHeight()))/2 - (area.bottom + area.top)/2;
					if(groupOffset.height > 0)
					{					
						topMove = groupOffset.groupTop + (groupOffset.height/2) - (area.top + area.bottom)/2;
						//topMove = 0;	
					}
					break;

				case "cmAlignBottom":
					topMove = parseFloat(t.css("top")) + t.outerHeight() - area.bottom  + groupOffset.top ;
					break;

				default:
					return false;
			}
			
			if(leftMove === 0 && topMove === 0) // move amount is 0 optimisation - dont do anything.
			{
				return true;
			}
			
			// execute the move.
			var movers = $('[data-lockto="' + $(this).attr("id") + '"]');
			var wObj = widget.get($(this).attr("id"));
			
			movers.each(function() // move each one left that amount.
			{
				
				var id = $(this).attr("id");
				var wObj = widget.get(id);
				var tlwh = $.extend([], wObj.tlwh); 
				// if ths widget is in a group, get the parent group's tlwh
				
				if(leftMove != null) // move this out?
				{
					var left = parseFloat($(this).css("left")) - leftMove;
					$(this).addClass("trans150").css("left", left);	
					if(tlwh[1].toString().indexOf("%") == -1 && $(this).attr("id") ==  $(this).attr("data-lockto"))
					{
						tlwh[1] = left;
						widget.set({tlwh :tlwh}, $(this).attr("id") ); // this gets called a lot for multi part!
					}
				}
			
				if(topMove != null) // move this out?
				{
					var top = parseFloat($(this).css("top")) - topMove;
					$(this).addClass("trans150").css("top", top);
					if(tlwh[0].toString().indexOf("%") == -1 &&  $(this).attr("id") ==  $(this).attr("data-lockto"))
					{
						tlwh[0]= top;					
						widget.set({tlwh :tlwh}, $(this).attr("id") );
					}
					
				}
			});	
		});
		
		setTimeout(
			function(r)
			{
				$(".trans150").removeClass("trans150");
				contextMenu.changeSelSize(rootWidgets);
			}, 160);
		return false; 
    },
	changeSelSize : function(rootWidgets)
	{
		var selection = propInspectorCtrl.currentSelection;
		//var rootWidgets = widget.getRoots("#canvasPages .ui-selected").not(".backgroundWidget");
		var rootWidgets = rootWidgets || widget.getRoots(selection).not(".backgroundWidget");
		var area = utils.getBoundingAreaRelative(rootWidgets); //recalculate area
		updateTLWH(area);
		widget.addResizeSettings();
	},
    setButtonStyle : function(button, original, animation)
    {
		//States
        //0: Original
        //1: Alternative
        var state = original ? 0 : 1;
        var animate = animation == undefined ? true : animation;

        var cmContainer = $(button).hasClass("cm") ? $(button) : $(button).parent();
        var icon = $(button).hasClass("icon2") ? $(button) : $(button).children("a");
        var textEl = $(".buttonText", icon);
        //Collapsing
        if (state == 0)
        {
            if (icon.hasClass("cmButtonExpanded"))
            {
                contextMenu.resetButtonsToOriginal(false, cmContainer);
                contextMenu.adjustButtonsPosition(cmContainer, false, false);
            }
        }
        else
        {
            if (!icon.hasClass("cmButtonExpanded"))
            {
                contextMenu.adjustButtonsPosition(cmContainer, true, animate);
                icon.addClass("cmButtonExpanded");
                var label = icon.attr("data-text-alt");
                if (animate)
                {
                    function animateExpanding()
                    {
                        textEl.text(label);
                        icon.animate(
                            { width: contextMenu.buttonExpandedSize + "px" },
                            500, 'swing'
                        );
                    }

                    icon.css({ width: contextMenu.buttonCollapsedSize + "px"});
                    setTimeout(animateExpanding, 500);
                }
                else
                {
                    icon.css({ width: contextMenu.buttonExpandedSize + "px"});
                    textEl.text(label);
                }
            }
        }
    },

    resetButtonsToOriginal : function(reposition, buttons)
    {
        var elements = buttons == undefined ? $(".cm") : buttons;
        if (reposition)
        {
            elements.css({ left: "0px" });
        }
        $.each(elements, function(i, button)
        {
            var icon = $(button).children("a");
            $(".buttonText", icon).text("");
            icon.css({ width: contextMenu.buttonCollapsedSize + "px"}).removeClass("cmButtonExpanded");
        });
    },

    adjustButtonsPosition : function(buttonBase, expanding, animate)
    {
        if (buttonBase == null)
        {
            contextMenu.open();
            return;
        }

        var factor = contextMenu.buttonExpandedSize - contextMenu.buttonCollapsedSize;
        var button = $(buttonBase);
        var direction = button.hasClass("left") ? "left" : "right";
        var toAdjust = $(".cm." + direction);
        var valueToAdjust = expanding ? factor : factor;
        var baseLeft = parseInt($(button).css("left"));
        baseLeft = direction == "left" ? baseLeft : baseLeft + 1;   //When adjusting to the left, include the button Base
        $.each(toAdjust, function(i, el)
        {
            var currentLeft = parseInt($(el).css("left"));
            if ((currentLeft != 0) && (Math.abs(currentLeft) >= Math.abs(baseLeft)))
            {
                var factor = direction == "left" ? -1 : 1;
                var toLeft = currentLeft + (valueToAdjust * factor);
                if (animate)
                {
                    $(el).animate(
                        { left: toLeft + "px" },
                        1000, 'swing'
                    );
                }
                else
                {
                    $(el).css({ left: toLeft + "px" });
                }
            }
        });
    },
	
	removeOtherCmMenus : function(removeMenus) {
		for(var i=0;i<removeMenus.length;i++){
			if(removeMenus[i]){
				switch(removeMenus[i]){
					case "staticWidgets" : staticWidgets.hideMenu(); break;
					case "propertyInspector" : 
						propInspector.hideInspectors();
						propInspector.resetPropInspector();
					break;
				}
			}
		}
	}

};








var canvas2 = 
{
	mousewheel : function (e, delta)
	{
		if($("#canvas").data('zooming')) return; // ignore if its already zooming - prevent loss of page frame.

		if(delta < 0) // out
		{
            //If zoomed in and no widget dragging in process
			if((project.get("currentZoom") == 1) && (widget._dragSelection == null))
			{
				canvas2.zoom({newZoom: 'auto', centerY: e.pageY, centerX: e.pageX});
			}
			return false;
		}

        // Scroll in over page zooms in.
        var zoom = project.get("currentZoom");
        if (zoom != 1)
        {
            var pid = getHoverPage(e);
            if (pid != "")
            {
                $("#" + pid).trigger("click");
            }
        }
		

		// Scroll in over page zooms in.
		/*var zoom = project.get("currentZoom");
		var p = page.atCanvasXY(e.pageX, e.pageY);
        if(zoom != 1 && p)
		{
			$(p).trigger("click");
		}*/
	},

	zoom : function(obj, callback)
	{
        //when zooming out, replace the detalied widgets with a previev canvas
        if(obj.newZoom === 'auto') {
            var $page = project.getActivePage();
            page.draw($page.attr('id'), 'init');
        }

		$("#canvasPages").zoom(obj, callback);
		
		//console.log("<<<<<<<<<<<<<< zooming out");console.trace();
		$(".linkMenu").hide();
		//group.erase();
	},

	zoomOut : function(e)
	{
		//console.log("zooming out");
		var center = utils.getCenterPoint("#viewport");
		canvas2.zoom({newZoom: 'auto', centerY: center.left, centerX: center.top});
	},
	
	setContainment : function()
	{
		//console.log("setting containment");
		var viewportTLWH = utils.getTLWH("#viewport");
		var canvasTLWH = utils.getTLWH("#canvas");
		var padding = 10;  // padding has to be factored into page offsets too.
		
		var containment = [viewportTLWH.left + viewportTLWH.width - canvasTLWH.width - padding, 	// bottom right bound (inverse)canvasTLWH.width
						  viewportTLWH.top + viewportTLWH.height - canvasTLWH.height - padding, 	//  - canvasTLWH.height
						  viewportTLWH.left + padding,		//top left bound + viewportTLWH.width
						  viewportTLWH.top + padding];		//top left bound + viewportTLWH.height
		return containment;
	},

	setScreenContainment : function() // account for page width/height - prevents scrolling of window.
	{
		var $sel = $("#canvasPages .screen");

		if($sel.length == 0) { return; }

		var canvasTLWH = utils.getTLWH("#canvas");	// not zoomed
		var zoom = project.get("currentZoom");

		$sel.each(function() {
			canvas2.setPageContainment(this, canvasTLWH, zoom);
		});
	},

    setPageContainment : function(page, canvasTLWH, zoom)
    {
        if (!$(page).data("initDraggable")) { return; }

        canvasTLWH = canvasTLWH || utils.getTLWH("#canvas");
        zoom = zoom || project.get("currentZoom");

        var pageTLWH = utils.getTLWH(page); // is potentially zoomed.
        var containment = [ canvasTLWH.left,
            canvasTLWH.top,
            canvasTLWH.left + Math.floor( (canvasTLWH.width) ) - (pageTLWH.width*zoom),
            canvasTLWH.top + Math.floor( (canvasTLWH.height) ) - (pageTLWH.height*zoom) ];
        $(page).draggable("option", "containment", containment);
    },
	
	dragStart : function(e)
	{
		if($("#canvas").data('zooming')) return false; // prevent drag when zooming

		contextMenu.place("hide");
		
		var zoom = project.get("currentZoom");
		if(zoom == 1) {
			$("#canvasLinks").hide();
		}

       var canvasEl = document.getElementById('canvas');

       canvasEl.style.cursor = '-webkit-grabbing';
       canvasEl.style.cursor = '-moz-grabbing';
       canvasEl.style.cursor = 'grabbing';
	},

    //drag : function(e){},

    updatePages: function(callback) {
        //canvas2.renderFromScratch = true;

        /*if(canvas2.pagesRendered) {
            //console.log('skipped page update');
            return;
        }

        canvas2.startTime = new Date().getTime();
        var pages = project.get('pages');

        if(canvas2.renderFromScratch) {
            for(var i=0; i<pages.length; i++) {
                page.draw(pages[i], 'init');
            }
        } else {
                dbStorage.get('rastPages', pages, function(pagesData) {
                    for(var i=0; i<pagesData.length; i++) {
                        if(pagesData[i] && pagesData[i].data) {
                            //console.log('got : ', arguments);
                            var pageObj = page.calculateWdgPositions(pagesData[i].id);
                            page.template(pageObj, pagesData[i].id, 'init');
                            var $page = $('#'+pagesData[i].id);
                            var $wdgHolder = $page.find(".widgetHolder");
                            $wdgHolder.append('<img class="page-preview" src="'+pagesData[i].data+'"/>');
                            //console.log('page done: ', $page, pageData);

                        }
                    }
                    //console.log('fetched page: ', pageData);
                    console.log('load time: ', new Date().getTime() - canvas2.startTime);
                });

//            for(var i=0; i<pages.length; i++) {
//                dbStorage.get('rastPages', pages[i], function(pageData) {
//                    //console.log('fetched page: ', pageData);
//                    if(pageData && pageData.data) {
//                        //console.log('got : ', arguments);
//                        var pageObj = page.calculateWdgPositions(pageData.id);
//                        page.template(pageObj, pageData.id, 'init');
//                        var $page = $('#'+pageData.id);
//                        var $wdgHolder = $page.find(".widgetHolder");
//                        $wdgHolder.append('<img class="page-preview" src="'+pageData.data+'"/>');
//                        //console.log('page done: ', $page, pageData);
//                        console.log('load time: ', new Date().getTime() - canvas2.startTime);
//                    }
//                });
//            }

        }

        canvas2.pagesRendered = true;
        console.log('pages rendered: ', pages.length, new Date().getTime() - canvas2.startTime );

        return;*/

        /////////

        //console.log('update pages: ');
        var $pagesInDom = $('.screen');
        var pagesInViewport = project.getPagesInViewport();

        var $pagesToRemove = $pagesInDom.filter(function() {
            if( pagesInViewport.indexOf($(this).attr('id')) !== -1 ) return false;
            else return true;
        });

        var $page;

		//console.log('pages in viewport: ', pagesInViewport);
        requestAnimationFrame( function() {
            for(var i=0; i<pagesInViewport.length; i++) {
                $page = $pagesInDom.filter('#'+pagesInViewport[i]);
                if( $page.length === 0 ) {
                    page.draw(pagesInViewport[i], 'useCache');
                } else if(!$page.is(':visible')) {
                    $page.show();
                }
                //console.log('updatePage finished...');
            }
			if(callback) {
				callback();
			}
            //console.log('whole rendering finished: ', new Date().getTime() - project.startTime);
            $pagesToRemove.hide();
        });
		//console.log('!! pages updated: ', new Date().getTime() - project.openStartTime );
    },

    updateLinks: function() {
        //var start = new Date().getTime();
        var $linksInDom = $('.link');
        var linksInViewport = project.getLinksInViewport();

        var $linksToRemove = $linksInDom.filter(function() {
            if( linksInViewport.linkCanvId.indexOf($(this).attr('id')) !== -1 ) return false;
            else return true;
        });

        var $link;

        requestAnimationFrame( function() {

            var links = project.get('links');
            var tmpLink = tmpLink = {
                linkCanvId: [],
                linkDest: [],
                linkOrigin: [],
                linkType: [],
                transType: [],
                triggerType: []
            };

//            console.log('links in viewport', linksInViewport);
            for(var i=0; i<linksInViewport.linkCanvId.length; i++) {
                $link = $linksInDom.filter('#'+linksInViewport.linkCanvId[i]);
                if( $link.length === 0 ) {
                    tmpLink.linkCanvId.push(linksInViewport.linkCanvId[i]);
                    tmpLink.linkDest.push(linksInViewport.linkDest[i]);
                    tmpLink.linkOrigin.push(linksInViewport.linkOrigin[i]);
                    tmpLink.linkType.push(linksInViewport.linkType[i]);
                    tmpLink.transType.push(linksInViewport.transType[i]);
                    tmpLink.triggerType.push(linksInViewport.triggerType[i]);
                } else if(!$link.is(':visible')) {
                    $link.show();
                }
            }

            link.load(tmpLink);
            link.drawSome(linksInViewport);

            $linksToRemove.hide();
        });
		//console.log('update links done : ', new Date().getTime() - project.startTime);

    },

	drag : function(e){
        canvas2.updatePages();
    },

	dragStop : function(e) {
		var zoom = project.get("currentZoom");
		if(zoom != 1) {	// at zoomed in, we dont update the position so we can zoom back to the original position.
            project.set({canvasPosY: -parseInt($("#viewport").get(0).scrollTop), canvasPosX: -parseInt($("#viewport").get(0).scrollLeft)});
		}
		canvas2.setScreenContainment();
		$("#canvasLinks").fadeIn(200);

        canvas2.updatePages();
        canvas2.updateLinks();

		contextMenu.place();

       document.getElementById('canvas').style.cursor = '';
	},

    isZoomedOut : function()
    {
        return $("#canvas").hasClass("zoomedOut");
    },

    isEditorVisible : function()
    {
        return $("#canvas").hasClass("editing");
    },

    setEditorVisibility : function(visible)
    {
        if (visible)
        {
            $("#canvas").addClass("editing");
            fluidMenu.setCanvasFirstPage();
			fluid.controllers.bin.show();
			grid.selectBackground();
        }
        else
        {
            $("#canvas").removeClass("editing");
            fluid.controllers.bin.hide();
        }
    }
};
var account =
{
	syncPending : {},
	lastActivity : new Date().getTime(),
	//safetyInterval : 300000,  //5 minutes.  The safety interval determines if the account should be refreshed
	safetyInterval : 60000,  //1 minute.  The safety interval determines if the account should be refreshed from server
	//safetyInterval : 5000,     //5 sec.  Test value
	loadingTimeout: null,

	// predefined alerts
	alerts : {
		projectLimitHit: {
			onAddActive : $('#tmplAlertProjectLimit_OnAddActive').tmpl({}),
			onDropToInactive : $('#tmplAlertProjectLimit_OnDropToInactive').tmpl({}),
			onOpenInactive : $('#tmplAlertProjectLimit_OnOpenInactive').tmpl({}),
			onScreensNonLite : $('#tmplAlertScreensNonLite').tmpl({}),
			onExportNonStandard : $('#tmplAlertExportNonStandard').tmpl({}),
			onFeaturePremium : $('#tmplAlertFeaturePremium').tmpl({}),
			onFeatureStandard : $('#tmplAlertFeatureStandard').tmpl({})
		},
		pageLimitHit: {
			onAddActive : $('#tmplAlertPageLimit_OnAddActive').tmpl({}),
			onNonSignedIn : $('#tmplAlertPageLimit_OnNonSignedIn').tmpl({})
		},
		uploadLimitHit: {
			onNonSignedIn: $('#tmplAlertUploadNonSignedIn').tmpl({})
		},
		projectAction: {
			onDelete : $('#tmplProjectAction_OnDelete').tmpl({})
		}
	},
	
	checkIntegrity : function()
	{
		// check the user exists and has data:
		var lastUser = account.get("id");
		var userData = storage.get(lastUser);
		if(!userData)
		{
			//console.log("Unable to find user"); 
			return;
		}
		//console.log("User:", lastUser); 
		
		if(account.get("loggedIn") == null)
		{
			//console.log("Logged in is:", account.get("loggedIn"));
			var logStatus = (account.get("accType") == "New") ? "no" : "yes";
			account.set({loggedIn : logStatus});
		}
		
		//console.log("Logged in is:", account.get("loggedIn"));
		// check there is at least one project.
		
		//check the default project is 
		var lastOpenProject = userData.lastOpenProject;
		var projectList = userData.projectIds;
		if(!projectList || projectList.length == 0)
		{
			return;
		}
		if( $.inArray(lastOpenProject, projectList) == -1 )
		{
			account.set({lastOpenProject : projectList[0]});
		}
		
		// premium account settings:
		if(!account.get("maxActiveProjects")) account.set({maxActiveProjects : 1});
		if(!account.get("maxPages")) account.set({maxPages : 10});
		if(!account.get("upgradeDate")) account.set({upgradeDate : "0000-00-00 00:00:00"});
		if(!account.get("lastPaymentDate")) account.set({lastPaymentDate : "0000-00-00 00:00:00"});
		if(!account.get("nextPaymentDate")) account.set({nextPaymentDate : "0000-00-00 00:00:00"});
		if(!account.get("lastPaymentResult")) account.set({lastPaymentResult : "s"});
		
		if(!account.get("gridStatus")) account.set({gridStatus : 'off'});
		if(!account.get("gridSpacing")) account.set({gridSpacing : 10});
		if(!account.get("snapToWidget")) account.set({snapToWidget : 'on'});		
		
	},
	
	get : function(item) // if logged out, will return from the last
	{
		var accs = storage.get("accounts");
		if(!accs)
		{
			if(!localStorage) // cutycapt returning something
			{
				return null;
			}
		
			//throw ("No get account object for " + item + "Caller: " + arguments.callee.caller + " Second level:" + arguments.callee.caller.caller + "loadSate" + loading_Stage_Check); // gracefully handle - seems to happen in preview.
		}
		var acc = storage.get("accounts");
		if(!acc) return null;
		var accId = acc.last;

		if(item == "currentUserId" || item == "id") return accId;
	
		var acc = storage.get(accId);
		if(acc == null || acc[item] == null) return null;
		
		return acc[item];
	},

	set : function (obj) 
	{
		var userId = account.get("currentUserId");
		var acc = storage.get(userId);
		if(acc == null)
		{
			throw ("No set account object for " + obj + "Caller:" + arguments.callee.caller + " Second level:" + arguments.callee.caller.caller + "loadSate" + loading_Stage_Check); // gracefully handle - seems to happen in preview.
		}
		for (var o in obj)	// if its an object, update them all? 
		{
			acc[o] = obj[o];
		}
		storage.set(userId, acc);
	},
	
	changeAccountId : function(from, to) // handle a low risk id clash when creating a user. 
	{
		var accountObj = storage.get("accounts");
		var acc = storage.get(from);	
		accountObj.user[0].id = to;
		
		if(accountObj.last == from)
		{
			accountObj.last = to;
		}
		
		storage.set("accounts", accountObj);
		storage.set(to, acc);
		storage.remove(from);
	},
	
	// run when the user first visits the site.
	setup : function()
	{
		var acc = {last: null, user: []};
		storage.set("accounts", acc);
	},
	
	createUser : function (details) // if details is passsed, it will set it to that id for logging in users.
	{
		//console.log("Creating user in account", details);
		var accountTemplate = {
			email: "New", 
			accType : 'New',
			name : '',
			recurrance : 'never',
			libraryWidth : 423,
			loggedIn : 'no',
			
			maxActiveProjects: 1,
			maxPages: 10, 	
			
			projectIds : account.get('projectIds') || [],
			uploads : account.get('uploads') || [],
			lastOpenProject : account.get('lastOpenProject') || '',
			createDate: account.get('lastOpenProject') || new Date().getTime()
		}; // this will be set at project creation.

		if(arguments.length == 0) // new first time (not logged in) user
		{
			var id = utils.guid("u");
		}
		else // logging in an account. 
		{
			var id = details.accountId;
			accountTemplate.accName = details.accName;
			accountTemplate.accType = details.accType;
			accountTemplate.recurrance = details.recurrance;
			accountTemplate.email = details.email;
			accountTemplate.loggedIn = 'yes';
		}
	
		var user = {id: id};		
		var accounts = storage.get("accounts");
		if(accounts == null) 
		{
			return;
		}
		
		accounts.user.push(user); // 1. add user to accounts - TODO: copy array?
		accounts.last = id;
		storage.set("accounts", accounts);
		
		storage.set(id, accountTemplate); // save the new account.
		return id;
	},
	
	
	login : function(result)
	{
		//console.trace();
		//console.log("Logging in a user", result);
		var accs = storage.get("accounts");
		account.beforeLoginId = accs ? accs.last : null;

		if(result.a != "login" || result.r != "s")
		{
			account.drawSignup(result);
			return false;
		}

		$('body').addClass('signed-in');

		//if(account.get('projectIds').length != 1) return false; // non registered account cant have more than 1 project.
		account.createUser(result); // take the result of the json and send it to the account - it will be set up with those details.
		var acct2 = storage.get("accounts");
		if(acct2.user.length == 2 && acct2.user[0].id == account.beforeLoginId) // will this just delete any account?
		{
			acct2.user.splice(0,1); // delete the old user account if its just a free account.
			storage.set("accounts", acct2);
		}

		var currentProjectId = account.get('lastOpenProject');

		account.set({
			loggedIn: "yes",
			accName: result.accName,
			accType: result.accType,
			recurrance: result.recurrance,
			maxActiveProjects: result.maxActiveProjects,
			maxPages: result.maxPages,
			upgradeDate: result.upgradeDate,
			lastPaymentDate: result.lastPaymentDate,
			lastPaymentResult: result.lastPaymentResult,
			nextPaymentDate: result.nextPaymentDate,
			createDate: result.createDate
		});

		if (result.discount) {
			account.set({
				discount: {
					amount: result.discount,
					bundleMonths: result.bundleMonths,
					code: result.discountCode,
					accType: result.discountAccType,
					recurrance: result.discountRecurrance,
					endDate: result.discountEndDate,
					message: result.discountMessage
				}
			});
		} else {
			account.set({discount: null});
		}

		if (result.settings != "")
		{
			var settings = JSON.parse(result.settings);

			//if the project before signIn had some pages, set it as last open project for the signed in account
			if( project.get('pages').length !== 0 ) {
				settings.lastOpenProject = currentProjectId;
			}

			account.set(settings);
			if (settings["hint"] == "end")
			{
				hint.cleanup();
			}
		}

		account.draw(result); // take the account id rather than the result - more general?
		if (result.objects && result.objects.length > 0)
		{
			$("#msgLoadingAfterLogin").show();
		}
		setTimeout(function(){
			account.sync(result.objects, true, currentProjectId); // objects is the list of projects.
		}, 500);

		$("#previewSignup").hide();
		preview.displaySharePanel();
		preview.updateScrollbar();

		fluid.command.create('showButton').dispatchTo('fluid.controllers.timeline');

		//tracker.record("login", 10, "", e);
		tracker.record("login", 10, "", "");

		localStorage.setItem('intercomUserHash', result.intercomUserHash);

		fluid.main.fire('editor.afterLogin');
	},

	//syncs all project headers for the account and invokes upload sync on success
	sync : function(objects, unloaded, notLoggedInProjectId)
	{
		account.setLoadingStep(1);

		//console.log("Syncing account", objects);
		var syncObjects = [];
		var syncUploads = [];
		for (var idx = 0; idx < objects.length; idx++) //, objects = result.objects
		{
			var syncObj = objects[idx];
			var idPrefix = syncObj.id.substr(0, 1);
			switch (idPrefix)
			{
				case 'p': syncObjects.push(syncObj.id); break;
				case 'i': syncUploads.push(syncObj.id); break;
			}
		}

		//console.log("Sync Down.  Projects: " + syncObjects.length + ". Uploads: " + syncUploads.length);
		
		if (syncObjects.length > 0)
		{
			var attempt = 1;

			function syncDownErrorCallback() {

				//allow 3 attempts to sync project headers
				if(attempt < 3) {
					attempt++;
					ajax.syncDown(syncObjects, unloaded, syncDownCallback, syncDownErrorCallback);

				//if failed for 3 times restore previous account/project and refresh providing a message
				} else {

					//restore the account to before login state (free account with a project)
					var accs = storage.get('accounts');
					accs.last = account.beforeLoginId;
					storage.set('accounts', accs);

					//refreshes the page and sets the info message
					localStorage.setItem("postloadMessage", "loginSyncFailed");
					location.reload();

				}
			}

			function syncDownCallback(respData, textStatus, jqXHR)
			{
				var parsedResponse = JSON.parse(respData);
				//if server returned falsy data, retry sync
				if(parsedResponse.r !== 's') {
					syncDownErrorCallback();
					return;
				}
				// for users from older version of fluidui
				// we need to update their uploads to have groups array
				var uploadsToUpdate = {};
				var uploadsCache;

				var syncData = parsedResponse.t; // jqXHR.response does not work on iOS mobile.

				if (!$.isArray(syncData))
				{
					syncData = [syncData];
				}

				var projectCount = 0;
				//var uploadCount = 0;
				//var allUploads = {};

				//save all project headers to persitent storage
				for (var idx = 0; idx < syncData.length; idx++)
				{
					try
					{
						var items = JSON.parse(syncData[idx]); // TODO: simplify this so it doesnt need a double parse.
					}
					catch(e)
					{
						//console.log("Cant save object - too big to transfer", syncData[idx]);
						continue;
					}

					if (typeof items.uploads != 'undefined')
					{
						uploadsCache = jQuery.extend(true, {}, items.uploads);
						delete items.uploads;
					} else {
						uploadsCache = false;
					}

					for(var itemId in items)
					{
						var item = items[itemId];
						var itemIdPrefix = itemId.substr(0, 1);
						switch(itemIdPrefix)
						{
							case 'p': //dave - reduced to one leading character
								account.addProjectId(itemId);
								//account.addProjectNumber();
								projectCount++;
								break;
						}
						storage.set(itemId, item, false);
					}
					if (itemId && typeof uploadsCache === 'object') {
						// cache uploads for further use
						for (var uploadId in uploadsCache) {
							if (uploadsCache.hasOwnProperty(uploadId)) {
								uploadsToUpdate[uploadId] = uploadsToUpdate[uploadId] || [];
								uploadsToUpdate[uploadId].push(itemId);
							}
						}
					}
				}

				if (projectCount > 0)
				{
					if (project.isEmpty())
					{
						var lastOpenProject = account.get('lastOpenProject');

						project.sort();

						if (notLoggedInProjectId)
						{
							var accProjIds = account.get('projectIds');
							accProjIds.splice($.inArray(notLoggedInProjectId, accProjIds), 1);

							storage.remove(notLoggedInProjectId);
							if (notLoggedInProjectId == lastOpenProject)
							{
								account.set({lastOpenProject : ""}); // , nextProjectNumber: projectCount + 1
							}
						}

					}

					project.load();
				}

				account.syncUploads(syncUploads, function() {

					//after login procedure is done, the blank account can be removed
					storage.remove(account.beforeLoginId);

					var lastOpenProject = account.get('lastOpenProject');
					var accProjIds = account.get('projectIds');

					// open the latest synced active project, or the latest if none are active
					if (accProjIds.length > 0)
					{
						fluid.command.create('open', {id: (($.inArray(lastOpenProject, accProjIds) > -1 && lastOpenProject) ||
							project.getLatestActiveProject() || accProjIds[accProjIds.length - 1])}).dispatchTo('fluid.controllers.project');
					}

				}, uploadsToUpdate);

				signup.loggingIn = false;

			}	//end of syncDownCallback
			ajax.syncDown(syncObjects, unloaded, syncDownCallback, syncDownErrorCallback);
		} else {
			project.setNumber();
		}
	},

	syncUploads : function(objects, callback, uploadsToUpdate)
	{
		account.syncingUploads = true;
		account.setLoadingStep(4);
		if ((!objects) || (objects.length == 0))
		{
			refreshScreen();
            account.syncedUploads = true;
            callback();
			return true;
		}

		function refreshScreen()
		{
			$("#msgLoadingAfterLogin").hide();
			var currentLib = $("#widgetGroupTitle").text();
			if (currentLib == "Uploads")
			{
				lib.draw(currentLib);
			}
			account.setLoadingStep(5);
			//hint.show("end");
			$("#msgLoadingAfterLoginSuccess").fadeIn(500, function(){
				setTimeout(removeAllMessages, 3000);
			});
		}

		function removeAllMessages()
		{
			$(".messageError").hide();
			$("#msgLoadingAfterLoginSuccess").fadeOut(1000);
		}

		var attempt = 1;

		function syncDownUploadsErrorCallback() {
			if(attempt < 3) {
				attempt++;
				ajax.syncDown(objects, syncDownUploadsCallback, syncDownUploadsErrorCallback);
			} else {
				//restore the account to before login state (free account with a project)
				var accs = storage.get('accounts');
				accs.last = account.beforeLoginId;
				storage.set('accounts', accs);

				//refreshes the page and sets the info message
				localStorage.setItem("postloadMessage", "loginSyncFailed");
				location.reload();

			}
		}

		function syncDownUploadsCallback(respData, textStatus, jqXHR)
		{
			var parsedResponse = JSON.parse(respData);
			//if server returned falsy data, retry sync
			if(parsedResponse.r !== 's') {
				syncDownUploadsErrorCallback();
				return;
			}

			var syncUplData = JSON.parse(jqXHR.responseText).t; // jqXHR.response does not work on iOS mobile.
			var succeededCount = 0;


			if (!$.isArray(syncUplData))
			{
				syncUplData = [syncUplData];
			}

			for (var idx = 0; idx < syncUplData.length; idx++)
			{
				try
				{
					var item = JSON.parse(syncUplData[idx]);
				}
				catch(e)
				{
					continue;
				}

				if (typeof item.groups !== 'object' && uploadsToUpdate[item.id]) {
					item.groups = uploadsToUpdate[item.id];
				}

				account.addUploadId(item.id, true);
				try
				{			
					var upl = $.extend({
						font: '',
						color: '',
						upload: 'y',
						g: ['Uploads'],
						t: ['Uploads'],
						data: item.id,
						wh: [item.width, item.height],
						title: item.name
					}, item);

					delete upl.name;
					delete upl.width;
					delete upl.height;
					storage.set(item.id, upl);
					widgets.summary[item.id] = upl;  // add it in to widgets.summary so it can render
					succeededCount++;
				}
				catch(e)
				{
					//console.log("Failed to parse:", item);
				}
			}
			refreshScreen();

			account.syncingUploads = false;

			if(succeededCount>1){
				account.syncedUploads = true;
			}

			callback();
		}

		ajax.syncDown(objects, syncDownUploadsCallback, syncDownUploadsErrorCallback);
	},
	
	// updates the "new" user to the results of the json now that they are registered on the server.
	//completeRegistration : function(result)
	register : function(result)
	{
		if(result && result.r == "s")
		{
			account.set({email: result.email, 
				accType: result.accType, 
				accName: result.accName,
				recurrance: result.recurrance,
				loggedIn: "yes",
				
				maxActiveProjects: result.maxActiveProjects,
				maxPages: result.maxPages, 		
				
				upgradeDate: result.upgradeDate, 
				lastPaymentDate: result.lastPaymentDate, 
				nextPaymentDate: result.nextPaymentDate, 
				lastPaymentResult: result.lastPaymentResult 			
			});
			
			if(result.accountId != account.get("id") ) // duplicate ID clash
			{	
				//console.log("Account ID at signup:", result.accountId, account.get("id"));
				account.changeAccountId(account.get("id"), result.accountId);
			}	
			
			account.draw(result);
			project.updateOnSignup();
			//console.log('setting hash: ', result.intercomUserHash);
			localStorage.setItem('intercomUserHash', result.intercomUserHash);

			fluid.main.fire('editor.afterAccountRegister');
		}
		else // should never happen - handled elsewhere.
		{
			//console.log("Registration result was not good.");
			return false;
		}

		// HACK: determine if we logged in from the preview by checking previewSignup visibility
		if ($('#previewSignup').is(':visible'))
		{
			preview.signupComplete();
		}
	},

	isAccountForever : function()
	{
		if ((account.get("loggedIn") == "yes") && (account.get("accType") == "premium1")) {
			return true;
		}

		return false;
	},

	drawGravatar : function() {
		var eMail = account.get("email");

		if(eMail && eMail !== 'New') {
			var url = "//www.gravatar.com/avatar/" +
						fluid.util.getGravatarHash(eMail) +
						".jpg?s=140&d=404";;

			gravatar.onload = function (event) {
				document.getElementById('startMenu').classList.add('has-gravatar');
			};

			gravatar.src = url;
		}
	},
	
	removeGravatarIcon : function(){
		document.getElementById('startMenu').classList.remove('has-gravatar');
		document.getElementById('gravatar').src = '';
	},
	
	// draws the logged in user account template in the fluid menu.
	draw : function (obj) //account.get("currentUserId")
	{
		//$("#profile").empty();
		$("#profile .createForm").hide();
		$('#profile #account-wrapper').remove();
		//console.log("Account", obj); console.trace();
		$("#tmplAccount").tmpl(obj).appendTo("#profile");

		fluid.main.fire('account.formDrawn');

		account.setUpgradeLinkStatus();
		account.drawGravatar();
		
//		var toDraw = (obj.accType == 'Free') ? "#tmplCC1" : "#tmplPremium";
//		$(toDraw).tmpl({}).appendTo("#upgradeHolder");
		//$("#fluidDropdownSubmenu").show();
		$("#fluidDropdownSubmenu").hide();
	},
	
	drawSignup : function(result) // result is passed if 
	{
		var data = {index: 1, uid: account.get("currentUserId"), email: '', instanceId : g_instanceId};
		
		if(result)
		{
			data.email = result.email;
			data.error = result.t;
			data.checked = "checked";	
		}

		$("#fluidDropdownSubmenu").hide();
		//$("#profile").empty();
		$("#profile .createForm").show();
		$("#previewSignupForm").empty();
		//$("#tmplCreate").tmpl(data).appendTo("#profile");
		$('#profile input[name=uid]').val(data.uid);
		$('#profile input[name=instanceId]').val(data.instanceId);
		$('#profile input[name=email]').val(data.email);
		$('#profile input[name=tandc]').attr('id', data.index);
		$('#profile #createPassword').val('');
		data.index = 2;
		$("#tmplCreate").tmpl(data).appendTo("#previewSignupForm");

		if(result) // after the page is drawn
		{
			var profile = $("#profile");
			setValid(profile.find("[type=email]"));
			setValid(profile.find("[type=checkbox]"));
			setFocus(profile.find("[type=password]"));
		}
		$('#account-wrapper').remove();
	},
	
	isBrandNewUser : function() // checks if this computer has been here before (any account)
	{
		var acc = storage.get("accounts");
		if(!acc)
		{
			return true;
		}
		
		var accId = account.get("id");
		if(!accId)
		{
			return true;
		}
		
		var accObj = storage.get(accId);
		if(!accObj)
		{
			return true;
		}
		return false;
	},
	
	checkEmailExists : function(email)
	{
		//DA: 09-Mar-2012: Synchronize e-mail info in all signup forms
		var form = $("form.createForm");
		// form.find('input[type=email]').attr('value', email);
		ajax.syncUp({email: email}, 'emailRegd', null); // TODO: is this right to use syncUp?
	},
	
	emailChecked : function(data)
	{
		var form = $("form.createForm");

		var data = JSON.parse(data);
		var exists = false;
		if (data.t === true || data.t === 'true')
		{
			exists = true;
			form.data('existing', true).find('input[type=submit]').
				attr('value', 'Welcome back - Sign In').
				attr('data-label', 'Welcome back - Sign In').
				removeClass("newAccount");
		}
		else
		{
			form.data('existing', false).find('input[type=submit]').
				attr('value', 'Create Account').
				attr('data-label', 'Create Account').
				addClass("newAccount");
		}
		//setSubmitStyle(form);

		if (userSettings.isOpen)
		{
			fluidEvent.triggerEditor("emailChecked", { exists: exists  }, true);
			return;
		}
	},

	addProjectId : function(id) // creating a project.
	{
		var ids = account.get("projectIds");
		try
		{
			ids.push(id);
		}
		catch(e)
		{
			//console.log("Error adding project id", id, account.get("projectIds"));
		}
		account.set({projectIds : ids});
	},
	
	addUploadId : function(id, synced)
	{
		var accUploads = account.get("uploads");
		accUploads.push({id: id, s: Boolean(synced)});
		account.set({"uploads" : accUploads});
	},
	
	uploadSynced : function(id, synced)
	{
		var accUploads = account.get("uploads");
		for (var idx = 0, len = accUploads.length; idx < len; idx++)
		{
			var upl = accUploads[idx];
			if (upl.id == id)
			{
				upl.s = Boolean(synced);
				account.set({"uploads" : accUploads});
				break;
			}
		}
	},
	
	findUpload: function(id)
	{
		var res;
		var uploads = account.get("uploads");
		for(var i = 0; i < uploads.length; i++)
		{
			if(id == uploads[i].id)
			{
				res = {index: i, upload: uploads[i]};
				break;
			}
		}
		return res;
	},
	
	removeUpload: function(id, callback)
	{
		var res = this.findUpload(id);
		
		//console.log("Deleting:", id, res);
		// confirm its an upload?
		if (res)
		{
			var obj = $.extend({}, res);
			obj.upload = storage.get(id);
			
//			delete widgets.summary[id]; // delete it from the widgets summary temp.
			var uploads = account.get("uploads");

			ajax.apiCall('img', 'delete', id, {}, function() {
				if (callback)
				{
					callback.call(null, obj);
				}
			});

			obj.upload.removed = 1;
			storage.set(id, obj.upload);
			
			$("#libraryWidgetDragging").remove();
			$("[data-id='" + id+"']").remove();
			fluid.main.trigger('updateUploadCounters');

			if (uploads.length <= 0)
			{
				lib.draw("Uploads");
			}
		}
			
		$("#trash").removeClass("droppableStyle");
	},

	startCreate : function(e, type)
	{
		tracker.record("openUpgradePanelViaOffer", 1);
		account.displayAccountFrame("upgrade/", "create", type || null);
	},
	
	startUpgrade : function(e, type, offerCode)
	{ 
		var source = typeof offerCode != "undefined" ? "Offer" : "fluidMenu";
		var p = $(this).parents(".messages");
		if(p.length > 0)
		{
			source = "Notification";
		}
		tracker.record("openUpgradePanelVia" + source, 1);
		account.displayAccountFrame("upgrade/", null, type, offerCode);
	},

	upgradeSuccess : function(data)
	{
		// always successful here?
		if(data.a.indexOf("upgrade") == 0 && data.r == "s") {
			//console.log("Handling a successful upgrade.", data);
			account.set({
				accName: data.accName,
				accType: data.accType,
				recurrance: data.recurrance,
				maxActiveProjects: data.maxActiveProjects,
				maxPages: data.maxPages,
				upgradeDate: data.upgradeDate,
				lastPaymentDate: data.lastPaymentDate,
				lastPaymentResult: data.lastPaymentResult,
				nextPaymentDate: data.nextPaymentDate,
				billingCompany: data.billingCompany,
				billingAddress: data.billingAddress,
				billingVAT: data.billingVAT
			});

			account.set({
				discount: data.discount ? {
					amount: data.discount,
					bundleMonths: data.bundleMonths,
					code: data.discountCode,
					accType: data.discountAccType,
					recurrance: data.discountRecurrance,
					endDate: data.discountEndDate,
					message: data.discountMessage
				} : null
			});

			var accId = account.get("id");
			var accObj = storage.get(accId);
			account.draw(accObj);

			tracker.record("UpgradeSucces", 1);
			if (project.activeProjectCount() > data.maxActiveProjects) {
				project.load();
			} else {
				project.setNumber();
				projectSettings.resetFilter();
			}

		}
	},

	recoverPassword : function()
	{
		account.displayAccountFrame("recoverPassword/");
	},

	displayAccountFrame : function(source, mode, type, offerCode)
	{
		function triggerEvent()
		{
			frame.show();
			frame[0].contentWindow.focus();
			fluidEvent.triggerEditor("iFrameLoaded", {}, true);
			canvas2.setEditorVisibility(false);
			frame.unbind('load');
		}

		fluid.main.deferReload = true;

		var frame = $("#accountFrame");
		account.resetAccountFrame();
		frame.load(triggerEvent);

		var params = {mode: mode, type: type, offer: offerCode};
		for (var param in params) {
			if (typeof params[param] != 'undefined' && params[param] !== null) {
				source += (source.indexOf('?') == -1 ? '?' : '&') + param + '=' + window.encodeURIComponent(params[param]);
			}
		}

		frame.attr("src", source);

		return false;

		/*
		if (frame.attr("src") != source)
		{
			account.resetAccountFrame();
			frame.load(triggerEvent);
			//var now = new Date();
			//frame.attr("src", source + "?xt=" + now.getTime());
			frame.attr("src", source);
			return false;
		}
		else
		{
			if (frame.get(0).contentWindow.reset)
			{
				frame.get(0).contentWindow.reset();
			}
		}
		return false;
		*/
	},

	resetAccountFrame : function()
	{
		var frame = document.getElementById("accountFrame");
		var frameDoc = frame.contentDocument || frame.contentWindow.document;
		frameDoc.documentElement.innerHTML = "";
	},
	
	logout : function(e)
	{
		//account.setLoadingStep(0);
		//console.log("Called logout.");  console.trace();
	
		page.detachFrame();
		
		var email = account.get("email");
		
		var uploads = account.get("uploads");
		var gridStatus = account.get("gridStatus"); // set grid on/off after log out
		var gridSpacing = account.get("gridSpacing");
		var snapToWidget = account.get("snapToWidget");		
		account.removeGravatarIcon();
		$("#msgSyncOnLogout").show();

		account.syncUp();       //Sync all account settings before loggin out
		project.sync(null, function(result) {
			$("#msgSyncOnLogout").fadeOut(300);

			if (result.synced && result.data) {
				result = JSON.parse(result.data);
				if (result.r == 'f') {
					notification.add('alert', 'Unable to save your data. Please try to sign out again.');
					return;
				}
			}

			project.close();

			for (var idx = 0; idx < uploads.length; idx++)
			{
				delete widgets.summary[uploads[idx].id];
			}

			storage.clear();
			localStorage.setItem('instanceId', g_instanceId);

			fluid.controllers.bin.clear();
			
			account.setup(); // sets up the accounts localvar
			account.createUser(); // creates a "new" user - free account.
			
			//account.set({"currentUserId" : null, "projectIds" : [], "uploads" : []}); OLD
			account.set({"currentUserId" : null, "projectIds" : [], "uploads" : [], "gridStatus" : gridStatus, "gridSpacing" : gridSpacing, "snapToWidget" : snapToWidget});
			var pid = project.add(e, "Project 1"); // e not used, but necessary.
			
			account.drawSignup(/*{email: email}*/);
			project.load();
			fluid.command.create('open', {id: pid}).dispatchTo('fluid.controllers.project');

			//signup.show();
			preview.displaySharePanel(false);
			$("#previewHolder").hide();
			//$("#startMenu").hide();
			//fluidMenu.allowNewProjects(false);
			account.set({"loggedIn" : "no"});

			account.set("uploads", []);
			lib.draw($("#widgetGroupTitle").text());
			notification.removeAll();
			tracker.record("closeSession", 10, email, e);
			hint.resetIndicators();
			account.setLoadingStep(5);
			account.resetAccountFrame();
			$('body').removeClass('signed-in');

			fluid.main.fire('editor.afterLogout');
		});
		return false;
	},

	//Records user activity in order to verify the account latest status
	recordActivity : function(e, data)
	{	
		//console.log("Checking user activity.");
		var now = new Date().getTime();
		var inactive = now - account.lastActivity;
		if(inactive > account.safetyInterval) // if inactive for longer than we consider safe, check the server for a newer version (5 mins)
		{
			//console.log("\n  Its been too long...time for a check with the server (inactive, safety interval)...", inactive , account.safetyInterval);
			account.validateState();
		}
		account.lastActivity = now;
	},

	// Validates the current account state against the server
	// called after a period of idle time, and on refresh/reload (if its not already refreshing)
	validateState : function()
	{
		if ((account.get('loggedIn') != 'yes') || (g_imgFullCanvas == "true"))
		{
			//console.log("  Not logged in");
			return;
		}

		//console.log("  Validating account state for", account.get("id"), g_instanceId);
		ajax.syncUp({instanceId: g_instanceId}, "accountState", account.get("id")); // also send g_instanceId
		return true;
	},

	requireRefresh : function(result)
	{
		if(result.a != "accountState" || result.r != "s") // account state check fails. 
		{
			//console.log("  Error returned from server.");
			return false;
		}

		//console.log("Server says action to take:", result.clientAction, result); // result, 
		
		if(result.clientAction == 'refresh')
		{
			//account.refresh();
			//utils.reloadWithMessage("tab");
			//console.log("Refresh not implemented.");
		}
		else if(result.clientAction == 'logout')
		{
			//console.log("  Logging out due to being active elsewhere.", result);
			account.logout(); //Log Out
			localStorage.setItem("restoreMyInstanceId", "true");
			utils.reloadWithMessage("serverLogout");
			//notification.add('alert', 'This account is open in another window or on another computer. Please log in again.');	
		} 
		else if(result.clientAction == 'warnClose')
		{
			utils.reloadWithMessage("tab");
			//notification.add("alert", "This account may be open in more than one place. To protect your data, please ensure your account is open in one window/tab only.");
			//console.log("Warn to close action");
		}
		
		
		/*
		//Check if a refresh is required
		var required = false;
		var lastFound = result.lastProject;
		
		//console.log("Same project: ", result, lastFound.id, project.get("id"));
		if (lastFound.id != project.get("id"))
		{
			//console.log("A refresh is required. The user has changed to a new project"); // this triggers an additional refresh at login.
			required = 1;
		}
		else
		{
			var info = $.parseJSON(lastFound.projectInfo);
			
			//console.log("Last Update: ", info, info[lastFound.id].updated, project.get("updated"));
			
			// last updated project is different from current project or save date from last saved is > this project's save.
			if ((!info[lastFound.id].saved) || (!project.get("saved")) || ((info[lastFound.id].saved > project.get("saved"))))
			{
				//console.log("A refresh is required.  The user has changed the project somewhere else.");
				required = 2;
			}
		}
		
		if (required)
		{
			account.refresh();
			//console.log("Refreshing", required);
		}
		else if (!project.isInitialized)
		{
			project.open(lastFound.id);
		}
		else
		{
			//console.log("No refresh needed.");
		}	
		*/
	},

	//Sets a step on the editor loading process
	setLoadingStep : function(step)
	{
		var isNotEditor = (g_imgFullCanvas == "true") || ($("#previewHolder:visible").size() > 0);
		if (isNotEditor) { return; }

		var container = $(".fluidFillingContainer");
		var finalStep = 5;

		if (step == 0) {
			//Initial Step
			if($("#loadingScreen").hasClass("close")) {
				account.showLoadingScreen();
			}
			return;
		}
		//STEP 0:  Set in init editor.init, account.logout, signup.ajaxsuccess
		//STEP 1:  Set in account.sync
		//STEP 2:  Set in project.load
		//STEP 3:  Set in project.sync
		//STEP 4:  Set in account.syncUploads
		//STEP 5:  Set in account.syncUploads, account.logout, signup.ajaxerror, signup.ajaxtimeout
		container.removeClass("loadingStep1 loadingStep2 loadingStep3 loadingStep4 loadingStep5");
		container.addClass("loadingStep" + step);

		if (step == finalStep) {
			account.loadingTimeout = setTimeout(account.hideLoadingScreen, 200);
			account.autoOpenFluidMenu();
		} else {
			clearTimeout(account.loadingTimeout);
		}
	},

	//When the editor is loaded, check if the menu should be opened automatically
	autoOpenFluidMenu : function()
	{
		var referrer = document.referrer;
		var autoOpen = false;
		if (referrer.indexOf("recoverPassword") > -1) {
			autoOpen = true;
		}

		if (autoOpen) {
			setTimeout(fluidMenu.show, 1000);
		}
	},

	showLoadingScreen : function()
	{
		$("#loadingScreen").show().removeClass("close");
		$("#canvas").hide();
		hint.hide();
	},

	hideLoadingScreen : function()
	{
		canvas2.setEditorVisibility(true);
		$("#loadingScreen").addClass("close").fadeOut(250).delay(200);
		$("#canvas").fadeIn(200, account.afterLoading);
		var startMenuStyleOriginal = account.get('loggedIn') == 'yes' ? false : true;
		if (startMenuStyleOriginal)
		{
			fluidMenu.setButtonStyle($("#startMenu"), startMenuStyleOriginal);
		}
		//hint.restart();
	},

	afterLoading : function()
	{
		$(".fluidFillingContainer").removeClass("loadingStep1 loadingStep2 loadingStep3 loadingStep4 loadingStep5");
		clearTimeout(account.loadingTimeout);
	},

	bundleSettings : function()
	{
		var data = { hint : account.get("hint"),
			tutorialLevel : account.get("tutorialLevel"),
			billingCompany : account.get("billingCompany"),
			billingAddress : account.get("billingAddress"),
			billingVAT : account.get("billingVAT"),
			gridStatus : account.get("gridStatus"),
			gridSpacing : account.get("gridSpacing"),
			//snapToGrid : account.get("snapToGrid"),
			snapToWidget : account.get("snapToWidget"),
			receiptEmails : account.get("receiptEmails"),
			emailReceiptEnabled : account.get("emailReceiptEnabled"),
			lastOpenProject : account.get("lastOpenProject")
		};

		return data;
	},

	syncUp : function(callback)
	{
		if (account.get('loggedIn') != 'yes') { return; }

		var data = account.bundleSettings();
		ajax.syncUp(data, "accountSettingsSync", null, callback);
	},

	needHints : function()
	{
		return account.get("hint") == "end" ? false : true;
	},

	setUpgradeLinkStatus : function()
	{
		//Get info
		var name = account.get("accName");
		var type = account.get("accType");

		//Set label
		var label = type == "Free" || name == "" || name == undefined ? "Go Premium" : name;
		$(".currentAccType").text(name);
		$("#upgradeLink").val(label);

		//Remove upgrade account for unlimited accounts for a lifetime
		if (account.isAccountForever())
		{
			$("#upgradeLink, #userSettingsChangeAccount").hide();
		}
		else
		{
			$("#upgradeLink, #userSettingsChangeAccount").show();
		}
	},

	canAddProjects : function()
	{
//        var maxActiveProjects = account.get('maxActiveProjects');
//        var activeProjectCount = project.activeProjectCount();
//        // TODO: for the future: don't check for last allowed project here as this has side effects
//        if (maxActiveProjects && maxActiveProjects != 0 && activeProjectCount >= maxActiveProjects)
//        {
//            return false;
//        }
		return true;
	},

	isFreeAccount : function()
	{
		return account.get("accType") == "Free";
		//return account._getAccountLevel() == 0 ? true : false;
	},

	isStandard : function () {
		return account.get('loggedIn') === 'yes' && !/^Free$|lite$/.test(account.get('accType'));
	},

	hasUpload: function(id) {
		if(!id) return false;

		var uploads = account.get('uploads');

		//if could not determine, assume an upload is present
		if(!uploads) return true;

		for(var i=0; i<uploads.length; i++) {
			if(uploads[i].id === id) {
				return true;
			}
		}

		return false
	}
}

var upload = 
{
	// tmp variable holders
	w : null,
	h : null,

	hide : function(){
		$("#dropzone").fadeOut(200);
	},
	
	create : function(content, file, e)
	{ 
		//console.log("Created upload"); //, file, e, content
		tracker.record("ImageUploaded", 1);
		var image = new Image();
		
		image.onload = function()
		{
			//console.log("File in create image", file);
			file.width = this.width;
			file.height = this.height;
			file.src = this.src;

			var id = upload.saveFile(file, upload.saveFileCallback, upload.saveFileCallback);
		}
		
		image.src = content;
	},
	
	init : function() { // move to user actions!
		var viewport = document.getElementById('viewport'),
			hud = document.getElementById('hud');
		// wont work in safari!
		viewport.addEventListener("dragenter", 	upload.enter, false);
		viewport.addEventListener("dragover", 	upload.over, false);

		hud.addEventListener("dragenter", 	upload.enter, false);
		hud.addEventListener("dragover", 	upload.over, false);

		document.addEventListener("dragleave", 	upload.leave, false);
		document.addEventListener("drop", 		upload.drop, false);
	},
	
	enter : function(e)
	{
		if (account.get("loggedIn") != "yes")
		{
		   return false;
		}

		var data = e.dataTransfer;
		var other = data.files;
		var other2 = data.files;
		//console.log("Data: ", data.files, data.files.length, data.types);
		if (((data.files) && (data.files.length > 0)) || (data.types == "Files"))
		{
			if($("#dropzone").not(":visible") && $(".pageWidget textarea").length == 0 )
			{
				$("#dropzone").fadeIn(200);
			}
		}
		return false;
	},
	
	over : function(e)
	{
		utils.prevent(e);
	},
	
	leave : function(e)
	{
		utils.prevent(e);
		
		if(e.pageX != 0) 	// its still in the page boundary.
		{
			return;
		}
		// its left the page entirely.
		
		upload.hide();
	},
	
	drop : function(e)
	{
		if (e.preventDefault) e.preventDefault();
		var files = e.dataTransfer.files;

		for (var i = 0, file; file = files[i]; i++) {
			upload.readFile(file);
		}
		upload.hide();
		return false;
	},
	
	readFile : function(file)
	{
		if ( account.get("loggedIn") != "yes")
		{
			notification.add('alert', account.alerts.uploadLimitHit.onNonSignedIn, {scope: 	'uploadLimit', stopBuggingCallBack: function () {}});
			return false;
		}
	
	
		//console.log("Reading a file", file);

		if (!upload.isValid(file))
		{
			return;
		}

		if (window.FileReader)
		{
			var reader = new FileReader();

			reader.onerror = function(evt)
			{
				var msg = 'Error ' + evt.target.error.code;
				switch (evt.target.error.code)
				{
					case FileError.NOT_READABLE_ERR:
						msg += ': NOT_READABLE_ERR';
						break;
				};
			};

			reader.onload = (function(aFile)
			{
				return function(evt)
				{
					if (evt.target.readyState == FileReader.DONE)
					{
						upload.create(evt.target.result, aFile);
					}
				};
			})(file);

			reader.readAsDataURL(file);
		}
		else
		{
			upload.uploadFile(file);
		}
	},

	uploadFile: function(file)
	{
		if (upload.isValid(file)) {
			upload.saveFile(file, upload.saveFileCallback, upload.saveFileCallback);
		}
		return true;
	},

	saveFileCallback: function(fileName, uploadId)
	{
		var isUploadsOpen = $("#widgetGroupTitle").text() === "Uploads";
		if(isUploadsOpen) {
			lib.redrawUpdates();
			// lib.drawSingleUpload(uploadId, fileName);
			lib.scrollBottom();
			$('#searchBox').val('');
		}
	},
	
	//json object that contains the 64 bit encoded image sound good?
	uploadByClick : function(e)
	{
        upload.uploadsPending = {};
        for (var idx = 0, len = this.files.length; idx < len; idx++) {
            upload.uploadsPending[this.files[idx].name] = true;
        }

		for (var idx = 0, len = this.files.length; idx < len; idx++) {
			upload.uploadFile(this.files[idx]);
		}
        document.querySelector('[name=uploadForm1]').reset();
		e.preventDefault();
	},

	saveFile : function(file, successCallback, errorCallback)
	{
		if ( account.get("loggedIn") != "yes")
		{
			//console.log("Cant save file - not logged in!");
			notification.add("alert", "Please log in to upload images");
			return false;
		}
	
		var title = file.name;
		var id = utils.guid("i");
		var originalWidth = file.width;

		var obj = {
			//cid: id, //cid is used for setting the id when creating the library item, would prefer if it was set as an attr and not saved as duplicate in storage..
			title: title,
			font: '',
			color: '', 
			type: file.type,
			upload: 'y',
			r: 'y',
			g: ['Uploads'],
			t: ['Uploads'],
			wh: [file.width, file.height],
			storage: 'db',
			// array of upload group names (eg. project IDs)
			groups: []
			//data: file.src
		};

		// If a project is currently open, add the project's ID to the upload
		// objets group array
		var openProjectId = account.get('lastOpenProject');

		storage.set(id, obj);
		widget.saveTempFile(id, file);

		if (account.get('accType') != 'New')
		{
			function ajaxCallback(res)
			{
				account.addUploadId(id);                             //add it to the list of the user's uploaded files.
				widgets.summary[id] = obj;                           // add it in to widgets.summary so it can render
				if (originalWidth != res.width)
				{
					obj.wh = [res.width, res.height];
					storage.set(id, obj);
				}
				widget.removeTempFile(id);
				if ($.isFunction(successCallback))
				{
					successCallback(file.name, id);
				}
			}
			
			function ajaxErrorCallback(res)
			{
				//server limit is 8MB
				if(res.size > 8000000) {
					notification.add("alert", "Unable to upload the file [ " + file.name + " ].  Please use smaller image files.");
				} else {
					notification.add("alert", "Unable to upload the file [ " + file.name + " ].  Please only upload image files.");
				}


				if ($.isFunction(errorCallback))
				{
					errorCallback(id);
				}
			}
			
			ajax.apiCall('img', 'post', id, file, ajaxCallback, ajaxErrorCallback);
		}

        upload.uploadsPending[file.name] = false;

        var allDone = true;
        for(var prop in upload.uploadsPending) {
            if(upload.uploadsPending.hasOwnProperty(prop)) {
                if(upload.uploadsPending[prop]) {
                    allDone = false;
                    break;
                }
            }
        }

        if(allDone) document.querySelector('[name=uploadForm1]').reset();

		return id;
	},

	bundle : function(id)
	{
		var data = {};
		data[id] = storage.get(id); // JSON.stringify(storage.get(id));
		//return data; // uncomment this???
	},

	//DA:07-Apr-2012: ALl actions required when validating that the file is an image
	isValid : function(file)
	{
		var response = true;
		var imageType = /image.*/;
		if (!file.type.match(imageType))
		{
			response = false;
			notification.add("alert", "The file [ " + file.name + " ] is not an image.  Please only upload image files.");
		}
		return response;
	}
};


var link =
{
	mouseTimeoutForHover : false,
	isLinking : false,

	showahrefs : function (delay)
	{
		if(delay)
		{
			var time = (new Date).getTime();
			if(time - link.mouseTimeoutForHover < delay) // last time they were over a template link was under a second, give them a bit more time.
			{
				setTimeout(link.showahrefs, 300, [delay]);
				return;
			}
		}

		$(".linkTemplate").stop(true, true).delay(500).fadeOut(400);
	},

	hoverIn : function(evt)
	{

        if (project.readOnly())
        {
            return;
        }

		var linkId = $(this).attr('id');
		$(this).addClass('front');

		//console.log('hoverIn: ', linkId, evt);

		var $linkToggle = $(this).find('.linkToggle');
		if( !link.toggleRemoveTimeout ) link.toggleRemoveTimeout = {};
		if( link.toggleRemoveTimeout[linkId] ) {
			clearTimeout(link.toggleRemoveTimeout[linkId]);
			delete link.toggleRemoveTimeout[linkId];
		}
		//console.log('hoverIn: ', this, arguments);
		if( $linkToggle.length === 0 ) {
			$linkToggle = $('<a class="linkToggle tooltip4" title="Gestures and transitions" alt="Gestures and transitions"></a>');
			$(this).append($linkToggle);
		}

		$linkToggle.stop(true, true).delay(200).fadeTo(10, 1.0, link.showLinkMenuIntro);
		$linkToggle.tooltip({effect: 'fade', delay : 0, offset: [-10, 0], opacity: 0.8, tipClass : 'tooltip4Text', predelay: 50});  //Add tooltip


		//var linkCanvas = $(this).parents('#canvasLinks');
		var origin = link.comesFrom($(this).attr("id"));
		var dest = link.goesTo($(this).attr("id"));

		var originItem = $("#" + origin);

		//link.draw($(this), origin, dest, "active");

		var originPage = widget.getPageOf(origin);

		if(project.get("currentZoom") == 1)
		{
			originItem.css("outline", "3px solid rgba(25,163,255,1.0)");

			//DA: 07-Mar-2012: Change Left Margin for the Toggle to be displayed closer to the origin page
			var from = $("#" + originPage);
			var hasFrame = from.hasClass("active");
			var to = $("#" + dest);
			var fromPage = from.find(".page");

			var oTop =  parseInt(from.css("top")) + parseInt(originItem.css("top")) + parseInt(originItem.css("height"))/2;
			var oLeft = parseInt(from.css("left")) + parseInt(originItem.css("left")) + parseInt(originItem.css("width"))/2;
			var dTop = (parseInt(to.css("top")) + parseInt(to.css("height"))/2 );
			var dLeft = (parseInt(to.css("left")) + parseInt(to.css("width"))/2);

			var marginTop = 13;         //Original Top Margin in the CSS
			var outsideFrame = 60;      //Value of the frame margin + some additional space
			if (!hasFrame)
			{
				outsideFrame = 0;
			}

			//Calculate Coordinates where the link leaves the Page Origin
			var exitLeft = 0;
			if (oLeft < dLeft)
			{
				//Exit on the RIGHT side
				exitLeft = parseInt(from.css("left")) + parseInt(fromPage.css("width")) + outsideFrame;
			}
			else
			{
				exitLeft = parseInt(from.css("left")) - outsideFrame;
			}
			var exitTop = (((dTop - oTop) / (dLeft - oLeft)) * (exitLeft - oLeft)) + oTop;

			//If the exit point is UP/DOWN instead or RIGHT/LEFT, the exit point must be recalculated
			var verticeTop = parseInt(from.css("top")) - outsideFrame;
			var verticeBottom = parseInt(from.css("top")) + parseInt(fromPage.css("height")) + outsideFrame;

			if ((exitTop <= verticeTop) || (exitTop >= verticeBottom))
			{
				if (oTop < dTop)
				{
					//Exit at the BOTTOM
					exitTop = parseInt(from.css("top")) + parseInt(fromPage.css("height")) + outsideFrame;
				}
				else
				{
					exitTop = parseInt(from.css("top")) - outsideFrame - 20;        //Additional 20 for the frame handle
					if (oLeft < dLeft)
					{
						marginTop = -20;  //Change where the arrow appears when the link leaves the page from the top/right
					}
				}
				exitLeft = (((exitTop - oTop) / (dTop - oTop)) * (dLeft - oLeft)) + oLeft;
			}

			//Calculate the new Margin based on the real exit point
			var newHeight = exitTop - oTop;
			var newWidth = exitLeft - oLeft;
			var newMargin = Math.sqrt(newHeight*newHeight + newWidth*newWidth) + 25;
			//console.log("Page O: " + parseInt(from.css("left")) + "x" + parseInt(from.css("top")) + ". Origin Point: " + oLeft + "x" + oTop + ". Exit Point: " + exitLeft + "x" + exitTop + ". Destination: " + dLeft + "x" + dTop + ". Frame: " + outsideFrame + ". Margin: " + newMargin);

			$(this).find(".linkToggle").css({"margin-left" : newMargin + "px", "margin-top" : marginTop + "px"});

		}
		else
		{
			var oppositeLink = page.isLinked(dest, originPage);
			if( oppositeLink && evt) link.hoverIn.apply(document.getElementById(oppositeLink), [false]);

			//DA: 07-Mar-2012: Remove Left Margin When the project is not Zoomed
			//$(this).find(".linkToggle").css("margin-left", "");

		}

	},

	hoverOut : function(evt)
	{
		$('.tooltip4Text').hide();

        if( !$('#canvas').hasClass('loaded') ) {
            return;
        }


		var dest = link.goesTo($(this).attr("id"));

		if(evt) {
			link.draw($(this), origin, dest, "ahref");
		}

		//link.draw($(this), $("#" + origin), $("#" + dest), "ahref");

		//console.log('hoverOut: ');
		var linkId = $(this).attr('id');
		var $linkToggle = $('.link').not('.open-link-menu').find(".linkToggle");
		//console.log('hoverOut: ', this, arguments);

		if( !evt || !($(evt.target).hasClass('open-link-menu') || $(evt.target).hasClass('openLinkMenu')) ) {
			$linkToggle.stop(true, true).delay(2000).fadeTo(200, 0.0, link.hideLinkMenuIntro);

			if(!link.toggleRemoveTimeout) link.toggleRemoveTimeout = {};
			link.toggleRemoveTimeout[linkId] = setTimeout(function() {
				$(this).find('*').remove();
				$('.link').removeClass('front');
			}.bind(this), 2000);
		}

		var origin = link.comesFrom($(this).attr("id"));
		$("#" + origin).css("outline", "");

		var dest = link.goesTo($(this).attr("id"));
		link.draw($(this), origin, dest, "ahref");
		//link.draw($(this), $("#" + origin), $("#" + dest), "ahref");

		var originPage = widget.getPageOf(origin);
		var oppositeLink = page.isLinked(dest, originPage);
		if( oppositeLink && evt  ) link.hoverOut.apply(document.getElementById(oppositeLink), [false]);

		return false;

	},

	closeMenu : function()
	{
		$(".openLinkMenu").removeClass("openLinkMenu");
		$(".open-link-menu").removeClass("open-link-menu");
		$(".linkMenu").hide();
		return false;
	},

	
	setLinkMenuText : function()
	{
		var zoomLevel = project.get("currentZoom");
			$("#smallRemoveLink, #zoomedOutLinks, #linkAmount").hide();
			
			if(zoomLevel < 1) 
			{ 
				$("#zoomedOutLinks").show();
				var linkAmount = project.get('links')['linkCanvId'].length;
				$("#linkAmount").show().text(linkAmount);
				var linkText = (linkAmount > 1) ? ("remove " + linkAmount + " links") : ("remove 1 link")
				$("#removeLinkTxt").text(linkText);
			}
			else { $("#smallRemoveLink").show();}
	},
	
	toggleMenu : function(e)
	{
		// set the text in the main link menu
		//link.setLinkMenuText(); // Y.B -- DO NOT DELETE -- THIS IS AN OLD LINKS FUNCTION
		
		if( $(this).hasClass("openLinkMenu") ) // this is already open.
		{
			link.closeMenu();
		}

		$(".openLinkMenu").removeClass("openLinkMenu");// if another one is open, close it.
		$(this).addClass("openLinkMenu");
		$(this).parents('.link').addClass('open-link-menu');

		$("body").bind("click.linkToggle", function(e) //close it if a body click happens
		{
			if( $(e.target).parents(".linkMenu").length > 0 ) return; // ignore clicks in the link menu
			var $currLinkToggle = $(".openLinkMenu");

			//if clicked on another link toggle just switch css classes for link toggle
			if(e.target != $currLinkToggle.get(0)) {
				$currLinkToggle.removeClass('openLinkMenu').parent('.link').removeClass('open-link-menu');
				$(e.target).addClass('openLinkMenu').parent('.link').addClass('open-link-menu');
			//if clicked anywhere else just hide the link menu
			} else {
				$(".openLinkMenu").removeClass("openLinkMenu");
				$(".open-link-menu").removeClass("open-link-menu");
			}

			link.hoverOut();
			$(".linkMenu").hide();
			$("body").unbind("click.linkToggle");

			//if clicked on another link toggle trigger the click for a new one
			if(e.target != $currLinkToggle.get(0)) {
				$(e.target).click();
			}
			return utils.prevent(e); // the live bind to reopen will happen after this
		});

		var linkId = $(this).parents(".link").attr("id");
		var links = project.get("links");

		var i = $.inArray(linkId, links.linkCanvId);
		if(i > -1)
		{
			var pos = $(this).offset();
			$(".linkMenu .transitionSelector").find("[value='" + links.transType[i] + "']").attr("selected", "selected"); // set the transition in the dropdown
			$(".linkMenu .linkTriggerSelector").find("[value='" + links.triggerType[i] + "']").attr("selected", "selected"); // set the transition in the dropdown
			$(".linkMenu").css({top: pos.top, left: pos.left}).show();
		}
		return false;
	},


	follow : function(e)
	{
		// if we are at 100%, move to the destination page.
		var zoom = project.get("currentZoom");

		if(zoom == 1 && $(".connectorHelper").length == 0) // handles the down-drag-up click event of link creation - already reverts to original page.
		{
			//DA:19-Mar-2012: Hide the link settings menu icon
			$(this).find(".linkToggle").hide(10, link.hideLinkMenuIntro);

			// if the active page is the current page, go to the origin, else go to the active page.
			var pageId = link.goesTo($(this).attr("id"));
			var activeId = project.getActivePageId();

			if(activeId == pageId)
			{
				//console.log("active page is the same as target page.");
				pageId = link.comesFromPage($(this).attr("id"));
				//pageId = $("#" + originId).parents(".screen").attr("id");
			}


			var pageObj = $("#" + pageId);
            //if there is no page element it needs to be rendered
            if( pageObj.length === 0 ) {
                page.drawDetailed(pageId, 'init');
                pageObj = $("#" + pageId);
            }
			page.activate(pageObj);
			zoomInAndCenterOnPage(pageObj, 1, 1, 300);
		}
	},

	template : function(id, linkType, transType) // id or obj
	{
		$('#' + id).remove();
		var canvas = $("#tmplLinkNew")
			.tmpl({id : id})
			.appendTo("#canvasLinks");
		//$(canvas).find("[value='" + transType + "']").attr("selected", "selected"); // set the transition in the dropdown

		if(linkType == "ahref")
		{
			canvas.fadeIn(400);
		}
		else
		{
			canvas.addClass("linkTemplate");
		}

		return canvas;
	},

	dragStart : function(e, isOnClick)
	{
		page.calculateWdgPositions( $(".screen.active").attr("id") );
		hint.show("draggingLink");
		link.isLinking = true;

		//console.log("Link Dragstart called"); //console.trace();
		if ((typeof isOnClick == 'boolean' && isOnClick) || !$(this).data('dragOnClickStarted'))
		{
			contextMenu.hide();
			propInspector.resetPropInspector();
			//hint.show("draggingLink");

			var zoom = project.get("currentZoom");
			$("#canvas").data("revertZoom", zoom); // save this so we can revert.

			// Removes the links from anything that is previously selected
			if($(this).attr("id") == "cmLink2") // its an ahref.
			{
				link.remove(".ui-selected"); // if it already has a link, remove it - its going to be replaced.
			}

			dragZoom($(this));
		}

		if (isOnClick)
		{
			$(this).data('dragOnClickStarted', true);
			$('.ui-draggable').not(this).not(".pageWidget").draggable('disable'); // prevent page and canvas dragging while linking
		}
		//setZoomedOutActions();
		//$('.page').draggable('disable');
	},

	drag : function(e)
	{
		if(!link.$dragCanvas) {
			link.$dragCanvas = $('#dragCanvas');
			link.$dragCanvas.add($('.connectorHelper'));
		}

		//console.log("Dragging link");
		var currentPageId = getHoverPage(e, link.$dragCanvas);
		//If hovering a page
		if (currentPageId != "")
		{
			//If changing page from the previous hovered
			if (currentPageId != $(".pageLinkableCandidate").attr("id"))
			{
				link.removeHighlightedPage(e);
				//If the hovered page is not the origin of the link
				if (currentPageId != $(".activeZoomedOut").attr("id"))
				{
					$("#" + currentPageId).addClass("pageLinkableCandidate");
				}
			}
		}
		else
		{
			link.removeHighlightedPage(e);
		}
        //console.log('link drag: ', $(".connectorHelper"), $(".connectorHelper").parents('body'));
		link.draw( $("#dragCanvas"), $(".zoomedOutSelected").attr('id'), $(".connectorHelper"), "ahref");
		//link.draw( $("#dragCanvas"), $(".zoomedOutSelected"), $(".connectorHelper"), "ahref");
	},

	dragStop : function(e)
	{
        //console.log("Dragstop called"); //console.trace();
        var originId = widgetsCache[$(".zoomedOutSelected").attr('id')].pageId;
		link.draw( $("#dragCanvas"), $(".zoomedOutSelected"), $(".connectorHelper"), "ahref");
		//link.draw( $("#dragCanvas"), $(".zoomedOutSelected"), $(".connectorHelper"), "ahref");
		dragZoomStop();
        page.draw(originId, 'init');
		$(this).data('dragOnClickStarted', false);
		$('.ui-draggable').not(this).not(".pageWidget").draggable('enable'); // disable all other draggables to prevent dragdropping on clicks.
		$(".screen").removeClass("pageLinkable pageLinkableCandidate");
        page.activate($("#" + originId));
		link.isLinking = false;
		hint.show("droppedLink");
	},

    drawSome: function(links) {
		for (var i=0; i<links.linkOrigin.length; i++) {
			if(links.linkDest[i] !== widgetsCache[links.linkOrigin[i]].pageId) {
				//console.log('draw some: ', $("#" + links.linkCanvId[i]), links.linkOrigin[i], links.linkDest[i], links.linkType[i]);
				link.draw($("#" + links.linkCanvId[i]), links.linkOrigin[i], links.linkDest[i], links.linkType[i]);
			}
		}
    },

	// Draws all links (at load) - except templates.
	drawAll : function(type)
	{
		var links = project.get("links");

		for (var i in links.linkOrigin) {
			if(type == "all" || links.linkType[i] == type) {
				link.draw($("#" + links.linkCanvId[i]), links.linkOrigin[i], links.linkDest[i], links.linkType[i]);

			}
		}
	},

	// updates all links on a passed page (or group of pages).
	update : function(pageObj)
	{
		// ugh - functionise/optimise.
		//$(".link").detach(); / optimise test.

		var links = project.get("links");

		var toUpdate = [];
		pageObj.each(function()
		{
			var id = $(this).attr("id");
			for (var i in links.linkOrigin)
			{
                if( widgetsCache[links.linkOrigin[i]] === undefined ) continue;
				var originPageId = widgetsCache[links.linkOrigin[i]].pageId;
                //console.log('each page: ', id);
				if(originPageId == id || links.linkDest[i] == id)
				{
					toUpdate.push(i);
				}
			}
		});

		for(var j in toUpdate)
		{
			var val = toUpdate[j];

			link.draw($("#" + links.linkCanvId[val]), links.linkOrigin[val], links.linkDest[val], links.linkType[val]);
		}
	},

    overlapCheck: function(originBox, destBox) {
        var oBox = {
            left: originBox[0],
            right: originBox[0] + originBox[2],
            top: originBox[1],
            bottom: originBox[1] + originBox[3]
        };

        var dBox = {
            left: destBox[0],
            right: destBox[0] + destBox[2],
            top: destBox[1],
            bottom: destBox[1] + destBox[3]
        };

        if( (dBox.left >= oBox.left && dBox.left <= oBox.right && dBox.top >= oBox.top && dBox.top <= oBox.bottom) ||
            (dBox.right >= oBox.left && dBox.right <= oBox.right && dBox.top >= oBox.top && dBox.top <= oBox.bottom) ||
            (dBox.left >= oBox.left && dBox.left <= oBox.right && dBox.bottom >= oBox.top && dBox.bottom <= oBox.bottom) ||
            (dBox.right >= oBox.left && dBox.right <= oBox.right && dBox.bottom >= oBox.top && dBox.bottom <= oBox.bottom) ) {

            return true;
        } else {
            return false;
        }


    },

    drawPageToPage: function($el, originBox, destBox, zoom) {
        if( link.overlapCheck(originBox, destBox) ) {
            $el.hide();
            return;
        }

        var linkWidth;
        var arrowHeadLength = 15;
        // origin/destination pages coordinates/dimensions - real project values (zoom=1)
        var oTop, oLeft, dTop, dLeft;
        // link start/end coordinates
        var startX = 0, startY = 0 , endX = 0, endY = 0;
        var topPage, bottomPage, isOriginOnTop;

        if(originBox[1] < destBox[1]) {
            topPage = originBox;
            bottomPage = destBox;
            isOriginOnTop = true;
        } else {
            topPage = destBox;
            bottomPage = originBox;
            isOriginOnTop = false;
        }

        var leftPage, rightPage, isOriginOnLeft;
        if(originBox[0] < destBox[0]) {
            leftPage = originBox;
            rightPage = destBox;
            isOriginOnLeft = true;
        } else {
            leftPage = destBox;
            rightPage = originBox;
            isOriginOnLeft = false;
        }

        //if we can connect two pages with a horizontal link
        if(bottomPage[1]-topPage[1] < topPage[3]) {
            var addClass = '';
			if(topPage[1]+topPage[3] > bottomPage[1] + bottomPage[3]) {
				startY = bottomPage[1] + bottomPage[3] / 2;
			} else {
				startY = bottomPage[1] + (topPage[1] + topPage[3] - bottomPage[1]) / 2;
			}
            //endY = startY;

            if(isOriginOnLeft) {
                startX = originBox[0] + originBox[2];
                //endX = destBox[0];
                linkWidth = destBox[0] - originBox[0] - originBox[2];
                addClass = 'right';
            } else {
                startX = destBox[0] + destBox[2];
                //endX = originBox[0];
                linkWidth = originBox[0] - destBox[0] - destBox[2];
                addClass = 'left';
            }

            //console.log('horizontal: ', $el);

            $el.css({
                top: startY*zoom,
                left: startX*zoom,
                width: linkWidth*zoom > arrowHeadLength ? linkWidth*zoom-arrowHeadLength : 0,
                height: '4px',
                "-webkit-transform-origin":  "0px " + "2px",
                "-moz-transform-origin": "0px " + "2px",
                "-webkit-transform": 'none',
                "-moz-transform": 'none'
            }).removeClass('right up left down').addClass(addClass).show();

            return;

        //if we can connect two pages with a vertical link
        } else if(rightPage[0]-leftPage[0] < leftPage[2]) {
            //console.log('vertical: ', $el);
            var addClass = '';
            startX = rightPage[0] + (leftPage[0] + leftPage[2] - rightPage[0]) / 2;
            //endX = startX;

            if(isOriginOnTop) {
                startY = originBox[1] + originBox[3];
                //endY = destBox[1];
                linkWidth = destBox[1] - originBox[1] - originBox[3];
                addClass = 'down';
            } else {
                startY = destBox[1] + destBox[3];
                //endY = originBox[1];
                linkWidth = originBox[1] - destBox[1] - destBox[3];
                addClass = 'up';
            }

            //console.log('horizontal: ', $el);

            $el.css({
                top: isOriginOnTop ? startY*zoom : startY*zoom + arrowHeadLength,
                left: startX*zoom,
                height: linkWidth*zoom > arrowHeadLength ? linkWidth*zoom-arrowHeadLength : 0,
                "-webkit-transform-origin":  "0px " + "2px",
                "-moz-transform-origin": "0px " + "2px",
                "-webkit-transform": 'none',
                "-moz-transform": 'none'
            }).removeClass('right up left down').addClass(addClass).show();

            return;

        //link needs css rotation
        } else {
            // link connects each middle of the page
            oTop = (originBox[1] + originBox[3]/2 );
            oLeft = (originBox[0] + originBox[2]/2);
            dTop = (destBox[1] + destBox[3]/2 );
            dLeft = (destBox[0] + destBox[2]/2);

            var pageMidDiffX = dLeft - oLeft;
            var pageMidDiffY = dTop - oTop;
            var diffQuotient = pageMidDiffY/pageMidDiffX;

			//start/end X/Y coordinates are calculated relatively to origin page center (vector coords)

			//arrow starts on the top/bottom edge of origin page
			if( Math.abs(diffQuotient) > originBox[3]/originBox[2] ) {
				if( dTop < oTop ) {
					startY = - originBox[3]/2;
				} else {
					startY = originBox[3]/2;
				}
				startX = startY/diffQuotient;


			//arrow starts on the side edge of origin page
			} else {
				if( dLeft < oLeft ) {
					startX = - originBox[2]/2;
				} else {
					startX = originBox[2]/2;
				}
				startY = startX * diffQuotient;
			}

			//arrow ends on the top/bottom edge of origin page
			if( Math.abs(diffQuotient) > destBox[3]/destBox[2] ) {
				if( dTop < oTop ) {
					endY = pageMidDiffY + destBox[3]/2;
				} else {
					endY = pageMidDiffY - destBox[3]/2;
				}
				endX = endY/diffQuotient;

			//arrow ends on the side edge of origin page
			} else {
				if( dLeft < oLeft ) {
					endX = pageMidDiffX + destBox[2]/2;
				} else {
					endX = pageMidDiffX - destBox[2]/2;
				}
				endY = diffQuotient*endX;
			}


            // start/end X/Y coordinates are now absolute values (project coordinates) adjusted to zoom factor
            startX = (oLeft + startX)*zoom;
            startY = (oTop + startY)*zoom;
            endX = (oLeft + endX)*zoom;
            endY = (oTop + endY)*zoom;

            var linkDiffX = (endX - startX);
            var linkDiffY = (endY - startY);
            var linkWidth = Math.sqrt(linkDiffX*linkDiffX + linkDiffY*linkDiffY);
            var angle = linkDiffX < 0 ? (180/Math.PI) * Math.atan(-linkDiffY/linkDiffX) : (180/Math.PI) * Math.atan(linkDiffY/linkDiffX);

            if(linkDiffX < 0) {
                angle =  180 - angle;
            }

            $el.css({
                top: startY,
                left: startX,
                width: linkWidth > arrowHeadLength ? linkWidth-arrowHeadLength : 0,
                height: 4,
                "-webkit-transform-origin":  "0px " + "2px",
                "-moz-transform-origin": "0px " + "2px",
                "-webkit-transform": 'rotate('+ angle +'deg)',
                "-moz-transform": 'rotate('+ angle +'deg)'
            }).removeClass('right up left down').show();
        }

    },

    drawWdgToPage: function($el, originWdgBox, originPageBox, destPageBox, zoom) {
        if( link.overlapCheck(originPageBox, destPageBox) ) {
            $el.hide();
            return;
        }

        var linkWidth;
        var arrowHeadLength = 15;
        var oTop, oLeft, dTop, dLeft;
        var startX = 0, startY = 0 , endX = 0, endY = 0;

        // center of widget
        oTop =  originPageBox[1] + originWdgBox[1] + originWdgBox[3]/2 -5;// stupid +5 issue again
        oLeft = originPageBox[0] + originWdgBox[0] + originWdgBox[2]/2 -5;// stupid +5 issue again

        // center of target page
        dTop = (destPageBox[1] + destPageBox[3]/2 );
        dLeft = (destPageBox[0] + destPageBox[2]/2);

        var pageMidDiffX = dLeft - oLeft;
        var pageMidDiffY = dTop - oTop;
        var diffQuotient = pageMidDiffY/pageMidDiffX;

		//arrow ends on the top/bottom edge of origin page
		if( Math.abs(diffQuotient) > destPageBox[3]/destPageBox[2] ) {
			if( dTop > oTop ) {
				endX = pageMidDiffX - destPageBox[3]/(2*diffQuotient);
			} else {
				endX = pageMidDiffX + destPageBox[3]/(2*diffQuotient);
			}
			endY = endX * diffQuotient;
		} else {
			if( dLeft > oLeft ) {
				endX = pageMidDiffX - destPageBox[2]/2;
			} else {
				endX = pageMidDiffX + destPageBox[2]/2;
			}
			endY = diffQuotient * endX;
		}

        startX = (oLeft + startX);//*zoom;
        startY = (oTop + startY);//*zoom;
        endX = (oLeft + endX);//*zoom;
        endY = (oTop + endY);//*zoom;

        var linkDiffX = (endX - startX);
        var linkDiffY = (endY - startY);
        var angle = linkDiffX < 0 ? (180/Math.PI) * Math.atan(-linkDiffY/linkDiffX) : (180/Math.PI) * Math.atan(linkDiffY/linkDiffX);

        if(linkDiffX < 0) {
            angle =  180 - angle;
        }

        linkWidth = Math.sqrt(linkDiffX*linkDiffX + linkDiffY*linkDiffY);

        $el.css({
            top: startY,
            left: startX,
            width: linkWidth-arrowHeadLength,
            height: 4,
            "-webkit-transform-origin":  "0px " + "2px",
            "-moz-transform-origin": "0px " + "2px",
            "-webkit-transform": 'rotate('+ angle +'deg)',
            "-moz-transform": 'rotate('+ angle +'deg)'
        }).removeClass('right up left down').show();
    },

    drawDragged: function($el, originWdgBox, originPageBox, destPageBox, zoom) {
        var linkWidth;
        var arrowHeadLength = 15;
        var oTop, oLeft, dTop, dLeft;

        // center of widget
        oTop =  Math.floor(originPageBox[1] + originWdgBox[1] + originWdgBox[3]/2)*zoom -5; // stupid +5 issue again
        oLeft = Math.floor(originPageBox[0] + originWdgBox[0] + originWdgBox[2]/2)*zoom -5;// stupid +5 issue again

        // center of connectorHelper
        dTop = Math.floor(destPageBox[1] + document.getElementById('viewport').scrollTop + destPageBox[3]/2) -5 ;
        dLeft = Math.floor(destPageBox[0] + document.getElementById('viewport').scrollLeft + destPageBox[2]/2) -5 ;

        var linkDiffX = (dLeft - oLeft);
        var linkDiffY = (dTop - oTop);
        var angle = linkDiffX < 0 ? (180/Math.PI) * Math.atan(-linkDiffY/linkDiffX) : (180/Math.PI) * Math.atan(linkDiffY/linkDiffX);

        if(linkDiffX < 0) {
            angle =  180 - angle;
        }

        linkWidth = Math.sqrt(linkDiffX*linkDiffX + linkDiffY*linkDiffY);

        $el.css({
            top: oTop,
            left: oLeft,
            width: linkWidth-arrowHeadLength,
            height: 4,
            "-webkit-transform-origin":  "0px " + "2px",
            "-moz-transform-origin": "0px " + "2px",
            "-webkit-transform": 'rotate('+ angle +'deg)',
            "-moz-transform": 'rotate('+ angle +'deg)'
        })
    },

	// Draws a single link
	draw : function (canvasObj, origin, dest, type, zoom)
	{

		zoom = zoom || project.get("currentZoom") || 1;

		var oTop, oLeft, dTop, dLeft;

		var originWdgBox = [];
		var originPageBox = [];
		var destPageBox = [];

		var isDragged = ( dest.hasClass && dest.hasClass('connectorHelper') ) ? true : false;

		if( widgetsCache[origin] && widgetsCache[origin].pageId === dest ) {
			canvasObj.remove();
			return;
		}

		//if id provided and the page/widgets coordinates were already calculated
		if(typeof(origin) === 'string' && window.widgetsCache && widgetsCache[origin]) {
			//if((canvas.length == 0) ) canvas = $("<canvas>");
			originWdgBox = widgetsCache[origin].box;
			originPageBox = pagesCache[widgetsCache[origin].pageId].box;
			if(!originWdgBox || !originPageBox) return;
			if(pagesCache[dest] && pagesCache[dest].box) destPageBox = pagesCache[dest].box;
			else if(pagesCache[dest]) {
				page.calculateWdgPositions(dest);
				destPageBox = pagesCache[dest].box;
			} else {
				if( isDragged ) {
					destPageBox = [
						parseInt(dest.css("left")),
						parseInt(dest.css("top")),
						parseInt(dest.css("width")),
						parseInt(dest.css("height"))
					];
				} else {
					var oPage = $(origin).closest(".screen");
					var from = $(".page", $(oPage));
					destPageBox = [
						parseInt($(dest).css("left")),
						parseInt($(dest).css("top")),
						parseInt(from.css("width")),
						parseInt(from.css("height"))
					];
				}


			}
			//console.log('!! ', destPageBox, dest, $(dest).hasClass("connectorHelper"));
		} else {

			var oPage = $(origin).closest(".screen");
			var from = $(".page", $(oPage));
			var to = $(".page", $(dest));

			originWdgBox = [
				parseInt($(origin).css("left")),
				parseInt($(origin).css("top")),
				parseInt($(origin).css("width")),
				parseInt($(origin).css("height"))
			];

			originPageBox = [
				parseInt(oPage.css("left")),
				parseInt(oPage.css("top")),
				parseInt(from.css("width")),
				parseInt(from.css("height"))
			];

			destPageBox = [
				parseInt($(dest).css("left")),
				parseInt($(dest).css("top")),
				parseInt(to.css("width")),
				parseInt(to.css("height"))
			];
		}

		// dragging a cmLink - 25%
		if(type == "ahref" && isDragged ) {
			link.drawDragged(canvasObj, originWdgBox, originPageBox, destPageBox, zoom);
			return;

			// normal ahref at 25%
		} else if(zoom != 1) {
			link.drawPageToPage(canvasObj, originPageBox, destPageBox, zoom);
			return;

			// normal ahref @ 100%
		} else if(zoom == 1) {
			link.drawWdgToPage(canvasObj, originWdgBox, originPageBox, destPageBox, zoom);
			return;

			// something went wrong. Original comment: maybe just try draw a normal blue link?
		} else {
			return null;
		}

		if(window.intercom) intercom.updateIfNotSet('everUsedLink', true);
	},



	// takes a widget, returns its corresponding link.
	from : function(widgetId)
	{
		var links = project.get("links");

		for (var i in links.linkOrigin) // for every link in the array
		{
			if(links.linkOrigin[i] == widgetId)
			{
				return links.linkCanvId[i];
			}
		}
		return false;
	},

	// tells where a link goes to
	goesTo : function(linkId)
	{
		var links = project.get("links");

		for (var i in links.linkDest) // for every link in the array
		{
			if(links.linkCanvId[i] == linkId)
			{
				return links.linkDest[i];
			}
		}
		return false; // a link can never go nowhere!
	},

	comesFrom : function(linkId)
	{
		var links = project.get("links");
		if (links == undefined) { return false; }
        for (var i in links.linkOrigin) // for every link in the array
		{
			if(links.linkCanvId[i] == linkId)
			{
				return links.linkOrigin[i];
			}
		}
		return false; // a link can never go nowhere!
	},

    comesFromPage : function(linkId)
    {
        var links = project.get("links");
        if (links == undefined) { return false; }
        for (var i in links.linkOrigin) // for every link in the array
        {
            if(links.linkCanvId[i] == linkId)
            {
                var wId = links.linkOrigin[i];
                var wEl = $("#" + wId);
                if (wEl.size() > 0)
                {
                    return wEl.parents(".screen").attr("id");
                }
                else
                {
                    return widget.getPageOf(wId);
                }
            }
        }
        return false; // a link can never go nowhere!
    },


	// TODO: see templates for how to do links properly - propagate below!
	add : function(orig, dest, type, id, transition, trigger) // , canvId,
	{
		var links = project.get("links");

        //var transType = transition || project.get("lastTransition"); // can be null for
        //var triggerType = trigger || "tap";
        var transType = transition != undefined ? transition : project.get("defaultTransition");
        var triggerType = trigger != undefined ? trigger : project.get("defaultGesture");

		//Can be the opposite if its a back link.
		for(var l in links.linkOrigin)
		{
			if(links.linkType[l] == 'template' && links.linkOrigin[l] == orig && links.linkDest[l] == dest)
			{
				return false;
			}
		}

		//DA:11-Mar-2012: Add the class for the blue link drop highlight to the page, not to the screen
		$(".page", "#" + dest).addClass("linkDropSuccess");  // .find(".widgetHolderWrapper")
		setTimeout(function(){$(".page", "#" + dest).removeClass("linkDropSuccess");}, 500); // .find(".widgetHolderWrapper")

		var isFirstLink = project.hasLinks() ? false : true;
		var linkId = id || utils.guid("l");
		links.linkOrigin.push (orig);
		links.linkDest.push(dest);
		links.linkCanvId.push(linkId);
		links.linkType.push(type);
		links.transType.push(transType);
		links.triggerType.push(triggerType);

		//If it's the first link in the project, that makes the origin page the start page
		if (isFirstLink)
		{
			var pageEl = $("#" + widget.getPageOf(orig));
			page.makeHome(null, pageEl);
		}

		project.save();


		var canv = link.template(linkId, type, transType);
		//canv.find(".linkToggle").show();
		canv.find(".linkToggle").stop(true, true).fadeTo(300, 1.0, link.showLinkMenuIntro);
		return canv;
	},

	//gets the target page of a given link (or returns false).
	target : function(linkId)
	{
		var links = project.get("links");

		for(var i = 0; i< links.linkCanvId.length; i++)
		{
			if(links.linkCanvId[i] == linkId)
			{
				return links.linkDest[i];
			}
		}
		//console.log("No destination found for link", linkId);
		return false;
	},

	// takes the object and loads a set of links from an opening project.
	// TODO: see templates for how to do links properly - propagate below!
	load : function(links, init) //, canvCount
	{
        //if init parameter is true the loaded links will replace all current links in dom
        if(init) {
            var linksHtml = '';

            for(var i=0; i<links.linkOrigin.length; i++) {
                if( links.linkDest[i] === widgetsCache[links.linkOrigin[i]].pageId) continue;
                linksHtml += '<div id="'+links.linkCanvId[i]+'" class="link link-new"></div>';
            }

            document.getElementById('canvasLinks').innerHTML = linksHtml;
        } else {
            for(var i=0; i<links.linkOrigin.length; i++) {
                if( links.linkDest[i] === widgetsCache[links.linkOrigin[i]].pageId) continue;
                link.template(links.linkCanvId[i], links.linkType[i], links.transType[i]);
            }
        }

	},



	// DELETES A SINGLE LINK BY LINK ID
	// TODO: see templates for how to do links properly - propagate below!
	// also - obj or id - tidy up nicely. ID only comes from project.cleanup, but the obj may not exist there.
	linkArrayIndex : false,
	del : function(id)
	{
		/*function deleteOtherLinks()
		{
			if(link.linkArrayIndex)
			{
				var links = project.get("links");
				var linkOriginArr = links.linkOrigin;
				var linkWidget = linkOriginArr[link.linkArrayIndex];
				var arrayLength = linkOriginArr.length;
				
				var linkOriginPage = widgetsCache[linkWidget].pageId;
				var linkDestPage = links.linkDest[link.linkArrayIndex];
				
				for(var i = 0; i < arrayLength; i++)
				{
					var linkWidget = links.linkOrigin[i];
					var linkOrigin = widgetsCache[linkWidget].pageId;
					var linkDest = links.linkDest[i];
					if(linkOrigin == linkOriginPage && linkDest == linkDestPage)			
					{ 
						var lid = links.linkCanvId[i];
						$("#"+lid).remove();
						
						if(links.linkType[i] == "template") // if its a template, fade out and remove the template contents.
						{
							var tid = "#" + links.linkDest[i]; // the page.
							removeTemplateLinkCallback(tid);
						}
						
						//link.spliceOut(links, i); //!!!!! problem function
					}
				}
				link.linkArrayIndex = false;
			}
			else {return;}
		}*/
		
		//console.log("deleting link");
		
		function removeLinkCallback(lid)
		{
			$(lid).remove(); //if zoomed in, just delete one link
		}

		function removeTemplateLinkCallback(tid)
		{
			$(tid).find(".templateContent").empty().show();
		}
		/*
		function removeZoomedOutLinks(lid)
		{
			if(project.get("currentZoom") < 1) 
			{ 
				var lid = lid.replace(/#/,"");//remove the # from linkID
				var links = project.get("links");
				var linkCanvId = links.linkCanvId;
				link.linkArrayIndex = linkCanvId.indexOf(lid); //match to LinkOrigin
			} 
		}
		*/
		if(typeof id === "object") // an event, not passed as a string.
		{
			id = $(".openLinkMenu").closest(".link").attr("id");
		}
		
		if(id == undefined) { return false };

		var links = project.get("links");
	
		for(var i in links.linkCanvId)
		{
			if(links.linkCanvId[i] == id) // if this link is the correct one.
			{
				var lid = "#" + links.linkCanvId[i];
				/*
				if(project.get("currentZoom") < 1) 
				{
					removeZoomedOutLinks(lid); //first remove other links, then remove selected link in the zoomed out view
					break; //stop further actions.
				}
				*/
				$(lid).fadeOut(450, removeLinkCallback(lid));
			
				if(links.linkType[i] == "template") // if its a template, fade out and remove the template contents.
				{
					var tid = "#" + links.linkDest[i]; // the page.
					$(tid).find(".templateContent").fadeOut(450, removeTemplateLinkCallback(tid));
				}
				
				link.spliceOut(links, i);
				break;
			}
		}
		
		//deleteOtherLinks(); //Y.B DO NOT DELETE - TEST LINKS FUNCTIONALITY ;select links in zoomed out mode;
		
		link.closeMenu();
		hint.show("selectWidget");
		$("#canvas").click();
		
	},

	// DELETES ALL LINKS IN AND OUT OF A .page - template links.
	// IS being called for widget too?
	// TODO: see templates for how to do links properly - propagate below!
	remove : function(pg)  // could check only if a page, or need to make work for template.
	{
		var links = project.get("links");
		$(pg).each(function()
		{
			var id = $(this).attr("id");
			function fadeOutCallback(linkObj)
			{
				linkObj.remove();
			}

			for(var i in links.linkOrigin)
			{
                //obtain origin page id for each link
                if( widgetsCache[links.linkOrigin[i]] === undefined ) continue;
				var pidOn = widgetsCache[links.linkOrigin[i]].pageId;
				if(links.linkOrigin[i] == id || pidOn == id || links.linkDest[i] == id ) // or if the destination
				{
					var linkObj = $("#" + links.linkCanvId[i]);

					linkObj.fadeOut(450, fadeOutCallback(linkObj)); // needed to prevent the wrong links being deleted/
					link.spliceOut(links, i);
					link.remove(pg);	// recurse to remove any other links if one is found.
					break;
				}
			}
		});
	},

	// remove and element from the links arrays.
	spliceOut : function(links, i)
	{
		links.linkOrigin.splice(i,1);
		links.linkDest.splice(i,1);
		links.linkCanvId.splice(i,1);
		links.linkType.splice(i,1);
		links.transType.splice(i,1);
		links.triggerType.splice(i,1);
		project.save();
	},

	getCanvasHeight : function()
	{
		var originalValue = 18;
		return originalValue / link.getCanvasScale();
	},

	getHeadHeight : function()
	{
		var originalValue = 14;
		return originalValue / link.getCanvasScale();
	},

	getPadding : function()
	{
		var originalValue = 7;
		return originalValue / link.getCanvasScale();
	},

	getCanvasScale : function()
	{
		return fullCanvas.currentScale;
	},

/*  2013-05-14 BD: Most probably obsolete function, please remove as soon as version tested
	hightlightTargetPage : function(e)
	{
		clearTimeout(link.mouseTimeoutForHover);
		link.removeHighlightedPage();
		$(this).addClass("pageLinkableCandidate");
	},

	unhightlightTargetPage : function(e)
	{
		link.mouseTimeoutForHover = setTimeout(link.removeHighlightedPage, 1000);
	},
*/

	removeHighlightedPage : function(e)
	{
		$(".screen").removeClass("pageLinkableCandidate");
	},

	hideLinkMenuIntro : function()
	{
		$(this).removeClass("linkToggleIntro");
	},

	showLinkMenuIntro : function()
	{
		$(this).addClass("linkToggleIntro");
	},

	serialize: function(relObjId)
	{


		return JSON.stringify( project.get('links') );
	},

	deserialize: function(json)
	{
		var links = project.get('links');
		var newLinks = JSON.parse(json);
		
		links.linkCanvId = newLinks.linkCanvId;
        links.linkDest = newLinks.linkDest;
        links.linkOrigin = newLinks.linkOrigin;
        links.linkType = newLinks.linkType;
        links.transType = newLinks.transType;
        links.triggerType = newLinks.triggerType;

		project.save();
		link.load(links);
        link.drawAll('all');
	}
};

	


var lib = 
{
	// detach the library object when not visible? 
	// detached : null,
	cached: {}, 
	fadeInSpeed: 300,
	thumbPos: {},
	currentDisplay: "",
	drawTimeout : null,
    defaultGroup: 0,

	allDefinitions: ['common', 'android', 'wireframe', 'android4', 'ios', 'ios7', 'windows8', 'desktop', 'googleGlass'],
	loadedDefinitions: [],
	defaultDefinition: 'wireframe',

	loadDefinition: function(defName) {
		var r = new XMLHttpRequest();

		r.open('GET', 'js/fluid/data/widgets/' + defName + '.json?ver='+dbStorage.versionNumber, false);

		try {
			r.send(null);

			var response = JSON.parse(r.responseText);

			dbStorage.set('wdgDefinitions', {id: defName, data: response});

			return response;
		}
		catch (error) {
			r.responseType = 'json';

			try {
				r.send(null);
			}
			catch (e) {};

			dbStorage.set('wdgDefinitions', {id: defName, data: r.response});

			return r.response;
		}
	},

	loadWdgDefinitions: function(group) {
		//if initial load, try to fetch all definitions from indexedDb
		if(!group) {
			dbStorage.onReady(function() {
				var ids = ['groups', 'categories', 'common'].concat(lib.allDefinitions);
				dbStorage.get('wdgDefinitions', ids, function(results) {
					var defaultDef,
						commonDef,
						wdgId,
						result = results.resultsObj,
						i;

					//if no previous definition was saved, load minimal set of required ones
					if(!(result.groups || result.categories || result[lib.defaultDefinition])) {
						window.widgets = {
							g: lib.loadDefinition('groups'),
							t: lib.loadDefinition('categories'),
							summary: {}
						};

						defaultDef = lib.loadDefinition(lib.defaultDefinition);
						for(wdgId in defaultDef) {
							if(defaultDef.hasOwnProperty(wdgId)) window.widgets.summary[wdgId] = defaultDef[wdgId];
						}

						commonDef = lib.loadDefinition('common');
						for(wdgId in commonDef) {
							if(commonDef.hasOwnProperty(wdgId)) window.widgets.summary[wdgId] = commonDef[wdgId];
						}
						lib.loadedDefinitions.push(lib.defaultDefinition);
					//load all groups of widget that were found in indexedDb
					} else {
						window.widgets = {
							g: result.groups.data,
							t: result.categories.data,
							summary: {}
						};

						for(i=0; i<results.fetched.length; i++) {
							if(results.fetched[i] !== 'groups' && results.fetched[i] !== 'categories') {
								for(wdgId in result[results.fetched[i]].data) {
									if(result[results.fetched[i]].data.hasOwnProperty(wdgId)) window.widgets.summary[wdgId] = result[results.fetched[i]].data[wdgId];
								}
								lib.loadedDefinitions.push(results.fetched[i]);
							}
						}
					}

					lib.preloadBgImages();
					lib.init();
                    lib.ready = true;
                    fluid.main.trigger('libready');
				});
			});
		}

	},

    preloadBgImages: function(group) {
        //console.log('preload initiated...', group);
        if(group>widgets.g.length-1) return;

        var groupSuffix = widgets.g[(group !== undefined ? group : this.defaultGroup)].n.replace('.','_').toLowerCase();
        var image = new Image();
        image.onload = function(e){
            var nextGroup;
            if(group===undefined) nextGroup = 0;
            else nextGroup = group + 1;

            if(nextGroup == lib.defaultGroup) nextGroup++;
            //console.log('loaded: ', this, arguments, group, 'loading next: ', nextGroup);
            setTimeout(function(){
                lib.preloadBgImages(nextGroup);
            }, 300)
        };
        image.src = 'img/libBg/libBg-'+groupSuffix+'.png?ver='+dbStorage.versionNumber;
        //console.log('image: ', image, groupSuffix);

    },
	closed : function()
	{
		return $("#library").find("#tabLibrary").hasClass('closed');
	},
	
	toggle : function() // open/close
	{
		var libEl = $("#library");
		
		function animationCallback()
		{
			zoomInAndCenterOnPage(project.getActivePage(), 1, 1,300);
		}	

		var libButton = libEl.find('#tabLibrary');
		var currentWidth = libEl.outerWidth();
		
		var animateTo = (libButton.hasClass("open")) ? -currentWidth : 0;
		libEl.animate({left: animateTo}, currentWidth/3, animationCallback);
		libEl.find("#tabLibrary").toggleClass("closed open");
		
		var libToolTipText = (libButton.hasClass("closed")) ? 'Open Library' : 'Close Library';
		libButton.attr("title",libToolTipText);
	},
	
	show : function(complete)
	{
		var $library = $("#library");
		
		if (lib.closed())
		{
			$library.show();
			if (complete && $.isFunction(complete))
			{
				complete();
			}
		}
		else
		{
			if ($library.position().left != 0 || !$library.is(':visible'))
			{
				var libWidth = account.get('libraryWidth');
				$library.
					css({
						left: '-' + libWidth + 'px',
						display: 'block',
						width : libWidth
					});
				
				utils.animateRaf(
					function(progress) {
						$library.css({left : (libWidth * (progress - 1)) + 'px'});
					},
					lib.fadeInSpeed,
					'easeOutCubic',
					function() {
						//if the category is revealed for the first time or showing upload category of previous account - update the scrollbar
						if(
							$library.children("#widgets").find(".thumb").height() === 0 ||
							( lib.currentDisplay === 'Uploads' && (!lib.lastAccount || lib.lastAccount !== account.get('id')) )
							)
						{
							lib.lastAccount = account.get('id');
							lib.updateScrollbar();
						}
						if (complete && $.isFunction(complete)) {
							complete();
							lib.updateScrollbarRelative();
						}
					});
			}
		}
	},
	
	resize : function (e, ui)
	{
		var size = ui.size.width;
		account.set({libraryWidth : size});
		var active = $("#canvasPages .active");
		if(active.length == 1)
		{
			zoomInAndCenterOnPage(active, 1, 1, 300);
		}	
		lib.updateScrollbar();
        lib.updateUploadsButton();
	},
	
	setHeaderHoverIn : function(e)
	{
		//console.log("Hover in", $(this).find("h6"));
		$(this).find("h6").stop(true, true).delay(300).fadeTo(200, 1);
		setTimeout(function(){$(this).css("background", "#ccc");}, 600);
		//$(this).stop(true, true).delay(300).animate({"background-color" : "green"}, 200);
		//$(this).css("background","#acc"); //.delay(300).animate({opacity: 1}, 200);
	},
	
	setHeaderHoverOut : function(e)
	{
		//console.log("Hover out");
		$(this).find("h6").stop(true, true).hide(); //.fadeTo(200,0); // .delay(300)
		setTimeout(function(){$(this).css("background", "rgba(205,205,205,0.0)");}, 600);
		//$(this).stop(true, true).delay(300).animate({"background-color" : "transparent"}, 200);
		//$(this).css("background","none"); 
		//$(this).delay(300).animate({opacity: 0.0}, 200);
	},	
	
	collapseSection : function (e)
	{
		//console.log("collapsing", $(this), $(this).hasClass("closed"));
		var sectionCollapse = $(this).parents(".basicBG").attr("id");
		var wid = $('#'+sectionCollapse);
		var scrollbar =  wid.children(".scrollbar");
		var track =scrollbar.children(".track");	
		var thumb = track.children(".thumb");
		var top = parseFloat(thumb.css("top"));
			
		if($(this).hasClass("closed")) // open the sectin
		{
			$(this).removeClass("closed").html("Hide");
		}
		else
		{
			$(this).addClass("closed").html("Show");
		}
		
		//$(this).parent("header").siblings("ol").toggleClass("hidden");	
		$(this).parent("header").siblings("ol").toggleClass("hidden");
		$(this).parent("header").siblings(".hideButton").toggleClass("hidden");
		
		$(wid).tinyscrollbar();
	
		var over = (top + thumb.height()) - track.height();
		if(over < 0)
		{
			over = 0;
		}
		//$('#widgets').tinyscrollbar_update(top - over);
		wid.tinyscrollbar_update(top - over);	
	},
		
	updateScrollbar: function()
	{
		$('#widgets').tinyscrollbar();
	},
	updateScrollbarRelative: function() {
		$('#widgets').tinyscrollbar_update('relative');
	},

    scrollBottom: function()
    {
        $('#widgets').tinyscrollbar_update('bottom');
    },
	
	init : function()
	{
		var libSections = {};
		for (var idx = 0; idx < widgets.g.length; idx++)
		{
			var group = widgets.g[idx];
			var section = libSections[group.s];
			if (!section)
			{
				libSections[group.s] = section = []; 
			}
			section.push(group);
		}

		var divider = false;
		for (var sectionName in libSections)
		{
			$("#tmplGroupSection").tmpl({n: sectionName, d: divider}).appendTo("#widgetGroupSelect");

			var section = libSections[sectionName];
			for (var idx = 0; idx < section.length; idx++)
			{
				$("#tmplGroupSelect").tmpl(section[idx]).appendTo("#widgetGroupSelect");
			}

			divider = true;
		}
		lib.draw(widgets.g[this.defaultGroup].n);
		lib.currentDisplay = widgets.g[this.defaultGroup].n;
		widget.addUploads(); // adds the uploaded files to the widget list, must come after account.create.


		//prefetch uploadThumbs for the library
		var uploads = [];
		var accountUploads = account.get('uploads');

		if (accountUploads) {
			for(var i=0; i<accountUploads.length; i++) {
				uploads.push(accountUploads[i].id);
			}
		}

		dbStorage.onReady( function() {
			dbStorage.get('uploadThumbs', uploads, function(results) {
				if(!window.uploadThumbsCache) window.uploadThumbsCache = {};

				for(var i=0; i<results.fetched.length; i++) {
					uploadThumbsCache[results.fetched[i]] = results.resultsObj[results.fetched[i]].data;
				}
				//console.log('got uploads: ', arguments);
			});
		});

		fluid.main.on('projectNameChanged,libraryUpdateUploads', function(observable, data) {
			var libSetHolder = $("#widgets .viewport");
			data = data || {forceAllUploadsOpened: false};

			lib.cache('Uploads', data);
			if ($('#widgetGroupTitle').text() === 'Uploads') {
				libSetHolder.find(".overview").hide().remove();
				lib.cached['Uploads'].appendTo(libSetHolder);
				libSetHolder.find('.overview').show();
				lib.updateScrollbar();
			}
		});
		fluid.main.on('updateUploadCounters', function(obs, data) {
			// i know its ugly solution
			// and first antipattern that comes to my head
			// but we can't do better until we have models
			function handleProjectTab($projectTab) {
				var numberOfUploads = $projectTab.find('.libraryWidget').length;
				if (numberOfUploads === 0) {
					// hide when no uploads
					$projectTab.find('.tab-count').hide();
					$projectTab.addClass('empty');
				} else {
					$projectTab.removeClass('empty');
					$projectTab.find('.tab-count').text(numberOfUploads).show();
				}
			}

			if (data && data.projectIds) {
				// for specific projects
				data.projectIds.forEach(function(projId) {
					handleProjectTab($('#project-'+projId));
				});
			} else {
				// for all at once
				$('.projectTab').each(function(index, projectTab) {
					handleProjectTab($(projectTab));
				});
			}
			lib.updateEmptyTabs();
		});
		fluid.main.on('projectCloned, projectOpened, projectCreated, projectRemoved', function() {
			lib.redrawUpdates();
		});
		fluid.main.on('widgetDropped', function(observable, data) {
			var widgetId = data.widgetId;
			var canvas = $('[data-id="'+widgetId+'-thumb"]');
			var projectId = account.get('lastOpenProject');
			var $projectTab, $projectTabPlaceholder, $clonedWidget, $notInAny, $notInAnyWidget;
			var updatedUpload, updatedUploadJSON, img;

			if (widgetId && widgetId.length && widgetId.slice(0,1) === 'i' && projectId.length) {
				$projectTab = $('#project-'+projectId);
				$projectTabPlaceholder = $projectTab.find('.uploadTabs-project');
				$widget = $('#library [data-id="'+widgetId+'"]').first();
			} else {
				return false;
			}

			var alreadyInTab = $projectTab.find('[data-id="'+widgetId+'"]').length;

			// if item doesn't exist in this project, we have to add it
			if (!alreadyInTab) {
				updatedUpload = storage.get(widgetId);
				updatedUpload.groups = updatedUpload.groups || [];
				if ($.inArray(projectId, updatedUpload.groups) === -1) {
					updatedUpload.groups.push(projectId);

					// update storage
					storage.set(widgetId, JSON.stringify(updatedUpload));
				}

				// update DOM
				$clonedWidget = $widget.clone();
				$clonedWidget.attr('id', '');
				$clonedWidget.attr('data-id', widgetId);
				// remove empty class that hides counter
				$projectTabPlaceholder.parent().removeClass('empty');
				// append the cloned upload
				$projectTabPlaceholder.append($clonedWidget);

				$clonedWidget[0].style.backgroundImage = 'url(img/ajax-loader.gif)';
				$clonedWidget[0].style.backgroundSize = '100%';

				img = new Image();
				img.onload = lib.onUploadLoad;
				img.onerror = lib.onUploadError;

				if (updatedUpload && updatedUpload.storage !== 'db') {
					img.crossOrigin = 'Anonymous';
					img.src = imgCloudUrl + (widgets.summary[widgetId].data || widgetId) + '.png';
				}
				else {
					img.src = 'data/img/' + widgetId;
				}

				$notInAny = $('#project-notInAnyProject');
				$notInAnyWidget =  $('#project-notInAnyProject').find('[data-id="'+widgetId+'"]');
				if ($notInAnyWidget.length) {
					if ($notInAny.find('.libraryWidget').length === 1) {
						$notInAny.removeClass('active');
					}
					$notInAnyWidget.remove();
					lib.updateScrollbarRelative();
				}

				// update counters
				fluid.main.trigger('updateUploadCounters');
			}
		});
	},

	_createDragHelper : function (e) {
		var wdtId = $(this).attr('id');
		if (!wdtId) {
			wdtId = $(this).attr('data-id');
		}
		var widgObj = $.extend(true, {isHelperWidget: true}, widget.get(wdtId));
		widgObj.wh = widgObj.wh || [80,120]; // bg or not set. 

		widgObj.wh[0] = (widgObj.wh[0] == "a") ? "100%" : widgObj.wh[0]; // specific width ones?
		widgObj.wh[1] = (widgObj.wh[1] == "a") ? "100%" : widgObj.wh[1];

		if (widgObj.upload === 'y') {
			var page = storage.get(document.querySelector('.canvasObject.active').id),
				// Get the best fit size to the page (same size if the image already fits)
				newSize = utils.getFitSize({
					object: { width: widgObj.wh[0], height: widgObj.wh[1] },
					frame: { width: page.width, height: page.height }
				});

			widgObj.wh = [newSize.width, newSize.height];
		}

		widgObj.wh[0] = (typeof widgObj.wh[0] === "string") ? $("#canvasPages .active .widgetHolder").width() * parseInt(widgObj.wh[0]) / 100 : widgObj.wh[0]; // specific width ones?
		widgObj.wh[1] = (typeof widgObj.wh[1] === "string") ? $("#canvasPages .active .widgetHolder").height() * parseInt(widgObj.wh[1]) / 100 : widgObj.wh[1];

		var container = (widgObj.st && widgObj.st == 'b') ? [0,0,80,120] : [0, 0, widgObj.wh[0], widgObj.wh[1]];

		var helperContainer = $("#tmplDraggingWidgetContainer").tmpl(widgObj);
		if (widgObj.upload == 'y')
		{
			helperContainer.addClass("upload");
		}
		widget._drawFromRoot( $(this).attr('id') || $(this).attr('data-id'), helperContainer.find(".widgetParts"), container, widgObj);
		return helperContainer;
	},		

	
	dropdownChangeSet : function(e)
	{
		var top = parseFloat($("#widgets").children(".scrollbar").find(".thumb").css("top"));
		lib.thumbPos[lib.currentDisplay] = top;
		
		var category = $(e.target).text();
        setTimeout( function() {
            lib.draw(category);
            $('#widgets').tinyscrollbar_update(lib.thumbPos[category]);
            lib.currentDisplay = category;
			tracker.record("LibarySetChange" + category, 1);
        }, 10);

        e.preventDefault();
        return false;
	},

    adjustToCssClass: function(cssClass) {
        cssClass = cssClass.replace('.', '_').toLowerCase();
        return cssClass;
    },

	draw : function (group) 	// Draws or redraws the library
	{
		var groupMap = {
			'Wireframe': 'wireframe',
			'Desktop': 'desktop',
			'iOS7': 'ios7',
			'iPad': 'ios',
			'iPhone': 'ios',
			'Android-4.4': 'android4',
			'Android-Tablet': 'android4',
			'Android': 'android',
			'Google-Glass': 'googleGlass',
			'Windows-8': 'windows8'
		};

		if(groupMap[group] && lib.loadedDefinitions.indexOf(groupMap[group]) === -1) {
			var def = lib.loadDefinition(groupMap[group]),
				wdgId;
			for(wdgId in def) {
				if(def.hasOwnProperty(wdgId)) window.widgets.summary[wdgId] = def[wdgId];
			}
			lib.loadedDefinitions.push(groupMap[group]);
		}

		// TODO: replace all .librarySetActive refs with lib.currentDisplay
		//       when we are certain we are not going back to tabs

		if (group === undefined || group === null)
		{
			group = lib.currentDisplay;
		}

		$("#widgetGroupTitle").text(group);
		var oldGroup = lib.currentDisplay;
        var $library = $('#library')
            .removeClass(this.adjustToCssClass(oldGroup))
            .addClass(this.adjustToCssClass(group));
		var isUploads = group.toLowerCase() == "uploads";
		var reloadingUploads = isUploads && oldGroup.toLowerCase() == 'uploads';

		//$("#library .librarySet").removeClass("librarySetActive").filter('[data-for="' + group + '"]').addClass("librarySetActive"); // decoration
	
		var libSetHolder = $("#widgets .viewport");
		libSetHolder.find(".overview").hide().remove();
		
		if (isUploads)
		{
            if (lib.cached.hasOwnProperty(group))
            {
                delete lib.cached[group];
            }
		}

		var cached = lib.cached.hasOwnProperty(group);
		if (!cached && !reloadingUploads)
		{
			$('#libraryLoading').show();
		}

		function finishDraw()
		{
            $('#libraryLoading').hide();
			if (!cached) // if its not cached yet.
			{
				lib.cache(group);
			}

			lib.cached[group].appendTo(libSetHolder);

			if (reloadingUploads)
			{
				lib.cached[group].show();
			}
			else
			{
				lib.cached[group].fadeIn(this.fadeInSpeed);
			}
				
			//console.log("Drawing lib", account.get("uploads"), lib.cached[group]);console.trace();
			search.filter(); // will update scrollbar too. 

			lib.drawTimeout = null;
            lib.updateUploadsButton();
		}
		
		if (reloadingUploads)
		{
			finishDraw();
		}
		else
		{
			if (lib.drawTimeout)
			{
				window.clearTimeout(lib.drawTimeout);
			}

			lib.drawTimeout = window.setTimeout(finishDraw, 10); // to let the browser redraw at this point before adding lib
		}

		return false;
	},

	//after succesful upload, the library is not entirely redrawn, only new widgets are appended
	drawSingleUpload: function(uploadId, fileName) {
		var $uploadSection = $('#widgetGroupUploads');
		if( $uploadSection.length ) {
			var $newUploadThumb = $('<li id='+uploadId+' class="libraryWidget" title="Click or drag-and-drop to add" style="background-image: none;">');
			var $thumbInner = $('<div class="pageWidget" style="top:2px;left:2px;width:50px;height:50px;">');
			$newUploadThumb.append($thumbInner);
			$thumbInner.append('<canvas width="50" height="50" id="'+uploadId+'-thumb'+'"></canvas>');
			$thumbInner.append('<div class="widgetTitle">'+fileName+'</div>');

			// set BG to loading image
			var canvas = $thumbInner[0].querySelector('canvas');
			canvas.style.backgroundImage =  'url(img/ajax-loader.gif)';
			canvas.style.backgroundSize = '100%';

			$uploadSection.append($newUploadThumb);

			var img = new Image(),
				uploadObj = storage.get(uploadId);

			img.onload = lib.onUploadLoad;
			img.onerror = lib.onUploadError;

			if(uploadObj && uploadObj.storage !== 'db') {
				img.crossOrigin = 'Anonymous';
				img.src = imgCloudUrl+(widgets.summary[uploadId].data || uploadId)+'.png';
			}
			else {
				img.src = 'data/img/'+uploadId;
			}
		} else {
			lib.draw("Uploads");
		}
	},

	//upload loaded - the image will be drawn scaled onto a canvas and the image data saved in storage for future use
    onUploadLoad : function(e) {
    	var that = this;
        var id = this.src.split('/');
        id = id[id.length-1].replace('.png', '');
        //var canvas = document.getElementById(id+'-thumb') || document.querySelector('[data-id="'+id+'-thumb"]');
        var canvasElements = document.querySelectorAll('canvas[data-id="'+id+'-thumb"]');

		//just to ensure we dont draw 0x0 image while dragging it onto a page
		if( !widgets.summary[id].wh[0] ) {
			widgets.summary[id].wh[0] = this.width;
		}

		if( !widgets.summary[id].wh[1] ) {
			widgets.summary[id].wh[1] = this.height;
		}

		// create a new empty array if the widget has no groups
		if (!widgets.summary[id].groups) {
			widgets.summary[id].groups = [];
		}

        //user can close the lib before all images load
        if(canvasElements.length) {
        	Array.prototype.forEach.call(canvasElements, function(canvas) {
				// remove loading image
				canvas.style.backgroundImage = 'none';

	            var ctx = canvas.getContext('2d');
				ctx.fillStyle = '#cccccc';
				ctx.fillRect(0, 0, 50, 50);

				if( that.width === 0 && that.height === 0 ) {
					ctx.drawImage(that, 0, 0);
				} else if(that.width<=50 && that.height<=50) {
	                ctx.drawImage(that, 25-that.width/2, 25-that.height/2 - Math.max((34-that.height)/2, 0) );
	            } else {
	                if(that.width<that.height) {
	                    ctx.drawImage(that, 0, 0, 50 * that.width / that.height, 50);
	                } else {
	                    ctx.drawImage(that, 0, 0, 50, 50 * that.height / that.width);
	                }

	            }

        	});
			dbStorage.set('uploadThumbs', {id: id, data: canvasElements[0].toDataURL('image/jpeg', 0.9)}/*, function() {
				console.log('saved thumb: ', id);
			}*/);
        }
    },

    onUploadError: function() {
        if(this.src.indexOf('/data/img') === -1) {
            urlArr = this.src.split('/');
            urlArr = urlArr[urlArr.length-1].split('.');

			//chrome handles image badly when you change its src after first fail
			var img = new Image();
			img.src = 'data/img/'+urlArr[0];
            img.onload = lib.onUploadLoad;
        }
    },

    createLibOrder : function(group){
    	//var widgetsListObj = {};
    	var widgetsList = [];
        var allLibWidgets = $.extend(true,{},widgets.summary);
       	
        for (var key in allLibWidgets) {
            if(allLibWidgets.hasOwnProperty(key)) {
                //var wObj = widgets.summary[key];
                //widgetsListObj[key] = wObj.title;
                widgetsList.push(key);
            }
        }
        /*if(fluid.util._.size(widgets.summary) > 2000){
        	console.log(JSON.stringify(widgetsListObj));
        }*/
        
        var returnList = widgetsList;
        if(group == 'Desktop') { //this is a safeguard against user errors
       		var modifiedList = widgetLibOrder.createOrder();
       		if(modifiedList.length > 0){
       			returnList = modifiedList; 	
       		}
    	}
        return returnList;
    },

	cache : function(group, options)
	{
        var newSet = $('<nav class="overview" style="display:none;"></nav>');
        var sectionsContent = [];
        var tagIndex;

        // upload vars
        var $allUploadsTab = $('#uploadTabs > .allUploads');
        var currentUploadMarkup = '';
        var lastOpenProject = account.get('lastOpenProject');
        var projects = {};
        var openAllUploads = false;
        if (!$allUploadsTab.length || $allUploadsTab.hasClass('active')) {
			openAllUploads = true;
        }
		var notInAnyProject = {
			name: 'Not in any project',
			activeProject: true, // I think its a good idea to have this tab opened by defaultj
			projectElements: '',
			id: 'notInAnyProject',
			count: 0,
			empty: true,
			notInAny: true
		};
		var prepareUploadMarkup = function (upload, key) {
			var uploadMarkup = '';

			uploadMarkup += '<li data-id=' + key + ' class="libraryWidget" title="Click or drag-and-drop to add" style="background-image: none;">';
			uploadMarkup += '<div class="pageWidget" style="top:2px;left:2px;width:50px;height:50px;">';
			if (uploadThumbsCache[key]) {
				uploadMarkup += '<img width="50" height="50" data-id="' + key + '-thumb' + '" src="' + uploadThumbsCache[key] + '"/>';
			} else {
				uploadMarkup += '<canvas class="toLoad" width="50" height="50" data-id="' + key + '-thumb' + '"></canvas>';
			}
			uploadMarkup += '<div class="widgetTitle">' + upload.title + '</div></li>';

			return uploadMarkup;
		}
		// end of upload related vars

        for(var i=0; i<widgets.t.length; i++) {
            sectionsContent[i] = '';
        }

		if (group === 'Uploads') {
			account.get('projectIds').forEach(function(projectId) {
				var proj = storage.get(projectId);
				if (proj) {
					projects[projectId] = {
						name: proj.name,
						id: projectId,
						projectElements: '',
						count: 0,
						lastUpdate: proj.updated,
						empty: true
					};
				}
			});
		}

		// convert widgets.summary to array . Then sort it manually. 
		// use the array as an idexing source, instead of an object
		var widgetOrder = lib.createLibOrder(group);

		//for (var key in widgets.summary) { //OLD 
		for (var w = 0; w < widgetOrder.length; w++) {
			var key = widgetOrder[w];
			var wgtObj = widgets.summary[key];

			if (wgtObj && wgtObj.g && wgtObj.g.indexOf(group) != -1) {
				var widgetTag = wgtObj["t"];
				//tagIndex = widgets.t.indexOf(wgtObj.t[0]);
				tagIndex = widgets.t.indexOf(widgetTag[0]);

				if (widgets.summary[key].removed) continue;

				if (widgets.summary[key].upload) {
					currentUploadMarkup = prepareUploadMarkup(wgtObj, key);
					if (widgets.summary[key].groups && widgets.summary[key].groups.length) {
						widgets.summary[key].groups.forEach(function(e) {
							var proj = storage.get(e);
							if (proj) {
								projects[e] = projects[e] || {
									projectElements: '',
									id: e,
									name: proj.name,
									lastUpdate: proj.updated,
									count: 0
								};
								projects[e].projectElements += currentUploadMarkup;
								projects[e].count += 1;
								projects[e].empty = false;
							} else {
								// proj removed, add to not in any projects
								widgets.summary[key].groups = [];
								notInAnyProject.projectElements += currentUploadMarkup;
								notInAnyProject.count += 1;
								notInAnyProject.empty = false;
							}
						});
					} else {
						// update from old client version or set as 'not in any project'
						notInAnyProject.projectElements += currentUploadMarkup;
						notInAnyProject.count += 1;
						notInAnyProject.empty = false;
					}
					sectionsContent[tagIndex] += currentUploadMarkup;
				} else {
					sectionsContent[tagIndex] += '<li id="' + key + '" class="libraryWidget" title="Click or drag-and-drop to add"><div class="widgetTitle">' + wgtObj.title + '</div></li>';
				}

			}
		}

        var overviewContent = '';
        var projectArray = [];
        for(i=0; i<sectionsContent.length; i++) {
            if(sectionsContent[i] != '') {
				if (widgets.t[i] === "Uploads") {
					// prepare uploads
					if (projects[lastOpenProject]) {
						projects[lastOpenProject].currentProject = true;
						projects[lastOpenProject].activeProject = true;
					} else {
						openAllUploads = true;
					}
					projectArray.push(notInAnyProject); // to be first in the array
					var n;
					for (n in projects) {
						projectArray.push(projects[n]);
					}
					projectArray.sort(function compareNumbers(a, b) {
						return b.lastUpdate - a.lastUpdate;
					});

					if (notInAnyProject.count === 0) {
						notInAnyProject.activeProject = false;
					}


					overviewContent += fluid.util.tpl('uploadTabs', {
						projects: projectArray,
						allUploads: sectionsContent[i],
						openAllUploads: openAllUploads
					});
				} else {
					overviewContent += '<section class="setHeader"><header><h2>' + widgets.t[i] + '</h2><h6>Hide</h6></header>';
					overviewContent += '<ol id="widgetGroup' + widgets.t[i] + '">';
					overviewContent += sectionsContent[i];
					overviewContent += '</ol></section>';
				}
            }
        }

        newSet.get(0).innerHTML = overviewContent;


		if (group == 'Uploads') // upload specific section
		{
			if (account.get("loggedIn") == "yes")
			{
				$("#tmplUpload").tmpl().prependTo(newSet);
			}
			else
			{
                // DA: 30-May-2012: Add link to open Fluid Menu when user not logged in using templates
                $("#tmplUploadDisabled").tmpl().prependTo(newSet);
			}
			
			// Old image no size fix.
			// Horrible horrible
			// Chrome fix.
			newSet.find("#widgetGroupUploads img").load(function()
			{
				var $this = $(this);
				var $libWidget = $this.closest(".libraryWidget");
				var id = $libWidget.attr('id') || $libWidget.attr('data-id');
				var widgImgObj = widgets.summary[id];

				if(!widgImgObj.wh[0] || !widgImgObj.wh[1])
				{
					$this.css({'height' : 'auto', 'width' : 'auto'});
					widgImgObj.wh = [$this.width(), $this.height()];
					$this.closest(".pageWidget").css({width:widgImgObj.wh[0], height:widgImgObj.wh[1]});
					widget.scale( $this.closest(".widgetParts"), widgImgObj);
					$this.css({'height' : '100%', 'width' : '100%'});
				}
			});
			newSet.find('canvas.toLoad').each(function() {
				var $canvas = $(this);
				var id = $canvas.attr('data-id').replace('-thumb', '');
				var img = new Image();
				var upload = storage.get(id);

				img.onload = lib.onUploadLoad;
				img.onerror = lib.onUploadError;

				if (!upload || !upload.storage || upload.storage === 'cloud') {
					img.crossOrigin = 'Anonymous';
					img.src = imgCloudUrl + (widgets.summary[id].data || id) + '.png';
				} else {
					img.src = 'data/img/' + (widgets.summary[id].data || id);
				}
				$canvas.removeClass('toLoad');
			});
		}

		lib.cached[group] = newSet;

	},

    showUploads : function()
    {
        //Assumes that Uploads is the last option in the dropdown
        $("#widgetGroupSelect a:last").click();
    },

    updateUploadsButton : function(sizeLibrary) {

        var goToUploads = document.querySelector('.btnUpload'),
            shortcutForm  = document.getElementById('uploadShortcutForm'),
            size = sizeLibrary == undefined ? account.get("libraryWidth") : sizeLibrary;

        size = size == undefined ? 500 : size;

        //Upload button visible when there's enough space and the Uploads section is not selected
        if ((size > 360) && (lib.currentDisplay != "Uploads")) {

            var uploads = account.get('uploads'),
                uploadsAreInLib = false;

            // Ignore deleted uploads
            for (var i = 0; i < uploads.length; i++) {
                if (!widgets.summary[uploads[i].id].removed) {
                    uploadsAreInLib = true;
                    break;
                }
            };

            // If the user is signed in and has no uploads,
            // the form is shown to open a file picker dialogue
            if (account.get('loggedIn') === 'yes' && !uploadsAreInLib) {
                shortcutForm.style.display = '';
                goToUploads.classList.add('hide');
            }
            else {
                shortcutForm.style.display = 'none';
                goToUploads.classList.remove('hide');
            }
        }
        else
        {
            goToUploads.classList.add('hide');
            shortcutForm.style.display = 'none';
        }
    },

    resizeSteps : function(e, ui)
    {
        var size = ui.size.width;
        lib.updateUploadsButton(size);
    },

	esc : function()
	{
        if (canvas2.isEditorVisible()) {
            if (!canvas2.isZoomedOut()) {
                canvas2.zoomOut();
            }

        } else {
            //console.log("Closing with ESc");
            if ($("#previewHolder").hasClass("open")) {
                preview.close();

            } else {
                $("#accountFrame").fadeOut();
                fluidMenu.show();
            }
		}
	},
	handleUploadsRemovedFromPage : function(ids, projectId, $projectTab) {
		if (projectId && $projectTab) {
			fluid.util._.each(ids, function(id) {
				if (id && id[0] === 'i') {
					var upload = storage.get(id);
					upload.groups = fluid.util._.without(upload.groups, projectId);
					widgets.summary[id].groups = upload.groups;
					storage.set(id, upload);
					// $projectTab.find('[data-id="'+id+'"]').remove();
				}
			});
			fluid.main.trigger('updateUploadCounters');
		}
		lib.redrawUpdates();
	},
	updateEmptyTabs: function() {
		$('.uploadTabs-project').filter(function() {
			return $(this).find('li').length === 0;
		}).parent().addClass('empty');
		$('.uploadTabs-project').filter(function() {
			return $(this).find('li').length !== 0;
		}).parent().removeClass('empty');
	},
	redrawUpdates: function() {
		lib.redrawUpdates = fluid.util._.debounce(function() {
			fluid.main.trigger('libraryUpdateUploads', {
				forceAllUploadsOpened: !! $('.tabTrigger.allUploads.active').length
			});
		}, 500);

		lib.redrawUpdates();
	}
};



var hint =
{
    hints :
    {
        "createPage" : "Double-click to add pages",
        "createAnotherPage" : "Add another page",
        "editPage" : "Click page to edit",
        "library" : "Drag widgets here",
        "selectWidget" : "Select a widget",
        "libraryDoubleClick" : "Click widgets in the library to place here",
        "Zoomout" : "Click to zoom out",
        "link" : "Click link button to link pages",
        "draggingLink" : "Link to new page",
        "stoppedPreview" : "Sign in to store online"
        //"draggingLink" : "Drop the link on another page"
    },

    //linkShowCount : 3,
    //currentLocation : false,
    startedPreview : false,
    stoppedPreview : false,
    readyToSignIn : false,

    restart : function()
    {
        hint.cleanup();
        if (project.readOnly())
        {
            return;
        }

        if (!canvas2.isZoomedOut())
        {
            return;
        }

        var pages = project.get("pages");
        if (pages.length == 0)
        {
            hint.hide();
            hint.show("createPage");
            return;
        }

        if (!account.needHints())
        {
            return;
        }

        if (project.hasLinks())
        {
            if (hint.startedPreview)
            {
                hint.show("stoppedPreview");
            }
            else
            {
                if (account.get("hint"))
                {
                    hint.show(account.get("hint"));
                    return;
                }
                hint.show("droppedLink");
            }
            return;
        }

        if (pages.length == 1)
        {
            hint.show("createAnotherPage");
        }
        else
        {
            hint.show("editPage");
        }
    },

    show : function(h, t)
    {
        //console.log("Show hint: " + h); console.trace();

        function showNextHintEdit()
        {
            hint.cleanup();
            setTimeout(function(){hint.show("editPage");}, 200);
        }

        function recoverLastHintMouseWheel(e)
        {
            if (canvas2.isZoomedOut())
            {
                recoverLastHint(e);
                $("#viewport").unbind(".msg");
            }
        }

        function recoverLastHint(e)
        {
            hint.hide();
            setTimeout(hint.restart, 500);
        }

        if (((project.readOnly()) || (!account.needHints())) &&
            (h != "createPage") && (h != "library") && (h != 'selectWidget'))
        {
            hint.cleanup();
            return;
        }

        if ((project.readOnly()) && (h == "library"))
        {
            hint.cleanup();
            return;
        }


        var hintObj = $("#hint");
        if(hintObj.size() == 0)
        {
            hintObj = $("#tmplHint").tmpl();
        }

        ///if (!project.readOnly() || h == "createPage" || h == "library")
        //{
        if(h == "createPage") // start point
        {
            function hintCreatePageCallback(h)
            {
                //console.log("Showing createPage", h);
                //var content = project.get("name") + (project.readOnly() ? "" : "<br>" + h);
                //hintObj.detach().html(content).prependTo("#canvas").fadeIn(400);
                hint.resetIndicators();
                hintObj.detach().html(h).prependTo("#canvas").fadeIn(1500);
                hint.position("center");// must happen after text is set so that height can be calculated.
                //$("#createNewPage, #createNewPageButton").fadeOut(200);
                $("#createNewPage, #createNewPageButton").animate({
					opacity: 0
				}, 200);
				
				$("#createNewPage, #createNewPageButton").css("pointer-events",'none');

                //if (!project.readOnly())
                //{
                $("#canvas").bind("dblclick.msg", showNextHintCreate);
                $("#createNewPageButton").bind("click.msg", showNextHintCreate);
                //}
            }

            function showNextHintCreate()
            {
                hint.cleanup();
                setTimeout(function(){hint.show("createAnotherPage");}, 200);
            }

            $("#hint").fadeOut(300);
            setTimeout(hintCreatePageCallback, 310, hint.hints[h]);
        }
        else if(h == "createAnotherPage") // start point
        {
            hint.resetIndicators();
            hintObj.hide().detach().html(this.hints[h]).prependTo("#canvas").fadeIn(300);	//.appendTo("#viewport")
            hint.position("page");// must happen after text is set so that height can be calculated.

            $("#createNewPageButton").bind("click.msg", showNextHintEdit);
            $("#canvas").bind("dblclick.msg", showNextHintEdit);

            //hint.bindScreenClick();
            if (project.hasWidgets())
            {
                fluidMenu.setButtonStyle($("#previewView, #preview"), false);
            }
        }
        else if(h == "editPage") // start point
        {
            //if (!project.hasWidgets())
            if (!project.hasLinks())
            {
                hint.resetIndicators();
                hintObj.hide().detach().html(this.hints[h]).prependTo("#canvas").fadeIn(300);	//.appendTo("#viewport")
                hint.position("page");// must happen after text is set so that height can be calculated.
                $("#createNewPageButton").bind("click.msg", showNextHintEdit);
                $("#canvas").bind("dblclick.msg", showNextHintEdit);
                //hint.bindScreenClick();
            }
            else
            {
                hint.cleanup();
            }
        }
        else if(h == "library") // start point
        {
            function displayLibraryHint()
            {
                var currentPage = $(".screen.active");
                var currentPageId = currentPage.attr("id");
                var widgets = page.get(currentPageId, "widgets");
                if (widgets.length > 0)
                {
                    hint.hide();
                    return;
                }

            	if ($("#hint", currentPage).size() == 0) {
					hintObj.hide().detach().html(hint.hints[h]).prependTo(currentPage).fadeIn(600);
				}
				hint.position("library");// must happen after text is set so that height can be calculated.
            }

			setTimeout(displayLibraryHint, 500);
			hint.cleanup();
			$("#zoomOut").bind("click.msg", recoverLastHint);
			$('#viewport').bind('mousewheel.msg', recoverLastHintMouseWheel);
        }
        else if(h == "selectWidget") // start point
        {
            return;
            /*
            if (canvas2.isZoomedOut()) { return; }

            function displaySelectWidgetHint()
            {
                var currentPage = $(".screen.active");
                var currentPageId = currentPage.attr("id");
                var widgets = page.get(currentPageId, "widgets");
                var selected = $("#canvasPages .pageWidget.ui-selected");
                if ((project.get("links").linkCanvId.length > 0) || (widgets.length == 0) ||
                    (selected.size() > 0))
                {
                    return;
                }

                if (reset)
                {
                    hintObj.hide().detach().html(hint.hints[h]).prependTo($(".screen.active")).fadeIn(600);
                }
                hint.position("library");// must happen after text is set so that height can be calculated.
            }

            var reset = false;
            if (($("#canvas").data('zooming')) || (hintObj.text() == ""))
            {
                reset = true;
                setTimeout(displaySelectWidgetHint, 500);
                hint.cleanup();
                $("#zoomOut").bind("click.msg", recoverLastHint);
                $('#viewport').bind('mousewheel.msg', recoverLastHintMouseWheel);
            }
            else
            {
                setTimeout(displaySelectWidgetHint, 500);
            }
            */
        }
        else if(h == "link")
        {
            $("#hint").html("").hide();
            if (!project.hasLinks())
            {
                hint.resetIndicators();
                contextMenu.setButtonStyle($("#cmLink"), false, false);
            }
            else
            {
                contextMenu.setButtonStyle($("#cmLink"), true, false);
            }

            /*
             if(hint.linkShowCount <= 0)
             {
             hint.cleanup();
             return;
             }

             if(project.get("links").linkCanvId.length > 0) // we're done, dont do anything - this is called from linkDragStart each time :(
             {
             hint.show("end");
             return; // there are links, they already know how to do this, so dont draw canvas.
             }

             hint.position("default");
             hintObj.detach().hide().prependTo("#contextMenuItems").html(this.hints[h]).css({top: -41, left: -33}).fadeIn(50);
             //$("#cmLink").bounce({size: [0.33, 1.66, 1.00, 1.33, 1.00, 1.22, 1.00], delay: [0, 150, 120, 100, 100, 80, 50] });
             hint.linkShowCount--;
             */
            //fluidMenu.setButtonStyle($("#cmLink"), false);
        }
        else if(h == "draggingLink")
        {
            //Add linkable class to all other pages
            $(".screen").not(".active, .activeZooomedOut").addClass("pageLinkable");
            var pages = project.get("pages");
            if (pages.length == 1)
            {
                hint.resetIndicators();
                hintObj.hide().detach().html(this.hints[h]).prependTo("#canvas").fadeIn(300);	//.appendTo("#viewport")
                hint.position("newPage");// must happen after text is set so that height can be calculated.
            }
            else
            {
                return;
            }
            //hint.linkShowCount = 0; // prevent link popup over and over.
            /*
             if(project.get("links").linkCanvId.length > 0) // we're done, dont do anything - this is called from linkDragStart each time :(
             {
             return; // there are links, they already know how to do this, so dont draw canvas.
             }

             hint.cleanup();

             setTimeout(function() // wait till the zoom is complete to show the position
             {
             hintObj.detach().prependTo("#canvas").html(hint.hints[h]).fadeIn(600);	//.appendTo("#viewport")
             hint.position("page");// must happen after text is set so that height can be calculated.

             }, 300);
             */
        }
        else if(h == "droppedLink")
        {
            hint.hide();
            function displayHintDroppedLink()
            {
                if (project.hasLinks())
                {
                    contextMenu.setButtonStyle($("#cmLink"), true, false);
                    if (!hint.startedPreview)
                    {
                        fluidMenu.setButtonStyle($("#previewView, #preview"), true);
                    }
                    else
                    {
                        hint.show("stoppedPreview");
                        return;
                    }
                }
                else
                {
                    fluidMenu.setButtonStyle($("#previewView, #preview"), true);
                    hint.resetIndicators();
                    return;
                }
            }
            setTimeout(displayHintDroppedLink, 500);
        }
        else if(h == "startedPreview")
        {
            if (!hint.startedPreview)
            {
                function expandStopButton()
                {
                    fluidMenu.setButtonStyle($("#closePreview"), true);
                }

                fluidMenu.setButtonStyle($("#previewView, #preview"), false, false);
                hint.resetIndicators();
                hint.startedPreview = true;
                setTimeout(expandStopButton, 200);
            }
            else
            {
                return;
            }
        }
        else if(h == "stoppedPreview")
        {
            hint.startedPreview = true;
            hint.stoppedPreview = true;
            hint.readyToSignIn = true;
            fluidMenu.setButtonStyle($("#closePreview"), false, false);
            if (account.get('loggedIn') == 'yes')
            {
                hint.endTutorial();
                h = "end";
            }
            else
            {
                function displaySignInHint()
                {
                    fluidMenu.highlightButton($("#startMenu"));
                    hintObj.hide().detach().html(hint.hints[h]).prependTo("#canvas").fadeIn(600);	//.appendTo("#viewport")
                    hint.position("hud");
                }

                setTimeout(displaySignInHint, 500);
            }
        }
        else if (h == "end")
        {
            if (hint.readyToSignIn)
            {
                hint.endTutorial();
            }
        }

        //if ((h != "createPage") && (h != "library")  )
        if ((h != "createPage") && (h != "library") && (account.get("loggedIn") === 'yes') && (h != account.get('hint')) )
        {
            var tutorialLevel = h == "end" ? "1" : "0";
            account.set({ tutorialLevel : tutorialLevel, hint : h });
            //account.syncUp();
            //project.set({hint : h}); // save the current status of the project hints.
        }
        //}
    },

    resetIndicators : function()
    {
        hint.startedPreview = false;
        hint.stoppedPreview = false;
        hint.readyToSignIn = false;
    },

    endTutorial : function()
    {
        hint.cleanup();
        $("#hint").hide();
    },

    position : function(pos)
    {
        if(pos == "center") // we want it in the center of the viewport, no matter where the canvas is.
        {
            var hintWidth = 800;
            var cOffset = $("#canvas").offset();
            var viewportTLWH = utils.getTLWH("#viewport");
            var hintHeight = $("#hint").outerHeight();

            var positionTop = viewportTLWH.height/2 - cOffset.top - hintHeight/2 - 20; // just sub 100 make make it slightly above the center.
            var positionLeft = viewportTLWH.width/2 - cOffset.left - hintWidth/2;

            $("#hint").css({top: positionTop, left: positionLeft, width:hintWidth,"text-align":"center", "z-index": "" }); //, width:800
        }
        else if(pos == "page") // its offset from the first page.
        {
            function setHintNextToPage()
            {
                var page = utils.getTLWH($(".screen:last"));
                var hintWidth = 500;
                var cOffset = $("#canvas").offset();
                var viewportTLWH = utils.getTLWH("#viewport");

                var positionTop = 0 - cOffset.top + page.top - 110;
                var positionLeft = 0 - cOffset.left + page.left - 220;

                if(positionTop < 50 - cOffset.top)
                {
                    positionTop += 240;
                }

                if(positionLeft < 0 - cOffset.left)
                {
                    positionLeft += 160;
                }

                if(positionLeft > viewportTLWH.width - cOffset.left - hintWidth)
                {
                    positionLeft -= hintWidth;
                }
                $("#hint").css({top:positionTop, left:positionLeft, width:hintWidth, "text-align":"center", "z-index": "" });  // , "text-align" : "left"
            }

            //The hint has to be displayed when the canvas is zoomed out
            if ($("#canvas").hasClass("zoomedOut"))
            {
                setHintNextToPage();
            }
            else
            {
                setTimeout(setHintNextToPage, 500);
            }
        }
        else if(pos == "newPage") // its offset from the first page.
        {
            function setHintNextToNewPage()
            {
                var hintWidth = 320;
                var cOffset = $("#canvas").offset();
                var viewportTLWH = utils.getTLWH("#viewport");

                var positionTop = 0 - cOffset.top + (viewportTLWH.height / 2) - 50;
                var positionLeft = 0 - cOffset.left + viewportTLWH.width - hintWidth - 100;

                $("#hint").css({top:positionTop, left:positionLeft, width:hintWidth, "text-align":"center", "z-index": "" });  // , "text-align" : "left"
            }

            //The hint has to be displayed when the canvas is zoomed out
            if ($("#canvas").hasClass("zoomedOut"))
            {
                setHintNextToNewPage();
            }
            setTimeout(setHintNextToNewPage, 500);
        }
        else if (pos == "library")
        {
            var currentPage = $(".screen.active");
            var currentPageId = currentPage.attr("id");
            var widgets = page.get(currentPageId, "widgets");

            var padding = 10;
            var hintWidth = 320 - (2 * padding);
            var hintTLWH = utils.getTLWH($("#hint"));
            //var screen = utils.getTLWH(currentPage.find(".page"));
            var posTop = (page.get(currentPageId, "height") - hintTLWH.height - (2 * padding) - 30) / 2;
            var posLeft = (page.get(currentPageId, "width") - hintWidth) / 2;
            $("#hint").css({top: posTop, left: posLeft, width: hintWidth, "text-align": "left", padding: padding, "z-index": 2 } );
        }
        else if (pos == "hud")
        {
            var hintWidth = 450;
            var cOffset = $("#canvas").offset();
            var viewportTLWH = utils.getTLWH("#viewport");

            var positionTop = 0 - cOffset.top + 60;
            var positionLeft = 0 - cOffset.left + viewportTLWH.width - hintWidth;

            $("#hint").css({top:positionTop, left:positionLeft, width:hintWidth, "text-align":"center", "z-index": "" });  // , "text-align" : "left"
        }
        else if(pos == "default")
        {
            $("#hint").css({top:"", left:"", width:"", "text-align":"", padding: "", "z-index": "" });
        }
    },

    hide : function()
    {
		//console.log('hide'); console.trace();
        $("#hint").html("").hide();
        fluidMenu.setButtonStyle($("#previewView, #previewCloseView"), false, false);
        contextMenu.setButtonStyle($("#cmLink"), true, false);
    },

    cleanup : function() // could be far better? .msg.unbind doesnt seem to work?
    {
        hint.hide();
        $(document).unbind(".msg"); // page live
        $("#canvas").unbind(".msg"); // initial 2 canvas hints
        $("#createNewPageButton").unbind(".msg"); // initial 2 canvas hints
        $(".libraryWidget").unbind(".msg"); // widget on page.
        $("#zoomOut").unbind(".msg"); // zooming back out after widget drop
        $("body").unbind(".msg"); // initial 2 canvas hints
        $("#contextMenuItems .main").unbind(".msg");
        $("#viewport").unbind(".msg");
    }
} // end class hint

// TODO: make sure to property show/hide stuff when expanding/collapsing/etc faster than effect duration

var notification =
{
	config : {
		displayDuration : 4500,            // for how long each message appears when collapsed
		alertDisplayDuration : 9000,      // for how long an alert appears when collapsed
		alertTypes : ['alert', 'testAlert'],  // notification types that are classed as "alerts"
		alertResumeThreshold : 1000,       // minimum remaining display duration for resuming a paused notification after alert
		messageExpiration : 2000,          // how long a "read" message will be kept before it is automatically removed
		pageSize : 3,                     // messages per page
		expandMessageDelay : 30,           // time delay for showing each successive message when expanding
		fadeInDuration : 300,              // duration for all fade ins
		fadeOutDuration : 150,             // duration for all fade outs
		openDuration : 300,                // duration of opening a message to show full info
		closeDuration : 150,               // duration of closing full message info
		moveDuration : 300,                // duration of all message moving operations (after closing a message, etc)
		summaryOrientation : 'horizontal', // 'horizontal' (default) or 'vertical' orientation for summary
		summaryShowDuration : 1000,        // duration of showing the summary when a new notification is added, in collapsed mode only
		summaryFadeInDuration : 150        // duration for summary fade in on click
	},
	
	messages : [],
	alerts : [],
	summaries : {
		total : {count : 0}
	},
	
	expandedType : null,
	expandedPage : 0,
	currentMessage : null,
	currentPage : 0,
	messageTimeout : null,
	summaryTimeout : null,
	interrupted : false,
	
	init : function()
	{
		$('#tmplNotifications').tmpl({}).appendTo('body');
		
		var summaries = $('#notifications > .summaries');
		summaries.
			mouseover(function() {
				notification._stopSummaries();
			}).
			mouseout(function() {
				if (!notification.expandedType)
				{
					notification._hideSummariesDelayed();
				}
			});
		
		
		// test suite
		/*
		var playMessages = {
						
			'info' : ['Test info message', 'Moo moo!'],
			
			'testalert' : ['Test alert message. This one is long. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus.'],
			
			'alert' : ['Testy info message. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'],
			
			'error' : ['Test error message', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'],
			
			'tutorial' : ['Test tutorial message is longer than can fit on one line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.', 'Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\
								Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.\
								Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.\
								Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.']
		};
		
		var playButtons = $(document.createElement('div')).
			css({
				position : 'fixed',
				top : 10,
				left : 10,
				'z-index' : 100
			}).
			appendTo('body');
			
		$(document.createElement('button')).
			text(' Alert ').
			click(function() {
				var msg = playMessages['alert'];
				notification.add('alert', msg[0], msg[1]);
			}).
			appendTo(playButtons); 

		// Ian testing new alert variations
			
		$(document.createElement('button')).
			text(' Alert2 ').
			click(function() {
				var msg = playMessages['testalert'];
				notification.add('testAlert', msg[0], msg[1]);
			}).
			appendTo(playButtons);	

			
			
			
		$(document.createElement('button')).
			text(' Info ').
			click(function() {
				var msg = playMessages['info'];
				notification.add('info', msg[0], msg[1]);
			}).
			appendTo(playButtons);

		$(document.createElement('button')).
			text(' Error ').
			click(function() {
				var msg = playMessages['error'];
				notification.add('error', msg[0], msg[1]);
			}).
			appendTo(playButtons); 

		$(document.createElement('button')).
			text(' Tutorial ').
			click(function() {
				var msg = playMessages['tutorial'];
				notification.add('tutorial', msg[0], msg[1]);
			}).
			appendTo(playButtons); */
	},
	
	add : function(type, message, info, options)
	{
		if ($.isPlainObject(info))
		{
			options = info;
			info = undefined;
		}
		else
		{
			options |= {};
		}
		
		var msg = {
			type : type,
			message : message,
			scope : options.scope,
			permanent : Boolean(options.permanent),
            stopBuggingCallBack : options.stopBuggingCallBack
		};

        if (msg.stopBuggingCallBack != undefined)
        {
            notification.removeAll(type, msg.scope);
        }

		if ($.inArray(type, this.config.alertTypes) > -1)
		{
			this.alerts.push(msg);
			this._drawAlerts();
		}
		else
		{
			this._stopSummaries();
			
			this.messages.push($.extend(msg, {
				info : info || options.info
			}));
		
			if (this.summaries.hasOwnProperty(type))
			{
				this.summaries[type].count++;
			}
			else
			{
				this.summaries[type] = {count : 1};
			}
			
			this._updateTotal();
			this._drawMessages();
			this._drawSummaries();
		}
	},
	
	remove : function(msg)
	{
		if (!msg.removed)
		{
			if (this.currentMessage && this.currentMessage === msg)
			{
				this._stopMessages();
			}
			
			this._stopMessageExpiration(msg);
			
			var isAlert = $.inArray(msg.type, notification.config.alertTypes) > -1;
			
			if (isAlert)
			{
				this.alerts.splice($.inArray(msg, this.alerts), 1);
			}
			else
			{
				this.messages.splice($.inArray(msg, this.messages), 1);
				this.summaries[msg.type].count--;
			}
			
			this._updateTotal();

			msg.removed = true;
			if (msg.element.is(':visible'))
			{
				msg.element.fadeOut(this.config.fadeOutDuration, function() {
					msg.element.remove();
					
					if (isAlert)
					{
						if (notification.alerts.length == 0)
						{
							notification._continueInterrupted();
						}
					}
					else if (!notification.expandedType)
					{
						notification._drawNextCollapsed();
					}
				});
				
				if (this.alerts.length > 0)
				{
					// close the gap
					notification._drawAlerts();
				}
			}
			else
			{
				msg.element.remove();
			}
			
			if (!isAlert)
			{
				if (this.expandedType && this.alerts.length == 0)
				{
					var page = this._pageOfType(this.expandedType, this.currentPage);
					$(page).
						map(function() { return this.element; }).
						not(':visible').
						fadeIn(this.config.fadeInDuration);
					this._drawMessages();
				}
			
				this._drawSummaries();
			
				if (this.expandedType && this.summaries[this.expandedType].count == 0)
				{
					this.expandedType = null;
					this._hideSummariesDelayed();
				}
			}
		}
	},
	
	removeAll : function(type, scope)
	{
		if (scope && !$.isArray(scope))
		{
			scope = [scope];
		}
		
		var lists;
		if (type)
		{
			lists = [$.inArray(type, this.config.alertTypes) > -1 ? this.alerts : this.messages];
		}
		else
		{
			lists = [this.messages, this.alerts];
		}
		
		for (var listIdx = 0; listIdx < lists.length; listIdx++)
		{
			var list = lists[listIdx];
			for (var idx = list.length - 1; idx >= 0; idx--)
			{
				var msg = list[idx];
				if (!scope || $.inArray(msg.scope, scope) > -1)
				{
					this.remove(msg);
				}
			}
		}
	},
	
	expand : function(type)
	{
		if (this.alerts.length == 0)
		{
			this._stopMessages();
			this._stopSummaries();
		
			if (this.expandedType)
			{
				this.collapse(function() {
					notification.expand(type);
				})
			}
			else
			{
				this.expandedType = type;
				this.currentPage = 0;
				if (this.currentMessage)
				{
					function showMessages()
					{
						notification.currentMessage = null;
						window.setTimeout(function() {
							notification._showMessages(type);
						}, 10);
					}
				
					// TODO: don't hide if this is the bottommost message, unless it has already started fading out
					if (this.currentMessage.element.data('stopped'))
					{
						this.currentMessage.element.queue(showMessages);
					}
					else
					{
						this.currentMessage.element.fadeOut(this.config.fadeOutDuration, showMessages);
					}
				}
				else
				{
					this._showMessages(type);
				}
			}
		}
	},
	
	_showMessages : function(type, page, pageItem, bottom)
	{
		if (!page)
		{
			this._drawPager();
			
			var pageCount = this._pageCount();
			bottom = pageCount > 1 ? -1 * $('#notifications .pager').outerHeight(true) : 0;
			
			if (this.currentPage >= pageCount)
			{
				this.currentPage = pageCount - 1;
			}
		
			page = this._pageOfType(type, this.currentPage);
			pageItem = 0;
		}
		
		var msg = page[pageItem];
		this._drawMessage(msg, bottom);
		bottom -= msg.element.outerHeight();
			
		this.messageTimeout = new Timeout(this.config.expandMessageDelay, function() {
			if (pageItem < page.length - 1)
			{
				notification._showMessages(type, page, pageItem + 1, bottom);
			}
		});
	},

/*  2013-05-14 BD: Most probably obsolete function, please remove as soon as version tested
	_nextOfType : function(type, prev)
	{
		var next;
		var startIdx = prev ? $.inArray(prev, this.messages) : -1;
		if (!type || type == 'total')
		{
			if (startIdx < this.messages.length - 1)
			{
				next = this.messages[startIdx + 1];
			}
		}
		else
		{
			for (var idx = startIdx + 1, len = this.messages.length; idx < len; idx++)
			{
				var msg = this.messages[idx];
				if (msg.type == type)
				{
					next = msg;
					break;
				}
			}
		}

		return next;
	},*/

	_pageOfType : function(type, pageIdx)
	{
		var page = [];
		var pageStartRevIdx = pageIdx * this.config.pageSize;
		var pageEndRevIdx = pageStartRevIdx + this.config.pageSize - 1;
		
		if (!type || type == 'total')
		{
			var startIdx = this.messages.length - pageEndRevIdx - 1;
			page = this.messages.slice(Math.max(startIdx, 0), startIdx + this.config.pageSize);
		}
		else
		{
			var typeIdx = 0;
			for (var idx = this.messages.length - 1; idx >= 0; idx--)
			{
				var msg = this.messages[idx];
				if (msg.type == type)
				{
					if (typeIdx >= pageStartRevIdx)
					{
						page.unshift(msg);
					}
					
					if (typeIdx == pageEndRevIdx)
					{
						break;
					}
					
					typeIdx++;
				}
			}
		}
		
		return page;
	},
	
	collapse : function(callback)
	{
		this._stopMessages();
		this.expandedType = null;
		this._hideMessages(callback);
		this._hideSummariesDelayed();
	},
	
	_hideMessages : function(callback, msg, keepPager) // TODO: keepPager is most probably temporary until we change paging behaviour
	{
		if (keepPager === undefined && typeof msg == 'boolean')
		{
			keepPager = msg;
			msg = undefined;
		}
		
		if (!msg)
		{
			msg = this._prevVisible();
		}
		
		var fadeOutElems = $(msg.element);
		var prev = notification._prevVisible(msg);
		if (!prev && !keepPager)
		{
			fadeOutElems = fadeOutElems.add('#notifications .pager');
		}
		
		$.when(fadeOutElems.fadeOut(this.config.fadeOutDuration)).
			then(function() {
				if (msg.expanded)
				{
					notification._toggleInfo(msg);
				}
				
				if (!prev && callback)
				{
					msg.element.queue(function() {
						msg.element.dequeue();
						callback.call(notification);
					});
				}
			});
		
		if (prev)
		{
			this.messageTimeout = new Timeout(this.config.expandMessageDelay, function() {
				notification._hideMessages(callback, prev, keepPager);
			});
		}
	},
	
	_prevVisible : function(next)
	{
		var prev;
		var startIdx = next ? $.inArray(next, this.messages) : this.messages.length;
		for (var idx = startIdx - 1; idx >= 0; idx--)
		{
			var msg = this.messages[idx];
			if (msg.element && msg.element.is(':visible'))
			{
				prev = msg;
				break;
			}
		}
		
		return prev;
	},
	
	_drawMessages : function()
	{
		if (this.alerts.length == 0)
		{
			if (this.expandedType)
			{
				this._drawExpanded();
			}
			else
			{
				this._drawCollapsed();
			}
		}
	},
	
	_drawExpanded : function(bottom, alert)
	{
		// TODO: should be 1 pixel correction for top/bottom calculations?
		
		var iterator;
		if (alert)
		{
			iterator = {
				idx : 0,
				next : function() { return this.idx < notification.alerts.length ? notification.alerts[this.idx++] : null; }
			};
		}
		else
		{
			iterator = {
				page : this._pageOfType(this.expandedType, this.currentPage),
				idx : 0,
				next : function() { return this.idx < this.page.length ? this.page[this.idx++] : null; }
			};
		}
		
		var pageItem = 0;
		var msgBottom = bottom || 0;
		
		this._drawPager();
		if (this._pageCount() > 1)
		{
			msgBottom -= $('#notifications .pager').outerHeight(true);
		}
		
		var msg, firstMsg;
		while ((pageItem < this.config.pageSize) && (msg = iterator.next()))
		{
			if (!firstMsg)
			{
				firstMsg = msg;
			}
			
			if (!msg.removed)
			{
				if (msg.shown)
				{
					var msgTop = msgBottom - msg.element.outerHeight();
					var visible = msg.element.is(':visible');
					if (msgTop != msg.element.position().top)
					{
						if (visible)
						{
							msg.element.animate({
								top : msgTop
							}, this.config.moveDuration);
						}
						else
						{
							msg.element.
								css({top : msgTop}).
								fadeIn(this.config.fadeInDuration);
						}
					}
					else if (!visible)
					{
						msg.element.fadeIn(this.config.fadeInDuration);
					}
					msgBottom = msgTop;
				}
				else
				{
					this._drawMessage(msg, msgBottom);
					
					if (alert && !msg.permanent)
					{
						msg.timeout = new Timeout(this.config.alertDisplayDuration, (function(msg) {
							return function()
							{
								notification.remove(msg);
							};
						})(msg));
					}
					
					msgBottom -= msg.element.outerHeight();
				}
			}
			
			pageItem++;
		}
		
		if (!alert)
		{
			msg = firstMsg;
			while (msg = this._prevVisible(msg))
			{
				msg.element.fadeOut(this.config.fadeOutDuration);
			}
		}
	},
	
	_drawCollapsed : function()
	{
		if (!this.currentMessage && (!this.messageTimeout || this.messageTimeout.complete()))
		{
			for (var idx = 0, len = this.messages.length; idx < len; idx++)
			{
				var msg = this.messages[idx];
				if (!msg.removed && !msg.shown)
				{
					this.currentMessage = msg;
					break;
				}
			}
			
			if (this.currentMessage)
			{
				this._drawMessage(this.currentMessage, 0);
				this.messageTimeout = new Timeout(this.config.displayDuration, function() {
					notification._drawNextCollapsed();
				});
			}
			else
			{
				this._hideSummariesDelayed();
			}
		}
	},
	
	_drawNextCollapsed : function()
	{
		if (this.currentMessage && this.currentMessage.element && !this.interrupted)
		{
			if (this.currentMessage.element.is(':visible'))
			{
				this.currentMessage.element.fadeOut(this.config.fadeOutDuration, function() {
					var curMsg = notification.currentMessage;
					notification.currentMessage = null;
					
					if (!curMsg || !curMsg.element || !curMsg.element.data('stopped'))
					{
						notification._drawCollapsed();
					}
				});
			}
			else
			{
				notification.currentMessage = null;
				notification._drawCollapsed();
			}
		}
	},
	
	_drawAlerts : function()
	{
		var bottom = 0;
		var expMsg = this._expandedMessage();
		if (expMsg)
		{
			bottom = -1 * expMsg.element.outerHeight();
			
			if (expMsg.element.position().top != bottom)
			{
				expMsg.element.
					animate({
						top : bottom + 'px'
					}, this.config.moveDuration);
			}
		}
		
		this._interrupt(function() {
			notification._drawExpanded(bottom, true);
		});
	},
	
	_drawMessage : function(msg, bottom)
	{
		// TODO: should be 1 pixel correction for top/bottom calculations?
		
		var msgContainer = $('#notifications .messages ul');
		
		if (!msg.element)
		{
			msg.element = $('#tmplNotification').
				tmpl({
					type : msg.type,
					// TODO: getting html text to insert into template instead of dom node is a bit lame, but seems templates 
					//       don't support insertion or nodes
					text : typeof msg.message == 'string' ? msg.message : $(msg.message).html(), // TODO: maybe don't check for string to be able to
					info : typeof msg.info == 'string' ? msg.info : $(msg.info).html(),          // specify HTML in the code?
                    stopBugging : false                                                          // stopBugging : msg.stopBuggingCallBack == undefined ? false : true
				}).
				addClass('collapsed').
				click((function(msg) {
					if ($.inArray(msg.type, notification.config.alertTypes) == -1)
					{
						return function(e)
						{
							notification._toggleInfo(msg);
						};
					}
					else
					{
						return function() {};
					}
				})(msg)).
				prependTo(msgContainer);
			
			msg.element.find('.close').click((function(msg) {
				return function(e)
				{
					notification.remove(msg);
					//e.stopPropagation();
				};
			})(msg));

            //Uncomment lines to enable the button Stop Bugging me
            //if (msg.stopBuggingCallBack)
            //{
            //    msg.element.find(".stopBuggingMeLink").bind("click", msg.stopBuggingCallBack);
            //}
			
			// TODO: temporary fix for closing a notification immediately once any button inside it is clicked
			msg.element.find('input[type=submit], input[type=button], button').click((function(msg) {
				return function(e)
				{
					notification.remove(msg);
				};
			})(msg));
		}
		else
		{
			msg.element.show();
		}
		
		msg.element.
			stop(true, true).
			dequeue().
			css({
				width : msg.element.closest('div').width() - msg.element.outerWidth() + msg.element.width()
			}).
			css({ // setting width first as height depends on width
				top : bottom - msg.element.outerHeight()
			}).
			hide().
			fadeIn(this.config.fadeInDuration);
				
		msg.shown = true;
	},
	
	_pageCount : function()
	{
		return this.expandedType ? Math.ceil(this.summaries[this.expandedType].count / this.config.pageSize) : 1;
	},
	
	_drawPager : function()
	{
		var pager = $('#notifications .pager');
		var pages = pager.find('.pager-page');
		var pageCount = this._pageCount();
		
		if (pages.size() != pageCount)
		{
			pager.empty();
			for (var idx = 0; idx < pageCount; idx++)
			{
				var page = $('#tmplNotificationPage').
					tmpl({}).
					click((function(pageIdx) {
						return function() {
							notification._toPage(pageIdx);
						}
					})(idx)).
					appendTo(pager);
				
				if (idx == this.currentPage)
				{
					page.addClass('active');
				}
			}
		}
		else
		{
			pages.filter('.active').removeClass('active');
			pages.eq(this.currentPage).addClass('active');
		}
		
		if (pageCount > 1)
		{
			pager.fadeIn(this.config.fadeInDuration);
		}
		else
		{
			pager.fadeOut(this.config.fadeOutDuration);
		}
	},
	
	_toPage : function(page)
	{
		this._hideMessages(function() {
			this.currentPage = page;
			this._showMessages(this.expandedType);
		}, true);
	},
	
	_updateTotal : function()
	{
		this.summaries['total'].count = 0;
		for (var type in this.summaries)
		{
			if (type != 'total')
			{
				this.summaries['total'].count += this.summaries[type].count;
			}
		}
	},
	
	_drawSummaries : function()
	{
		var sumContainer = $('#notifications .summaries ul');
		var sumTopLeft = 0;
		var isHorz = this.config.summaryOrientation != 'vertical';
		
		for (var type in this.summaries)
		{
			var sum = this.summaries[type];
			if (sum.element)
			{
				if (sum.count > 0)
				{
					sum.element.
						children('.summary').
						text(sum.count.toString());
					
					var sumVisible = sum.element.is(':visible');
					var sumPos = sum.element.position();
					if (sumTopLeft != (isHorz ? sumPos.left : sumPos.top))
					{
						var props = isHorz ? {left : sumTopLeft} : {top : sumTopLeft};
						if (!sumVisible)
						{
							sum.element.
								css({opacity : 0.001}).
								show();
							props.opacity = 1;
						}
						sum.element.
							animate(props, this.config.moveDuration); // TODO: possibility for different durations of fade in
					}
					else if (!sumVisible)
					{
						sum.element.fadeIn(this.config.fadeInDuration);
					}
					
					if (type == 'total' && sum.element.hasClass('totalHidden'))
					{
						sum.element.
							switchClass('totalHidden', '', this.config.fadeInDuration);
					}
				}
				else
				{
					sum.element.
						fadeOut(this.config.fadeOutDuration);
				}
			}
			else if (sum.count > 0)
			{
				sum.element = $('#tmplNotificationSummary').
					tmpl({
						type : type,
						text : sum.count.toString()
					}).
					css(isHorz ? {left : sumTopLeft} : {top : sumTopLeft}).
					click((function(sum, type) {
						return function(e)
						{
							if (type == 'total' && sum.element.hasClass('totalHidden'))
							{
								notification._showSummaries();
							}
							else
							{
								if (notification.expandedType == type)
								{
									notification.collapse();
								}
								else
								{
									notification.expand(type);
								}
							}
						};
					})(sum, type)).
					hide().
					appendTo(sumContainer).
					fadeIn(this.config.fadeInDuration);
			}
			
			if (sum.count > 0 && sum.element)
			{
				sumTopLeft += isHorz ? sum.element.outerWidth() : sum.element.outerHeight();
			}
		}
	},
	
	_toggleInfo : function(msg)
	{
		this._stopMessages();
		
		var msgContainer = msg.element.find('.message .content');
		var otherMsgs;
		if (this.expandedType && !this.interrupted)
		{
			var page = this._pageOfType(this.expandedType, this.currentPage);
			otherMsgs = $(page).
				map(function() { return this.element[0]; }).
				not(msg.element);
		} 
			
		if (msg.expanded)
		{
			if (msg.element.is(':visible'))
			{
				if (otherMsgs)
				{
					otherMsgs.fadeIn(this.config.fadeInDuration);
				}
				
				var msgMargin = msg.element.outerHeight() - msgContainer.height();
				msgContainer.
					animate({
						height : msg.height
					}, {
						duration : this.config.closeDuration,
						complete : function()
						{
							notification._hideInfo(msg);
			
							if (!notification.expandedType)
							{
								notification._drawNextCollapsed();
							}
						}
					});
				
				msg.element.
					animate({
						top : this.alerts.length > 0 ? -1 * (msg.height + msgMargin) : msg.top
					}, this.config.closeDuration);
			}
			else
			{
				notification._hideInfo(msg);
			}
			
			msg.expanded = false;
			notification._startMessageExpiration(msg);
		}
		else
		{
			if (otherMsgs)
			{
				otherMsgs.fadeOut(this.config.fadeOutDuration);
			}
			
			msg.top = msg.element.position().top;
			msg.height = msgContainer.height();	
			
			msg.element.
				removeClass('collapsed').
				addClass('expanded');
			
			msgContainer.find('.info').show();
			
			var newTop = -1 * msg.element.outerHeight();
			if (this._pageCount() > 0)
			{
				newTop -= $('#notifications .pager').outerHeight(true);
			}
			if (newTop < msg.top)
			{
				msg.element.
					animate({
						top : newTop
					}, this.config.openDuration);
			}
				
			var expandedHeight = msgContainer.height();
			msgContainer.
				css({height : msg.height + 'px'}).
				animate({
					height : expandedHeight
				}, this.config.openDuration);
			
			msg.expanded = true;
		}
		
		if (this.alerts.length > 0)
		{
			msg.element.fadeOut(this.config.fadeOutDuration);
			this._drawAlerts();
		}
	},
	
	_interrupt : function(callback)
	{
		var callNow = this.interrupted;
		
		if (!callNow)
		{
			this.interrupted = true;
			
			if (this.messageTimeout && !this.messageTimeout.complete() && !this.messageTimeout.paused())
			{
				this.messageTimeout.pause();
				for (var idx = 0, len = this.messages.length; idx < len; idx++)
				{
					var msg = this.messages[idx];
					if (msg.expirationTimeout)
					{
						msg.expirationTimeout.pause();
					}
				}
			}
		
			if (this.expandedType)
			{
				callNow = Boolean(this._expandedMessage());
				if (!callNow)
				{
					this._hideMessages(function() {
						callback.call();
					})
				}
			}
			else if (this.currentMessage && !this.currentMessage.expanded && !this.currentMessage.removed)
			{
				this.currentMessage.element.fadeOut(this.config.fadeOutDuration, function() {
					callback.call();
				});
			}
			else
			{
				callNow = true;
			}
		}
		
		if (callNow)
		{
			callback.call();
		}
	},
	
	_continueInterrupted : function()
	{
		var resume = true;
		
		this.interrupted = false;
		
		if (this.messageTimeout && !this.messageTimeout.complete() && this.messageTimeout.paused())
		{
			if (this.messageTimeout.timeRemaining() >= this.config.alertResumeThreshold)
			{
				this.messageTimeout.resume();
			}
			else
			{
				this.messageTimeout.exec();
				resume = false;
			}
		}
		
		for (var idx = 0, len = this.messages.length; idx < len; idx++)
		{
			var msg = this.messages[idx];
			if (msg.expirationTimeout && msg.expirationTimeout.paused())
			{
				msg.expirationTimeout.resume();
			}
		}
		
		if (this.expandedType)
		{
			if (!this._expandedMessage())
			{
				this._showMessages(this.expandedType);
			}
		}
		else if (this.currentMessage && resume)
		{
			if (this.currentMessage.removed)
			{
				this._drawNextCollapsed();
			}
			else
			{
				this.currentMessage.element.fadeIn(this.config.fadeInDuration);
			}
		}
	},
	
	_startMessageExpiration : function(msg)
	{
		this._stopMessageExpiration(msg);
		
		msg.expirationTimeout = new Timeout(this.config.messageExpiration, function() {
			msg.element.addClass('expired');
		});
	},
	
	_stopMessageExpiration : function(msg)
	{
		if (msg.expirationTimeout)
		{
			msg.expirationTimeout.stop();
			msg.expirationTimeout = null;
		}
	},
	
	_hideInfo : function(msg)
	{
		var msgContainer = msg.element.find('.message .content');
		msgContainer.find('.info').hide();
		msgContainer.css({height : ''});
		msg.element.
			removeClass('expanded').
			addClass('collapsed');
	},
	
	_expandedMessage : function()
	{
		var expMsg;
		for (var idx = 0, len = this.messages.length; idx < len; idx++)
		{
			var msg = this.messages[idx];
			if (msg.expanded && !msg.removed)
			{
				expMsg = msg;
				break;
			}
		}
		
		return expMsg;
	},
	
	_stopMessages : function()
	{
		if (this.messageTimeout && !this.messageTimeout.complete())
		{
			this.messageTimeout.stop();
		}
		else
		{
			if (this.currentMessage && this.currentMessage.element && this.currentMessage.element.is(':animated'))
			{
				this.currentMessage.element.data('stopped', true);
			}
		}
	},
	
	_showSummaries : function()
	{
		this._stopSummaries();

		for (var type in this.summaries)
		{
			var sum = this.summaries[type];
			if (sum.element)
			{
				if (type == 'total')
				{
					sum.element.
						switchClass('totalHidden', '', this.config.summaryFadeInDuration);
				}
				else if (sum.count > 0)
				{
					sum.element.
						fadeIn(this.config.summaryFadeInDuration);
				}
			}
		}
	},
	
	_hideSummaries : function()
	{
		this._stopSummaries();
		
		var summaries = $('#notifications > .summaries');
		
		summaries.
			find('li.total').
			switchClass('visible', 'totalHidden', this.config.fadeOutDuration);
		
		summaries.
			find('li').
			filter(':not(.total)').
			fadeOut(this.config.fadeOutDuration);
	},
	
	_hideSummariesDelayed : function()
	{
		this._stopSummaries();
		
		this.summaryTimeout = new Timeout(this.config.summaryShowDuration, function() {
			notification._hideSummaries();
			notification.summaryTimeout = null;
		});
	},
	
	_stopSummaries : function()
	{
		if (this.summaryTimeout)
		{
			this.summaryTimeout.stop();
			this.summaryTimeout = null;
		}
	}
};


var search = 
{
	filter : function()
	{
		var needle = $("#searchBox").val().trim();
		var sectionCount = 0;
		
	    $("#library .libraryWidget").each(function()    									
	    {			
			var wObj = widget.get($(this).attr("id")); 
			var found = false;
			var haystack = wObj.x ? (wObj.x).slice() : [];
			if (wObj.title) haystack.push( wObj.title );
			
			var group = $(this).closest("ol").attr("id")
			if(group) haystack.push( group );
			// also add the widget's title.
			
			for(var straw in haystack)
			{
				if ( haystack[straw].search(new RegExp(needle, "i")) > -1 ) // found it.
				{
					sectionCount++;
					found = true;
					break;
				}
			}
			
			if(found)
			{
				$(this).removeClass("hidden");		
			}
			else
			{
				$(this).addClass("hidden");		
			}

	    });	
		
		//show/hide the section headers. 
		//$("#library .overview > section").not(".libraryUploads").each(function()
		$("#library .overview .setHeader").not(".libraryUploads").each(function()
		{
			if( $(this).find(".libraryWidget").not(".hidden").length > 0) 
			{
				$(this).show();	
			}
			else
			{
				$(this).hide();	
			}
		});
		
		
		//if(lib.currentGroup == 'Uploads')
		if($("#widgetGroupTitle").text() == 'Uploads')
		{
			sectionCount++;
			$("#widgetGroupUploads").parent().show();
		}
		
		if( sectionCount == 0 )
		{
			//console.log("showing emptylibdisplay", sectionCount);
			$(".emptyLibDisplay").show();
		}
		else
		{
			//console.log("asd", sectionCount);
			$(".emptyLibDisplay").hide();
		}
		
		setTimeout(lib.updateScrollbar, 10);
		//return false;
	},
	
	focus : function()
	{
		$("#searchBox").focus().select();
	}	
}

var fluidDropdownScrollbar = null;	
var color = ['orange', 'red', 'lightBlue', 'green', 'darkBlue', 'yellow']; 

//TODO: make this proper
var fluidMenu = 
{
	openDuration : 300,
	closeDuration : 300,
	
	// gotten very messy. 
	click : function(e)
	{
		var target = $(e.target);
	
		//console.log("Fluid Menu Clicked", target, e.target.id);
	
		if(e.target.id == "tsandcsLabel" || e.target.id == "tsandcs1" ||
            target.hasClass("createAccount") || target.parent().hasClass("GSWidget") ||
            target.parent().hasClass("helpButton") || target.hasClass("projectSettingsButton") ||
            target.parent().hasClass("projectSettingsButton"))
		{
			//console.log("let the signin form bubble.");
			return true;
		}
		
		//console.log("Dropdown click", e.target.tagName, target);
		
		if(e.target.tagName == "INPUT" && target.hasClass("title")) // && target.hasClass("title")
		{
			//utils.selectText(e.target);
			target.focus();
			target.select();  
			return false;
		}

		if((e.target.id == "upgradeLink") || (e.target.id.indexOf("userSettingsLink") > -1))
		{	
			//account.startUpgrade();
			//return false;
			return true; // handled by live click
		}
		
		/*if(e.target.id == "recoverPassword")
		{	
			account.recoverPassword();
			return false;
		}*/

        if ( ( (target.parent().attr("id") == "logout") || (target.attr("id") == "logout") ) )
        {
            //if(signup.loggingIn === true) return;
            account.logout();
            fluidMenu.watchSignupForm();
        }

		if(e.target.tagName == "A" && !target.hasClass("submenuLink")) // just a link - bubble.
		{
			//console.log("Bubbling a link");
			return true;
		}
		
		return false; // dont close the menu.
	},
	
	
	toggle : function()
	{
	
		if(	$("#fluidDropdown").is(":visible") )
		{
			contextMenu.place();
			fluidMenu.hide();
		}
		else 
		{
			contextMenu.place("hide");
			tracker.record("FluidMenuClicked", 5, "");
			fluidMenu.show(this);
			
		}
		widget._stopEditingText();
		return false;
	},
	
	feedbackAjaxResponse : function(response)
	{
		$("#feedbackForm").empty(); //.html("Success.");
	}, 
	
	setupFeedback : function(e)
	{
		//console.log("handleFeedbackReset");
      
		$("#feedbackForm").empty();
		var email = account.get("email");
		if(email == null || email == "New")
		{
			email = '';
		}
		
		var name = account.get("name");
		if(name == null)
		{
			name = '';
		}
		//console.log("Account data: ", name, email);
		$("#tmplFeedback").tmpl({name: name, email: email}).appendTo("#feedbackForm");
		$("#feedbackForm input").not("[type=hidden]").each(function()
		{
			validateInput(e, this);
		});	
 
		//setFocus($("#feedbackForm textarea"));
	},
	
	hide : function()
	{
		//console.log("Hiding fluid menu"); console.trace();
		if ($("#startMenu").hasClass("open"))
		{
			$("#hud").data('openMenu', false);
			$("#startMenu").removeClass("open");
		
			var $fluidDropdown = $("#fluidDropdown");
			utils.animateRaf(
				function(progress)
				{
					$fluidDropdown.css({
						'-webkit-transform' : 'scale(' + (1 - progress) + ')',
						'-moz-transform' : 'scale(' + (1 - progress) + ')'
					});
				},
				fluidMenu.closeDuration,
				'easeInOutQuad',
				function() {
					$fluidDropdown.
						removeAttr('style').
						hide();
				}
			);

			// VK 2013-03-11: irrelevant as we moved projects from menu
			//$("#trash").removeClass("shown");
            $(".messageError").hide();
            fluidMenu.resetSelectedMenu();
		}
	}, 

	show : function (t)
	{
		var evtTarget = arguments[0];

		closePopups($('#fluidDropdown'));

		$("#fluidDropdown .overview article").hide();
		
		if( $("#fluidDropdown .fluidSubmenuActive").length > 0)
		{
			var t = $("#fluidDropdown .fluidSubmenuActive").attr('data-for');
		}
		
		//console.log("t", t);

        $(".loginMessage").hide();
		$("#" + t).show();
		$("#startMenu").addClass("open");
		
		var $fluidDropdown = $("#fluidDropdown").
			css({
				'-webkit-transform' : 'scale(0.05)',
				'-moz-transform' : 'scale(0.05)'
			}).show();
		
		utils.animateRaf(
			function(progress)
			{
				$fluidDropdown.css({
					'-webkit-transform' : 'scale(' + progress + ')',
					'-moz-transform' : 'scale(' + progress + ')'
				});
			},
			fluidMenu.openDuration,
			'easeOutBack',
			function() {
				$fluidDropdown.
					removeAttr('style').
					show();

				//generate new project thumbnail if the menu was toggled from editor (not from project dash)
				if(evtTarget) {
					project.renderPreview(account.get("lastOpenProject"));
				}

			}
		);

		// VK 2013-03-11: irrelevant as we moved projects from menu
		//$("#trash").addClass("shown"); // in case project delete is needed.

		tracker.record("openFluidMenu", 5, t);

		var accType = account.get('accType');
		if (!accType || accType == 'New')
		{
			fluidMenu.watchSignupForm();
		}

		// Focus on the email input for easier log in
		if (document.getElementById('createEmail')){
			document.getElementById('createEmail').focus();
		}
	},

	watchSignupForm : function()
	{
		// when username and/or password are filled in by a browser or are autocompleted when a user starts
		// typing, the onchange event may not fire depending on browser and user actions; seems like the only
		// reliable method of detecting changes is to periodically check these text boxes for changes
		// (or we need to change the logic of checking and responding to user input during login)

		var username = $('#createEmail');
		var password = $('#createPassword');
		var both = username.add(password);

		function keyDown(e)
		{
			if (e.which) // Safari still generates an "empty" keydown for password box when it is autofilled 
			{            // after user has started typing username and autofill options are presented
				$(this).data('keyDown', true);
			}
		}

		both.on('keydown', keyDown);

		function watch()
		{
			if (!$('#fluidDropdown').is(':visible'))
			{
				// stop watching when Fluid menu closes
				both.off('keydown', keyDown);
				return;
			}

			if (username.data('lastVal') != username.val())
			{
				username.data('lastVal', username.val());
				if (!username.data('keyDown'))
				{
					validateInput.call(username.get(0));
					account.checkEmailExists(username.val());
				}
			}

			if (password.data('lastVal') != password.val())
			{
				password.data('lastVal', password.val());
				if (!password.data('keyDown'))
				{
					validateInput.call(password.get(0));
				}
			}

			both.data('keyDown', false);

			window.setTimeout(watch, 300);
		}

		watch();
	},
	
	// fluid dropdown	
	openDropdown : function (e)
	{
		//console.log("Showing dropdown");
	
	
		// this is the menu clicked.
        $(".loginMessage").hide();
		var $this = $(this);
		var tabname = $this.attr('data-for');
		var tab = $("#" + tabname);
		//TODO: dont do this every time
		//$("#tmplFeedback").tmpl({}).appendTo("#feedbackForm");

        /*
		if(tabname == "profile")
		{
			//account.displayProfile();
		}
		else if (tabname == "feedback")
		{
			fluidMenu.setupFeedback();
		}
		else if (tabname == "projects")
		{
			project.setNumber();
		}
		*/
		
		$("#fluidDropdownSubmenu a").removeClass("fluidSubmenuActive").filter("[data-for=" + tabname + "]").addClass("fluidSubmenuActive");
		$("#fluidDropdown article").not( "#" + $this.attr('data-for')).hide(); //.fadeOut(50);
		//tracker.record("tabClicked" +tabname , 1);
		tab.fadeIn(200); //.delay(50)
		//redraw();	
		
		//console.log("Updating", fluidDropdownScrollbar, abc);

        tracker.record("changeFluidMenu" + tabname, 5, tabname, e);

	},

    resetSelectedMenu : function(forceReset)
    {
        //Get currently selected menu option to properly reset the active menu depending on the user's current status
        var selectedMenuOp = $(".fluidSubmenuActive").attr("data-for");
        var requireResetMenu = forceReset || false;

        if (!requireResetMenu)
        {
            if ((account.get("loggedIn") == "no") && (selectedMenuOp != "profile"))
            {
                requireResetMenu = true;
            }
            else if (selectedMenuOp == "help")
            {
                requireResetMenu = true;
            }
        }

        if (requireResetMenu)
        {
            $(".submenuLink").removeClass("fluidSubmenuActive");
            $(".submenuLink[data-for='profile']").addClass("fluidSubmenuActive")
        }
    },

    //Toggles a hub button style from original to alternative style or visceversa
    //Param: buttons (A group of HTML elements to be manipulated wrapped as jQuery objects)
    //Param: original (bool) Sets the button to original  (By default is true)
    //Param: animation (bool) Indicates if the transition should be done with an animation  (By default is true)
    setButtonStyle : function(buttons, expand, animation)
    {
		//console.log('setBtnStyle: ',buttons, expand);
		//console.trace();
        //States
        //0: Original
        //1: Alternative
        var state = expand ? 0 : 1;
        var animate = animation == undefined ? true : animation;
        var reqStyleAttr = state == 0 ? "data-style-ori" : "data-style-alt";
        var reqTextAttr = state == 0 ? "data-text-ori" : "data-text-alt";
        //console.log("Changing button style... To: " + state + ". Animated: " + animate); console.trace();

        $.each(buttons, function(index, item)
        {
			if($(item).hasClass('hud-button')) {
				var el = $(item);
				//var reqText = el.attr(reqTextAttr);
				//console.log('aaa: ', el, expand);
				if(expand) el.addClass('expanded');
				else el.removeClass('expanded');

				return;
			}


			//legacy stuff below
            var objEl = $(".icon", $(item));
            var placeHolderEl = $(item).parent();
            var reqStyle = objEl.attr(reqStyleAttr);
            var reqText = objEl.attr(reqTextAttr);

            //If the style for the required state is defined apply it
            if ((reqStyle) && (reqStyle != ""))
            {
                var iconEl = $(".iconAvatarContainer", objEl);
                iconEl.attr("class", "iconAvatarContainer " + reqStyle);
            }

            //If the text for the required state is defined apply it and display it
            var textEl = $(".buttonText", objEl);
			//console.log(textEl, reqText, placeHolderEl);

            if ((reqText) && (reqText != "") && placeHolderEl.hasClass("hudButtonPlaceHolderCollapsed")  )
            {
                placeHolderEl.removeClass("hudButtonPlaceHolderCollapsed");
                objEl.removeClass("iconCollapsed");
                $(item).removeClass("buttonCollapsed");
				placeHolderEl.addClass(animate ? "hudButtonPlaceHolderExpanding" : "hudButtonPlaceHolderExpanded");
				objEl.addClass(animate ? "iconExpanding" : "iconExpanded");
				$(item).addClass(animate ? "buttonExpanding" : "buttonExpanded");

                textEl.text(reqText);

                textEl.addClass("textVisible")
            }
            else if ((!(placeHolderEl.hasClass("hudButtonPlaceHolderCollapsed"))) && (state == 0))
            {
                //Remove expanded space for text
				placeHolderEl.addClass(animate ? "hudButtonPlaceHolderCollapsing" : "hudButtonPlaceHolderCollapsed");
				objEl.addClass(animate ? "iconCollapsing" : "iconCollapsed");
				$(item).addClass(animate ? "buttonCollapsing" : "buttonCollapsed");
                textEl.text("");
                textEl.removeClass("textVisible");
            }

        });
    },

    removeButtonAnimation : function(e)
    {
        $(this).parent().hasClass("hudButtonPlaceHolderExpanding") ? $(this).parent().removeClass("hudButtonPlaceHolderExpanding").addClass("hudButtonPlaceHolderExpanded") : null;
        $(this).parent().hasClass("hudButtonPlaceHolderCollapsing") ? $(this).parent().removeClass("hudButtonPlaceHolderCollapsing").addClass("hudButtonPlaceHolderCollapsed") : null;
        $(this).hasClass("buttonExpanding") ? $(this).removeClass("buttonExpanding").addClass("buttonExpanded") : null;
        $(this).hasClass("buttonCollapsing") ? $(this).removeClass("buttonCollapsing").addClass("buttonCollapsed") : null;
        $(this).hasClass("iconExpanding") ? $(this).removeClass("iconExpanding").addClass("iconExpanded") : null;
        $(this).hasClass("iconCollapsing") ? $(this).removeClass("iconCollapsing").addClass("iconCollapsed") : null;

        if ($(this).hasClass("shiningLight"))
        {
            $(this).remove();
        }

        $(".buttonText").removeClass("textVisible");
    },

    //Makes a set of button shine
    //Param: buttons (A group of HTML elements to be manipulated wrapped as jQuery objects)
    highlightButton : function(buttons)
    {
        $.each(buttons, function(index, item)
        {
            $(".shiningLight", $(item)).remove();
            $("<div class='shiningLight'></div>").appendTo($(item));
            $(".shiningLight").addClass("start");
        });
    },

    setCanvasNoPages : function(includeHint)
    {
        var hideElems = $("#createNewPage, #previewView, #createNewPageButton, #preview, #pagePreview");
        if (fluid.controllers.bin.isEmpty())
        {
        	hideElems = hideElems.add($('#trash'));
        }
        //hideElems.fadeOut(300);
		hideElems.animate({
			opacity: 0
		}, 300);
		
		hideElems.css("pointer-events",'none');

        if (includeHint)
        {
            setTimeout(hint.restart, 300);
        }
    },

    setCanvasFirstPage : function()
    {
        if (!project.readOnly() && project.get('pages') && project.get('pages').length)
        {
			//$("#createNewPage, #trash, #createNewPageButton").fadeIn(300);
			$("#createNewPage, #trash, #createNewPageButton").animate({
				opacity: 1
			}, 300);
			
			$("#createNewPage, #trash, #createNewPageButton").css("pointer-events",'auto');
        }
        else
        {
            //$("#createNewPage, #createNewPageButton").fadeOut(300);
            $("#createNewPage, #createNewPageButton").animate({
				opacity: 0
			},300);

			$("#createNewPage, #createNewPageButton").css("pointer-events",'none');
//            if (fluid.controllers.bin.isEmpty())
//            {
//                $("#trash").fadeOut(300);
//            }
//            else
//            {
                $("#trash").fadeIn(300);
//            }
        }

        if (project.hasWidgets())
        {
            //$("#previewView, #preview").fadeIn(300);
            $("#previewView, #preview, #pagePreview").animate({
				opacity: 1
			}, 300);
			
			$("#preview, #pagePreview").css("pointer-events",'auto');
        }
        else
        {
            //$("#previewView, #preview").fadeOut(300);
            $("#previewView, #preview, #pagePreview").animate({
				opacity: 0
			}, 300).removeClass('expanded');
			
			$("#preview, #pagePreview").css("pointer-events",'none');
        }
    }
};













var adminConsole = 
{
	resetAll : function()
	{
		var conf = confirm("ARE YOU SURE YOU WANT TO RESET?\nAll your projects and information will be lost!");
		if(conf == true)
		{
			dbStorage.clear();
			localStorage.clear();
			//localStorage.storageCleared = true;
			window.location.reload();
			return;
		}
		$("#console").fadeOut(200);
	}, 
	
	resetCanvas : function()
	{
		project.resetCanvas();
		$("#console").fadeOut(200);
	}, 
	
	logPerformanceData : function(e)
	{
		console.log("document Events" );
		//console.log("html Events:", $('html').data() );
		//console.log("Body Events:", $('body').data() );
		//console.log("jqueryui draggable:", $.ui.draggable, $.ui.mouse ); //("ui.draggable")	
	
		console.log("Storage:", storage.tempStorage);	
		console.log("Total dom elements:  ", $("*").size());

		var eventCount = {};
		var totalCount = 0;
		$("*").each(function()
		{
			var events = $(this).data("events");
			if(typeof events != "undefined")
			{
				for(var i in events)
				{
					if(typeof eventCount[i] != "undefined")
					{
						//console.log("Event", events, events[i], i, $(this));
						eventCount[i]++;
					}
					else
					{
						eventCount[i] = 1;
					}
					totalCount++;	
				}
			}
		});
		
		console.log("EventCount: ", eventCount);
		console.log("Total events: ", totalCount);
	}
};

// handles all signing up and payment processes. 
var signup = 
{
	// hide the signup if the user is logged in. 
	hide : function()
	{
		$("#signup").hide();
	},

	show : function()
	{
		signup.toggleTabMessage();
		$("#signup").delay(500).fadeIn(500);
	},

	// opens and closes the signup tab.
	toggleTab : function()
	{
		widget.resetSelection();
		contextMenu.hide();
		propInspector.resetPropInspector();
		link.closeMenu();
		
		var isOpen = $("#signup").hasClass("open"); 
		if( isOpen ) //its open - now closing
		{
			var top = -460;	
			var text = "Save";
			var color = "";
			var signupString = "";
			
			if($("#library").hasClass("signingUpHidden"))
			{
				$("#library").removeClass("signingUpHidden").show();
			}
			
			if( $("#previewHolder").hasClass("open")) // if they come from preview land.
			{
				$("#previewHolder").fadeIn(400, function(){$("#hud, #canvas, #trash").show();});	
			}
			else //
			{
				$("#hud, #canvas, #trash").fadeIn();
			}
		}
		else // its closed - opening - start state
		{
			var top = 0;
			var text = "Not Yet";
			//var color = "#ccc";
			var signupString = "Create account or sign in or to save";
			
			var zoom = project.get("currentZoom");
			if(zoom == 1)
			{
				$("#library").addClass("signingUpHidden").hide();
			}
			$("#projectName").hide(); // no idea why this has to happen - timeout is cancelled or some such
			
			if( $("#previewHolder").hasClass("open")) // if they come from preview land.
			{
				$("#hud, #canvas, #trash").hide(); // performance , #library
				$("#previewHolder").fadeOut();
			}
			else
			{
				//$("#library").hide(); // performance
				$("#hud, #canvas, #trash").fadeOut();
			}
		}

		signup.toggleTabMessage();
		return false;
	},
	
	// Sets the right message on the signup tab. 
	toggleTabMessage : function()
	{
		var text= "Later";

		if(!$("#signup").hasClass("open"))
		{
			if($("#previewHolder").hasClass("open"))
			{
				text = "View on Mobile";
			}
			else
			{
				text = "Save";
			}
		}
	},
	
	submit : function(e)
	{
		$('#canvas').removeClass('loaded');
        //Validate that the form is correct before submitting
        var numInputs = $(this).find("input").not("[type=hidden], [type=submit]").length ;
        var correctInputs =  $(this).find(".formCorrect").length ;
        var button = $(".createAccount");

		//console.log('submit...', correctInputs);
        if ((correctInputs < numInputs) || (button.hasClass("inactive")))
        {
            return false;
        }
		
        var data = $(this).serialize();

        signup.ajaxProcessing();

		$.ajax({
			url: "./index.php",
			type: "POST", 
			data: data, 
			timeout : 15000, 
			success: signup.ajaxSuccess, 
			error: signup.ajaxError, // "abort", "timeout", "No Transport"
			timeOut: signup.ajaxProcessingTimeout,
			// complete
		});

        //Track info about the user being logged...
        // var source = "FluidMenu";
        // if ($("#previewSignupForm:visible").size() > 0)
        // {
            // source = "Preview";
        // }
        // var email = $("input[type='email']", $(this)).val();
        // tracker.record("signUpVia " + source, 1, email, e);
	},
	
	ajaxProcessing : function()
	{
        //account.setLoadingStep(0);
        //console.log("Ajax Processing", $(".signupForm .createAccount"));
        //DA: 21-May-2012: Customize button text according to the requested action
        var $button = $(".createAccount");
        var newText = "Signing in...";
        if ($button.val().indexOf("Create") > -1)
        {
            newText = "Creating new account...";
        }
		$button.val(newText).addClass("inactive");
        $(".messageError").hide();
        signup.loggingIn = true;
	},
	
	// ajax sends a response
	ajaxSuccess : function(data, textStatus, jqXHR)
	{
        var el = $(".createAccount");
        var text = el.attr("data-label");
		//console.log("Signup ajax successful!!  Data: " + data + ". Text Status: " + textStatus + ". END. " + jqXHR.responseText + ". Last Suppper: ", jqXHR);

		try
		{	
			var result = JSON.parse(jqXHR.responseText);
		}
		catch(e)
		{
			//notification.add("error", "A server error has occurred - please try again.");
            //console.log("Returned object. response Text: ", jqXHR.responseText);
            $(".loginErrorUnknown").fadeIn(1000);
            el.removeClass("inactive").val(text);
			return false;
		}
		
		//console.log("Returned object", result);
		
		// handle the possible errors
		if(result.r != "s")
		{
			/* We now get back a different ID instead.
			if(result.r == "errIdExists") // give them a different id. 
			{
				//console.log("Did not successfully register the user - id already exists.");
			}
			else 
			*/
			if(result.r == "passwordFail")
			{
				//notification.add("alert", "Email and password do not match - please try again.");
                $(".loginErrorWrongPass").fadeIn(1000);
			}
			else
			{
				//notification.add("alert", "An unknown error has occurred - please try again.");
                $(".loginErrorUnknown").fadeIn(1000);
			}

			//$(".createAccount").removeClass("inactive").val("Ready");
            el.removeClass("inactive").val(text);
			return false;
		}
		
		//console.log("Signup action was successful - login or signup", result.a);

        fluidMenu.setButtonStyle($("#startMenu"), false);
        $(".createAccount").removeClass("inactive").val("Loading elements...");
        
		var source = "FluidMenu";
		if ($("#previewSignupForm:visible").size() > 0)
		{
			source = "Preview";
		}

		switch(result.a)
		{
			case 'create':
                signup.handleSuccess(result);
				tracker.record("signUpVia" + source, 1, result.Email, "");
                notification.add("alert", "Your account was created successfully. Your work will be automatically saved from now on.");
                break;
			case 'login': 
				tracker.record("login", 1, result.Email, "");
				account.login(result);
				break; // can happen even when the submitted action is signup	
        }

		fluid.util._.each(document.querySelectorAll('form.createForm'), function (form) {
			form.reset();
		});
		
		return false;
	},

	ajaxProcessingTimeout : function()
	{
        signup.loggingIn = false;
		//console.log("Timeout.");
		//do more here
        account.setLoadingStep(5);
	},
	
	//("success", "notmodified", "error", "timeout", "abort", or "parsererror"
	ajaxError : function(jqXHR, textStatus, errorThrown)
	{
        signup.loggingIn = false;
        account.setLoadingStep(5);
		//console.log("Signup ajax error",jqXHR, jqXHR.responseText, textStatus, errorThrown);
		
		if(!textStatus == "timeout" && !textStatus == "abort" && !textStatus == "No Transport") 
		{
			textStatus = "Error";
		}
		
		//$(".signupForm .createAccount").val(textStatus + "...please try again");
	}, 
	
	
	handleSuccess : function(result)
	{
		//console.log("Handling successful registration", result.accountId);
		account.register(result);

        $('#canvas').addClass('loaded');
		var open = account.get("lastOpenProject");
		project.sync(open);
		project.drawThumbnail(open);
		$('body').addClass('signed-in');
        fluidMenu.setButtonStyle($("#startMenu"), false);
        $("#previewSignup").hide();
        preview.displaySharePanel();

        // update uploads
		var currentLib = $("#widgetGroupTitle").text();
		if (currentLib == "Uploads") {
			lib.draw(currentLib);
		}
	},
	
	// no longer used.
	closeAfterCompleting : function()
	{
		//console.log("Closing tab after completing. ");
		signup.toggleTab();
		$("#signup").fadeOut(); // no longer used at all. 
		$("#startMenu").fadeIn();
	}
	
}


// solution for page frame being removed at project.close - not neat.
// not live events!
function userActionsInit2()
{
	// Page submenu.
	$("#pageFrame").click(function(e)
	{
		widget.resetSelection();
		contextMenu.hide();
		propInspector.resetPropInspector();
		widget._stopEditingText();
		snap.closeSnapSettings();
		//if(e.target.id == "pageFrame") // clicked specifically on the frame
		//{
		if(e.target.className == "pageBackground")
		{			
			page.hideOptionsMenu();
			
			//YURI quick hacky fluid menu closing fix
			if(	$("#fluidDropdown").is(":visible") )
			{
				fluidMenu.hide();
			}
		}

		return false;
	});	 	//$("#pageNote").click(false);	

    $(".icon", "#pageSettingsMenuContainer").click( page.pageMenuClick );
    $("#pageMenus").
    	click( page.pageMenuClick).
    	mousedown(function(event) {
    		event.stopPropagation();
    	});
    $("input", "#pageMenus").click(function(){ return false;});

	$('#pageNote textarea').blur(function (event) {
			page.saveNotesInput();
	});

	// Page frame buttons
	$("#pageMenuToggle").click(page.toggleOptionsMenu);	  // no false		
	$("#pageAddNote").click(page.toggleNotes);
	$("#pageDuplicate").click(/*page.duplicate*/ fluid.command.helper.createEventHandler('fluid.controllers.page', 'clone'));
    $("#pageDelete").click(/*page.deleteManual*/ fluid.command.helper.createEventHandler('fluid.controllers.page', 'delete'));
	$("#snapSettings").click(page.toggleSnapSettings);
	$("#DeviceSizeTmpl").bind("change", /*project.setDevice*/ fluid.command.helper.createEventHandler('fluid.controllers.page', 'settingDevice') );

	$('#deviceSettingsLink').on('click', fluid.util.debounce(function () {
        userSettings.openMenuAfterExit = false;
        projectSettings.actionSelectProject(projectSettings.getItemById(project.get("id")));
		projectSettings.goToValues();
		userSettings.open(null, $("#projectSettingsPanelMain"));
		setTimeout(function() { userSettings._fixCloseButton(false) }, 500);
	}, 500));

	//$("#CustomSize").click(page.SwithsizeOptions);
	// Page menu options
    $(".inputPageTitle").live("blur", page.updatePageName);
	$(".makeHomepage").click(/*page.makeHome*/ fluid.command.helper.createEventHandler('fluid.controllers.page', 'settingHomePage'));	// no false
	//$(".makeTemplate").click(function(){console.log("Making a template");});	
	$(".orientationSelector2").change(project.orient); // no false
    $(".buttonSwitchContainer.pageMenu .buttonSwitch").click(/*page.orient*/ fluid.command.helper.createEventHandler('fluid.controllers.page', 'settingOrientation')); // no false
	$(".screenSize").bind("change", project.changeScreenSize); // no false.

	$(".pageSize.rangeWidget").on("change", /*page.manualResize*/ 
		fluid.command.helper.createEventHandler('fluid.controllers.page', 'settingCustomPageSize')
	); // no false

	$(".customDeviceSize.rangeWidget").on('change',
		fluid.command.helper.createEventHandler('fluid.controllers.page', 'settingDevice')
	);
	
	//$(".pageSize").bind("blur", page.manualResize); // no false
    //$("#uploadButton").click(lib.toggleUploads);
    $(".btnUpload").click(lib.showUploads);
	//$(".page").live("dblclick", function(){return false;}); // now handled in canvas dbl click.
	//$(".pageTitle").live("dblclick", utils.selectText);	
	//$(".pageTitle").live("blur", page.updatePageName);		 // id of page

	
	// Yuri Grid and snap settings
	$("#gridSwitchOn, #gridSwitchOff").click(/*grid.toggle*/ fluid.command.helper.createEventHandler('fluid.controllers.page', 'settingGridToggle'));	//$("#gridSpaceSlider").live("change", grid.changeGridSpacing);
	$("#gridSpaceSlider").draggable({
			//grid:[2,1],
			axis: "x",
			drag: grid.changeGridSpacing,
			containment: "parent"
			});
	$("#gridSliderArea").click(grid.sliderPosClick);
	
	
	//$("#gridSpacingInput").live("keyup", grid.keyInGridSpacing);
	//$("#gridSpacingInput").click(grid.selectInputText);
	
	$("#snapSwitchOn, #snapSwitchOff").click(snap.toggle);
}

function userActionsInit()
{
	$('.shareSend').attr('disabled', '');

	$(document).on('input', '.shareSendMailReceipients', function (event) {
		var valid = /[-!#$%&'*+/=?^_`{|}~a-z0-9]+@[-_.a-z0-9]+[.][a-z][a-z]+\s*$/i.test($(this).val())
					&& event.target.validity.valid;

		if (valid) {
			$('.shareSend').removeAttr('disabled');
		}
		else {
			$('.shareSend').attr('disabled', '');
		}
	});

	//////////////////////////////////////////////////////////////
	// Login/Out  // form class?
	$(".form input").
		live("change", validateInput).
		live("blur", validateInput);   // account login in fluid menu

	//////////////////////////////////////////////////////////////
	// Signup/signin/logout form
	$(".createForm [type=email]").live('change', function(e) {account.checkEmailExists($(e.target).val());});
	//$(".createForm [type=email]").click(autoFillEvent.startCheck);  // this doesn't seem to work correctly
	$(".recoverPassword").live('click', function(){
		account.recoverPassword();
		return false;
	});

	//////////////////////////////////////////////////////////////
	// HUD - preview, fluid menu, library in their own sections. 
	$("#trash, #trashIcon")
		.droppable({
			accept: function (element) {
				return (element.hasClass('project')
					|| element.hasClass('screen')
					|| element.hasClass('pageWidget')
					) && $(this).hasClass('droppableStyle');
			},
			greedy: true,
			tolerance: 'touch',
			drop: deleteObject
		})
		.click(function(e) {
			fluid.command.create('toggle').dispatchTo('fluid.controllers.bin');
			e.stopPropagation();
		});
		
	$("#zoomOut").click(canvas2.zoomOut);
	$("#closeDropzone").click(upload.hide);

	$(".createForm").live("submit", signup.submit);
	
	$(".shareSendMail").live("submit", ajax.submit);
	$(".sharePreviewExternal").live({ click: share.actionPreviewExternal });
	//$("#previewMail").ajaxSuccess(preview.mailClear)
	$("#continueProject").live("click", signup.closeAfterCompleting);

	//////////////////////////////////////////////////////////////
	// Fluid Menu
	$('#startMenu').click(fluidMenu.toggle);
	$("#resetEmail").live("click", fluidMenu.setupFeedback);
	$("#fluidDropdownSubmenu > a, #projects a").click(fluidMenu.openDropdown); // integrate with below.
	//$("#accountFrame").change(function(){alert();if($(this).is(":visible")){tracker.record("closeAccountFrame", 1);}	})

	// use $().on('click',... instead of $().click so that it
	// doesn't take precedence over listeners that are delegated to elements below/within #fluidDropdown
	$(document).on('click', '#fluidDropdown', fluidMenu.click);

	$('#upgradeLink').live({click: userSettings.goToUpgrade});
	$('#uploadSignUpLink').live({
		click: function (e) {
			fluidMenu.show();
			e.stopPropagation();
		}
	});

	$(document.body).on('click', '.alertLinkToSettings', fluid.util._.debounce(function (e) {
				projectSettings.lastSelectedId = project.get('id');
				project.sync();
				projectSettings.goToSettingsUpdate();
				userSettings.open(null, $("#projectSettingsPanelSettings"));
			}, 300, true));

	$(document.body).on('click', '.alertLinkToMenu', function (e) {
		contextMenu.place("hide");
		fluidMenu.show(this);
	})

	//////////////////////////////////////////////////////////////
	// Context Menu      		
	 // move to init!
	
	$("#contextMenuItems").draggable({ // drag the cm
		handle: '.drag-handler', 
		distance: 5,
		containment: "#viewport",  // doesnt work for bottom, right for some reason.
		start: contextMenu.dragStart,
		stop: contextMenu.dragStop
	});

	$("#cmLink2")
		.draggable({
			helper: cmLink2Helper,
			distance : 5,
			cursorAt: { left: 0, top: 0 },
			cursor: "url(img/cursorGrabbing.gif), crosshair", 
			containment: "#viewport",
			start: link.dragStart,
			drag: link.drag,
			stop: link.dragStop,
			appendTo: 'body'
		});
	
	// 8 events!
	$(".subExpander").parent().hover( // when hovering on a CM item, show its submenu expander.
		function(){$(this).find(".subExpander").stop().fadeTo(50, 1.0);}, 
		function(){$(this).find(".subExpander").show().stop().fadeTo(800, 0.0);
	});

	// Context Menu Property Inspector.    
	
	$('#propInspectors').click(function(evt)
	{
		widget._stopEditingText();
		//if( evt.target.id != 'ufd-textSize' )propInspector.hideEditableCombo();
		return false;
	});

	$('#shapeOpacitySlider, #textOpacitySlider').slider({
		range: 'min',
		min: 0,
		max: 100,
		step: 1,

		slide: propInspectorCtrl.sliderInput,
		change: propInspectorCtrl.sliderInput,
		stop: propInspectorCtrl.sliderChanged
	});

	$('#propInspectors .rangeWidget').on('change', function (e) {
		propInspectorCtrl.applyChangedField($(e.target));
	});

	$('.customDeviceSize .rangeWidget').on('change', function (e) {
		
	});
	
	$(".rangeWidget .decreaseNumber, .rangeWidget .increaseNumber")
		.on('mousedown' , rangeWidget.mouseDown)
		.on('mouseup'	, rangeWidget.mouseUp)
		.on('mouseleave', rangeWidget.mouseUp);

	$(".numberInput").live("keyup",propInspectorCtrl.changeShapeProps).click(propInspectorCtrl.selectNumberValue);

	//$('#shapeBorderStyle').change(propInspector.selectChanged);
	$('#textSize').change(propInspectorCtrl.selectChanged);
	$('#textFont').change(propInspectorCtrl.selectChanged);

	$('#propContainer .checkbox').click(propInspectorCtrl.toggleCheckboxStyle);	$('#propContainer .radio').click(propInspectorCtrl.toggleRadioStyle);	
	$('#propContainer .hozontalAlignment').click(propInspectorCtrl.togglehozontalAlignment);
	// pass on ctrl/meta + y/z, as some input elements capture it
	$('.inspectorInner input[type=number], .inspectorInner input[type=range]').keydown(function(e) {
		if ((e.ctrlKey || e.metaKey) && (e.keyCode == 89 || e.keyCode == 90))
		{
			e.currentTarget.blur();
			e.target = document.body;
			$(document.body).trigger(e);
			e.preventDefault();
			return false;
		}
	});
	$('#textTop').change(propInspector.sliderInput);
	$("#contextMenu2").click(function(e)
	{
		//deactivation of the cm for the time of the action
		if($(this).hasClass('cm-inactive')) {
			return false;
		}
		$(this).addClass('cm-inactive');

		function clickHandler(linkedButtonId)
		{
			var newTime = new Date().getTime();
			if(userActionsInit.lastAction)
			{
				var oldTime = userActionsInit.lastAction.oldTime;
				var oldAction = userActionsInit.lastAction.clickedButton;
			}
			else
			{
				var oldTime = newTime;
				var oldAction = linkedButtonId;
			}
			
			var timeDifference = newTime - oldTime;
			
			var clickedButton = (timeDifference < 1000) ? oldAction : linkedButtonId;
			return clickedButton;
		}
		
		var orig = e.originalEvent;
        var linkedButtonId = $(e.target).hasClass("icon2") ? $(e.target).attr("id") : $(e.target).parent().attr("id");
		//var clickedButton = clickHandler(linkedButtonId);
		var clickedButton = (linkedButtonId === 'fixedWidgMenuHolder') ? setTimeout(clickHandler(linkedButtonId),10) : clickHandler(linkedButtonId);
		
		var oldTime = new Date().getTime();
		userActionsInit.lastAction = {clickedButton : linkedButtonId, oldTime : oldTime};

		var widgetCommand;
		var groupCommand;
		//switch(linkedButtonId)
		switch(clickedButton)
		{
			case "cmAlignLeft":   contextMenu.cmAlign(orig, 'left'); break;
			case "cmAlignRight":  contextMenu.cmAlign(orig, 'right'); break;
			case "cmAlignTop":    contextMenu.cmAlign(orig, 'top'); break;
			case "cmAlignBottom": contextMenu.cmAlign(orig, 'bottom'); break;
			case "cmAlignMiddle": contextMenu.cmAlign(orig, 'middle'); break;
			case "cmAlignCenter": contextMenu.cmAlign(orig, 'center'); break;
			
			case "cmFront":    contextMenu.cmZAlign(orig, 'toFront'); break;
			case "cmBack":     contextMenu.cmZAlign(orig, 'toBack'); break;
			case "cmFrontOne": contextMenu.cmZAlign(orig, 'frontOne'); break;
			case "cmBackOne":  contextMenu.cmZAlign(orig, 'backOne'); break;
			
			case "cmCut":   widgetCommand = 'cut'; break;
			case "cmCopy":  widgetCommand = 'copy'; break;
			case "cmPaste": widgetCommand = 'paste'; break;
			
			case "cmDelete": deleteObject("delete"); break;
			case "cmDuplicate": widgetCommand = 'clone'; break;
			case "cmAddSegment": widgetCommand = 'addSegment'; break;
			case "cmDeleteSegment": widgetCommand = 'deleteSegment'; break;
			case "cmLink": contextMenu.linkClickDragStart(orig); break;
			case "cmReplaceToggle": contextMenu.toggleReplace(orig); break;
			case "cmFit100": widget.fit100(); break;
			case "cmFitToPage": widget.fitExpand(); break;
			
			case "unfixedWidget" : staticWidgets.toggleStaticWidgetMenu(); break;
			case "fixedWidget" : staticWidgets.toggleStaticWidgetMenu(); break;

			case "menuExpander": propInspector.toggle(orig); break;
			case "textMenuExpander": propInspector.toggle(orig); break;
			case "cmWidgGroups" : groupCommand = "groupWidgets"; break;
			case "cmUngroupWidgets" : groupCommand = "ungroupWidgets"; break;
			// case "cmWidgUngroup";
		}

		if (widgetCommand)
		{
			fluid.command.create(widgetCommand, {event: orig}).dispatchTo('fluid.controllers.widget');
		}
		
		if (groupCommand)
		{
			var sel = $("#canvasPages .ui-selected");
			fluid.command.create(groupCommand, {
				sel: sel
			}).dispatchTo('fluid.controllers.widget');
		}
		widget._stopEditingText(); // nasty, but tidyup isnt called due to prevented bubbling.

		//activate the cm after a little callback
		setTimeout(function() {
			$(this).removeClass('cm-inactive');
		}.bind(this), 100);


		return false;
	});

	
	$("#contextMenuItems .main").click(contextMenu.toggle);
	$(".subExpander").click(contextMenu.toggleSubmenu); // Open/close a submenu.
	//$(".subExpander").siblings().click(contextMenu.markAsLastClicked); // make it so when its closed its the one that stays open
	$(".subExpander, .icon2").click(contextMenu.markAsLastClicked); // NEW

	//static widgets
	//$("#pinToFront,#pinnedBtn").click(staticWidgets.pushToForeground);
	$("#pinnedBtn").click(staticWidgets.pushToForeground);
	//$("#pinToBack").click(staticWidgets.pushToBackground);
	$("#unpinnedBtn").click(staticWidgets.removeStaticProperty);

	



	
	////////////////////////////////////////////////////////////////////////
	// Screen/page related items - home button, titles etc. 
	$(".screen")
		.live("click", page.click)
		.liveDraggable({ // Drag when zoomed out
			cancel: ':input, option, .icon', //, .active
			start: page.dragStart,
			drag: page.drag,
			stop: page.dragStop,
			distance: 4
        });
	//$(".widgetHolder, .pageBackground").liveSelectable({ // Select when zoomed in
	$(".screen").liveSelectable({
			distance:10,
			filter: '.rootWidget:not(.backgroundWidget)',
			tolerance: 'touch',
			start: page.selectStart,
			stop: page.selectStop,
			//cancel: ':input, option, .pageDragHandle, .widgetHolder, .ui-resizable-handle, .scrollbar'});
			cancel: ':input, option, .icon, .pageDragHandle'});

	
	////////////////////////////////////////////////////////////////////////
	// Widgets	
	$("#canvasPages .pageWidget")
		.live("click", widget.click)
		.live("mouseover mouseleave", widget.hover)
		.liveDraggable({
			distance:4, 
			appendTo: 'body',
			snap: "#canvasPages .widgetHolder",// OLD do not remove
			disabled : false,
			grid: false,
			//snapMode: 'both', // YURI change this
			cancel: ':input,option,.backgroundWidget',
			snapTolerance:4, // YURI make it variable
			create: widget.dragWidgetCreate, 
			start: widget.dragWidgetStart,
			drag: widget.dragWidget,
			stop: widget.dragWidgetStop})
			
		.draggable( 'disable' );
		
	$("#canvasPages .pageWidget .widgetText").live("dblclick", widget.editText);

	// WIDGET GROUPS
	//$(".manageGroupBtn").live("click",widgGroup.openCloseGroup);

	////////////////////////////////////////////////////////////////////////
	// Links & Link menu
	$("#canvas.loaded #canvasLinks .link").live({mouseenter:link.hoverIn, mouseleave:link.hoverOut, click:link.follow}); // Click link moves to page?
	
	$(".linkToggle").live("click", link.toggleMenu);			
	$(".linkMenu").draggable({handle: ".linkMenu h4"}).click(false); 	
	$(".removeLink").click( /*link.del*/ fluid.command.helper.createEventHandler('fluid.controllers.link', 'delete'));
	$(".transitionSelector").live("change", /*link.changeTransition*/ fluid.command.helper.createEventHandler('fluid.controllers.link', 'changeProperty'));
	$(".linkTriggerSelector").live("change", /*link.changeTrigger*/ fluid.command.helper.createEventHandler('fluid.controllers.link', 'changeProperty'));
	//$(".linkMenu").click(function(e){return utils.prevent(e);}); 
	//$(".link").live("mouseover mouseleave", link.hover); // This is any link that is mouseovered. 

	
	////////////////////////////////////////////////////////////////////////
	// Tooltips - These guys equate to about 150 bound events!
	/*
	$(".tooltip").tooltip({effect: 'fade', delay : 0, offset: [-10, 0], opacity: 0.8, tipClass : 'tooltipText', predelay: 50});
	$(".tooltip2").tooltip({effect: 'fade', delay : 0, offset: [70, 0], opacity: 0.8, tipClass : 'tooltip2Text', predelay: 50});
	$(".tooltip3").tooltip({effect: 'fade', delay : 0, offset: [70, 0], opacity: 0.8, tipClass : 'tooltip3Text', predelay: 50});
	*/

	////////////////////////////////////////////////////////////////////////////
	// Create New Page
	$("#createNewPageButton").click(/*page.createNew*/ fluid.command.helper.createEventHandler('fluid.controllers.page', 'create', { mode: 'button' }));


	////////////////////////////////////////////////////////////////////////////
	// Preview & left preview menu. 	
	$("#preview").click(function(e){
		preview.open(e);
		tracker.record("clickPreview", 1, "", e);
		fluid.main.fire('preview');
	});

	$("#pagePreview").click(function(e){
		preview.startPage = document.querySelector('.canvasObject.active').id;

		preview.open(e);
		tracker.record("clickPagePreview", 1, "", e);
		fluid.main.fire('preview');
	});

    $("#closePreview").click(preview.close);

	document.getElementById('togglePreviewMenu').addEventListener('click', previewMenu.toggle);

	//$("#closePreview").click(function(){//console.log("Clicked close.");});
	
	

	//$("#previewLink").click(launchPreviewWindow);
    $(".shareLink").live( "click" , share.actionLink );
	$(".previewLinkLong, #embedCode").live({click : share.actionCopyLinkOrCode} );
	$('.shareIconSocial').live({ click: share.actionLogSharedProject} );

	////////////////////////////////////////////////////////////////////////////
	// Mousewheel & Keyboard 
	$(document).keyup(keyU).keydown(keyD);
	$('#viewport').bind('mousewheel', canvas2.mousewheel); 	
	
	/////////////////////////////////////////////////////////////////////
	// Library & search
	$("#library").resizable({ //start: function(){if( $("#library").css("left") == "0px"){ return;}},
		handles: 'e', 
		minWidth:230, 
		maxWidth:700,
        resize: lib.resizeSteps,
		stop: lib.resize }); 

	$("#library .libraryWidget")
        //.live("click", /* widget.doubleClick -- renamed to widget.addDefault */
        .live("click", fluid.util.debounce(
            fluid.command.helper.createEventHandler('fluid.controllers.widget', 'create'),
            300)
        )
		.liveDraggable({
			distance:3, 
			cursorAt: { left: 12, top: 12 },
			appendTo: 'body',
			snap: "#canvasPages .widgetHolder, #canvasPages  .pageWidget",
			snapTolerance: 5, 
			grid: false,
			helper:lib._createDragHelper,
			start: widget.libraryDragStart,
			drag: widget.libraryDrag,
			//stop: widget.libraryDragStop,
			cursor: 'pointer' });

	$('#libDropDown .dropdown-fluid').live('click', function() {
		$('#lib-dropdown-scroll').toggle();
		$('#lib-dropdown-scroll').tinyscrollbar();
	});
	$('#widgetGroupSelect a').live('click', function() {
		$('#lib-dropdown-scroll').hide();
	});
	$('body').on('keydown', function(e) {
		if (!/(38|40|27)/.test(e.keyCode)) return

		$('#lib-dropdown-scroll').hide();
	});
	$('html').on('click', function(e) {
		var $el = $(e.target);
		if (!$el.parents('#libDropDown').length) {
			$('#lib-dropdown-scroll').hide();
		}
	});
		
	$("#searchBox")
		.mouseover( function(){this.placeholder = "";})  // html
		.mouseleave( function(){this.placeholder = "Search Library";}) // html
		.focus( function(){$(this).css("border-color","#FFF");}) // css
		.blur(function(){$(this).css("border-color","");})           // css
		.click(search.filter)
		.keyup(search.filter)
		.click(search.focus);

	$('#uploadTabs .tabTrigger').live('click', function() {
		var $li = $(this);
		var $widgets = $('#widgets');
		var $childContainer = $li.find('.childContainer');
		$('#uploadTabs .childContainer').hide();
		$('#uploadTabs .tabTrigger').removeClass('active');
		$li.addClass('active');

		$childContainer.show();
		$widgets.tinyscrollbar_update('relative');
	});
	$('#uploadTabs .projectTab').live('click', function() {
		if ($(this).find('.pageWidget').length) {
			$(this).toggleClass('active');
		}
	});

	$("#tabLibrary").click(lib.toggle);	
	$("#tabPreview").click(function () {
		preview.hideNotes();
		previewMenu.debouncePositionNotes();

		preview.toggleShare();
	});
	$("#widgets h6").live("click", lib.collapseSection);
	$("#Preveiw h6").live("click", lib.collapseSection);
	$("#widgetGroupSelect a").live("click", lib.dropdownChangeSet);

	$("#library header").live({mouseenter:lib.setHeaderHoverIn, mouseleave:lib.setHeaderHoverOut});
	$("#Preveiw header").live({mouseenter:lib.setHeaderHoverIn, mouseleave:lib.setHeaderHoverOut});
	
	$("#uploadChooseFile").live("change", upload.uploadByClick); // upload by click handling.

	$("#shortcutUploadChooseFile")
		.click(function (event) {
			event.preventDefault();
			lib.showUploads();
		})
		.change(function (event) {
			upload.uploadByClick.call(this, event);
		});

	$("#linkLoggedOut").live("click", fluidMenu.show);


	////////////////////////////////////////////////////////////////////////
	// Admin console
	$("#console").click(function(e) // -5 events!
	{
		var orig = e.originalEvent;
		switch(e.target.id)
		{
			case "pleaseUndo": if (fluid.command.history.canUndo()) fluid.command.history.undo(); else alert('Nothing to undo'); break;
			case "pleaseRedo": if (fluid.command.history.canRedo()) fluid.command.history.redo(); else alert('Nothing to redo'); break;
			case "resetAll": adminConsole.resetAll(orig); break;
			case "resetCanvas": adminConsole.resetCanvas(orig); break;
			case "consoleClose": $("#console").fadeOut(200); break;
			case "logData": adminConsole.logPerformanceData(orig); break;
			case "profileStart": console.profile(); break;
			case "profileEnd": console.profileEnd(); break;
		}
		return false;
	});

	
	/////////////////////////////////////////////////////////////////////////////
	// The remaining catchalls - canvas, viewport, body etc.
	$("#viewport, #addPage").droppable({drop: dropInViewport, tolerance: "pointer"});
	
	$("#canvas.loaded")
//		.draggable({
//			distance: 5,
//			start : canvas2.dragStart,
//			drag : canvas2.drag, // called somewhere else???
//			stop : canvas2.dragStop,
//			containment: canvas2.setContainment(),
//			cancel: ":input,option,.page"})
		
		.live('dblclick', /* page.add */ fluid.command.helper.createEventHandler('fluid.controllers.page', 'create'));

    drag.makeDraggable({ //
        el: document.getElementById('canvas'),
        beforeDrag: function(e) {       //prevents any drag operation when loading
            if( !$(e.target).hasClass('loaded') ) return false;
            return true;
        },
        start : canvas2.dragStart,
        drag : //fluid.util.debounce(
            canvas2.drag,
            //17
        //),
        stop : canvas2.dragStop
    });
		
	$(window).unload( function () 
	{ 
		//alert("Bye now!"); // chrome prevents this. 
		localStorage.setItem("refreshing", g_instanceId);
	});	
		
		
	window.addEventListener('resize', fluid.util._.throttle(function (event) {
		redraw(event);
	}, 500));

	$(window).unload(project.windowClose);
	$(window).blur(project.windowClose);
	$(window).focus(account.recordActivity);
	$(window).click(tidyUp);

    $("#hint").live("click", function() { return false; });

    //Events to prevent endless animations on the hud and cm buttons
    $(".icon")
        .bind("webkitAnimationEnd", fluidMenu.removeButtonAnimation)
        .bind("animationend", fluidMenu.removeButtonAnimation);
    $(".hudContainer")
        .bind("webkitAnimationEnd", fluidMenu.removeButtonAnimation)
        .bind("animationend", fluidMenu.removeButtonAnimation);
    $(".shiningLight")
        .live("webkitAnimationEnd", fluidMenu.removeButtonAnimation)
        .live("animationend", fluidMenu.removeButtonAnimation);

    $("#addPage").live("mouseenter", link.removeHighlightedPage );

	$('.export-link').live('click', share.downloadExport);


    //$(".tooltip, .tooltip-inverted").live("hover", utils.replaceTooltip);
    /////////////////////////////////////////////////////////////////////////////
    //User settings

    userSettings.init();
    projectSettings.init();



    /////////////////////////////////////////////////////////////////////////////
	//Custom Events
	fluidEvent.bindEditor("storageChanged", account.recordActivity);
	fluidEvent.bindEditor("storageChanged", project.storageChangeProjectHandler);
    fluidEvent.bindEditor("closeModalWindow", userSettings.reStartFromOutside);
    fluidEvent.bindEditor("emailChecked", userSettings.actionCheckedEmail);
    fluidEvent.bindEditor("iFrameLoaded", userSettings.hide);

	/*$( "input" ).live("keydown", function(evt) {
		if(evt.keyCode == 13)
		{
			this.blur();
		}
	});
	/*
	$(window).keydown(function(evt)
	{
		if((evt.metaKey || evt.ctrlKey) && evt.keyCode == 65) //ctrl+a widget selecting
		{	
			if( !$('#canvas').hasClass('zoomedOut') ) // MOVED ALREADY TO CORRECT LOCATION - Dave!!!
			{
				//widget.select(null, $('.canvasObject.active').find('.pageWidget') );
			}
		}
		else if(evt.keyCode == 27) //FIXME!!!
		{  
			lib.esc();
		} 
		else if(evt.keyCode == 13) //FIXME!!!
		{
			//this.blur();
		}
	});
*/
	/////////////////////////////////////////////////////////////////////////////
	// Misc
	document.body.oncopy = function(e)
	{
		//Alert when preview link is copied
        var el = $(e.target);
        if (el.hasClass("previewLinkLong"))
        {
            share.actionAlertCopyLink(e);
        }
        else if (el.attr("id") == "embedCode")
        {
            preview.alertCopyEmbedCode(e);
        }
	};

};


var screensize = {
width:0,
height:0
}

/* 
var autoFillEvent = 
{
	currentval:"",
	changeCalled:false,
	inputItem:"",
	startCheck :function()
	{
		if(!$(this).hasClass(".check"))
		{	
			autoFillEvent.stopCheck();
			$(this).addClass("check");
			autoFillEvent.inputItem = $(this);
			autoFillEvent.Check();
		}
	},
	Check :function(e)
	{
		var newVal = autoFillEvent.inputItem.val();
		var checkFocus = $(autoFillEvent.inputItem).is(":focus");
		if( checkFocus == false)
		{
			return;
		}
		if(autoFillEvent.currentval != newVal )
		{	
			autoFillEvent.currentval = newVal;
			autoFillEvent.changeCalled = true;
			autoFillEvent.inputItem.change();	
		}
		if(autoFillEvent.inputItem.closest(".formCorrect").length == 0 )
		{
			setTimeout(autoFillEvent.Check,250);
		}
		else
		{
			autoFillEvent.stopCheck();
		}
	},
	stopCheck :function()
	{
		if(autoFillEvent.inputItem == "")
		{
			return false;
		}
		autoFillEvent.inputItem.removeClass("check");
		//inputEmail.blur();
	}
}
*/

/*
function closeUpgradeCheck()
{    
	tracker.record("closedUpgradePanel", 1);
	return false;
}
*/
// page frame function
// updates the page frame with the widget's coordinates.
//widget._selectionH = false;
widget._selectionTLWH = false;
widget._selectionBoxCoord = false;
function updateTLWH(area)
{
	//var selected = $("#canvasPages .ui-selected").not(".backgroundWidget");
	//var roots = widget.getRoots(selected);
	var bounding = (area) ? area : utils.getBoundingAreaRelative($("#canvasPages .ui-selected").not(".backgroundWidget"));
	//var bounding = (area) ? area : utils.getBoundingAreaRelative(roots);

	//console.log(bounding);
	$("#TLindicatorX").text(parseInt(bounding.left)); //top left
	$("#TLindicatorY").text(parseInt(bounding.top));
	$("#WHindicatorX").text(parseInt(bounding.right - bounding.left));// width height
	$("#WHindicatorY").text(parseInt(bounding.bottom - bounding.top));

	widget._selectionTLWH = {width : bounding.right - bounding.left , height : bounding.bottom - bounding.top, top : bounding.top , left : bounding.left};
	widget._selectionBoxCoord = {top : bounding.top , left : bounding.left};
}



function showPostLoadMessage()
{
	if(!localStorage) return; // cutycapt.

	var loadingAlert = localStorage.getItem("postloadMessage");
	//console.log("Checking/showing postload message.", loadingAlert);

	var messages = {
		'tab': 'Project updated. Please close other tabs or windows where the project may be open.',
		'serverRefresh': 'A newer version of a project has been found. Updated.',
		'serverLogout': 'This account appears to be open elsewhere and has been logged out to protect your changes.',
		'loginAgain': 'Something went wrong. Please <span class="inlineLink alertLinkToMenu close">log in</span> again.',
		'updateLogout' : 'Welcome back. We\'ve made some changes since you\'ve last been here &ndash; please <span class="inlineLink alertLinkToMenu close">log in</span> again to get the latest version.',
		'loginSyncFailed': 'Application failed to log in and sync all user data properly. Try to <span class="inlineLink alertLinkToMenu close">log in</span> again.'
	};
	
	messages[loadingAlert] && notification.add('alert', messages[loadingAlert], {permanent: true});

	localStorage.removeItem("postloadMessage");
}


/*  2013-05-14 BD: Most probably obsolete function, please remove as soon as version tested
function saveNowButtonClick()
{
	//console.log("Save now clicked.");
    tracker.record("clickSave", 5, "");
	fluidMenu.show($("#profile"));
	$(this).fadeOut(400);
	return false;
}*/

/*  2013-05-14 BD: Most probably obsolete function, please remove as soon as version tested
function launchPreviewWindow() // from active project.
{
	// hard coded preview!!!
	var currentProject = project.get("id");
	var screenWH = project.get("pageWH") || [320,480];
	var url = './?p=' + currentProject + '&preview=y'
	window.open(url,'Preview','left=100,top=100,width=' + screenWH[0] + ',height=' + screenWH[1] + ',toolbar=1,resizable=0');		
	return false;
	
}*/

function cmLink2Helper(e)
{
	var clickDragHelper = $(this).data('clickDragHelper');
	return  clickDragHelper || $("#tmplDragHelper").tmpl();
	/*
	if (clickDragHelper)
		return clickDragHelper;
	else
		return $("#tmplDragHelper").tmpl();
	*/

}
	
function setFocus(obj)
{
	//console.log("Setting focus:", obj);
	obj.bounce().focus();
}

function keyD(e)
{
	//console.log("getting the nudge key",e.keyCode);
	
	if(e.ctrlKey && e.altKey && e.shiftKey && e.keyCode == 48) // show the console.
	{
		$("#console").toggle();
		return false;
	}
	if(e.keyCode == 17 || e.keyCode == 91) // control or command
	{
		var multiselBox = $("#multiSelBox");
		if (multiselBox.is(':visible'))
		{
			$("#canvasPages .backgroundWidget").css("z-index",-2);
			multiselBox.css("z-index",-1);// YURI hacky fix for multiple selection
		}
		
		widget.selectMulti = true;
		return true; // dont do anything. 
	}


	if((e.metaKey || e.ctrlKey) && e.keyCode == 65) //  && widget.editing
	{
		if($("#searchBox").is(':focus'))
		{
			return true;
		}
		
		if($("#colorHexValue").is(':focus'))
		{
			return true;
		}
		
		if( $("#canvasPages .pageWidget textarea").length > 0)
		{
			utils.selectText("control+a");
			return true;
		}
		
		if( !$('#canvas').hasClass('zoomedOut') )
		{
			widget.select(null, $('.canvasObject.active').find('.pageWidget') );
			return true;
		}
	}
	if(e.keyCode == 27) //FIXME!!!
	{
		lib.esc();
        userSettings.esc(e);
	}
	var element = e.target.nodeName.toLowerCase();

	if (element == 'input' || element == 'textarea')
	{
		if ((element == "input") && (e.keyCode == 13))
        {
            var inForm = $(e.target).parents("form").size() == 0 ? false : true;
            if (!inForm)
            {
                $(e.target).blur();
            }
        }
		return true; // let it bubble.
	}

    //Handle ENTER for key navigation on project
    if(e.keyCode == 13)
    {
        if (userSettings.isOpen)
        {
            projectSettings.navigateWithKeys(e);
        }
    }

	if(e.keyCode >= 37 && e.keyCode <= 40) // arrows
	{
		widget.nudge(e);
		contextMenu.place();
		return false;
	}
	else if(e.keyCode == 46 || e.keyCode == 8) // delete or backspace
	{ 
		//console.log("deleting");
        if (e.keyCode == 8)
        {
            $(".userSettingsDone:visible").click();
        }

		$("#searchBox").blur(); // fix searchbox controlling delete. 
		deleteObject(e.keyCode);
		return false;
	}
	else if(e.metaKey || e.ctrlKey) // control shortcuts 
	{
		var widgetCommand, storeInHistory = true;
		switch(e.keyCode)
		{
			case 67: widgetCommand = 'copy'; storeInHistory = false; break; // c			
			case 68: widgetCommand = 'clone'; break; // d
			case 86: widgetCommand = 'paste'; break; // v
			case 88: widgetCommand = 'cut'; break; // x
			case 89: fluid.command.history.redo(); break; // y
			case 90: // z
				if (e.shiftKey)
					fluid.command.history.redo();
				else
					fluid.command.history.undo();
				break;
			default: return true;
		}

		if (widgetCommand)
			fluid.command.create(widgetCommand, {event: e}).dispatchTo('fluid.controllers.widget', storeInHistory);

		return false;
	}

	return true; // maybe tis should allow propagation for other key effects?
}

function keyU(e)
{
	//console.log("getting the nudge key",e.keyCode);

    if(e.keyCode >= 37 && e.keyCode <= 40) {
	if (e) {
	    var element = e.target.nodeName.toLowerCase();
	    if ((element == "input") || (element == "textarea") || (element == "select")) { return false; }
	}

	if (canvas2.isEditorVisible()) {
	    contextMenu.place();
	    page.navigateWithKeys(e);
	} else {
	    if (userSettings.isOpen) {
		projectSettings.navigateWithKeys(e);
	    } else {
		preview.navigateWithKeys(e);
	    }
	}
	return false;
    }

    //console.log("keyng up");
    $("#canvasPages .backgroundWidget").css("z-index","");
    $("#multiSelBox").css("z-index",""); //YURI hacky solution

    widget.selectMulti = false;
}


// loads the t&cs
function load() 
{
	var load = window.open('terms.html','','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,location=no,status=yes');
}

// TODO: added as a quick fix; register all closeable views/controllers instead
function closePopups(except)
{
	if (!$('#fluidDropdown').is(except))
		fluidMenu.hide();

	if (!$('#trashContents').is(except))
		fluid.controllers.bin.close();
}
	
function tidyUp(e)
{
	//console.log("Tidying up", e.target.id, e );
	
	var target = $(e.target);
	if(e.target.type == "textarea" || e.target.type == "input" || e.target.id == "tsandcsLabel" || e.target.id == "tsandcs1" || 
		target.hasClass('projectOptionsFrame') ||  target.hasClass('modalWindowContentFrame') || 
		target.closest('.modalWindowContentFrame').length > 0)
	{	
		//console.log("Bubbling");	
		return true;
	}

	if($(e.target).hasClass("createAccount") || ($(e.target).hasClass("libraryWidget")) ||
        ($(e.target).hasClass("libraryWidgetDisabled")))
	{
		return true;
	}

	var except;
	if ($(e.target).closest('#fluidDropdown').length > 0 || e.target.tagName == "A" || $(e.target).hasClass('alertLinkToMenu')) {
		except = $('#fluidDropdown');
	}

	if ($(e.target).closest('#trashContents').length > 0)
		except = (except || $([])).add('#trashContents');
	closePopups(except);

	widget._stopEditingText();
	propInspector.resetPropInspector();
	staticWidgets.hideMenu();
	//console.log("Hiding prop inspector.");
	
	page.hideOptionsMenu();
	link.hoverOut();
	//$("#searchBox").blur();
	
	if( project.get("currentZoom") == 1 )
	{
		//console.log("placing where nt needed");
		widget.resetSelection();
		contextMenu.place("hide");
		//snap.closeSnapSettings(); //MAY BREAK STUFF
	}

    //Close print Window to avoid issues on Chrome
    if (window.g_window_print && !window.g_window_print.closed &&
        !$(e.target).hasClass("shareLinkPrint")){
        window.g_window_print.close();
        window.g_window_print = null;
    }
	
	group.deselect();
	//group.erase();
}

// Adds the green tick to a form field.
// todo: no longer works?
function setValid(obj)
{
	var tick = obj.next("aside");
	
	if (!tick.hasClass("formCorrect"))
	{
		tick.
			fadeTo(0,1.0).
			addClass("formCorrect").
			bounce();
	}
}

// form fields validation
function validateInput(e, $t)
{
	var $this = $($t);
	if($t == null || $t == undefined)
	{
		$t = this;
		$this = $(this);
	}
	
	$form = $this.parents(".form").eq(0);
	if($form.hasClass("shareSendMail")) return; // dont do anything with this for now.
	
	if( ( 
		  ($t.validity.valid && $this.is(":checkbox") == false) || 
		  ($this.attr("type") == "checkbox" && $this.prop('checked')) == true
		)
		&& $this.attr("type") != "submit")
	{
		//console.log("Set to valid");
		setValid($this);
	}
	else
	{
		//console.log("Changing visibility of tick to no", $this.attr("type"), $this.attr('checked') );
		//TODO: doesnt work for email send form. 
		$this.next("aside").fadeTo(200,0.0).removeClass("formCorrect");
	}
	
	//console.log("Form is", $form, $form.find("input").not("[type=hidden], [type=submit]").length, $form.find("input"));

    //DA: 21-May-2012: Never disable the sign in button
    if (!$form.hasClass("createForm"))
    {
        var numInputs = $form.find("input").not("[type=hidden], [type=submit]").length ;
        var correctInputs =  $form.find(".formCorrect").length ;
        setSubmitStyle($form, numInputs == correctInputs); // || ($form.attr("id") == "previewMail" && $t.validity.valid)
    }
};


// returns true if an object is intersecting the trash.
function intersectTrash(obj, event) {
	if ($("#trash").css('display') != 'none') {
		var objTLWH = utils.getTLWH(obj);

		if( $(obj).hasClass("screen") ) {
			var zoom = project.get("currentZoom"),
				//DA:23-May-2012: Take page dimensions instead of screen dimensions
				$page = $(".page", $(obj));

			if(zoom === 1) {
				return false; // cant delete page at 100%
			}

			if ($page.size() > 0) {
				objTLWH = utils.getTLWH($page);
			}

			objTLWH.width = objTLWH.width * zoom;
			objTLWH.height = objTLWH.height * zoom;
		}

		//Take real widget dimensions instead of widget size in library when removing upload from library
		//Except for  uploads
		var $helper = $("#libraryWidgetDragging");
		if ($helper.size() > 0) {
			if ($helper.hasClass("upload") ){
				objTLWH.width = 24;
				objTLWH.height = 24;
			} else {
				objTLWH = utils.getTLWH($helper.find(".pageWidget"));
			}
		}

		var trashTLWH = utils.getTLWH("#trash");

		// if widget width or height > 200, check with pointer position
		if (event && (objTLWH.width > 200 || objTLWH.height > 200)) {
			objTLWH.top = event.pageY;
			objTLWH.left = event.pageX;
			objTLWH.width = 0;
			objTLWH.height = 0;
		}

		if( (objTLWH.top + objTLWH.height >= trashTLWH.top) &&
			(objTLWH.left + objTLWH.width >= trashTLWH.left)) {

			$('#trash').addClass('droppableStyle');
			return true;
		}
	}

	//console.log("checking trash intersection - false");
	$('#trash').removeClass('droppableStyle');
	return false;
};




function dropInViewport(e, ui)
{
	if (e.isPropagationStopped() || (e.originalEvent && e.originalEvent.isPropagationStopped()))
	{
		return;
	}
	
	//console.log("Checking drop in viewport");
	var $dragee = $(ui.draggable);
	var $drageeId = $dragee.attr('id') || $dragee.attr('data-id');

	if($(ui.draggable).hasClass("project"))
	{
		project.open($drageeId);
		return; 
	}
	
	if($("#trash").hasClass("droppableStyle"))
	{
		//console.log("droppablestyle.", ui.draggable[0].id);
		var draggable = ui.draggable;
		var uplId = draggable.attr('id') || draggable.attr('data-id');
		fluid.command.create('drop', {id: uplId, title: storage.get(uplId).title}).dispatchTo('fluid.controllers.bin');
		//account.removeUpload(ui.draggable[0].id);
		return;
	}
	
	// if the dropped item is the canvas (inside the viewport after a drag, ignore)
	if($drageeId == 'canvas' )
	{
		return true;
	}	
	
	// if the widget is dropped at a distance less than the library width, its still in the library.
	if( $dragee.hasClass("libraryWidget") && e.pageX < account.get("libraryWidth") ) //dropzone is library
	{
		return false;
	}
	
	if( $drageeId == 'cmLink2' ) // its a link being dropped
	{
		utils.prevent(e);
		$("#dragCanvas").fadeOut(200);
	
		var offset = $("#addPage").offset();
		var height = $("#addPage").outerHeight();

		// dropped on add page.
		if( e.pageX > offset.left && e.pageY > offset.top && e.pageY < offset.top + height)
		{
			fluid.command.create('create', {
				event: e,
				mode: 'link'
			}).dispatchTo('fluid.controllers.page');
			//var lnk = page.addViaLinkDrop(offset, height, e, ui.draggable);
			widget.resetSelection();

			return false;
		}
	
		var pageObj = null;
		var scale = 1.0;
		if( $dragee.hasClass("templateLink") )
		{
			var pageObj = $dragee.parents(".page");
			var scale = $("#canvas").data("revertZoom"); //.removeData("originalZoom");
			if(scale == undefined)
			{
				scale = 1;
			}
		}
		else
		{
			//var pageObj = $(".ui-selected").parents(".page"); // TODO maybe draggable works here in which case we could simplify?
			var pageObj = $(".zoomedOutSelected").closest(".screen"); // TODO maybe draggable works here in which case we could simplify?
		}
		
		page.enableSelectableWidgetHolder(false);
	}

	var $exclude = ui.draggable.add(ui.helper).add($('#dragCanvas')).add('.pageWidget.ui-selected');
	var droppedOnPage = false;
    var selectedPageId = getHoverPage(e, $exclude);
    var draggableId = ui.draggable.attr('id') || ui.draggable.attr('data-id');

    if (selectedPageId != "")
    {
        var selectedPage = $("#" + selectedPageId);
		if( $dragee.hasClass('libraryWidget') )	// NEW LIBRARY WIDGET DROPPED ON PAGE
		{
			fluid.command.create('create', {
				event: e,
				widgetId: draggableId,
				pageId: selectedPageId
			}).dispatchTo('fluid.controllers.widget');
			//widget.add(e, {top:0,left:0}, ui.draggable[0].id, selectedPage.find(".widgetHolder"));
            tracker.record("addWidget", 1, ui.draggable[0].id, e);
		}
		else if ( $drageeId == 'cmLink2' )	// NEW A HREF LINK
		{	
			var pageObj = selectedPage;
			$(".zoomedOutSelected").each(function()
			{
                fluid.command.create('create', {
                    originId: $(this).attr("id"),
                    destinationId: pageObj.attr("id"),
                    $wigdet: $(this),
                    pageObj: pageObj}).dispatchTo('fluid.controllers.link');

                tracker.record("addLink", 1, "", e);
			});
			droppedOnPage = true;
			
		}
		else if( $dragee.hasClass("pageWidget")  ) // CHECK DROPPING A WIDGET BETWEEN PAGES
		{
			var dropPageId = selectedPage.attr("id");
			var draggedWidgetPageId = $dragee.closest(".screen").attr("id");
			
			if(draggedWidgetPageId != dropPageId)
			{
				var sel = $("#canvasPages .ui-selected");
				widget._changePage(sel, draggedWidgetPageId, dropPageId);	
			}
		}
    };

	if($(ui.draggable).attr("id") == 'cmLink2') //  || $(ui.draggable).hasClass("templateLink")
	{
		if(droppedOnPage)
		{
			widget.resetSelection(); // may not be needed now.
		}
		else
		{
			setTimeout(function(){ canvas2.zoom({newZoom: scale, page : pageObj, savePosition: false});	}, 300);
		}
	}


}


function setSubmitStyle(form, valid)
{
	var submit = form.find(":submit");
	
	if (valid === undefined)
	{
		valid = !submit.hasClass("inactive");
	}
	
	if ( valid || form.attr("id") == "upgradeForm") // HACK - form.attr("id")
	{
		//console.log("Number of inputs is correct!");
		var className = form.data("existing") ? "accept-existing" : "accept";
		submit.removeClass("inactive accept accept-existing").addClass(className).bounce();	
	}
	else
	{
		//console.log("Number of inputs is incorrect!", numInputs , correctInputs);
		submit.removeClass("accept accept-existing").addClass("inactive");
	}
};


// to be replaced by individual calls?
function deleteObject(eOrKey, ui)
{
	function deleteSelectedWidgets()
	{
		var selected = $(".ui-selected");
		if (selected.length == 0)
			return false;

		var widgets = [], segments = [], widgetMap = [];
		var currentUploads, toRemove, projectId = account.get('lastOpenProject'), $projectTab = $('#project-'+projectId);

		$(selected).each(function()
		{
			var id = $(this).attr("id");
			widgetMap.push(storage.get(id).data);
			if (id == $(this).attr("data-segment"))
			{
				segments.push(id);
			}
			else
			{
				widgets.push(id);
			}
		});

		if (widgets.length > 0)
		{
			fluid.command.create('delete', {id: widgets}).dispatchTo('fluid.controllers.widget');
		}

		if (segments.length > 0)
		{
			fluid.command.create('deleteSegment', {id: segments}).dispatchTo('fluid.controllers.widget');
		}

		contextMenu.hide();
		propInspector.resetPropInspector();

		currentUploads = project.bundle(projectId).uploads;
		toRemove = fluid.util._.filter(widgetMap, function(item) {
			return currentUploads[item] === undefined;
		});
		lib.handleUploadsRemovedFromPage(toRemove, projectId, $projectTab);
	}

	if( (eOrKey == 46 || eOrKey == 8 || eOrKey == 'delete') && widget.editing == false) 
	{
		return deleteSelectedWidgets();
	}

	//var cord =  $(ui.draggable[0]).offset();

	if(!ui || !ui.draggable) // they have dragged something to the trash.
	{
		return false;
	}
	
	var $obj = $(ui.helper);
		
	if(intersectTrash($obj) == true)
	{	
		if($obj.hasClass("pageWidget"))
		{
			deleteSelectedWidgets();
            widget._dragSelection = null;
		}
		/*
		else if($obj.hasClass("page"))
		{
			page.del($obj);
		}
		*/
		else if($obj.hasClass("screen"))
		{
			// page.del($obj);
			// this has potential to break the principle of "commands are only issued by UI", but we'll 
			// leave it here until code structure work is done
			fluid.command.create('delete', {id: $obj.attr('id')}).dispatchTo('fluid.controllers.page');
		}
		else if($obj.hasClass("project"))
		{
			var projectIds = account.get('projectIds');
            //console.log("Deleting a project." + projectIds.length);
			if (projectIds.length > 1) // Add an open project check here, and give user feedback.
			{
				// TODO: this is temporary until the bin icon is moved inder bin view/controller
				fluid.command.create('drop', {id: $(ui.draggable).attr('id')}).dispatchTo('fluid.controllers.bin');
				//project.del($(ui.draggable).attr('id'));
			}
			else
			{
				//console.log("Cant delete the last project.", projectIds);
				notification.add('info', 'Sorry, the currently open project cannot be deleted. Please create another project before deleting this one.');
			}
		}
		$('#trash').removeClass('droppableStyle');
		return true;
	}
	return false;
}

// called when the page resizes or some other similar event.
// TODO: needs to move the active page and context menu
function redraw(d)
{
	preview.multiOrientations = project.isMultiOrientation();

	if (preview.isOpen) {
		preview.setAvailableRect();
		preview.scaleFrame();
	}
	$("#canvas").draggable("option", "containment", canvas2.setContainment());
	
	var active = project.getActivePage();
	if (active.size() > 0 && active.hasClass('screen') && !$(d.target).hasClass('pageWidget') )
	{
		zoomInAndCenterOnPage(project.getActivePage(), 1, 1, 200);
	}
}


// pausable timeout

function Timeout(ms, callback)
{
	this.ms = ms;
	this.callback = callback;
	this.start();
}

function getHoverPage(e, $exclude)
{
	//dragged elements will be obtained if we dont hide them
	if($exclude) {
		$exclude = $exclude.filter(function() {
			if($(this).is(':visible')) return true;
			else if($(this).width() === 0) return true;
			else return false;
		});
		$exclude.hide();
	}

	var $dropEl = $(document.elementFromPoint(e.pageX, e.pageY)).closest('.screen');

	if($dropEl.length) selectedPageId = $dropEl.attr('id');
	else selectedPageId = '';

	if($exclude) $exclude.show();

    return selectedPageId;

}

Timeout.prototype = {
	start : function()
	{
		if (!this.timeout)
		{
			this.msRemaining = this.ms;
			this.startTime = new Date().valueOf();
			this.isPaused = false;
			this.isComplete = false;
			this._setTimeout(this.ms);
		}
	},
	
	started : function()
	{
		return Boolean(this.timeout);
	},
	
	stop : function()
	{
		if (this.timeout)
		{
			window.clearTimeout(this.timeout);
			this.timeout = null;
			this.isPaused = false;
		}
	},
	
	pause : function()
	{
		if (this.timeout)
		{
			window.clearTimeout(this.timeout);
			this.timeout = null;
			this.msRemaining -= new Date().valueOf() - this.startTime;
			this.isPaused = true;
		}
	},
	
	paused : function()
	{
		return Boolean(this.isPaused);
	},
	
	resume : function()
	{
		if (this.isPaused && !this.timeout)
		{
			this.startTime = new Date().valueOf();
			this._setTimeout(this.msRemaining);
			this.isPaused = false;
		}
	},
	
	timeRemaining : function()
	{
		if (this.isPaused)
		{
			return this.msRemaining;
		}
		else
		{
			return this.msRemaining - new Date().valueOf() + this.startTime;
		}
	},
	
	exec : function()
	{
		this.stop();
		this.callback.call();
		this.isComplete = true;
	},
	
	complete : function()
	{
		return Boolean(this.isComplete);
	},
	
	_setTimeout : function(ms)
	{
		this.timeout = window.setTimeout((function(self) {
			return function()
			{
				if ($.isFunction(self.callback))
				{
					self.isComplete = true;
					self.callback.call();
					self.timeout = null;
				}
			};
		})(this), ms);
	}
};

/*  2013-05-14 BD: Most probably obsolete function, please remove as soon as version tested
function getScale(availableWH, requiredWH, margin, minScale){
    var scaleToApplyY = availableWH.height / (requiredWH.height + (margin * 2));
    var scaleToApplyX = availableWH.width / (requiredWH.width + (margin * 2));
    var scale = Math.min(scaleToApplyX, scaleToApplyY);
    if (minScale){
        scale = scale < minScale ? minScale : scale;
    };
    //console.log("Calculating Scale...", availableWH, requiredWH, margin, scale, scaleToApplyX, scaleToApplyY);

    return scale;
}*/


function checkUserSession(alertUser)
{
	// session cookie could become lost: there's an issue in Chrome with it losing cookies over a 
	// long period if inactivity or a user can clear cookies in the browser; when a cookie is lost,
	// the server creates a new one; in case the cookie from the server differs from the one stored 
	// in localStorage display an alert and log user out

	if (!localStorage)
	{
		return; // cutycapt
	}

	var accType = account.get('accType');
	if (!accType || account.get('accType') == 'New')
	{
		return;
	}

	var sessionToken, sessionTokenName = 'session';

	var cookies = document.cookie.split(/;\s*/);
	for (var idx = 0, len = cookies.length; idx < len; idx++)
	{
		var cookieSplit = cookies[idx].split('=');
		if (cookieSplit[0] == sessionTokenName)
		{
			sessionToken = cookieSplit[1];
			break;
		}
	}

	var storedToken = localStorage.getItem(sessionTokenName);
	if (storedToken)
	{
		if (storedToken != sessionToken)
		{
			account.logout();

			if (alertUser)
			{
				localStorage.setItem('postloadMessage', 'loginAgain');
			}

			location.reload();
		}
	}
	else
	{
		localStorage.setItem(sessionTokenName, sessionToken);
	}
}

function watchUserSession(alertUser)
{
	// set up periodic checks for user session in case user clears cookies while in editor 
	// or something awful happens modifying the session cookie

	if (!localStorage)
	{
		return; // cutycapt
	}

	window.setTimeout(function() {
		checkUserSession(alertUser);
		watchUserSession(alertUser);
	}, 5000);
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}


function fetchSvgIcons() {
	var r = new XMLHttpRequest();
	r.open('GET', 'img/all_icons.svg', true);
	// r.responseType = 'image/svg+xml';

	//append result to head element and save serialised svg doc in indexedDb
	r.onload = function(event) {
		var serializer = new XMLSerializer();
		var svgDocString = serializer.serializeToString(event.target.responseXML.documentElement);
		document.head.appendChild(event.target.responseXML.documentElement);
		dbStorage.onReady(function() {
			dbStorage.set('uiIcons', {id: 'svgIcons', data: svgDocString});
		});

	};

	r.send(null);
};

// Fluid platform namespace
// ------------------------
var fluid = fluid || {};

// TODO: Module loader that can survive concatenation and minification, so that we don't have to add each
// and every file as <script>. Use Require.js or similar? It can't probably survive concatenation though?

fluid.module = fluid.module || {};

(function(module) {
	'use strict';

	module.define = function(name, construct, constructContext) {
		var obj;

		if (name) {
			var ns = name.split('.');
			obj = window;
			for (var idx = 0, len = ns.length; idx < len; idx++) {
				var objName = ns[idx];
				obj = obj[objName] || (obj[objName] = {});
			}
		}

		if (construct) {
			construct.call(constructContext, obj);
		}

		return obj;
	};

	module.resolve = function(name) {
		var obj;

		if (name) {
			var ns = name.split('.');
			obj = window;
			for (var idx = 0, len = ns.length; idx < len; idx++) {
				obj = obj[ns[idx]];
				if (!obj)
					break;
			}
		}

		return obj;
	};

})(fluid.module);
fluid.module.define('fluid.util', function(module) {

    //calls the passed function if its' last call happend more than 'milliseconds' time ago
    module.debounce = function(fn, milliseconds) {
        var lastTime;
        return function() {
            var now = new Date().getTime();
			var result;

            if(!lastTime || now - lastTime > milliseconds) {
				result = fn.apply(this, arguments);
				lastTime = now;
            }

			return result || false;
        }
    };

    // return a Blob object of the given dataURL string
    module.dataUrlToBlob = function (dataUrl, properties) {
        var binary = atob(dataUrl.split(',')[1]),
            array = [];

        for(var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }

        return new Blob([new Uint8Array(array)], properties);
    };

    // takes an Element or dataURL and resizes it to the given width and height
    module.resizeImage = function (img, width, height, cropx, cropy, cropw, croph) {
        var canvas = document.createElement('canvas'),
            ctx   = canvas.getContext('2d');

        canvas.width  = width;
        canvas.height = height;

        if (typeof img === 'string') {
            var el = document.createElement('img');
            el.src = img;
            img    = el;
        }

        if (img instanceof Element) {

            if (typeof cropx === 'number' && typeof cropy === 'number') {
                ctx.drawImage(img, cropx, cropy, cropw, croph, 0, 0, width, height);
            }
            else {
                ctx.drawImage(img, 0, 0, width, height);
            }

            return canvas.toDataURL();
        }
    };

    module.getGravatarHash = function (email) {
        return module.md5(email.toLowerCase().trim());
    };

    module.md5 = function (s) {
        function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]|(G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()
    };
});

// A mixin to provide event support
// TODO: need generic module to support mixins?

fluid.module.define('fluid.event', function(module) {
	'use strict';

	module.mixinTo = function(target) {

		var bindings = {};
		var isObject = typeof target == 'object';

		function forAll(names, callback) {
			var names = names.split(/,\s*|\s+/);
			for (var idx = 0, len = names.length; idx < len; idx++) {
				callback.call(target, names[idx]);
			}
		}

		target.bind = target.on = function(names, handler, context) {
			forAll(names, function(name) {
				var handlers = bindings[name] || (bindings[name] = []);

				// Don't bind if already bound
				if (handlerIndex(handlers, handler) == -1)
					handlers.push({h: handler, c: context || this});
			});

			return this;
		};

		target.unbind = target.off = function(name, handler) {
			forAll(names, function(name) {
				var handlers = bindings[name];

				if (handlers) {
					var idx = handlerIndex(handlers, handler);
					if (idx > -1)
						handlers.splice(idx, 1);
				}
			});

			return this;
		};

		target.trigger = target.fire = function() {
			var name = arguments[0], handlers = bindings[name];
			if (handlers) {
				var args = Array.prototype.slice.call(arguments, 1);
				if (isObject)
					args.unshift(this);

				for (var idx = 0, len = handlers.length; idx < len; idx++) {
					var handler = handlers[idx];
					if (handler.h.apply(handler.c, args) === false)
						return false;
				}
			}

			return true;
		};

	};

	function handlerIndex(handlers, handler) {
		for (var idx = 0, len = handlers.length; idx < len; idx++) {
			if (handlers[idx].h === handler)
				return idx;
		}
		
		return -1;
	};

});

// Command Stack
// =============
// TODO: Split this into separate files

// &lt;General introduction to commands here&gt;

// Design goals:
// -------------
// 1. Command stack is serializable.
// 2. Complete command history is stored with each project.
// 3. Serialized command data is independed from concrete function names and function signatures of command recepients.
// 4. It's simple
// 
// &lt;General usage details here&gt;
// 
// * Commands are *only* issued from the UI code: they are the commands user is giving to the application;
//   the application never issues commands to itself. Ideally.
// * Redo should restore the object and all it's subobjects to the same state they were initially created,
//   including object IDs and other relevant data.
// * Remember that command context will be serialised and stored in DB.
// 
// Command checklist:
// * Page: create, delete (keep links), move, duplicate, set properties (device, custom device size, orientation, 
//   page size), set default, set notes
// * Widgets: create, delete (keep links, keep z-order), move, resize, duplicate, copy, cut, 
//   paste, set properties (background color, border color, opacity, border width, border radius, 
//   width, height, text color, font, font size, text opacity, bold, italic, underline, text alignment, vertical position), 
//   set z-order, segments (add, remove), plus all this operations in multisegment widgets applied to root and segments
// * Links: create, remove, gesture, transition
// * Content: text change

fluid.command = fluid.command || {};
fluid.command.history = fluid.command.history || {};
fluid.command.helper = fluid.command.helper || {};


// TODO: combine fluid.command and fluid.command.history constructors to hide dispatchReverseTo and history.add?

// fluid.command
// -------------
(function(mCommand) {
	'use strict';

	var handlers = {};

	function getHandler(receiverName, commandName) {
		return (receiverName in handlers) && handlers[receiverName][commandName] || undefined;
	}

	// Private command object constructor
	function command(commandName, context) {
		this.name = commandName;
		this.context = $.isPlainObject(context) ? context : {};
	};

	// Dispatch a command to the receiver and optionally store it in the command stack
	command.prototype.dispatchTo = function(receiverName, storeInHistory) {
		if (typeof storeInHistory == 'undefined') {
			var commandHandler = getHandler(receiverName, this.name);
			storeInHistory = commandHandler && 'revert' in commandHandler;
		}

		dispatchCommand(receiverName, this, 'execute', storeInHistory);
	};

	command.prototype.dispatchReverseTo = function(receiverName) {
		dispatchCommand(receiverName, this, 'revert', false);
	};

	function dispatchCommand(receiverName, command, executor, storeInHistory) {
		// Find command handler
		var commandHandler = getHandler(receiverName, command.name);
		if (!commandHandler) {
			//console.log('DEBUG: Command handler not found at command receiver.', command);
			return;
		}

		// Execute command handler
		if (executor in commandHandler) {
			try {
				var result = commandHandler[executor].call(commandHandler, command.context);
			} catch (e) {
				if ('message' in e) {
					var file = (e.sourceURL || e.fileName) && (' at ' + (e.sourceURL || e.fileName)) || '';
					var line = file && (e.line || e.lineNumber) && (':' + (e.line || e.lineNumber)) || '';
					var stack = e.stack && ('\nStack:\n\t' + e.stack.replace(/\n/g, '\n\t'));
					var msg = '"' + e.message + '"' + file + line + stack;
				} else {
					var msg = $.isPlainObject(e) ? JSON.stringify(e) : e;
				}

				// Re-throw to be handled by global handler
				// TODO: better post to error handler?
				throw receiverName + ':' + command.name + ':' + executor + ': ' + msg;
			}

			if (result === false) {
				mCommand.history.remove();
			}
		} else {
			//console.log('DEBUG: Command executor not found.', command);
		}

		// Put the command to history stack
		if (storeInHistory) {
			mCommand.history.add(command, receiverName);
		}
	}

	mCommand.create = function(commandName, context) {
		return new command(commandName, context);
	};

	mCommand.registerHandler = function(receiverName, commandName, handler) {
		if (receiverName && commandName && handler) {
			if ($.isFunction(handler)) {
				handler = {execute: handler};
			}
			if ('execute' in handler) {
				(handlers[receiverName] || (handlers[receiverName] = {}))[commandName] = handler;
			}
		}
	};

})(fluid.command);


// fluid.command.history
// ---------------------
(function(commandHistory) {
	'use strict';

	var maxLength = 100;
	var commandStack = [{}]; // empty root point to store alternative branches
	// Index of the next command in the stack
	var currentPosition = 1;
	var branchIdInc = 0;

	function historyPoint(command, receiverName, branchId) {
		// TODO: user shorter names to save on amount of data transferred? or minify (see To Do at the bottom)?
		this.command = command;
		this.receiverName = receiverName;

		this.branchId = branchId;

		// Command timestamp will be replaced with server timestamp upon successful server sync
		this.timestamp = new Date().getTime(); 

		// Id of the user issuing the command to be used in collaborative environment
		this.user = account.get('id');

		// Whether the command has been successfully pushed to the server
		this.synced = false;
	};

	function getNewBranchId () {
		branchIdInc++;
		return branchIdInc;
	}

	// Add new command at the current stack position
	// TODO: btw, hmmm, we are allowing the reverse command handler to modify the command context
	//       so we either should be able to modify this in the DB later ot change this behaviour
	commandHistory.add = function(command, receiverName) {
		// Create a new branch when putting new command after a number of undo actions
		/*
		if (currentPosition < commandStack.length) {
			var prevPoint = commandStack[currentPosition - 1];
			if (!('branches' in prevPoint)) {
				prevPoint.branches = [];
			}

			var branch = commandStack.splice(currentPosition);
			prevPoint.branches.unshift(branch);

			getNewBranchId();

			commandHistory.fire('branch.create', branchIdInc);
		}
		*/

		//for single-branch, remove later
		if (currentPosition < commandStack.length) {
			commandStack.splice(currentPosition);
		}

		commandStack.push(new historyPoint(command, receiverName, branchIdInc));

		// Remove oldest entry if max length is exceeded
		if (commandStack.length > maxLength) {
			commandStack.shift();
			commandHistory.fire('');
		} else {
			currentPosition++;
		}

		commandHistory.fire('add');
	};

	// Remove the previous history point
	// TODO: this should not be exposed
	commandHistory.remove = function() {
		if (commandStack.length > 1) {
			currentPosition--;
			commandStack.splice(currentPosition, 1);
		}
	};

	// Can undo?
	commandHistory.canUndo = function() {
		//HACK this is 2, not 1, because project load is always leftmost, and can't
		//be undone
		return currentPosition > 2;
	};

	// Undo command at the previous history point
	commandHistory.undo = function (shouldFire) {
		if (!commandHistory.canUndo())
			return;

		var historyPoint = commandStack[--currentPosition];
		historyPoint.command.dispatchReverseTo(historyPoint.receiverName);

		if (shouldFire !== false) {
			commandHistory.fire('undo', commandHistory.currentPosition());
		}
	};

	// Can redo?
	commandHistory.canRedo = function() {
		return currentPosition < commandStack.length;
	};

	// Redo command at the next history point
	commandHistory.redo = function (shouldFire) {
		if (!commandHistory.canRedo())
			return;

		var historyPoint = commandStack[currentPosition++];
		historyPoint.command.dispatchTo(historyPoint.receiverName, false);

		if (shouldFire !== false) {
			commandHistory.fire('redo', commandHistory.currentPosition());
		}
	};

	// Switch branch at current position
	commandHistory.switchBranch = function(branchIdx) {
		branchIdx--; // zero is main branch
		// console.log("SWITCH BRANCH", branchIdx)
		if (branchIdx > -1) {
			var prevPoint = commandStack[currentPosition - 1];
			if ('branches' in prevPoint && branchIdx < prevPoint.branches.length) {
				var currBranch = commandStack.splice(currentPosition);
				var destBranch = prevPoint.branches.splice(branchIdx, 1)[0];

				prevPoint.branches.unshift(currBranch);
				$.merge(commandStack, destBranch);

				commandHistory.fire('branch.switch', destBranch[0].branchId);
			}
		}
	};

	// Reset command history
	commandHistory.reset = function() {
		commandStack = [{}];
		currentPosition = 1;
		commandHistory.fire('reset');
	};

	// Length of the main branch of the command history
	commandHistory.length = function() {
		return commandStack.length - 1;
	};

	// Current position in the main branch from the top of the command stack; 0 for the top of the stack,
	// negative number otherwize
	commandHistory.currentPosition = function() {
		return currentPosition - commandStack.length;
	};

	// Mixing event support for history changes
	fluid.event.mixinTo(commandHistory);

	// History traversal
	// -----------------
	// 
	// Traverse the command history tree depth-first pre-order, synchronously calling back user functions 
	// on each operation. Traversal stops when there are no more points to traverse.
	// 
	// Possible callbacks:
	// 
	// * `next`: moving down to the next node in the tree
	// * `back`: moving up to the nearest branching point having unvisited branches
	// 
	// Traversal ends in the root node. Once there are no more leaf nodes left, `back` is called until root is reached.
	//
	// Callbacks receive a context object as a single parameter, containing the following members:
	// 
	// * `point`: the current history point
	// * `offset': offset in the number of points from the previous callback
	// * `branch': zero-based index of the current branch
	// * `stop()`: call to stop traversing
	commandHistory.traverse = function(callback) {
		var doNext = true;
		var context = {
			point: commandStack[0],
			branch: 0,
			parentBranch: [],
			stop: function() {
				doNext = false;
			}
		};

		var branchStack = [];
		var currentBranch = commandStack;
		var nextPointIndex = 1;

		while (doNext) {
			// Move down until the end of current branch, pushing branching points onto stack
			if (nextPointIndex < currentBranch.length) {
				if (context.point && 'branches' in context.point) {
					branchStack.push({
						parent: currentBranch,
						pointIndex: nextPointIndex - 1,
						branches: context.point.branches,
						branchIndex: 0
					});
					context.parentBranch = currentBranch; 
				}

				context.point = currentBranch[nextPointIndex++];
				context.offset = 1;

				if ('next' in callback)
					callback.next.call(null, context);
			} else {
				// Step back until finding a branching point with unvisited branches
				var doSearch = true, doBack = false;
				context.offset = 0;
				nextPointIndex--;

				// Step back until finding a branching point
				while (doSearch) {
					// Move to the previous point, if any
					if (nextPointIndex > 0) {
						context.point = currentBranch[--nextPointIndex];
						context.offset--;
					}

					if (branchStack.length == 0) {
						// No more branches to check
						doNext = doSearch = false;
						context.offset -= nextPointIndex - 1;
						doBack = true;
					} else if (nextPointIndex == 0 || ('branches' in context.point)) {
						// Reached a branching point or first point of alternative branch
						var stackTop = branchStack[branchStack.length - 1];

						if (!('branches' in context.point))
							// Move to branching point
							context.offset--; 

						// Has unvisited branches?
						if (stackTop.branchIndex < stackTop.branches.length) {
							currentBranch = stackTop.branches[stackTop.branchIndex++];
							context.branch = stackTop.branchIndex;
							context.point = null;
							nextPointIndex = 0;
							doSearch = false;
						} else {
							branchStack.pop();
							currentBranch = stackTop.parent;
							nextPointIndex = stackTop.pointIndex;
						}

						doBack = true;
					}

					if (doBack && 'back' in callback) {
						callback.back.call(null, context);
						context.offset = 0;
						doBack = false;
					}
				}
			}
		}
	};

})(fluid.command.history);


// fluid.command.helper
// --------------------
(function(helper) {
	'use strict';

	helper.createEventHandler = function(receiverName, commandName, staticContext) {
		return function(event) {
			var context = $.extend({}, staticContext || {});
			context.event = event; // this will set reference to the global event object so it's only usable on initial call
			fluid.command.create(commandName, context).dispatchTo(receiverName);
		};
	};

})(fluid.command.helper);


// To Do:
// ------
// 1. Compact/minify history, possibly putting dictionary to the root node


// For the future:
// ---------------
// 1. persist entire action history as it gets synced to the server; on the client, use a sliding window 
// 	  of N history points that get synced with the server and discarded as the users undoes and (re)does actions

fluid.module.define('fluid.i18n', function(module) {
	'use strict';

	// Just a few basic fixed date/time formatting functions this time to replace string building in the code

	var monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	function zeroPad(value, places) {
		var valueStr = value.toString();
		var padding = '';

		if (!places || valueStr.length < places) {
			for (var idx = 0, len = places - valueStr.length; idx < len; idx++)
				padding += '0';
		}

		return padding + valueStr;
	}

	function normalizeDate(date) {
		if (typeof date == 'number')
			return new Date(date);
		else
			return date || new Date(0);
	}

	module.formatDate = function(date) {
		date = normalizeDate(date);

		var result = date.getDate() + ' ' + monthShort[date.getMonth()];
		
		var year = date.getFullYear();
		if (year != new Date().getFullYear())
			result += ', ' + year;

		return result;
	};

	module.formatTime = function(date) {
		date = normalizeDate(date);
		return date.getHours() + ':' + zeroPad(date.getMinutes(), 2);
	};

	module.formatDateTime = function(date) {
		date = normalizeDate(date);
		return module.formatDate(date) + ', ' + module.formatTime(date);
	};

	module.formatDateTimeRelative = function(date) {
		date = normalizeDate(date);

		var result;
		var now = new Date();
		var secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

		if (secondsAgo < 60) { // within 1 minute
			result = 'just now';
		} else if (secondsAgo < 120) { // within 2 minutes
			result = 'a minute ago';
		} else if (secondsAgo < 600) { // within 10 minutes
			result = Math.floor(secondsAgo / 60).toString() + ' minutes ago';
		} else if (now.getDate() == date.getDate()) { // same day
			result = 'at ' + module.formatTime(date);
		} else if (now.getDate() - 1 == date.getDate()) { // yesterday
			result = 'yesterday, ' + module.formatTime(date);
		} else if (secondsAgo < 604800) { // within a week
			result = module.formatDateTime(date);
		} else {
			result = module.formatDate(date);
		}

		return result;
	};

});
// Draft model implementation
// ==========================
// This is in no way complete. Please DO NOT use this code. It will be reviewed and may be heavily modified.

fluid.module.define('fluid.model', function(module) {
	'use strict';

	var legacy = {
		storage: window.storage
	};

	var modelsModule = 'fluid.models';
	var instancePrototype = {};

	instancePrototype.store = function(id) {
		id = id || this.id;

		if (id) {
			// TODO: local storage only currently
			legacy.storage.set(id, this);
			this.trigger('change');
		}

		return this;
	};

	instancePrototype.fetch = function(id) {
		id = id || this.id;

		// TODO: local storage only currently
		var obj = legacy.storage.get(id);
		if (obj) {
			for (var prop in obj) {
				this[prop] = obj[prop];
			}
		}

		return this;
	};

	instancePrototype.remove = function(id) {
		id = id || this.id;

		// TODO: local storage only currently
		legacy.storage.remove(id);

		return this;
	};

	instancePrototype.validate = function() {
		// TODO: validation module?
	};

	fluid.event.mixinTo(instancePrototype);

	module.define = function(name, construct) {
		if (!construct)
			construct = function() {};

		construct.prototype = instancePrototype;

		// fluid.module.define returns module if already created or creates and returns module
		fluid.module.define(modelsModule)[name] = construct;

		// Allow fetching without explicitly creating instance first
		construct.fetch = function(id) {
			return new construct().fetch(id);
		};

		// Allow removing without creating instance
		construct.remove = function(id) {
			// TODO: local storage only currently
			construct.prototype.remove.call(null, id);
		};

		// Bind events to model to allow watching all instances
		fluid.event.mixinTo(construct);
	};

	// TODO: is there need for a separate collection module?

});
// Draft view implementation
// =========================
// This is in no way complete :)
//
// TODO: copypasted code from model; need common ancestor or mixin
// TODO: need something to send back commands to associated controller easier

fluid.module.define('fluid.view', function(module) {
	'use strict';

	var modelsModule = 'fluid.views';
	var modelName;
	var instancePrototype = {};

	/*
	instancePrototype.mapEvent = function(selector, eventName, what) {
		var command;

		switch (typeof what) {
			case 'object':
				command = what;
				break;

			case 'string':
				command = {command: what};
				break;

			case 'function':
				command = {func: what};
				break;

			default:
				return;
		}

		command.recipient == command.recipient || 'fluid.controllers.' + modelName;
	};
	*/

	module.define = function(name, construct) {
		//TODO this doesn't work with namespaced names
		//eh views.define('ui.tooltip') doesn't work correctly
		//you must do views['ui.tooltip'] instead :-(
		modelName = name;

		if (!construct)
			construct = function() {};

		//construct.prototype = instancePrototype;

		// fluid.module.define returns module if already created or creates and returns module
		fluid.module.define(modelsModule)[name] = construct;

		// TODO: view methods?
	};

	// TODO: 
	// -----
	// * bind to model?
	// * automatically rerender all bound views on model update (controlled by enabled/disabled state per view?)
});
// Draft controller implementation
// ===============================
// This is in no way complete :)
// The term "controller" is used here in loose sense just to separate out the code; this may change 
// after some experimentation with different MV* flavours

// TODO: alt prefix; most calls will be between different controllers so the code will be pestered
//       with fluid.controllers.this.doThat() and fluid.controllers.that.doThis() -- too verbose

fluid.module.define('fluid.controller', function(module) {
	'use strict';

	var moduleNamePrefix = 'fluid.controllers.';

	function makeConstructContext(controllerName) {
		return {
			name: controllerName,
			handleCommand: function(commandName, handler) {
				fluid.command.registerHandler(controllerName, commandName, handler);
			}
		};
	}

	module.define = function(name, construct) {
		if (name.substr(0, moduleNamePrefix.length) != moduleNamePrefix)
			name = moduleNamePrefix + name;

		// TODO: hmm, controllers need to be initialized no earler than document.ready; 
		//       make deferred init on demand/first use/etc? meanwhile, a quick fix
		$(document).ready(function() {
			fluid.module.define(name, construct, makeConstructContext(name));
		});
	};

});

fluid.model.define('bin', function(data) {
	'use strict';

	// TODO: create item model collection?
	this.items = data && data.items || [];

	this.add = function(item) {
		this.items.unshift(item);
	};

	this.remove = function(item) {
		for (var idx = 0, len = this.items.length; idx < len; idx++) {
			if (this.items[idx] === item) {
				this.items.splice(idx, 1);
			}
		}
	};

	this.clear = function() {
		this.items = [];
	};

	this.isEmpty = function() {
		return this.items.length == 0;
	};
});
// TODO: move entire bin here, including bin icon; this currently only accommodates bin contents

fluid.view.define('bin', function() {
	'use strict';

	// TODO: need global config
	var openDuration = 300, closeDuration = 300;
	var fadeInDuration = 200, fadeOutDuration = 200;
	var restoreItemId;

	function toggleRestore (itemElem) {
		var prevRestoreId = restoreItemId;

		if (restoreItemId) {
			$('#' + restoreItemId).
				closest('.binItem').
				find('.restore').
				fadeOut(fadeOutDuration);
			restoreItemId = null;
		}

		if (itemElem) {
			var itemId = itemElem.attr('data-itemid');
			if (prevRestoreId != itemId) {
				itemElem.
					find('.restore').
					fadeIn(fadeInDuration);
				restoreItemId = itemId;
			}
		}
	}

	function onRestoreClick (e) {
		// TODO: need something to send back commands to associated controller easier
		fluid.command.
			create('restore', {id: $(e.currentTarget).closest('.binItem').attr('data-itemid')}).
			dispatchTo('fluid.controllers.bin');
		e.stopPropagation();
	}

	function when (itemElem) {
		var ts = itemElem.data('ts');
		if (ts) {
			itemElem.
				find('.timestamp').
				text(fluid.i18n.formatDateTimeRelative(ts));
		}
	}

	this.isOpen = false;
	this.dropAreaElem = $('#trash');
	this.contentsElem = $('#trashContents').
		hide().
		bind('mousewheel', function (e) {
			e.stopPropagation(); // prevent page zoom on scroll
		});

	this.open = function () {
		if (this.isOpen)
			return;

		closePopups(this.contentsElem);

		this.contentsElem.
			find('.binItem').
			each(function() { when($(this)); });

		var binContents = this.contentsElem.
			css({
				'-webkit-transform' : 'scale(0.05)',
				'-moz-transform' : 'scale(0.05)'
			}).
			show();

		this.updateScrollbar();

		var inst = this;
		utils.animateRaf(
			function (progress) {
				inst.contentsElem.css({
					'-webkit-transform' : 'scale(' + progress + ')',
					'-moz-transform' : 'scale(' + progress + ')'
				});
			},
			openDuration,
			'easeOutBack',
			function() {
				inst.contentsElem.
					removeAttr('style').
					show();
			}
		);

		this.isOpen = true;
	};

	this.close = function () {
		if (!this.isOpen)
			return;

		var inst = this;
		utils.animateRaf(
			function (progress) {
				inst.contentsElem.css({
					'-webkit-transform' : 'scale(' + (1 - progress) + ')',
					'-moz-transform' : 'scale(' + (1 - progress) + ')'
				});
			},
			closeDuration,
			'easeInOutQuad',
			function () {
				inst.contentsElem.
					removeAttr('style').
					hide();
			}
		);

		toggleRestore();

		this.isOpen = false;
	};

	this.toggle = function () {
		if (this.isOpen)
			this.close();
		else
			this.open();
	};

	this.hide = function () {
		this.dropAreaElem.fadeOut(fadeOutDuration);
		this.contentsElem.fadeOut(fadeOutDuration);
	};

	this.show = function () {
		this.dropAreaElem.fadeIn(fadeInDuration);
	};

	/*this.updateState = function (bin) {
		var trashFull = this.dropAreaElem.find('#trashButtonContainer');
		var trashEmpty = this.dropAreaElem.find('#trashIcon');
		
		if (!bin || bin.isEmpty()) {
			trashFull.fadeOut(fadeOutDuration);
			trashEmpty.fadeIn(fadeInDuration);
		} else {
			trashFull.fadeIn(fadeOutDuration);
			trashEmpty.fadeOut(fadeInDuration);
		}
	};*/

	this.updateScrollbar = function (scroll) {
		$('.scrollHolder', this.contentsElem).tinyscrollbar_update(scroll || 'relative');
	};

	this.update = function (bin) {
		// TODO: build lists of added and removed items; add and fade in added item, fade out and remove removed item
		var content = this.contentsElem.find('.overview').empty();

		var items = bin && bin.items;
		if (!items || bin.isEmpty()) {
			$('#tmplBinEmpty').tmpl().appendTo(content);
		} else {
			for (var idx = 0, len = items.length; idx < len; idx++) {
				var item = items[idx];
				var type = item.obj.id.charAt(0);
				var itemElem;
				switch (type) {
					case 'p':
						// TODO: instantiate project folder view here, when available
						// TODO: move all this to project view

						var date = new Date(item.obj['created']);
						var tmplObj = $.extend(item.obj, {
							readonly: true,
							date: fluid.i18n.formatDate(date)
						});

						itemElem = $('#tmplBinnedProject').
							tmpl(tmplObj).
							appendTo(content);
						itemElem.find('.project').
							addClass('inactiveProject');
						break;

					case 'i':
						// TODO: instantiate library widget view here, when available
						itemElem = $('#tmplBinnedUpload').
							tmpl(item.obj).
							appendTo(content);
						break;

					default:
						// something wrong with saved bin data
						continue;
				}

				$('#tmplBinRestore').
					tmpl().
					on('click', onRestoreClick).
					appendTo(itemElem);

				itemElem.
					data('ts', item.ts).
					on('click', function(e) { toggleRestore($(e.currentTarget)); });
			}

			// TODO: stupid quick fix; move bin icon management to MVC and make it decide it's own visibility status
			this.dropAreaElem.removeClass('shown').show();
		}

		//this.updateState(bin);
		this.updateScrollbar();
	};

	$('.scrollHolder', this.contentsElem).tinyscrollbar();
	// TODO: proper init procedure
	//this.updateState();
});

fluid.controller.define('page', function(controller) {
	'use strict';

	// Wrap global `page` object defined in class-page.js, for namespacing reasons
	controller.legacy = {
		page: window.page,
		link: window.link,
		project: window.project
	};

	this.handleCommand('create', {
		execute: function(context) {
			if ('obj' in context) {
				controller.legacy.page.deserialize(context.obj, 'actionHistory');
				if ('link' in context)
					controller.legacy.link.deserialize(context.link);
			} else if ('x' in context && 'y' in context) {
				context.id = controller.legacy.page.create(context.x, context.y, context.mode);
			} else if ('mode' in context) {
				switch (context.mode) {
					case 'link':
						context.id = controller.legacy.page.addViaLinkDrop(0, 0, context.event, null);
						context.link = controller.legacy.link.serialize(context.id);
						break;

					case 'button':
						context.id = controller.legacy.page.createNew(context.event);
						break;
				}
			} else {
				context.id = controller.legacy.page.add(context.event);
			}

			if (context.id) fluid.controllers.page.selectPage(context.id);

			if (!context.id)
				return false;
		},

		revert: function(context) {
			context.obj = context.obj || controller.legacy.page.serialize(context.id);
			controller.legacy.page.detachFrame();
			controller.legacy.page.del($('#' + context.id));

			var pages = project.get("pages");

			if (pages.length >= 1) {
				fluid.controllers.page.selectPage(pages[pages.length-1]);
			} else {
				canvas2.zoomOut();
			}
		}
	});

	this.handleCommand('delete', {
		execute: function(context) {
			function getLinks() {
				if (!('links' in context)) {
					var ids = controller.legacy.page.get(context.id, 'widgets');
					ids.unshift(context.id);
					context.links = controller.legacy.link.serialize(ids);
				}
			}

			if (context.id) {
				context.obj = context.obj || controller.legacy.page.serialize(context.id);
				getLinks();
				controller.legacy.page.detachFrame();
				controller.legacy.page.del($('#' + context.id));
			} else if (context.event) {
				context.id = $('.screen.active').attr('id');
				context.obj = controller.legacy.page.serialize(context.id);
				getLinks();
				controller.legacy.page.deleteManual(context.event);
			}
		},

		revert: function(context) {
			controller.legacy.page.deserialize(context.obj, 'actionHistory');
			controller.legacy.link.deserialize(context.links);
			fluid.controllers.page.selectPage(context.id);
		}
	});

	this.handleCommand('clone', {
		execute: function(context) {
			if ('obj' in context) {
				controller.legacy.page.deserialize(context.obj);
			} else {
				context.id = controller.legacy.page.duplicate(context.event);
			}
		},

		revert: function(context) {
			context.obj = context.obj || controller.legacy.page.serialize(context.id);
			controller.legacy.page.detachFrame();
			controller.legacy.page.del($('#' + context.id));
		}
	});

	this.handleCommand('move', {
		execute: function(context) {
			if (!('fromX' in context)) {
				var pageObj = storage.get(context.id);
				context.fromX = pageObj.x;
				context.fromY = pageObj.y;
			}

			controller.legacy.page.move(context.id, context.x, context.y);
			fluid.controllers.page.selectPage(context.id);
		},

		revert: function(context) {
			controller.legacy.page.move(context.id, context.fromX, context.fromY);
			fluid.controllers.page.selectPage(context.id);
		}
	});

	this.handleCommand('settingHomePage', {
		execute: function(ctx) {
			var $page = $(ctx.event.currentTarget).closest(".screen");
			ctx.newHomeId = ctx.newHomeId || $page.attr('id');
			ctx.oldHomeId = ctx.oldHomeId || project.get('homepage');
			if(!$page.length) $page = $('#'+ctx.newHomeId);

			project.set({homepage : ctx.newHomeId});

			page.updateOptionsMenu();
			$('#'+ctx.oldHomeId).removeClass("homePage");
			$page.addClass("homePage");
		},

		revert: function(ctx) {
			project.set({homepage : ctx.oldHomeId});
			page.updateOptionsMenu();
			$('#'+ctx.newHomeId).removeClass("homePage");
			$('#'+ctx.oldHomeId).addClass("homePage");
		}
	});

	this.handleCommand('settingGridToggle', {
		execute: function(ctx) {
			grid.toggle();
		},

		revert: function(ctx) {
			grid.toggle();
		}
	});

	//TODO: add slider undo/redo - Yuri was probably changing something with grid at the moment

	this.handleCommand('settingDevice', {
		execute: function(ctx) {
			var $select = $(".deviceTypes.projectSettingsDevice");
			ctx.newDevice = ctx.newDevice || $select.find('option:selected').data('type');
			ctx.oldDevice = ctx.oldDevice || project.get('deviceModel');

			var wh = $select.find('option:selected').val().split(",");
			if (ctx.newDevice === 'Custom') {
				var w = $('.customDeviceSize.width input').val() | 0,
					h = $('.customDeviceSize.height input').val() | 0,
					minW = $('.customDeviceSize.width input').attr('min'),
					minH = $('.customDeviceSize.height input').attr('min');

				wh[0] = w < minW? minW: w;
				wh[1] = h < minH? minH: h;
			}

			wh[0] = wh[0] | 0;
			wh[1] = wh[1] | 0;
		
			//this should so not be in here sorry
			if (ctx.newDevice === "Custom") {
				$(".customDeviceSize").show();
			} else {
				$(".customDeviceSize").hide();
			}
			
			//$.each(wh, function(i,v){ wh[i] = parseInt(v, 10);} );
            //var min = Math.min(wh[0], wh[1]);
            //var max = Math.max(wh[0], wh[1]);
            //var orientation = project.get("orientation");
			//if(wh[0] == max) {
            //    orientation = 'Landscape';
            //} else {
            //    orientation = 'Portrait';
            //}
			//wh = orientation == "Portrait" ? [min, max] : [max, min] ;
			
			ctx.newSize = ctx.newSize || wh;
			ctx.oldSize = ctx.newSize || project.get('pageWH');
			
			if (ctx.newDevice === "Custom") {
				var customDeviceOpt = $(".projectSettingsDevice").children().filter("[data-type=Custom]");
				customDeviceOpt.text("Custom Display Size (" + wh.join("x") + ")");
			}

            project.set({"deviceModel" : ctx.newDevice});
			project.changeScreenSize(null, ctx.newSize);
			//page.updateOptionsMenu();
		},

		revert: function(ctx) {
            project.set({"deviceModel" : ctx.oldDevice});
			project.changeScreenSize(null, ctx.oldSize);
			//page.updateOptionsMenu();
		}
	});

	this.handleCommand('settingOrientation', {
		execute: function(ctx) {
            var $switchOpt = $(ctx.event.currentTarget);
            if ($switchOpt.hasClass("activeOption")) { return; }

			var $pageObj = $(".screen.active");
			ctx.pageId = ctx.pageId || $pageObj.attr('id');
			ctx.newOrientation = ctx.newOrientation || $switchOpt.attr("data-for");
		    ctx.oldOrientation = ctx.oldOrientation || controller.legacy.page.get(ctx.pageId, 'orientation');
			page.update({orientation: ctx.newOrientation}, ctx.pageId);
			var $page = $('#'+ctx.pageId);
			$page.each(page.resizeAfterOrient);
			page.updateOptionsMenu();
			hint.show("library");
			staticWidgets.zoomInBoundary();
		},

		revert: function(ctx) {
			page.update({orientation: ctx.oldOrientation}, ctx.pageId);
			var $page = $('#'+ctx.pageId);
			$page.each(page.resizeAfterOrient);
			page.updateOptionsMenu();
			hint.show("library");
			staticWidgets.zoomInBoundary();
		}
	});

	this.handleCommand('settingCustomPageSize', {
		execute: function(ctx) {
			var $page = project.getActivePage();
			ctx.pageId = ctx.pageId || $page.attr('id');
			var pageObj = storage.get(ctx.pageId);
			ctx.newWidth = ctx.newWidth || parseInt( $(".pageSize.rangeWidget.width>input").val(), 10 );
			ctx.newHeight = ctx.newHeight || parseInt( $(".pageSize.rangeWidget.height>input").val(), 10);
			ctx.oldWidth = ctx.oldWidth || pageObj.width;
			ctx.oldHeight = ctx.oldHeight || pageObj.height;

			//var projPageWH = project.get("pageWH");
			//if (projPageWH[0] != ctx.newWidth || projPageWH[1] != ctx.newHeight) {
			//	controller.legacy.page.resize(ctx.pageId, ctx.newWidth, ctx.newHeight);
			//}
            if (pageObj.width != ctx.newWidth || pageObj.height != ctx.newHeight) {
            	controller.legacy.page.resize(ctx.pageId, ctx.newWidth, ctx.newHeight);
                staticWidgets.showStaticBoundary(ctx.pageId);
				page.updateOptionsMenu();
            }
		},

		revert: function(ctx) {
			controller.legacy.page.resize(ctx.pageId, ctx.oldWidth, ctx.oldHeight);
			staticWidgets.showStaticBoundary(ctx.pageId);

			var $widthInput = $('#'+ctx.pageId+ ' .pageSize.rangeWidget.width>input');
			if( $widthInput.length && $widthInput.val() != ctx.oldWidth) {
				$widthInput.val(ctx.oldWidth);
			}
			var $heightInput = $('#'+ctx.pageId+ ' .pageSize.rangeWidget.height>input');
			if( $heightInput.length && $heightInput.val() != ctx.oldHeight) {
				$heightInput.val(ctx.oldHeight);
			}
            page.updateOptionsMenu();
		}
	});

	controller.getActivePageId = function () {
		// returns pageId or null if no active
		var activePageId = null;
		var activePageIds = project.getActivePage();

		if (activePageIds.length > 0) {
			activePageId = activePageIds[0].id;
		}

		return activePageId;
	};

	controller.selectPage = function (pageId) {
		if (!pageId || pageId === controller.getActivePageId()) return;

		var pageElem = $("#" + pageId);
        var screen = pageElem.closest(".screen");
		var duration = 200;
		var zoom = controller.legacy.project.get("currentZoom");

		//this was deemed annoying, but maybe we should bring it back later?
		// if (pageId === controller.getActivePageId()) {
			// duration = 0;
		// }

		controller.legacy.page.activate(pageElem, true, 'actionHistory');

		if (zoom == 1) { // zoom may be string numeral?
			zoomInAndCenterOnPage(screen, 1, 1, duration);
		}
	}
});

fluid.controller.define('widget', function(controller) {
	'use strict';

	// Wrap global `widget` object defined in class-page.js, for namespacing reasons
	controller.legacy = {
		project: window.project,
		page: window.page,
		widget: window.widget,
		link: window.link,
		propInspector: window.propInspector,
		propInspectorCtrl : window.propInspectorCtrl,
		colorPicker: window.colorPicker,
		contextMenu: window.contextMenu,
		group: window.group,
		staticWidgets : window.staticWidgets
	};

	function _mapIdArrayToSelector(ids) {
		return $($.map(ids, function(id) {
			return document.getElementById(id);
		}));
	}

	this.handleCommand('create', {
		execute: function(context) {
			context.pageId = context.pageId || $('#canvasPages .active').attr('id');
			page.hideOptionsMenu(); //hide page menu when widget is added
			propInspector.hideInspectors();
			propInspector.resetPropInspector();
			// hide and reset the porperty inspectors

			//redo
			if ('obj' in context) {
				controller.legacy.widget.deserialize(context.obj, context.pageId);
				_setPreviewVisibility();
			//dragged from lib
			} else if ('widgetId' in context) {
				context.id = controller.legacy.widget.add(context.event, { top:0, left:0 }, context.widgetId,
					$('#' + context.pageId).find(".widgetHolder"));
			//clicked in lib
			} else {
				context.id = controller.legacy.widget.addDefault.call(context.event.currentTarget, context.event);
			}

			//page needs to be redrawn only for redo command
			if(context.obj) {
				page.updateView(context.pageId);
			}
			context.obj = context.obj || controller.legacy.widget.serialize(context.id);
			fluid.controllers.page.selectPage(context.pageId);

			controller.legacy.group.drawExisting();
			controller.legacy.staticWidgets.alignAll();

			// update library
			// when dropped after dragging, context.widgetId is used
			// when clicked in library, context.event.target is used
			fluid.main.trigger('widgetDropped', {widgetId: context.widgetId || context.event.target.getAttribute('data-id')});
		},

		revert: function(context) {
			//context.obj = context.obj || controller.legacy.widget.serialize(context.id);
			if( $('#'+context.id).length) {
				controller.legacy.widget.remove(context.id);
				contextMenu.hide();
				propInspector.hideInspectors();
				propInspector.resetPropInspector();
				_setPreviewVisibility();
			} else {
				var serializedWdg = JSON.parse(context.obj);
				var allIds = [];
				for(var prop in serializedWdg) {
					if(serializedWdg.hasOwnProperty(prop) && prop !== 'id') {
						allIds.push(prop);
					}
				}
				for(var i=0; i<allIds.length; i++) {
					storage.remove(allIds[i]);
				}

				page.updateView(context.pageId);
			}


			fluid.controllers.page.selectPage(context.pageId);
			//page.updateView(context.pageId);
			controller.legacy.group.drawExisting();
		}
	});

	function _storeLinks(context) {
		context.links = [];

		// TODO: only store if a widget is actually linked
		var elem = _mapIdArrayToSelector(context.id);
		controller.legacy.widget.getLockTos(elem).each(function() {
			context.links.push(controller.legacy.link.serialize($(this).attr('id')));
		});
	}

	function _restoreLinks(context) {
		for (var idx = 0, len = context.links.length; idx < len; idx++) {
			var sel = controller.legacy.link.deserialize(context.links[idx]);
			_redrawSelectionBox(context);
		}
	}

	function _redrawSelectionBox(context)
	{
		var sel = $("#canvasPages .ui-selected");
		var multiSelBox = $("#multiSelBox");
		multiSelBox.remove();
		if(sel.length > 1) //redraw only if needed
		{
			//var sel = controller.legacy.group.createSelFromArray(listOfWidgets);
			controller.legacy.widget.drawMultiSelBox(sel);
			//controller.legacy.group.select(sel);
		}
	}
	
	this.handleCommand('delete', {
		execute: function(context) {
			context.pageId = context.pageId || $('#canvasPages .active').attr('id');
			context.widgetGroups = controller.legacy.group.store();
			
			if (!$.isArray(context.id))
				context.id = [context.id];

			if ('obj' in context) {
				controller.legacy.group.removeOnDelete(context.id);
				controller.legacy.widget.del(context.id);
			} else {
				context.obj = [];

				_storeLinks(context);
				
				controller.legacy.group.removeOnDelete(context.id);
				for (var idx = 0, len = context.id.length; idx < len; idx++) {
					context.obj.push(controller.legacy.widget.serialize(context.id[idx]));
					controller.legacy.widget.del($('#' + context.id[idx]));
				}
			}
			fluid.controllers.page.selectPage(context.pageId);
			controller.legacy.page.renderBlurs(context.pageId);
			controller.legacy.page.updateView(context.pageId);
		},

		revert: function(context) {
			for (var idx = 0, len = context.id.length; idx < len; idx++) {
				controller.legacy.widget.deserialize(context.obj[idx], context.pageId);
			}
			controller.legacy.group.restore(context);
			_restoreLinks(context);
			_setPreviewVisibility();

			//_restoreGroups(context); // !!!!redundant grouping
			fluid.controllers.page.selectPage(context.pageId);
			controller.legacy.page.renderBlurs(context.pageId);
			controller.legacy.page.updateView(context.pageId);
		}
	});

	function _setPreviewVisibility() {
		if (controller.legacy.project.hasWidgets())
			$('#previewView, #preview, #pagePreview').show().css({opacity: 1});
		else
			$('#previewView, #preview, #pagePreview').hide().css({opacity: 0});
	}

	this.handleCommand('clone', {
		execute: function(context) {
			//console.log(context);
			// lock the menu so it doesn't move to the new duplicate
			$("#contextMenuItems").addClass("locked");
			
			context.pageId = context.pageId || $('#canvasPages .active').attr('id');

			if ('obj' in context) {
				for (var idx = 0, len = context.id.length; idx < len; idx++) {
					controller.legacy.widget.deserialize(context.obj[idx], context.pageId);
				}
			} else {
				if (controller.legacy.widget.editing)
					return false;

				controller.legacy.widget.duplicate(context.event);
				// We are relying here on all duplicate widgets to be selected after cloning
				context.id = $('#canvasPages .ui-selected').map(function() { return $(this).attr('id'); }).get();
			}

			try {
				controller.legacy.page.renderBlurs(context.pageId);
			} catch (e) {}

			controller.legacy.page.updateView(context.pageId, {zoomOutOnly: true});
			controller.legacy.staticWidgets.alignAll();
		},

		revert: function(context) {
			if (!('obj' in context)) {
				context.obj = [];
				for (var idx = 0, len = context.id.length; idx < len; idx++) {
					context.obj[idx] = controller.legacy.widget.serialize(context.id[idx]);
				}
			}

			controller.legacy.widget.del(context.id);

			//page.updateView(context.pageId);

			contextMenu.hide();
			propInspector.resetPropInspector();
			controller.legacy.page.renderBlurs(context.pageId);
			controller.legacy.page.updateView(context.pageId, {zoomOutOnly: true});
		}
	});

	this.handleCommand('copy', {
		execute: function(context) {
			controller.legacy.widget.copy(context.event);
		}
	});

	this.handleCommand('cut', {
		execute: function(context) {
			context.pageId = context.pageId || $('#canvasPages .active').attr('id');

			if (!('obj' in context)) {
				context.id = $('#canvasPages .ui-selected').map(function() { return $(this).attr('id'); }).get();
				context.obj = [];

				_storeLinks(context);

				for (var idx = 0, len = context.id.length; idx < len; idx++) {
					context.obj[idx] = controller.legacy.widget.serialize(context.id[idx]);
				}
			}

			//page.updateView(context.pageId);
			//var groupOrder = controller.legacy.group.cut(context.id);
			controller.legacy.widget.cut(context.event, $($.map(context.id, function(id) { return document.getElementById(id); })));
			controller.legacy.page.renderBlurs(context.pageId);
		},

		revert: function(context) {
			for (var idx = 0, len = context.id.length; idx < len; idx++) {
				controller.legacy.widget.deserialize(context.obj[idx], context.pageId);
			}
			//page.updateView(context.pageId);
			_restoreLinks(context);
			controller.legacy.page.renderBlurs(context.pageId);
		}
	});

	this.handleCommand('paste', {
		execute: function(context) {
			context.pageId = context.pageId || $('#canvasPages .active').attr('id');

			if ('obj' in context) {
				for (var idx = 0, len = context.id.length; idx < len; idx++) {
					controller.legacy.widget.deserialize(context.obj[idx], context.pageId);
				}
			} else {
				controller.legacy.widget.paste(context.event);
				// We are relying here on all duplicate widgets to be selected after pasting
				context.id = $('#canvasPages .ui-selected').map(function() { return $(this).attr('id'); }).get();
				
				fluid.controllers.page.selectPage(context.pageId);
			}

			//page.updateView(context.pageId);
			controller.legacy.page.renderBlurs(context.pageId);
			controller.legacy.staticWidgets.alignAll();
		},

		revert: function(context) {
			if (!('obj' in context)) {
				context.obj = [];
				for (var idx = 0, len = context.id.length; idx < len; idx++) {
					context.obj[idx] = controller.legacy.widget.serialize(context.id[idx]);
				}
			}

			for (var idx = 0, len = context.id.length; idx < len; idx++) {
				controller.legacy.widget.del($('#' + context.id[idx]));
			}

			//page.updateView(context.pageId);
			contextMenu.hide();
			propInspector.resetPropInspector();
			controller.legacy.page.renderBlurs(context.pageId);
		}
	});

	this.handleCommand('move', {
		execute: function(context) {
			//saving old position, executing move and saving new position
			if(!context.skipViewAdjustment) {
				_moveOrNudge(context, function() {
					var roots = $($.map(context.id, function(id) { return document.getElementById(id); }));
					controller.legacy.widget._savePosition(roots);
				});
			//when called from widget._nudge function - elements have been updated, only widgets data need to be saved
			} else {
				var roots = $($.map(context.id, function(id) { return document.getElementById(id); }));
				controller.legacy.widget._savePosition(roots);
				delete context.skipViewAdjustment;
			}

            var fromPageObj = storage.get(context.fromPage);
            var toPageObj = storage.get(context.toPage);
            var wdgObj;
            for (var idx = 0, len = context.id.length; idx < len; idx++) {
                if(context.fromPage !== context.toPage) {
                    for(var i=0; i<fromPageObj.widgets.length; i++) {
                        wdgObj = storage.get(fromPageObj.widgets[i]);
                        if(wdgObj.lockTo === context.id[idx]) {
                            toPageObj.widgets.push(fromPageObj.widgets[i]);
                            fromPageObj.widgets.splice(i, 1);
                            i--;
                        }
                    }

                    storage.set(context.toPage, toPageObj);
                    storage.set(context.fromPage, fromPageObj);
                }
            }

            if(context.fromPage !== context.toPage && context.needViewUpdate) {
				controller.legacy.page.updateView(context.toPage);
				controller.legacy.page.updateView(context.fromPage);

                controller.legacy.link.update($('#'+context.toPage));
                controller.legacy.link.update($('#'+context.fromPage));
            } else if( context.needViewUpdate ) {
				page.updateView(context.toPage);
			}

			context.needViewUpdate = true;


			fluid.controllers.page.selectPage(context.toPage);
			controller.legacy.group.drawExisting(); //if CTRL + Y
			controller.legacy.page.renderBlurs(context.toPage);

			//controller.legacy.staticWidgets.destroyOutsideBounds(context.id);
		},

		revert: function(context) {
            var fromPageObj = storage.get(context.toPage);
            var toPageObj = storage.get(context.fromPage);
            var wdgObj;
			for (var idx = 0, len = context.id.length; idx < len; idx++) {
				controller.legacy.widget.moveTo(context.id[idx], context.fromPos[idx]);

                if(context.fromPage !== context.toPage) {
                    //command revert - from/to are reversed
                    for(var i=0; i<fromPageObj.widgets.length; i++) {
                        wdgObj = storage.get(fromPageObj.widgets[i]);
                        if(wdgObj.lockTo === context.id[idx]) {
                            toPageObj.widgets.push(fromPageObj.widgets[i]);
                            fromPageObj.widgets.splice(i, 1);
                            i--;
                        }
                    }
                    storage.set(context.toPage, fromPageObj);
                    storage.set(context.fromPage, toPageObj);
                }
			}

            if(context.fromPage !== context.toPage) {
				controller.legacy.page.updateView(context.toPage);
				controller.legacy.page.updateView(context.fromPage);

                controller.legacy.link.update($('#'+context.toPage));
                controller.legacy.link.update($('#'+context.fromPage));
            } else {
				page.updateView(context.toPage);
			}
			
			
			updateTLWH();
			_redrawSelectionBox(context);

			fluid.controllers.page.selectPage(context.toPage);
			controller.legacy.group.drawExisting();
			controller.legacy.page.renderBlurs(context.toPage);
			
			controller.legacy.contextMenu.place();
		}
	});
	
	this.handleCommand('groupWidgets', {
		execute: function(context) {
			//console.log("grouping IN ACTION HISTORY");

			controller.legacy.group.create(context.sel);
			controller.legacy.group.select(context.sel);
			$(".groupWidgetHolder").removeClass("groupWithoutBorder");
		},

		revert: function(context) {
			//console.log("UNGROUP",context);
			controller.legacy.group.ungroup(context.sel);
		}
	});
	
	this.handleCommand('ungroupWidgets', {
		execute: function(context) {
			//console.log("UNGROUPPPP",context);
			controller.legacy.group.ungroup(context.sel);
		},

		revert: function(context) {
			//console.log("GRRRROOOOUIUUUUUP",context);
			controller.legacy.group.create(context.sel);
			controller.legacy.group.select(context.sel);
			$(".groupWidgetHolder").removeClass("groupWithoutBorder");
		}
	});
	
	this.handleCommand('staticToForeground', {
		execute: function(context) {
			controller.legacy.staticWidgets.create(context.sel,context.direction);
			controller.legacy.staticWidgets.zAlignWidgets(context.sel);
		},

		revert: function(context) {
			/*if(context.pastState){
				var dir = 'toBackground'; //send everything back
				controller.legacy.staticWidgets.create(context.sel,dir);
				controller.legacy.staticWidgets.zAlignWidgets(context.sel,dir);
			}
			else {*/
				controller.legacy.staticWidgets.destroy(context.sel);
				controller.legacy.staticWidgets.undoZalign(context.order);
			//}
		}
	});
	/*
	this.handleCommand('staticToBackground', {
		execute: function(context) {
			controller.legacy.staticWidgets.create(context.sel,context.direction);
			controller.legacy.staticWidgets.zAlignWidgets(context.sel,context.direction);
		},

		revert: function(context) {
			if(context.pastState){
				var dir = 'toForeground'; //send everything back
				controller.legacy.staticWidgets.create(context.sel,dir);
				controller.legacy.staticWidgets.zAlignWidgets(context.sel,dir);
			}
			else {
				controller.legacy.staticWidgets.destroy(context.sel);
				controller.legacy.staticWidgets.undoZalign(context.order);
			}
		}
	});
	*/
	this.handleCommand('removeStaticWidgets', {
		execute: function(context) {
			controller.legacy.staticWidgets.destroy(context.sel);
		},

		revert: function(context) {
			//var getDirection = staticWidgets.getPastDirection(context.pastState);
			//controller.legacy.staticWidgets.create(context.sel,getDirection);
			controller.legacy.staticWidgets.create(context.sel);
		}
	});

	function _moveOrNudge(context, exec) {
		if ('toPos' in context) {
			for (var idx = 0, len = context.id.length; idx < len; idx++) {
				controller.legacy.widget.moveTo(context.id[idx], context.toPos[idx]);
			}
			updateTLWH();
		} else {
			context.fromPos = [];
			context.toPos = [];

			for (var idx = 0, len = context.id.length; idx < len; idx++) {
				var tlwh = controller.legacy.widget.get(context.id[idx]).tlwh;
				context.fromPos[idx] = [tlwh[0], tlwh[1]];
			}

			if (exec.call() === false)
				return false;

			for (var idx = 0, len = context.id.length; idx < len; idx++) {
				var tlwh = controller.legacy.widget.get(context.id[idx]).tlwh;
				context.toPos[idx] = [tlwh[0], tlwh[1]];
			}
		}
	}

	this.handleCommand('resize', {
		execute: function(context) {
			if (context.propertyId) {
				_applyProperty('shape', context.propertyId, context.to, context.id, context.executed);
				// Only reimport changed properties on redo
				context.executed = true;
			} else {
				var elem = $('#' + context.id);
				//redo resize
				if (context.toTLWH) {
					if(elem && elem.length) {
						_resize(elem, context.pageId, context.toTLWH);
					} else {
						var wdgObj = storage.get(context.id);
						wdgObj.tlwh = context.toTLWH;
						storage.set(context.id, wdgObj);
						page.updateView(context.pageId);
					}
				//first resize
				} else {
					widget._resize(elem, context.pageId);
					widget._resizeTextContainer(elem); // this is a quick fix for a text editing bug
				}
				context.toTLWH = [parseInt(elem.css("top")), parseInt(elem.css("left")), elem.width(), elem.height()];
	
				controller.legacy.propInspector.update();
			}
			
			//controller.legacy.staticWidgets.destroyOutsideBounds([context.id]); // only arrays have to be passed into this function
			controller.legacy.contextMenu.place();
			controller.legacy.page.renderBlurs(context.pageId);
		},

		revert: function(context) {
			if (context.propertyId) {
				_applyProperty('shape', context.propertyId, context.from, context.id, true);
			} else {
				var elem = $('#' + context.id);
				//console.log('un context.toTLWH: ', context.toTLWH, $('#' + context.id));
				if(elem && elem.length) {
					_resize(elem, context.pageId, context.fromTLWH);
					controller.legacy.propInspector.update();
				} else {
					var wdgObj = storage.get(context.id);
					wdgObj.tlwh = context.fromTLWH;
					storage.set(context.id, wdgObj);
					page.updateView(context.pageId);
				}

			}
			
			controller.legacy.contextMenu.place();
			controller.legacy.page.renderBlurs(context.pageId);
		}
	});

	function _resize(elem, pageId, tlwh) {
		elem.css({
			top: tlwh[0] + 'px',
			left: tlwh[1] + 'px',
			width: tlwh[2] + 'px',
			height: tlwh[3] + 'px'
		});
		controller.legacy.widget._resize(elem, pageId, tlwh);
	}

	this.handleCommand('setBackgroundColor', {
		execute: function(context) {
			context.pageId = context.pageId || $('#canvasPages .active').attr('id');

			if (!$.isArray(context.id))
				context.id = [context.id];

			var elem = _mapIdArrayToSelector(context.id);
			if ('fromColor' in context) {
				_applyBackground(context.id, context.color);
				_updateBackgroundPicker(elem);
			} else {
				context.fromColor = _getBackground(context.id);
				controller.legacy.colorPicker.applyToBackground(context.event, context.color, elem, context.color);
				context.color = _getBackground(context.id);			
			}
			fluid.controllers.page.selectPage(context.pageId);
			controller.legacy.page.renderBlurs(context.pageId);
		},

		revert: function(context) {
			var elem = _mapIdArrayToSelector(context.id);
			_applyBackground(context.id, context.fromColor);
			_updateBackgroundPicker(elem);
			fluid.controllers.page.selectPage(context.pageId);
			controller.legacy.page.renderBlurs(context.pageId);
		}
		
	});

	function _getBackground(ids) {
		var bg = [];
		for (var idx = 0, len = ids.length; idx < len; idx++) {
			var widget = storage.get(ids[idx]);
			if (widget) {
				bg[idx] = {
					bg: widget.bg,
					bgc: widget.bgc,
					bgd: widget.bgd
				};
			}
		}
		return bg;
	}

	function _applyBackground(ids, color) {
		for (var idx = 0, len = ids.length; idx < len; idx++) {
			controller.legacy.widget.set(color[idx], ids[idx]);
			controller.legacy.colorPicker.redraw(ids[idx]);
		}
	}

	function _updateBackgroundPicker(elem) {
		var colorPicker = controller.legacy.colorPicker;
		//console.log(colorPicker.isOpen());
		if(	$("#colorPicker").is(":visible") ) {
			var widget = storage.get(elem.attr('id'));
			var reSelect = true;
			if ($.inArray(widget.bg, ['l','r','ld','ld2','lrl']) > -1) {
				switch (propInspector.lastAction) {
					case 'showAdvancedGradientEditor':
						//colorPicker.showAdvancedGradient(null, elem);
						controller.legacy.propInspector.showCorrectScreen('showAdvancedGradientEditor');
						reSelect = false;
						break;

					case 'showColorStopEditor':
						//colorPicker.selectStopColor(elem); 
						controller.legacy.propInspector.showCorrectScreen('showColorStopEditor');
						reSelect = false;
						break;
				}
			}

			if (reSelect) {
				//colorPicker.currentPage = null;
				//colorPicker.showSubmenu('background', elem);
				controller.legacy.propInspector.showBackground();
			}
		}
	}

	this.handleCommand('setBorderColor', {
		execute: function(context) {
			context.pageId = context.pageId || $('#canvasPages .active').attr('id');

			if (!$.isArray(context.id))
				context.id = [context.id];

			var elem = _mapIdArrayToSelector(context.id);
			elem = $(elem).not(".backgroundWidget");
			context.fromColor = context.fromColor || _getRgbColor(controller.legacy.colorPicker.extractBorderColor(elem.attr('id')));

			controller.legacy.colorPicker.applyToBorder(context.color, elem);

			// Only reimport color on redo
			if (!context.executed) {
				context.executed = true;
			} else {
				controller.legacy.propInspector.update(elem.attr('id')); // this actually only updates color picker
			}
			fluid.controllers.page.selectPage(context.pageId);
			controller.legacy.page.renderBlurs(context.pageId);
		},

		revert: function(context) {
			var elem = _mapIdArrayToSelector(context.id);
			controller.legacy.colorPicker.applyToBorder(context.fromColor, elem);
			controller.legacy.propInspector.update(elem.attr('id'));
			fluid.controllers.page.selectPage(context.pageId);
			controller.legacy.page.renderBlurs(context.pageId);
		}
	});

	this.handleCommand('setColor', {
		execute: function(context) {
			context.pageId = context.pageId || $('#canvasPages .active').attr('id');
			
			if (!$.isArray(context.id))
				context.id = [context.id];
			//console.log(context);
			if (context.property == 'opacity') {
				for (var idx = 0, len = context.id.length; idx < len; idx++)
					_applyProperty(context.mode, context.propertyId, context.to, context.id[idx], context.executed);
				// Only reimport changed properties on redo
				context.executed = true;
			} else {
				var elem = _mapIdArrayToSelector(context.id);
				
				context.fromColor = context.fromColor || _getRgbColor(controller.legacy.colorPicker.extractTextColor(elem));

				controller.legacy.colorPicker.applyToText(context.color, elem);

				// Only reimport color on redo
				if (!context.executed) {
					context.executed = true;
				} else {
					controller.legacy.propInspector.update(); // this actually only updates color picker
				}
			}
			fluid.controllers.page.selectPage(context.pageId);
			controller.legacy.page.renderBlurs(context.pageId);
		},

		revert: function(context) {
			if (context.property == 'opacity') {
				for (var idx = 0, len = context.id.length; idx < len; idx++)
				{	
					_applyProperty(context.mode, context.propertyId, context.from[idx], context.id[idx], true);
				}
				controller.legacy.propInspector.update();
			} else {
				var elem = _mapIdArrayToSelector(context.id);
				//console.log("ffdsfsdf reverting");
				controller.legacy.colorPicker.applyToText(context.fromColor, elem);
				controller.legacy.propInspector.update();
			}
			fluid.controllers.page.selectPage(context.pageId);
			controller.legacy.page.renderBlurs(context.pageId);
		}
	});

	function _getRgbColor(color) {
		var match = color && color.match(/rgba\s*\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+(?:\.\d+)?)\s*\)/);
		if (match) {
			color = 'rgb(' + match[1] + ',' + match[2] + ','+ match[3] + ')' ;
		}
		return color;
	}

	var propertyInspectorCommands = [
		{ name: 'setBorder', mode: 'shape' },
		{ name: 'setFont', mode: 'text' },
		{ name: 'setTextProperty', mode: 'text' }
	];

	for (var pidx = 0; pidx < propertyInspectorCommands.length; pidx++) {
		this.handleCommand(propertyInspectorCommands[pidx].name, (function(mode) { return {
			execute: function(context) {
				if (!$.isArray(context.id))
					context.id = [context.id];

				for (var idx = 0, len = context.id.length; idx < len; idx++)
					_applyProperty(mode, context.propertyId, context.to, context.id[idx], context.executed);

				// Only reimport changed properties on redo
				context.executed = true;
			},

			revert: function(context) {
				for (var idx = 0, len = context.id.length; idx < len; idx++)
					_applyProperty(mode, context.propertyId, context.from[idx], context.id[idx], true);
			}
		}})(propertyInspectorCommands[pidx].mode));
	}

	function _applyProperty(mode, property, value, widgetId, reimport) {
		//console.log("gfdshkghfhghdhgdhghdfhghdghdgdfgkhjdkjhgdf",mode, property, value, widgetId);
		controller.legacy.propInspectorCtrl.exportProps(mode, property, value, widgetId);
		
		// If property inspector is open, update displayed values
		if (reimport && (controller.legacy.propInspectorCtrl.lastAction == 'showTextInspector')) {
			controller.legacy.propInspectorCtrl.updateTextProps();
		}
		if (reimport && (controller.legacy.propInspectorCtrl.lastAction == 'showShapeInspector')) {
			controller.legacy.propInspectorCtrl.updateShapeProps();
		}
	}

	this.handleCommand('addSegment', {
		execute: function(context) {
			context.pageId = context.pageId || $('#canvasPages .active').attr('id');
			
			if ('obj' in context) {
				for (var idx = 0, len = context.obj.length; idx < len; idx++) {
					var obj = context.obj[idx];
					controller.legacy.widget.deserialize(obj.seg, context.pageId, obj.rootId, obj.pos);
				}
			} else {
				var selIds = $("#canvasPages .ui-selected").map(function() { return $(this).attr('id'); }).get();
				context.id = controller.legacy.widget._addSegment(context.event);
				controller.legacy.widget.select(null, _mapIdArrayToSelector(selIds));
			}
			fluid.controllers.page.selectPage(context.pageId);
			controller.legacy.staticWidgets.alignAll();
			controller.legacy.page.renderBlurs(context.pageId);
		},

		revert: function(context) {
			context.obj = [];
			for (var idx = 0, len = context.id.length; idx < len; idx++) {
				var id = context.id[idx];
				var segEl = $('#' + id);
				context.obj.push({
					id: id,
					rootId: segEl.attr('data-lockto'),
					seg: controller.legacy.widget.serialize(id),
					pos: controller.legacy.widget._getSegmentPosition(segEl)
				});

				controller.legacy.widget._deleteSegment(null, context.id[idx]);
			}
			fluid.controllers.page.selectPage(context.pageId);
			controller.legacy.page.renderBlurs(context.pageId);
		}
	});
	
	this.handleCommand('deleteSegment', {
		execute: function(context) {
			context.pageId = context.pageId || $('#canvasPages .active').attr('id');

			if ('obj' in context) {
				for (var idx = 0, len = context.obj.length; idx < len; idx++) {
					controller.legacy.widget._deleteSegment(null, context.obj[idx].id);
				}
			} else {
				context.obj = [];
				controller.legacy.widget.getSegmentsFromSelection('.ui-selected').each(function() {
					var $this = $(this);
					var id = $this.attr('id');
					var	rootId = $this.attr('data-lockto');

					function getLinks(id) {
						var links = [];
						controller.legacy.widget.getLockTos($('#' + id)).each(function() {
							links.push(controller.legacy.link.serialize($(this).attr('id')));
						});
						return links;
					}
					
					// if this is the last segment, store entire root widget
					if (storage.get(rootId).sc == 1) {
						context.obj.push({
							id: id,
							rootId: rootId,
							rootObj: controller.legacy.widget.serialize(rootId),
							links: getLinks(rootId)
						});
					} else {
						context.obj.push({
							id: id,
							rootId: rootId,
							seg: controller.legacy.widget.serialize(id),
							pos: controller.legacy.widget._getSegmentPosition($this),
							links: getLinks(id)
						});
					}
				});

				controller.legacy.widget._deleteSegment(context.event);
			fluid.controllers.page.selectPage(context.pageId);
			}

			controller.legacy.page.renderBlurs(context.pageId);
		},

		revert: function(context) {
			for (var idx = 0, len = context.obj.length; idx < len; idx++) {
				var obj = context.obj[idx];
				if ('rootObj' in obj) {
					controller.legacy.widget.deserialize(obj.rootObj, context.pageId);
				} else {
					controller.legacy.widget.deserialize(obj.seg, context.pageId, obj.rootId, obj.pos);
				}

				_restoreLinks(obj);
			}
			_setPreviewVisibility();
			fluid.controllers.page.selectPage(context.pageId);
			controller.legacy.page.renderBlurs(context.pageId);
		}
	});

	this.handleCommand('setText', {
		execute: function(context) {
			context.pageId = context.pageId || $('#canvasPages .active').attr('id');

			if (!('fromText' in context)) {
				var widget = storage.get(context.id);
				context.fromText = widget && widget.tc;
			}

			controller.legacy.widget.set({tc: context.text}, context.id);
			$('#' + context.id + ' .widgetText').text(context.text);

			fluid.controllers.page.selectPage(context.pageId);
			controller.legacy.page.renderBlurs(context.pageId);
			controller.legacy.page.updateView(context.pageId);
		},

		revert: function(context) {
			controller.legacy.widget.set({tc: context.fromText}, context.id);
			$('#' + context.id + ' .widgetText').text(context.fromText);
			fluid.controllers.page.selectPage(context.pageId);
			controller.legacy.page.renderBlurs(context.pageId);
			controller.legacy.page.updateView(context.pageId);
		}
	});

	this.handleCommand('setZOrder', {
		execute: function(context) {
			context.pageId = context.pageId || $('#canvasPages .active').attr('id');

			if ('order' in context) {
				var elem = _mapIdArrayToSelector(context.id);
			} else {
				// Store next element ID for each element; elements are selected in DOM order
				context.order = [];
				var elem = $([]);

				for (var idx = 0, len = context.id.length; idx < len; idx++) {
					var thisElem = $('#' + context.id[idx]);
					elem = elem.add(thisElem);

					var fromNextId = thisElem.nextAll('.rootWidget').first().attr('id');
					context.order.push({id: context.id[idx], fromNextId: fromNextId});
				}
			}

			// Change z-order for each widget individually to keep the element z-order; cmZAlign2 can change 
			// the z-order of elements in selection
			function changeOrder(elem) {
				controller.legacy.contextMenu.cmZAlign2(context.event, $(elem), ({
					toFront: 'cmFront',
					toBack: 'cmBack',
					frontOne: 'cmFrontOne',
					backOne: 'cmBackOne'
				})[context.dir]);
			}

			if (context.dir == 'toFront' || context.dir == 'backOne') {
				for (var idx = 0, len = context.order.length; idx < len; idx++) {
					changeOrder(elem.get(idx));
				}
			} else {
				for (var idx = context.order.length - 1; idx >= 0; idx--) {
					changeOrder(elem.get(idx));
				}
			}
			controller.legacy.page.renderBlurs(context.pageId);
			controller.legacy.staticWidgets.alignAll();
		},

		revert: function(context) {
			for (var idx = context.order.length - 1; idx >= 0; idx--) {
				var obj = context.order[idx];
				var elem = $('[data-lockto="' + obj.id + '"]');
				if (obj.fromNextId) {
					elem.detach().insertBefore('#' + obj.fromNextId);
				} else {
					var parent = elem.parent();
					elem.detach().appendTo(parent);
				}
			}
			controller.legacy.page.renderBlurs(context.pageId);
		}
	});

	this.handleCommand('align', {
		execute: function(context) {
			context.pageId = context.pageId || $('#canvasPages .active').attr('id');

			if (!('fromPos' in context)) {
				context.fromPos = [];
				for (var idx = 0, len = context.id.length; idx < len; idx++) {
					var tlwh = controller.legacy.widget.get(context.id[idx]).tlwh;
					context.fromPos[idx] = [tlwh[0], tlwh[1]];
				}
			}

			controller.legacy.contextMenu.cmAlign2(context.event, _mapIdArrayToSelector(context.id), ({
				left: 'cmAlignLeft',
				right: 'cmAlignRight',
				top: 'cmAlignTop',
				bottom: 'cmAlignBottom',
				middle: 'cmAlignMiddle',
				center: 'cmAlignCenter'
			})[context.dir]);
			fluid.controllers.page.selectPage(context.pageId);
			controller.legacy.page.renderBlurs(context.pageId);
		},

		revert: function(context) {
			for (var idx = 0, len = context.id.length; idx < len; idx++) {
				controller.legacy.widget.moveTo(context.id[idx], context.fromPos[idx]);
			}
			updateTLWH();
			_redrawSelectionBox(context);
			fluid.controllers.page.selectPage(context.pageId);
			controller.legacy.page.renderBlurs(context.pageId);
		}
	});
});

fluid.controller.define('link', function(controller) {
    'use strict';

    controller.legacy = window.link;

    this.handleCommand('create', {
        execute: function(context) {
            if(!context.linkId) context.linkId = utils.guid("l");
            var $canvas = controller.legacy.add(context.originId,  context.destinationId, "ahref", context.linkId);
            
            controller.legacy.draw( $canvas, context.originId,  context.destinationId, "ahref");
        },

        revert: function(context) {
            controller.legacy.del(context.linkId);
        }
    });

    this.handleCommand('delete', {
        execute: function(context) {
            context.linkId = context.linkId || $(".openLinkMenu").closest(".link").attr("id");
            var links = project.get('links');
            var linkIdx = links.linkCanvId.indexOf(context.linkId);
            //context.allLinks = context.allLinks !== undefined ? context.allLinks : $('#canvas').eq(0).hasClass('zoomedOut');
            context.allLinks = false;

            if(!context.allLinks) {
                context.originId = links.linkOrigin[linkIdx];
                context.destinationId = links.linkDest[linkIdx];
                context.transition = links.transType[linkIdx];
                context.trigger = links.triggerType[linkIdx];

                controller.legacy.del(context.linkId);
            } else {
                context.oldLinks = controller.legacy.serialize();

                $('#canvasLinks .link').remove();
                links.linkOrigin = [];
                links.linkDest = [];
                links.linkCanvId = [];
                links.linkType = [];
                links.transType = [];
                links.triggerType = [];
                project.save();
                $("#canvas").click();
            }

            //controller.legacy.del(context.linkId);
        },

        revert: function(context) {
            if(!context.allLinks) {
                var $canvas = controller.legacy.add(context.originId,  context.destinationId, "ahref", context.linkId, context.transition, context.trigger);
                controller.legacy.draw( $canvas, context.originId,  context.destinationId, "ahref");
            } else {
                controller.legacy.deserialize(context.oldLinks);
            }

        }
    });


    this.handleCommand('changeProperty', {
        execute: function(context) {

            var $select = $(context.event.target),
                links = project.get("links"),
                linkIndex;

            context.property = context.property || $select.eq(0).hasClass('transitionSelector') ? 'transType' : 'triggerType';
            context.newVal = context.newVal || $select.val();
            context.linkId = context.linkId || $(".openLinkMenu").parents(".link").attr("id");

            linkIndex = $.inArray(context.linkId, links.linkCanvId);
            if( linkIndex === -1 ) return;

            context.oldVal = context.oldVal || links[context.property][linkIndex];
            links[context.property][linkIndex] = context.newVal;

            if( $(".openLinkMenu").parents(".link").attr("id") === context.linkId) {
                $(context.property === 'transType' ? '.transitionSelector' : '.linkTriggerSelector').val(context.newVal);
            }

            project.save();
        },

        revert: function(context) {
            var links = project.get("links"),
                linkIndex = $.inArray(context.linkId, links.linkCanvId);

            if( linkIndex === -1 ) return;
            links[context.property][linkIndex] = context.oldVal;

            if( $(".openLinkMenu").parents(".link").attr("id") === context.linkId) {
                $(context.property === 'transType' ? '.transitionSelector' : '.linkTriggerSelector').val(context.oldVal);
            }

            project.save();

        }
    });

});

// TODO: need to define a way of setting bin icon visibility in response to anything happening

fluid.controller.define('bin', function(controller) {
	'use strict';

	var legacy = {
		project: window.project,
		account: window.account,
		lib: window.lib,
		storage: window.storage,
		ajax: window.ajax,
		widgets: window.widgets
	};
	
	var storeId = 'bin';
	var bin = fluid.models.bin.fetch(storeId);
	var view = new fluid.views.bin();
	
	controller.init = function() {
		bin.bind('change', view.update, view).trigger('change'); // trigger change event to render fetched items
	};

	controller.open = function() {
		view.open();
	};

	controller.close = function() {
		view.close();
	};

	controller.clear = function() {
		bin.clear();
		bin.store(storeId);
	};

	controller.isEmpty = function() {
		return bin.items.length == 0;
	};

	controller.hide = function() {
		view.hide();
	};

	controller.show = function() {
		view.show();
	};

	controller.showNonEmpty = function() {
		if (!this.isEmpty())
			this.show();
	};

	function addToBin(obj) {
		if (obj) {
			bin.add({
				obj: obj,
				ts: new Date().valueOf()
			});
			bin.store(storeId);

			controller.show();
		}
	}

	function projectRestored(res) {
		res = JSON.parse(res); // TODO: omg, why do I have to do this here?
		var item = findById(res.id);
		if (item) {
			delete item.obj.id;
			legacy.storage.set(res.id, item.obj);

			legacy.account.addProjectId(res.id);
			legacy.project.load();

			bin.remove(item);
			bin.store(storeId);
		}
		
		if (bin.items.length == 0)
			view.close();
	}

	function uploadRestored(res) {
		var item = findById(res.id);
		if (item) {
			item.obj.upload.removed = 0;
			legacy.storage.set(res.id, item.obj.upload);

//			//not removing the uploads from store anymore, just marking them with removed flag
//			legacy.widgets.summary[res.id] = item.obj.upload;

			var uploads = legacy.account.get('uploads');
			uploads.splice(item.obj.index, 0, {id: res.id, s: true});
			legacy.account.set({'uploads': uploads});

			legacy.lib.draw('Uploads');

			bin.remove(item);
			bin.store(storeId, bin);
		}
		
		if (bin.items.length == 0)
			view.close();
	}

	// TODO: this should not be here; actually, we should not even know about the bin items data structure
	//       in this controller; data operations should be delegated to associated items' controllers
	function findById(id) {
		var item;
		for (var idx = 0, len = bin.items.length; idx < len; idx++) {
			if (bin.items[idx].obj.id == id) {
				item = bin.items[idx];
				break;
			}
		}
		return item;
	}
	
	// TODO: resolve dropping of pages and widgets; they are currently being handled separately
	// TODO: do we need support for command routing to forward 'delete' command to pages and widgets 
	//       without storing 'drop' in command history?
	this.handleCommand('drop', function(context) {
		var objType = context.id.charAt(0);
		var obj;
		switch (objType) {
			case 'w': // widget
				// TODO: forward 'delete' command to fluid.controllers.widget?
				return;

			case 'x': // page
				// TODO: forward 'delete' command to fluid.controllers.page?
				return;

			case 'p': // project
				legacy.project.del(context.id, function(obj) {
					obj.id = context.id;
					addToBin(obj);
					fluid.main.trigger('projectRemoved');
				});
				break;

			case 'i': // upload
				legacy.account.removeUpload(context.id, function(obj) {
					obj.id = context.id;
					addToBin(obj);
				});
				break;

			default:
				throw 'Unexpected object id: ' + context.id;
		}
	});

	this.handleCommand('restore', function(context) {
		var objType = context.id.charAt(0);
		var item;
		switch (objType) {
			case 'p': // project
				ajax.restore(context.id, projectRestored /*, TODO: error handler */);
				break;

			case 'i': // upload
				ajax.apiCall('img/bin', 'post', context.id, {restore: true}, uploadRestored /*, TODO: error handler */);
				break;

			default:
				throw 'Unexpected object id: ' + context.id;
		}
	});

	// TODO: this should not be a command. review commands: they are only for repeatable/revertable actions to 
	//       support undo/collaboration/etc
	this.handleCommand('toggle', function(context) {
		if (view.isOpen || bin.items.length > 0)
			view.toggle();
	});

});

// Prototype timeline visualization
// ================================

fluid.view.define('timeline', function() {

	// TODO: use global config?
	var gridSpacingX = 34, gridSpacingY = 28,
		offsetX = 19, offsetY = 19,
		nodeRadius = 9, currentNodeOutlineRadius = nodeRadius * 2,
		expandedHeight = 200,
		selectAnimLength = 600,
		currentOutlineAnimLength = 300, currentOutlineAnimInterval = 30;
		

	var isShown = false, isExpanded = false, hasBranches = false;

	currentBranch = 0;

	var elem = $('#actionTimeline svg.timeline');
	var svgns = elem.attr('xmlns');

	//set up the width for showing (can do this with less?)
	$("#actionTimeline").css({
		left: $('body').width() - 150 + 'px',
		display: 'none'
	});

	$("#toggleExpand").hide();

	$("#toggleTimeline").on('click', function () {
		fluid.command.create('showToggle').dispatchTo('fluid.controllers.timeline');	
	});

	$("#toggleExpand").on('click', function () {
		fluid.command.create('expandToggle').dispatchTo('fluid.controllers.timeline');	
	});
	
	this.$ = function() {
		return elem;
	};

	this.toggleDisplay = function () {
		if (isShown) {
			this.hide();
		} else {
			this.show();
		}
	};

	this.show = function () {
		var container = $("#actionTimeline, #graphContainer");

		if (!isShown) {
			container.fadeIn().animate({
				left: '460px'
			}, {queue: false});

			this.scrollToCurrent();

			if (!hasBranches) {
				container.children().not("#toggleExpand").fadeIn();
			} else {
				container.children().fadeIn();
			}
			isShown = true;
		}
	};

	this.hide = function () {
		var container = $("#actionTimeline, #graphContainer");

		if (isExpanded) this.toggleExpand();

		if (isShown) {
			hideTooltip();
			container.animate({
				left: $('body').width() - 150 + 'px'
			}, {queue: false}).fadeOut();
			container.children().fadeOut();
			isShown = false;
		}
	};

	this.showButton = function () {
		$("#toggleTimeline").fadeIn(300);
	};

	this.hideButton = function () {
		$("#actionTimeline, #toggleTimeline").fadeOut(300);
	};

	this.toggleExpand = function () {
		var container = $("#actionTimeline, #graphContainer");
		var thumb = $("#expandThumb");

		if (isShown) {
			if (!isExpanded) {
				container.animate({
					height: expandedHeight + 'px'
				}, {queue: false});
				thumb.animate({
					"margin-top": "0px"
				}, {queue: false});
				isExpanded = true;
			} else {
				container.animate({
					height: '60px'
				}, {queue: false});
				thumb.animate({
					"margin-top": "20px"
				}, {queue: false});
				isExpanded = false;
			}
		}
	};

	this.update = function(history) {
		if (!elem.is(':visible'))
			return;

		// TODO: update dynamically; don't redraw everything every time
		elem.empty();

		var pointBreadth = []; // per any given horizontal point on timeline
		var pointStack = []; // from root to the current point at the current branch
		var historyPoint, currentDepth = 0, prevBreadth = 0, maxDepth = 0, maxBreadth = 0;
		var colorSet = 0, maxColorSet = 14; 

		history.traverse({
			next: function(context) {
				var currentBreadth = Math.max(pointBreadth[currentDepth] || 0, prevBreadth);
			
				var branchId = 0;
				if (context.point !== null) { //why does this happen again?
					branchId = context.point.branchId;
				} else {
					branchId = context.branch;
				}

				colorSet = branchId;
				
				if (branchId < currentBranch && !svgHasClass(elem, 'zoomedOut')) return;

				var pointElem = $(document.createElementNS(svgns, 'circle')).attr({
						'class': (context.point.branchId !== currentBranch ? 'zoomedOut ' : '') + 'node color-' + colorSet + ' ',
						'cx': offsetX + currentDepth * gridSpacingX,
						'cy': offsetY + currentBreadth * gridSpacingY,
						'r': nodeRadius
					}).
					data({
						'point': context.point,
						'colorSet': colorSet
					}).
					mouseover(onNodeHover).
					mouseout(onNodeUnhover).
					click(onNodeClick).
					appendTo(elem);

				pointStack.push({point: context.point, elem: pointElem});

				prevBreadth = currentBreadth;
				pointBreadth[currentDepth++] = ++currentBreadth;

				maxDepth = Math.max(currentDepth, maxDepth);
				maxBreadth = Math.max(currentBreadth, maxBreadth);
			}.bind(this),

			back: function(context) {
				if (pointStack.length == 0)
					return;

				// Straighten the current branch and draw connectors
				var lastPointElem = pointStack.pop().elem;
				var pointColorSet = lastPointElem.data('colorSet')
				var lastPointX = lastPointElem.attr('cx');
				var lastPointY = lastPointElem.attr('cy');
				var lastPointBreadth = pointBreadth[--currentDepth];

				var branchId = 0;
				if (context.point !== null) { //why does this happen again?
					branchId = context.point.branchId;
				} else {
					branchId = lastPointElem.data('point').branchId;
				}

				for (var idx = context.offset; idx < 0 && pointStack.length > 0; idx++) {
					pointStack.pop().elem.attr('cy', lastPointY);
					pointBreadth[--currentDepth] = lastPointBreadth;

					createSegment({
						type: 'arch', colorSet: pointColorSet,
						x1: offsetX + currentDepth * gridSpacingX + nodeRadius + 1,
						x2: offsetX + (currentDepth + 1) * gridSpacingX - nodeRadius - 1,
						y1: lastPointY,
						y2: lastPointY
					}).prependTo(elem);
				}

				prevBreadth = 0;
			}.bind(this)

		});

		// Resize element to accomodate the graph
		$("#graph").animate({
			width: Math.max(maxDepth - 1, 0) * gridSpacingX + offsetX * 3,
			height: Math.max(maxBreadth - 1, 0) * gridSpacingY + offsetY * 2
		}, 300);
		
		// scroll to the end of the graph
		// $("#graphContainer").scrollLeft(elem.width() + 30);

		this.setCurrent(history, history.currentPosition());
	};

	this.setCurrent = function(history, position) {
		//uff, rewrite this please
		var mainBranch = elem.find('.node.color-' + currentBranch);
		if (mainBranch) {
			svgRemoveClass(mainBranch, 'current');
			svgAddClass(mainBranch.eq(position === undefined ? -1 : position - 1), 'current');
		
			var outline = document.querySelector('.current-outline');
			
			if (outline) {
				outline.parentNode.removeChild(outline);
			}

			if (!svgHasClass(elem, 'zoomedOut')) {
				$('.current').before($(document.createElementNS(svgns, 'circle')).
					attr({
						'class': 'current-outline',
						'cx': $('.current').attr('cx'),
						'cy': $('.current').attr('cy'),
						'r': 0
					}));
				outline = document.querySelector('.current-outline');

				//jquery y u not do this
				//animate the outline when it's created
				//scale from 0 to currentNodeOutlineRadius

				var animCount = 0;
				var r = 0;

				var interval = setInterval(function () {
					animCount++;
					r = currentNodeOutlineRadius * (currentOutlineAnimInterval*animCount)/currentOutlineAnimLength;
					if (outline) outline.setAttribute('r', r);
				}, currentOutlineAnimInterval);

				setTimeout(function () { 
					clearInterval(interval)
					if (outline) outline.setAttribute('r', currentNodeOutlineRadius);	
				}, currentOutlineAnimLength);
			}

			this.scrollToCurrent();
		}
	};

	this.scrollToCurrent = function (immediate) {
		$("#graphContainer").animate({
			scrollLeft: ($('.current-outline').attr('cx') - $("#graphContainer").width()/2)
		}, selectAnimLength);
	};

	//I feel like this shouldn't be here
	this.switchToParent = function (history) {
		history.traverse({
			next: function (context) {
				if (context.point === $('.node.current').data('point')) {
					var par = context.parentBranch;
					var lastPointOnParent = par[0];
					fluid.command.create('switch', {point: lastPointOnParent}).dispatchTo('fluid.controllers.timeline');
					this.update(history);
					context.stop();
				}
			}.bind(this),
			back: function (context) {}
		})
	};

	this.zoomOut = function (history) {
		svgAddClass(elem, 'zoomedOut');
		this.update(history);
	};

	this.zoomIn = function (history) {
		svgRemoveClass(elem, 'zoomedOut');
		this.update(history);
	};

	this.onBranchCreate = function () { //ugh
		hasBranches = true;
		$('#toggleExpand').show();
		if (isShown) {
			$("#toggleExpand").show();
		}
	}

	this.setCurrentBranch = function (history, newBranch) {
		currentBranch = newBranch;
	}

	function createSegment (opts) {
		return $(document.createElementNS(svgns, 'path')).
			attr({
				'class': opts.type + ' color-' + opts.colorSet,
				'stroke-linecap': opts.rounded? 'round' : '',
				'd': 'M' + opts.x1 + ' ' + opts.y1 + ' ' +
					 'L' + opts.x2 + ' ' + opts.y2
			})
	}

	function showTooltip (message, x, y) {
		fluid.controllers.ui.tooltip.show({message: message, x: x, y: y});
	}

	function hideTooltip () {
		fluid.controllers.ui.tooltip.hide();
	}

	var removeElements = [];
	function removeRedundantHighlights(id) {
		var widgetGroups = project.get("widgetGroups");
		// just remove the id if it's the last element in the group
		var removeElements = [];
		var newId = $.merge([], id);
		if(widgetGroups)
		{
			var removeElements = [];
			for(var idx=0; idx < newId.length; idx++)
			{
				var element = newId[idx];
				
				for(var i in widgetGroups)
				{
					var grp = widgetGroups[i];
					var grpId = i;
					var groupMemberCheck = grp.indexOf(element);
				
					if(groupMemberCheck > -1)
					{
						removeElements.push(element);
						newId.push(grpId); //remove the widget ID's and add the group ID's
					}
				}
			}
			var finalSelection = fluid.util._.difference(newId,removeElements);
			var newId = fluid.util._.uniq(finalSelection);
		}
		return newId;
	}
	
	function highlightTargets(id, please) {
		if (!id)
			return;

		if (typeof id == 'string')
			id = [id];
		else if (!$.isArray(id))
			id = $.makeArray(id);
	
		//id = removeRedundantHighlights(id); // DO NOT REMOVE - may be needed
		
		$('#' + id.join(',#')).not("#multiSelBox").not(".groupWidgetHolder").css('outline', please ? '3px solid rgba(25,163,255,1.0)' : '');
	}

	var onNodeHover = function (e) {
		var point = $(e.currentTarget).data('point');
		var desc = fluid.command.names[point.receiverName][point.command.name];

		var offset = $(e.currentTarget).offset(), x = offset.left, y = offset.top;

		showTooltip(desc, x, y);
		highlightTargets(point.command.context.id, true);
	};

	var onNodeUnhover = function (e) {
		var point = $(e.currentTarget).data('point');
		hideTooltip();
		highlightTargets(point.command.context.id, false);
	}

	var onBranchHover = fluid.util._.debounce(function (e) {
		var message = "Branch " + $(e.currentTarget).data('branch');
		var x, y;

		var points = $('.branch.color-' + $(e.currentTarget).data('branch'));
		var centerPoint = points[points.length >> 2];

		var offset = $(centerPoint).offset(), x = offset.left, y = offset.top;

		showTooltip(message, x, y);
	}, 500, true);

	var onBranchUnhover = fluid.util.debounce(function (e) {
		hideTooltip();
	}, 200, true);

	function onNodeClick(e) {
		if (!svgHasClass($(e.currentTarget), 'current')) {
			fluid.command.create('switch', {point: $(e.currentTarget).data('point')}).dispatchTo('fluid.controllers.timeline');
		}
	}

	function onBranchClick(e) {
		//switch to the latest node on the clicked branch
		// get the last point with the color of that branch - thus the last point on that branch

		var point = $('.node.color-' + $(e.currentTarget).data('branch')).last().data('point');
		
		fluid.command.create('switch', {point: point}).dispatchTo('fluid.controllers.timeline');
	}



	////////////////////////////////////////////////////
	// svg class operations because jquery can't do them

	function elementClasses ($elem) {
		//this function is called a lot, beware
		return $elem.attr('class').split(/\s+/);
	}

	function svgHasClass (elem, testClass) {
		//this is called a lot. we should make it faster
		var classes = elementClasses(elem);
		for (var i in classes) {
			if (classes[i] === testClass) return true;
		}
		return false;
	}

	function svgAddClass (selector, name) {
		selector.each(function() {
			var $this = $(this);
			var classes = elementClasses($this);
			if ($.inArray(name, classes) == -1) {
				classes.push(name);
				$this.attr('class', classes.join(' '));
			}
		});
	}

	function svgRemoveClass (selector, name) {
		selector.each(function() {
			var $this = $(this);
			var classes = elementClasses($this);
			var index = $.inArray(name, classes);
			if (index > -1) {
				classes.splice(index, 1);
				$this.attr('class', classes.join(' '));
			}
		});
	}
});


// TODO: How do we approach timeline oprations (like switching branches) in collaborative environment?

fluid.controller.define('timeline', function(controller) {
	'use strict';

	var view = new fluid.views.timeline();
	var history = fluid.command.history;

	history.on('add', view.update, view);
	history.on('add', function () {
		fluid.command.create('showButton').dispatchTo('fluid.controllers.timeline');
	}, view);
	history.on('reset', view.update, view);
	history.on('undo, redo', view.setCurrent, view);
	history.on('branch.create', view.onBranchCreate, view);
	history.on('branch.switch, branch.create', view.setCurrentBranch, view);

	this.handleCommand('showToggle', function() {
		view.toggleDisplay();
		view.update(history);
	});

	this.handleCommand('show', view.show);
	this.handleCommand('hide', view.hide);
	this.handleCommand('showButton', function () {
		if (account.get('loggedIn') == 'yes') {
			// this makes me so sad
			// seriously I'm crying into my vodka
			// account.get('loggedIn') returns 'yes' or 'no'
			// /ragequit
			if (history.length() > 1) {
				view.showButton();
			}
		}
	});
	this.handleCommand('hideButton', view.hideButton);
	this.handleCommand('expandToggle', view.toggleExpand);

	this.handleCommand('zoomOut', function () {
		view.zoomOut(history);
	});

	this.handleCommand('zoomIn', function () {
		view.zoomIn(history);
	});

	this.handleCommand('switch', function(context) {
		var redoStack = [], isMainBranch = true;
		var undoCount = history.length() + history.currentPosition();

		history.traverse({
			next: function(traverseContext) {
				if (isMainBranch) {
					undoCount--;
				} else {
					redoStack.push({branch: traverseContext.branch});
				}

				if (context.point === traverseContext.point) {
					traverseContext.stop();
				}
			},

			back: function(traverseContext) {
				isMainBranch = false;

				for (var idx = traverseContext.offset; idx < 0; idx++) {
					if (redoStack.length > 0) {
						redoStack.pop();
					} else {
						undoCount++;
					}
				}
			}
		});

		if (undoCount > 0) {
			for (var idx = 0; idx < undoCount-1; idx++) {
				history.undo(false);
			}
			history.undo();
		} else {
			for (var idx = undoCount; idx < -1; idx++) {
				history.redo(false);
			}
			history.redo();
		}

		var prevBranch = 0, switched = false;
		for (var idx = 0, len = redoStack.length; idx < len; idx++) {
			var pointData = redoStack[idx];
			if (pointData.branch > prevBranch) {
				history.switchBranch(context.branch);
				switched = true;
				prevBranch = 0;
			}
 
			history.redo();
		}

		if (switched) {
			view.update(history);
		}
	});
});


// Temporary module for command descriptions for action timeline
// TODO: what's the best way of defining command descriptions? in the handleCommand call? is so, 
//       then how to handle localization later?

fluid.module.define('fluid.command.names', function(module) {

	// TODO: for commands, might be better to define a set of templates instead of just strings, 
	//       using command context

	module['fluid.controllers.page'] = {
		'create': 'Page created',
		'delete': 'Page deleted',
		'clone': 'Page cloned',
		'move': 'Page moved',
		'settingHomePage': 'Start page set',
		'settingGridToggle': 'Page grid toggled',
		'settingDevice': 'Device type set',
		'settingOrientation': 'Page orientation set',
		'settingCustomPageSize': 'Page size set'
	};

	module['fluid.controllers.widget'] = {
		'create': 'Widget created',
		'delete': 'Widget deleted',
		'clone': 'Widget cloned',
		'cut': 'Widget cut',
		'paste': 'Widget pasted',
		'move': 'Widget moved',
		'nudge': 'Widget nudged',
		'resize': 'Widget resized',
		'setBorder': 'Widget border changed',
		'setBackgroundColor': 'Widget background color set',
		'setBorderColor': 'Widget border color set',
		'setColor': 'Widget color set',
		'addSegment': 'Widget segment added',
		'deleteSegment': 'Widget segment deleted',
		'setText': 'Widget text changed',
		'setZOrder': 'Widget order changed',
		'align': 'Widgets aligned',
		'groupWidgets' : 'Widgets grouped',
		'ungroupWidgets' : 'Widgets ungrouped',
		'staticToForeground' : 'Pin widgets to front',
		//'staticToBackground' : 'Pin widgets to back',
		'removeStaticWidgets' : 'Unpin widgets'
	};

	module['fluid.controllers.link'] = {
		'create': 'Link created',
		'delete': 'Link deleted',
		'changeProperty': 'Link property changed'
	};

	module['fluid.controllers.project'] = {
		'open': 'Project loaded'
	};
});

var widgProps = 
{

};
var widgGroup = 
{
	
	toggle : function() //show/hide main menu
	{
		console.log("widgGroup.toggle");
		
		if(widgGroup.groupThem == true)
		{ 
			widgGroup.groupWidgets(); 
		}
		else if(widgGroup.groupThem == 'ungroup')
		{
			widgGroup.ungroupWidgets(); 
		}
		else
		{
			return;
		}
	},
	

	grouped : [],
	groupId : false,
	getGroupMembershipStats : function(s)
	{
		console.log("widgGroup.getGroupMembershipStats");
		
		var roots = widget.getRoots(s); //find the roots of any selected widget
		var totalWidgAmount = roots.length;
		
		roots.each(function()
		{
			var t = $(this);
			
			var id = t.attr("id");
			var widgetGroups = project.get("widgetGroups");
			for(var i in widgetGroups)
			{
				var group = widgetGroups[i];
					
				var memberCheck = group.indexOf(id);
				if(memberCheck > -1)
				{
					widgGroup.grouped.push(id);
					widgGroup.groupId = i;
				}
				else
				{
					widgGroup.groupId = false;
				}
			}
		});
		
		return totalWidgAmount;
	},
	
	detectGroups : function(s)
	{
		console.log("widgGroup.detectGroups");
		
		widgGroup.grouped = []; //reset everything
		var groupTextCaption = $("#cmWidgGroups .iconCmGroupWidgets");
		var totalWidgAmount = widgGroup.getGroupMembershipStats(s);// get roots
		
		// detect whether there are open groups or closed group
		groupedWidgAmount = widgGroup.grouped;
		if((totalWidgAmount == groupedWidgAmount.length) && (groupedWidgAmount.length > 0)) 
		{
			widgGroup.groupThem = 'ungroup';
			var btnText = 'Ungroup';
		}
		else 
		{
			if(totalWidgAmount < 2)
			{
				widgGroup.groupThem = false;
			}
			else
			{
				widgGroup.groupThem = true;
				var btnText = 'Group';
			}
		}

		groupTextCaption.text(btnText);
	},

	addToGroup : function()
	{
		//this function is called when you are copying and pasting into the OPEN group
	},
	

	groupWidgets : function()
	{
		console.log("widgGroup.groupWidgets");
		
		function createGroupArr(roots)
		{
			function addToArray()
			{
				var currentWidget = $(this);
				var id = currentWidget.attr("id");
				group.push(id);
			}
			var group = new Array;
			roots.each(addToArray);
			return group;
		}
		
		function createNewGroupIndex()
		{
			for(var i in existingGroups)
			{
				var lastGroup = i;
			}
			var newId = lastGroup;
			var newIdIndex = newId.replace("g","");
			var newIdNum = parseInt(newIdIndex);
			newIdNum = new String('g' + (newIdNum + 1));
			return newIdNum;
		}
		
		var sel = $("#canvasPages .ui-selected");
		var roots = widget.getRoots(sel); //apply group properties to roots only

		var existingGroups = project.get("widgetGroups");
		var newGroup = createGroupArr(roots);
		//if(!existingGroups == false || existingGroups == 'undefined' || existingGroups == 'null')

		if(!existingGroups || jQuery.isEmptyObject(existingGroups) == true)
		{
			var newGroupId = 'g1';
			var allGroups = {g1 : newGroup};
		}
		else
		{
			var newGroupId = createNewGroupIndex();
			var updatedGroups = $.extend({}, existingGroups);
			updatedGroups[newGroupId] = newGroup;
			var allGroups = updatedGroups;
		}
		
		project.set({widgetGroups : allGroups});
		// change the heading on the context menu button and make ungroup
		
		widgGroup.detectGroups(sel); //  !!!! important reset group status all over again, but redraw groups
		widgGroup.selectGroup(sel);
	},	
	
	ungroupWidgets : function()
	{
		console.log("widgGroup.ungroupWidgets");
		
		var sel = $("#canvasPages .ui-selected");
		// find group membership and id

		var groupId = widgGroup.groupId;
		console.log(groupId);
		var existingGroups = project.get("widgetGroups");
		var updatedGroups = $.extend({}, existingGroups);
		delete updatedGroups[groupId]; // delete that group from the group list
		
		project.set({widgetGroups : updatedGroups});
		
		widgGroup.detectGroups(sel); //reset group status all over again and show the context menu
		contextMenu.open();
		// redraw the multiple selection box
		// remove the group widget - if in an opened group, remove the currently selected wiedget
		$("#"+groupId).remove();
		widget.addResizeSettings(sel);
	},
	
	updatedGroup : false,
	deleteWidg : function(sel) //done when a widget is deleted
	{
		console.log("widgGroup.deleteWidg");
		
		function deleteFromGroup()
		{
			var widgId = $(this).attr("id");
			
			var existingGroups = project.get("widgetGroups");
			var updatedWidgGroups = $.extend({}, existingGroups);
			
			
			for(var i in existingGroups)
			{
				var group = existingGroups[i];
				if(!widgGroup.updatedGroup)
				{
					widgGroup.updatedGroup = $.extend([], group); 
				}
				
				var memberCheck = group.indexOf(widgId);
				if(memberCheck > -1)
				{
					
				
					var group = widgGroup.updatedGroup; //remove id from from group array
					
					delete group[memberCheck];
					console.log(group);
					/*
					updatedWidgGroups[i] = widgGroup.updatedGroup;
					console.log(widgGroup.updatedGroup);
					
					if(widgGroup.updatedGroup.length == 0) // check if there are any entries in that array
					{
						console.log("deleting");
						delete updatedWidgGroups[i]; // if there are no entries left, delete the entire array
					}*/
				}
			}
			
			console.log(updatedWidgGroups);
			return updatedWidgGroups;
		}
		
		
		
		
		var finalGroupStatus = sel.each(deleteFromGroup);
		
	
	},
	
	getSelFromGroupId : function(groupId)
	{
		console.log("widgGroup.getSelFromGroupId");
		
		var existingGroups = project.get("widgetGroups");
		var widgetsInGroup = existingGroups[groupId];
		
		var sel = $([]);
		for(var i = 0; i < widgetsInGroup.length; i++)
		{
			var wdg = $("#" + widgetsInGroup[i]);
			sel = sel.add(wdg);
		}
		
		return sel;
	},
	

	
	getNestedGroups : function(groupId)
	{
		console.log("widgGroup.getNestedGroups");
		
		var nestedGroupIds = new Array;
		var existingGroups = project.get("widgetGroups");
		var currentlyOpenGroup = existingGroups[widgGroup.groupStats.openedGroup];
		var openGroupLength = currentlyOpenGroup.length; //if this array is smaller than currently open array, then it may be a nested array
		for(var i in existingGroups)
		{
			var group = existingGroups[i];
			
			if(group.length < openGroupLength)
			{
				//if the widgets in currently opened group match the widgets in the subset group, then return to 
				var sampleWidgetFromGroup = group[0];
				var checkMasterGroupMembership = currentlyOpenGroup.indexOf(sampleWidgetFromGroup);
				if(checkMasterGroupMembership > -1)
				{
					nestedGroupIds.push(i);
				}
			}
		}
	},
	
	
	
	allLockTos : false,
	roots : false,
	selectGroup : function(s)
	{
		console.log("widgGroup.selectGroup");
		
		if(widgGroup.openLargeGroup == true) //prevent adding resize settings when opening groups
		{
			
			widgGroup.groupStats.openLargeGroup = false;
			return;
		}
		
		
		var groupId = widgGroup.groupId;
		
		if(groupId)
		{
			var widgetGroups = project.get("widgetGroups");
			var currentGroup = widgetGroups[groupId];
	
			for(var i=0; i < currentGroup.length; i++)
			{
				$("#"+currentGroup[i]).addClass("ui-selected");
			}
			var roots = $("#canvasPages .ui-selected"); //bacause they are all roots
			
			var allLockTos = widget.getLockTos(roots);
			allLockTos.addClass("ui-selected");
			
			widgGroup.allLockTos = allLockTos;
			widgGroup.roots = roots;
			
			s.resizable("option", "disabled", true); 
			widgGroup.draw();
		}
		else
		{
			return;
		}
		

	},
	


	draw : function() //done on zoomIn, open account
	{
		console.log("widgGroup.draw");
		
		if(widgGroup.groupId)
		{
			$("#multiSelBox").addClass("multiSelForGroup");
			
			var allLockTos = widgGroup.allLockTos;
			var groupId = widgGroup.groupId;
			var roots = widgGroup.roots;

			$(".groupWidgetHolder").remove(); // remove multiple selection box

			var lastWidget = allLockTos.last(); //append the group to the last widget in a selection
			
			var area = utils.getBoundingAreaRelative(roots);
			var boxWidth = area.right - area.left;
			var boxHeight = area.bottom - area.top;
			
			var objTop = parseInt(lastWidget.css("top"));
			var objLeft = parseInt(lastWidget.css("left"));		
			var finalTop = (objTop - area.top) * -1;//widget._selectionTLWH.top;
			var finalLeft = (objLeft - area.left) * -1;//widget._selectionTLWH.left;
			//console.log("id",allLockTos,groupId,roots);
			var groupProps = {top : finalTop, left : finalLeft, width : boxWidth, height : boxHeight, groupId : groupId};
			
			$("#tmplWidgGroup").tmpl(groupProps).appendTo("#" + lastWidget.attr("id"));
		}
		else
		{
			
			return;
		}
	},
	
	resizeOpenGroup : false,
	groupDragStart : function(selection)
	{
		console.log("widgGroup.groupDragStart");
		
		if(widgGroup.groupStats.openedGroup)
		{
			$("#" + widgGroup.groupStats.openedGroup).addClass("dragOpenGroup");
			
		}
		else
		{
			
			
			return;
		}
	},
	
	resizeGroupElement : function(selection) //done on dragStop
	{
		console.log("widgGroup.resizeGroupElement");
		
		function drawNewGroupPosition(topStats,leftStats,rightStats,bottomStats)
		{
			var top = topStats.sort(function(a,b){return b - a});
			var left = leftStats.sort(function(a,b){return b - a});
			var right = rightStats.sort(function(a,b){return b - a});
			var bottom = bottomStats.sort(function(a,b){return b - a});
			
			// if top, left... etc exceed the boundary... then draw the new array... else don't draw
			var draw = ((top[0] < widgGroup.groupStats.top) || (top[0] > widgGroup.groupStats.top) ||
			(left[0] < widgGroup.groupStats.left) || (left[0] > widgGroup.groupStats.left) ||
			(right[0] > widgGroup.groupStats.right) || (right[0] < widgGroup.groupStats.right) ||
			(bottom[0] > widgGroup.groupStats.bottom) || (bottom[0] < widgGroup.groupStats.bottom)) ? true : false;
			
			if(draw == true)
			{
				var groupId = widgGroup.groupStats.openedGroup;
				var widgetGroups = project.get("widgetGroups");
				var widgetsInGroup = widgetGroups[groupId];
				var openGroupWidgets = $([]);
				for(var i = 0; i < widgetsInGroup.length; i++)
				{
					var widget = $("#" + widgetsInGroup[i]);
					openGroupWidgets = openGroupWidgets.add(widget);
				}
				
				widgGroup.drawOpenGroupBackground(top, left, right, bottom);
			}
			else
			{
				return;
			}
		}
		
		if(widgGroup.groupStats.openedGroup)
		{
			var topStats = [];
			var leftStats = [];
			var rightStats = [];
			var bottomStats = [];
			
			//find pos of every widget in group
			
			selection.each(function(){
				var t = $(this)
				var id = t.attr("id");
				var widgObj = widget.get(id);
				
				var top = widgObj.tlwh[0];
				var left = widgObj.tlwh[1];
				var bottom = top + widgObj.tlwh[3];
				var right = left + widgObj.tlwh[2];
				topStats.push(top);
				leftStats.push(left);
				rightStats.push(right);
				bottomStats.push(bottom);
			});
		
			drawNewGroupPosition(topStats,leftStats,rightStats,bottomStats);
			$("#" + widgGroup.groupStats.openedGroup).removeClass("dragOpenGroup");
		}
		else
		{
			return;
		}
	},
	
	clearGroup : function() //activated on page click
	{
		console.log("widgGroup.clearGroup");
		
		//remove highlight from the group
		/*if(widgGroup.groupStats.openedGroup)
		{
			
			//close this group but leave it selected;
			//select this group
			//widgGroup.selectGroup();
			$(".groupWidgetHolder").not("#" + widgGroup.groupStats.openedGroup).remove();
			
		}
		else
		{
			widgGroup.closeGroups();
			
			return;
		}*/

		
			
			$("#" + groupId).remove();
		
		
	},
	
	drawOpenGroupBackground : function()
	{	
		//console.log("widgGroup.drawOpenGroupBackground");
		
		function addOpenGroupProps()
		{
			var openGroupWidget = $("#" + groupId);
			openGroupWidget.addClass("openGroup");
			openGroupWidget.find(".manageGroupBtn").text("Close Group");
		}
		
		$(".widgGroupBg").remove();
		
		var groupId = widgGroup.groupStats.openedGroup;
		$("#" + groupId).remove();
		var existingGroups = project.get("widgetGroups");
		var currentGroup = existingGroups[groupId];
		
		var sel = $([]);
		
		for(var i = 0; i < currentGroup.length; i++)
		{
			
			sel = sel.add($("#" + currentGroup[i]));
		}
		
		//var sel = $("#canvasPages .ui-selected");
		
		var boundingArea = utils.getBoundingArea(sel);
	
		//console.log(boundingArea,sel);
		
		
		var activePage = project.getActivePage();
		var activePageWidgetHolder = activePage.find(".widgetHolder");
		
		var left = boundingArea.left;
		var top = boundingArea.top;
		
		var width = boundingArea.right - left;
		var height = boundingArea.bottom - boundingArea.top;
		
		var groupBgDims = {top : top, left : left, width : width, height : height};
		var groupPropDims = {top : top, left : left, width : width, height : height, groupId : groupId};
		
		$("#tmplGroupBg").tmpl(groupBgDims).prependTo(activePageWidgetHolder);
		$("#tmplWidgGroup").tmpl(groupPropDims).appendTo(activePageWidgetHolder);
		
		addOpenGroupProps();
	},
	
	
	openLargeGroup : false,
	groupStats : false,
	openGroup : function(mainGroupId)
	{
		function getGroupLimits()
		{
			var pagePos = $("#canvasPages .active").offset();
			var groupPos = $("#" + mainGroupId).offset();
			
			var top = groupPos.top - pagePos.top;
			var left = groupPos.left - pagePos.left;
			var right = parseInt($("#" + mainGroupId).css("width")) + left;
			var bottom = parseInt($("#" + mainGroupId).css("height")) + top;
			widgGroup.groupStats = {top : top, left : left, bottom : bottom, right : right, openedGroup : mainGroupId};
			widgGroup.openLargeGroup = true;
		}
	
		getGroupLimits(); //first get the group limits and then remove it
		
		var groupWidget = $("#" + mainGroupId);
		groupWidget.remove();
		
		widgGroup.drawOpenGroupBackground(); //then draw the bacground
	},
	
	closeGroups : function(mainGroupId)
	{
		return;
		
		$("#" + mainGroupId).remove();
		$(".widgGroupBg").remove();

		//redraw the group
		var existingGroups = project.get("widgetGroups");
		var widgetsInGroup = existingGroups[mainGroupId];
		
		widget.resetSelection(); //reset the selection
		
		var sel = $([]);
		for(var i = 0; i < widgetsInGroup.length; i++)
		{
			var wdg = $("#" + widgetsInGroup[i]);
			wdg.addClass("ui-selected");
			sel = sel.add(wdg);
		}
		
		if(widgGroup.openLargeGroup == true) //prevent adding resize settings when opening groups
		{
			widgGroup.openLargeGroup = false;
		}
		
		widgGroup.groupStats = {top : false, left : false, bottom : false, right : false, openedGroup : false};
		
		widget.drawMultiSelBox(sel);
		widgGroup.selectGroup(sel); //if there are groups around
	},
	
	openCloseGroup : function()
	{
		var thisButton = this;
		var mainGroupId = $(this).attr("data-parentGroup");
		var mainGroup = $("#" + mainGroupId);
		mainGroup.hasClass('openGroup') ? widgGroup.closeGroups(mainGroupId) : widgGroup.openGroup(mainGroupId);

	}
};
//Tracks user actions

var tracker =
{
    enabled: false,
    defaultLevel: 10,               //Default Level is 10 (Track all actions)
    level: 10,                      //Keeps the tracker's level

    //Records a user action
    //PARAM: action: Text describing the user's action
    //PARAM: level: Level of user's action importance (1 - 10 More Important) (Optional)
    //PARAM: object: Object being affected by the user's action (Optional)
    //PARAM: event: Event triggered by the user's action (Optional)
    //PARAM: callback: Callback function after the action has been recorded
    record: function(action, level, object, event, callback)
    {
        if (!tracker.enabled)
            return;
        
        //Filters the action according to the tracker's level
        level = level ? level : tracker.defaultLevel;
        if (tracker.level < level)
        {
            return false;
        }

        //Prepare all info to log action
        //var userId = account.get("loggedIn") == "yes" ? account.get("id") : "";
        var data = {
            action: action,
            //object: object ? object : "",
            //target: event ? event.target.id : "",
            //event: event ? event.type : "",
			// projectId: project.get("id"),
            userId: account.get("id")
        };
        //console.log("Logging Action..." + action + ". Level: " + level, data, event);

        //Log action
        ajax.syncUp(data, "tracker", "", callback);
        return true;
    },

    //Sets the desired tracking level (0 track all actions - 10 tracks no actions)
    setLevel: function(newLevel)
    {
        newLevel = newLevel ? newLevel : tracker.defaultLevel;
        tracker.level = newLevel;
    },

    //Disables tracking
    disable: function()
    {
        tracker.setLevel(0);
    }
}

var fullCanvas =
{
    pid : '',
    project : '',
    currentScale : 1,

    init : function(pid)
	{
        fullCanvas.pid = pid;
        ajax.syncDown(pid, fullCanvas.parseDownload);
    },

    parseDownload : function(respData, textStatus, jqXHR) // ajax response.
    {
        try
        {
            var proj = JSON.parse(jqXHR.responseText); // jqXHR.response does not work on iOS mobile.
        }
        catch(e)
        {
            $("body").html("Unable to parse download - unknown error (1)");
        }

        if (proj.r != 's')
        {
            $("body").html("Couldn't download correctly (has it been deleted/made inactive?)"); // , proj.t
            //console.log("Project download fail:", proj);
            return false;
        }

        try // this can fail if the project is too big.
        {
            var data = JSON.parse(proj.t.toString()); // TODO: simplify this so it doesnt need a double parse.
        }
        catch(e)
        {
            $("body").html("Unable to download the mockup - download was interrupted.");
            //console.log("Error", proj, e);
        }
        fullCanvas.runDraw(data);
        // draw is the callback.
        //console.log("Its a parseDownloadedData ", respData);
    },

    runDraw : function(dat)
    {
        var id = dat;
        if(typeof(dat)=='string') //check if id instead of data
        {
            dat = project.bundle(dat);
            var p = storage.get(dat[g_preview].pages[0]);//check for pages in storage
            if(p == null)
            {
                ajax.syncDown(id, preview.parseDownload);
                return;
            }
        }
        fullCanvas.draw(dat);
    },

    draw : function(dat)
    {
        if(!dat) { return false;}

        for(var key in dat)
        {
            storage.setTempItem(key, dat[key]);
        }

        var project = dat[fullCanvas.pid];
        fullCanvas.project = project;

        var xpos = project.canvasPosX;
        var ypos = project.canvasPosY;
        var width = project.canvasWidth;
        var height = project.canvasHeight;

        $("#canvas")
            .data("lastOutX", xpos)
            .data("lastOutY", ypos)
            .css({top: ypos, left: xpos, width: width, height: height})
            .delay(200)
            .fadeIn(500); // this is needed as canvas doesnt always zoom if same zoom.

        setTimeout(function()
        {
            //canvas2.zoom({ newZoom: 0.25, currentZoom : 1, duration: 0, centerY: ypos, centerX: xpos});
            var startTime = new Date().getTime();

            //$("#canvasPages").zoom({ newZoom: 1, currentZoom : 1, duration: 0, centerY: ypos, centerX: xpos});
            for (var key in project.pages)
            {
                var res = page.draw(project.pages[key], "init"); // can throw if fails to draw
            }
            //fullCanvas.fixDisplay();
            if (!window.callPhantom) {
                var $viewport = $('#viewport');
                var homePageObj = storage.get(project.homepage) || storage.get(project.pages[0]);
                $viewport.css('overflow', 'scroll');

                setTimeout(function() {
                    $viewport.get(0).scrollLeft = homePageObj.x - 1500;
                    $viewport.get(0).scrollTop = homePageObj.y - 1000;
                }, 500);
            }
            fullCanvas.drawLinks();


            var endTime = new Date().getTime();
            //console.log('Project drawn in: ', endTime - startTime, ' ms');
        }, 10);

    },
/*  2013-05-14 BD: Most probably obsolete function, please remove as soon as version tested
    fixDisplay : function(){
        //Hide unnecesaery items and remove all bound events
        $("#hud, #trash, #viewport").hide();

        function changeScale(newScale)
        {
            project.set({"currentZoom" : newScale});
            fullCanvas.drawLinks();
//            console.log('fix display');
//            if (typeof window.callPhantom === 'function') {
//                window.callPhantom({ event: 'finishedlinks', links: $('#canvasLinks .link').length });
//            }
        }

        //Calculate required scale and apply to canvas
        var allTLWH = utils.getBoundingAreaRelative($(".screen"));
        var allWidth = allTLWH.right - allTLWH.left;
        var allHeight = allTLWH.bottom - allTLWH.top;
        var canvasEl = $("#canvas");
        var margin = 25;                                //Default margin in all directions to set the full view
        var required = { width: allWidth, height: allHeight };
        var available = { width: $(window).width(), height: $(window).height() };
        var scale = getScale(available, required, margin, 0.01);
        var factor = scale;
        if (scale < 1){
            canvasEl.css({ '-webkit-transform' : 'scale(' + scale + ')' });
            fullCanvas.currentScale = scale;
            changeScale(1);
        } else {
            var newReq = { width: allWidth, height: allHeight };
            scale = getScale(available, newReq, margin, 0.01);
            $("#canvasPages").css({ '-webkit-transform' : 'scale(' + scale + ')' });
            changeScale(scale);
        }

        //Center new selection
        var addToTop = ($(window).height() - (allHeight * scale)) / 2;
        var newTop = (allTLWH.top * scale) - addToTop;
        newTop = newTop > 0 ? newTop * -1 : 0;

        var addToLeft = ($(window).width() - (allWidth * scale)) / 2;
        var newLeft = (allTLWH.left * scale) - addToLeft;
        newLeft = newLeft > 0 ? newLeft * -1 : 0;

        canvasEl.css({ 'top' : newTop + 'px', 'left': newLeft + 'px' });
        $("#viewport").css({ 'background-color' : '#EBEBEB'}).fadeIn(300);

    },*/

    drawLinks : function()
    {
        var links = fullCanvas.project.links;
        link.load(links);
        for (var i in links.linkOrigin) // for every link in the array
        {
            link.draw($("#" + links.linkCanvId[i]), links.linkOrigin[i], links.linkDest[i], links.linkType[i], 1);
            //link.draw($("#" + links.linkCanvId[i]), $("#" + links.linkOrigin[i]), $("#" + links.linkDest[i]), links.linkType[i]);
        }
//        if (typeof window.callPhantom === 'function') {
//            window.callPhantom({ event: 'linksdrawn' });
//        }
    }

};
var panels =
{
    isWorking: false,
    lastSubmitButton: null,
    hideTimeOut: null,
    errors :
    {
        "default": "Something went wrong... Please try again!",
        "defaultShort": "ERROR!",

        "emailUsed" : "Your new email is already being used.",
        "passInvalid" : "The password is not valid.",
        "oldPassInvalid" : "The old password is not valid.",
        "passNotChanged" : "The new password cannot be equal to the old one.",

        "upgradeFreeWrongPass" : "Your password is not valid.  Please try again.",
        "resetNoEmail" : "We were unable to match that email address to an account. Please try again...",
        "resetCantSendEmail" : "Error sending email. Please try again...",
        "resetPasswordMatch" : "The two passwords you entered don't match. Please try again...",
        "resetLinkExpired" : "This link has expired (for security reasons, password recovery attempts expire after 1 hour)."
    },

    messages : {
        "default" : "Your changes have been applied successfully.",
        "defaultShort" : "Changes applied!",

        "resetPass" : "We have sent an e-mail to your account with your password",
        "promoCode" : "The code has been applied to your account!",
        "contact" : "Thanks!  We will contact you soon!",

        "recoverySuccess" : "Please check your email. You will have a link to reset your password there.",
        "resetSuccess" : "Your password has been updated successfully. You can now log in.",

        "projectClone" : "Project Cloned Successfully",
        "projectTransfer" : "Project Teleported Successfully",
        "projectRestore" : "Project Restore Successful",
        "projectBranding" : "Project Branding Changed"
    },

    processingMessages : {
        "default" : "Processing...",

        "projectClone" : "Cloning...",
        "projectTransfer" : "Teleporting..."
    },

    //If the are is set to 100%, when the panel is higher than the screen size, a scroll bar appears and the panel starts jumping
    //The total area is calculated using the screen size minus some pixels that belong to the scroll bar
    setWorkArea : function()
    {
        $(".modalWindowContentArea").css({ width: $(window).width() - 50});
    },

    //Hide all messages
    hideMessages : function()
    {
        panels.hideErrors();
        panels.hideSuccessMessage();
    },

    /* ERRORS   */

    hideErrors : function()
    {
        clearTimeout(panels.hideTimeOut);
        $(".messageError").fadeOut(250, panels.placeMessageReset);
        panels.enableLastButton(true);
    },

    displayError : function(errorMsg)
    {
        var text = panels.errors["default"];
        if (errorMsg != undefined)
        {
            text = panels.errors[errorMsg] != undefined ? panels.errors[errorMsg] : errorMsg;
        }

        function displayMessage() {
            $(".userSettingsMessageContainer.messageError").text(text).fadeIn(250);
        }

        panels.placeMessage(panels.lastSubmitButton, displayMessage);
        panels.enableLastButton(true);
        panels.hideTimeOut = setTimeout(panels.hideErrors, 3000);
    },

    //Enabled the last submitted button. If no argument by default the method ENABLES the button
    enableLastButton : function(enable, disabledText)
    {
        if (!panels.lastSubmitButton) { return; }

        var el = $(panels.lastSubmitButton);
        if ((enable) || (enable == undefined))
        {
            if (el.attr("data-label") != undefined)
            {
                panels.changeButtonLabel(el, el.attr("data-label"));
            }
            el.removeAttr("disabled");
            return;
        }
        else
        {
            el.attr("disabled", "disabled");
            var label = el.prop("tagName") == "INPUT" ? el.val() : el.text();
            var newKey = disabledText == undefined ? "default" : disabledText;
            var newText = panels.processingMessages[newKey] ?
                panels.processingMessages[newKey] : panels.processingMessages["default"];
            el.attr("data-label", label);
            panels.changeButtonLabel(el, newText);
        }

    },

    isLastButtonDisabled : function()
    {
        if (panels.lastSubmitButton == null) { return false; }

        var el = $(panels.lastSubmitButton);
        return el.attr("disabled") == "disabled";
    },



    /* SUCCESS MESSAGES  */

    hideSuccessMessage : function()
    {
        $(".userSettingsMessageContainer.messageSuccess").fadeOut(250, panels.placeMessageReset);
        panels.setSuccessMessage();
    },

    //Often the success message is placed on a different panel, so 2 functions are available
    //This one sets the message
    setSuccessMessage : function(msg, buttonSource)
    {
        var msgContainer = $(".userSettingsMessageContainer.messageSuccess");
        if (msg == undefined)
        {
            msgContainer.text("").fadeOut(250, panels.placeMessageReset);
            return;
        }

        var text = panels.messages[msg] != undefined ? panels.messages[msg] : msg;
        msgContainer.text(text);
        panels.placeMessage(buttonSource);
        setTimeout(panels.displaySuccessMessage, 400);
    },

    //This one didplays the message
    displaySuccessMessage : function()
    {
        clearTimeout(panels.hideTimeOut);
        if ($(".userSettingsMessageContainer.messageSuccess").text() != "")
        {
            $(".userSettingsMessageContainer.messageSuccess").fadeIn(250);
            panels.hideTimeOut = setTimeout(panels.hideSuccessMessage, 3000);
            try
            {
                setTimeout(closeAccountFrame, 8000);
            }
            catch(e) {}
        }
        else
        {
            panels.hideSuccessMessage();
        }
    },

    //Place the message according to the button's position
    placeMessage : function(buttonSource, callback)
    {
        if (buttonSource == undefined)
        {
            $(".userSettingsMessageWrapper").css({ top : 10, left: 0, height: 30, width: 499 });
            return;
        }

        var extra = buttonSource.attr("type") == "submit" || buttonSource.hasClass("toAlert") ? 0 : 30;
        var top = buttonSource.offset().top + extra - 3 ;
        var left = buttonSource.offset().left - 2;
        var height = buttonSource.innerHeight() + 8;
        var width = buttonSource.innerWidth() + 7;
        var padding = buttonSource.css("padding");
        padding = buttonSource.attr("type") == "text" ? "6px" : padding;
        padding = isNaN(parseInt(padding, 10)) ? "6px" : parseInt(padding, 10) < 6 ? "6px" : padding;

        var wrapper = $(".userSettingsMessageWrapper");
        wrapper.css({ top : top, left: left, height: height, width: width });
        wrapper.children().css({ padding: padding });

        if ($.isFunction(callback))
        {
            callback();
        }
    },

    //Resets message position
    placeMessageReset : function()
    {
        $(".userSettingsMessageWrapper").children().hide();
        //$(".userSettingsMessageWrapper").css({ top : 0, left: 0, height: 0, width: 0 });
        $(".userSettingsMessageWrapper").css({ height: 0, width: 0 });
    },

    changeButtonLabel : function(el, label)
    {
        if (el.prop("tagName") == "INPUT")
        {
            el.val(label);
        }
        else
        {
            el.text(label);
        }
    },


    getCloseExternalWindowButtonLabel : function()
    {
        var label = "Close";
        if (top != self)
        {
            label = window.parent.userSettings.isOpen ? "Back" : label;
        }
        return label;
    },

    //Display Panel
    display : function(panel, time, callback)
    {
        if (panels.isWorking) { return; }

        panels.isWorking = true;
        function showPanel()
        {
            panel.parent().transition({
                width: panel.innerWidth(),
                height: "auto",
                complete: function(){
                    panel.css({ "height": "auto" }).slideDown((time / 2) + 100);
                    panel.children().transition({
                        opacity: 1
                    }, time / 4);
                    panels.isWorking = false;
                    var scrollbar = $(".scrollbar", panel);
                    if (scrollbar.size() > 0)
                    {
                        panels.adjustScroll(scrollbar.parent());
                    }

                    if ($.isFunction(callback)) { callback(); }
                }
            }, time * 3 / 4);
        }

        if (panel.parent().hasClass("hiding"))
        {
            setTimeout(showPanel, time * 1.3);
        }
        else
        {
            setTimeout(showPanel, 100);
        }
        return;
    },

    //Hide Panel
    hide : function(panel, time, callback)
    {
        if (panel.size() > 0) {
            panel.parent().addClass("hiding");
            panel.children().transition({
                opacity: 0
            }, time / 4);

            panel.parent().css({ height: panel.innerHeight(), width: panel.innerWidth() });
            panel.parent().delay(time / 4).transition({
                height: 0,
                width: 0,
                complete: function(){
                    panel.hide();
                    $(this).removeClass("hiding");
                    if ($.isFunction(callback)) { callback(); }
                }
            }, time * 3 /4);
        } else {
            if ($.isFunction(callback)) { callback(); }
        }
    },

/*  2013-05-14 BD: Most probably obsolete function, please remove as soon as version tested
    validatePremiumAccess : function()
    {
        if (account.isFreeAccount())
        {
            notification.add("alert", account.alerts.projectLimitHit.onFeaturePremium);
            return false;
        }
        return true;
    },*/

    adjustScroll : function(panel)
    {
        //After the help is displayed, set the scroll bar
        function afterShow1()
        {
            panel.tinyscrollbar();
            setTimeout(afterShow2, 300);
        }

        //After setting the scroll needs to wait, to update it properly
        function afterShow2()
        {
            panel.tinyscrollbar_update("top");
        }

        setTimeout(afterShow1, 100);
    }

}

var userSettings =
{
    isOpen : false,
    panelStack : new Array(),
    startPanel : null,
    helpLoaded : false,
    openMenuAfterExit : true,
    placeHolders : {
        "feedbackFix" : "Tell us a little more so we can fix the bug",
        "feedbackNew" : "Tell us a little more so we add more awesome features!",
        "feedbackOther" : "Tell us a little more so we can be more Fluid!"
    },

    init : function()
    {
        //Events to open the user settings modal window from scratch
        $('#userSettingsLink').live({ click: userSettings.open });
        $('.socialLinks .feedback').live({ click: userSettings.goToContact });

        $("#userSettingsChangeAccount").live({ click: userSettings.goToUpgrade });
        $("#userSettingsChangeEmail").live({ click: userSettings.goToChangeEmail });
        $("#userSettingsChangePassword").live({ click: userSettings.goToChangePassword });
        //$("#userSettingsLogout").live({ click: userSettings.goToLogout });
        $("#userSettingsContact").live({ click: userSettings.goToContact });
        $("#userSettingsBilling").live({ click: userSettings.goToBilling });
        $("#userSettingsBillingHistory").live({ click: userSettings.goToReceipts });
        $("#userSettingsCode").live({ click: userSettings.goToCode });
        $("#userSettingsRemoveAccount").live({ click: userSettings.goToRemoveAccount });
        $("#userSettingsRemoveAccountCancel, #userSettingsRemoveAccountConfirmCancel").live({ click: userSettings.reStart });
        //$(".userSettingsDone").live({ click: userSettings.close });
        //$(".userSettingsSubPanelClose").live({ click: userSettings.goBack });
        $(".recoverPasswordSettings").live({ click: userSettings.goToResetPassword });
        $("#userSettingsChangeEmailForm").live({ submit: userSettings.actionChangeEmail });
        $("#userSettingsChangePasswordForm").live({ submit: userSettings.actionChangePassword });
        $("#userSettingsBillingForm").live({ submit: userSettings.actionBilling });

        $("#userSettingsContactForm")
            .on('submit', userSettings.actionContact)
            .on('input', function (event) {
                var contactMessage = document.getElementById('userSettingsContactMessage').value,
                    submitButton = document.getElementById('userSettincsContactSubmit');

                // if there are more than 3 non-whitespace characters
                if (/(\s*\S\s*){3,}/.test(contactMessage)) {
                    submitButton.removeAttribute('disabled');
                }
                else {
                    submitButton.setAttribute('disabled', '');
                }
            });

        $("#userSettingsCodeForm").live({ submit: userSettings.actionCode });
        $("#userSettingsRemoveAccountForm").live({ submit: userSettings.actionRemoveAccount });
        $("#userSettingsRemoveAccountConfirmForm").live({ submit: userSettings.actionRemoveAccountConfirm });
        $("#userSettingsFeedbackForm").live({ submit: userSettings.actionFeedback });
        $("#userSettingsResetPasswordButton").live({ click: userSettings.actionResetPassword });
        $(".userSettingsFeedbackSetType").live({ click: userSettings.actionFeedbackSetType });
        $(".userSettingsMessageContainer").live({ click: panels.hideMessages });
        $("#userSettingsToggleMore").live({ click: userSettings.toggleMore });
		$('#updateBillingInfo').live('click', userSettings.goToBilling);
		$('#userSettingsCardDetails').live('click', userSettings.goToCardUpdate);
		$('#userSettingsCardSubmit').live('click', userSettings.actionCardUpdate);

		$('#monthlyEmailReceipt').live('click', function() {
			if( !account.get('emailReceiptEnabled') ) {
				account.set({ emailReceiptEnabled : true });
			} else {
				account.set({ emailReceiptEnabled : false });
			}
			userSettings.toggeEmailReceiptmentForm.apply(this, arguments);
		});

		var updateCardForm = $('#updateCardForm');
		payments.validation.init({
			elem: {
				form: updateCardForm,
				name: $('#userSettingsCardName'),
				number: $('#userSettingsCardNumber'),
				type: $('#userSettingsCardType'),
				logo: $('#userSettingsCardTypeLogo'),
				month: $('#userSettingsCardMonth'),
				year: $('#userSettingsCardYear'),
				cvv: $('#userSettingsCardCvv')
			},
			handler: {
				errorPlacement: function(label, labelFor) {
					switch (labelFor.attr('id')) {
						case 'userSettingsCardNumber':
							label.insertAfter($('#userSettingsCardTypeLogo'));
							break;

						case 'userSettingsCardMonth':
							label.insertAfter($('#userSettingsCardYear'));
							break;

						default:
							label.insertAfter(labelFor);
					}
				}
			}
		});

		payments.populateCardYears($('#userSettingsCardYear'), 11);

        $(window).resize(userSettings._resizeScreen);

		fluid.main.fire('userSettings.afterInit');
    },

    setInitialState : function()
    {
		// show billing/payment for all users that have previous billing history
		if (!account.isFreeAccount() || account.get('lastPaymentDate') != '0000-00-00 00:00:00')
		{
			$('#userSettingsBillingHistory, #userSettingsCardDetails').show();
		}
		else
		{
			$('#userSettingsBillingHistory, #userSettingsCardDetails').hide();
		}
    },

    reStartFromOutside : function(e, data)
    {
        canvas2.setEditorVisibility(true);
        tracker.record("closedAccountPanel", 1);

        var msg = data != undefined && data.successMsg ? data.successMsg : "";
        var openDash = data != undefined && data.successMsg != undefined;

        if ((openDash) || (userSettings.isOpen)) {
            userSettings.isOpen = true;
            var startPoint = userSettings.startPanel == null ? $("#userSettingsMain") : userSettings.startPanel;
            userSettings.reStart(e, msg, $(".backFromUpgradeContainer", startPoint));
        } else {
            fluidMenu.show();
        }
    },

    //Bring the user to the main user settings menu.
    //msg: If a success msg is required
    reStart : function(e, msg, buttonSource)
    {
        if (!userSettings.isOpen) { return; }

        userSettings.setInitialState();

        //Close when restarting from the starting point
        var startPoint = userSettings.startPanel == null ? $("#userSettingsMain") : userSettings.startPanel;
        if (startPoint.is(":visible"))
        {
            userSettings.close();
            return;
        }

        //Refresh content and open main user settings panel,
        function displayMessage() { panels.setSuccessMessage(msg, buttonSource);  }
        $(".currentEmail").text(account.get("email"));
        if (!$("#userSettingsContainer").is(":visible"))
        {
            $("#userSettingsContainer").fadeIn(100);
        }
        $(".modalWindowContentWrapper").show();

        userSettings._panelDisplay(startPoint, true, displayMessage);
        userSettings.panelStack = new Array();
    },

    open : function(e, startPanel)
    {
        account.setUpgradeLinkStatus();
        canvas2.setEditorVisibility(false);

        //Initialize proper state for the settings
        notification.removeAll("projectLimit");
        panels.hideMessages();
        panels.setWorkArea();
        var currentOpenModal = $(".modalWindowContentFrame:visible, " +
            ".modalWindowContentFrameLarge:visible, .modalWindowContentFrameExtraLarge:visible, " +
            ".modalWindowContentFrameSmall:visible");
        currentOpenModal.hide();
        $("#userSettingsContainer").fadeIn(100);
        $(".modalWindowContentWrapper").show();
        //ONLY RESET ALL, WHEN THE DASH WAS NOT OPENED BEFORE
        if (!userSettings.isOpen)
        {
            userSettings.isOpen = true;
			userSettings.resetMore();
            userSettings.panelStack = new Array();
            if ((startPanel != undefined) && (startPanel.size() > 0))
            {
                userSettings.startPanel = startPanel;
            }
            else
            {
                userSettings.startPanel = null;
            }
        }

        if ((startPanel != undefined) && (startPanel.size() > 0))

        {
            userSettings._panelDisplay(startPanel, true);
        }
        else
        {
            userSettings.reStart();
        }
    },

    close : function(e, openMenuAfterExit)
    {
        userSettings.openMenuAfterExit = userSettings.openMenuAfterExit || openMenuAfterExit ? true : false;
        canvas2.setEditorVisibility(true);
        //fluid.controllers.bin.show();
        $(".getSatisfactionContainer").hide();
        var currentModal = $(".modalWindowContentFrame:visible, " +
            ".modalWindowContentFrameLarge:visible, .modalWindowContentFrameExtraLarge:visible, " +
            ".modalWindowContentFrameSmall:visible");
        userSettings._panelDisplay(currentModal, false, userSettings.hide);
        userSettings.startPanel = null;
        userSettings.isOpen = false;

        //if open project was deleted, create new, blank one
        if(!storage.get(project.get('id'))) project.open('last');

		fluid.main.fire('userSettings.closePanels');
    },

    goBack : function(e, msg, buttonSource) {
        if (userSettings.panelStack.length > 1) {
            var current = userSettings.panelStack.pop();
            var previous = userSettings.panelStack.pop();

            //When going back to GET SAT with a success message close the panel
            // var startingId = userSettings.startPanel == null ? "" : userSettings.startPanel.attr("id");
            // if ((previous.attr("id") == startingId) && (msg != undefined)) {
                // userSettings.close();
            // }

            function displayMessage () {
                fluidEvent.triggerEditor("panelGoBack", { panelId: previous.attr("id") }, true);
                panels.setSuccessMessage(msg, buttonSource);
            }

            userSettings._panelDisplay(previous, true, displayMessage);
            return;
        }

        userSettings.reStart(e, msg, buttonSource);
    },

    hide : function() {
        $(".modalWindowContentWrapper").hide();
        $("#userSettingsContainer").fadeOut(200);
        if (userSettings.openMenuAfterExit) {
            fluidMenu.show();
        }
        else {
            fluidMenu.hide();
        }
        userSettings.openMenuAfterExit = true;
    },

    hideCurrentPanel : function(callback, closeIfNoneOpen)
    {
        panels.hideMessages();
        var currentModal = $(".modalWindowContentFrame:visible, " +
            ".modalWindowContentFrameLarge:visible, .modalWindowContentFrameExtraLarge:visible, " +
            ".modalWindowContentFrameSmall:visible");
        if (currentModal.size() > 0) {
            userSettings._panelDisplay(currentModal, false, callback);
        } else {
            var closeTotal = closeIfNoneOpen == undefined ? false : closeIfNoneOpen;
            if (closeTotal) {
                userSettings.close();
            }
            callback();
        }
    },

	resetMore : function()
	{
		$("#userSettingsBottomButtons").hide();
		$("#userSettingsToggleMore").text("More...");
	},

    toggleMore : function()
    {
        //Toggle content displaying
        $("#userSettingsBottomButtons").slideToggle(400);

        //Update button text
        var button = $("#userSettingsToggleMore");
        var text = button.text().indexOf("More") > -1 ? "...Less" : "More...";
        button.text(text);
    },

    goToCreateAccount : function(e, type)
    {
        if (userSettings.isOpen)
        {
            userSettings.hideCurrentPanel(function() { account.startCreate(e, type); });
        }
        else
        {
            account.startCreate(e, type);
        }
    },

    goToUpgrade : function(e, type, offerCode)
    {
        if (userSettings.isOpen)
        {
            userSettings.hideCurrentPanel(function() { account.startUpgrade(e, type, offerCode); });
        }
        else
        {
            account.startUpgrade(e, type, offerCode);
        }
    },

    goToResetPassword : function()
    {
        userSettings._panelDisplay($("#userSettingsPanelResetPassword"), true);
    },

    actionResetPassword : function(e)
    {
        userSettings.reStart(e, "resetPass");
        return false;
    },

    goToChangeEmail : function()
    {
        $("#userSettingsChangeEmailNew").val("");
        $("#userSettingsChangeEmailPass").val("");
        //userSettings.hideMain();
        userSettings._panelDisplay($("#userSettingsPanelChangeEmail"), true);
    },

    actionChangeEmail : function(e)
    {
        panels.hideErrors();
        panels.lastSubmitButton = $("#userSettingsChangeEmailSubmit");
        var newEmail = $.trim($("#userSettingsChangeEmailNew").val());
        ajax.syncUp({ email: newEmail }, 'emailRegd', null);
        return false;
    },

    actionCheckedEmail : function(e, data)
    {
        if (data.exists)
        {
            //Display already existing error message
            panels.displayError("emailUsed");
            return;
        }

        //Change Email
        var newEmail = $.trim($("#userSettingsChangeEmailNew").val());
        var pass = $.trim($("#userSettingsChangeEmailPass").val());
        if ((newEmail != "") && (pass != ""))
        {
            ajax.userSettingsRequest({ info: newEmail, validation: pass  },
                'changeEmail', userSettings.actionChangeEmailCallback);
        }
        return false;
    },

    actionChangeEmailCallback : function(data, error)
    {
        if (data == null)
        {
            if (error != "")
            {
                panels.displayError(error);
                return false;
            }

            panels.displayError();
            return false;
        }

        var info = JSON.parse(data);
        //console.log(info);
        if (info.t === true || info.t === 'true')
        {
            //Update local storage info
            var newEmail = $.trim($("#userSettingsChangeEmailNew").val());
            account.set({ email: newEmail });
            //Reset Upgrade iFrame to take new email
            account.resetAccountFrame();

            //Display main panel
            userSettings.reStart(null, "default", $("#userSettingsChangeEmail"));
        }
        else if (info.t.indexOf("Unknown error") > -1)
        {
            panels.displayError();
        }
        else
        {
            panels.displayError("passInvalid");
        }

        return false;
    },

    goToChangePassword : function()
    {
        $("#userSettingsChangePasswordOld").val("");
        $("#userSettingsChangePasswordNew").val("");
        //userSettings.hideMain();
        userSettings._panelDisplay($("#userSettingsPanelChangePassword"), true);
    },

    actionChangePassword : function(e)
    {
        panels.hideErrors();
        panels.lastSubmitButton = $("#userSettingsChangePasswordSubmit");
        var oldPassword = $("#userSettingsChangePasswordOld").val();
        var newPassword = $("#userSettingsChangePasswordNew").val();
        if (oldPassword == newPassword)
        {
            panels.displayError("passNotChanged");
            return false;
        }

        ajax.userSettingsRequest({ old: oldPassword, 'new': newPassword }, 'changePass', userSettings.actionChangePasswordCallback);
        return false;
    },

    actionChangePasswordCallback : function(data, error)
    {
        if (data == null)
        {
            if (error != "")
            {
                panels.displayError(error);
                return false;
            }

            panels.displayError();
            return false;
        }

        var info = JSON.parse(data);
        if (info.t === true || info.t === 'true')
        {
            userSettings.reStart(null, "default", $("#userSettingsChangePassword"));
        }
        else
        {
            panels.displayError("oldPassInvalid");
        }
        return false;
    },

    /*goToLogout : function(e)
    {
        setTimeout(userSettings.close, 500);
        account.logout();
    },*/

	goToCardUpdate : function(e)
	{
		$('#userSettingsCardName, #userSettingsCardNumber, #userSettingsCardCvv, #userSettingsCardType').val('');
		$('#userSettingsCardTypeLogo').removeClass('ccTypeLogoVISA ccTypeLogoMC ccTypeLogoAMEX');
		$('#userSettingsCardSubmit').removeAttr('disabled');

		payments.validation.reset($('#updateCardForm'));

		userSettings._panelDisplay($("#userSettingsPanelCard"), true);
		return false;
	},

	actionCardUpdate : function(e)
	{
		panels.hideErrors();
		panels.lastSubmitButton = $("#userSettingsCardSubmit");
		
		ajax.userSettingsRequest({
			name: $('#userSettingsCardName').val(),
			number: $('#userSettingsCardNumber').val(),
			month: $('#userSettingsCardMonth').val(),
			year: $('#userSettingsCardYear').val(),
			type: $('#userSettingsCardType').val(),
			cvv: $('#userSettingsCardCvv').val()
		}, 'updateCard', userSettings.actionCardUpdateCallback, true);

		$('#userSettingsCardSubmit').attr('disabled', 'disabled');

		return false;
	},

	actionCardUpdateCallback : function(data, error)
	{
		if (data == null)
		{
			if (error != "")
			{
				panels.displayError(error);
				return false;
			}

			panels.displayError();
			return false;
		}

		var info = JSON.parse(data);
		if (info.t === true || info.t === 'true')
		{
			userSettings.reStart(null, "default", $("#userSettingsCardDetails"));
		}
		else
		{
			panels.displayError();
		}

		return false;
	},

    goToBilling : function()
    {
        $("#userSettingsBillingCompany").val(account.get("billingCompany"));
        $("#userSettingsBillingAddress").val(account.get("billingAddress"));
        $("#userSettingsBillingVAT").val(account.get("billingVAT"));
        //userSettings.hideMain();
        userSettings._panelDisplay($("#userSettingsPanelBilling"), true);
		return false;
	},

	toggeEmailReceiptmentForm: function() {
		$(this).toggleClass('pressed');
		$('#emailReceiptsForm').toggle();
    },

    goToReceipts : function() {
        $.ajax({
            url: "./index.php",
            type: "POST",
            data: {t: "getPayments", userId: window.invoiceUser},
            success: function(response) {
                 response = JSON.parse(response);

                 $('#userSettingsReceiptEmail').val(account.get('receiptEmails'));

                if(account.get('emailReceiptEnabled')) {
					userSettings.toggeEmailReceiptmentForm();
                }

                if(!response.receiptAvailable) {
                    $('#downloadAllReceipts').removeClass('active');
                } else {
                    $('#downloadAllReceipts').addClass('active');
                }

                 var payments = response.t;

                 var $list = $('#receiptList .overview');
                 $list.find('.receiptListItem, .receiptEmptyMsg').remove();

                 if(payments.length === 0) {
                     $list.append('<div class="receiptEmptyMsg">No payments found...</div>');
					 $('#downloadAllReceipts').removeClass('active');
                 }

                 if(response.msg) {
                     $list.append('<div class="receiptEmptyMsg">'+response.msg+'</div>');
                 }

                 var months = ["January", "February", "March",
                    "April", "May", "June", "July", "August", "September",
                    "October", "November", "December"];
                 var paymentDate, suffix, paymentDay;

                 for(var i=0; i<payments.length; i++) {
                     paymentDate = new Date(payments[i].date*1000);
                     paymentDay = paymentDate.getDate();
                     if(paymentDay>3) suffix = 'th';
                     else if(paymentDay == 3) suffix = 'rd';
                     else if(paymentDay == 2) suffix = 'nd';
                     else if(paymentDay == 1) suffix = 'st';
                     payments[i].amount = payments[i].amount / 100;
                     payments[i].date = paymentDate.getFullYear() + ' ' + months[paymentDate.getMonth()] + ' ' + paymentDay + suffix;
                     if(!response.receiptAvailable) payments[i].hiddenClass = 'not-available';
                     if(payments[i].status === 'SUCCESS') {
                         $("#tmplPaymentListItem")
                         .tmpl(payments[i])
                         .appendTo($list);
                     }
                 }

                panels.adjustScroll($('#receiptList'));

                $('.pdfReceipt').live('click', function() {
                    if(window.invoiceUser) {
                        window.open(window.location.href+'invoice/'+$(this).parent('.receiptListItem').attr('id').split('-')[1]+'/userId/'+window.invoiceUser, 'invoice');
                    } else {
                        window.open(window.location.href+'invoice/'+$(this).parent('.receiptListItem').attr('id').split('-')[1], 'invoice');
                    }
                });

				$("#downloadAllReceipts").on('click', function () {
					if (!$(this).hasClass('active')) {
						notification.add('alert', 'No receipts to download!', {stopBuggingCallBack : true});
					}
				});

                $('#downloadAllReceipts.active').live('click', function() {
//                    if(window.invoiceUser) {
                        window.open(window.location.href+'invoice/all', 'invoice');
//                    } else {
//                        window.open(window.location.href+'invoice/'+$(this).parent('.receiptListItem').attr('id').split('-')[1], 'invoice');
//                    }
                });

                function  submitEmails() {
                    var emails = $('#userSettingsReceiptEmail').val().split(',');
                    var valid = true;
                    for(var i=0; i<emails.length; i++) {
                        emails[i] = emails[i].trim();
                        if(!validateEmail(emails[i])) {
                            valid = false;
                            break;
                        }
                    }

                    if(valid) {
                        $('#updateReceiptEmails').val('Saving...');
                        account.set({"receiptEmails": emails.join(', ')});
                        account.syncUp(function() {
                            $('#updateReceiptEmails').val('Saved');
                        });
                    }
                }

                function validateEmail(text) {
                    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return emailRegex.test(text);
                }

                $('#updateReceiptEmails').live('click', submitEmails);
                $('#userSettingsReceiptEmail').live('keyup', function(e) {
                    if(e.keyCode === 13) submitEmails();
                });

                $('#updateBillingInfo').live('click', function() {
                    userSettings.goBack(null, "", $(this));
                });
                userSettings._panelDisplay($("#userSettingsPanelReceipts"), true);
            },
            error: function() {
                var $list = $('#receiptList .overview');
                $list.find('.receiptListItem, .receiptEmptyMsg').remove();
                $list.append('<div class="receiptEmptyMsg">No payments found...</div>');
				$('#downloadAllReceipts').removeClass('active');
            }
        });
    },

    actionBilling : function(e)
    {
        panels.hideErrors();
        panels.lastSubmitButton = $("#userSettingsBillingSubmit");
        var company = $("#userSettingsBillingCompany").val();
        var address = $("#userSettingsBillingAddress").val();
        var vat = $("#userSettingsBillingVAT").val();

        ajax.userSettingsRequest({ company: company, address: address, vat: vat }, 'changeBilling',
            userSettings.actionBillingCallback);
        return false;
    },

    actionBillingCallback : function(data, error)
    {
        //console.log("Bill is Back... ", data, error);
        if (data == null)
        {
            if (error != "")
            {
                panels.displayError(error);
                return false;
            }

            panels.displayError();
            return false;
        }

        var info = JSON.parse(data);
        if (info.t === true || info.t === 'true')
        {
            account.set({
                billingCompany: info.billingCompany,
                billingAddress: info.billingAddress,
                billingVAT: info.billingVAT
            });
			userSettings.reStart(null, "default", $("#userSettingsBillingHistory"));
        }
        else
        {
            panels.displayError();
        }

        return false;
    },


    goToContact : function()
    {
		if(!userSettings.isOpen) {
			userSettings.open(null, $("#userSettingsPanelContact"));
		}

        var emailContainer = $("#userSettingsContactEmailContainer");
        var emailInput = $("#userSettingsContactEmail");
        if (account.get("loggedIn") == "yes")
        {
            emailContainer.hide();
            emailInput.val(account.get("email"));
        }
        else
        {
            emailContainer.show();
            emailInput.val("");
        }
        $("#userSettingsContactMessage").val("");
        userSettings._panelDisplay($("#userSettingsPanelContact"), true);
    },

    actionContact : function(e)
    {
        panels.hideErrors();
        var message = $("#userSettingsContactMessage").val();
        var email = $("#userSettingsContactEmail").val();
        ajax.sendMessage(email, "Message from Contact Form", message, userSettings.actionContactCallback);
    },

    actionContactCallback : function()
    {
		userSettings.close();
        return false;
    },

    goToCode : function()
    {
        $("#userSettingsCodeCode").val("");
        userSettings._panelDisplay($("#userSettingsPanelCode"), true);
    },

    actionCode : function(e)
    {
        panels.hideErrors();
        userSettings.reStart(e, "promoCode");
        return false;
    },

    goToRemoveAccount : function()
    {
        $("#userSettingsRemoveAccountPassword").val("");
        //userSettings.hideMain();
        userSettings._panelDisplay($("#userSettingsPanelRemoveAccount"), true);
    },

    actionRemoveAccount : function(e)
    {
        //Validate Password
        panels.hideErrors();
        panels.lastSubmitButton = $("#userSettingsRemoveAccountSubmit");
        var info = $.trim($("#userSettingsRemoveAccountPassword").val());
        ajax.userSettingsRequest({ info: info }, 'validatePass', userSettings.actionRemoveAccountPassValidated);
        return false;
    },

    actionRemoveAccountPassValidated : function(data)
    {
        if (data == null)
        {
            panels.displayError();
            return false;
        }

        var info = JSON.parse(data);
        if (info.t === true || info.t === 'true')
        {
            //If the pass is valid go to the next step
            userSettings._panelDisplay($("#userSettingsPanelRemoveAccount"), false);
            userSettings._panelDisplay($("#userSettingsPanelRemoveAccountConfirm"), true);
        }
        else
        {
            panels.displayError("passInvalid");
        }
        return false;
    },

    actionRemoveAccountConfirm : function(e)
    {
        panels.lastSubmitButton = $("#userSettingsRemoveAccountConfirmSubmit");
        var pass = $("#userSettingsRemoveAccountPassword").val();
        ajax.userSettingsRequest({ info: account.get("email"), validation: pass }, 'removeAccount', userSettings.actionRemoveAccountConfirmCallback);
        return false;
    },

    actionRemoveAccountConfirmCallback : function(data, error)
    {
        if (data == null)
        {
            if (error != "")
            {
                panels.displayError(error);
                return false;
            }

            panels.displayError();
            return false;
        }

        var info = JSON.parse(data);
        //console.log(info);
        if (info.t === true || info.t === 'true')
        {
            account.logout();
            setTimeout(userSettings.goToFeedback, 500);
        }
        else
        {
            panels.displayError();
        }

        return false;
    },

    goToFeedback : function(e)
    {
        $("#userSettingsFeedbackMessage").val("");
        userSettings.actionFeedbackSetType();
        userSettings._panelDisplay($("#userSettingsPanelFeedback"), true, null, false);
    },

    actionFeedback : function(e)
    {
        panels.hideErrors();
        var reason = $("#userSettingsFeedbackType").val();
        var message = $("#userSettingsFeedbackMessage").val();
        var subject = "Feedback Message After Account removal - " + reason;
        ajax.sendMessage("", subject, message, userSettings.actionFeedbackCallback);
    },

    actionFeedbackCallback : function()
    {
        userSettings.close();
        return false;
    },

    actionFeedbackSetType : function(e)
    {
        //By default the feedback type is set to Another
        var target = $("#userSettingsFeedbackOther");
        if (e != undefined)
        {
            target = $(e.target);
        }

        var placeholder = "";
        var type = "";
        switch(target.attr("id"))
        {
            case "userSettingsFeedbackFix":
                placeholder = userSettings.placeHolders["feedbackFix"];
                type = "Bug";
                break;
            case "userSettingsFeedbackNew":
                placeholder = userSettings.placeHolders["feedbackNew"];
                type = "Required Feature";
                break;
            default:
                placeholder = userSettings.placeHolders["feedbackOther"];
                var type = "Other";
                break;
        }
        $("#userSettingsFeedbackMessage").attr("placeholder", placeholder);
        $("#userSettingsFeedbackType").val(type);

        return false;
    },

    goToHelp : function(e) {
        window.open('/guide');
    },

    esc : function(e)
    {
        if (e.target.tagName.toLowerCase() == "input")
        {
            $(e.target).blur();
            e.stopPropagation();
            return false;
        }

        //ESC goes back to the previous panel or closes the settings
        $(".userSettingsDone:visible").click();
    },

    _fixCloseButton : function(allowBack)
    {
        var startPoint = userSettings.startPanel == null ? $("#userSettingsMain") : userSettings.startPanel;
        var canGoBack = allowBack == undefined ? true : allowBack;
        var label = startPoint.is(":visible") || !canGoBack ? "Close" : "Back";
        //var iconClass = label == "Close" ? "iconSettingsClose" : "iconSettingsCloseBack";
        var iconClass = label == "Close" ? "close" : "back";
		var action = label == "Close" ? userSettings.close : userSettings.goBack;

		var backCloseBtn = $('#userSettingsContainer .hud-button');
		$('#userSettingsContainer .hud-button span').text(label);
		backCloseBtn.removeClass('close back');
		backCloseBtn.addClass(iconClass);
		backCloseBtn.attr('title', label);

		$(".userSettingsDone").unbind().bind("click", fluid.util.debounce(
			action,
		500));
    },

    _panelDisplay : function(panel, show, callback, allowBack)
    {
        function actionDisplay()
        {
            //console.log("Opening... ", panel, show);
            if (show)
            {
                function displayCallback()
                {
                    userSettings._fixCloseButton(allowBack);
                    if ($.isFunction(callback)) { callback(); }
                }

                userSettings.panelStack.push(panel);
                panels.display(panel, 350, displayCallback);
                return;
            }

            panels.hideSuccessMessage();
            panels.hide(panel, 400, callback);
        }

        if (show)
        {
            userSettings.hideCurrentPanel(actionDisplay);
        }
        else
        {
            actionDisplay();
        }
    },

    _resizeScreen : function()
    {
        if (!userSettings.isOpen)  { return; }

        panels.setWorkArea();
        if ($("#userSettingsPanelHelp").is(":visible"))
        {
            setTimeout(userSettings.goToHelp, 1000);
            return;
        }
    }

}



var projectSettings =
{
    hasScroll : false,
    lastSelectedId : null,
    lastView : "Thumb",
    lastVersions : new Array(),
    mainDashTitles :
    {
        "all" : "All Projects",
        "activePrj" : "Active Projects",
        "inactivePrj" : "Inactive Projects",
        "todayPrj" : "Today's Projects",
        "recentPrj" : "Recent Projects"
    },
    hiddingElements : 0,

    init : function()
    {
        //Events to open the user settings modal window from scratch
        $('.projectSettingsButton').live({ click: fluid.util._.debounce(
            projectSettings.open,
        500, true) });

        //Actions
        //Main Dashboard
        $("#projectSettingsFilter li").live({ click: fluid.util._.debounce(
            projectSettings.selectFilter,
        500, true) });
        $("#projectSettingsSearchBoxInput").live({
            focus: fluid.util._.debounce(
                projectSettings.displayFilters,
            500, true),
            blur: fluid.util._.debounce(
                projectSettings.displayFilters,
            500, true)
        });
        $("#projectSettingsPanelMain").live({ click: fluid.util._.debounce(
            projectSettings.unselectProject,
        500, true) });
        $('#projectSettingsPanelMain .projectThumb').live({ click: projectSettings.selectProject });
		//console.log('added live behaviour: ', $('.projectThumb'));
        $('#projectAdd').live({ click: fluid.util.debounce(
            projectSettings.actionAdd,
        500, true) });
        $(".actionOpenProject").live({ click: fluid.util._.debounce(
            projectSettings.actionOpen,
        500, true) });

        //Actions/Settings
        $("#selectedProjectNameEdit").live({ blur: fluid.util._.debounce(
            projectSettings.actionRename,
        500, true) });
        $(".buttonSwitch", "#projectSettingsSettingsTop").live({ click: fluid.util._.debounce(
            projectSettings.actionChangeStatus,
        500, true) });
        $("#projectSettingsTransferForm").live({ submit: fluid.util._.debounce(
            projectSettings.actionTransfer,
        500, true) });
        $(".dropDownStyled select").live({ "change": fluid.util._.debounce(
            projectSettings.actionChangeValue,
        500, true) });
        $(".buttonSwitch", "#projectSettingsValuesTop").live({ click: fluid.util._.debounce(
            projectSettings.actionChangeOrientation,
        500, true) });
        $(".projectSettingsButtonClone").live({ click: fluid.util._.debounce(
            projectSettings.actionClone,
        500, true) });
        $(".projectSettingsButtonDelete").live({ click: fluid.util._.debounce(
            projectSettings.actionDelete,
        500, true) });
        $(".projectSettingsVersionRestore").live({ click: fluid.util._.debounce(
            projectSettings.actionRestoreVersion,
        500, true) });

        $('.brandingSettingsRow')
            .bind('change', projectSettings.onBrandingChange)
            .bind('reset' , projectSettings.onBrandingReset );
        $('#updateBranding').bind('click', function (event) {
            projectSettings.onBrandingSubmit(event);
        });
        $('#brandingImageTable .chooseFile.disabled').live(
            'click',
            function (event) {
                notification.add('alert', account.alerts.projectLimitHit.onFeatureStandard, {scope:  'projectLimitHit', stopBuggingCallBack: function () {}});
            });

        //Redirections
        $('.projectOptionsButtonSettings').live({ click: fluid.util._.debounce(
            projectSettings.goToSettings,
        500, true) });
        $('.projectSettingsButtonShare, .projectSettingsButtonShared').live({ click: fluid.util._.debounce(
            projectSettings.goToShare,
        500, true) });
        $('.projectSettingsButtonTransfer').live({ click: fluid.util._.debounce(
            projectSettings.goToTransfer,
        500, true) });
        $(document).on('click', '.projectSettingsButtonDevice', fluid.util._.debounce(function (event) {
            if (event.target.classList.contains('disabled')) {
                notification.add('alert', 'You can only change the device type of the currently opened project.');
                return;
            }

            projectSettings.goToValues(event);
        }, 500, true));
        $('.projectSettingsButtonBranding').bind('click', fluid.util._.debounce(
            projectSettings.goToBranding,
        500, true));
        $('.projectSettingsButtonVersions').live({ click: fluid.util._.debounce(
            projectSettings.goToVersions,
        500, true) });

        fluidEvent.bindEditor("panelGoBack", projectSettings.goToBackEnhancer);
        $(window).resize(projectSettings._resizeScreen);
    },

    //Navigation back has no control over original actions.  Link panels to specific actions after the panel is displayed
    goToBackEnhancer : function(e, data)
    {
        if (!data) { return; }

        if (data.panelId == "projectSettingsPanelMain")
        {
            setTimeout(projectSettings.autoSelectOnOpen, 800, true);
            return;
        }
    },

    //Open the Projects Management Dashboard
    open : function(e)
    {
        var $target = e ? $(e.target) : null;
        if (($target) && (($target.hasClass("buttonDisabled")) || ($target.parent().hasClass("buttonDisabled")))) {
            return;
        }

		//2013-08-05 BD: last thumbnail is generated just before the dash is open (when fluidMenu is toggled)
        //Before starting the dash, Regenerate the last thumbnail and Synchronize Project
        //project.renderPreview(account.get("lastOpenProject"));

        //Refresh Dash View
        projectSettings.unselectProject();
        projectSettings.refreshListHeader();
        userSettings.open(null, $("#projectSettingsPanelMain"));
        projectSettings.adjustMainPanelSize();
        $("#projectSettingsFilter").hide();

        fluid.controllers.bin.showNonEmpty();
        setTimeout(projectSettings.autoSelectOnOpen, 800);
    },

    autoSelectOnOpen : function(useLastSelected)
    {
        var projectId = useLastSelected ? projectSettings.lastSelectedId : account.get("lastOpenProject");
        projectSettings.actionSelectProject(projectSettings.getItemById(projectId));
    },

    close: function()
    {
        projectSettings.lastSelectedId = null;
        projectSettings.lastVersions = new Array();
        userSettings.close(null, false);
    },

    //Adjust the Projects Management panel size according to the amount of projects and the space available
    adjustMainPanelSize : function()
    {
        //Get all visible project Thumbnails
        var projects = $("#projectSettingsPanelMain .projectThumb").not(".hidden").size();

        //Calculate required space and calculate if the size of the panel should be adjusted
        var elPerRaw = 3;
        var rows = Math.ceil(projects / elPerRaw);
        var requiredSpace = (rows * 180) - 20;              //180 is the complete size of a thumbnail
        var newHeight = $(window).height() - 210;           //220 is the space for the container margins
        newHeight = requiredSpace < newHeight ? requiredSpace : newHeight;
        newHeight = newHeight > 570 ? 570 : newHeight       //570 is the maximum height desired to display 3x3
        $("#projectSettingsMainTop").css({ height: newHeight + "px"});

        //If all projects cannot be visible
        if (newHeight < requiredSpace)
        {
            projectSettings.hasScroll = true;
            panels.adjustScroll($('#projectSettingsMainTop'));
            $('#projectSettingsMainTop').removeClass('no-scroll');
            $(".scrollbar", "#projectSettingsMainTop").fadeIn(300);
        }
        else  //If all projects fit in one single view
        {
            projectSettings.hasScroll = false;
            $('#projectSettingsMainTop').addClass('no-scroll').tinyscrollbar().tinyscrollbar_update();
            $(".scrollbar", "#projectSettingsMainTop").hide();
        }
    },

    //Adjust the Projects Versions panel size according to the amount of projects versions and the space available
    adjustVersionsPanelSize : function()
    {
        //Get all visible project Thumbnails
        var items = $(".projectVersionItem").size();

        //Calculate required space and calculate if the size of the panel should be adjusted
        var requiredSpace = (items * 60);                 //60 is the complete size of a version item
        var newHeight = $(window).height() - 220;         //220 is the space for the container margins
        newHeight = requiredSpace < newHeight ? requiredSpace : newHeight;
        $("#projectSettingsVersionsTop").css({ height: newHeight + "px"});

        //If all version cannot be visible
        /*
        if (newHeight != requiredSpace)
        {
            panels.adjustScroll($('#projectSettingsVersionsTop'));
        }
        else
        {
            $('#projectSettingsVersionsTop').tinyscrollbar().tinyscrollbar_update();
        }
        */
    },

    selectProject : function(e)
    {
       var frame = $("#projectSettingsPanelMain .projectOptionsFrame");
        var el = $(e.target);
        el = el.hasClass("projectThumb") ? el : el.parents(".projectThumb");
        var elId = el.attr("id");

		//console.log('selectProject: ', e, el, elId, frame);
		//console.log( (frame.is(":visible")) , (elId == frame.parent().attr("id")) , (el.hasClass("projectOptionsFrame")),
		//	(el.parents(".projectOptionsFrame").size() > 0) );
        //If click the same item or the frame, open project
        if ((frame.is(":visible")) && ((elId == frame.parent().attr("id")) || (el.hasClass("projectOptionsFrame")) ||
            (el.parents(".projectOptionsFrame").size() > 0)))
        {
            projectSettings.actionOpen(e);
            return false;
        }
        projectSettings.actionSelectProject(el);

        e.stopPropagation();
    },

    actionSelectProject : function(el)
    {
        if (el == undefined) {
            projectSettings.unselectProject();
            return;
        };

        //Adjust scroll bar position to keep selected item in the main visible area
        if (projectSettings.hasScroll)
        {
            projectSettings._scrollToSelected(el);
        }

        //Display Frame
        projectSettings.displayFrame(el);
    },

    unselectProject : function(e)
    {
        //Avoid conflict when clicking the panel
        if (e != undefined)
        {
            if ($(e.target).hasClass("projectThumb"))
            {
                e.stopPropagation();
                return false;
            }
            if (($(e.target).hasClass("projectSettingsSearchBox")) || ($(e.target).parents(".projectSettingsSearchBox").size() > 0))
            {
                return true;
            }
        }

        projectSettings.displayFrame();
    },

    //Displays the frame that allows actions on a selected folder
    displayFrame : function(element)
    {
        var show = true;
        //If non element selected or the add project element selected, hide the frame
        if ((element == undefined) || (element.hasClass("projectPlaceholder") ||
            element.parent().hasClass("projectPlaceholder"))) {
            show = false;
        }

        $(".projectThumb").removeClass("selectedPrj");
        $("#projectSettingsPanelMain .projectOptionsFrame").hide().remove();

        if (show) {
            var structure = $("#tmplProjectSettingsFrame").tmpl();
            $(".selectedProjectName", structure).text(element.attr("title"));
            structure.css({ opacity : 0.75 }).appendTo(element);
            structure.fadeIn(250);
            projectSettings.lastSelectedId = projectSettings.getSelectedId(element.attr("id"));
            element.addClass("selectedPrj");

        } else {
            projectSettings.lastSelectedId = null;
        }
    },

    //Displays the menu with filters on the main dash
    displayFilters : function(e)
    {
        function hideFilterMenu()
        {
            projectSettings.applyFilter();
            $("#projectSettingsFilter").hide();
        }

        if (!$("#projectSettingsFilter").is(":visible"))
        {
            $("#projectSettingsFilter").fadeIn(250);
            return;
        }
        setTimeout(hideFilterMenu, 200);
    },

    resetFilter : function()
    {
        $("#projectSettingsFilter li").removeClass("activeMenuOption");
        $("#projectSettingsSearchBoxInput").val("");
        projectSettings.applyFilter();
    },

    //Applies or removes a selected filter or sort
    selectFilter : function(e)
    {
        var el = $(e.target);
        var isSelected = el.hasClass("activeMenuOption");
        var siblingsSelector = el.attr("data-filter") == undefined ? "data-sort" : "data-filter";

        if (isSelected)
        {
            el.removeClass("activeMenuOption");
        }
        else
        {
            $("#projectSettingsFilter li[" + siblingsSelector + "]").removeClass("activeMenuOption");
            el.addClass("activeMenuOption");
        }

        if (siblingsSelector == "data-filter")
        {
            projectSettings.applyFilter();
        }
        else
        {
            projectSettings.applySort();
        }

        e.stopPropagation();
        return false;
    },

    //Applies the selected filter
    applyFilter : function()
    {
        if (projectSettings.hiddingElements > 0) { return; }

        var activeFilterEl = $("#projectSettingsFilter li[data-filter].activeMenuOption");
        var filter = activeFilterEl.size() == 0 ? "all" : activeFilterEl.attr("data-filter");
        var keyword = $.trim($("#projectSettingsSearchBoxInput").val().toLowerCase());

        //Apply search keyword
        var allElements = $(".projectThumb", "#projectSettingsMainContent").not(".projectPlaceholder");
        var matched = allElements;
        if (keyword != "")
        {
            matched = allElements.filter("[data-name*='" + keyword.toLowerCase() + "']");
        }

        //If filter is per date, refresh the dates
        if ((filter == "todayPrj") || (filter == "recentPrj"))
        {
            projectSettings._refreshFilterAttributes();
        }

        //Apply Filter
        if (filter != "all")
        {
            matched = matched.filter("." + filter);
        }

        var others = allElements.not(matched);
        matched.removeClass("hidden");
        others.each(projectSettings._hideProjectFromList);
        if (others.size() == 0)
        {
            projectSettings.postApplyFilter();
        }
    },

    postApplyFilter : function()
    {
        projectSettings.refreshListHeader();

        //If the selected project is hidden, unselect it
        if ($(".projectOptionsFrame").parent().hasClass("hidden"))
        {
            projectSettings.unselectProject();
        }

        projectSettings.adjustMainPanelSize();
    },

    //Applies the selected sort
    applySort : function()
    {
        var activeSortEl = $("#projectSettingsFilter li[data-sort].activeMenuOption");
        var sort = activeSortEl.size() == 0 ? "" : activeSortEl.attr("data-sort");
        var order = activeSortEl.size() == 0 ? "" : activeSortEl.attr("data-order");

        //Apply sort
        if (sort != "")
        {
            var allElements = $(".projectThumb", "#projectSettingsMainContent");
            if (order == "desc")
            {
                $("#projectSettingsMainContent").append(allElements.sort(function(a, b){
                    return (
                        a = $(a).attr("data-" + sort),
                            b = $(b).attr("data-" + sort),
                            a == undefined || a == "" ? -1 : a == b ? 0 : a > b ? 1 : -1
                        );
                }));
            }
            else
            {
                $("#projectSettingsMainContent").append(allElements.sort(function(a, b){
                    return (
                        a = $(a).attr("data-" + sort),
                            b = $(b).attr("data-" + sort),
                            a == undefined || a == "" ? -1 : a == b ? 0 : a < b ? 1 : -1
                        );
                }));
            }
            panels.adjustScroll($('#projectSettingsMainTop'));
        }
    },

    _refreshFilterAttributes : function()
    {
        var allElements = $(".projectThumb", "#projectSettingsMainContent").not(".projectPlaceholder");
        var today = moment().format("YYYY/MM/DD");
        var recent = moment().subtract("days", project.recentProjectDays).format("YYYY/MM/DD");
        allElements.each(function(i, el)
        {
            //var updated = $(el).attr("data-updated") == undefined ? "" : $(el).attr("data-updated").split(" ")[0];
            //recalculate the last update date, ini order to get update info from the storage
            var id = projectSettings.getSelectedId($(el).attr("id"));
            var dataObject = storage.get(id);
            var updatedLong = moment(dataObject.updated).format("YYYY/MM/DD HH:mm:ss");
            var updated = updatedLong.split(" ")[0];
            var isToday = today == updated;
            var isRecent = updated > recent;
            $(el).attr("data-updated", updatedLong);
            if (isToday)
            {
                $(el).addClass("todayPrj");
            }
            else
            {
                $(el).removeClass("todayPrj");
            }
            if (isRecent)
            {
                $(el).addClass("recentPrj");
            }
            else
            {
                $(el).removeClass("recentPrj");
            }
        });
    },

    //Delete a project
    actionDelete : function(e)
    {
        fluid.command.create('drop', {id: projectSettings.lastSelectedId}).dispatchTo('fluid.controllers.bin');
        setTimeout(function() {
            projectSettings.open();
            //BD: I'm so sorry - no callback for projectSetting.open possible in that mess
            //the code below prevents user to get back to project setting dialog after it was deleted
            setTimeout(function() {
                userSettings._fixCloseButton(false);
            }, 400);
        }, 500);      //Allow time to delete the item and display the panel properly
    },

    //Add a project
    actionAdd : function(e)
    {
        var newId = project.add(e);
        if (newId)
        {
            var newEl = projectSettings.getItemById(newId);
            projectSettings.displayFrame(newEl);
            tracker.record("addProject", 1, "", e);
            fluid.main.trigger('projectCreated');
        }
    },

    //Open a project
    actionOpen : function(e)
    {
        if ($('.actionOpenProject').hasClass('disabled')) {
            return false;
        }
        var id = projectSettings.lastSelectedId;
        if ((id) && (id != ""))
        {
			fluid.command.create('open', {id: id}).dispatchTo('fluid.controllers.project');
            account.afterLoading();
            tracker.record("openProject", 10, id, e);
            projectSettings.close();
            fluid.main.trigger('projectOpened', {id: id});
        }
    },

    actionRename : function(e)
    {
        project.rename(e);
        projectSettings.applyFilter();
        projectSettings.applySort();
    },

    actionActivateForced : function()
    {
        var projectEl = $("#" + projectSettings.lastSelectedId);
        project.dropToActive(projectEl, true);
    },

    actionChangeStatus : function(e)
    {
        var el = $(e.target);
        if (el.hasClass("activeOption"))  { return false; }

        function applyStatus()
        {
            //Apply status
            var status = el.hasClass("switchOn") ? true : false;
            var success = false;
            var projectEl = $("#" + projectSettings.lastSelectedId);

            if (status)
            {
                success = project.dropToActive(projectSettings.lastSelectedId);
            }
            else
            {
                success = project.dropToInactive(projectSettings.lastSelectedId);
            }

            //If the change was not successful abort
            if (!success) { return false; }

            //Change the visual display of the switch
            projectSettings.displayStatus(status);
        }

        setTimeout(applyStatus, 100);       //For some reason the dropTo methods fail if executed immediately
    },

    actionTransfer : function(e)
    {
        panels.lastSubmitButton = $(".projectSettingsTransferButton");
        panels.enableLastButton(false, "projectTransfer");
        panels.lastSubmitButton = $(".projectSettingsTransferRecipients");

        var to = $.trim($(".projectSettingsTransferRecipients").val());
        ajax.userSettingsRequest({ emails: to, projectId: projectSettings.lastSelectedId },
            'projectTransfer', projectSettings.actionTransferCallback);

        return false;
    },

    actionTransferCallback : function(data, error)
    {
        function reEnableAll()
        {
            //This is an exception to the enable//msg system.  In this case the error msg goes to the input
            //But the button needs to also be disabled
            panels.lastSubmitButton = $(".projectSettingsTransferButton");
            panels.enableLastButton();
            panels.lastSubmitButton = $(".projectSettingsTransferRecipients");
            panels.enableLastButton();
        }

        var info = projectSettings._callbackSanitize(data, error);
        if (info != null)
        {
            var removeLocal = $(".projectSettingsTransferRemoveLocalInput").is(":checked");
            if (removeLocal)
            {
                reEnableAll();
                projectSettings.actionDelete();
                return;
            }
            userSettings.goBack(null, "projectTransfer", $(".projectSettingsButtonTransfer"));
        }

        reEnableAll();
    },

    actionChangeValue : function(e)
    {
        var el = $(e.target);
        var propName = el.attr("data-for");

        if ((propName == "deviceModel") && (projectSettings.isLastSelectedOpen()))
        {
            fluid.command.helper.createEventHandler('fluid.controllers.page', 'settingDevice')(e);
            projectSettings._fixOrientationAfterDeviceChange(project.get("orientation"));
        }
        else
        {
            if (propName == "deviceModel")
            {
                var device = el.children(":selected").attr("data-type");
                var dimensions = el.val().split(",");
                var projObj = projectSettings.getLastSelectedObject();
                dimensions = projObj.orientation == "Portrait" ? dimensions : dimensions.reverse();
                projectSettings.actionChangeValueData(e, propName, device, false);
                projectSettings.actionChangeValueData(e, "pageWH", dimensions);
            }
            else
            {
                projectSettings.actionChangeValueData(e, propName, el.val());
            }
        }

        //Update label in the settings panel
        if (propName == "deviceModel")
        {
            var device = el.children(":selected").attr("data-type");
            var deviceLabel = projectSettings.getDeviceLabel(device);
            $(".projectSettingsButtonDevice").text("Device type is " + deviceLabel);
        }
    },

    actionChangeOrientation : function(e)
    {
        var el = $(e.target);
        if (el.hasClass("activeOption"))  { return false; }

        //Apply status
        var orientation = el.attr("data-for");
        var projObj = projectSettings.getLastSelectedObject();

        if (projectSettings.isLastSelectedOpen())
        {
            projectSettings.actionChangeValueData(e, "orientation", orientation);
        }
        else
        {
            projectSettings.actionChangeValueData(e, "orientation", orientation, false);
            projectSettings.actionChangeValueData(e, "pageWH", [projObj["pageWH"][1], projObj["pageWH"][0]]);
    	}

        //Change the visual display of the switch
        $(".buttonSwitch", "#projectSettingsValuesTop").removeClass("activeOption");
        el.addClass("activeOption");
    },

    actionChangeValueData : function(e, propName, newValue, sync)
    {
        if (projectSettings.isLastSelectedOpen())
        {
            if (propName == "orientation")
            {
                project.orient(e);
            }
            else
            {
                var obj = {};
                obj[propName] = newValue;
                project.set(obj);
            }
        }
        else
        {
            var projObj = projectSettings.getLastSelectedObject();

            //When changing pageWH or Orientation affect all pages in the project
            if ((propName == "pageWH") || (propName == "orientation"))
            {
                var pages = projObj.pages;
                for(var i in pages)
                {
                    if (propName == "pageWH")
                    {
                        page.update({ width: newValue[0], height: newValue[1] }, pages[i]);
                    }
                    else
                    {
                        page.update({ orientation: newValue }, pages[i]);
                    }
                }
            }

            //Change property value and Synchronize object
            projObj[propName] = newValue;
            project.updated = new Date().getTime();
            storage.set(projectSettings.lastSelectedId, projObj);
            projObj.isModified = true;
        }

        var syncUp = sync == undefined ? true : sync;
        if (syncUp)
        {
            if ((propName == "deviceModel") || (propName == "orientation") || (propName == "pageWH"))
            {
                var eventToSend = projectSettings.isLastSelectedOpen() ? "autopreviewgen" : "missingpreview";
                project.renderPreview(projectSettings.lastSelectedId, eventToSend);
                setTimeout(projectSettings.updateThumbnailMedium, 3000);
            }
            else
            {
                project.sync(projectSettings.lastSelectedId);
            }
        }
    },

    actionClone : function()
    {
        if (panels.isLastButtonDisabled()) { return; }
        $('.actionOpenProject').addClass('disabled');
        panels.hideErrors();
        panels.lastSubmitButton = $(".projectSettingsButtonClone");
        panels.enableLastButton(false, "projectClone");

        ajax.userSettingsRequest({ projectId: projectSettings.lastSelectedId },
            'projectDuplicate', projectSettings.actionCloneCallback);
        return false;
    },

    actionCloneCallback : function(data, error)
    {
        var info = projectSettings._callbackSanitize(data, error, "defaultShort");
        if (info != null)
        {
            //Set to storage
            var newProjectId = info.newProjectId;
            var projectObjData = JSON.parse(info.projectData);
            projectObj = projectObjData[newProjectId];

            // need to update uploads
            var uploads = projectObjData.uploads;
            var count = Object.keys(uploads).length;
            var current = 0;
            if (uploads && count) {
                $.each(uploads, function(id) {
                    currentUpload = storage.get(id);
                    if (currentUpload.groups) {
                        if ($.inArray(projectObj.id, currentUpload.groups) === -1) {
                            // adding group
                            currentUpload.groups.push(projectObj.id);
                        }
                    } else {
                        // groups array missing
                        currentUpload.groups = [projectObj.id];
                    }
                    // update uplaod serverside
                    storage.set(id, currentUpload);
                    current += 1;

                    if (current === count) {
                        proceed();
                    }
                });
            } else {
                proceed();
            }

            function proceed() {
                var now = new Date();
                projectObj.created = projectObj.updated = now.getTime();
                projectObj.active = account.canAddProjects();
                account.addProjectId(newProjectId);
                storage.set(newProjectId, projectObj, false);
                account.set({'lastOpenProject': newProjectId});

                //Add Elements in project views
                project._template(projectObj, newProjectId);
                project.setNumber();

                //Switch to the new project
                var el = projectSettings.getItemById(newProjectId);
                projectSettings.displayFrame(el);

                //Adjust visible aspects
                var dateText = moment().format('MMMM Do YYYY');
                $("#selectedProjectNameEdit").val("Copy of " + $("#selectedProjectNameEdit").val());
                $(".projectSettingsLastUpdateDate").text("Modified on " + dateText);
                $(".projectSettingsCreationDate").text("Created on " + dateText);
                projectSettings.displayStatus(projectObj.active);
                //Load Versions
                if (projectObj.active)
                {
                    $(".projectSettingsButtonVersions").text("Version History");
                    projectSettings.actionLoadVersions();
                }


                //Set success message
                if (projectObj.active)
                {
                    panels.setSuccessMessage("projectClone", $(".projectSettingsButtonClone"));
                }
                else
                {
                    panels.setSuccessMessage("projectClone", $("#selectedProjectNameEdit"));
                }

                //Download all project to keep loaded so the next synchronization is succesful
                ajax.syncDown(newProjectId, function(respData, textStatus, jqXHR) {
                    var syncData = JSON.parse(jqXHR.responseText).t;
                    var items = JSON.parse(syncData);

                    for(var itemId in items)
                    {
                        if ((itemId != "uploads") && (itemId != newProjectId))
                        {
                            if (items.hasOwnProperty(itemId))
                            {
                                storage.set(itemId, items[itemId]);
                            }
                        }

                    }
                });

                //Trigger automatic title edit mode in order to allow the user to rename easily
                function autoEdit()
                {
                    panels.enableLastButton();
                    $("#selectedProjectNameEdit").focus();
                    $('.actionOpenProject').removeClass('disabled');
                    fluid.main.trigger('projectCloned');
                }

                setTimeout(autoEdit, 600);
            }


        }

        return false;
    },

    actionLoadVersions : function()
    {
        ajax.userSettingsRequest({ projectId: projectSettings.lastSelectedId },
            'projectVersionList', projectSettings.actionLoadVersionsCallback);

    },

    actionLoadVersionsCallback : function(data, error)
    {
        var info = projectSettings._callbackSanitize(data, error);
        if (info != null)
        {
            projectSettings.lastVersions = info.versions;
            var label = info.versions.length - 1;
            if (label <= 0)
            {
                label = "No Older Versions Available";
            }
            else
            {
                label += label == 1 ? " Older Version" : " Older Versions";
            }
            $(".projectSettingsButtonVersions").text(label);
        }

    },

    actionRestoreVersion : function(e)
    {
        var el = $(e.target);
        var row = el.parents(".projectVersionItem");
        var date = row.attr("id");
        panels.lastSubmitButton = el;

        ajax.userSettingsRequest({ 
                projectId: projectSettings.lastSelectedId,
                projectDate: date,
                //createNew: !project.isOpen(projectSettings.lastSelectedId)
                createNew: true
            },
            'projectVersionRestore',
            projectSettings.actionRestoreVersionCallback.bind(this, date));
    },

    actionRestoreVersionCallback : function(date, data, error)
    {
        var info = projectSettings._callbackSanitize(data, error, "defaultShort");
        if (info != null)
        {
            var isCurrentProject = project.isOpen(projectSettings.lastSelectedId);
            if (isCurrentProject)
            {
                project.close();
            }

            //Reload all info from project
            var items = JSON.parse(info.projectData);

            for(var itemId in items)
            {
                if ((itemId != "uploads") && (items.hasOwnProperty(itemId)))
                {
                    storage.set(itemId, items[itemId]);
                }
            }

            if (isCurrentProject)
            {
				fluid.command.create('open', {id: projectSettings.lastSelectedId}).dispatchTo('fluid.controllers.project');
            }
            else
            {
                projectSettings.updateThumbnail(projectSettings.lastSelectedId);
                projectSettings.goToSettingsUpdate();
            }

            //console.log('restoring: ', date);
            project.set({
                restoredFromDate: date
            });
            userSettings.goBack(null, "projectRestore", $(".projectSettingsButtonVersions"));
        }
    },

    goToSettings : function(e, msg, buttonSource)
    {
        //Fill all info about the selected project
        if (project.isOpen(projectSettings.lastSelectedId))
        {
            project.sync();
            projectSettings.goToSettingsUpdate();
        }
        else
        {
            project.loadIfUnloaded(projectSettings.lastSelectedId, projectSettings.goToSettingsUpdate);
        }

        //Display Panel
        function displayMessage() { panels.setSuccessMessage(msg, buttonSource);  }
        userSettings._panelDisplay($("#projectSettingsPanelSettings"), true, displayMessage, true);

        if (e != undefined)
        {
            e.stopPropagation();
        }

        return false;
    },

    goToSettingsUpdate : function()
    {
        var prjObj = projectSettings.getLastSelectedObject(),
            active = prjObj.active == undefined ? true : prjObj.active,
            device = projectSettings.getDeviceLabel(prjObj.deviceModel || "iPhone"),
            projectOpen = project.isOpen(prjObj.id);

        //Set all styles and texts
        $("#selectedProjectNameEdit").val(prjObj.name);
        $(".selectedProjectName").text(prjObj.name);
        $(".projectSettingsLastUpdateDate").text("Modified on " + moment(prjObj.updated).format('MMMM Do YYYY'));
        $(".projectSettingsCreationDate").text("Created on " + moment(prjObj.created).format('MMMM Do YYYY'));
        $(".projectSettingsButtonDevice").text("Device type is " + device)[projectOpen? 'removeClass': 'addClass']('disabled');
        projectSettings.displayStatus(active);
        projectSettings.updateThumbnailMedium();

        //Load Versions
        if (active)
        {
            $(".projectSettingsButtonVersions").text("Version History");
            projectSettings.actionLoadVersions();
        }
    },

    goToShare : function()
    {
        fluid.main.trigger('projectSharingOpened');
        //Bring all content
        if ($("#projectSettingsShareTop").children().size() == 0)
        {
            var html = $("#previewShareContainer").html();
            html = html.replace(/accordionPreviewSharing/g, "accordionProjectSharing");
            $("#projectSettingsShareTop").html(html);
        }

        //Fix links
        share.init(projectSettings.lastSelectedId);

        //Display Panel
        userSettings._panelDisplay($("#projectSettingsPanelShare"), true, null, true);
    },

    goToTransfer : function()
    {
        $(".projectSettingsTransferRecipients").val("");
        $(".projectSettingsTransferRemoveLocalInput").removeAttr("checked");

        if (projectSettings.isLastSelectedOpen()) {
            $("#projectSettingsTransferRemoveLocalArea").hide();
        } else {
            $("#projectSettingsTransferRemoveLocalArea").show();
        }


        //Display Panel
        userSettings._panelDisplay($("#projectSettingsPanelTransfer"), true, null, true);
    },

    goToBranding : function () {
        var brandingTable = document.getElementById('brandingImageTable'),
            // see if the device is a known one (iPhone, iPad)
            deviceScreen = branding.deviceScreen().screen,
            // get the project whose settings are being viewed
            proj = projectSettings.getLastSelectedObject(),
            deviceModel = proj.deviceModel || 'iPhone',
            // CSS selector for the non relevant settings that will be hidden
            hide = 'tr.brandingSettingsRow[data-key=splash]';

        // for each splash row, recommend the appropriate resolution
        switch (deviceModel) {
            // if iPhone 3/4/5, show the iPhone portrait only splash and vice versa
            case 'iPhone':
            var splash = brandingTable.querySelector('.brandingSettingsRow[data-key=splash] p[data-recommended]');
            splash.setAttribute('data-recommended', branding.screens.iPhone4.splash.replace('x', ' \u00D7 '));

            hide = 'tr.brandingSettingsRow:not([data-key=splash]):not([data-key=icon])';
            break;

            case 'iPhone5':
            var splash = brandingTable.querySelector('.brandingSettingsRow[data-key=splash] p[data-recommended]');
            splash.setAttribute('data-recommended', branding.screens.iPhone5.splash.replace('x', ' \u00D7 '));

            hide = 'tr.brandingSettingsRow:not([data-key=splash]):not([data-key=icon])';
            break;

            // recommend retina resolution (double res) for iPhone<=4 and iPad
            case 'iPad':
            brandingTable.querySelector('.brandingSettingsRow[data-key=splashP] p[data-recommended]')
                .setAttribute('data-recommended', branding.screens.iPadRetina.splashP.replace('x', ' \u00D7 '));
            brandingTable.querySelector('.brandingSettingsRow[data-key=splashL] p[data-recommended]')
                .setAttribute('data-recommended', branding.screens.iPadRetina.splashL.replace('x', ' \u00D7 '));

            break;

            // By default, recommend project device resolution
            default:
            brandingTable.querySelector('.brandingSettingsRow[data-key=splashP] p[data-recommended]')
                .setAttribute('data-recommended', proj.pageWH[0] + '\u00D7' + proj.pageWH[1]);
            brandingTable.querySelector('.brandingSettingsRow[data-key=splashL] p[data-recommended]')
                .setAttribute('data-recommended', proj.pageWH[0] + '\u00D7' + proj.pageWH[1]);

            break;
        }

        if (branding.screens[deviceModel]) {
            brandingTable.querySelector('.brandingSettingsRow[data-key=icon] p[data-recommended]')
                .setAttribute('data-recommended', branding.screens[deviceModel].icon + ' \u00D7 ' + branding.screens[deviceModel].icon);
        }
        else {
            brandingTable.querySelector('.brandingSettingsRow[data-key=icon] p[data-recommended]')
                .setAttribute('data-recommended', branding.screens.iPhone5.icon + ' \u00D7 ' + branding.screens.iPhone5.icon);
        }

        // show all rows
        fluid.util._.each(brandingTable.querySelectorAll('tr.brandingSettingsRow'), function (row, i, array) {
            row.style.display = '';
        });
        // hide appropriate rows now
        fluid.util._.each(brandingTable.querySelectorAll(hide), function (row, i, array) {
            row.style.display = 'none';
        });

        // show the correct image previews 
        projectSettings.brandingUpdatePreview();
        // clear any previous changes (doing this before updating previews makes bad things happen)
        branding.resetChange();
        // display Panel
        userSettings._panelDisplay($("#projectSettingsPanelBranding"), true, projectSettings.afterBrandingPanelShow, true);
    },

    // only allow new images to be uploaded if the account is non free
	//enableDisableBranding : function () {
	afterBrandingPanelShow : function () {
		fluid.main.fire('branding.panelShow');
	},

    // download and display branding images in Panel
    brandingUpdatePreview: function () {
        var brandingTable = document.getElementById('brandingImageTable'),
            brandingRows = brandingTable.querySelectorAll('tr.brandingSettingsRow'),
            forms = brandingTable.getElementsByTagName('form');

        fluid.util._.forEach(forms, function (form) {
            form.reset();
        });

        for (var i = 0, len = brandingRows.length; i < len; i++) {
            var key = brandingRows[i].getAttribute('data-key'),
            	imgUrl;

            if (!/icon|splashiPhone/.test(key)) {
                key += projectSettings.getLastSelectedObject().deviceModel;
            }

            imgUrl = branding.getUrl(key);

            if (imgUrl) {
	            brandingRows[i].getElementsByClassName('brandingPreview')[0].src = imgUrl;
	            brandingRows[i].classList.add('set');
	        }
	        else {
	            brandingRows[i].getElementsByClassName('brandingPreview')[0].src = brandingRows[i].getAttribute('data-default');
	            brandingRows[i].classList.remove('set');
	        }
        }
    },

    // set img src to dataURL if it was selected after the current image
    previewBrandingImage : function (img, dataURL, time) {
        var changeTime = img.getAttribute('changeTime');
        if (changeTime && changeTime > time) { return; }

        img.setAttribute('changeTime', time);

        img.src = dataURL;
    },

    // when a new file is selected, read the file and set it as the preview image
    // if no file was selected, remove the current image
    onBrandingChange : function (event) {
        var img = this.querySelector('img.brandingPreview'),
            key = this.getAttribute('data-key'),
            deviceModel = projectSettings.getLastSelectedObject().deviceModel;

        if (!/icon|splashiPhone/.test(key)) {
            key += deviceModel;
        }

        if (event.target.files.length) {
            var imageFile = event.target.files[0];
            this.classList.add('set');

            branding.changeImage(
                key,
                imageFile,
                // load done callback
                function (dataURL) {
                    projectSettings.previewBrandingImage(
                        img,                    // set the src of this <img> element to
                        dataURL,                // the dataURL that was read from file and give
                        event.timeStamp);       // the time the file was selected
                },
                // error callback
                function (event) {
                    projectSettings.onBrandingReset.call(this, event);
                    // 
                });
        }
        else {
            projectSettings.onBrandingReset.call(this, event);
        }
    },

    // remove an existing branding image
    onBrandingReset : function (event) {
        var img = this.querySelector('img.brandingPreview'),
            key = this.getAttribute('data-key');

        if (key !== 'icon') {
            key += projectSettings.getLastSelectedObject().deviceModel;
        }

        img.src = this.getAttribute('data-default');
        branding.resetChange(key);

        if (branding.get(key)) {
        	branding.changeImage(key, null);
        }

        this.classList.remove('set');
    },

    // apply changes to branding and go back to settings menu
    // TODO: show that the the images are being uploaded.
    //       and wait until they are done? Or use something to display
    //       that some async activity is happening...
    onBrandingSubmit : function (event) {
        branding.update();

        userSettings.goBack(event, 'projectBranding', $('.projectSettingsButtonBranding'));
    },

    goToValues : function()
    {
        project.loadIfUnloaded(projectSettings.lastSelectedId, function () {
            //Bring all content
            if ($(".projectSettingsDevice").children().size() == 0)
            {
                //Load options for all selects
                $(".projectSettingsDevice").html($("#DeviceSizeTmpl", page.menu).html());
                $(".projectSettingsGesture").html($(".linkTriggerSelector").html());
                $(".projectSettingsTransition").html($(".transitionSelector").html());
            }

            //Set values for selected project
            var projObj        = projectSettings.getLastSelectedObject(),
                device         = projObj.deviceModel       ||'iPhone',
                orientation    = projObj.orientation       ||'Portrait',
                defGesture     = projObj.defaultGesture    ||'tap',
                defTransition  = projObj.defaultTransition ||'slide';

            var customDeviceOpt = $(".projectSettingsDevice").children().filter("[data-type=Custom]");
    		var customDeviceWHSettings = $(".customDeviceSize");

    		customDeviceOpt.val(projObj["pageWH"].join(","));
    		customDeviceOpt.text("Custom Display Size (" + projObj["pageWH"].join("x") + ")");

    		if (device === "Custom") {
    			customDeviceWHSettings.show();
    		} else {
    			customDeviceWHSettings.hide();
    		}

            $(".projectSettingsDevice").children().filter("[data-type='" + device + "']").attr('selected', true);
            $(".projectSettingsGesture").children().filter("[value='" + defGesture + "']").attr('selected', true);
            $(".projectSettingsTransition").children().filter("[value='" + defTransition + "']").attr('selected', true);
            projectSettings._fixOrientationAfterDeviceChange(orientation);

            //Display Panel
            userSettings._panelDisplay($("#projectSettingsPanelValues"), true, null, true);
        });
    },

    _fixOrientationAfterDeviceChange : function(orientation)
    {
        var switchOptions = $(".projectSettingsOrientation").children();
        switchOptions.removeClass("activeOption");
        switchOptions.filter("[data-for='" + orientation + "']").addClass("activeOption");
    },

    goToVersions : function()
    {
        var limit = projectSettings.lastVersions.length - 1;
        if (limit <= 0) { return; }

        //If project is currently open, sync up in order to avoid data loss
        /* VK 2013-03-06: don't do this now until a user actually restores a version
        if (project.isOpen(projectSettings.lastSelectedId))
        {
            project.sync(projectSettings.lastSelectedId);
        }
        */

        //Display project versions
        var container = $("#projectSettingsVersionsContent");
        container.children().remove();
        var openProjectRestored = storage.get( project.get('id')).restoredFromDate;
        //console.log('open project restored: ', openProjectRestored);
        var markedActive = false;
        for(var i = 1; i <= limit; i++)
        {
            var obj = projectSettings.lastVersions[i];

			obj.updated = obj.updated || Math.round(new Date().getTime() / 1000);
			obj.name = obj.name || "Restored Project";

            obj['dateUpdate'] = moment(obj.updated).format("YYYY/MM/DD HH:mm:ss");
            obj['sizeKb'] = (obj.size / 1024).toFixed(2);
            var tmpl = $("#tmplProjectVersion").tmpl(obj);
            //console.log('obj: ', obj, openProjectRestored, moment(obj.updated).format("YYYY-MM-DD HH:mm:ss"));
            //if(openProjectRestored === moment(obj.updated).format("YYYY-MM-DD HH:mm:ss") ||
            if(openProjectRestored === obj.date ||
                ( i === 1 && !openProjectRestored ) ) {
                tmpl.addClass('activeVersion');
                markedActive = true;
            }

            tmpl.appendTo(container);
        }
        if(!markedActive) container.find('.projectVersionItem').eq(0).addClass('activeVersion');

        //Adjust header, Fix scroll and Display Panel
        $(".projectVersionsCount").text(limit);
        projectSettings.adjustVersionsPanelSize();
        userSettings._panelDisplay($("#projectSettingsPanelVersions"), true, null, true);
    },

    refreshListHeader : function()
    {
        var activeFilterEl = $("#projectSettingsFilter li[data-filter].activeMenuOption");
        var filter = activeFilterEl.size() == 0 ? "all" : activeFilterEl.attr("data-filter");

        var allItems = $(".projectThumb", "#projectSettingsMainContent").not(".projectPlaceholder ");
        var items = allItems.not(".hidden");
        var amount = allItems.size() == items.size() ? allItems.size() : items.size() + " of " + allItems.size();
        $(".projectsListFilterAmount").text(amount);
        $(".projectsListFilterLabel").text(projectSettings.mainDashTitles[filter]);

        //When less than 3 items are visible don't show SORT, there's not enough space to display them
        if (items.size() < 3) {
            $("li[data-sort], .separator", "#projectSettingsFilter").hide();
        } else {
            $("li[data-sort], .separator", "#projectSettingsFilter").show();
        }

        //Update Search box state to display that filter or sorting is being used
        var isUsed = $("#projectSettingsFilter li.activeMenuOption").size() == 0 ? false : true;
        var keyword = $.trim($("#projectSettingsSearchBoxInput").val().toLowerCase());
        isUsed = isUsed || keyword != "";
        if (isUsed) {
            $("#projectSettingsSearchBoxInput").addClass("usingFilter");
        } else {
            $("#projectSettingsSearchBoxInput").removeClass("usingFilter");
        }
    },

    navigateWithKeys : function(e)
    {
        if (projectSettings.lastSelectedId == null)
        {
            projectSettings.actionSelectProject($(".projectThumb").not(".hidden").eq(1));       //Select the first element
            return;
        }

        var projects = $(".projectThumb").not(".hidden").size();
        if (projects < 3) { return; }       //It requires at least 2 elements to navigate

        var direction = utils.getNavigationKeyDirection(e.keyCode);

        if (direction == "") {
            if ((e.keyCode == 13) && (e.target.tagName != "INPUT") && ($("#projectSettingsPanelMain").is(":visible")))
            {
                projectSettings.actionOpen();
            }

            return;
        }

        var current = projectSettings.getLastSelectedItem();
        var elPerRaw = 3;                                                   //Elements per row
        var positions = 1;
        var desc = true;

        if ((direction == "top") || (direction == "bottom"))
        {
            positions = elPerRaw;
        }
        if ((direction == "top") || (direction == "left"))
        {
            desc = false;
        }
        var toEl = projectSettings._findItemToNavigate(current, positions, desc);
        projectSettings.actionSelectProject(toEl);
    },

    _findItemToNavigate : function(current, positions, desc)
    {
        if (positions == 0)
        {
            return current;
        }

        if (desc)
        {
            var available = current.nextAll().not(".hidden");
            current = available.size() > 0 ? available.eq(0) : $(".projectThumb").not(".hidden").eq(1);
            positions = available.size() > 0 ? positions - 1 : 0;
        }
        else
        {
            var available = current.prevAll().not(".hidden");
            current = available.size() > 1 ? available.eq(0) : $(".projectThumb").not(".hidden").last();
            positions = available.size() > 1 > 0 ? positions - 1 : 0;
        }
        return projectSettings._findItemToNavigate(current, positions, desc);
    },

    displayStatus : function(status)
    {
        //Fix switch to display the selected status
        $(".buttonSwitch", "#projectSettingsSettingsTop").removeClass("activeOption");
        var activeButton = status ? "projectSettingsButtonActive" : "projectSettingsButtonInactive";
        $("." + activeButton).addClass("activeOption");

        //Hide/show the elements according to the status
        var panel = $("#projectSettingsPanelSettings");
        var activeActionButtons = $(".buttonForActive", panel);
        if (status)
        {
            $(".projectThumbMedium, .projectThumbButtonOpen", panel)
				.add('#fluidDropdown .projectThumb')
				.removeClass("inactivePrj");
            activeActionButtons.show();
        }
        else
        {
            $(".projectThumbMedium, .projectThumbButtonOpen", panel)
				.add('#fluidDropdown .projectThumb')
				.addClass("inactivePrj");
            activeActionButtons.hide();
        }
    },

    //Adjusts the settings when the window is reesized
    _resizeScreen : function()
    {
        if (!userSettings.isOpen)  { return; }

        if ($("#projectSettingsPanelMain").is(":visible"))
        {
            setTimeout(projectSettings.adjustMainPanelSize, 600);
            return;
        }
        else if ($("#projectSettingsPanelVersions").is(":visible"))
        {
            setTimeout(projectSettings.adjustVersionsPanelSize, 600);
            return;
        }
    },

/*  2013-05-14 BD: Most probably obsolete function, please remove as soon as version tested
    //Finds if a specific elements is sitting in the last row
    _isInLastRow : function(el)
    {
        return $(".projectThumb:last").offset().top == $(el).offset().top;
    },*/

    //gets the if of the selected project
    getSelectedId : function(rawId)
    {
        if (rawId == undefined) { return undefined; }

        return rawId.replace(projectSettings.lastView, "");
    },

    getItemById : function(id)
    {
        if (id == null) { return undefined; }

        return $("#" + id + projectSettings.lastView);
    },

    getLastSelectedItem : function()
    {
        return $("#" + projectSettings.lastSelectedId + projectSettings.lastView);
    },

    getObjectById : function(id)
    {
        return storage.get(id);
    },

    getLastSelectedObject : function()
    {
        return projectSettings.getObjectById(projectSettings.lastSelectedId);
    },

    isLastSelectedOpen : function()
    {
        if (projectSettings.lastSelectedId == null)
        {
            return false;
        }

        return project.isOpen(projectSettings.lastSelectedId);
    },

    getDeviceLabel : function(deviceType)
    {
        var options = $("#DeviceSizeTmpl", page.menu).children();
        var fullLabel = options.filter("[data-type='" + deviceType + "']").text();
        var label = fullLabel.replace(/\(([^\)]+)\)/, "");
        return label;
    },

    _hideProjectFromList : function(i, el)
    {
        projectSettings.hiddingElements++;
        var item = $(el);
        item.transition({
            width: 0,
            height: 0,
            "margin-left": 100,
            "margin-top": 80,
            opacity: 0,
            "margin-right": 0,
            complete: function()
            {
                item.addClass("hidden");
                item.removeAttr("style");
                projectSettings.hiddingElements = projectSettings.hiddingElements - 1;
                if (projectSettings.hiddingElements <= 0)
                {
                    projectSettings.postApplyFilter();
                }
            }
        }, 350);
    },

    _callbackSanitize : function(data, error, customErrorMessage)
    {
        //console.log("Callbacking ", data, error);
        if (data == null)
        {
            if (error != "")
            {
                panels.displayError(error);
                return null;
            }

            panels.displayError();
            return null;
        }

        try {
            var info = JSON.parse(data);
        } catch (ex) {
            //console.log("Error parsing JSON object...", data);
            return null;
        }

        if (info.t === true || info.t === 'true')
        {
            return info;
        }
        else
        {
            var msg = customErrorMessage == undefined ? info.t : customErrorMessage;
            panels.displayError(msg);
        }

        return null;
    },

    updateThumbnail : function(id)
    {
        var elObj = projectSettings.getObjectById(id);
        var $el = projectSettings.getItemById(id);
        projectSettings._updateThumbnail($el, elObj);
    },

    updateThumbnailMedium : function()
    {
        var elObj = projectSettings.getObjectById(projectSettings.lastSelectedId);
        var $el = $(".projectThumbMedium");
        projectSettings._updateThumbnail($el, elObj);
    },

    _updateThumbnail : function(el, elObj, pngData)
    {
        el.find('.preview').remove();
        if ((!elObj.unloaded && elObj.pages && elObj.pages.length === 0))
        {
            el.append($('<div class="preview empty">Project empty</div>'));
        }
        else if (pngData || (elObj.preview && elObj.preview.src))
        {
            var imageSrc = pngData != undefined && pngData != null ? pngData : elObj.preview.src;
            el.append($('<img class="preview" src="' + imageSrc + '">'));
        }
        else
        {
            el.append($('<div class="preview">Preview not available</div>'));
        }
    },

    _scrollToSelected : function(el)
    {
        var allEl = $("#projectSettingsPanelMain .projectThumb").not(".hidden");
        var projects = allEl.size();

        if ((el == undefined) || (el == null) || (projects < 4) || el.length === 0) { return; }

        //Get Basic data for calculations
        var elSize = allEl.eq(3).position().top;
        var viewportH = $("#projectSettingsMainTop").height();
        var elPerRaw = 3;                                                   //Elements per row
        var currentScroll = parseInt($("#projectSettingsMainContent").css("top"), 10);
        var stepsAnim = 30;                                                 //Animate in 30 steps

        //Calculations
        var rows = parseInt(projects / elPerRaw, 10);
        rows = rows * 3 == projects ? rows : rows + 1;                      //All dispalyed rows
        var visibleRows = viewportH / elSize;                               //Visible rows at one point
        var limit = elSize * (rows - visibleRows) - 10;                     //Max scroll
        var extraTop = elSize * 2 > viewportH ? 0 : elSize;                 //Hightlight 1st or 2nd row

        //Calculate Start and End Point
        var fromPos = Math.abs(currentScroll);
        var toPos = el.position().top - extraTop;
        toPos = toPos > 0 ? toPos : 0;                                      //Control top scroll limit
        toPos = toPos < limit ? toPos : limit;                              //Control bottom scroll limit

        //Goes from one point to the other in x steps
        if (toPos != fromPos)
        {
            var diff = toPos - fromPos;
            for (var step = 1; step <= stepsAnim; step++)
            {
                var pos = fromPos + (diff / stepsAnim) * step;
                setTimeout(projectSettings._scrollStepToSelected, step * 11, pos);
            }
        }
    },

    _scrollStepToSelected : function(pos)
    {
        $('#projectSettingsMainTop').tinyscrollbar_update(pos);
    }

}



