const URL = "https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cardsContainer = document.querySelector("div.cards");

const businessImages = [
    "img/simply-bliss.jpeg",
    "img/nigh-time.jpeg",
    "img/osaka-sushi.jpeg",
    "img/roxberry.jpeg",
    "img/home-depot.jpeg",
    "img/guzzle.jpeg",
    "img/mountain-west.jpeg",
    "img/the-ups-store.jpeg",
    "img/security-title.jpg"
];

fetch(URL)
    .then((response) => response.json())
    .then((jsObject) => {
        let businesses = jsObject.business;

        for (let i = 0; i < businesses.length; i++) {
            let business = businesses[i];

            let card = document.createElement("section");
            card.className = "card";

            let h2 = document.createElement("h2");
            h2.textContent = business.name;
            card.appendChild(h2);

             let img = document.createElement("img");
             img.src = businessImages[i];
             img.alt = `Image of ${business.name}`; 
             img.className = "business-image";
             card.appendChild(img);

            let address = document.createElement("p");
            address.textContent = `Address: ${business.address}`;
            card.appendChild(address);

            let description = document.createElement("p");
            description.textContent = business.description;
            card.appendChild(description);

            cardsContainer.appendChild(card);
        }
    })
    .catch((error) => console.error("Error fetching data:", error));
