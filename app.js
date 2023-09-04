const colors = ["Indigo", "Plum", "Aqua", "Crimson", "SeaGreen", "Coral", "Violet", "Lime"];

function switchColor(color) {
    document.body.style.backgroundColor = color;
}

const colorBtn = document.getElementById("arrayBtn");

colors.forEach((color) => {
    const button = document.createElement("button");
    button.textContent = color;
    button.style.padding = "10px";
    
    button.addEventListener("click", function () {
        switchColor(color);
    });

    colorBtn.appendChild(button);
});

        colorBtn.style.display = "flex";
        colorBtn.style.flexWrap = "nowrap";
        colorBtn.style.justifyContent = "space-around";
        colorBtn.style.alignItems = "center";
