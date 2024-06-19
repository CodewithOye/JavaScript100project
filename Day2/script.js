const containerEl = document.querySelector(".container");
const careers =["Youtuber","Cyber Security Analyst", "Freelancer"];
var careersIndex = 0
var characterIndex = 0

// ${careers[careersIndex].slice(0,1) === "I" ? "an" : "a"}
function updateText(){
    characterIndex++;
    containerEl.innerHTML = `
    <h1>I am a ${careers[careersIndex].slice(0,characterIndex)}</h1>
    
    `
    if (characterIndex ===careers[careersIndex].length) {
        careersIndex++;
        characterIndex = 0;
    }
    if (careersIndex === careers.length) {
        careersIndex = 0;
    }

    setTimeout(updateText,400)

}
updateText()