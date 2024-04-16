let userscore=0;
let compscore=0;


let choices=document.querySelectorAll(".image");
let msg=document.querySelector("#btn");
const userscorepara=document.querySelector("#user_score");
const compscorepara=document.querySelector("#comp_score");

// user choice genration
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);

    })
})
// Computer choice Genration
let compChoicegen=()=>{
    let option=["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    return option[idx];

}
const drawGame=()=>{
    msg.innerHTML="The game has been Drawn";
    msg.style.backgroundColor="rgb(22, 9, 52)" 
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerHTML="You Win";
        msg.style.backgroundColor="Green" 
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerHTML="You Lost";
        msg.style.backgroundColor="Red" 
    }
}
// Here we will compair user choice and computer choice
let playgame=(userChoice)=>{
    console.log(userChoice);
    let compChoice =compChoicegen()
    console.log(compChoice)


    if(userChoice===compChoice){
        // draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice=="paper"){
           userWin= compChoice==="scissor"?false:true
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }



}