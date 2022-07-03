const src = "./src/data.json";
fetch(src)
.then( response => response.json() )
.then( data => {
    const businesses = data['businesses'];
    // businesses.forEach(displayBusiness);
    let index1 = Math.floor(Math.random() * businesses.length);
    let index2 = Math.floor(Math.random() * businesses.length);
    let index3 = Math.floor(Math.random() * businesses.length);
    while (data['businesses'][index1]['membership'] != "Gold" && data['businesses'][index1]['membership'] != "Silver") {
        index1 = Math.floor(Math.random() * businesses.length);
    }
    displayBusiness(data['businesses'][index1], 1);
    while ((data['businesses'][index2]['membership'] != "Gold" && data['businesses'][index2]['membership'] != "Silver") || index1 == index2 ) {
        index2 = Math.floor(Math.random() * businesses.length);
    }
    displayBusiness(data['businesses'][index2], 2);
    while ((data['businesses'][index3]['membership'] != "Gold" && data['businesses'][index3]['membership'] != "Silver") || index1 == index3 || index2 == index3 ) {
        index3 = Math.floor(Math.random() * businesses.length);
    }
    displayBusiness(data['businesses'][index3], 3);
});

const spotlights = document.querySelector("#spotlights")

function displayBusiness(business, spotlightNumber) {
    let card = document.createElement('div');
    let h3 = document.createElement('h3');
    let icondiv = document.createElement('div');
    let icon = document.createElement('img');
    let address = document.createElement('p');
    let contact = document.createElement('p');
    let site = document.createElement('a');

    h3.textContent = `${business.name}`;
    address.textContent = `${business.address}`
    contact.textContent = `${business.phone} | ${business.email}`
    site.textContent = `${business.site}`

    icon.setAttribute('src', `${business.icon}`);
    icon.setAttribute('alt', `Business icon for ${business.name}`);
    icondiv.setAttribute('class', 'icon-container');
    site.setAttribute('href', `#`);

    card.appendChild(h3);
    icondiv.appendChild(icon)
    card.appendChild(icondiv);
    card.appendChild(address);
    card.appendChild(contact);
    card.appendChild(site);
    
    card.setAttribute('id', `spot-${spotlightNumber}`)
    spotlights.appendChild(card);
}

//Credit for images in json source:
// href="https://www.flaticon.com/free-icons/garbage" Garbage icon created by Freepik - Flaticon
// href="https://www.flaticon.com/free-icons/hamburger" Hamburger icon created by Freepik - Flaticon
// href="https://www.flaticon.com/free-icons/mechanic" Mechanic icon created by Freepik - Flaticon
// href="https://www.flaticon.com/free-icons/sun" Sun icon created by iconixar - Flaticon