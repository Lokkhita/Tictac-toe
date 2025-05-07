let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let nwgm=document.querySelector(".nw-gm");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg");
let round=document.querySelector(".msg2");
let turnO=true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]]
    const findwinner=(xWins,OWins)=>{
        if(xWins>OWins){
            msg.innerText="X is the winner!";
        }}
        
    const Disableboxes=()=>{ 
         boxes.forEach((box)=>{ 
            box.disabled=true;})}
            const enableboxes=()=>{ 
                boxes.forEach((box)=>{ 
                   box.disabled=false;
                 box.innerText="";
                msg.classList.add("hide");})}
                   const resetgame=()=>{ 
                    turnO=true; 
                    enableboxes();}
     let count=0; 
     let xWins=0;
     let oWins=0;              
    const showmsg=(winner)=>{ 
        msg.innerText="congratulations "+winner+" you are the winner!";
        msg.classList.remove("hide");
        dissableboxes();
        resetgame();
            
            
        if(winner=="X"){
            xWins++;
        }
        else{
            oWins++;
        }
        if(count==3){
            findwinner(xWins,oWins);
            msg.innerText="Game Over!";
            count=0;}}
            
    
    boxes.forEach((box)=>{ 
        box.addEventListener('click',()=>{
          if(turnO){
            box.innerText="O";
            box.style.color="black";
        
            turnO=false;
            } else{
            box.innerText="X";
            box.style.color="red";
        turnO=true;
      }
        box.disabled=true;
        checkwinner();  

        
    
        })  
    })
    const checkwinner=()=>{ 
        for(let pattern of winpatterns){
            let pos1value=boxes[pattern[0]].innerText;
            let pos2value=boxes[pattern[1]].innerText;      
            let pos3value=boxes[pattern[2]].innerText;
            if(pos1value!="" && pos2value!="" && pos3value!=""){
              if (pos1value==pos2value && pos2value==pos3value){
                alert("Winner is "+pos1value);
                console.log("Winner is "+pos1value);
                
                count++; 
                if(count<=3){
                    msg2.innerText="round"+count+" is over ";  
                } else{
                    msg2.innerText="Game Over!";}
                showmsg(pos1value);
                resetgame();
              }
            }
        }}
        reset.addEventListener('click',()=>
            {
            
                enableboxes();
            }
        )
        nwgm.addEventListener('click',()=>
            {
            
                resetgame();
            }
        )