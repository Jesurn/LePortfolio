let isClickableCard = false;
const profileImage = document.getElementById("profileImage");
const profileName = document.getElementById("profileName");
const profileBio = document.getElementById("profileBio");
const profileCompany = document.getElementById("profileCompany");

function clickableCard() {
  if (!isClickableCard) {
    profileName.classList.remove("deactive-click")
    profileName.classList.add("active-click");
    profileBio.classList.remove("deactive-click")
    profileBio.classList.add("active-click");
    profileCompany.classList.remove("deactive-click")
    profileCompany.classList.add("active-click");
    isClickableCard = true;
  }
}

//replace with your user:
const GITHUB_URL = "https://api.github.com/users/Jesurn";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    profileImage.src = data.avatar_url;
    profileName.innerText = data.name;
    profileBio.innerText = `"${data.bio}"`;
    profileCompany.innerText = data.company;
  });