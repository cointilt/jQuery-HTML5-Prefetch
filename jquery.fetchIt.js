/**
 * Fetch It ( fetchIt )
 *
 * @author Will Ayers - will@wearemotive.com
*/

(
	function( $, document, undefined )
	{
		$.fn.fetchIt = function ( options )
		{
			// Default options
			var defaults = {
				'rel': 'prefetch prerender'
			}
			
			// Merge default options and custom options
			var options = $.extend( defaults, options );
			
			return this.each(
				
				function()
				{
					// Start Plugin here
					
					var $this = $(this);
					var prefetch_url = $this.attr('href');
					options[prefetch_url] = true;
					
					if ( prefetch_url and ! options[prefetch_url] )
					{
						$('<link />', { rel: options.rel, href: prefetch_url } ).appendTo( 'head' );
					}
				}
			);
		}
	}
) ( jQuery, document );