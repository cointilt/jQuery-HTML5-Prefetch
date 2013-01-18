/**
 * Fetch It ( fetchIt )
 *
 * @author Will Ayers - will@wearemotive.com
 * @version 1.0
*/

(function ($, document) {
	$.fn.fetchIt = function fetch_it_init(args) {
		// Default options
		var defaults = {
				'rel': 'prefetch prerender'
			},
			options = $.extend(defaults, args),
			urls = [];

		return this.each(function fetch_it_loop() {
			var $this = $(this),
				prefetch_url = $this.attr('href');

			// Make sure we have not prefetched this url yet
			if (typeof urls[prefetch_url] === "undefined") {
				// Add prefetch link to head
				$('<link />', {rel: options.rel, href: prefetch_url}).appendTo('head');

				// Add url so not to add duplicate prefetch urls
				urls[prefetch_url] = true;
			}
		});
	};
}(jQuery, document));
