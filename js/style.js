
let imgSection = document.getElementById("imgSection")

// Array de objetos para imagenes.
let images = [
    {
        description: "Ilustration",
        url: "media/1.webp"
    },
    {
        description: "printmaking",
        url: "media/2.webp"
    },
    {
        description: "roshamberg, the card game",
        url: "media/3.webp"
    },
    {
        description: "Embroidery",
        url: "media/4.webp"
    },
    {
        description: "Roshamberg, The Town",
        url: "media/5.webp"
    },
    {
        description: "Giants",
        url: "media/6.webp"
    },
]

images.forEach(img => {
    let imgDiv = document.createElement("div")
    imgDiv.classList.add("work__img")
    imgDiv.innerHTML = `
        <img src="${img.url}" alt="${img.description}">
        <a href="#">${img.description}</a>
    `
    imgSection.appendChild(imgDiv)
});
