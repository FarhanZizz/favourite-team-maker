
function playerSelection(element) {
    // setting clicked button to disabled
    element.setAttribute("disabled", true);
    // getting playernames and adding it to selected list
    const playerName = element.parentNode.children[0].innerText;
    const li = document.createElement("li");
    li.innerText = playerName;
    document.getElementById("selected-players").appendChild(li);
    // if player count is 5 then disabling all buttons 
    const playerCount = document.getElementById("selected-players").children.length;
    if (playerCount == 5) {
        const buttons = document.getElementsByClassName("player-btn")
        for (button of buttons) {
            button.setAttribute("disabled", true);
        }
    }
}


// player Expense calculation 
document.getElementById("budget-calculate").addEventListener("click", function () {
    const playerCount = document.getElementById("selected-players").children.length;
    const budgetInput = document.getElementById("budget-input").value;
    const playerExpense = playerCount * budgetInput;
    document.getElementById("player-expense").innerText = playerExpense;

})