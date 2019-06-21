// interswich login and sign up pages
let loginPage = document.querySelector("#login_page");
let signupPage = document.querySelector("#signup_page");
let signupPageLink = document.querySelector("#signup_page_link");
let loginPageLink = document.querySelector("#signIn_page_link");
let postAd = document.querySelector(".post_ad");

signupPageLink.addEventListener("click", () => {
  signupPage.classList.remove("hide_content");
  loginPage.classList.add("hide_content");
});

loginPageLink.addEventListener("click", () => {
  loginPage.classList.remove("hide_content");
  signupPage.classList.add("hide_content");
});
