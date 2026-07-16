const darkModeBtn = document.getElementById('dark-mode-btn');

darkModeBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  darkModeBtn.style.backgroundColor = document.body.classList.contains('dark-mode')
    ? 'rgb(21, 135, 80)'
    : '#f6f9f8';

  darkModeBtn.style.color = document.body.classList.contains('dark-mode')
    ? '#fff'
    : '#000';

  darkModeBtn.innerText = document.body.classList.contains('dark-mode')
    ? 'Light Mode☀️'
    : 'Dark Mode🌙';
});

const animalInput = document.getElementById('animalInput');
const insectInput = document.getElementById('insectInput');
const storyOutput = document.getElementById('storyOutput');
const story = document.getElementById('story');

const magicalBtn = document.getElementById('magicalBtn');
const adventureBtn = document.getElementById('adventureBtn');
const friendshipBtn = document.getElementById('friendshipBtn');
const funnyBtn = document.getElementById('funnyBtn');
const moralBtn = document.getElementById('moralBtn');

const magicalTemplates = [
  `One moonlit night, a brave {animal} met a glowing {insect} in an enchanted forest. The tiny creature carried a lantern made of crystal and invited the {animal} to follow a secret path hidden beneath silver flowers.

As they walked deeper into the woods, they discovered a cave filled with floating gemstones. Every gem reflected a different dream, and the {insect} explained that the cave rewarded travelers who helped others. The {animal} wished for courage to protect the forest, and the cave shimmered with golden light.

When dawn arrived, the forest animals gathered to celebrate. The {animal} realized that true magic was not hidden in the cave but in the kindness and friendship shared along the journey.`,

  `A curious {animal} followed a sparkling {insect} through tall trees and misty meadows. The tiny guide led the {animal} to a waterfall that sang melodies whenever the wind touched its surface.

The {insect} revealed that the waterfall had lost its music because no one had visited it for years. Together they cleaned the surrounding stones, planted flowers nearby, and invited other creatures to listen. Slowly, the waterfall began to sing again, filling the valley with beautiful harmonies.

That evening, the stars twinkled brighter than ever, and the {animal} learned that even small acts of care could awaken forgotten magic.`
];

const adventureTemplates = [
  `A daring {animal} discovered an old map while wandering near a river. A clever {insect} landed on the map and pointed toward a mountain marked with a glowing symbol.

The journey was not easy. They crossed a wooden bridge, climbed rocky cliffs, and escaped a sudden storm. Along the way, the {insect} spotted hidden shortcuts that helped them avoid danger.

At the mountain summit, they found an ancient chest containing seeds from a legendary tree. They planted the seeds back in their forest, where they grew into a magnificent tree that sheltered animals for generations.`
];

const friendshipTemplates = [
  `A lonely {animal} spent most of its days wandering quietly through the forest. One afternoon, a cheerful {insect} landed on its shoulder and started telling funny stories about life among the flowers.

Day after day, the two friends explored new places together. The {animal} helped the {insect} cross a stream, while the {insect} showed the {animal} where the sweetest berries grew. Their friendship became known throughout the forest.

When a heavy rainstorm arrived, all the animals worked together to build a safe shelter. The {animal} realized that having a true friend made every challenge easier and every happy moment brighter.`
];

const funnyTemplates = [
  `A clumsy {animal} tried to impress a tiny {insect} by performing tricks. First it attempted a graceful spin and accidentally landed in a pile of leaves.

The {insect} laughed so hard that it fell off a flower. Then the {animal} tried to jump over a log but bounced backward into a bush. Soon both of them were laughing together.

By the end of the day, the {animal} admitted that being silly was much more fun than trying to look perfect. The forest echoed with their laughter long after the sun had set.`
];

const moralTemplates = [
  `A hardworking {insect} spent the entire morning gathering food, while a carefree {animal} played nearby and ignored the coming clouds.

When evening arrived, a strong storm swept through the forest. The {animal} had nowhere to hide, but the prepared {insect} had built a safe shelter. Instead of turning the {animal} away, the {insect} welcomed it inside and shared its food.

The next morning, the {animal} thanked the {insect} and promised to plan ahead and help others whenever possible. From that day on, both creatures worked together and became examples of kindness and responsibility.`
];

function generateStory(title, templates) {
  const animal = animalInput.value.trim() || 'Fox';
  const insect = insectInput.value.trim() || 'Butterfly';
  const randomTemplate = templates[Math.floor(Math.random() * templates.length)];

  const story = randomTemplate
    .replaceAll('{animal}', animal)
    .replaceAll('{insect}', insect);

  storyOutput.innerHTML = `
    <div id="story" class="card shadow p-4">
      <h3 class="text-center mb-3">${title}</h3>
      <p style="font-size:18px; line-height:1.9; text-align:justify;">${story.replace(/\\n\\n/g, '<br><br>')}</p>
    </div>
  `;

  localStorage.setItem('latestStory', story);
}

magicalBtn.addEventListener('click', () => {
  generateStory('✨ Your Magical Story ✨', magicalTemplates);
});

adventureBtn.addEventListener('click', () => {
  generateStory('🛡️ Your Adventure Story 🛡️', adventureTemplates);
});

friendshipBtn.addEventListener('click', () => {
  generateStory('❤️ Your Friendship Story ❤️', friendshipTemplates);
});

funnyBtn.addEventListener('click', () => {
  generateStory('😂 Your Funny Story 😂', funnyTemplates);
});

moralBtn.addEventListener('click', () => {
  generateStory('📚 Your Moral Story 📚', moralTemplates);
});
document.getElementById('another-story-Btn').addEventListener('click', function () {
  magicalBtn.click();
});

document.getElementById('save-favorite-Btn').addEventListener('click', function () {
  const latest = localStorage.getItem('latestStory');

  if (latest) {
    localStorage.setItem('favoriteStory', latest);
    alert('Story saved to favorites ❤️');
  } else {
    alert('Generate a story first!');
  }
});

document.getElementById('featured-story-Btn').addEventListener('click', function () {
  const favorite = localStorage.getItem('favoriteStory');

  if (favorite) {
    storyOutput.innerHTML = `
      <div class="card border-danger shadow p-4">
        <h3 class="text-center text-danger mb-3">🌟 Featured Favorite Story 🌟</h3>
        <p style="font-size:18px; line-height:1.9; text-align:justify;">${favorite.replace(/\\n\\n/g, '<br><br>')}</p>
      </div>
    `;
  } else {
    alert('No favorite story saved yet!');
  }
});
