
;(function($) {
	skel.breakpoints({
		xlarge: "(max-width: 1680px)",
		large: "(max-width: 1280px)",
		medium: "(max-width: 980px)",
		small: "(max-width: 736px)",
		xsmall: "(max-width: 480px)"
	});
	//media queries
		skel.layout({
			reset: "normalize",
			grid: true,
			conditionals: true,
			containers: true,
			 breakpoints: {
			 	small: {
		            containers: "96%",
		       },
		        xlarge:{ //因为只使用max-width，故向下生效
		        	containers: "90%"
		        }
		    }
		});
		
	$(function() {
		var $window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#hd-banner');

		//animator class
		$("#hd-banner .hd-txt").addClass("scalefloat");

		// Dropdowns.
		$('#nav-list  ul').dropotron({
			alignment: 'left'
		});
		// left Navigation Button.
		$(
			'<div id="navButton">' +
			'<a href="#navPanel" class="toggle"></a>' +   
			'</div>'
		).appendTo($body);
		// left Navigation Panel.  <span class="icon icon-navicon"></span>
		$(
				'<div id="navPanel">' +
				'<nav>' +
				$('#nav-list').navList() +
				'</nav>' +
				'</div>'
			).appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'left',
				target: $body,
				visibleClass: 'navPanel-visible'
			});
		//header slide down
		if (!skel.vars.mobile && $header.hasClass('ani-flag') && $banner.length > 0) {
			$window.on('load', function() {
				$banner.scrollwatch({
					delay: 0,
					range: 0.8,
					anchor: 'top',
					on: function() {
						$header.removeClass('ani-flag reveal');
					},
					off: function() {
						$header.addClass(' reveal');
					}
				});
			});
		}
		
	});
})(jQuery);