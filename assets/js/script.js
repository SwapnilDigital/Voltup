(function ($) {
	"use strict";
	var Solar = {
		initialised: false,
		version: 1.0,
		Solar: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			// Functions Calling
			
			this.blog_slider();
			this.testimonial_slider();
			this.ss_click();
			this.ss_toggle();
			this.ss_checkout();
			this.ss_subMenu();
			this.ss_checkout_two();
			this.ss_checkout_three();
			this.Video_popup();
			this.s_graph();
			this.counter();
			this.counter_two();
			this.product();
		},
		// ---------------blog-----------------------------
			blog_slider: function () {
				var swiper = new Swiper('.ss_section_eight .swiper-container', {
					slidesPerView: 3,
					spaceBetween: 30,
					autoplay:true,
					speed: 1000,
					autoplay: {
						delay: 2000,
					},
					loop:true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					breakpoints: {
							320: {
							  slidesPerView: 1,
							  spaceBetween: 10
							},
							480: {
							  slidesPerView: 1,
							  spaceBetween: 20
							},
							992: {
							  slidesPerView: 2,
							  spaceBetween: 30
							}
						}
				});
			},
			// --------team----------
			testimonial_slider: function () {
				var swiper = new Swiper('.ss_testimonial .swiper-container', {
					slidesPerView: 1,
					spaceBetween: 30,
					autoplay:true,
					speed: 1000,
					autoplay: {
						delay: 2000,
					},
					loop:true,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					  },
				});
			},
			// ---------search---------
			ss_click: function () {
				$(".ss_search_main").click(function (e) {
					e.stopPropagation();
					$(".ss_search_input").toggleClass('ss_open_search');
				});
				$('body').on('click', function(){
					$('.ss_search_input').removeClass('ss_open_search');
					});
				$('.ss_search_input').click(function(event){
					event.stopPropagation();
				});
			},
			// --------menu bar----------
			ss_toggle: function () {
				$(".ss_menu_bar").on('click', function() {
					$(".ss_menu").toggleClass('ss_toggle');
				});
			},
			// --------checkout bar----------
			ss_checkout: function () {
				$(".show_c_one").on('click', function(e) {
					 e.preventDefault();
					$(".show_cart_one").addClass("show_checkout_page");
				});  
			},
			// --------checkout bar----------
			ss_checkout_two: function () {
				$(".show_c_two").on('click', function(e) {
					 e.preventDefault();
					$(".show_cart_two").addClass("show_checkout_page");
				});  
			},
			// --------checkout bar----------
			ss_checkout_three: function () {
				$(".show_c_three").on('click', function(e) {
					 e.preventDefault();
					$(".show_cart_three").addClass("show_checkout_page");
				});  
			},
			// --------checkout bar----------
			ss_subMenu: function () {
				$(".ss_menuP").on('click', function() {
					$(this).toggleClass("show_subMenu");
				});  
			},
			// ---------video popup---------
			Video_popup: function() {
				$('.ss_about_img .ss_video_popup').magnificPopup({
					type: 'iframe',
					iframe: {
						patterns: {
							youtube: {
							index: 'youtube.com/',
							id: function (url) { return url },
							src: '%id%'
							},
							vimeo: {
							index: 'vimeo.com/',
							id: function (url) { return url },
							src: '%id%'
							}
						}
					}
				});	
			},
			
			// ---------graph---------

			s_graph: function() {
				if($('.ss_about').length > 0){

					// Graph Data 
					var graphData = [{
							// Suppliers
							data: [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ],
							color: '#ad7cff'
						}, {
							// Seller
							data: [ [6, 500], [7, 600], [8, 550], [9, 600], [10, 800], [11, 900], [12, 800], [13, 850], [14, 830], [15, 1000] ],
							color: '#56dcf0',
							points: { radius: 4, fillColor: '#fff' }
						}
					];

					// Lines Graph 
					$.plot($('#graph-lines'), graphData, {
						series: {
							points: {
								show: true,
								radius: 5
							},
							lines: {
								show: true
							},
							shadowSize: 0
						},
						grid: {
							color: '#646464',
							borderColor: 'transparent',
							borderWidth: 20,
							hoverable: true
						},
						xaxis: {
							tickColor: 'transparent',
							tickDecimals: 2
						},
						yaxis: {
							tickSize: 1000
						}
					});

					// Bars Graph 
					$.plot($('#graph-bars'), graphData, {
						series: {
							bars: {
								show: true,
								barWidth: .9,
								align: 'center'
							},
							shadowSize: 0
						},
						grid: {
							color: '#646464',
							borderColor: 'transparent',
							borderWidth: 20,
							hoverable: true
						},
						xaxis: {
							tickColor: 'transparent',
							tickDecimals: 2
						},
						yaxis: {
							tickSize: 1000
						}
					});

					// Graph Toggle 
					$('#graph-bars').hide();

					$('#lines').on('click', function (e) {
						$('#bars').removeClass('active');
						$('#graph-bars').fadeOut();
						$(this).addClass('active');
						$('#graph-lines').fadeIn();
						e.preventDefault();
					});

					$('#bars').on('click', function (e) {
						$('#lines').removeClass('active');
						$('#graph-lines').fadeOut();
						$(this).addClass('active');
						$('#graph-bars').fadeIn().removeClass('hidden');
						e.preventDefault();
					});

					// Tooltip 
					function showTooltip(x, y, contents) {
						$('<div id="tooltip">' + contents + '</div>').css({
							top: y - 16,
							left: x + 20
						}).appendTo('body').fadeIn();
					}

					var previousPoint = null;

					$('#graph-lines, #graph-bars').bind('plothover', function (event, pos, item) {
						if (item) {
							if (previousPoint != item.dataIndex) {
								previousPoint = item.dataIndex;
								$('#tooltip').remove();
								var x = item.datapoint[0],
									y = item.datapoint[1];
									showTooltip(item.pageX, item.pageY, y + ' suppliers at ' + x + '.00h');
							}
						} else {
							$('#tooltip').remove();
							previousPoint = null;
						}
					});

				}
			},
			// --------counter----------
			counter: function() {
				if($('.ss_about_counter').length > 0){
					var a = 0;
					$(window).scroll(function() {

					  var oTop = $('#counter').offset().top - window.innerHeight;
					  if (a == 0 && $(window).scrollTop() > oTop) {
						$('.counter-value').each(function() {
						  var $this = $(this),
							countTo = $this.attr('data-count');
						  $({
							countNum: $this.text()
						  }).animate({
							  countNum: countTo
							},

							{

							  duration: 5000,
							  easing: 'swing',
							  step: function() {
								$this.text(Math.floor(this.countNum));
							  },
							  complete: function() {
								$this.text(this.countNum);
								//alert('finished');
							  }

							});
						});
						a = 1;
					  }

					});
				}
			},
			// --------counter----------
			counter_two: function() {
				if($('.ss_pv_two_right').length > 0){
				var a = 0;
					$(window).scroll(function() {

					  var oTop = $('#counter').offset().top - window.innerHeight;
					  if (a == 0 && $(window).scrollTop() > oTop) {
						$('.counter-value').each(function() {
						  var $this = $(this),
							countTo = $this.attr('data-count');
						  $({
							countNum: $this.text()
						  }).animate({
							  countNum: countTo
							},

							{

							  duration: 5000,
							  easing: 'swing',
							  step: function() {
								$this.text(Math.floor(this.countNum));
							  },
							  complete: function() {
								$this.text(this.countNum);
								//alert('finished');
							  }

							});
						});
						a = 1;
					  }

					});
				}
			},
			product: function() {
				$('#thumbs_img img').on('click', function(){
					$('#large_image').attr('src',$(this).attr('src').replace('thumb','large'));
					$('#thumbs_img ul li img.ss_active_bdr').removeClass('ss_active_bdr');
					$(this).addClass("ss_active_bdr");
				});
			},
			
	};	
	Solar.init();
	
	
})(jQuery);		

new WOW().init();

// Contact Form Submission
		function checkRequire(formId , targetResp){
			targetResp.html('');
			var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
			var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
			var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
			var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
			var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
			var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
			var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
			var check = 0;
			$('#er_msg').remove();
			var target = (typeof formId == 'object')? $(formId):$('#'+formId);
			target.find('input , textarea , select').each(function(){
				if($(this).hasClass('require')){
					if($(this).val().trim() == ''){
						check = 1;
						$(this).focus();
						$(this).parent('div').addClass('form_error');
						targetResp.html('You missed out some fields.');
						$(this).addClass('error');
						return false;
					}else{
						$(this).removeClass('error');
						$(this).parent('div').removeClass('form_error');
					}
				}
				if($(this).val().trim() != ''){
					var valid = $(this).attr('data-valid');
					if(typeof valid != 'undefined'){
						if(!eval(valid).test($(this).val().trim())){
							$(this).addClass('error');
							$(this).focus();
							check = 1;
							targetResp.html($(this).attr('data-error'));
							return false;
						}else{
							$(this).removeClass('error');
						}
					}
				}
			});
			return check;
		}
		$(".submitForm").on('click', function() {
			var _this = $(this);
			var targetForm = _this.closest('form');
			var errroTarget = targetForm.find('.response');
			var check = checkRequire(targetForm , errroTarget);
			
			if(check == 0){
			   var formDetail = new FormData(targetForm[0]);
				formDetail.append('form_type' , _this.attr('form-type'));
				$.ajax({
					method : 'post',
					url : 'ajaxmail.php',
					data:formDetail,
					cache:false,
					contentType: false,
					processData: false
				}).done(function(resp){
				    console.log(resp);
					if(resp == 1){
						targetForm.find('input').val('');
						targetForm.find('textarea').val('');
						errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
					}else{
						errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
					}
				});
			}
		});
		
		

        function myFunction() {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("myBtn");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        }
   
        function myFunction1() {
            var dots = document.getElementById("dots1");
            var moreText = document.getElementById("more1");
            var btnText = document.getElementById("myBtn1");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        }

        function myFunction2() {
            var dots = document.getElementById("dots2");
            var moreText = document.getElementById("more2");
            var btnText = document.getElementById("myBtn2");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        }

        function myFunction3() {
            var dots = document.getElementById("dots3");
            var moreText = document.getElementById("more3");
            var btnText = document.getElementById("myBtn3");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        }

        function myFunction4() {
            var dots = document.getElementById("dots4");
            var moreText = document.getElementById("more4");
            var btnText = document.getElementById("myBtn4");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        }

        function myFunction5() {
            var dots = document.getElementById("dots5");
            var moreText = document.getElementById("more5");
            var btnText = document.getElementById("myBtn5");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        }

		
		  function myFunction6() {
            var dots = document.getElementById("dots6");
            var moreText = document.getElementById("more6");
            var btnText = document.getElementById("myBtn6");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        }


  function myFunction7() {
            var dots = document.getElementById("dots7");
            var moreText = document.getElementById("more7");
            var btnText = document.getElementById("myBtn7");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        }

		
	// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});	
		
		
var swapping = false;

(function($) {
    $.fn.extend({
        swap: function(options) {
			
			var defaults = {
			    target: "",
				speed: 1000,
				opacity: "1",
				callback: function() {}
			};
			var options = $.extend(defaults, options);
			
			return this.each(function() {
				
				var obj = $(this);
				
				if (options.target!="" && !swapping) {
					
					swapping = true;
					
					// set primary and secondary elements to relative if not already specified a positon CSS attribute
					var current_primary_pos = obj.css("position");
					var current_secondary_pos = $("#"+options.target).css("position");
					if (current_primary_pos!="relative" && current_primary_pos!="absolute") {
						obj.css("position", "relative");
					}
					if (current_secondary_pos!="relative" && current_secondary_pos!="absolute") {
						$("#"+options.target).css("position", "relative");
					}
					//
					
					// calculate y-axis movement
					var current_primary_position = obj.offset();
					var current_primary_top = current_primary_position.top;
					var current_secondary_position = $("#"+options.target).offset();
					var current_secondary_top = current_secondary_position.top;
					var direction_primary_y = '-';
					var direction_secondary_y = '-';
					if (current_primary_top<=current_secondary_top) { // if primary above secondary 
						var direction_primary_y = '+'; 
						var total_y = current_secondary_top-current_primary_top;
					}else{ // if primary below secondary 
						var total_y = current_primary_top-current_secondary_top;
					}
					if (direction_primary_y=='-') { direction_secondary_y='+'; }else{ direction_secondary_y='-'; }
					//
					
					// calculate x-axis movement
					var current_primary_position = obj.offset();
					var current_primary_left = current_primary_position.left;
					var current_secondary_position = $("#"+options.target).offset();
					var current_secondary_left = current_secondary_position.left;
					var direction_primary_x = '-';
					var direction_secondary_x = '-';
					if (current_primary_left<=current_secondary_left) { // if primary left of secondary 
						var direction_primary_x = '+'; 
						var total_x = current_secondary_left-current_primary_left;
					}else{ // if primary below secondary 
						var total_x = current_primary_left-current_secondary_left;
					}
					if (direction_primary_x=='-') { direction_secondary_x='+'; }else{ direction_secondary_x='-'; }
					//
					
					// do swapping
					obj.animate({
						opacity: options.opacity
					}, 100, function() {
						obj.animate({
							top: direction_primary_y+"="+(total_y)+"px",
							left: direction_primary_x+"="+(total_x)+"px"
						}, options.speed, function() {
							obj.animate({
								opacity: "1"
							}, 100);
						});
					});
					$("#"+options.target).animate({
						opacity: options.opacity
					}, 100, function() {
						$("#"+options.target).animate({
							top: direction_secondary_y+"="+(total_y)+"px",
							left: direction_secondary_x+"="+(total_x)+"px"
						}, options.speed, function() {
							$("#"+options.target).animate({
								opacity: "1"
							}, 100, function() { 
								swapping = false; // call the callback and apply the scope:
    								options.callback.call(this);
 							});
						});
					});
					
				}
				
			});
			
			
        }
    });
})(jQuery);		
		
		    $(document).on('click', '.map-point-sm', function() {
  var show = $(this).data('show');
  $(show).removeClass("hide").siblings().addClass("hide");
});



// panel js

$('.tab-panels .tabs li').on('click',function(){
	//find out which panel to show
	$panelToShow = $(this).attr('rel');
	//hide current tab
	$('.tab-panels .panel.active').fadeOut(300, function(){
		$(this).removeClass('active');
		$('#'+$panelToShow).fadeIn(800, function(){
			$(this).addClass('active');
		});
	});

	// $('.tab-panels .panel.active').fadeOut(1000,function(){
	// 	$('#'+$panelToShow).fadeIn(1000,function(){
	// 		$(this).addClass('active');
	// 	})
	// });
  })