const container = document.querySelector(".container");

for (let i = 0; i <= 32; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", "pixel");
    container.appendChild(div);
}