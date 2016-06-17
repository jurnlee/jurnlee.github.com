
;(function($) {
	skel.breakpoints({
		xlarge: "(max-width: 2048px)",
		large: "(max-width: 1366px)",
		medium: "(max-width: 980px)",
		small: "(max-width: 736px)",
		xsmall: "(max-width: 520px)"
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
		        xlarge:{ //因为只使用max-width，故向下包含生效，直到再次改变
		        	containers: "90%"
		        }
		    }
		});
		
	$(function() {
		var $window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#hd-banner');
		//首页banner
		var imglist = [{
			img:"public/img/hbg01.jpg",
			width: 1600,
			height:900
		},{
			img:"public/img/hbg02.jpg",
			width: 1600,
			height:900
		}];
		
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
		//index page header slider
		new defSlider({
			'dom' : document.getElementById("hd-bgs"),
			'list': imglist,
		})
	});
})(jQuery);