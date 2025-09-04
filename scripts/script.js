// document.getElementById('main-body').style.backgroundImage = "url('../assets/jfk.gif')";
const words = [
  'God',
  'Religion',
  'Symphony',
  'Love',
  'Divine',
  'Heart',
  'Doomsday',
  'End',
  'Envy',
  'Guilt',
  'You',
  'Money',
  'Angels',
  'Preach',
  'Beginning',
  'Hate',
  'War',
  'Death',
  'Wait',
  'Pride',
  'Time',
  'Water',
  'Body',
  'Believe',
  'Them',
  'They',
  'I',
  'Me',
  'My',
  'Your',
  'Fear',
  'Baptize',
  'Sleep',
  'Life',
  'Fire',
  'Help',
  'Regret',
  'Unknown',
  'Lust',
  'Destroy',
  'Now',
  'Future',
  'Present',
  'Past',
  'Listen',
  'Gluttony',
  'Rage',
  'Light',
  'Dark',
  'Rise',
  'Heaven',
  'Hell',
  'Greed',
  'Wrath',
  'Kill',
  `Don't`,
  'Do',
  'Fame',
  'Sloth',
  'Devil',
  'Human',
  'Society',
  'Sin',
  'Man',
  'Woman',
  'Exploit',
  'Lie',
  'Truth',
  'Near',
  'Far',
  'Laugh',
  'Cry',
  'City',
  'Country',
  'Planet',
  'Peace',
  'Suicide',
  'She',
  'He',
  'Body',
  'Brave',
  'Distract',
  'Satan',
  'Rule',
  'King',
  'Slave',
  'Sad',
  'Happy',
  'Memory',
  'Euphoria',
  'Like',
  'Drug',
  'Weed',
  'Alcohol',
  'Mind',
  'Confuse',
  'Home',
  'Far',
  'Close',
  'Crazy',
  'Out',
  'In',
  'Start',
  'World',
  'Dominate',
  'Civilization',
  'Pain',
  'Suffering',
  'Face',
  'Hand',
  'Leg',
  'Brother',
  'Sister',
  'Big',
  'Small',
  'Boy',
  'Girl',
  'White',
  'Black',
  'Day',
  'Night',
  'Door',
  'Window',
  'Person',
  'Run',
  'Jump',
  'Walk',
  'Joy',
  'Care',
  'Mind',
  'Yellow',
  'Red',
  'Think',
  'Pitty',
  'False',
  'True',
  'Prepare',
  'Join',
  'Leave',
  'Question',
  'Answer',
  'Enemy',
  'Revenge',
  'Terrify',
  'Yield',
  'Unite',
  'Inside',
  'Ordinary',
  'Power',
  'Adult',
  'Sacrifice',
  'Defeat',
  'Father',
  'Grasp',
  'Hitler',
  'Jump',
  'Kennedy',
  'Literature',
  'Zion',
  'X',
  'Choose',
  'Vision',
  'Bare',
  'New',
  'Magic',
  'Quran',
  'Queue',
  'Quest',
  'Wonder',
  'Worry',
  'Warrior',
  'Wasp',
  'Work',
  'Weiver',
  'Wish',
  'Word',
  'Win',
  'Week',
  'Weak',

  `"Which, then, of your Lord's blessings (or favors) do you both deny?"`,
];

function usleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const showWord = (wordNum) => {
  const wordElement = document.getElementById('word');
  const marqElement = document.getElementById('marq');
  const fontSize = Math.max(20, Math.min(150, 150 / words[wordNum].length));

  wordElement.innerHTML = '';
  wordElement.innerHTML = `
   <span class="font-serif font-bold" 
        style="font-size: calc(100vw / ${words[wordNum].length + 1});">
    ${words[wordNum]}
  </span>
  `;
  console.log(words[wordNum]);

  marqElement.innerText += ` ${words[wordNum]}`;

  const parent = marqElement.parentElement; // the div with overflow-hidden or overflow-scroll
  parent.scrollTo({
    left: parent.scrollWidth,
    behavior: 'smooth',
  });
};

async function godWord() {
  while (true) {
    let wordNum = Math.floor(Math.random() * words.length);
    showWord(wordNum);
    await usleep(1000);
  }
}

const button = document.getElementById('audio-button');
let audio;

button.addEventListener('click', () => {
  if (!audio) {
    audio = document.createElement('audio');
    audio.src = './assets/sound.mp3';
    audio.loop = true;
    audio.autoplay = true;
    document.body.appendChild(audio); // append to DOM so it plays
    button.innerHTML = '<i class="fa-solid fa-volume-high fa-2xl"></i>';
  } else if (audio.paused) {
    audio.play();
    button.innerHTML = '<i class="fa-solid fa-volume-high fa-2xl"></i>';
  } else {
    audio.pause();
    button.innerHTML = '<i class="fa-solid fa-volume-xmark fa-2xl"></i>';
  }
});

alert('⚠️ If you are Sound Sensitive, please do not Unmute the 🔇 button');
godWord();
