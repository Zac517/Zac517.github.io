/*!
 * NodeCursor :  a tiny javascript plugin to create custom cursor animations - jQuery version
 * (c) 2019 Hadrien Mongouachon
 * MIT Licensed.
 *
 * Author URI: http://hmongouachon.com
 * Plugin URI: https://github.com/hmongouachon/NodeCursor

 * Version: 1.0.0
 */
!function(e){NodeCursor=function(o){var n,i,t,s=e.extend({},{node:!0,node_velocity:.5,element_to_hover:"disable",node_class_hover:"disable",hide_mode:!0,hide_timing:3e3},o),d=!1,a=0,m=0,r=0,l=0;!0===s.node&&(n=e("#node"));var _=n.width()/2,c=n.width()/2;function h(){d=!1}e(document).mousemove(function(e){d=!0,!0===s.node&&(a=e.clientX-_,m=e.clientY-c),!0===s.hide_mode&&(clearTimeout(i),i=setTimeout(h,s.hide_timing))}),t=requestAnimationFrame(function o(){if(!0===d?!0===s.node&&(n.addClass("moving"),r+=(a-r)*s.node_velocity,l+=(m-l)*s.node_velocity,n.css({left:r+"px",top:l+"px"})):(!0===s.node&&n.removeClass("moving"),cancelAnimationFrame(t)),"disable"!==s.element_to_hover){let o=[];s.element_to_hover.split(",").forEach(e=>{o.push(e.trim()+":hover")}),0!=e(o.join(",")).length?!0===s.node&&"disable"!==s.node_class_hover&&n.addClass(s.node_class_hover):n.hasClass(s.node_class_hover)&&n.removeClass(s.node_class_hover)}t=requestAnimationFrame(o)}),window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame}}(jQuery);