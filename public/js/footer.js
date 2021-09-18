const codingLanguages = ["HTML", "CSS", "JAVASCRIPT (+NODE.JS)"];
const footerBuilt = document.getElementById("footer-built");
let footerResult = "";

for (let i = 0; i < codingLanguages.length; i++) {
    if (i == codingLanguages.length - 1) {
        footerResult += "AND " + codingLanguages[i] + ".";
    }
    else if (i == codingLanguages.length - 2) {
        footerResult += codingLanguages[i] + " ";
    }
    else {
        footerResult += codingLanguages[i] + ", ";
    }
}

footerBuilt.innerText = "THIS WEBSITE IS USING: " + footerResult;