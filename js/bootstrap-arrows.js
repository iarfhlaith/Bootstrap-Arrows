/* ===================================================
 * bootstrap-arrows.js
 * http://bootstrap-arrows.iarfhlaith.com
 * ===================================================
 *
 * ========================================================== */

(function( $ ){

  $.fn.bootstrapArrows = function() {  

    return this.each(function() {

      var $this = $(this);
	  
	  var angle = $this.attr('rel');
	  
	  $this.css('-webkit-transform','rotate('+angle+'deg)');
	  $this.css('-moz-transform','rotate('+angle+'deg)');
	  $this.css('-o-transform','rotate('+angle+'deg)');
	  $this.css('-ms-transform','rotate('+angle+'deg)');
	  $this.css('transform','rotate('+angle+'deg)');

    });

  };
})( jQuery );
