new fullpage('#fullpage', {
	autoScrolling:true,
    scrollHorizontally: true,
    loopHorizontal: false,
    fadingEffect: true,
    scrollOverflow: true,

	anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
    navigationTooltips: ['Bill Zhang', 'Team Player & Leader', 'Intern At Zhxi', 'To My Community', 'Devotion in Education', 'Contact'],
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

if(window.location.href==="http://127.0.0.1:5501/portfolio.html"){
    setTimeout(function(){
        $("#mapTrailer").append($("<h2 style='font-family: Arial, Helvetica, sans-serif'>use the map to select where you wanna go! <img src='rightward.svg' height='50px' style='margin-left: 20px'><br>or</h2><h2 style='font-family: Arial, Helvetica, sans-serif'>scroll down <img class='f' src='downward.svg' height='40px'> or right <img class='f' src='rightward.svg' height='52px'> to browse</h2>"));
        $('#map').addClass('animate-flicker')
        $('#mapTrailer .f').addClass('animate-flicker')
    }, 1500)
    setTimeout(function(){
        $('#map').removeClass('animate-flicker')
    }, 9000);
    setTimeout(function(){
        $('#mapTrailer').find('h2').remove();
    }, 12000)
}

$("#map1").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>Bill Zhang</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map2").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($('<h2>"Team Player & Leader"</h2>'));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map2-1").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>Geekton</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map2-2").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>C.A.T.E.</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map2-3").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>S.A.C</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map2-4").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>C.D.D.C.</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map3").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($('<h2>"Intern at ZhongXi"</h2>'));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map3-1").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>B.N.V.S.</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map3-2").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>Leman</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map3-3").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>Teacher's Assistant</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map3-4").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>My Internship</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map3-5").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>CoHack</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map3-6").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>Zhxi Logo</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map4").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($('<h2>"Giving back to my Community"</h2>'));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map4-1").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>Weekly Schedule</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map4-2").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>Prep Talks</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map4-3").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($('<h2>Foster Interests in Go</h2>'));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map4-4").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>The Disaster</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map5").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($('<h2>"Devotion in Education"</h2>'));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map5-1").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>The Origin</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map5-2").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>The Beginnin</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map5-3").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>English Teaching</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map5-4").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>Math Teaching</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
    }
)
$("#map6").hover(
    function(){
        $("#mapTrailer").find("h2").last().remove();
        $("#mapTrailer").append($("<h2>Contact & Github</h2>"));
    }, function(){
        $("#mapTrailer").find("h2").last().remove();
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

