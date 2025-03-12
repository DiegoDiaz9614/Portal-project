let currentDate = new Date().toLocaleDateString();
document.querySelector("#date").textContent = currentDate;

let currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;

let cards = [
    { title: "Memory Game", link: "/project_2/index.html" },
    { title: "Business Directory", link: "/project_3/index.html" },
    { title: "Cat App", link: "/project_4/index.html" }
];

let cardsList = document.querySelector(".cards");

cards.forEach((card) => {
    cardsList.innerHTML += `
        <div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <h2>${card.title}</h2>
                </div>
                <div class="card-back">
                    <a href="${card.link}">Project Link</a>
                </div>
            </div>
        </div>
    `;
});
