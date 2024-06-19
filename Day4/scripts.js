const btnEl = document.querySelector(".btn")
const imageContainerEl = document.querySelector(".image-container")
let imageNumber = 10;

btnEl.addEventListener("click", () => {
    // Generate a random number between 1 and 10
    addNewImages()

})


function addNewImages(){
    for (let index = 0; index < imageNumber; index++) {
        const newImage = document.createElement("img")
        newImage.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 2000)}`
        imageContainerEl.appendChild(newImage);
        
    }

}