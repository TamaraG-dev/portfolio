

// Animation écriture
const txtAnim = document.querySelector('.txt-animation');
let typewriter = new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 25
})

typewriter
.pauseFor(1500)
.changeDelay(20)
.typeString('Moi c\'est Tamara')
.pauseFor(300)
.typeString(', <span style="color : #D68A7C; font-weight: bold;">Développeuse Front-End</span>')
.pauseFor(1000)
.deleteChars(22)
.typeString('<span style="color : #428089; font-weight: bold;">Designer</span>')
.pauseFor(1000)
.deleteChars(9)
.typeString('<span style="color : #8A5349; font-weight: bold;"> Webdesigner </span>')
.start()


// Anim GSAP + ScrollMagic

const titre = document.querySelector('h1');
const btnMedias = document.querySelectorAll('.media');
const btnRondAccueil = document.querySelector('.btn-rond');


// Anim presentation






// Animation Range

const sectionComp = document.querySelector('.section-range');
const titreComp = document.querySelector('.titre-exp');
const allLabel = document.querySelectorAll('.label-skill');
const allPourcent = document.querySelectorAll('.number-skill');
const allBarres = document.querySelectorAll('.barre-skill');
const allShadowBarres = document.querySelectorAll('barre-grise');

const tlCompetences = new TimelineMax();

tlCompetences
.from(titreComp, {opacity:0, duration: 0.6})
.staggerFrom(allLabel, 0.5, {y: -50, opacity:0}, 0.1, '-=0.5')
.staggerFrom(allPourcent, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
.staggerFrom(allShadowBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
.staggerFrom(allBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1')


