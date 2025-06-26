    let boxes= document.querySelectorAll(".box");
    let newgame =document.querySelector(".newgame");
    let msg = document.querySelector(".msg");
    let msgcontainer = document.querySelector(".msgContainer");
    let winner ="" ;

    const resetgame  =()=>{
        turn0 = true;
        anable();
        msgcontainer.classList.add("hide");
    }
    let turn0 = true;
    let patterns = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ];
    boxes.forEach((box) =>{
        box.addEventListener("click", () =>{
        if (turn0){
                box.textContent = "0";
                box.style.color="rgb(245, 33, 10)";
                turn0 = false;
            }else{
                box.textContent = "X";
                box.style.color="rgb(4, 120, 209)";
                turn0 =true;
            }
            box.disabled = true;
            checkwin();
        });
    });
let checkwin = ()=>{
    for( let pattern of patterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 != "" &&  pos3 !=""){
            if (pos1 === pos2 && pos2 === pos3){
                winner =pos1
                showWin();
 
            }
        }
    }

}
const showWin = ()=>{
        msgcontainer.classList.remove("hide");
        msg.innerText =`Winner is ${winner}`;
        if (winner === "0"){
            msgcontainer.style.backgroundColor ="rgb(245, 79, 42)";
        }else{
            msgcontainer.style.backgroundColor ="rgb(31, 179, 242)";
        }

       disable();
    }
const disable =()=>{
    for( let box of boxes ){
        box.disabled =true;
    }
}
const anable =() =>{
    for( let box of boxes ){
        box.disabled =false ;
        box.innerText ="";
    }   
}
newgame.addEventListener("click",resetgame);

