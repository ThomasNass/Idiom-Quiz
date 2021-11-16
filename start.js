const round = document.querySelector("#round-select");
const start = document.querySelector("#start");
const radio = document.querySelector("#explanation");
start.addEventListener("click", () => {
    let number = 20;
    if (round.value) {
        number = round.value;
    }
    if (radio.checked) {
        localStorage.setItem("checked", true)
    }
    localStorage.setItem("round", number);
    location.href = "site.html";
})