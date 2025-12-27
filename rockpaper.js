let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userpara=document.querySelector("#userscore");
const comppara=document.querySelector("#compscore");

const gencompchoice =()=>{
    const option =["rock","paper","scissor"];
    const randomindex=Math.floor(Math.random()*3);
    return option[randomindex];
}

const drawgame =()=>{
   msg.innerText= "The game is a draw"
}

const showwinner=(userwin,compchoice,userchoice)=>{
     if(userwin==true){
        userScore++;
        userpara.innerText=userScore;
        console.log("THe user is winner");
        msg.innerText=`You win !! Your ${userchoice} beat ${compchoice}`;
     }
     else{
        compScore++;
        comppara.innerText=compScore;
        console.log("COmp is the winner");
        msg.innerText=`You lose !!  ${compchoice} beat your ${userchoice}`
     }
}


choices.forEach((choice)=>{
    console.log(choice);
    let userchoice= choice.getAttribute("id");
    choice.addEventListener("click",()=>{
     playgame(userchoice);
    })
})

const playgame=(userchoice)=>{
      console.log("user choice = ",userchoice);
      const compchoice=gencompchoice();
      console.log("comp choice = ",compchoice);


    if(userchoice == compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if (userchoice==="rock"){
            userwin = compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin = compchoice==="scissor" ?false:true;
        }
        else{
            userwin= compchoice=="rock"?false:true;
        }
        showwinner(userwin,compchoice,userchoice);
    }
}


