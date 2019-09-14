!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var i=new function(){this.phenakistoscope=void 0,this.ccapturer=void 0,this.p5=void 0,this.gfx=void 0,this.canvas=void 0};function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._total_images_to_load=0,this._loaded_images=0,this._images={},this._image_sequences={}}var t,n,o;return t=e,(n=[{key:"load_image",value:function(e,t){this._total_images_to_load++,this._images[e]=i.p5.loadImage("./assets/"+e+"."+t,this.image_loaded.bind(this))}},{key:"load_image_sequence",value:function(e,t,n){this._total_images_to_load+=n;for(var i=0;i<image_count;++i)this._image_sequences[e][i]=loadImage("assets/"+e+"/"+e+"_"+i+"."+t,this.image_loaded.bind(this))}},{key:"draw_image",value:function(e,t,n){image(this._images[e],t,n)}},{key:"draw_image_from_sequence",value:function(e,t,n,i){var a=math.floor(t*this._image_sequences[e].length);image(this._image_sequences[e][a],n,i)}},{key:"all_images_loaded",value:function(){return this._loaded_images>=this._total_images_to_load}},{key:"image_loaded",value:function(){this._loaded_images++}}])&&a(t.prototype,n),o&&a(t,o),e}();function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._resolution=t,this._output_function=function(){},this._image_loader=new o,this._ccapturer=i.ccapturer,this._dynamic_scale=!1,this._lock_scale=!1,this._pre_render=function(){},this._post_render=function(){},this._draw_slits=!1}var t,n,a;return t=e,(n=[{key:"set_default_values",value:function(e){this._layers=[],this._resolution=e,this._wedge_size=1e3,this._print=!1,this._capture_frame=0,this._slice_count=20,this._direction=-1}},{key:"scale_for_screen",value:function(e){(e=void 0===e||e)&&!this._lock_scale?(setup_new_canvas(min(window.innerWidth,window.innerHeight),min(window.innerWidth,window.innerHeight)),this._dynamic_scale||(window.addEventListener("resize",this.scale_for_screen.bind(this)),this._dynamic_scale=!0)):(window.removeEventListener("resize",this.scale_for_screen.bind(this)),this._dynamic_scale=!1)}},{key:"draw",value:function(){if(this._image_loader.all_images_loaded()){this._pre_render();for(var e=0;e<this._layers.length;e++)this._current_layer=e,push(),this._layers[e].draw_boundaries=this._show_boundaries,this._output_function(this._layers[e]),pop();this._post_render()}}},{key:"render_slits",value:function(){if(this._draw_slits){push(),rotate(-90),stroke(0),noFill(),scale(.5),rotate(360/this._slice_count/2);for(var e=0;e<this._slice_count;e++)rotate(360/this._slice_count),rect(this._wedge_size-this._wedge_size/3,-15,this._wedge_size/3+50,30);pop()}}},{key:"draw_disk_mask",value:function(){push(),fill(255),stroke(0),strokeWeight(this.display_scale),beginShape(),vertex(-10,-10),vertex(width+10,-10),vertex(width+10,height+10),vertex(-10,height+10),beginContour();for(var e=this._wedge_size/2*this.display_scale,t=0;t<100;++t)vertex(width/2+cos(3.6*-t)*e,height/2+sin(3.6*-t)*e);endContour(),endShape(),pop()}},{key:"add_layer",value:function(e){this._layers.push(e),e.parent_pScope=this}},{key:"output_mode",value:function(e){this._output_function=e}},{key:"begin_capture_if_ready",value:function(){0==this._capture_frame&&this._ccapturer.start()}},{key:"capture",value:function(){this._capture_frame<this.slice_count?(this._ccapturer.capture(i.canvas),this._capture_frame++):this._capture_frame>=this.slice_count&&(this._ccapturer.stop(),this._ccapturer.save())}},{key:"set_direction",value:function(e){this._direction=e}},{key:"set_slice_count",value:function(e){this._slice_count=e}},{key:"draw_layer_boundaries",value:function(e){this._show_boundaries=e}},{key:"draw_slits",value:function(e){this._draw_slits=e}},{key:"fill_background",value:function(e){this._layers[this._current_layer].fill_background(e)}},{key:"load_image",value:function(e,t){this._image_loader.load_image(e,t)}},{key:"load_image_sequence",value:function(e,t,n){this._image_loader.load_image_sequence(e,t,n)}},{key:"draw_image",value:function(e,t,n){this._image_loader.draw_image(e,t,n)}},{key:"draw_image_from_sequence",value:function(e,t,n,i){this._image_loader.draw_image_from_sequence(e,this.frame,t,n)}},{key:"print",set:function(e){this._print=e},get:function(){return this._print}},{key:"pre_render",set:function(e){this._pre_render=e}},{key:"post_render",set:function(e){this._post_render=e}},{key:"lock_scale",set:function(e){this._lock_scale=e}},{key:"resolution",get:function(){return this._resolution}},{key:"frame",get:function(){return this._frame}},{key:"slice_count",get:function(){return this._slice_count}},{key:"direction",get:function(){return this._direction}},{key:"display_scale",get:function(){return this._print?1:this._resolution/(this._wedge_size+0)}},{key:"slice_angle",get:function(){return 360/this._slice_count}},{key:"wedge_size",get:function(){return this._wedge_size}}])&&r(t.prototype,n),a&&r(t,a),e}(),u=function(e){return function(t){var n,i,a;push(),c(e),t.set_animation_variables(0),push(),t.draw_function(0,0,e),pop(),n=0,i=0,a=2,push(),stroke(255,0,0),line(n,i,n-a,i-a),line(n,i,n+a,i-a),line(n,i,n-a,i+a),line(n,i,n+a,i+a),pop(),pop()}},_=function(e){return function(t,n){n=void 0===n?0:n,push(),c(e),rotate(n),function(e,t){push(),scale(.5);for(var n=e.slice_angle,i=0;i<e.slice_count;i++)push(),rotate(i*n),l(e,t,i),pop();pop()}(e,t),pop(),push(),c(e),e.render_slits(),pop(),push(),e.draw_disk_mask(),pop()}};function c(e){translate(width/2,height/2),scale(e.display_scale,e.display_scale)}function l(e,t,n){push(),t.animation_function(n,t.boundary.low,t.boundary.high),pop(),t.draw_boundry()}var d=function(e){return function(t){push(),this.set_animation_variables(t/(e.slice_count+0)),this.background_function(this.animation_variables,e),this.draw_function(0,0,this.animation_variables,e),pop()}};function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._draw_function=t.bind(this),this._background_function=n.bind(this),this._animation_function=d(i.phenakistoscope).bind(this),this._do_draw_boundaries=!0,this.set_boundary(0,1e3),i.phenakistoscope.add_layer(this)}var t,n,a;return t=e,(n=[{key:"set_boundary",value:function(e,t){this._bounds={low:e,high:t}}},{key:"set_animation_variables",value:function(e){this._animation_variables={frame:e,wave:function(t){return t=void 0===t?1:t,(i.p5.sin(360*e*t)+1)/2}}}},{key:"mode",value:function(e){this._animation_function=e.bind(this)}},{key:"fill_background",value:function(e){fill(e),stroke(e),this.draw_wedge()}},{key:"draw_boundry",value:function(){this._do_draw_boundaries&&(noFill(),stroke(0),this.draw_wedge())}},{key:"draw_wedge",value:function(){push(),rotate(-90),beginShape(),this.arc(this.boundary.high,1),this.arc(this.boundary.low,-1),endShape(i.p5.CLOSE),pop()}},{key:"arc",value:function(e,t){for(var n=-t*this._pScope.slice_angle/2,i=t*this._pScope.slice_angle/20,a=0;a<=20;++a)vertex(cos(n)*e,sin(n)*e),n+=i}},{key:"parent_pScope",set:function(e){this._pScope=e}},{key:"draw_boundaries",set:function(e){this._do_draw_boundaries=e}},{key:"draw_function",get:function(){return this._draw_function}},{key:"animation_function",get:function(){return this._animation_function}},{key:"background_function",get:function(){return this._background_function}},{key:"boundary",get:function(){return this._bounds}},{key:"animation_variables",get:function(){return this._animation_variables}}])&&h(t.prototype,n),a&&h(t,a),e}(),p=function(e){window.PLayer=f,window.SYMBOL_ONLY=u(e),window.STATIC_FRAME=function(e){return function(t){push(),c(e),translate(0,e._wedge_size/2),t.draw_boundry(),t.animation_function(0,t.boundary.low,t.boundary.high),pop()}}(e),window.ANIMATED_FRAME=function(e){return function(t){push(),c(e),translate(0,e._wedge_size/2),t.draw_boundry(),t.animation_function(frameCount%e.slice_count,t.boundary.low,t.boundary.high),pop()}}(e),window.STATIC_DISK=_(e),window.ANIMATED_DISK=function(e){return function(t){push();var n=frameCount%e.slice_count;STATIC_DISK(t,e.direction*e.slice_angle*n),pop()}}(e),window.OUTPUT_GIF=function(e){return function(t){return setup_new_canvas(t,t),e.scale_for_screen(!1),e.lock_scale=!0,e.pre_render=function(){e.begin_capture_if_ready()},e.post_render=function(){e.capture()},function(e){ANIMATED_DISK(e)}}}(e),window.OUTPUT_PRINT=function(e){return function(t){return t=void 0===t?{x:2480,y:3508}:t,setup_new_canvas(t.x,t.y),e.scale_for_screen(!1),e.lock_scale=!0,function(e){push(),STATIC_DISK(e,0),pop()}}}(e),window.SWIRL=function(e){return function(t){return function(n,i,a){var o=(a-i)/(t+0);this.set_animation_variables(n/e.slice_count),this.background_function(this.animation_variables,e);for(var r=0;r<t;++r){var s=-(i+(r*o+lerp(0,o,n/e.slice_count)));this.set_animation_variables((abs(s)-i)/abs(a-i)),push(),translate(0,s),this.draw_function(0,0,this.animation_variables,e),pop()}}}}(e),window.RING=d(e),window.CW=1,window.CCW=-1,window.A4={x:2480,y:3508},window.A3={x:3508,y:4960}},w=new p5;window.setup=function(){angleMode(DEGREES),imageMode(CENTER),frameRate(24),pixelDensity(1),i.ccapturer=new CCapture({format:"gif",workersPath:"./libraries/",framerate:24,verbose:!0}),i.phenakistoscope=new s(1e3),p(i.phenakistoscope),setup_new_canvas(i.phenakistoscope.resolution,i.phenakistoscope.resolution),setup_pScope(i.phenakistoscope)},window.draw=function(){background(255),i.phenakistoscope.draw()},window.setup_new_canvas=function(e,t){i.p5=w,i.gfx=createCanvas(e,t).drawingContext,i.canvas=i.gfx.canvas;var n=Math.min(e,t);i.phenakistoscope.set_default_values(.9*n),setup_layers(i.phenakistoscope)}}]);