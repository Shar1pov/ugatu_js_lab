let birds = 3;
let totalShots = 0;
let eaglesKilled = 0;
let level = 3; // 1 - Easy;  2 - Medium;  3 - Hard;
let isGameEnd= false;

$(document).ready(function () {
  
  $('.chooseLvl').on('click', function () {
    $('.hello').hide();
    $('.choose-level').show();
  })

  $('#easyLvl').on('click', function () {
    $('.settings').hide(); 
    level = 1;
    startGame();
  })

  $('#mediumLvl').on('click', function () {
    $('.settings').hide(); 
    level = 2;
    startGame();
  })

  $('#hardLvl').on('click', function () {
    $('.settings').hide(); 
    level = 3;
    startGame();
  })

  $('.tryAgain').on('click', function () {
    location.reload();
  })

  function startGame() {
    $('.birds').show();
    $('.timer').show();
    $('.stats').show();

    let eagles = 3; 
    let pigeons = 7;

    switch (level) {
      case 1:
        eagles = 3;
        pigeons = 7;
        createBirds(eagles,pigeons);
        break;
      case 2:
        eagles = 5;
        pigeons = 9;
        createBirds(eagles,pigeons);
        break;
      case 3:
        eagles = 7;
        pigeons = 11;
        createBirds(eagles,pigeons);
        break;
      default:
        eagles = 3;
        pigeons = 7;
        createBirds(eagles,pigeons);
    }

    function createBirds(eagles, pigeons) {
      let dirX = ['left', 'right'];
      let directionX = dirX[Math.floor(Math.random()*dirX.length)];

      for (let i = 1; i <= pigeons; i++) {

        $(".birds").append('<img src="images/pigeon.gif" class="bird pigeon" id="pigeon-'+i+'">');
        $("#pigeon-"+i).css('top', -i* Math.floor(Math.random() * 700 + 0)).css(directionX, -i*Math.floor(Math.random() * 700 + 0));
        for (let k = 1; k <= 99; k++) {
          birdAnimate('pigeon-'+i);
        }
        
      }
      for (let i = 1; i <= eagles; i++) {
        $(".birds").append('<img src="images/eagle.gif" class="bird eagle" id="eagle-'+i+'">');
        $("#eagle-"+i).css('top', -i* Math.floor(Math.random() * 700 + 0)).css(directionX, -i*Math.floor(Math.random() * 700 + 0));
        for (let k = 1; k <= 99; k++) {
          birdAnimate('eagle-'+i);
        }
      }
    }

    $('html').on("click", function(){
      $("#stats__total-count").text(totalShots);
      totalShots++;
    })

    $(".bird").on("click", function () {
      $(this).remove();
      if($(this).hasClass('eagle')) {
        eaglesKilled++;
        
        $("#stats__eagles-count").text(eaglesKilled);
        if(eaglesKilled === eagles){
          isGameEnd = true;
          win();
        }

      } else if($(this).hasClass('pigeon')){
        lose();
      }
        
      
    });

    function birdAnimate(birdId) {
      let pos = makeNewPosition();
      $('#'+birdId).fadeIn('slow',function(){
        $(this).animate({ top: pos[0], left: pos[1] } , 3000);
      });
    }

    function makeNewPosition(){
      let h = $('body').height() - 50;
      let w = $('body').width() - 50;
      let nh = Math.floor(Math.random() * h);
      let nw = Math.floor(Math.random() * w);
      return [nh,nw];    
    }

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

    let timer = $(".timer__counter");
    function decreaseTimer(){
      setTimeout(function() {
        let dec = timer.text() - 1;
        timer.text(dec);
        if(dec>0){
          decreaseTimer();
        } else if((dec<=0) && (isGameEnd = false)) {
          lose();
        }else {
          lose();
        }
      },1000);
    }
    decreaseTimer();

    function win(){
      $('.birds').hide();
      $('.timer').hide();
      $('#final-lose').remove();
      $('#final-win').show();
    }
    
    function lose(){
      $('.birds').hide();
      $('.timer').hide();
      $('#final-lose').show();
    }

  }
});


