let titre = document.querySelector('.titre');
let suivant = document.querySelector('.suivant');
let retour = document.querySelector('.retour');
let play = document.querySelector('.play-pause');
let audio = document.querySelector('audio');
let dofus = document.querySelector('.dofus')
let dbz = document.querySelector('.dbz')
let lsa = document.querySelector('.lsa')
let pokemon = document.querySelector('.pokemon');
let dofus2 = document.querySelector('.dofus2')
let dbz2 = document.querySelector('.dbz2')
let lsa2 = document.querySelector('.lsa2')
let pokemon2 = document.querySelector('.pokemon2')
audio.currentTime = 0;
let joueDofus = document.querySelector('.joueDofus')
let joueDbz = document.querySelector('.joueDbz')
let joueLsa = document.querySelector(' .joueLsa')
let jouePokemon = document.querySelector('.jouePokemon')
let accueil = document.querySelector('.accueil')
let lecteur = document.querySelector('.lecteur')
let playAccueil = document.querySelector('.playAccueil')
let back = document.querySelector('.back')
let mute = document.querySelector('.mute')
let slider = document.querySelector('.slider_container')
let fort = document.querySelector('.fort')
let fond = document.querySelector('.fond')

// let seek_slider = document.querySelector('.seek_slider');
// let curr_time = document.querySelector('.current-time');
// let total_duration = document.querySelector('.total-duration');
/*burger*/

// on créer dabord une liste de musique 
/*volume*/
let volume = document.querySelector('.volume2')
let volume_slider = document.querySelector('.volume_slider');
let liste = [
  {
    src: "./src/Dofus.mp3",
    nom: "\ud83c\udfb5Dofus\ud83c\udfb5",
    img : 'fond/dofus.jpg',

  },
  {
    src: "./src/Dragon_Ball_Z.mp3",
    nom: "\ud83c\udfb5Dragon Ball Z\ud83c\udfb5",
    img : 'fond/dbz.jpg',
  },
  {
    src: "./src/Le_seigneur_des_anneaux.mp3",
    nom: "\ud83c\udfb5Le seigneur des anneaux\ud83c\udfb5",
    img : 'fond/lsa.webp',
  },
  {
    src: "./src/pokemon.mp3",
    nom: "\ud83c\udfb5Pokémon\ud83c\udfb5",
    img : 'fond/pokemon.webp'
  },
];

let musiquePlay = false;


// on gere la lecture
function playMusique() {
  musiquePlay = true;
  audio.play();
  play.classList.add('active')
  play.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`
}
function randomPlay(){
  let hasard = liste[Math.floor(liste.length * Math.random())];
  loadMusique(hasard)
}
playAccueil.addEventListener('click', () =>{
  randomPlay()
  playMusique()
  fond()
  Icone
})
// on gere la pause
function pauseMusique() {
  musiquePlay = false;
  audio.pause();
  play.classList.remove('active');
  play.innerHTML = `<ion-icon name="play-outline"></ion-icon>`
}
function resume() {
  // let play = document.querySelector('.play-pause');
  audio.currentTime = 0;
  audio.pause();
  musiquePlay = false;
  play.classList.remove('active')
  play.innerHTML = `<ion-icon name="play-outline"></ion-icon>`
}
// On ajoute play et pause sur les boutons

play.addEventListener('click', () => (musiquePlay ? pauseMusique() : playMusique()))

// on charge maintenant le son

function loadMusique(liste) {
  titre.textContent = liste.nom;
  audio.src = liste.src;
  fond.style.backgroundImage = "url("+liste.img +")"
}
// on mest en place le premier son de la liste
let i = 0;

loadMusique(liste[i])
// retour

function retourMusique() {
  i--;
  if (i < 0) {
    i = liste.length - 1;
  }
  loadMusique(liste[i])
  playMusique();
  Fond();
  Icone();
}
retour.addEventListener('click', retourMusique);
// suivant

function suivantMusique() {
  i++;
  if (i > liste.length - 1) {
    i = 0;
  }
  loadMusique(liste[i]);
  playMusique();
  Fond();
  Icone();
}

suivant.addEventListener('click', suivantMusique);

// function seekTo(){
//   let seekto = audio.duration * (seek_slider.value / 100);
//   audio.currentTime = seekto;
// }
/*volume*/ 
function setVolume() {
  audio.volume = volume_slider.value / 100;
}
// function volumeIcon() {
//   volume.style.display = 'block'
//   // volume.classList.add("volume_slider")
//   // volume.classList.add("volume_slider::-webkit-slider-thumb")
//   // volume.classList.add("volume_slider:hover")
//   slider.classList.toggle("volume2")
// }
// volume.addEventListener('click', volumeIcon)
function Fond() {
  if (i == 0) {
    dbz.style.display = 'none'
    lsa.style.display = 'none'
    pokemon.style.display = 'none'
    dofus.style.display = 'block'
  } else if (i == 1) {
    dofus.style.display = 'none'
    lsa.style.display = 'none'
    pokemon.style.display = 'none'
    dbz.style.display = 'block'
  } else if (i == 2) {
    dbz.style.display = 'none'
    dofus.style.display = 'none'
    pokemon.style.display = 'none'
    lsa.style.display = 'block'
  } else if (i == 3) {
    dbz.style.display = 'none'
    lsa.style.display = 'none'
    dofus.style.display = 'none'
    pokemon.style.display = 'block'
  }
} Fond()

function Icone() {
  if (i == 0) {
    dbz2.style.display = 'none'
    lsa2.style.display = 'none'
    pokemon2.style.display = 'none'
    dofus2.style.display = 'block'
  } else if (i == 1) {
    dofus2.style.display = 'none'
    lsa2.style.display = 'none'
    pokemon2.style.display = 'none'
    dbz2.style.display = 'block'
  } else if (i == 2) {
    dbz2.style.display = 'none'
    dofus2.style.display = 'none'
    pokemon2.style.display = 'none'
    lsa2.style.display = 'block'
  } else if (i == 3) {
    dbz2.style.display = 'none'
    lsa2.style.display = 'none'
    dofus2.style.display = 'none'
    pokemon2.style.display = 'block'
  }
} Icone()

joueDofus.addEventListener('click', () => {
  loadMusique(liste[0])
  musiquePlay = true;
  audio.play();
  play.classList.add('active')
  play.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`
  accueil.style.display = 'none'
  lecteur.style.display = 'block'
  dofus.style.display = 'block'
  dofus2.style.display = 'block'
  dbz.style.display = 'none'
  dbz2.style.display = 'none'
  lsa.style.display = 'none'
  lsa2.style.display = 'none'
  pokemon.style.display = 'none'
  pokemon2.style.display = 'none'
})
joueDbz.addEventListener('click', () => {
  loadMusique(liste[1])
  musiquePlay = true;
  audio.play();
  play.classList.add('active')
  play.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`
  accueil.style.display = 'none'
  lecteur.style.display = 'block'
  dbz.style.display = 'block'
  dbz2.style.display = 'block'
  lsa.style.display = 'none'
  lsa2.style.display = 'none'
  pokemon.style.display = 'none'
  pokemon2.style.display = 'none'
  dofus.style.display = 'none'
  dofus2.style.display = 'none'
})
joueLsa.addEventListener('click', () => {
  loadMusique(liste[2])
  musiquePlay = true;
  audio.play();
  play.classList.add('active')
  play.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`
  accueil.style.display = 'none'
  lecteur.style.display = 'block'
  lsa.style.display = 'block'
  lsa2.style.display = 'block'
  dbz.style.display = 'none'
  dbz2.style.display = 'none'
  pokemon.style.display = 'none'
  pokemon2.style.display = 'none'
  dofus.style.display = 'none'
  dofus2.style.display = 'none'
})
jouePokemon.addEventListener('click', () => {
  loadMusique(liste[3])
  musiquePlay = true;
  audio.play();
  play.classList.add('active')
  play.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`
  accueil.style.display = 'none'
  lecteur.style.display = 'block'
  pokemon.style.display = 'block'
  pokemon2.style.display = 'block'
  dbz.style.display = 'none'
  dbz2.style.display = 'none'
  lsa.style.display = 'none'
  lsa2.style.display = 'none'
  dofus.style.display = 'none'
  dofus2.style.display = 'none'
})
back.addEventListener('click', () => {
  accueil.style.display = 'block'
  lecteur.style.display = 'none'
  resume()
})