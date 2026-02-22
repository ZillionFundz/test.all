const checkBox = document.getElementById("checked");
const passrord = document.getElementById("passrord");
const bgDrop = document.getElementById("bg-drop");
const submitBtn = document.getElementById("submit-btn");
const signinButton = document.getElementById("signin-button");

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    passrord.type = "text";
    return;
  } else {
    passrord.type = "password";
    return;
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
signinButton.addEventListener("click", (e) => {
  e.preventDefault();
  bgDrop.style.transform = "translateY(-150%)";

  setTimeout(() => {
    bgDrop.style.display = "none";
  }, 600); // match CSS transition time
});
