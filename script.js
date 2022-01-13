const slider = document.querySelector("#slider");
const slideOutput = document.querySelector("#slide-output");
const grid = document.querySelector("#grid");
const changeRatio = document.querySelector("#change-ratio");
const clear = document.querySelector("#clear");

slideOutput.textContent = `Pixel Ratio: ${slider.value} x ${slider.value}`

slider.oninput = function() {
    slideOutput.textContent = `Pixel Ratio: ${this.value} x ${this.value}`;
}

function createGrid(pixelRatio) {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    let numOfPixel = pixelRatio * pixelRatio;
    for (let i = 0; i < numOfPixel; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        div.style.width = `${100 / pixelRatio}%`;
        div.style.height = `${100/ pixelRatio}%`;
        grid.appendChild(div);
    }
}

createGrid(slider.value);
changeRatio.addEventListener("click", () => {
    createGrid(slider.value);
})


