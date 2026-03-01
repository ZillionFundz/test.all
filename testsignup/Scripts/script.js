const signupBtn = document.getElementById("signup-btn");
const previewButton = document.getElementById("preview-button");
const signupButton = document.getElementById("signup-button");
const checkBox = document.getElementById("signup-checkbox");
const signinButton = document.getElementById("signin-button");
const switchtoSigninButton = document.getElementById("switchto-signin-button");
const switchtoSignupButton = document.getElementById("switchto-signup-button");
const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");
const username = document.getElementById("signup-username");
const email = document.getElementById("signup-email");
const password = document.getElementById("signup-password");
const signupTitle = document.getElementById("signup-title");
const bgDrop = document.getElementById("bg-drop");
const signinTitle = document.getElementById("signin-title");
const detailGroup = document.getElementById("detail-group");
const detailBox = document.getElementById("detail-box");
const previewUsername = document.getElementById("preview-username");
const previewEmail = document.getElementById("preview-email");
console.log(signupBtn);

signupForm.classList.add("hidden-view");
signinForm.classList.add("hidden-view");

signupBtn.addEventListener("click", () => {
  // e.preventDefault();
  signupForm.classList.remove("hidden-view");
  signupForm.classList.add("active-view");

  setTimeout(() => {
    bgDrop.classList.add("hide-bg");
    signupForm.classList.remove("hidden-view");
    signupForm.classList.add("active-view");
  }, 1000); // match CSS transition time
});

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    password.type = "text";
    // return;
  } else {
    password.type = "password";
    return;
  }
});

let isPreview = true;
let isAnimating = false;

previewButton.addEventListener("click", () => {
  if (isAnimating) return;

  previewUsername.textContent = username.value;
  previewEmail.textContent = email.value;

  isAnimating = true;

  detailBox.style.display = "flex";

  setTimeout(() => {
    detailBox.style.opacity = "1";
    detailBox.style.transform = "translateY(0)";
  }, 200);

  if (isPreview) {
    console.log("Condition Passed.");

    setTimeout(() => {
      console.log("Timeout Executed");

      detailGroup.style.background =
        "linear-gradient(-160deg, #cf18fd, #1100ff, #fff, #000)";
      previewButton.textContent = "My Courses";

      isPreview = false;
      isAnimating = false;
    }, 3000);
  } else {
    previewButton.textContent = "Preview";
    isPreview = true;

    setTimeout(() => {
      bgDrop.classList.add("active-view");
      signupForm.classList.remove("active-view");
      signupForm.classList.add("hidden-view");
      detailBox.style.display = "none";
      bgDrop.classList.remove("hide-bg");
      signinTitle.style.display = "none";
      signupTitle.style.display = "none";

      detailBox.style.opacity = "0";
      detailBox.style.transform = "translateY(-20)";

      detailGroup.style.background =
        "linear-gradient(-160deg, #cf18fd, #1100ff, #29216e, #000)";

      isAnimating = false;
    }, 5000);
  }
});

switchtoSigninButton.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.classList.remove("active-view");
  signupForm.classList.add("hidden-view");
  signinForm.classList.add("active-view");
});

switchtoSignupButton.addEventListener("click", (e) => {
  e.preventDefault();
  signinForm.classList.remove("active-view");
  signinForm.classList.add("hidden-view");
  signupForm.classList.add("active-view");
});
