new fullpage('#fullpage', {
	autoScrolling:true,
    scrollHorizontally: true,
    loopHorizontal: false,
    fadingEffect: true,
    scrollOverflow: true,

	anchors:['About-Me', 'Team-Player-And-Leader', 'Intern-At-ZhongXi', 'To-My-Community', 'Devotion-in-Education', 'Contact'],
    navigationTooltips: ['About Me', 'Team Player & Leader', 'Intern At ZhongXi', 'To My Community', 'Devotion in Education', 'Contact'],
    css3: true,
	navigation: true,
    slidesNavigation: true,
    responsiveHeight: 330,
	navigationPosition: 'left',
	showActiveTooltip: false,
    slidesNavPosition: 'bottom',
    animateAnchor: true,
    sectionSelector: '.section',
    slideSelector: '.slide',
    verticalCentered: true,
}); 

const overlay = document.getElementById('overlay-intro');
const close = document.getElementById('close-popup');
const intro = document.getElementById('popup-intro');

const guide =  () => {
    setTimeout(function(){
        $('#anchorTrailer').append($("<p style='font-family: Arial, Helvetica, sans-serif'>this menu here can give you a rough idea what each section is about</p><img src='downward.svg' height='40px'>"));
        $('#anchorTrailerh').append($("<p style='font-family: Arial, Helvetica, sans-serif; margin-bottom: 0px' class='col-lg-10'>this menu here can lead you through each page of a section</p><img class='col-lg-2' src='rightward.svg' style='margin-bottom:0' height='40px'>"));
        $("#mapTrailer").append($("<h2 style='font-family: Arial, Helvetica, sans-serif'>use the map to select where you wanna go! <img src='rightward.svg' height='50px' style='margin-left: 20px'><br>or</h2><h2 style='font-family: Arial, Helvetica, sans-serif'>scroll down <img class='f' src='downward.svg' height='40px'> or right <img class='f' src='rightward.svg' height='52px'> to browse</h2>"));
        $('#map').addClass('animate-flicker')
        $('#mapTrailer .f').addClass('animate-flicker')
    }, 500)
    setTimeout(function(){
        $('#map').removeClass('animate-flicker');
        $('#mapTrailer').find('h2').remove();
        $('#anchorTrailer').find('p').remove();
        $('#anchorTrailer').find('img').remove();
        $('#anchorTrailerh').find('p').remove();
        $('#anchorTrailerh').find('img').remove();
    }, 8000);
}

const closePopup = () => {
    overlay.style.display = "none";
    overlay.style.opacity = 0;
    intro.style.opacity = 0;
    guide()
};
 
const showClose = () => {
    close.style.display = "block";
    close.style.opacity = 1;
};

const typeWriter = function(txt, id, speed) {
    setTimeout(function(){
        document.getElementById(id).innerHTML += txt[0]
        txt = txt.slice(1, txt.length)
        if(txt.length > 0){
            typeWriter(txt, id, speed)
        }
    }, speed);
}

const showOverlay = () => {
    overlay.classList.add('active')

    $('#popup-text').append($('<h2 id = "popup-text-h" style="text-align: center"></h2>'))
    let txt = 'Welcome to my portfolio!'
    let id = 'popup-text-h'
    let speed = 10
    typeWriter(txt, id, speed)
    setTimeout(function(){
        showClose()
        $('#popup-text').append($('<div style="width:100%; height: 1px; background-image: linear-gradient(to right, transparent, #e0e0e0, transparent); margin-bottom: 20px"></div>'))
        $('#popup-text').append($('<p id="popup-text-p1"></p>'))
        $('#popup-text').append($('<p id="popup-text-p2" style="font-size:20px"></p>'))
        $('#popup-text').append($('<p id="popup-text-p3" style="font-size:8px; margin-top:20px; float: right"></p>'))
    }, 500)
    setTimeout(function(){
        txt = 'I built this web-portfolio to give some basic info of my projects and activities and to showcase some of the skills I have in coding. (99% of the code of this website is written by myself) To view this code or other projects I have done, you can visit my Github at the final page of this website. The process of building this version of web-portfolio is in 2 repositories: "portfolio2"(which I messed up near the end) and "portfolio3".'
        id = "popup-text-p1"
        speed = 30
        typeWriter(txt, id, speed)
    }, 2000)
    setTimeout(function(){
        txt = 'Special thanks to Jimmy, Gio, Kun and Mo. (Order is irrelevant)'
        id = "popup-text-p2"
        speed = 20
        typeWriter(txt, id, speed)
    }, 19000)
    setTimeout(function(){
        txt = 'Hit on the closing botton to begin!'
        id = "popup-text-p3"
        speed = 10
        typeWriter(txt, id, speed)
    }, 21000)
};
 
setTimeout(showOverlay, 3000);

$("#map1").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='1-1.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map1-1").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='1-2.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map1-2").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='1-3.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map1-3").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='1-4.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map1-4").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='1-5.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map2").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='2-1.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map2-1").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='2-2.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map2-2").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='2-3.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map2-3").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='2-4.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map2-4").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='2-5.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map3").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='3-1.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map3-1").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='3-2.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map3-2").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='3-3.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map3-3").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='3-4.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map3-4").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='3-5.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map3-5").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='3-6.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map3-6").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='3-7.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map4").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='4-1.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map4-1").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='4-4.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map4-2").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='4-3.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map4-3").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='4-2.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map4-4").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='4-5.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map5").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='5-1.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map5-1").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='5-2.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map5-2").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='5-3.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map5-3").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='5-4.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map5-4").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='5-5.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
$("#map6").hover(
    function(){
        $('#map').removeClass('animate-flicker')
        $("#mapTrailer").find("h2").remove();
        $("#mapTrailer").append($("<img src='6-1.jpg' height='150' style='opacity: 0.9'>"));
    }, function(){
        $("#mapTrailer").find("img").remove();
    }
)
var init = function(){
  var isMobile = navigator.userAgent &&
    navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
  var isSmall = window.innerWidth < 1000;
  
  var ps = new ParticleSlider({
    ptlGap: isMobile || isSmall ? 0 : 0,
    ptlSize: isMobile || isSmall ? 1 : 1,
    width: 1e9,
    height: 1e9,
    mouseForce: 100
  });
  
  (window.addEventListener
   ? window.addEventListener('click', function(){ps.init(true)}, false)
   : window.onclick = function(){ps.init(true)});
}

var initParticleSlider = function(){
  var psScript = document.createElement('script');
  (psScript.addEventListener
    ? psScript.addEventListener('load', init, false)
    : psScript.onload = init);
  psScript.src = 'ps-0.9.js';
	psScript.setAttribute('type', 'text/javascript');
  document.body.appendChild(psScript);
}
    
(window.addEventListener
  ? window.addEventListener('load', initParticleSlider, false)
  : window.onload = initParticleSlider);

