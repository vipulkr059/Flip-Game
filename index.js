const cards = document.querySelectorAll('.card')
cards.forEach(cards => cards.addEventListener('click',flip) );

const music = document.querySelector('#mus');
music.addEventListener('click',musicPlay);
const volume = document.querySelector('#sound').volume;
document.querySelector('#sound').volume = 0.2;


var audio1 = document.getElementById('success');
var audio2 = document.getElementById('fail');
var audio3 = document.getElementById('win');


var isFlipped = false;
var firstCard ;
var secondCard;
var pair = 0;


function flip ( ) {
    this.classList.add('flip');

    if(!isFlipped){
        isFlipped = true;
        firstCard = this;
    }
    else{
        secondCard = this;
        check()
    }
}

function success() {
    firstCard.removeEventListener('click',flip)
    secondCard.removeEventListener('click',flip)
    pair++;
    document.getElementById('prog').style.width = `${pair*12.5}%`
    audio1.play()
    if(pair == 8 ){
        document.getElementById('celeb1').style.opacity = 1;
        document.getElementById('celeb2').style.opacity = 1;
        document.getElementById('celeb3').style.opacity = 1;
        document.getElementById('celeb4').style.opacity = 1;
        audio3.play()
        

    }
    reset()
    
}

function fail() {
    audio2.play()
    setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    
    reset()
    }, 500);
    
}

function check() {

    if (firstCard.dataset.image === secondCard.dataset.image) {
        success();

    }else{
        fail();
    }
    
}

function reset() {

    isFlipped = false;
    firstCard = null
    secondCard = null
    
}
function musicPlay() {
    
    const audio = document.getElementById('sound');
    if(audio.paused){
        audio.play();
        //button.innerHTML = "Pause";
      } else {
        audio.pause();
        //button.innerHTML = "Play";
      }
  }
function shuffle() {
    cards.forEach(card => {
        var val = Math.floor(Math.random()*16);
        card.style.order = val; 
    });
    
}
shuffle();
const reload = document.querySelector('#reset')
reload.addEventListener('click',redo)
function redo(params) {
    location.reload()
}