/* ==========================================================
 * bootstrap-arrows.js
 * http://bootstrap-arrows.iarfhlaith.com
 * ==========================================================
 * Copyright 2012 Iarfhlaith Kelly
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

(function( $ ){

  $.fn.bootstrapArrows = function() {  

    return this.each(function() {

      var $this = $(this);
	  
	  var angle = $this.data('angle');
	  
	  $this.css('-webkit-transform','rotate('+angle+'deg)');
	  $this.css('-moz-transform','rotate('+angle+'deg)');
	  $this.css('-o-transform','rotate('+angle+'deg)');
	  $this.css('-ms-transform','rotate('+angle+'deg)');
	  $this.css('transform','rotate('+angle+'deg)');

    });

  };
})( jQuery );
