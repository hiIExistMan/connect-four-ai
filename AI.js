function chooseMove(b,depth) {
    let maximizing = b.turn == 1;
    if (maximizing) {
        let moves = b.validMoves();
        let bestEval = -99;
        let bestMove;
        for(let move of moves) {
            b.makeMove(move);
            let eval = minimax(b,false,depth);
            b.unmakeMove(move);
            if(eval > bestEval) {
                bestEval = eval;
                bestMove = move;
            }
        }
        b.makeMove(bestMove);
    } else {
        let bestEval = 99;
        let bestMove;
        let moves = b.validMoves();
        for(let move of moves) {
            b.makeMove(move);
            let eval = minimax(b,true,depth);
            b.unmakeMove(move);
            if(eval < bestEval) {
                bestEval = eval;
                bestMove = move;
            }
        }
        b.makeMove(bestMove);
    }

}

function minimax(b,isMaximizing,d) {
    if(b.checkWinner() != 0) {
        return (b.checkWinner() *2)-3;
    }
    if(d == 0) {
        return 0;
    }
    if(isMaximizing) {
        let bestEval = -99;
        let moves = b.validMoves();
        for(let move of moves) {
            b.makeMove(move);
            let eval = minimax(b,false,d-1);
            b.unmakeMove(move);
            bestEval = max(eval,bestEval);
        }
        return bestEval;
    } else {
        let bestEval = 99;
        let moves = b.validMoves();
        for(let move of moves) {
            b.makeMove(move);
            let eval = minimax(b,true,d-1);
            b.unmakeMove(move);
            bestEval = min(eval,bestEval);
        }
        return bestEval;
    }
}