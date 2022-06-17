const url = "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json"
const cards = document.querySelector("#cards")

fetch(url)
.then( response => response.json() )
.then( data => {
    const prophets = data['prophets'];
    prophets.forEach(displayProphets);
});

function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthday = document.createElement('p');
    let birthplace = document.createElement('p');
    let portraitdiv = document.createElement('div')
    let portrait = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthday.textContent = `Date of Birth: ${prophet.birthdate}`
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(birthday);
    card.appendChild(birthplace);
    portraitdiv.appendChild(portrait)
    card.appendChild(portraitdiv);
    
    card.setAttribute('class', 'card')
    cards.appendChild(card);
}