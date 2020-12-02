
var shuffleme = (function( $ ) {
    'use strict';
    var $grid = $('#grid'),
        $filterOptions = $('.portfolio-sorting li'),
        $sizer = $grid.find('.shuffle_sizer'),

        init = function() {

            setTimeout(function() {
                listen();
                setupFilters();
            }, 100);

            $grid.shuffle({
                itemSelector: '[class*="col-"]',
                sizer: $sizer
            });
        },

        setupFilters = function() {
            var $btns = $filterOptions.children();
            $btns.on('click', function(e) {
                e.preventDefault();
                var $this = $(this),
                    isActive = $this.hasClass( 'active' ),
                    group = $this.data('group');

                $grid.shuffle( 'shuffle', group );
            });

            $btns = null;
        },

        listen = function() {
            var debouncedLayout = $.throttle( 400, function() {
                $grid.shuffle('update');
            });

            $grid.find('img').each(function() {
                var proxyImage;

                if ( this.complete && this.naturalWidth !== undefined ) {
                    return;
                }

                proxyImage = new Image();
                $( proxyImage ).on('load', function() {
                    $(this).off('load');
                    debouncedLayout();
                });

                proxyImage.src = this.src;
            });

            setTimeout(function() {
                debouncedLayout();
            }, 800);
        };

    return {
        init: init
    };
}( jQuery ));

$(document).ready(function()
{
    shuffleme.init();
});


(function($) {
    var iScrollPos = 0;



    $(window).scroll(function () {
        var i;
        $('.part').each(function(i) {
            if ($(this).position().top <= $(window).scrollTop() - 328) {
                $('div.navbar-collapse.collapse > ul > li.active').removeClass('active');
                $('div.navbar-collapse.collapse > ul > li').eq(i).addClass('active');
            }
        });

        if($(window).scrollTop() - 328 >= $('#abt-us').position().top){
            $('#top-go').fadeIn();
        }else{
            $('#top-go').css('display', 'none');
        }

        var iCurScrollPos = $(this).scrollTop();

        if (iCurScrollPos > iScrollPos) {
            $("#hero").css("top", "-"+iCurScrollPos-0.1+"px");
            if(iCurScrollPos > 62){
                $("header > div > .navbar-inverse > .container").css("transition", "0.3s ease").css("background-color", "#ffffff");
                $("header > div > .navbar-inverse").css("transition", "0.3s ease").css("background-color", "#ffffff").css("opacity", "0.9");
                $("div.navbar-header > a > p").css("transition", "0.4s ease").css("color", "#141414");
                $(".white-logo").css("display", "none");
                $(".black-logo").css("display", "block");
                $(".navbar-inverse .navbar-nav>.active>a, " +
					".navbar-inverse .navbar-nav>.active>a, " +
					".navbar-inverse .navbar-nav>.active>a:hover, " +
					".navbar-inverse .navbar-nav>.active>a:focus").css("color", "#141414");
                $(".navbar-toggle span").css("background-color", "#141414");
                $(".navbar-inverse .navbar-nav>li>a").css("color", "#999");
                $(".navbar-nav>.active>a").css("color", "#141414");
                $(".navbar-inverse .navbar-nav>li>a").hover(function() {$(this).css("color", "#141414")}, function(){
                    $(this).css("color", "#999")});
            }
        } else {
            //Scrolling Up
            $("#hero").css("top", "-"+iCurScrollPos-0.1+"px");
            if(iCurScrollPos < 62){
                $("header > div > .navbar-inverse > .container").css("transition", "0.3s ease").css("background-color", "#141414");
                $("header > div > .navbar-inverse").css("transition", "0.3s ease").css("background-color", "#141414").css("opacity", "0.9");
                $("div.navbar-header > a > p").css("transition", "0.4s ease").css("color", "#ffffff");
                $(".white-logo").css("display", "block");
                $(".black-logo").css("display", "none");
                $(".navbar-inverse .navbar-nav>.active>a, " +
                    ".navbar-inverse .navbar-nav>.active>a, " +
                    ".navbar-inverse .navbar-nav>.active>a:hover, " +
                    ".navbar-inverse .navbar-nav>.active>a:focus").css("color", "#ffffff");
                $(".navbar-toggle span").css("background-color", "#ffffff");
                $(".navbar-inverse .navbar-nav>li>a").css("color", "#999");
                $(".navbar-nav>.active>a").css("color", "#fff");
                $(".navbar-inverse .navbar-nav>li>a").hover(function() {$(this).css("color", "#ffffff")},  function(){
                    $(this).css("color", "#999")});
            }
        }

        iScrollPos = iCurScrollPos;
        $('div.navbar-collapse.collapse > ul > li').click(function () {
            $('div.navbar-collapse.collapse > ul > li.active').removeClass('active');
            $(this).addClass('active')
        });

    });


	$(window).on('load',function() {


		setTimeout(function() {
			$("#gif").css("display", "none");
            $("#welcome").fadeIn("slow");
		}, 1500);

        setTimeout(function() {
            $("#preloader").css("transition", ".5s ease");
            $("#preloader").css("height", "0%");
            $("#preloader").css("bottom", "100%");
        }, 2500);

        setTimeout(function() {
            $("#welcome").fadeOut("slow");
        }, 2400);

        setTimeout(function() {
            $("body").css("overflow-y", "scroll");
        }, 2750);

        setTimeout(function() {
            $("#hero .info").fadeIn("slow");
            $("#hero .row").fadeIn("slow").animate({'margin-left':'0px'},1000);
            $("#hero .button").fadeIn("slow").css("display", "inline-block");
        }, 3100);
	});

	          
    $(document).ready(function(){
        $("header .navbar-nav a").click(function(event) {
            event.preventDefault();
            $('html,body').animate( { scrollTop:$(this.hash).offset().top -62}, 700);
        });

        $("#hero .button a").click(function(event) {
            event.preventDefault();
            $('html,body').animate( { scrollTop:$(this.hash).offset().top -62}, 700);
        });

        $("#hero .scroll-down a").click(function(event) {
            event.preventDefault();
            $('html,body').animate( { scrollTop:$(this.hash).offset().top -62}, 700);
        });

        $("#go-to-top").click(function(event) {
            event.preventDefault();
            $('html,body').animate( { scrollTop:$(this.hash).offset().top -62}, 700);
        });

        var aud = document.getElementById("preloadAudio");
        aud.volume = 0.03;
        $(window).on('beforeunload', function() {
            $(window).scrollTop(0);
        });

        var mapClicked = false;


        $('#load-map').click(function () {
            if(mapClicked == false) {
                $('#google-map').css("height", "500px");
                $('#load-map .load-arrow').removeClass('fa-angle-down');
                $('#load-map .load-arrow').addClass('fa-angle-up');
                mapClicked = true;
            }else if(mapClicked == true){
                $('#google-map').css("height", "0px");
                $('#load-map .load-arrow').addClass('fa-angle-down');
                $('#load-map .load-arrow').removeClass('fa-angle-up');
                mapClicked = false;
            }
        });

        var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) ? true : false;

        if(isMobile == false){
            $(window).paroller();
        }else{
            $('.product1 i, .product1 h1, .product1 p, .product2 i, .product2 h1,' +
                ' .product2 p, .product3 i, .product3 h1, .product3 p, .product4 i, .product4 h1, .product4 p').css("transform", "none");
        }


        $('ul.portfolio-sorting li a').mousedown(function(e) {

            $('ul.portfolio-sorting li').removeClass('active');

            var $parent = $(this).parent();
            if (!$parent.hasClass('active')) {
                $parent.addClass('active');
            }
        });

        $("body").css("overflow", "hidden");
        $('div.navbar-header > button').click(function(){
            $(this).toggleClass('open');
        });



        $(window).bind('scroll', function(){

            var fadeStart= $('#abt-us').scrollTop() + 15
                ,fadeUntil= $('#abt-us').scrollTop() + 300
                ,fading = $('#blackout')
            ;
            var offset = $(document).scrollTop()
                ,opacity=0
            ;
            if( offset<=fadeStart ){
                opacity=1;
            }else if( offset<=fadeUntil ){
                opacity=1-offset/fadeUntil;
            }
            fading.css('opacity',opacity);
            if($(window).scrollTop() > $('#content-wrapper').position().top-92){
                $('#blackout').removeAttr("id");
            }else{
                $('.blackout').attr("id", "blackout");
            }


            if($(window).scrollTop() > $('#service').position().top + 20){
                $("#service .container .row").css("transition", "0.5s ease").css("opacity", "1");
            }else{
                $("#service .container .row").css("transition", "0.5s ease").css("opacity", "0");
            }



            if ($(window).scrollTop() > $('#process').position().top + 70) {
                // alert("oo");
                setTimeout(function() {
                    $('#process .process-left').addClass('fadeFromLeft');
                    $("#process .process-left").css({ visibility: "visible" });
                    $('#process .process-right').addClass('fadeFromRight');
                    $("#process .process-right").css({ visibility: "visible" });
                }, 80);
            }else{
                $('#process .process-left').removeClass('fadeFromLeft');
                $("#process .process-left").css({ visibility: "hidden" });
                $('#process .process-right').removeClass('fadeFromRight');
                $("#process .process-right").css({ visibility: "hidden" });
            }

            if ($(window).scrollTop() > $('#team').position().top + 70) {
                setTimeout(function() {
                    $('#team .team-left').addClass('fadeFromLeft');
                    $("#team .team-left").css({ visibility: "visible" });
                    $('#team .team-right').addClass('fadeFromRight');
                    $("#team .team-right").css({ visibility: "visible" });
                }, 80);
            }else{
                $('#team .team-left').removeClass('fadeFromLeft');
                $("#team .team-left").css({ visibility: "hidden" });
                $('#team .team-right').removeClass('fadeFromRight');
                $("#team .team-right").css({ visibility: "hidden" });
            }
        });



		 
    });

    $(window).bind('scroll.counter', function(){

        var timer1 = new CountUp("timer1", 0, 25, 0, 2);
        if($(window).scrollTop() > $('.count').position().top){

            if (!timer1.error) {
                timer1.start();
            } else {
                console.error(timer1.error);
            }

            var timer2 = new CountUp("timer2", 0, 700, 0, 1.2);
            if (!timer2.error) {
                timer2.start();
            } else {
                console.error(timer2.error);
            }

            var timer3 = new CountUp("timer3", 0, 40, 0, 2);
            if (!timer3.error) {
                timer3.start();
            } else {
                console.error(timer3.error);
            }

            var timer4 = new CountUp("timer4", 0, 12, 0, 1.5);
            if (!timer4.error) {
                timer4.start();
            } else {
                console.error(timer4.error);
            }
            $(window).off('scroll.counter');
        }else{
            $(window).on('scroll.counter');
            timer1.start();
        }
    });


})(jQuery);

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;

var container;

var particle;

var camera;
var scene;
var renderer;

var mouseX = 0;
var mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var particles = [];
var particleImage = new Image();//THREE.ImageUtils.loadTexture( "img/ParticleSmoke.png" );
particleImage.src = 'assets/images/ParticleSmoke.png';



function init() {

    container = $('#snow');
    // document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
    camera.position.z = 1000;

    scene = new THREE.Scene();
    scene.add(camera);

    renderer = new THREE.CanvasRenderer();
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    var material = new THREE.ParticleBasicMaterial( { map: new THREE.Texture(particleImage) } );

    for (var i = 0; i < 500; i++) {

        particle = new Particle3D( material);
        particle.position.x = Math.random() * 2000 - 1000;
        particle.position.y = Math.random() * 2000 - 1000;
        particle.position.z = Math.random() * 2000 - 1000;
        particle.scale.x = particle.scale.y =  1;
        scene.add( particle );

        particles.push(particle);
    }

    container.html(renderer.domElement);
    // container.appendChild( renderer.domElement );


    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.addEventListener( 'touchstart', onDocumentTouchStart, false );
    document.addEventListener( 'touchmove', onDocumentTouchMove, false );

    setInterval( loop, 1000 / 60 );

}

function onDocumentMouseMove( event ) {

    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
}

function onDocumentTouchStart( event ) {

    if ( event.touches.length == 1 ) {

        // event.preventDefault();

        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
    }
}

function onDocumentTouchMove( event ) {

    if ( event.touches.length == 1 ) {

        // event.preventDefault();

        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
    }
}

//

function loop() {

    for(var i = 0; i<particles.length; i++)
    {

        var particle = particles[i];
        particle.updatePhysics();

        with(particle.position)
        {
            if(y<-1000) y+=2000;
            if(x>1000) x-=2000;
            else if(x<-1000) x+=2000;
            if(z>1000) z-=2000;
            else if(z<-1000) z+=2000;
        }
    }

    camera.position.x += ( mouseX - camera.position.x ) * 0.05;
    camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
    camera.lookAt(scene.position);

    renderer.render( scene, camera );

}

function initializeMap() {
    var myLatlng = new google.maps.LatLng(27.69856, 85.28863);
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: {
            url: "assets/images/marker.png",
            scaledSize: new google.maps.Size(64, 88)
        },
        title: 'Our Location (Lat:27.69856, Lng:85.28863)'
    });

    google.maps.event.addDomListener(window, 'resize', function() {
        var center = map.getCenter()
        google.maps.event.trigger(map, "resize")
        map.setCenter(center)
    });

    var contentString = '<div id="content">'+
        '<p>Yup, we are here!</p>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    infowindow.open(map,marker);
    google.maps.event.trigger(map, 'resize');

}

google.maps.event.addDomListener(window, 'load', initializeMap);
