function rollDice() {
    let goldCoins = 0;

    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert("You roll a " + roll + ".");
        if (roll === 1) {
            alert("Game over, no more rolls!");
            break;//exits loop
        }
        if (roll < 5) {
            continue;//skips loop
        }
        goldCoins += roll;
        alert("Congratulations, you win " + roll + " gold coins!\n\nTotal coins: " + goldCoins);

    }
    alert("You have won a total of " + goldCoins + " gold coins!")
}