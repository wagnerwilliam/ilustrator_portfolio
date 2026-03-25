let imgSection = document.getElementById("imgSection")

// Array de objetos para imagenes.
let images = [
    {
        description: "Ilustration",
        url: "media/3.webp",
        html: "details/illustrations.html"
    },
    {
        description: "printmaking",
        url: "media/1.webp",
        html: "details/printmaking.html",
    },
    {
        description: "roshamberg, the card game",
        url: "media/2.webp",
        html: "details/roshamberg.html"
    },
    {
        description: "Embroidery",
        url: "media/4.webp",
        html: "details/embroidery.html"
    },
    {
        description: "Roshamberg, The Town",
        url: "media/5.webp",
        html: "details/roshamberg_town.html"
    },
    {
        description: "Giants",
        url: "media/6.webp",
        html: "details/giants.html"
    },
]

images.forEach(img => {
    let imgDiv = document.createElement("div")
    imgDiv.classList.add("work__img")
    imgDiv.innerHTML = `
    <a href="${img.html}">
        <img src="${img.url}" alt="${img.description}">
    </a>
    <h3>${img.description}</h3>
    `
    imgSection.appendChild(imgDiv)
});
