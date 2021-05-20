const data: Array<{ image: string; title: string; description: string }> = [
  {
    image: require('url:./images/desktop-image-hero-1.jpg'),
    title: 'Discover innovative ways to decorate',
    description:
      'We provide unmatched quality, comfort, and style for property owners across the country. ' +
      'Our experts combine form and function in bringing your vision to life. Create a room in your ' +
      'own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    image: require('url:./images/desktop-image-hero-2.jpg'),
    title: 'We are available all across the globe',
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business." +
      'Locally, we’re in most major cities throughout the country. Find the branch nearest you using our ' +
      "store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: require('url:./images/desktop-image-hero-3.jpg'),
    title: 'Manufactured with the best materials',
    description:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology' +
      'to ensure that every product is made as perfect and as consistent as possible. With three decades of ' +
      'experience in this industry, we understand what customers want for their home and office.',
  },
];

let currentIndex = 0;

const previous = document.getElementById('previous');
const next = document.getElementById('next');
const coverContainer = document.getElementById('cover-image');
const titleContainer = document.getElementById('cover-title');
const descriptionContainer = document.getElementById('cover-description');

previous.onclick = () => {
  currentIndex === 0 ? (currentIndex = 2) : currentIndex--;
  triggerUpdate();
};
next.onclick = () => {
  currentIndex === 2 ? (currentIndex = 0) : currentIndex++;
  triggerUpdate();
};

function triggerUpdate() {
  coverContainer.style.backgroundImage = `url(${data[currentIndex].image})`;
  titleContainer.innerHTML = data[currentIndex].title;
  descriptionContainer.innerHTML = data[currentIndex].description;
  console.info('Updating...');
  console.log('Current Index: ' + currentIndex);
}

// Mobile menu
const closeBtn = document.getElementById('close');
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-links');

menuBtn.onclick = () => {
  navMenu.style.display = 'flex';
};
closeBtn.onclick = () => {
  navMenu.style.display = 'none';
};
