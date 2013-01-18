/**
 * Fetch It ( fetchIt )
 *
 * @author Will Ayers - will@wearemotive.com
 * @version 0.1
*/

( function( $, document, undefined )
	{
		$.fn.fetchIt = function fetch_it_init( options ) {
			// Default options
			var defaults = {
					'rel': 'prefetch prerender'
				},
				o = $.extend( defaults, options );

			return this.each(

				function fetch_it_loop(){
					// Start Plugin here

					var $this = $(this),
						prefetch_url = $this.attr('href');

					o[prefetch_url] = true;

					if ( prefetch_url && ! o[prefetch_url] )
					{
						$('<link />', { rel: options.rel, href: prefetch_url } ).appendTo( 'head' );
					}
				}
			);
		};
	}
) ( jQuery, document );
