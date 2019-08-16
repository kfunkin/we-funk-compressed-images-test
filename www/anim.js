

//MENU////////////////////////////////////////////////////////////////////

let animMenuBtn = document.querySelector('#anim-menu-btn');
let animMenu = document.querySelector('#anim-menu');
let animCloseBtn = document.querySelector('#anim-close-btn');
let exitStoryBtn = document.querySelector('#exit-interactive-story');

animMenuBtn.addEventListener('click', function() {
  animMenu.style.height = "100%";
  animMenu.style.opacity = "0.95";
  animCloseBtn.style.visibility = "visible";
  animCloseBtn.style.opacity = "1";
  exitStoryBtn.style.visibility = "visible";
  exitStoryBtn.style.opacity = "1";
})

animCloseBtn.addEventListener('click', function() {
  animMenu.style.height = "0";
  animMenu.style.opacity = "0";
  animCloseBtn.style.opacity = "0";
  animCloseBtn.style.visibility = "hidden";
  exitStoryBtn.style.opacity = "0";
  exitStoryBtn.style.visibility = "hidden";
})





//BUTTONS!////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//section1buttons
let playSectionOne = document.querySelector("#section1BtnBck");
let toSectionTwo = document.querySelector("#section1BtnFwd");
//section2buttons
let backToSectionOne = document.querySelector("#section2BtnBck");
let toSectionThree = document.querySelector("#section2BtnFwd");
//section3buttons
let backToSectionTwo = document.querySelector("#section3BtnBck");
let toSectionFour = document.querySelector("#section3BtnFwd");
//section4buttons
let backToSectionThree = document.querySelector("#section4BtnBck");
let toSectionFive = document.querySelector("#section4BtnFwd");
//section5buttons
let backToSectionFour = document.querySelector("#section5BtnBck");
let toSectionSix = document.querySelector("#section5BtnFwd");
//section6buttons
let backToSectionFive = document.querySelector("#section6BtnBck");
let toSectionSeven = document.querySelector("#section6BtnFwd");
//section7buttons
let backToSectionSix = document.querySelector("#section7BtnBck");
let toSectionEight = document.querySelector("#section7BtnFwd");
//section8buttons
let backToSectionSeven = document.querySelector("#section8BtnBck");
let toSectionNine = document.querySelector("#section8BtnFwd");
//section9buttons
let backToSectionEight = document.querySelector("#section9BtnBck");
let toSectionTen = document.querySelector("#section9BtnFwd");
let sceneNineYes = document.querySelector("#yesbtn-9");
let sceneNineNo = document.querySelector("#nobtn-9");
//section10buttons
let backToSectionNine = document.querySelector("#section10BtnBck");
let toSectionEleven = document.querySelector("#section10BtnFwd");
//section11buttons
let backToSectionTen = document.querySelector("#section11BtnBck");
let toSectionTwelve = document.querySelector("#section11BtnFwd");
//section12buttons
let backToSectionEleven = document.querySelector("#section12BtnBck");
let toSectionThirteen = document.querySelector("#section12BtnFwd");
//section13buttons
let backToSectionTwelve = document.querySelector("#section13BtnBck");
let toSectionFourteen = document.querySelector("#section13BtnFwd");
//section14buttons
let backToSectionThirteen = document.querySelector("#section14BtnBck");
let toSectionFifteen = document.querySelector("#section14BtnFwd");
//section15buttons
let backToSectionFourteen = document.querySelector("#section15BtnBck");
let toSectionSixteen = document.querySelector("#section15BtnFwd");
//section16buttons
let backToSectionFifteen = document.querySelector("#section16BtnBck");
let toSectionSeventeen = document.querySelector("#section16BtnFwd");
//section17buttons
let backToSectionSixteen = document.querySelector("#section17BtnBck");
let toSectionEighteen = document.querySelector("#section17BtnFwd");
//section18buttons
let backToSectionSeventeen = document.querySelector("#section18BtnBck");
let backToAlbumView = document.querySelector("#section18BtnFwd");



//DECLARE TIMELINES HERE*******************************************************************************************

var sceneOneTL = new TimelineMax({
  //functions in here!
  paused: false
});

var sceneTwoTL = new TimelineMax({
	paused: true
});

var sceneThreeTL = new TimelineMax({
  paused: true
});

var sceneFourTL = new TimelineMax({
  paused: true
});

var sceneFiveTL = new TimelineMax({
  paused: true
});

var sceneSixTL = new TimelineMax({
  paused: true
});

var sceneSevenTL = new TimelineMax({
  paused: true
});

var sceneEightTL = new TimelineMax({
  paused: true
});


var sceneNineTL = new TimelineMax({
  paused: true,
  onComplete: playSceneNineGrooveOne
});

var sceneNineGrooveOneTL = new TimelineMax({
  paused: true,
  //onComplete: playSceneNinePrompt
});

var sceneNinePromptTL = new TimelineMax({
  paused: true
});

var sceneNineGrooveTwoTL = new TimelineMax({
  paused: true
});

var sceneNineBtnsTL = new TimelineMax({
  paused: true
});

var sceneNineBtnsGoTL = new TimelineMax({
  paused: true
});

var sceneNineCTLGo = new TimelineMax({
  paused: true
});

var sceneTenTL = new TimelineMax({
  paused: true
});

var sceneElevenTL = new TimelineMax({
  paused: true
});

var sceneTwelveTL = new TimelineMax({
  paused: true,
});


var sceneThirteenTL = new TimelineMax({
  paused: true
});

var sceneFourteenTL = new TimelineMax({
  paused: true
});

var sceneFifteenTL = new TimelineMax({
  paused: true
});

var sceneSixteenTL = new TimelineMax({
  paused: true
});

var sceneSeventeenTL = new TimelineMax({
  paused: true
});

var sceneEighteenTL = new TimelineMax({
  paused: true
});




//DECLARE AUDIO HERE!///////////////////////////////////////////////////////////////////////////////////////

var thisTime = new Howl({
  src: ["anim-assets/this-time.mp3"]
});

var funkComrades = new Howl({
  src: ["anim-assets/FunkComrades.mp3"]
});

var sceneNineWarmUp = new Howl({
  src: ["anim-assets/scene9warmup.mp3"]
});

var sceneNineStuttery = new Howl({
  src: ["anim-assets/scene9stuttery.mp3"],
  onend: function () {
    sceneNineGrooveOneTL.stop();
    sceneNinePromptTL.restart();
  }
});

var sceneNineComeOnIn = new Howl({
  src: ["anim-assets/come-on-in.mp3"],
  onend: function() {
    sceneNineGrooveTwoTL.stop();
    sceneNineBtnsTL.restart();
  }
});

var alexeiKeys12 = new Howl({
  src: ["anim-assets/scene12Alexei.mp3"]
});

var marat13Audio = new Howl({
  src: ["anim-assets/scene13.mp3"]
});

var scene18Audio = new Howl({
  src: ["anim-assets/scene18.mp3"]
});

var studioChat1 = new Howl({
  src: ["anim-assets/studio-chatter1.mp3"]
});

var studioChat2 = new Howl({
  src: ["anim-assets/studio-chatter2.mp3"]
});

var studioChat3 = new Howl({
  src: ["anim-assets/studio-chatter3.mp3"]
});

var scene7DeletedUs = new Howl({
  src: ["anim-assets/deleted-us.mp3"]
});

var scene8DeletingFunk = new Howl({
  src: ["anim-assets/deleting.mp3"]
});

var scene5Hey = new Howl({
  src: ["anim-assets/scene5-hey.mp3"]
});

var scene10Latin = new Howl({
  src: ["anim-assets/scene10-bossa.mp3"]
});

var scene17TV = new Howl({
  src: ["anim-assets/scene-17-tv.mp3"]
})

//FUNCTIONS!!!!////////////////////////////////////////////////////////////////////////////

function playSceneNineGrooveOne() {
  sceneNineGrooveOneTL.restart();
  sceneNineWarmUp.stop();
  sceneNineStuttery.play();
};

/*function playSceneNinePrompt() {
  sceneNinePromptTL.play();
};*/

/*function playSectionTwelve() {
  sceneTwelveTL.restart();
  //audio?
};*/


//SECTION1 GSAP TIMELINE... LET'S SEE HOW IT COMPARES TO CSS...





sceneOneTL.to("#tomsk", 8, {x: -800, ease: Back.easeOut.config(1.7)})
          .to("#big-stripes", 10, {x: -100, ease: Back.easeOut}, "-=5")
          .to("#tomsk-txt", 5, {opacity:"1", ease: Back.easeOut}, "-=10")
          .to("#tomsk", 10, {scale: 3, ease: ExpoScaleEase.config(1, 3)}, "-=10")
          .to("#tomsk-txt", 3, {opacity:"0", ease: Back.easeOut}, "-=3")
          .to("#tomsk", 5, {opacity:"0", ease: Back.easeOut}, "-=3")
          .to("#big-stripes", 8, {opacity:"0", ease: Back.easeOut}, "-=3")
          .to("#section1BtnFwd", 5, {opacity:"1"}, "-=7")
					.to("#logo-1", 3, {opacity: "1", }, "-=8");



thisTime.play();

/*playSectionOne.addEventListener('click', function(){
  sceneOneTL.play();
  thisTime.play();
});*/

toSectionTwo.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionTwo').offsetTop,
    behavior: "smooth"
  });
  thisTime.stop();
  sceneOneTL.stop();
	sceneTwoTL.restart();
  studioChat1.play();
});


//SECTION2 !!///////////////////////////////////////////////////////////////////////////////////////////////
backToSectionOne.addEventListener('click', function(){
  window.scrollTo({
    top: document.querySelector('#sectionOne').offsetTop,
    behavior: "smooth"
  });
  sceneOneTL.restart();
  thisTime.play();
	sceneTwoTL.stop();
  studioChat1.stop();

});



sceneTwoTL.to("#alexei-head", 0.5, {rotation: "-=20", ease: Power1.easeOut, y: -8, x: -2, delay: 1})
					.to("#alexei-d2", 1, {opacity: 1, ease: Bounce.easeOut, y: -10})
					.to("#blue-circle", 1, {opacity: 0.5, delay: -1})
					.to("#section2BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20})
          .to("#section2BtnFwd", 1, {opacity: 1,ease: Bounce.easeOut, y: 20, delay: -1});
					//.to("#yaroslav-body", 1, )
					//animate yaroslav hiding behind button


toSectionThree.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionThree').offsetTop,
    behavior: "smooth"
  });
  sceneThreeTL.restart();
  sceneTwoTL.stop();
  funkComrades.play();
  studioChat1.stop();
});

//SECTION3//////////////////////////////////////////////////////////////////////////////////////////////////////
backToSectionTwo.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionTwo').offsetTop,
    behavior: "smooth"
  });
  sceneTwoTL.restart();
  sceneThreeTL.stop();
  funkComrades.stop();
  studioChat1.play();
});


sceneThreeTL.to("#yaroslav-head-down", 2, {opacity: 1, rotation: "-=40", ease: Power1.easeOut, y: -5})
            .from("#funk-comrades-lp", 1, {opacity: 0, rotation: "+=10", ease: Power1.easeOut, delay: -2})
            .to("#yaroslav-d3", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
            .from("#yaroslav-d3", 0.5, {opacity: 0, ease: Bounce.easeOut, y: 5, delay: 1})
            .to("#yaroslav-d3-2", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
            .to("#section3BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20})
            .to("#section3BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20, delay: -1});

toSectionFour.addEventListener('click', function(){
  window.scrollTo({
    top: document.querySelector('#sectionFour').offsetTop,
    behavior: "smooth"
  });
  sceneThreeTL.stop();
  funkComrades.stop();
  sceneFourTL.restart();
  studioChat2.play();
});

//SECTION4!!/////////////////////////////////////////////////////////////////////////////////////////////
backToSectionThree.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionThree').offsetTop,
    behavior: "smooth"
  });
  sceneThreeTL.restart();
  funkComrades.play();
  studioChat2.stop();
});


sceneFourTL.to("#marathead-4", 0.5, {rotation: "-=10", ease: Power1.easeOut, y: -2, delay: 1})
           .to("#blue-circle-4", 0.2, {opacity: 0.5, y: 100, ease: Power1.easeOut})
           .to("#marat-d4-1", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5, delay: 1})
           .from("#marat-d4-1", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5, delay: 2})
           .to("#marat-d4-2", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5, delay: 1})
           .from("#marat-d4-2", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5, delay: 3})
           .to("#blue-circle-4", 0.2, {opacity: 0.5, x: -500, ease: Power1.easeOut})
           .to("#alexei-head-4", 0.5, {rotation: "-=20", ease: Power1.easeOut, y: -8, x: -2})
           .to("#alexei-d4-3", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
           .from("#alexei-d4-3", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5, delay: 5})
           .to("#alexei-d4-4", 0.5,{opacity: 1, ease: Bounce.easeOut, y: -5})
           .from("#alexei-d4-4", 0.5,{opacity: 0, ease: Bounce.easeOut, y: -5, delay:2})
           .to("#blue-circle-4", 0.2, {opacity: 0.5, x: 50, ease: Power1.easeOut})
           .to("#marathead-4", 0.5, {rotation: "+=5", ease: Power1.easeOut})
           .to("#marat-d4-5", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
           .from("#marat-d4-5", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5, delay: 2})
           .to("#alexei-head-4", 0.5, {rotation: "-=10", ease: Power1.easeOut})
           .to("#blue-circle-4", 0.2, {opacity: 0.5, x: -500, ease: Power1.easeOut})
           .to("#alexei-d4-6", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
           .from("#alexei-d4-6", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5, delay: 5})
           .to("#alexei-d4-7", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
           .from("#alexei-d4-7", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5, delay: 5})
           .to("#alexei-body-4", 1, {x:-100, ease: Power1.easeOut})
           .to("#alexei-head-4", 1, {x:-100, rotation: "+=20", ease: Power1.easeOut, delay: -1})
           .to("#yaroslav-head-4", 1, {rotation: "-=10", x: -10, y: 5, ease: Power1.easeOut})
           .to("#section4BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20, delay: -1})
           .to("#section4BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20, delay: -1});




toSectionFive.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionFive').offsetTop,
    behavior: "smooth"
  });
  sceneFourTL.stop();
  sceneFiveTL.restart();
  studioChat2.stop();
  scene5Hey.play();
});

//SECTION5!/////////////////////////////////////////////////////////////////////////////////////////////////

backToSectionFour.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionFour').offsetTop,
    behavior: "smooth"
  });
  sceneFourTL.restart();
  sceneFiveTL.stop();
  studioChat2.play();
  scene5Hey.stop();
});


sceneFiveTL.from("#alexei-head-5", 0.5, {rotation: "-=20"})
           .from("#blue-circle-5", 0.4, {x: 100, opacity: 0, ease: Power1.easeOut})
           .from("#pink-circle-5", 0.4, {x: -100, opacity: 0, ease: Power1.easeOut, delay: -0.5})
           .from("#alexeis-pc", 0.4, {scale: 0.1, opacity: 0, ease: Bounce.easeOut, delay: -0.2})
           .to("#hey-big-5", 0.4, {scale: 1.5, opacity: 1, ease: Power1.easeOut})
           .to("#not-there-5", 0.4, {opacity: 1, ease: Bounce.easeOut})
           .to("#section5BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20})
           .to("#section5BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20, delay: -1});


toSectionSix.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionSix').offsetTop,
    behavior: "smooth"
  });
  sceneSixTL.restart();
  studioChat3.play();
  scene5Hey.stop();
});


//SECTION 6!/////////////////////////////////////////////////////////////////////////////////////////

backToSectionFive.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionFive').offsetTop,
    behavior: "smooth"
  });
  sceneSixTL.stop();
  sceneFiveTL.restart();
  studioChat3.stop();
  scene5Hey.play();
});

sceneSixTL.to("#yaroslav-d6-1", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5, delay: 1})
          .to("#yaroslav-head-6", 0.3, {rotation: 6, ease: Sine.easeOut, y: -2, x: 4, delay: -0.5})
          .from("#yaroslav-d6-1", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5, delay: 2})
          .to("#yaroslav-d6-2", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5, delay: 1})
          .from("#yaroslav-d6-2", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5, delay: 2})
          .to("#yaroslav-d6-3", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5, delay: 1})
          .to("#yaroslav-head-6", 0.3, {rotation: -10, ease: Sine.easeOut, y: 2, x: -9, delay: -0.5})
          .from("#yaroslav-d6-3", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5, delay: 2})
          .to("#marat-d6-4", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5, delay: 1})
          .to("#marathead-6", 0.5, {rotation: 8, ease: Sine.easeOut, delay: -0.5})
          .from("#marat-d6-4", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5, delay: 2})
          .to("#alexei-head-6", 0.5, {rotation: 12, ease: Sine.easeOut})
          .to("#alexei-d6-5", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5, delay: -0.5})
          .from("#alexei-d6-5", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5, delay: 2})
          .to("#section6BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20})
          .to("#section6BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20, delay: -1});

toSectionSeven.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionSeven').offsetTop,
    behavior: "smooth"
  });
  sceneSixTL.stop();
  sceneSevenTL.restart();
  studioChat3.stop();
  scene7DeletedUs.play();
})

//SECTION 7!///////////////////////////////////////////////////////////////////////////////////

backToSectionSix.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionSix').offsetTop,
    behavior: "smooth"
  });
  sceneSixTL.restart();
  sceneSevenTL.stop();
  studioChat3.play();
  scene7DeletedUs.stop();
});

sceneSevenTL.from("#big-stripes-7", 1, {y: 300, opacity: 0, ease: Sine.easeOut})
            .from("#yaroslav-mob", 1, {y: 300, opacity: 0, ease: Sine.easeOut, delay: -0.5})
            .from("#blue-circle-7", 0.5, {x: 50, opacity: 0, ease: Sine.easeOut, delay: -0.5})
            .from("#pink-circle-7", 0.5, {x: -50, opacity: 0, ease: Sine.easeOut, delay: -0.5})
            .from("#deleted-us-7", 0.8, {opacity: 0, y: 10, ease:RoughEase.ease})
            .to("#section7BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20})
            .to("#section7BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20, delay: -1});



toSectionEight.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionEight').offsetTop,
    behavior: "smooth"
  });
  sceneSevenTL.stop();
  sceneEightTL.restart();
  scene7DeletedUs.stop();
  scene8DeletingFunk.play();
});

//SECTION 8!/////////////////////////////////////////////////////////////////////////

backToSectionSeven.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionSeven').offsetTop,
    behavior: "smooth"
  });
  sceneSevenTL.restart();
  sceneEightTL.restart();
  scene7DeletedUs.play();
  scene8DeletingFunk.stop();
});


sceneEightTL.from("#pink-circle-8", 1, {x: 300, opacity: 0, ease: Power1.easeOut})
            .to("#blue-circle-8", 1, {opacity: 1, ease: Power1.easeOut, delay: -1})
            .from("#stripes-8", 2, {x: 20, ease: Sine.easeOut})
            .to("#deleting1", 0.8, {y: 10, opacity: 1, ease:RoughEase.ease, delay: -1})
            .to("#overlay-8", 0.5, {opacity: 1, scale: 3, ease: Sine.easeOut, delay: -0.5})
            .to("#overlay-8", 0.5, {scale: 2, ease: Sine.easeOut.ease})
            .to("#section8BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20})
            .to("#section8BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20, delay: -1})
            .to("#deleting1", 0.8, {y: -1, ease: Sine.easeOut, delay: -2});


toSectionNine.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionNine').offsetTop,
    behavior: "smooth"
  });
  sceneEightTL.stop();
  sceneNineTL.restart();
  sceneNineWarmUp.play();
  scene8DeletingFunk.stop();
});

//SECTION9!/////////////////////////////////////////////////////////////////////////

backToSectionEight.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionEight').offsetTop,
    behavior: "smooth"
  });
 sceneEightTL.restart();
 sceneNineBtnsGoTL.restart();
 sceneNineWarmUp.stop();
 sceneNinePromptTL.stop();
 scene8DeletingFunk.play();
});

sceneNineTL.to("#alexei-head-9", 0.5, {rotation: 12, ease: Sine.easeOut, delay: 1}, "alexei-head-speak")
           .to("#alexei-d9-1", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "alexei-head-speak")
           .from("#alexei-d9-1", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5, delay: 2})
           .to("#marat-d9-2", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
           .from("#marat-d9-2", 0.5, {opacity: 0, ease:Bounce.easeOut, delay: 2})
           .to("#alexei-head-9", 0.5, {rotation: 2, ease: Sine.easeOut})
           .to("#marat-d9-3", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
           .from("#marat-d9-3", 0.5, {opacity: 0, ease:Bounce.easeOut, delay: 2})
           .to("#yaroslav-d9-4", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
           .from("#yaroslav-d9-4", 0.5, {opacity: 0, ease:Bounce.easeOut, delay: 2});




sceneNineGrooveOneTL.fromTo("#alexei-head-9", 0.8, {rotation: 0}, {rotation: 5, ease: Bounce.easeOut, repeat: -1},"alexei-intro")
                    .to("#section9", 5, {scale: 1.4, x: 200, y: -50, ease: ExpoScaleEase.config(1, 1.4, Power2.easeInOut)}, "alexei-intro")
                    .to("#section9", 2, {scale: 1, x: 0, y: 0, ease: ExpoScaleEase.config(1.4, 1, Power2.easeInOut), delay: 6})
                    .fromTo("#marathead-9", 0.8, {y: 0.1, rotation: 1}, {y: -1, rotation: 3, ease: Sine.easeOut, repeat: -1}, "marathead9")
                    .from("#maratbody-9", 0.8, {rotation: 1, x:2, ease:Linear.easeNone, repeat: -1})
                    .fromTo("#yaroslav-head-9", 0.8, {y: 0, rotation: 1}, {y: -1, rotation: 3, ease:Linear.easeNone, repeat: -1},"marathead9")

                    .to("#baltic-funk-bg-9", 2, {opacity: 1, ease: RoughEase.ease.config({ template:
                        Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})}, "balticFunk9")

                    .to("#baltic-funk-9", 3, {opacity: 0.9, y: 0.1, ease: RoughEase.ease.config({ template:
                            Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})}, "balticFunk9")

                    .to("#baltic-funk-bg-9", 2, {opacity: 0, ease: RoughEase.ease.config({ template:
                                Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false}), delay: 1}, "bFunk9Out")

                    .to("#baltic-funk-9", 3, {opacity: 0, ease: RoughEase.ease.config({ template:
                                    Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})}, "bFunk9Out")

                    .from("#reel-1-9", 5, {rotation: 360, ease:Linear.easeNone, repeat: -1},"alexei-intro")
                    .from("#reel-2-9", 5, {rotation: 360, ease:Linear.easeNone, repeat: -1}, "alexei-intro")
                    .to("#logo-9", 1, {opacity: 0.5, ease: RoughEase.ease.config({ template:
                      Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false}), y: -2, delay: 20})
                    .to("#logo-9", 1, {opacity: 0, ease: RoughEase.ease.config({ template:
                        Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false}), y: -2})
                    .to("#section9", 3, {scale: 1.4, ease: ExpoScaleEase.config(1, 1.4, Power2.easeInOut)})
                    .to("#section9", 3, {scale: 1, ease: ExpoScaleEase.config(1.4, 1, Power2.easeInOut), delay: 2});




//sceneNineGrooveOneTL stops onend of audio and plays the sceneNinePromptTL - see audio section above

sceneNinePromptTL.to("#cta-9", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "prompt-in")
                 .to("#yesbtn-9", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "prompt-in")
                 .to("#nobtn-9", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "prompt-in");


//get rid of CTA
/*sceneNineCTLGo.to("#cta-9", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5})
                               .to("#yesbtn-9", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5})
                               .to("#nobtn-9", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5});*/

//Yes Button
sceneNineYes.addEventListener('click', function() {
  sceneNineGrooveTwoTL.restart();
  sceneNineComeOnIn.play();
});

//after sceneNineComeOnIn has played sceneNineBtnsTL plays to exit sceneEightTL
//see audio section

//No Button
sceneNineNo.addEventListener('click', function() {
  sceneNineBtnsTL.restart();
  sceneNineCTLGo.restart();
});

sceneNineGrooveTwoTL.to("#cta-9", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5}, "out")
                    .to("#yesbtn-9", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5},"out")
                    .to("#nobtn-9", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5}, "out")
                    .fromTo("#alexei-head-9", 0.75, {rotation: 0}, {rotation: 5, ease: Bounce.easeOut, repeat: -1},"out")
                    .fromTo("#marathead-9", 0.75, {y: 0.1, rotation: 1}, {y: -1, rotation: 3, ease: Sine.easeOut, repeat: -1}, "out")
                    .from("#maratbody-9", 0.75, {rotation: 1, x:2, ease:Linear.easeNone, repeat: -1}, "out")
                    .fromTo("#yaroslav-head-9", 0.75, {y: 0, rotation: 1}, {y: -1, rotation: 3, ease:Linear.easeNone, repeat: -1}, "out")
                    .from("#reel-1-9", 5, {rotation: 360, ease:Linear.easeNone, repeat: -1}, "out")
                    .from("#reel-2-9", 5, {rotation: 360, ease:Linear.easeNone, repeat: -1}, "out")
                    .to("#marat-d9-5", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
                    .from("#marat-d9-5", 0.5, {opacity: 0, ease:Bounce.easeOut, delay: 2})
                    .to("#alexei-d9-6", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
                    .from("#alexei-d9-6", 0.5, {opacity: 0, ease: Bounce.easeOut, y: -5, delay: 2})
                    .to("#section9", 5, {scale: 1.4, y: 100, ease: ExpoScaleEase.config(1, 1.4, Power2.easeInOut)})
                    .to("#yaroslav-d9-7", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
                    .from("#yaroslav-d9-7", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 2})
                    .to("#section9", 3, {scale: 1, y: 0, ease: ExpoScaleEase.config(1.4, 1, Power2.easeInOut), delay: 2});

sceneNineBtnsTL.to("#section9BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20},"in")
               .to("#section9BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20, delay: -1});

sceneNineCTLGo.to("#cta-9", 0.2, {opacity: 0, ease: Bounce.easeOut, y: -5}, "go")
              .to("#yesbtn-9", 0.2, {opacity: 0, ease: Bounce.easeOut, y: -5}, "go")
              .to("#nobtn-9", 0.2, {opacity: 0, ease: Bounce.easeOut, y: -5}, "go");


sceneNineBtnsGoTL.to("#section9BtnFwd", 1, {opacity: 0, ease: Bounce.easeOut, y: 20})
                 .to("#section9BtnBck", 1, {opacity: 0, ease: Bounce.easeOut, y: -20, delay: -1});

toSectionTen.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionTen').offsetTop,
    behavior: "smooth"
  });
  sceneNineBtnsGoTL.restart();
  sceneTenTL.restart();
  sceneNineWarmUp.stop();
  sceneNineStuttery.stop();
  sceneNineComeOnIn.stop();
  scene10Latin.play();
});


//SECTION10!///////////////////////////////////////////////////////////////////////////////////////////

backToSectionNine.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionNine').offsetTop,
    behavior: "smooth"
  });
  sceneNineTL.restart();
  sceneNineWarmUp.play();
  scene10Latin.stop();
});

sceneTenTL.from("#big-stripes-10", 1,{y: 200, opacity: 0})
          .from("#text-10", 0.5, {opacity: 0, y: 50, ease: RoughEase.ease.config({ template:
                Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})})
          .from("#pie-chart-10", 0.5, {opacity: 0, y: 50, ease: RoughEase.ease.config({ template:
                Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})})
          .to("#section10BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20})
          .to("#section10BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20, delay: -1});


toSectionEleven.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionEleven').offsetTop,
    behavior: "smooth"
  });

sceneElevenTL.restart();
studioChat1.play();
scene10Latin.stop();
});

//SECTION11!//////////////////////////////////////////////////////////////////////////////////////

backToSectionTen.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionTen').offsetTop,
    behavior: "smooth"
  });
  sceneTenTL.restart();
  studioChat1.stop();
  scene10Latin.play();
});

sceneElevenTL.to("#yaroslav-head-11", 0.3, {rotation: 6, ease: Sine.easeOut, y: -2, x: 4}, "yaroslav11-1")
             .to("#yaroslav-d11-1", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "yaroslav11-1")
             .from("#yaroslav-d11-1", 0.5, {opacity: 0, ease:Bounce.easeOut, delay: 2})
             .to("#marathead-11", 0.3, {rotation: 5, ease: Sine.easeOut}, "marat11-1")
             .to("#marat-d11-2", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "marat11-1")
             .from("#marat-d11-2", 0.5, {opacity: 0, ease:Bounce.easeOut, delay: 2})
             .to("#yaroslav-body-11", 0.5, {rotation: 20, ease: Sine.easeOut}, "fall")
             .to("#yaroslav-head-11", 0.3, {rotation: 6, ease: Sine.easeOut, y: 10, x: 4}, "fall")
             .to("#section11BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20})
             .to("#section11BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20, delay: -1});



toSectionTwelve.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionTwelve').offsetTop,
    behavior: "smooth"
  });
  sceneTwelveTL.restart();
  alexeiKeys12.play();
  studioChat1.stop();
})

//SECTION12!/////////////////////////////////////////////////////////////////////////////////////

backToSectionEleven.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionEleven').offsetTop,
    behavior: "smooth"
  });
  sceneElevenTL.restart();
  alexeiKeys12.stop();
  studioChat1.play();
});



sceneTwelveTL.from("#sectionTwelve", 2, {opacity: 0})
             .from("#pink-stripes-12", 1, {y: 100, opacity: 0})
             .to("#alexei-12", 0.5, {rotation: -10}, "alexei-head-12")
             .to("#make-an-12", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5},"alexei-head-12")
             .to("#make-an-12", 0.5, {opacity: 0, delay: 2})
             .to("#marat-head-12", 0.5, {rotation: 10}, "marat-d12-1-nod")
             .to("#marat-d12-1", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "marat-d12-1-nod")
             .from("#marat-d12-1", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 2})
             .to("#alexei-12", 0.5, {rotation: -5})
             .to("#alexei-d12-2", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
             .from("#alexei-d12-2", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 2})
             .to("#marat-head-12", 0.5, {rotation: -5}, "marat-d12-2-nod")
             .to("#marat-d12-3", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "marat-d12-2-nod")
             .from("#marat-d12-3", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 2})
             .to("#alexei-d12-4", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "alexei-d12")
             .to("#alexeis-pc-screen-12", 6, {opacity: 1, ease: RoughEase.ease.config({ template:
                   Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})}, "alexei-d12")
             .from("#alexei-d12-4", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 4})
             .to("#marat-head-12", 0.5, {rotation: -15, delay: -2}, "marat-d12-3-nod")
             .to("#marat-d12-5", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "marat-d12-3-nod")
             .from("#marat-d12-5", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 2})
             .to("#section12BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20})
             .to("#section12BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20, delay: -1});


toSectionThirteen.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionThirteen').offsetTop,
    behavior: "smooth"
  });
  sceneThirteenTL.restart();
  alexeiKeys12.stop();
  marat13Audio.play();
})

//SECTIONTHIRTEEN!!!////////////////////////////////////////////////////////////////////////////////

backToSectionTwelve.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionTwelve').offsetTop,
    behavior: "smooth"
  });
  sceneTwelveTL.restart();
  alexeiKeys12.play();
  marat13Audio.stop();
});


sceneThirteenTL.to("#marat-head-13", 1, {rotation: 10, y: 5})
               .to("#marat-d13-1", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
               .fromTo("#barfly-13", 0.8, {y: 0.1, rotation: 0.1}, {y: -1, rotation: 2, ease: Sine.easeOut, repeat: -1, delay: 10}, "dance")
               .fromTo("#marat-head-13", 0.7, {y: 0.1, rotation: 0.1}, {y: 2, x: 2, rotation: 1, ease: Sine.easeOut, repeat: -1}, "dance")
               .to("#blue-circle-13", 1, {opacity: 1, ease: RoughEase.ease.config({ template:
                     Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})}, "dance")
               .to("#section13BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20})
               .to("#section13BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20, delay: -1});

toSectionFourteen.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionFourteen').offsetTop,
    behavior: "smooth"
  });
  sceneFourteenTL.restart();
  marat13Audio.stop();
});

//SECTION FOURTEEN!!///////////////////////////////////////////////////////

backToSectionThirteen.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionThirteen').offsetTop,
    behavior: "smooth"
  });
  sceneThirteenTL.restart();
  marat13Audio.play();
});



sceneFourteenTL//.to("#section14", 1, {scale: 1.5, x: 200, y: 0, ease: ExpoScaleEase.config(1.5, 1, Power2.easeInOut)})
               //.to("#section14", 1, {scale: 1, x: 0, y: 0, ease: ExpoScaleEase.config(1, 1.5, Power2.easeInOut)})
               .to("#presenter-d14-1", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
               .from("#presenter-d14-1", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 3})
               .to("#presenter-d14-2", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
               .from("#presenter-d14-2", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 3})
               .to("#presenter-d14-3", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
               .from("#presenter-d14-3", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 3})
               .to("#marat-tache-14", 0.5, {rotation: 20})
               .to("#marat-tache-14", 0.5, {rotation: -30})
               .to("#marat-tache-14", 0.5, {rotation: -3})
               .to("#presenter-d14-4", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
               .from("#presenter-d14-4", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 3})
               .to("#marat-face-14", 0.5, {rotation: 10}, "marat-head-14-1")
               .to("#marat-d14-5", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "marat-head-14-1")
               .from("#marat-d14-5", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 3})
               .to("#marat-face-14", 0.5, {rotation: -5}, "marat-head-14-2")
               .to("#marat-d14-6", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "marat-head-14-2")
               .from("#marat-d14-6", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 3})
               .to("#presenter-d14-7", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
               .from("#presenter-d14-7", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 3})
               .to("#marat-face-14", 0.5, {rotation: -10}, "marat-head-14-3")
               .to("#marat-d14-8", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
               .from("#marat-d14-8", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 3})
               .to("#marat-face-14", 0.5, {rotation: -5}, "marat-head-14-4")
               .to("#marat-d14-9", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5},"marat-head-14-4")
               .from("#marat-d14-9", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 3})
               .to("#marat-face-14", 0.5, {rotation: 5}, "marat-head-14-5")
               .to("#marat-d14-10", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "marat-head-14-5")
               .from("#marat-d14-10", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 3})
               .to("#alexei-14", 0.5, {rotation: 5}, "alexei-head-14-1")
               .to("#alexei-d14-11", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "alexei-head-14-1")
               .from("#alexei-d14-11", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 3})
               .to("#alexei-14", 0.5, {rotation: -5}, "alexei-head-14-2")
               .to("#alexei-d14-12", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "alexei-head-14-2")
               .from("#alexei-d14-12", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 3})
               .to("#presenter-d14-13", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
               .from("#presenter-d14-13", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 3})
               .to("#presenter-d14-14", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
               .from("#presenter-d14-14", 0.5, {opacity: 0, ease: Bounce.easeOut, delay: 3})
               .to("#section14BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20})
               .to("#section14BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20, delay: -1});



toSectionFifteen.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionFifteen').offsetTop,
    behavior: "smooth"
  });
sceneFourteenTL.stop();
sceneFifteenTL.restart();
});

//SECTION15!!///////////////////////////////////////////////////////////////

backToSectionFourteen.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionFourteen').offsetTop,
    behavior: "smooth"
  });
  sceneFourteenTL.restart();
  sceneFifteenTL.stop();
});

sceneFifteenTL.to("#presenter-d15-1", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
              .from("#presenter-d15-1", 0.5, {opacity: 0, delay: 3})
              .to("#presenter-d15-2", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
              .from("#presenter-d15-2", 0.5, {opacity: 0, delay: 3})
              .to("#section15BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20})
              .to("#section15BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20, delay: -1});


toSectionSixteen.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionSixteen').offsetTop,
    behavior: "smooth"
  });
    sceneSixteenTL.restart();

});


//SECTION16!/////////////////////////////////////////////////////////////

toSectionFifteen.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionFifteen').offsetTop,
    behavior: "smooth"
  });
});

sceneSixteenTL.to("#marat-face-16", 0.5, {rotation: 10}, "marat-head-16-1")
              .to("#marat-d16-1", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "marat-head-16-1")
              .from("#marat-d16-1", 0.5, {opacity: 0, delay: 3})

              .to("#marat-face-16", 0.5, {rotation: -5}, "marat-head-16-2")
              .to("#marat-d16-2", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "marat-head-16-2")
              .from("#marat-d16-2", 0.5, {opacity: 0, delay: 3})

              .to("#presenter-d16-3", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
              .from("#presenter-d16-3", 0.5, {opacity: 0, delay: 3})

              .to("#marat-face-16", 0.5, {rotation: -10}, "marat-head-14-3")
              .to("#marat-d16-4", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "marat-head-14-3")
              .from("#marat-d16-4", 0.5, {opacity: 0, delay: 3})

              .to("#alexei-16", 0.5, {rotation: 5}, "alexei-head-16-1")
              .to("#alexei-d16-5", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "alexei-head-16-1")
              .from("#alexei-d16-5", 0.5, {opacity: 0, delay: 3})

              .to("#alexei-16", 0.5, {rotation: -5}, "alexei-head-16-2")
              .to("#alexei-d16-6", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "alexei-head-16-2")
              .from("#alexei-d16-6", 0.5, {opacity: 0, delay: 3})

              .to("#alexei-16", 0.5, {rotation: 5}, "alexei-head-16-3")
              .to("#alexei-d16-7", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "alexei-head-16-3")
              .from("#alexei-d16-7", 0.5, {opacity: 0, delay: 3})

              .to("#presenter-d16-8", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
              .from("#presenter-d16-8", 0.5, {opacity: 0, delay: 3})

              .to("#alexei-16", 0.5, {rotation: -3}, "alexei-head-16-4")
              .to("#alexei-d16-9", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "alexei-head-16-4")
              .from("#alexei-d16-9", 0.5, {opacity: 0, delay: 3})

              .to("#alexei-16", 0.5, {rotation: -3}, "alexei-head-16-5")
              .to("#alexei-d16-10", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "alexei-head-16-5")
              .from("#alexei-d16-10", 0.5, {opacity: 0, delay: 3})

              .to("#presenter-d16-11", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
              .from("#presenter-d16-11", 0.5, {opacity: 0, delay: 3})

              .to("#marat-face-16", 0.5, {rotation: -5}, "marat-head-14-4")
              .to("#marat-d16-12", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "marat-head-14-4")
              .from("#marat-d16-12", 0.5, {opacity: 0, delay: 4})

              .to("#marat-face-16", 0.5, {rotation: -2}, "marat-head-14-5")
              .to("#marat-d16-13", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "marat-head-14-5")
              .from("#marat-d16-13", 0.5, {opacity: 0, delay: 3})

              .to("#marat-face-16", 0.5, {rotation: 5}, "marat-head-14-6")
              .to("#presenter-d16-14", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
              .from("#presenter-d16-14", 0.5, {opacity: 0, delay: 3})

              .to("#alexei-16", 0.5, {rotation: 3}, "alexei-head-16-6")
              .to("#alexei-d16-15", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "alexei-head-16-6")
              .from("#alexei-d16-15", 0.5, {opacity: 0, delay: 3})

              .to("#alexei-16", 0.5, {rotation: -5}, "alexei-head-16-7")
              .to("#alexei-d16-16", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "alexei-head-16-7")
              .from("#alexei-d16-16", 0.5, {opacity: 0, delay: 3})

              .to("#alexei-16", 0.5, {rotation: 3}, "alexei-head-16-8")
              .to("#alexei-d16-17", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "alexei-head-16-8")
              .from("#alexei-d16-17", 0.5, {opacity: 0, delay: 3})

              .to("#presenter-d16-18", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
              .from("#presenter-d16-18", 0.5, {opacity: 0, delay: 3})

              .to("#presenter-d16-19", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
              .from("#presenter-d16-19", 0.5, {opacity: 0, delay: 3})

              .to("#marat-face-16", 0.5, {rotation: -4}, "marat-head-14-7")
              .to("#marat-d16-20", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5}, "marat-head-14-7")
              .from("#marat-d16-20", 0.5, {opacity: 0, delay: 3})

              .to("#presenter-d16-21", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
              .from("#presenter-d16-21", 0.5, {opacity: 0, delay: 3})

              .to("#presenter-d16-22", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
              .from("#presenter-d16-22", 0.5, {opacity: 0, delay: 3})

              .to("#presenter-d16-23", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
              .from("#presenter-d16-23", 0.5, {opacity: 0, delay: 2})

              .to("#presenter-d16-24", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
              .from("#presenter-d16-24", 0.5, {opacity: 0, delay: 3})

              .to("#presenter-d16-25", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
              .from("#presenter-d16-25", 0.5, {opacity: 0, delay: 3})

              .to("#section16BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20})
              .to("#section16BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20, delay: -1});




toSectionSeventeen.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionSeventeen').offsetTop,
    behavior: "smooth"
  });
sceneSeventeenTL.restart();
sceneSixteenTL.stop();
scene17TV.play();
});




//SECTION17!////////////////////////////////////////////////////////////////////

backToSectionSixteen.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionSixteen').offsetTop,
    behavior: "smooth"
  });
  sceneSeventeenTL.stop();
  sceneSixteenTL.restart();
  scene17TV.stop();
});


sceneSeventeenTL.fromTo("#marat-head-17", 0.5, {y: 0.1, rotation: 1}, {y: -1, rotation: 3, ease: Sine.easeOut, repeat: -1}, "marathead17")
                .fromTo("#alexei-head-17", 0.5, {y: 0.1, rotation: 1}, {y: -1, rotation: 3, ease: Sine.easeOut, repeat: -1}, "marathead17")
                .fromTo("#yaroslav-head-17", 0.5, {y: 0.1, rotation: 1}, {y: -1, rotation: 3, ease: Sine.easeOut, repeat: -1}, "marathead17")
                .fromTo("#yellow-grad", 15, {scale: 0.5}, {scale: 1, x: 100, repeat: -1}, "marathead17")
                .fromTo("#pink-grad", 10, {scale: 0.5}, {scale: 1, x: 200, repeat: -1}, "marathead17")
                .fromTo("#glitch", 3, {opacity: 0.3}, {opacity: 0, ease: RoughEase.ease.config({ template:
                      Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false}), repeat: -1}, "marathead17")

                .fromTo("#white-grad", 10, {scale: 0.5}, {scale: 2, x: 80, repeat: -1}, "marathead17")
                .fromTo("#credits-17", 20, {y: 100}, {y:-2000})
                .to("#good-evening-russia-17", 3, {opacity: 0.8})
                .to("#section17BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20})
                .to("#section17BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20, delay: -1});

toSectionEighteen.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionEighteen').offsetTop,
    behavior: "smooth"
  });
  sceneSeventeenTL.stop();
  //whateverAudio.stop();
  sceneEighteenTL.restart();
  scene18Audio.play();
  scene17TV.stop();
});

//SECTION18!//////////////////////////////////////////////////////////////////

backToSectionSeventeen.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionSeventeen').offsetTop,
    behavior: "smooth"
  });
  sceneSeventeenTL.restart();
  scene18Audio.stop();
  scene17TV.play();
});

sceneEighteenTL.to("#alexeis-phone-18", 0.5, {opacity: 1, ease: Sine.easeOut, delay: 2}, "start-18")
               .from("#blue-circle-18", 1, {opacity: 0, x: 500, ease: Sine.easeOut}, "start-18")
               .to("#alexei-d18-1", 0.5, {opacity: 1, ease: Bounce.easeOut, y: -5})
               .to("#section18BtnFwd", 1, {opacity: 1, ease: Bounce.easeOut, y: 20})
               .to("#section18BtnBck", 1, {opacity: 1, ease: Bounce.easeOut, y: -20, delay: -1});



//backToAlbumView
