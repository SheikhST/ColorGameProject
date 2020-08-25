
let numSquares = 6;
let colors = randomColorGenerator(numSquares);

let squares = document.querySelectorAll(".square");
let pickedColor = randomColorPicker();

let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");

let h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;

let resetBtn = document.querySelector("#reset");




easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = randomColorGenerator(numSquares);
    pickedColor = randomColorPicker();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = randomColorGenerator(numSquares);
    pickedColor = randomColorPicker();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i < squares.length; i++){
        
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        
    }
})



resetBtn.addEventListener("click", function()
{
    //Generating new colours
    colors = randomColorGenerator(numSquares);
    //picking new colour from array
    pickedColor = randomColorPicker();
    //change colour display to match icked colour
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent="";
    this.textContent="New Colours";
    //change the colour of all the squares
    for (var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "#1DA1F2";
})

for (var i=0; i < squares.length; i++){
    //initialize colours
    squares[i].style.backgroundColor = colors[i];

    //assign click listeners to squares
    squares[i].addEventListener("click", function(){
        //Saving the clicked color in a variable
        let clickedColor = this.style.backgroundColor;
        //comparivng clicked color to picked color
        //correct pick
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetBtn.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = pickedColor;
        }
        //Wrong pick
        else{
            this.style.backgroundColor = "#243447";
            messageDisplay.textContent = "Try Again!";
        }

    })
}

function changeColors(color){
    //iterate through all the elemenst in square
    for (var i=0; i < squares.length; i++){
        //Change color of each square
        squares[i].style.backgroundColor = color;

    }
}

function randomColorPicker(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function randomColorGenerator(num){
    //make an array of colors
    let arr = [];
    for (var i=0; i < num; i++){
    //push colors into arr
    arr.push(randomColor());
    }
    //array return
    return arr;
}

function randomColor(){
    //for red
    var r = Math.floor(Math.random()*256);
    //for geen
    var g = Math.floor(Math.random()*256);
    //for blue
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
    
}