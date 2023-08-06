let w = 100;
let board;
function setup() {
    w = min(windowWidth/7,(windowHeight-36)/6);
    createCanvas(7*w,6*w);
    board = new Board();
}
let ai = true;
function mousePressed() {
    let r = floor(mouseX/w);
    if(board.turn != 1 && ai) return;
    if(r < 0 || r > 7) return;
    if(!board.canMakeMove(r)) return;
    board.makeMove(r);
    //setTimeout(() => board.unmakeMove(r),5000)
    setTimeout(() => chooseMove(board,5),500);
}

function draw() {
    background(51);
    for(let x = 0; x < 7; x++) {
        for(let y = 0; y < 6; y++) {
            noFill();
            stroke(127);
            strokeWeight(4);
            rect(x*w,y*w,w,w);
            let c = board.getColor(x,y);
            if(c == 0) fill(51);
            else if(c == 1) fill(255,0,0);
            else fill(255,255,0);
            circle((x*w)+w/2,(y*w)+w/2,w-20);
            
        }
    }
    if(board.checkWinner() != 0) {
        createP(`Winner is ${board.checkWinner() == 2 ? "red" : "yellow"}`);
        noLoop();
    }
}