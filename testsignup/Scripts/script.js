const checkBox = document.getElementById("checked");
const bgDrop = document.getElementById("bg-drop");
const previewBtn = document.getElementById("preview-btn");
const signupButton = document.getElementById("signin-button");
const detailGroup = document.getElementById("detail-group");
const detailBox = document.getElementById("detail-box");
const signTitle = document.getElementById("sign-title");
const previewUsername = document.getElementById("preview-username");
const previewEmail = document.getElementById("preview-email");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    password.type = "text";
    // return;
  } else {
    password.type = "password";
    return;
  }
});

signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  bgDrop.style.transform = "translateY(-150%)";
  setTimeout(() => {
    bgDrop.style.display = "none";
    signTitle.style.display = "block";
  }, 600); // match CSS transition time
});

let isPreview = true;
let isAnimating = false;

previewBtn.addEventListener("click", () => {
  if (isAnimating) return;

  previewUsername.textContent = username.textContent;
  previewEmail.textContent = email.textContent;

  isAnimating = true;

  detailBox.style.display = "flex";

  setTimeout(() => {
    detailBox.style.opacity = "1";
    detailBox.style.transform = "translateY(0)";
  }, 50);

  if (isPreview) {
    console.log("Condition Passed.");

    setTimeout(() => {
      console.log("Timeout Executed");

      detailGroup.style.background =
        "linear-gradient(-160deg, #cf18fd, #ffffff, #05013b)";
      previewBtn.textContent = "My Courses";

      isPreview = false;
      isAnimating = false;
    }, 3000);
  } else {
    previewBtn.textContent = "Preview";
    isPreview = true;

    setTimeout(() => {
      detailBox.style.display = "none";
      bgDrop.style.display = "block";
      bgDrop.style.transform = "translateY(0)";
      signTitle.style.display = "none";

      detailBox.style.opacity = "0";
      detailBox.style.transform = "translateY(-20)";

      detailGroup.style.background =
        "linear-gradient(-160deg, #cf18fd, #00ff6a, #1100ff)";

      isAnimating = false;
    }, 5000);
  }
});
