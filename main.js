let installPrompt = null;
const installButton = document.querySelector("#install");
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
});

installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
});

let counter = 0;
const btnAdd = document.getElementById("btnAdd")
const btnMin = document.getElementById("btnMin")

function setSpanText(){
  document.getElementById("counterText").textContent = counter;
}

btnAdd.addEventListener("click", () => {
  counter++;
  setSpanText();
})

btnMin.addEventListener("click", () => {
  counter--;
  setSpanText();
})