// footer edit timestamp
document.querySelector('#lastmod').textContent = document.lastModified;


// header edit today's date
const d = new Date();
const weekday = d.toLocaleString("default", { weekday: "long"})
const day = d.getDate();
const month = d.toLocaleString('default', { month: 'long' })
const year = d.getFullYear();
document.querySelector('#today-date').textContent = `${weekday}, ${day} ${month} ${year}`;


// hamburger menu responsiveness
const hambutton = document.querySelector('.hamnav');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};