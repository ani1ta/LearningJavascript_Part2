// innerHtml
// 

const mainHeading = document.querySelector(".headline")
console.log(mainHeading.innerHTML)
mainHeading.innerHTML = "<h1> Change inner HTML </h1>"
mainHeading.innerHTML += "<button class = \"btn\">Learn More </button>"
console.log(mainHeading.innerHTML)