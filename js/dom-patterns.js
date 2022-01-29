function showPattern() {
    const colorsArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    
    let topPosition = 25;
    let leftPosition = 25;
    let width = 500;
    let height = 500;

    while (width > 50) {
        const randomColorIdx = Math.floor(Math.random() * colorsArr.length);
        const newDiv = document.createElement("div");

        newDiv.style.top = topPosition + 'px';
        newDiv.style.left = leftPosition + 'px';
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        newDiv.style.background = colorsArr[randomColorIdx];

        document.body.appendChild(newDiv);//creates very first square(biggest square)
        topPosition += 10;//move 10px down from top
        leftPosition += 10;//move 10px to the right
        width -= 20;
        height -= 20;

        //a smaller and nested square should appear in every loop

    }
}