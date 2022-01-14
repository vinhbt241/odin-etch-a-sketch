const blackMode = document.querySelector("#black-mode");
const rainbowMode = document.querySelector("#rainbow-mode");
const eraser = document.querySelector("#eraser");
const clear = document.querySelector("#clear");

const slider = document.querySelector("#slider");
const slideOutput = document.querySelector("#slide-output");
const grid = document.querySelector("#grid");
const changeRatio = document.querySelector("#change-ratio");

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
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = `${100 / pixelRatio}%`;
        pixel.style.height = `${100/ pixelRatio}%`;
        pixel.addEventListener("mousemove", (e) => {
            e.target.classList.add("pixel-draw-black");
        })
        grid.appendChild(pixel);
    }
}

function clearGrid() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.className = "pixel";
        pixel.style.backgroundColor = "";
    })
}

function eraseGrid() {
    pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.addEventListener("mousemove", (e) => {
            e.target.className = "pixel"; 
            e.target.style.backgroundColor = "";
            e.target.classList.add("pixel-eraser")
        })
    })
}

function toBlack() {
    pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.addEventListener("mousemove", (e) => {
            e.target.className = "pixel";
            e.target.style.backgroundColor = "";
            e.target.classList.add("pixel-draw-black");
        })
    })
}

function toRainbow() {
    pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.addEventListener("mousemove", (e) => {
            let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = randomColor;
        })
    })
}


createGrid(slider.value);
changeRatio.addEventListener("click", () => {
    createGrid(slider.value);
})

clear.addEventListener("click", clearGrid);
eraser.addEventListener("click", eraseGrid);
blackMode.addEventListener("click", toBlack);
rainbowMode.addEventListener("click", toRainbow);


