const checkBox = document.getElementById("checked");
const passrord = document.getElementById("passrord");
const bgDrop = document.getElementById("bg-drop");
const submitBtn = document.getElementById("submit-btn");

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    passrord.type = "text";
    return;
  } else {
    passrord.type = "password";
    return;
  }
});
