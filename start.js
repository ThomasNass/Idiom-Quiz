const round = document.querySelector("#round-select");
const start = document.querySelector("#start");

start.addEventListener("click", () => {
    let number = 20;
    if (round.value) {
        number = round.value;
    }
    localStorage.setItem("round", number);
    location.href = "site.html";
})