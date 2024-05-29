var viewed = false;

var width = window.innerWidth;

var documentHasScroll = function() {
    return window.innerHeight <= document.body.offsetHeight;
};

window.addEventListener('scroll', function (e) {
    var headernavbar = document.getElementById("headernavbar");
    if (window.scrollY > headernavbar.offsetHeight){
        var headerNavbarNav = document.querySelector('#headerNavbarNav')
        headernavbar.classList.add('scrolled');
    }else{
        headernavbar.classList.remove('scrolled');
    }
});



$(document).ready(function() {
    // $("nav").removeClass("no-transition");
	/* MENU */
	$('.navbar-nav').attr('id', 'menu'); // please don't remove this line
	$( '<div class="calendar-top"></div>' ).insertBefore( "#calendar" );
	$( '<div class="card-profile-top"></div>' ).insertBefore( ".card.profile.card-profile" );
	var divs = $(".card-profiles > div");
	for(var i = 0; i < divs.length; i+=2) {
		divs.slice(i, i+2).wrapAll( '<div class="col-xs" />');
	}

	var headerNavbar = $('#headerNavbar');
	var width100 = $('.width100');
	var innerWidth = $('body').innerWidth();
	headerNavbar.width(innerWidth);
	width100.width(innerWidth);

    $('.nav-item').children("a").each(function(){
        if($(this).attr('data-toggle') == 'dropdown'){
            $(this).removeAttr('data-toggle')
        }
    });

    $("nav").removeClass("no-transition");

    if (width < 992) { // mobile
        $('#menuToggle input[type="checkbox"]').change(function(){
            var checked = $(this).is(":checked");
            if(checked){
                $('#menu').show("slide", { direction: "right" }, 400);
                $('#search').hide();
                $('#menu, #menu *').css({
                    'visibility': 'visible'
                });
                $('body', 'html').css({
                    'overflow': 'hidden'
                });
            }else{
                $('#menu').hide("slide", { direction: "right" }, 400);
                $('#search').hide();
                $('body', 'html').css({
                    'overflow': 'auto'
                });
            }
        });
    }


    $('body').on('click', '.work_packages .accordion-toggle, .pilots .accordion-toggle', function () {
        if ($(this).next(".accordion-content").is(':visible')) {
            $(this).next(".accordion-content").slideUp(300);
            $(this).children().find(".plusminus").text('+');
            $(this).children(".plusminus").html('<span class="plus"></span>');
        } else {
            $(this).next(".accordion-content").slideDown(300);
            $(this).children().find(".plusminus").text('-');
            $(this).children(".plusminus").html('<span class="minus"></span>');
        }
    });

    $('.work_packages .accordion-content, .pilots .accordion-content, .messages .accordion-toggle').each(function( index, value ) {
        $(value).find('a').attr( "onclick", "window.open(this.href, '_blank');" )
    });

    if(width >= 1024){
        $('.work_packages .key_0, .work_packages .key_2, .work_packages .key_4, .work_packages .key_6, .work_packages .key_8, .work_packages .key_10, .work_packages .key_12').wrapAll('<div class="col-md-6 col-xs-12" />');
        $('.work_packages .key_1, .work_packages .key_3, .work_packages .key_5, .work_packages .key_7, .work_packages .key_9, .work_packages .key_11').wrapAll('<div class="col-md-6 col-xs-12" />');
    }

    $('.pilots .accordion-border').click(function(){
        var title = $(this).find(".accordion-toggle .col-xs.start-xs").text();
        var toggler = $(this).find(".accordion-toggle");

        if (toggler.next(".accordion-content").is(':visible')) {
            $("path[title='"+title+"']").removeClass('active_path');
        } else {
            $("path[title='"+title+"']").addClass('active_path');
        }
    });

    $('.nav-item').children("a").each(function(){
        if($(this).attr('data-toggle') == 'dropdown'){
            $(this).removeAttr('data-toggle')
        }
    });

    $("nav").removeClass("no-transition");

    if (window.location.hash) {
        var link = window.location.hash;
        var anchorId = link.substr(link.indexOf("#") + 1);
        if($("#"+anchorId).offset()){
            $('html, body').animate({
                scrollTop: $("#"+anchorId).offset().top - 150
            }, 500);
        }else{
            $('.accordion-border').each(function(){
                var title = $(this).find(".accordion-toggle .col-xs.start-xs").text().toUpperCase();
                var toggler = $(this).find(".accordion-toggle");
                if ( title.indexOf(anchorId.toUpperCase()) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
                    $('html, body').animate({
                        scrollTop: toggler.parent().offset().top - 150
                    }, 500);
                    toggler.trigger( "click" );
                }
            });
        }
    }

    $('.dropdown a').click(function(event) {

        if (location.href.indexOf("#") != -1) {
            var link = $(this).attr('href');
            var anchorId = link.substr(link.indexOf("#") + 1);
            if($("#"+anchorId).length>0){
                $('html, body').animate({
                    scrollTop: $("#"+anchorId).offset().top - 150
                }, 500);
            }else{
                // event.preventDefault();
                $("path[title='"+anchorId.toUpperCase()+"']").addClass('active_path');

                $('.accordion-border').each(function(){
                    var title = $(this).find(".accordion-toggle .col-xs.start-xs").text().toUpperCase();
                    var toggler = $(this).find(".accordion-toggle");
                    if ( title.indexOf(anchorId.toUpperCase()) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
                        $('html, body').animate({
                            scrollTop: toggler.parent().offset().top - 150
                        }, 500);
                        toggler.trigger( "click" );
                        event.preventDefault();
                    }
                });
            }
        }
    });


    $('.work_packages .accordion-content, .messages .accordion-toggle').each(function( index, value ) {
        $(value).find('a').attr( "onclick", "window.open(this.href, '_blank');" )
    });


	onHashChange();
	$(window).on("hashchange", function() {
		onHashChange();
	});

	$('.nav.nav-pills').removeAttr('id');

	var count = $("h1").text().length;

	$('.subscribe-items a').attr('data-aos', 'fade-up');
	// $('.icons a').attr('data-aos', 'fade-up');
	$('.about h1.display-1').attr('data-aos', 'fade-up');
	$('h2.underline').attr('data-aos', 'fade-up');
	$('.news_column').attr('data-aos', 'fade-up');
	$('.btn.btn-primary').attr('data-aos', 'zoom-in');
	$('.library-item').attr('data-aos', 'fade-up');
	$('.entry_item').attr('data-aos', 'fade-up');
	$('.profile-item').attr('data-aos', 'fade-up');

    if (width >= 1024) {
        $('#objectives').attr('data-aos', 'fade-right');
        $('#work-packages').attr('data-aos', 'fade-right')
        $('.subscriber').attr('data-aos', 'fade-right')
        $('.insects').attr('data-aos', 'fade-right')
    }

	$('.see_all_partners_link').hide();

    $(".timeline_container.left .blue_line").width(function() {
        return (innerWidth - $('.container').width())/2;
    });


    $('.dorsal').click(function () {
        var link = $(this);
        link.parent().parent().find('.toogle-contact-paragraphs').slideToggle('slow', function() {
            if ($(this).is(':visible')) {
                link.text('Read less');
            } else {
                link.text('Read more');
            }
        });

    });

    $('.library .form-wrapper, .library-items').wrapAll('<div class="container-fluid bg-secondary"><div class="container"></div></div>');
    $('.library .tabs').wrapAll('<div class="container"></div>');
    $('.library_content .row.center-xs.mb-1').wrapAll('<div class="container_relative"></div>');

    if(width > 1024){
        $('.partners_list .key_0, .partners_list .key_2, .partners_list .key_4, .partners_list .key_6, .partners_list .key_8, .partners_list .key_10, .partners_list .key_12, .partners_list .key_14, .partners_list .key_16, .partners_list .key_18').wrapAll('<div class="col-md-6 col-xs-12"></div>');
        $('.partners_list .key_1, .partners_list .key_3, .partners_list .key_5, .partners_list .key_7, .partners_list .key_9, .partners_list .key_11, .partners_list .key_13, .partners_list .key_15, .partners_list .key_17, .partners_list .key_19').wrapAll('<div class="col-md-6 col-xs-12"></div>');
    }


    $( window ).on( "load", function() {
        $(".projects_services .accordion-border").each(function(k, v) {
            $(this).removeClass("ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-state-hover ui-accordion-header-active ui-state-active");
            $(this).removeClass("ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content ui-accordion-content-active");
            $(this).removeAttr('style');
        });

        $('.projects_services .col-md-6').each(function(k, v){
            $(this).removeClass("ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-state-hover ui-accordion-header-active ui-state-active");
        });
        $('.projects_services .col-md-6').hover(function (){
            $(this).removeClass('ui-state-hover');
        });
        $('.projects_services .col-md-6').click(function (){
            $(this).removeClass("ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-state-hover ui-accordion-header-active ui-state-active ui-state-focus");
        });

        $('.projects_services .accordion-border').click(function (){
            $(this).removeClass("ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-state-hover ui-accordion-header-active ui-state-active ui-state-focus");
            $(this).removeClass("ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content ui-accordion-content-active");
            $(this).removeAttr('style');
        });
    } );

    $(document).ready(function(){
        $('.entries-carousel').slick({
            slidesToShow: 2.2,
            slidesToScroll: 1,
            autoplay: false,
            centerMode: true,
            centerPadding: '10%',
            infinite: true,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    /* News highlights carousel **/
    // $('.events-carousel').slick({
    //     autoplay: false,
    //     // autoplaySpeed: 2000,
    //     draggable: true,
    //     // pauseOnHover: true,
    //     centerMode: true,
    //     variableWidth: true,
    //     infinite: true,
    //     slidesToShow: 1,
    //     speed: 1000,
    //     centerPadding: '4%',
    //     slidesToScroll: 1,
    //     // centerPadding: '40px',
    //     arrows: true,
    //     dots: false,
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 arrows: false,
    //                 dots: true,
    //                 centerMode: true,
    //                 centerPadding: '2%',
    //                 slidesToShow: 1
    //             }
    //         }
    //     ]
    // });

    $('.events_tabs').each(function(){
        // For each set of tabs, we want to keep track of
        // which tab is active and its associated content
        var $active, $content, $links = $(this).find('a');
        var speed = "fast";
        var activeTab = $(location.hash);
        // If the location.hash matches one of the links, use that as the active tab.
        // If no match is found, use the first link as the initial active tab.
        $active = $($links.filter("[href=\'"+location.hash+"\']")[0] || $links[0]);

        if($(this).parent().parent().hasClass('videos')){
            $active.addClass('active');
        }

        if($(this).parent().parent().hasClass('events')){
            $active.addClass('active');
        }

        $content = $($active[0].hash);

        // Hide the remaining content
        $links.not($active).each(function () {
            $(this.hash).hide();
        });

        if(activeTab.length){
            $content.slideDown(speed);
            //scroll to element
            $('html, body').animate({
                scrollTop:  activeTab.offset().top - $('header').height()
            }, speed);
        }

        // Bind the click event handler
        $(this).find("a").click(function (e) {
            if($(this).hasClass('active')) {
                $content.slideDown({
                    scrollTop: $content.offset().top - $('header').height()
                }, speed);
                var screenSize = getScreenSize();
                if (screenSize.width < 800) {
                    // scroll to element
                    $('html, body').animate({
                        scrollTop: $content.offset().top - $('header').height() + 300  // mobile
                    }, speed);
                }else{
                    //scroll to element icons top
                    $('html, body').animate({
                        scrollTop:  $content.offset().top - $('header').height() + 300
                    }, speed);
                }
                e.preventDefault();
                return false;
            }
            // Make the old tab inactive.
            $active.removeClass('active');
            $content.hide();

            // Update the variables with the new link and content
            $active = $(this);
            $content = $(this.hash);

            location.hash = $active[0].hash;

            // Make the tab active.
            $active.addClass('active');
            $content.slideDown({
                scrollTop: $content.offset().top - $('header').height()
            }, speed);

            // Prevent the anchor\'s default click action
            e.preventDefault();
        });
    });


    /* buttons */


    $( ".button_su_inner" ).mouseenter(function(e) {
        var parentOffset = $(this).offset();
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
        $(this).prev(".su_button_circle").removeClass("desplode-circle");
        $(this).prev(".su_button_circle").addClass("explode-circle");
    });

    $( ".button_su_inner" ).mouseleave(function(e) {
        var parentOffset = $(this).offset();
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
        $(this).prev(".su_button_circle").removeClass("explode-circle");
        $(this).prev(".su_button_circle").addClass("desplode-circle");
    });

});



function expandReadMore(el){
    var $el, $ps, $up, totalHeight;

    totalHeight = 115;

    $el = $(el) // read-more link

    $up  = $el.parent(); // coordinator_info

    if ($el.text() == "Read more") {

        $ps = $up.find("p");

        // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
        $ps.each(function() {
            totalHeight += $(this).outerHeight();
        });

        $up.addClass('changed');

        $el.css({
            top: totalHeight - 120
        });
        // $el.html('<a class="revert" href="" onclick="revertChanges(this);">Read less</a>');

        $up.css({
            // Set height to prevent instant jumpdown when max height is removed
            "height": $up.height(),
            "max-height": 9999,
        })
            .animate({
                "height": totalHeight
            });

        //Stuff to do when btn is in the read more state
        $el.html("Read less");
        // $up.slideDown();
    } else {

        $up.removeClass('changed');

        $el.css({
            top: 53
        });
        // $el.html('<a class="revert" href="" onclick="revertChanges(this);">Read less</a>');

        $up.css({
            // Set height to prevent instant jumpdown when max height is removed
            "height": $up.height(),
            "max-height": 460,
        })
            .animate({
                "height": totalHeight
            });
        //Stuff to do when btn is in the read less state
        $el.html("Read more");

        $('html, body').animate({
            scrollTop:  $up.offset().top - $('header').height() - 300
        });
    }
    return false;
}

function onHashChange(){
	$("path").removeClass('active_path');
	$(".accordion-content").hide();
	var caseStudiesHashTitle = location.hash;

	if(caseStudiesHashTitle){
		var caseStudiesTitle = caseStudiesHashTitle.substring(1, caseStudiesHashTitle.length);
		$("path[title='"+caseStudiesTitle.toUpperCase()+"']").addClass('active_path');


	}
}

function encodeURIObject(data){
    return Object.keys(data).map(function (i) {
        return encodeURIComponent(i) + '=' + encodeURIComponent(data[i])
    }).join('&');
}

function appendProfile() {
    $(document).on('profile', function (e) {
        var headerNavbarNav = $('#headerNavbarNav');
        var li = '<li class="nav-item"><a href="/profile" target = "_self">Profile</a></li >';
        headerNavbarNav.find('>ul').append(li);
    });
}
function appendSignIn(){
    $(document).on('signin', function (e) {
        var headerNavbarLogin = $('#headerNavbarNav');
        var li = '<li class="nav-item sign-in"><a href="/login" target = "_self">Login</a></li >';
		headerNavbarLogin.find('>ul').append(li);
		var menu = $('#menuToggle');
		menu.find('>ul').append(li);
    });
}

function appendSignOut() {
    $(document).on('signout', function (e) {
        var headerNavbarNav = $('#headerNavbarNav');
        var li = '<li class="nav-item  sign-in"><a data-request="onLogout" data-request-data="redirect: \'/\'">Logout</a></li >';
        headerNavbarNav.find('>ul').append(li);
		var menu = $('#menuToggle');
		menu.find('>ul').append(li);
    });
}
//
function appendSearchAndSocialMedia(){
	var liSearch = '<li class="nav-item search_field"><a href=\"javascript: void(0);\" onclick=\"showSearchForm();\"></a></li>';
	var liSocial = '<li class="nav-item social">' +
        '<a href=\"https://twitter.com/spongeboost_eu\" target=\"_blank\" class=\"pr p-twitter big\" target=\"_blank\"></a>' +
        '<a href=\"https://www.linkedin.com/company/spongeboost-project/\" target=\"_blank\" class=\"pr p-linkedin big\" target=\"_blank\"></a>' +
        '<a href=\"https://www.youtube.com/@SpongeBoost_eu\" target=\"_blank\" class=\"pr p-youtube big\" target=\"_blank\"></a>';
	var menu = $('#menuToggle');
	menu.find('>ul').append(liSearch).append(liSocial);
}

function redirectAndRefresh(url){
	$(".tabs a").each(function() {
		this.href = window.location.hash;
	});
	window.open(url, '_blank');
	location.reload();
}

function isBreakpointLarge() {
    return window.innerWidth <= 991;
}

function showSearchForm(){
	$('#layout-header').toggleClass('full-width');
	$('#search').toggle();
	$('.navbar a.p-search').css('visibility', 'hidden');
	// $('#menu li').hide();
	// $('nav a:not(.navbar-brand)').hide();
}

function hideSearchForm(){
	$('#layout-header').toggleClass('full-width');
	$('#search').hide();
    $('.navbar a.p-search').css('visibility', 'visible');
	// $('#menu li').show();
    // $('nav a').show();
}

function requestFormLibrary() {
	$('#mylibraryForm').on('click', 'a', function () {
		var $form = $(this).closest('form');
		$form.request();
	})
}

function requestFormPartners() {
	$('#myPartnersForm').on('click', 'a', function () {
		var $form = $(this).closest('form');
		$form.request();
	})
}

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	if($(elem).height()){
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	return;

}



function scrollDown(){
	var element = $('#layout-content');
	$("html, body").animate({ scrollTop: element.offset().top - 190 }, 500);
}


function hideMe(elem){
    $(elem).parent().hide();
}


function getScreenSize() {
    var myHeight = 0;
    var myWidth = 0;
    if (window.innerWidth && window.innerHeight) {
        // Netscape & Mozilla
        myHeight = window.innerHeight;
        myWidth = window.innerWidth;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        // IE > 6
        myHeight = document.documentElement.clientHeight;
        myWidth = document.documentElement.clientWidth;
    } else if (document.body.offsetWidth && document.body.offsetHeight) {
        // IE = 6
        myHeight = document.body.offsetHeight;
        myWidth = document.body.offsetWidth;
    } else if (document.body.clientWidth && document.body.clientHeight) {
        // IE < 6
        myHeight = document.body.clientHeight;
        myWidth = document.body.clientWidth;
    }

    return {'width': myWidth, 'height': myHeight};
}

function init() {
    window.addEventListener('resize', function () {
        if (isBreakpointLarge()) {
            $('#card-carousel').slick('unslick');
        } else {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev"/>',
                    nextArrow: '<i class="slick-next"/>',
                });
             }
        }
        // keepFooter(documentHasScroll());

    });
    document.addEventListener('DOMContentLoaded', function () {
        if (!isBreakpointLarge()) {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev"/>',
                    nextArrow: '<i class="slick-next"/>',
                });
            }
        }
		appendSearchAndSocialMedia()
		requestFormLibrary()
		// requestFormPartners()
        // keepFooter(documentHasScroll());

    });
    // appendProfile()
    appendSignIn()
    appendSignOut()
}

function scrollToField(errors){
    $(".get_involved_form input, .get_involved_form select, .get_involved_form .row").removeClass('red_err_field');
    $.each(errors.scroll_to_field, function(key,valueObj){
        $("#"+key).addClass('red_err_field');
        $('html, body').animate({
            scrollTop: $("#"+key).offset().top - 200
        }, 1000);
        return false; // breaks
    });
}

function handlePilotsSVGMapMouseMove(event) {
    var title = $(event.target).parent().attr('title');
    var tooltip = document.getElementById("tooltip");

    switch (title) {
        case 'San Miguel Island':
        case 'Xistral Mountains of Galicia':
        case 'Ebro':
        case 'Eifel - High Fens':
        case 'Weiße Elster catchment':
        case 'Pärnu catchment':
        case 'Alam-Pedja':
            break;
        default:
            return tooltip.classList.remove("active");
    }
    var x = event.clientX;
    var y = event.clientY;

    tooltip.style.left = (x + 20) + "px";
    tooltip.style.top = (y + 20) + "px";

    tooltip.innerHTML = title;
    tooltip.classList.add("active");

}

function onPilots(pTitle) {
    var tooltip = document.getElementById("tooltip");
    // tooltip.classList.remove("active");
    if(!$("path[title='"+pTitle+"']").hasClass('active_path')){
        $("path[title='"+pTitle+"']").addClass('active_path');

        $('.accordion-border').each(function(){
            var title = $(this).find(".accordion-toggle .col-xs.start-xs").text();
            var toggler = $(this).find(".accordion-toggle");
            if ( title.indexOf(pTitle) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
                toggler.trigger( "click" );
                $('html, body').animate({
                    scrollTop: toggler.parent().offset().top - 150
                }, 500);
            }
        });
    }else{
        $("path[title='"+pTitle+"']").removeClass('active_path');
        $('.accordion-border').each(function(){
            var title = $(this).find(".accordion-toggle .col-xs.start-xs").text();
            var toggler = $(this).find(".accordion-toggle");
            if ( title.indexOf(pTitle) >= 0 && toggler.next(".accordion-content").is(':visible') ){
                toggler.trigger( "click" );
            }
        });
    }
}

function initButtonStyle(){
    $( "<span class=\"su_button_circle desplode-circle\"></span>" ).insertBefore( ".btn.btn-primary" );
    $('.btn.btn-primary').wrapInner('<span class="button_text_container">');
    $('.btn.btn-primary').addClass('button_su_inner').removeClass('btn-primary');
    $('.col-xs-12.col-md-3.end-xs.end-md').wrapInner('<div class="button_su">');
    $('.library form:has(.button_su_inner)').wrap('<div class="button_su">');
}

init()
