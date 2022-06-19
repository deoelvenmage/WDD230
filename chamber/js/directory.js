const src = "./src/data.json";
fetch(src)
.then( response => response.json() )
.then( data => {
    const businesses = data['businesses'];
    businesses.forEach(displayBusiness);
});

const directory = document.querySelector("#directory")
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
	directory.classList.add("directory-grid");
	directory.classList.remove("directory-list");
});
listbutton.addEventListener("click", () => {
	directory.classList.add("directory-list");
	directory.classList.remove("directory-grid");
});


function displayBusiness(business) {
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let icondiv = document.createElement('div');
    let icon = document.createElement('img');
    let address = document.createElement('p');
    let contact = document.createElement('p');
    let site = document.createElement('a');
    let membership = document.createElement('p');

    h3.textContent = `${business.name}`;
    address.textContent = `${business.address}`
    contact.textContent = `${business.phone} | ${business.email}`
    site.textContent = `${business.site}`
    membership.textContent = `${business.membership}`

    icon.setAttribute('src', `${business.icon}`);
    icon.setAttribute('alt', `Business icon for ${business.name}`);
    icon.setAttribute('loading', 'lazy');
    icondiv.setAttribute('class', 'icon-container');
    site.setAttribute('href', `#`);
    membership.style.fontWeight = 'bold';

    card.appendChild(h3);
    icondiv.appendChild(icon)
    card.appendChild(icondiv);
    card.appendChild(address);
    card.appendChild(contact);
    card.appendChild(site);
    card.appendChild(membership);
    
    card.setAttribute('class', 'business-card')
    directory.appendChild(card);
}

//Credit for images in json source:
// href="https://www.flaticon.com/free-icons/garbage" Garbage icon created by Freepik - Flaticon
// href="https://www.flaticon.com/free-icons/hamburger" Hamburger icon created by Freepik - Flaticon
// href="https://www.flaticon.com/free-icons/mechanic" Mechanic icon created by Freepik - Flaticon
// href="https://www.flaticon.com/free-icons/sun" Sun icon created by iconixar - Flaticon
