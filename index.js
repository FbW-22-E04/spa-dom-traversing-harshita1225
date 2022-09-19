//task -1

const h1 = document.querySelector("h1").closest("header");
h1.style.border = "5px solid grey";
console.log(h1);

//task -2
const infoSection = document.querySelector(".info");

const packages = document.querySelector(".info-package");
const packageTitles = document.querySelectorAll(".package-title");
console.log(packageTitles);

if (infoSection.contains(packages)) {
  packageTitles.forEach((title) => {
    title.previousElementSibling.style.border = "2px solid black";
  });
}

/// task -3
const labels = document.querySelectorAll("label");
console.log(labels);

labels.forEach((elem) => {
  if (elem.classList.contains("mild")) {
    //console.log("true");
    elem.style.border = "2px solid yellow";
  } else if (elem.classList.contains("intense")) {
    //console.log("true");
    elem.style.border = "2px solid orange";
  } else {
    elem.style.border = "2px solid red";
  }
});

//task -4

const navList = document.querySelector(".nav-list");
const navListClone = navList.cloneNode(true);
const siteMap = document.querySelector(".site-map");

Array.from(navListClone.children).forEach((element) => {
  siteMap.appendChild(element);
});
