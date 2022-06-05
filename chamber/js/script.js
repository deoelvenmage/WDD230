// footer edit timestamp
document.querySelector('#lastmod').textContent = document.lastModified;


// header edit today's date
const d = new Date();
const weekday = d.toLocaleString("default", { weekday: "long"})
const day = d.getDate();
const month = d.toLocaleString('default', { month: 'long' })
const year = d.getFullYear();
document.querySelector('#today-date').textContent = `${weekday}, ${day} ${month} ${year}`;

if (weekday == "Monday" || weekday == "Tuesday") {
    const p = document.createElement('p');
    p.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    p.style.textAlign = 'center';
    p.style.padding = '20px';
    p.style.border = '2px solid rgb(154, 127, 21)';
    p.style.backgroundColor = 'rgb(223, 201, 113)';
    p.style.width = '100%';

    const header = document.querySelector('header');
    const top = document.querySelector('.header-logo')
    header.insertBefore(p, top);
}


// hamburger menu responsiveness
const hambutton = document.querySelector('.hamnav');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};