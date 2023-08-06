class Board {
    constructor() {
        this.values = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];
        this.turn = 1;
    }

    getColor(x, y) {
        return this.values[y][x];
    }

    canMakeMove(row) {
        return (this.values[0][row] == 0);
    }

    checkWinner() {
        for (let i = 1; i < 3; i++) {
            let checking = i;
            let possibleWinner = (1 - (i - 1)) + 1;
            for (let c = 0; c < 4; c++) {
                for (let r = 0; r < 6; r++) {
                    if (this.values[r][c] == checking && this.values[r][c + 1] == checking && this.values[r][c + 2] == checking && this.values[r][c + 3] == checking) {
                        return possibleWinner
                    }
                }
            }
            for (let c = 0; c < 7; c++) {
                for (let r = 0; r < 3; r++) {
                    if (this.values[r][c] == checking && this.values[r + 1][c] == checking && this.values[r + 2][c] == checking && this.values[r + 3][c] == checking) {
                        return possibleWinner
                    }
                }
            }
            for (let c = 0; c < 4; c++) {
                for (let r = 3; r < 6; r++) {
                    if (this.values[r][c] == checking && this.values[r - 1][c + 1] == checking && this.values[r - 2][c + 2] == checking && this.values[r - 3][c + 3] == checking) {
                        return possibleWinner
                    }
                }
            }
            for (let c = 3; c < 7; c++) {
                for (let r = 3; r < 6; r++) {
                    if (this.values[r][c] == checking && this.values[r - 1][c - 1] == checking && this.values[r - 2][c - 2] == checking && this.values[r - 3][c - 3] == checking) {
                        return possibleWinner
                    }
                }
            }
        }
        return 0;
    }

    validMoves() {
        let valid = []
        for (let i = 0; i < 7; i++) {
            if (this.canMakeMove(i)) valid.push(i);
        }
        return valid
    }

    unmakeMove(row) {
        for (let i = 0; i < 6; i++) {
            if (this.values[i][row] != 0) {
                this.values[i][row] = 0;
                break;
            }
        }
        this.turn = (1 - (this.turn - 1)) + 1;
    }

    makeMove(row) {
        if (this.values[0][row] != 0) return;
        for (let i = 0; i < 6; i++) {
            if (this.values[i][row] != 0) {
                this.values[i - 1][row] = this.turn;
                this.turn = (1 - (this.turn - 1)) + 1;
                return;
            }
        }
        this.values[5][row] = this.turn;
        this.turn = (1 - (this.turn - 1)) + 1;

    }
}