// console.log('script is running');
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("[resetbtn]");
let newbtn = document.querySelector("[new-btn]");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");

let trunO = true; //player0 , playerX

const winPattens = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (trunO) {
            box.innerText = "O";
            trunO = false;
        } else {
            box.innerText = "X";
            trunO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const checkWinner = () => {
    for (let pattern of winPattens) {
        // console.log(pattern[0], pattern[1], pattern[2]);

        let pos1 = boxes[pattern[0]].textContent
        let pos2 = boxes[pattern[1]].textContent
        let pos3 = boxes[pattern[2]].textContent


        if (pos1 != "" && pos1 === pos2 && pos2 === pos3) {
            console.log(`winner is : ${pos1}`);
            showWinner(pos1);
            for(let box of boxes){
                box.disabled = true;
            }
        }
    }
};


const showWinner = (winner)=>{
    msg.textContent = `Game Winner is ${winner}`
    msg_container.classList.remove('hide');
}

const resetGame =() =>{
    trunO = true;
    enableButton();
    msg_container.classList.add('hide');
}

const enableButton = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.textContent = ""
    }
}

resetbtn.addEventListener('click',resetGame);
newbtn.addEventListener('click',resetGame);