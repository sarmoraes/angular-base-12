!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n(r.key),r)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(self.webpackChunkangle=self.webpackChunkangle||[]).push([[592],{80869:function(t,n,r){r.d(n,{J:function(){return s}});var o,a=r(37716),s=((o=function(){return i(function t(i){e(this,t),this.element=i,this.defaultHeight=250},[{key:"ngOnInit",value:function(){$(this.element.nativeElement).slimScroll({height:this.height||this.defaultHeight})}}])}()).\u0275fac=function(e){return new(e||o)(a.Y36(a.SBq))},o.\u0275dir=a.lG2({type:o,selectors:[["scrollable"]],inputs:{height:"height"}}),o)},69242:function(t,n,r){r.d(n,{w:function(){return s}});var o,a=r(37716),s=((o=function(){return i(function t(i){e(this,t),this.element=i},[{key:"ngOnInit",value:function(){var e=this;this.$element=$(this.element.nativeElement),this.$element.css("height",this.mapHeight),this.$element.length&&this.$element.vectorMap&&this.$element.vectorMap({map:this.mapName,backgroundColor:this.mapOptions.bgColor,zoomMin:1,zoomMax:8,zoomOnScroll:!1,regionStyle:{initial:{fill:this.mapOptions.regionFill,"fill-opacity":1,stroke:"none","stroke-width":1.5,"stroke-opacity":1},hover:{"fill-opacity":.8},selected:{fill:"blue"},selectedHover:{}},focusOn:{x:.4,y:.6,scale:this.mapOptions.scale},markerStyle:{initial:{fill:this.mapOptions.markerColor,stroke:this.mapOptions.markerColor}},onRegionLabelShow:function(t,i,n){e.seriesData&&e.seriesData[n]&&i.html(i.html()+": "+e.seriesData[n]+" visitors")},markers:this.markersData,series:{regions:[{values:this.seriesData,scale:this.mapOptions.scaleColors,normalizeFunction:"polynomial"}]}})}},{key:"ngOnDestroy",value:function(){this.$element.vectorMap("get","mapObject").remove()}}])}()).\u0275fac=function(e){return new(e||o)(a.Y36(a.SBq))},o.\u0275dir=a.lG2({type:o,selectors:[["","vectormap",""]],inputs:{mapHeight:"mapHeight",mapName:"mapName",mapOptions:"mapOptions",seriesData:"seriesData",markersData:"markersData"}}),o)}}])}();