function rollDice() {
    let goldCoins = 0;
    console.log("hello")

    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert("You roll a " + roll + ".");
        console.log(roll);

        if (roll === 1) {
            alert("Game over, no more rolls!");
            break;//exits loop
        }

        if (roll < 4) {
            continue;//skips loop
        }

        if (roll === 4) {
            console.log("I am 4");
            if (goldCoins) {
                --goldCoins;
            }
            
            console.log(goldCoins);
            continue;
        }

        goldCoins += roll;
        alert("Congratulations, you win " + roll + " gold coins!\n\nTotal coins: " + goldCoins);

    }
    alert("You have won a total of " + goldCoins + " gold coins!")
}