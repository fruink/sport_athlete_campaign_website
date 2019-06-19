(function() {
	"use strict";
var fadeNav = document.querySelector('#fadeNav');
var fadeLogo = document.querySelector('#fadeLogo');
var years = [2010,2011,2012,2013,2014,2015,2016,2017];
var atts = [56, 95, 204, 284, 246, 187, 71];
var rushs = [406, 805, 1511, 1178, 1139, 758, 360];
var recs = [2, 11, 22, 35, 42, 20, 4];
var tds = [6, 7, 19, 11, 13, 5, 0];
//put subhead values in this array, starting with the one for 2010
var subHeadings = ['CRIMSON TIDE','AMONG THE ELITE','STARTING LINE','GOING PRO','STRONG FINISH','INJURED','CAREER HIGH','NEW TEAM'];
//put paragraph heading values in this array, starting with the one for 2010
var textHeadings = ['ROLL TIDE','AMONG THE ELITE','STARTING LINE','GOING PRO','STRONG FINISH','INJURED','CAREER HIGH'];
var stat1 = document.querySelector('#c1');
var stat2 = document.querySelector('#c2');
var stat3 = document.querySelector('#c3');
var stat4 = document.querySelector('#c4');
var descriptions = ["In 2010, Lacy earned his spot as the third-string tailback behind Ingram and Richardson. In the season opener against San Jose State, Lacy ran for 113 yards and two touchdowns in his collegiate debut. For the 2010 season, Lacy finished with 406 yards rushing on 56 carries, an average of 7.25 yards per carry, and six touchdowns.",
										"With Ingram departing for the NFL, Richardson and Lacy advanced to the No. 1 and No. 2 running back spots for the 2011 Alabama Crimson Tide football team. In the pre-season, those close to the program opined that 'the Richardson-Eddie Lacy duo may put up bigger and better numbers and go down as the best duo in recent history.' During the 2011 regular season, Lacy had 631 rushing yards and seven touchdowns. His average of 7.5 yards per carry ranked sixth among all players in the NCAA Division I Football Bowl Subdivision.",
										"In 2012, he became the starting running back for Alabama after the departure of Trent Richardson to the NFL.  Lacy finished the 2012 season rushing for 181 yards and two touchdowns in the 2012 SEC Championship Game and 140 yards and one rushing touchdown, as well as one receiving touchdown in the 2013 BCS Championship Game against Notre Dame. He was named the Offensive MVP for the BCS Championship game. Lacy finished the year with 1,322 rushing yards with 17 rushing touchdowns and two receiving touchdowns. On January 11, 2013, Lacy decided to forego his final year and declared for the 2013 NFL Draft.",
										"Lacy was selected in the second round (61st overall) by the Green Bay Packers in the 2013 NFL Draft.[34] He was the fourth running back to be selected in the 2013 NFL Draft. In addition, he was the fourth of nine Alabama players to be selected that year. On May 30, 2013, he signed a contract with the Packers.  Lacy suffered a concussion against Washington Redskins on September 15, 2013. He returned against the Detroit Lions on October 6, 2013. In 2013, he rushed for 100+ yards in four games. He had a career-high in rushing in a single game against the Bears, running for 150 yards on 22 carries with a 6.8 average. Lacy passed the 1,000-yd season mark on December 15 against the Dallas Cowboys when he ran for 141 yards and a touchdown on 21 carries. Lacy finished the season with an impressive 1,178 yards and 11 touchdowns with 257 receiving yards. He set the Packer rookie records for most rushing yards and touchdowns in a season. He was named AP-Second Team All-Pro and was named to the NFC Pro Bowl. Lacy was selected as the 2013 Offensive Rookie of The Year, the first Packer chosen for the award since running back John Brockington in 1971. Lacy also was the Packers' first 1,000 yard rusher since Ryan Grant in 2009.",
										"After a slow start to the season, Lacy finished strong, ending the season with 1,139 yards rushing, with nine rushing touchdowns, averaging 4.6 yards per carry. Lacy became only the second Packer ever to rush for over 1,000 yards in his first two NFL seasons, joining John Brockington. In addition, Lacy caught 42 passes for 427 yards and four touchdowns.",
										"On September 20, 2015, Lacy left Week 2's game against the Seattle Seahawks with an ankle injury and did not return. X-rays were negative on Lacy’s injured ankle. The injury was classified as minor. On November 8, 2015, Lacy left during the 3rd quarter with a groin injury in Week 9's game against the Carolina Panthers. On November 10, 2015, the Green Bay Packers declared Lacy inactive for Week 10's matchup against the Detroit Lions. On December 2, 2015, Lacy missed the Green Bay Packers' team curfew and his status was impacted for Week 13's matchup against the Detroit Lions.",
										"On October 11, 2016, Lacy injured his ankle in a Sunday Night Football game against the New York Giants. He had 81 yards on 11 carries before exiting the game. He was placed on injured reserve on October 20, 2016. He started the first five games of the season, rushing for 360 yards on 71 attempts with no touchdowns and averaged a career-high 5.1 yards per carry in the 2016 season.",
										"On March 14, 2017, Eddie signed a one-year, $5.5 million contract with the Seattle Seahawks with $3 million guaranteed. Lacy was offered similar contracts from the Packers, Seahawks, and Minnesota Vikings before ultimately choosing to sign with Seattle. On June 12, 2017, Lacy passed his latest weigh-in, which required him to be 250 pounds or less. He made $55,000 as part of his contract."];
var prevYear = document.querySelector('#prevYear');
var nextYear = document.querySelector('#nextYear');
var currentYear = document.querySelector('#mainYear');
var sb1 = document.querySelector('#sb1');
var sb2 = document.querySelector('#sb2');
var sb3 = document.querySelector('#sb3');
var yearHeader = document.querySelector('#yearHeader');
var i = 0;
var windowWidth = window.innerWidth;
var images = document.querySelectorAll('.fb');
var lightbox = document.querySelector('#lightbox');
var overlay = document.querySelector('#overlay');
var closebtn = document.querySelector('.closebtn');
var opener = document.querySelector('#opener');
var closebtnNav = document.querySelector('.closebtnNav');
var videoPlayer = document.querySelector('video');
var volumeIndicator = document.querySelector('.vol-indicator');
var videoSection = document.querySelector('#videoContainer');
var volumeUp = document.querySelector("#volUp");
var volumeDown = document.querySelector("#volDown");
var replay = document.querySelector("#replay");
var pPlay = document.querySelector("#playBt");
var mobileLinks = document.querySelectorAll('.mobileLink');

//fades links in on scroll
function scroller(){
  var scrollTop = window.pageYOffset;
	var windowWidth = window.innerWidth;
  if (scrollTop>84 && windowWidth >1022){
    fadeNav.style.opacity = 1;
    fadeLogo.style.opacity = 1;
  } else if(scrollTop < 84){
    fadeNav.style.opacity = 0;
    fadeLogo.style.opacity = 0;
  }
}

//advances timeline
function forwardTimeline(){
	if (i < 7){
		i = i + 1;
		prevYear.innerHTML = years[i-1];
		prevYear.style.color = '#04043c';
		currentYear.innerHTML = years[i];
		currentYear.style.color = 'white';
		nextYear.innerHTML = years[i+1];
		nextYear.style.color = '#04043c';
		stat1.innerHTML = atts[i];
		stat2.innerHTML = rushs[i];
		stat3.innerHTML = recs[i];
		stat4.innerHTML = tds[i];
		innerYear.innerHTML = descriptions[i];
		yearHeader.innerHTML = textHeadings[i];
		sb1.innerHTML = subHeadings[i-1];
		sb2.innerHTML = subHeadings[i];
		sb3.innerHTML = subHeadings[i+1];
		if (i == 7){
			currentYear.innerHTML = 2016;
			currentYear.style.color = '#04043c';
			nextYear.innerHTML = 2017;
			nextYear.style.color = 'white';
			stat1.innerHTML = 68;
			stat2.innerHTML = 223;
			stat3.innerHTML = 6;
			stat4.innerHTML = 0;
			//put year header for 2017 here
			yearHeader.innerHTML = "NEW TEAM";

			sb1.innerHTML = 'INJURED';
			sb2.innerHTML = 'CAREER HIGH';
			sb3.innerHTML = 'NEW TEAM';

		} else if (i == 0){
			prevYear.innerHTML = 2009;
			//put subheading for 2009 here
			sb1.innerHTML = 'ROOKIE YEAR'
		}
	} else{

	}

}

//moves timeline backwards
function backwardsTimeline(){
	if (i > -1){
		i = i - 1;
		prevYear.innerHTML = years[i-1];
		prevYear.style.color = '#04043c';
		currentYear.innerHTML = years[i];
		currentYear.style.color = 'white';
		nextYear.innerHTML = years[i+1];
		nextYear.style.color = '#04043c';
		stat1.innerHTML = atts[i];
		stat2.innerHTML = rushs[i];
		stat3.innerHTML = recs[i];
		stat4.innerHTML = tds[i];
		innerYear.innerHTML = descriptions[i];
		yearHeader.innerHTML = textHeadings[i];
		sb1.innerHTML = subHeadings[i-1];
		sb2.innerHTML = subHeadings[i];
		sb2.innerHTML = subHeadings[i+1];
		 if (i == -1){
			prevYear.style.color = 'white';
			currentYear.style.color = '#04043c';
			prevYear.innerHTML = 2009;
			currentYear.innerHTML = 2010;
			nextYear.innerHTML = 2011;
			stat1.innerHTML = 0;
			stat2.innerHTML = 0;
			stat3.innerHTML = 0;
			stat4.innerHTML = 0;
			innerYear.innerHTML = "With the Crimson Tide having a lot of depth at the running back position, including future NFL running backs Mark Ingram and Trent Richardson, Lacy was redshirted for his freshman year.";
			//put year header for 2017 here
			yearHeader.innerHTML = "ROOKIE YEAR";
			//put subheading for 2009, 2010, and 2011 here in that order
			sb1.innerHTML = 'ROOKIE YEAR';
			sb2.innerHTML = 'CRIMSON TIDE';
			sb2.innerHTML = 'AMONG THE ELITE';
		} else if(i == 0){
			prevYear.innerHTML = 2009;
			//put 2009 subheading here
			sb1.innerHTML = 'ROOKIE YEAR';
		}
	} else {


	}

}

//opens the light box
function open (){
	document.querySelector('#lightBoxImage').src ="img/ed"+this.id+".jpg";
	lightbox.style.display = "block";
	overlay.style.display = "block";

}

//closes the lightbox
function close (){
	overlay.style.display = 'none';
	lightbox.style.display = 'none';
	console.log('fire');

}

//opens mobilenav
function openMenu(){
	document.querySelector('#mySideNav').style.width = '100%';
	opener.style.display = 'none';
}

//closenavmenu
function closeMenu(){
	document.querySelector('#mySideNav').style.width = '0';
	opener.style.display = 'block';
	console.log('fire');
}


function volOn(){
  videoPlayer.muted = false;
}

function volOff(){
	videoPlayer.muted = true;

}

function replayVideo(){
	videoPlayer.currentTime = 0;
	videoPlayer.play();
}

function raise() {
	if (videoPlayer.volume < 1) {
	videoPlayer.volume += .2;
	}
}

function lower(){
	if (videoPlayer.volume > 0.1) {
	videoPlayer.volume -= .2;
	}
}

function playPause(){
	if (videoPlayer.paused) {
		videoPlayer.play();
		pPlay.innerHTML = "Pause";
	} else {
		videoPlayer.pause();
		pPlay.innerHTML = "Play";
	}
}

function fullscreen(){
	videoPlayer.requestFullScreen;
	console.log('fire');
}



window.addEventListener("scroll", scroller, false);
nextYear.addEventListener("click", forwardTimeline, false);
prevYear.addEventListener('click', backwardsTimeline, false);
for (var b = 0; b < images.length; b ++){
	images[b].addEventListener('click', open, false);
}
closebtn.addEventListener('click', close, false);
opener.addEventListener('click', openMenu, false);
closebtnNav.addEventListener('click', closeMenu, false);
videoContainer.addEventListener('mouseover', volOn, false);
videoContainer.addEventListener('mouseout', volOff, false);
volumeUp.addEventListener('click', raise, false);
volumeDown.addEventListener('click', lower, false);
replay.addEventListener('click', replayVideo, false);
pPlay.addEventListener('click', playPause, false);
videoPlayer.addEventListener('dblclick', fullscreen, false);
for (var c = 0; c < mobileLinks.length; c ++){
	mobileLinks[c].addEventListener('click', closeMenu, false);
}



})();
