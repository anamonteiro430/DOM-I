const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

//HEADER
// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let navItems = document.querySelectorAll('a');
navItems[0].textContent = 'Services';
navItems[1].textContent = 'Product';
navItems[2].textContent = 'Vision';
navItems[3].textContent = 'Features';
navItems[4].textContent = 'About';
navItems[5].textContent = 'Contact';

//CTA
let ctaTitle = document.querySelector('h1');
ctaTitle.textContent = siteContent.cta.h1;
ctaTitle.style.width = '40%';
ctaTitle.style.textAlign = 'center';
ctaTitle.style.margin = '0 auto';

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button;

let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']['img-src'];

//Main Content

let subTitle = document.querySelectorAll('h4');
subTitle[0].textContent = siteContent['main-content']['features-h4'];
subTitle[1].textContent = siteContent['main-content']['about-h4'];
subTitle[2].textContent = siteContent['main-content']['services-h4'];
subTitle[3].textContent = siteContent['main-content']['product-h4'];
subTitle[4].textContent = siteContent['main-content']['vision-h4'];
subTitle[5].textContent = siteContent['contact']['contact-h4'];

let para = document.querySelectorAll('p');
para[0].textContent = siteContent['main-content']['features-content'];
para[1].textContent = siteContent['main-content']['about-content'];
para[2].textContent = siteContent['main-content']['services-content'];
para[3].textContent = siteContent['main-content']['product-content'];
para[4].textContent = siteContent['main-content']['vision-content'];
para[5].textContent = siteContent['contact'].address;
para[6].textContent = siteContent['contact'].phone;
para[7].textContent = siteContent['contact'].email;
para[8].textContent = siteContent['footer'].copyright;

let middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

//Change nav text color
Array.from(navItems).forEach(navItem => {
  navItem.style.color = 'green';
});

//New links for the nav

const newLink = document.createElement('a');
const newerLink = document.createElement('a');

newLink.textContent = 'Home';
newerLink.textContent = 'Logout';
const newNav = document.querySelector('nav');

//append and prepend
newNav.prepend(newLink);
newNav.append(newerLink);

para[5].style.width = '20%';

let body = document.querySelector('body');
body.style.color = 'white';

const [red, green, blue] = [143, 26, 26];
const page = document.querySelector('body');

//on scroll event
window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 150;
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  page.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
