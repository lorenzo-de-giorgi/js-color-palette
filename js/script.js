const colors = [
    {
      label: "rich-black",
      hex: "#03071eff",
      palette_name: "fire",
    },
    {
      label: "chocolate-cosmos",
      hex: "#370617ff",
      palette_name: "fire",
    },
    {
      label: "rosewood",
      hex: "#6a040fff",
      palette_name: "fire",
    },
    {
      label: "penn-red",
      hex: "#9d0208ff",
      palette_name: "fire",
    },
    {
      label: "engineering-orange",
      hex: "#d00000ff",
      palette_name: "fire",
    },
    {
      label: "sinopia",
      hex: "#dc2f02ff",
      palette_name: "fire",
    },
    {
      label: "persimmon",
      hex: "#e85d04ff",
      palette_name: "fire",
    },
    {
      label: "princeton-orange",
      hex: "#f48c06ff",
      palette_name: "fire",
    },
    {
      label: "orange-web",
      hex: "#faa307ff",
      palette_name: "fire",
    },
    {
      label: "selective-yellow",
      hex: "#ffba08ff",
      palette_name: "fire",
    },
    {
      label: "imperial-red",
      hex: "#f94144ff",
      palette_name: "summer",
    },
    {
      label: "orange-crayola",
      hex: "#f3722cff",
      palette_name: "summer",
    },
    {
      label: "carrot-orange",
      hex: "#f8961eff",
      palette_name: "summer",
    },
    {
      label: "saffron",
      hex: "#f9c74fff",
      palette_name: "summer",
    },
    {
      label: "pistachio",
      hex: "#90be6dff",
      palette_name: "summer",
    },
    {
      label: "zomp",
      hex: "#43aa8bff",
      palette_name: "summer",
    },
    {
      label: "paynes-gray",
      hex: "#577590ff",
      palette_name: "summer",
    },
];
  
const boxWrapper = document.createElement("div");
boxWrapper.classList.add("box-wrapper");
const main = document.querySelector("main");
main.appendChild(boxWrapper);

// for (let i = 0; i < colors.length; i++) {
//   const circleColor = document.createElement("div");
//   circleColor.classList.add("circle");
//   circleColor.style.backgroundColor = colors[i].hex;
//   boxWrapper.appendChild(circleColor);
// }

function printColors(arrayColors){
    arrayColors.forEach((color) => {
        const circleColor = document.createElement("div");
        circleColor.classList.add("circle");
        circleColor.style.backgroundColor = color.hex;
        circleColor.addEventListener("click", () => {
          setBox(color);
        });
        boxWrapper.appendChild(circleColor);
    });
}
printColors(colors);

const box = document.createElement("div");
box.classList.add("box");
const labels = document.createElement("p");
box.appendChild(labels);

function setBox(color) {
  box.style.backgroundColor = color.hex;
  const label = color.label;
  const palette = color.palette_name;
  const hex = color.hex;
  labels.innerHTML = "";
  labels.innerHTML = `${label} + ${palette} + ${hex}`;
}
setBox(colors[0]);

main.appendChild(box);

const button = document.getElementById("btn");
button.addEventListener("click", () => {
  const selectedPalette = document.getElementById("searchPalette").value;
  console.log(selectedPalette);
  const filteredColors = colors.filter((color) => {
    if (color.palette_name === selectedPalette || selectedPalette === "") {
      return true;
    } else {
      return false;
    }
  });
  console.log(filteredColors);
  boxWrapper.innerHTML = "";
  printColors(filteredColors);
  setBox(filteredColors[0])
});
