// let a = 10;
// let b = 15;
// console.log("Sum is :", a + b);
// let pencilPrice = 15;
// let eraserPrice = 5;
// console.log(`The total price is ${pencilPrice + eraserPrice} Rupees.`);

// // Arithmetic Operators

// let num1 = 52;
// let num2 = 5552;
// if((num1%10) == (num2%10)) {
//     console.log(`Numbers have the same last digit which is ${num1%10}`);
// }
// else{
//     console.log(`Numbers do not have the same last digit.`);
// }

// let msg = "IloveCoding";
// console.log(msg.slice(1,5));

// let favMovie = "Avatar";
// let guess = prompt("guess my favorite movie");
// while(( guess != favMovie ) && ( guess != "quit")){
//     guess = prompt("wrong guess. please try again!");
// }

// if(guess == favMovie){
//     console.log("Congrats!!");
// } else{
//     console.log("You quit.");
// }

// let todo = [];

// let req = prompt("please enter your request");

// while(true){
//     if (req == "quit") {
//         console.log("quitting app");
//         break;
//     }

//     if (req == "list") {
//         console.log("------------------");
//         for(let i=0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log("------------------");
//     } else if(req == "add") {
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     } else if(req == "delete"){
//         let idx = prompt("please enter the task index");
//         todo.splice(idx, 1);
//         console.log("task deleted");
//     } else{
//         console.log("wrong request");
//     }

//     req = prompt("please enter your request");
// }

// let number = 287152789;
// let count = 0;
// let copy = number;
// while(copy > 0) {
//     count++;
//     copy = Math.floor(copy/10);
// }

// console.log(count);

// let arr = [ 2, 4, 5, 3, 9, 3, 2, 1];
// let largest = 0;
// for(let i=0; i < arr.length; i++){
//     if(largest < arr[i]){
//         largest = arr[i];
//     }
// }
// console.log(largest);

// let obj = {
//     1 : "a",
//     2 : "b",
//     null : "c",
//     true : "d"
// }

// const max = prompt("enter the max number");
// const random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("guess the number");
// while(true){
//     if(guess == "quit") {
//         console.log("user quit");
//         break;
//     }
//     if(guess == random){
//         console.log("you are right. Congrats! random number was", random);
//         break;
//     } else if(guess < random){
//         guess = prompt("Your guess was too small. Please try again.");
//     } 
//     else{
//         guess = prompt("Your guess was too large. Please try again");
//     }
// }

// let length = 4;
// function callback(){
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method (callback){
//         callback();
//     },
// };

// object.method(callback, 1, 2);

// let nums = [ 2, 4, 5, 6, 7, 8, 9, 12];
// let even = nums.filter((num)=> (num % 2 == 0));

// let nums = [ 10, 20, 30, 40, 50, 5];
// let min = nums.reduce((min,el) => {
//     if (el < min){
//         return el;   
//     } else{
//         return min;
//     }
// });
// console.log(min);

// let nums = [ 1, 2, 3, 4, 5];
// const square = nums.map((num) => num * num);
// console.log (square);
// let sum = square.reduce ((res,el) => res + el, 0 );
// let avg = sum / nums.length;
// console.log (avg);

// let strings = [ "Sandeep", "Bob", "Catlyn"];
// console.log(strings.map((string) => string.toUpperCase()));

// const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr,
//     ...args.map((v)=> v * 2)
// ];  

// const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

// INDEX 2 HTML CODE
// let links = document.querySelectorAll('.box a');
// for (let i=0; i<links.length; i++) {
//     links[i].style.color = "yellow";
// }

// let h1 = document.createElement("h1");
// h1.innerHTML = "<u>DOM Practice</u>";
// document.querySelector("body").append(h1);
// h1.style.color = "purple";

// ACTIVITY HTML CODE
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
//     this.style.backgroundColor = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
//     console.log("color updated");
// });

// function getRandomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() *255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let inp = document.querySelector("#text");
// let h2 = document.querySelector("h2");

// inp.addEventListener("input", function(){
//     console.log(inp.value);
//     h2.innerText = inp.value;
//     h2.replace(/[^a-zA-Z ]/g, '');
// });

// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delBtn= document.createElement("button");
//     delBtn.innerText = "Delete";
    
//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value = "";


// });

// ul.addEventListener("click", function(event){
//     if(event.target.nodeName == "BUTTON"){
//     let listItem = event.target.parentElement;
//        listItem.remove();
//     }
// })
// let delBtns = document.querySelectorAll("button");
// for(delbutton of delBtns){
//     delbutton.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     } );
// };

// Simon Say Game
let gameSeq = [];
let userSeq = [];

let highestScore = 0;

let btns = ["pink", "blue", "orange","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if (started == false){
        console.log("game is started");
        started = true;

     levelUp();
        
    }
});

function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
     btn.classList.remove("userflash");
    }, 250);
 }

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level  ${level}`; 
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn); 
};

function checkAns(idx){
     if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
     }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>. <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        checkHighestScore();
        reset();
       
  
     }
}

function checkHighestScore(){
    if(level > highestScore){
        highestScore = level;
        h3.innerText = `New Highest Score = ${highestScore}`;
    } else{
        h3.innerText = `Highest Score = ${highestScore}`;
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}