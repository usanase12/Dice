const button1 = document.getElementById("roll-button");
const dice1 = document.getElementById("dice");
const rollHistory1 = document.getElementById("roll-history");
let historyList = [];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    dice1.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory() {
    rollHistory1.innerHTML = ""; // Clear previous history
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
        rollHistory1.appendChild(listItem);
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

button1.addEventListener("click", () => {
    dice1.classList.add("roll-animation");
    setTimeout(() => {
        dice1.classList.remove("roll-animation");  
        rollDice(); // Add this line to actually roll the dice
    }, 1000);
});
